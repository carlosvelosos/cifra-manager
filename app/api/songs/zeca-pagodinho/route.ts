// filepath: c:\\Users\\carlo\\GITHUB\\cifra-manager\\app\\api\\songs\\zeca-pagodinho\\route.ts
import { NextResponse } from "next/server";
import { artistsData } from "@/lib/artists-data";

export async function GET() {
  try {
    // Find Zeca Pagodinho in our static data
    const artistData = artistsData.find((a) => a.id === "zeca-pagodinho");

    if (!artistData) {
      return NextResponse.json(
        { error: "Zeca Pagodinho artist not found" },
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
    console.error("Error fetching Zeca Pagodinho songs:", error);
    return NextResponse.json(
      { error: "Failed to fetch Zeca Pagodinho songs" },
      { status: 500 }
    );
  }
}
