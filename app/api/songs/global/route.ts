import { NextResponse } from "next/server";
import { artistsData, type Artist, type Song } from "@/lib/artists-data";

// Types for the global songs data
export interface GlobalSong {
  artistId: string;
  artistName: string;
  songSlug: string;
  songTitle: string;
  href: string;
  globalIndex: number;
}

// Cache the result for performance
let cachedGlobalSongs: GlobalSong[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Extract song slug from href path
function extractSlugFromHref(href: string): string {
  const parts = href.split("/");
  return parts[parts.length - 1];
}

// Generate the global songs list
function generateGlobalSongsList(): GlobalSong[] {
  const globalSongs: GlobalSong[] = [];
  let globalIndex = 0;

  // Flatten all songs across all artists
  artistsData.forEach((artist: Artist) => {
    artist.songs.forEach((song: Song) => {
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
