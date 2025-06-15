import { NextResponse } from "next/server";
import { artistsData } from "@/lib/artists-data";

export async function GET(
  request: Request,
  context: { params: Promise<{ artist: string }> }
) {
  try {
    const { artist } = await context.params;

    // Find the artist in our static data
    const artistData = artistsData.find((a) => a.id === artist);

    if (!artistData) {
      return NextResponse.json(
        { error: `Artist ${artist} not found` },
        { status: 404 }
      );
    }

    // Extract song slugs from the href paths
    const songSlugs = artistData.songs
      .map((song) => {
        // Extract the song slug from the href (e.g., "/artists/artist-name/song-slug")
        const parts = song.href.split("/");
        return parts[parts.length - 1];
      })
      .sort();

    return NextResponse.json({
      songs: songSlugs,
      count: songSlugs.length,
      artist: artist,
    });
  } catch (error) {
    const { artist } = await context.params;
    console.error(`Error fetching songs for ${artist}:`, error);
    return NextResponse.json(
      { error: `Failed to fetch songs for ${artist}` },
      { status: 500 }
    );
  }
}
