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
    "almir-sater": "Almir Sater",
    "bruno-e-marrone": "Bruno E Marrone",
    "chitaozinho-e-xororo": "Chitaozinho E Xororo",
    "cristiano-araujo": "Cristiano Araujo",
    "gian-e-giovani": "Gian E Giovani",
    "henrique-e-juliano": "Henrique E Juliano",
    "hugo-e-guilherme": "Hugo E Guilherme",
    "marilia-mendonca": "Marilia Mendonca",
    "matogrosso-e-mathias": "Matogrosso E Mathias",
    "milionario-e-jose-rico": "Milionario E Jose Rico",
    "trio-parada-dura": "Trio Parada Dura",
    "zeze-de-camargo-e-luciano": "Zeze De Camargo E Luciano",
    "charlie-brown-jr": "Charlie Brown Jr",
    cpm22: "Cpm22",
    natiruts: "Natiruts",
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
