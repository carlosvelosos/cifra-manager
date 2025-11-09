import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

/**
 * API Route: Create Pages
 *
 * Creates artist and song page files after user approval.
 * Also regenerates the artists-data.ts navigation file.
 */

interface CreatePageRequest {
  artist: string;
  artistSlug: string;
  song: string;
  songSlug: string;
  content: string;
  url: string;
}

// Template for the song page.tsx file
const pageTemplate = `import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: URL_PLACEHOLDER

const cifra = \`CIFRA_CONTENT\`;

const [title, ...restOfCifra] = cifra.split("\\n\\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\\n\\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\\n\\n");

export default function COMPONENT_NAME() {
  return (
    <>
      <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
`;

// Template for the artist page.tsx file
const artistPageTemplate = `"use client";

import ArtistPage from "@/components/artist-page";

export default function ARTIST_COMPONENT_NAME() {
  return (
    <ArtistPage
      artistSlug="ARTIST_SLUG"
      artistDisplayName="ARTIST_DISPLAY_NAME"
      description="ARTIST_DESCRIPTION"
    />
  );
}
`;

/**
 * Create component name from song name
 */
function createComponentName(songName: string): string {
  return (
    songName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]/g, " ")
      .split(" ")
      .filter((word) => word.length > 0)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("") + "Page"
  );
}

/**
 * Create artist component name from artist slug
 */
function createArtistComponentName(artistSlug: string): string {
  return (
    artistSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("") + "Page"
  );
}

/**
 * Create artist description
 */
function createArtistDescription(artistDisplayName: string): string {
  return `Discover the amazing songs of ${artistDisplayName}. Enjoy their most beloved tracks with complete chords and lyrics for guitar and other instruments.`;
}

/**
 * Create artist page if it doesn't exist
 */
function createArtistPageIfNotExists(
  artistPath: string,
  artistSlug: string,
  artistDisplayName: string
): boolean {
  const artistPagePath = path.join(artistPath, "page.tsx");

  // Check if artist page already exists
  if (fs.existsSync(artistPagePath)) {
    return false; // Already exists
  }

  try {
    const artistComponentName = createArtistComponentName(artistSlug);
    const artistDescription = createArtistDescription(artistDisplayName);

    const artistPageContent = artistPageTemplate
      .replace("ARTIST_COMPONENT_NAME", artistComponentName)
      .replace("ARTIST_SLUG", artistSlug)
      .replace("ARTIST_DISPLAY_NAME", artistDisplayName)
      .replace("ARTIST_DESCRIPTION", artistDescription);

    fs.writeFileSync(artistPagePath, artistPageContent, "utf8");
    return true; // Successfully created
  } catch (error) {
    console.error(`Error creating artist page for ${artistSlug}:`, error);
    return false;
  }
}

/**
 * Create song page
 */
function createSongPage(
  artistPath: string,
  songSlug: string,
  songName: string,
  content: string,
  url: string
): { success: boolean; error?: string } {
  try {
    const songPath = path.join(artistPath, songSlug);

    // Check if song directory already exists
    if (fs.existsSync(songPath)) {
      return { success: false, error: "Song directory already exists" };
    }

    // Create song directory
    fs.mkdirSync(songPath, { recursive: true });

    // Create title from content (first line or song name)
    const contentLines = content.split("\n");
    const title = contentLines[0]?.trim() || songName;

    // Create page content
    const componentName = createComponentName(songName);
    const cifraContent = content;

    const pageContent = pageTemplate
      .replace("URL_PLACEHOLDER", url)
      .replace("CIFRA_CONTENT", cifraContent)
      .replace("COMPONENT_NAME", componentName);

    // Write page.tsx file
    const pagePath = path.join(songPath, "page.tsx");
    fs.writeFileSync(pagePath, pageContent, "utf8");

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Regenerate artists data
 */
function regenerateArtistsData(): { success: boolean; error?: string } {
  try {
    const generateScriptPath = path.join(
      process.cwd(),
      "scripts",
      "generate-artists-data.js"
    );

    if (!fs.existsSync(generateScriptPath)) {
      return {
        success: false,
        error: "generate-artists-data.js script not found",
      };
    }

    execSync(`node "${generateScriptPath}"`, { stdio: "inherit" });
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to regenerate artists data",
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pages } = body as { pages: CreatePageRequest[] };

    if (!pages || !Array.isArray(pages) || pages.length === 0) {
      return NextResponse.json(
        { error: "Please provide an array of pages to create" },
        { status: 400 }
      );
    }

    const artistsDir = path.join(process.cwd(), "app", "artists");
    const results: Array<{
      artist: string;
      song: string;
      success: boolean;
      error?: string;
    }> = [];

    // Create pages
    for (const page of pages) {
      const { artist, artistSlug, song, songSlug, content, url } = page;

      try {
        const artistPath = path.join(artistsDir, artistSlug);

        // Create artist directory if it doesn't exist
        if (!fs.existsSync(artistPath)) {
          fs.mkdirSync(artistPath, { recursive: true });
        }

        // Create artist page if it doesn't exist
        createArtistPageIfNotExists(artistPath, artistSlug, artist);

        // Create song page
        const songResult = createSongPage(
          artistPath,
          songSlug,
          song,
          content,
          url
        );

        results.push({
          artist,
          song,
          success: songResult.success,
          error: songResult.error,
        });
      } catch (error) {
        results.push({
          artist,
          song,
          success: false,
          error: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }

    // Regenerate artists data
    const regenResult = regenerateArtistsData();

    return NextResponse.json({
      results,
      dataRegenerated: regenResult.success,
      dataRegenError: regenResult.error,
    });
  } catch (error) {
    console.error("Error creating pages:", error);
    return NextResponse.json(
      { error: "Failed to create pages" },
      { status: 500 }
    );
  }
}
