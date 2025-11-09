import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

// Disable caching to always get fresh data after page creation
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Dynamically read artists-data to avoid module cache issues
function getArtistsData() {
  const dataPath = path.join(process.cwd(), "lib", "artists-data.ts");
  console.log("📂 Reading artists-data from:", dataPath);

  const fileContent = fs.readFileSync(dataPath, "utf-8");
  console.log("📄 File content length:", fileContent.length);

  // Extract the JSON array from the TypeScript file
  // Use greedy match to get the entire array
  const match = fileContent.match(
    /export const artistsData[:\s]*Artist\[\]\s*=\s*(\[[\s\S]*\]);/
  );
  if (!match) {
    console.error("❌ Failed to parse artists-data.ts");
    console.error("File preview:", fileContent.substring(0, 500));
    throw new Error("Could not parse artists-data.ts");
  }

  console.log("📦 Matched JSON length:", match[1].length);
  const parsedData = JSON.parse(match[1]);
  console.log("✅ Parsed artists count:", parsedData.length);
  return parsedData;
}

export async function GET(
  request: Request,
  context: { params: Promise<{ artist: string }> }
) {
  try {
    const { artist } = await context.params;
    console.log("\n🎵 API Request for artist:", artist);

    // Get fresh data on every request
    const artistsData = getArtistsData();

    // Find the artist in our static data
    const artistData = artistsData.find((a: any) => a.id === artist);

    if (!artistData) {
      console.log("❌ Artist not found:", artist);
      return NextResponse.json(
        { error: `Artist ${artist} not found` },
        { status: 404 }
      );
    }

    console.log("✅ Found artist:", artistData.name);
    console.log("📚 Songs in data:", artistData.songs.length);
    console.log(
      "🎼 Song titles:",
      artistData.songs.map((s: any) => s.title).join(", ")
    );

    // Extract song slugs from the href paths
    const songSlugs = artistData.songs
      .map((song: any) => {
        // Extract the song slug from the href (e.g., "/artists/artist-name/song-slug")
        const parts = song.href.split("/");
        return parts[parts.length - 1];
      })
      .sort();

    console.log("📤 Returning song slugs:", songSlugs.join(", "));
    console.log("📊 Total count:", songSlugs.length);

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
