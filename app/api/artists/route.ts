import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import { join } from "path";

function formatSongTitle(folderName: string): string {
  return folderName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatArtistName(folderName: string): string {
  const artistMap: { [key: string]: string } = {
    "zeca-pagodinho": "Zeca Pagodinho",
    revelacao: "Grupo Revelação",
  };

  return artistMap[folderName] || formatSongTitle(folderName);
}

export async function GET() {
  try {
    const artistsPath = join(process.cwd(), "app", "artists");
    const artistFolders = await readdir(artistsPath, { withFileTypes: true });

    const artists = await Promise.all(
      artistFolders
        .filter((dirent) => dirent.isDirectory())
        .map(async (artistFolder) => {
          const artistPath = join(artistsPath, artistFolder.name);
          const songFolders = await readdir(artistPath, {
            withFileTypes: true,
          });

          const songs = songFolders
            .filter((dirent) => dirent.isDirectory())
            .map((songFolder) => ({
              title: formatSongTitle(songFolder.name),
              href: `/artists/${artistFolder.name}/${songFolder.name}`,
            }))
            .sort((a, b) => a.title.localeCompare(b.title));

          return {
            id: artistFolder.name,
            name: formatArtistName(artistFolder.name),
            href: `/artists/${artistFolder.name}`,
            songs,
          };
        })
    );

    return NextResponse.json({ artists });
  } catch (error) {
    console.error("Error fetching artists:", error);
    return NextResponse.json(
      { error: "Failed to fetch artists" },
      { status: 500 }
    );
  }
}
