import { NextResponse } from "next/server";
import { artistsData } from "@/lib/artists-data";

export async function GET() {
  try {
    return NextResponse.json(
      { artists: artistsData },
      {
        headers: {
          // Cache for 1 hour, serve stale for 1 day while revalidating
          "Cache-Control":
            "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
          "CDN-Cache-Control": "public, max-age=86400",
          "Vercel-CDN-Cache-Control": "public, max-age=86400",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching artists:", error);
    return NextResponse.json(
      { error: "Failed to fetch artists" },
      { status: 500 }
    );
  }
}
