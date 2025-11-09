import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";
import https from "https";
import http from "http";

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
            new Error(`Failed to fetch URL. Status code: ${res.statusCode}`)
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
 */
function extractPreContent(html: string): string[] {
  const preContents: string[] = [];
  const preRegex = /<pre[^>]*>([\s\S]*?)<\/pre>/gi;
  let match;

  while ((match = preRegex.exec(html)) !== null) {
    // Decode HTML entities
    let content = match[1]
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, " ");

    preContents.push(content);
  }

  return preContents;
}

/**
 * Extract artist and song from Cifra Club URL
 * Format: https://www.cifraclub.com.br/{artist}/{song}/
 */
function extractInfoFromUrl(
  url: string
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
  } catch (err) {
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
 * Check if artist and song pages exist
 */
function checkExistence(artistSlug: string, songSlug: string) {
  const artistsDir = path.join(process.cwd(), "app", "artists");
  const artistPath = path.join(artistsDir, artistSlug);
  const songPath = path.join(artistPath, songSlug);

  const artistExists = fs.existsSync(artistPath);
  const songExists =
    fs.existsSync(songPath) && fs.existsSync(path.join(songPath, "page.tsx"));

  return {
    artistExists,
    songExists,
    artistPath: artistExists ? `/artists/${artistSlug}` : undefined,
    songPath: songExists ? `/artists/${artistSlug}/${songSlug}` : undefined,
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

    const { artist: artistSlug, song: songSlug } = info;
    const artist = slugToDisplayName(artistSlug);
    const song = slugToDisplayName(songSlug);

    // Check if pages already exist
    const existence = checkExistence(artistSlug, songSlug);

    if (existence.songExists) {
      return {
        url,
        status: "exists",
        artist,
        artistSlug,
        song,
        songSlug,
        ...existence,
      };
    }

    // Fetch content from URL
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
        ...existence,
      };
    }

    // Get the first <pre> content (chord content)
    const content = preContents[0];

    return {
      url,
      status: "success",
      artist,
      artistSlug,
      song,
      songSlug,
      content,
      ...existence,
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
        { status: 400 }
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
      { status: 500 }
    );
  }
}
