import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";
import https from "https";
import http from "http";
import { ARTIST_ALIASES } from "@/lib/artist-aliases";

/**
 * API Route: Process URLs
 *
 * Takes a list of Cifra Club URLs, fetches content, extracts artist/song info,
 * checks if pages already exist, and returns preview data for user approval.
 */

interface ProcessedUrl {
  url: string;
  status: "success" | "error" | "exists";
  artist?: string;
  artistSlug?: string;
  song?: string;
  songSlug?: string;
  content?: string;
  error?: string;
  artistExists?: boolean;
  songExists?: boolean;
  artistPath?: string;
  songPath?: string;
  aliasResolved?: boolean;
  originalSlug?: string;
  suggestions?: string[];
}

/**
 * Fetch HTML content from a URL
 */
function fetchURL(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;

    protocol
      .get(url, (res) => {
        let data = "";

        // Handle redirect
        if (res.statusCode === 301 || res.statusCode === 302) {
          return fetchURL(res.headers.location!).then(resolve).catch(reject);
        }

        // Check for successful response
        if (res.statusCode !== 200) {
          reject(
            new Error(`Failed to fetch URL. Status code: ${res.statusCode}`),
          );
          return;
        }

        // Accumulate data
        res.on("data", (chunk) => {
          data += chunk;
        });

        // Resolve with complete data
        res.on("end", () => {
          resolve(data);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

/**
 * Extract content from <pre> tags
 * Preserves HTML tags like <b>, <span>, etc. while decoding escaped entities
 */
function extractPreContent(html: string): string[] {
  const preContents: string[] = [];
  const preRegex = /<pre[^>]*>([\s\S]*?)<\/pre>/gi;
  let match;

  while ((match = preRegex.exec(html)) !== null) {
    // Get the content - HTML tags are already in proper format in Cifra Club
    // We only need to decode specific HTML entities that should be characters
    const content = match[1]
      .replace(/&amp;/g, "&") // & character
      .replace(/&quot;/g, '"') // " character
      .replace(/&#39;/g, "'") // ' character
      .replace(/&nbsp;/g, " "); // non-breaking space

    // DO NOT decode &lt; and &gt; - these would break HTML tags like <b>, <span>
    // The content from Cifra Club already has proper HTML tags, not escaped ones

    preContents.push(content);
  }

  return preContents;
}

/**
 * Extract artist and song from Cifra Club URL
 * Format: https://www.cifraclub.com.br/{artist}/{song}/
 */
function extractInfoFromUrl(
  url: string,
): { artist: string; song: string } | null {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split("/").filter((p) => p);

    if (pathParts.length >= 2) {
      return {
        artist: pathParts[0],
        song: pathParts[1],
      };
    }
  } catch {
    // Invalid URL
  }
  return null;
}

/**
 * Convert slug to display name
 */
function slugToDisplayName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Find fuzzy artist slug matches in the app/artists directory.
 * Checks if any word segment of an existing folder name matches the incoming slug.
 * E.g. "pixote" matches "grupo-pixote" because "pixote" is a segment.
 */
function findFuzzySuggestions(artistSlug: string): string[] {
  const artistsDir = path.join(process.cwd(), "app", "artists");
  try {
    const folders = fs
      .readdirSync(artistsDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    return folders.filter((folder) => {
      const segments = folder.split("-");
      return segments.includes(artistSlug);
    });
  } catch {
    return [];
  }
}

/**
 * Check if artist and song pages exist.
 * Resolves alias map first; falls back to fuzzy suggestions if no match.
 */
function checkExistence(artistSlug: string, songSlug: string) {
  const artistsDir = path.join(process.cwd(), "app", "artists");

  // 1. Check alias map
  const aliasSlug = ARTIST_ALIASES[artistSlug];
  const aliasResolved = !!aliasSlug;
  const resolvedSlug = aliasSlug ?? artistSlug;

  const artistPath = path.join(artistsDir, resolvedSlug);
  const songPath = path.join(artistPath, songSlug);

  const artistExists = fs.existsSync(artistPath);
  const songExists =
    fs.existsSync(songPath) && fs.existsSync(path.join(songPath, "page.tsx"));

  // 2. Fuzzy suggestions — only when artist not found and no alias resolved it
  const suggestions =
    !artistExists && !aliasResolved ? findFuzzySuggestions(artistSlug) : [];

  return {
    resolvedSlug,
    aliasResolved,
    artistExists,
    songExists,
    suggestions,
    artistPath: artistExists ? `/artists/${resolvedSlug}` : undefined,
    songPath: songExists ? `/artists/${resolvedSlug}/${songSlug}` : undefined,
  };
}

/**
 * Process a single URL
 */
async function processUrl(url: string): Promise<ProcessedUrl> {
  try {
    // Extract artist and song from URL
    const info = extractInfoFromUrl(url);
    if (!info) {
      return {
        url,
        status: "error",
        error: "Invalid Cifra Club URL format",
      };
    }

    const { artist: originalSlug, song: songSlug } = info;
    const song = slugToDisplayName(songSlug);

    // Check if pages already exist (resolves alias + fuzzy suggestions)
    const existence = checkExistence(originalSlug, songSlug);
    const { resolvedSlug, aliasResolved, suggestions } = existence;
    const artistSlug = resolvedSlug;
    const artist = slugToDisplayName(artistSlug);

    // Fetch content from URL (even if song exists, for overwrite option)
    const html = await fetchURL(url);
    const preContents = extractPreContent(html);

    if (preContents.length === 0) {
      return {
        url,
        status: "error",
        artist,
        artistSlug,
        song,
        songSlug,
        error: "No chord content found in page",
        aliasResolved,
        originalSlug: aliasResolved ? originalSlug : undefined,
        suggestions,
        artistExists: existence.artistExists,
        songExists: existence.songExists,
        artistPath: existence.artistPath,
        songPath: existence.songPath,
      };
    }

    // Get the first <pre> content (chord content)
    const content = preContents[0];

    // Return status "exists" if song exists, but include content for overwrite option
    return {
      url,
      status: existence.songExists ? "exists" : "success",
      artist,
      artistSlug,
      song,
      songSlug,
      content,
      aliasResolved,
      originalSlug: aliasResolved ? originalSlug : undefined,
      suggestions,
      artistExists: existence.artistExists,
      songExists: existence.songExists,
      artistPath: existence.artistPath,
      songPath: existence.songPath,
    };
  } catch (error) {
    return {
      url,
      status: "error",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { urls } = body;

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: "Please provide an array of URLs" },
        { status: 400 },
      );
    }

    // Process all URLs
    const results: ProcessedUrl[] = [];
    for (const url of urls) {
      const result = await processUrl(url.trim());
      results.push(result);
    }

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Error processing URLs:", error);
    return NextResponse.json(
      { error: "Failed to process URLs" },
      { status: 500 },
    );
  }
}
