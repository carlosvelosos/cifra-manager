import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import { join } from "path";

export async function GET(
  request: Request,
  context: { params: Promise<{ artist: string }> }
) {
  try {
    const { artist } = await context.params;
    const artistPath = join(process.cwd(), "app", "artists", artist);
    const songFolders = await readdir(artistPath, { withFileTypes: true });

    const songSlugs = songFolders
      .filter((dirent) => dirent.isDirectory())
      .map((folder) => folder.name)
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
