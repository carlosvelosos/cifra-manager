// filepath: c:\\Users\\carlo\\GITHUB\\cifra-manager\\app\\api\\songs\\zeca-pagodinho\\route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // Correctly construct the path to the 'app/zeca-pagodinho' directory
    const songsDirectory = path.join(process.cwd(), "app", "zeca-pagodinho");
    const entries = fs.readdirSync(songsDirectory, { withFileTypes: true });

    const songSlugs = entries
      .filter((entry) => entry.isDirectory()) // Ensure we only list directories
      .map((entry) => entry.name)
      .sort(); // Sort slugs alphabetically for consistent navigation order

    return NextResponse.json({ songs: songSlugs });
  } catch (error) {
    console.error("Failed to list songs:", error);
    // It's good practice to type the error if possible, or at least log its message
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { error: "Failed to list songs", details: errorMessage },
      { status: 500 }
    );
  }
}
