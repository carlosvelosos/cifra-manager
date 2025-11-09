import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

// Types for the global songs data
export interface GlobalSong {
  artistId: string;
  artistName: string;
  songSlug: string;
  songTitle: string;
  href: string;
  globalIndex: number;
}

interface Song {
  title: string;
  href: string;
}

interface Artist {
  id: string;
  name: string;
  href: string;
  songs: Song[];
}

// Cache the result for performance
let cachedGlobalSongs: GlobalSong[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Dynamically read artists-data to get all songs
function getArtistsData(): Artist[] {
  const dataPath = path.join(process.cwd(), "lib", "artists-data.ts");
  const fileContent = fs.readFileSync(dataPath, "utf-8");

  // Extract the JSON array from the TypeScript file
  const match = fileContent.match(
    /export const artistsData[:\s]*Artist\[\]\s*=\s*(\[[\s\S]*\]);/
  );
  if (!match) {
    throw new Error("Could not parse artists-data.ts");
  }

  return JSON.parse(match[1]);
}

// Extract song slug from href path
function extractSlugFromHref(href: string): string {
  const parts = href.split("/");
  return parts[parts.length - 1];
}

// Generate the global songs list
function generateGlobalSongsList(): GlobalSong[] {
  const artistsData = getArtistsData();
  const globalSongs: GlobalSong[] = [];
  let globalIndex = 0;

  // Flatten all songs across all artists
  artistsData.forEach((artist) => {
    artist.songs.forEach((song) => {
      globalSongs.push({
        artistId: artist.id,
        artistName: artist.name,
        songSlug: extractSlugFromHref(song.href),
        songTitle: song.title,
        href: song.href,
        globalIndex: globalIndex++,
      });
    });
  });

  return globalSongs;
}

export async function GET() {
  try {
    const now = Date.now();

    // Return cached data if still valid
    if (cachedGlobalSongs && now - cacheTimestamp < CACHE_DURATION) {
      console.log("🎵 Returning cached global songs list");
      return NextResponse.json({
        songs: cachedGlobalSongs,
        totalCount: cachedGlobalSongs.length,
        cached: true,
      });
    }

    // Generate fresh data
    console.log("🎵 Generating fresh global songs list");
    const globalSongs = generateGlobalSongsList();

    // Update cache
    cachedGlobalSongs = globalSongs;
    cacheTimestamp = now;

    console.log(
      `✅ Generated ${globalSongs.length} songs across ${
        new Set(globalSongs.map((s) => s.artistId)).size
      } artists`
    );

    return NextResponse.json({
      songs: globalSongs,
      totalCount: globalSongs.length,
      cached: false,
    });
  } catch (error) {
    console.error("❌ Error generating global songs list:", error);
    return NextResponse.json(
      { error: "Failed to fetch global songs list" },
      { status: 500 }
    );
  }
}
