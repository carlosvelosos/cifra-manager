import { NextResponse } from "next/server";
import { artistsData } from "@/lib/artists-data";

export async function GET() {
  try {
    // Find Revelacao in our static data
    const artistData = artistsData.find((a) => a.id === "revelacao");

    if (!artistData) {
      return NextResponse.json(
        { error: "Revelacao artist not found" },
        { status: 404 }
      );
    }

    // Extract song slugs from the href paths
    const songSlugs = artistData.songs
      .map((song) => {
        const parts = song.href.split("/");
        return parts[parts.length - 1];
      })
      .sort();

    return NextResponse.json({
      songs: songSlugs,
      count: songSlugs.length,
    });
  } catch (error) {
    console.error("Error fetching Revelacao songs:", error);
    return NextResponse.json(
      { error: "Failed to fetch Revelacao songs" },
      { status: 500 }
    );
  }
}
