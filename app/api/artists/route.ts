import { NextResponse } from "next/server";
import { artistsData } from "@/lib/artists-data";

export async function GET() {
  try {
    return NextResponse.json({ artists: artistsData });
  } catch (error) {
    console.error("Error fetching artists:", error);
    return NextResponse.json(
      { error: "Failed to fetch artists" },
      { status: 500 }
    );
  }
}
