import { NextResponse } from "next/server";
import { artistsData } from "@/lib/artists-data";

// Disable caching to always get fresh data after page creation
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(
  request: Request,
  context: { params: Promise<{ artist: string }> }
) {
  try {
    const { artist } = await context.params;
    console.log("\n🎵 [API] Request for artist:", artist);
    console.log("📊 [API] Total artists in data:", artistsData.length);
    console.log(
      "🔍 [API] Available artist IDs:",
      artistsData.map((a) => a.id).join(", ")
    );

    // Find the artist in our static data
    const artistData = artistsData.find((a) => a.id === artist);

    if (!artistData) {
      console.log("❌ [API] Artist not found:", artist);
      console.log("🔍 [API] Searched in:", artistsData.length, "artists");
      return NextResponse.json(
        {
          error: `Artist ${artist} not found`,
          availableArtists: artistsData.map((a) => a.id).slice(0, 10),
          totalArtists: artistsData.length,
        },
        { status: 404 }
      );
    }

    console.log("✅ [API] Found artist:", artistData.name);
    console.log("📚 [API] Songs in data:", artistData.songs.length);
    console.log(
      "🎼 [API] Song titles:",
      artistData.songs
        .map((s) => s.title)
        .slice(0, 5)
        .join(", "),
      artistData.songs.length > 5
        ? `... (${artistData.songs.length} total)`
        : ""
    );

    // Extract song slugs from the href paths
    const songSlugs = artistData.songs
      .map((song) => {
        // Extract the song slug from the href (e.g., "/artists/artist-name/song-slug")
        const parts = song.href.split("/");
        return parts[parts.length - 1];
      })
      .sort();

    console.log(
      "📤 [API] Returning song slugs:",
      songSlugs.slice(0, 5).join(", "),
      songSlugs.length > 5 ? `... (${songSlugs.length} total)` : ""
    );
    console.log("📊 [API] Total count:", songSlugs.length);

    return NextResponse.json({
      songs: songSlugs,
      count: songSlugs.length,
      artist: artist,
    });
  } catch (error) {
    const { artist } = await context.params;
    console.error(`❌ [API] Error fetching songs for ${artist}:`, error);
    console.error("❌ [API] Error details:", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      artistsDataAvailable: typeof artistsData !== "undefined",
      artistsDataLength: artistsData?.length,
    });
    return NextResponse.json(
      {
        error: `Failed to fetch songs for ${artist}`,
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
