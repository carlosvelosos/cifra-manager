import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import { join } from "path";

export async function GET() {
  try {
    const artistPath = join(process.cwd(), "app", "artists", "revelacao");
    const songFolders = await readdir(artistPath, { withFileTypes: true });

    const songSlugs = songFolders
      .filter((dirent) => dirent.isDirectory())
      .map((folder) => folder.name)
      .sort();

    return NextResponse.json({
      songs: songSlugs,
      count: songSlugs.length,
    });
  } catch (error) {
    console.error("Error fetching songs:", error);
    // Fallback to hardcoded list if file system access fails
    const fallbackSongs = [
      "a-pureza-da-flor",
      "amor-sem-fim",
      "baixa-essa-guarda",
      "compasso-do-amor",
      "conselho",
      "coracao-radiante",
      "deixa-acontecer",
      "deixa-alagar",
      "essencia-da-paixao",
      "fala-baixinho-shiii",
      "grades-do-coracao",
      "novos-tempos",
      "o-queiroz",
      "preciso-te-amar",
      "primeira-estrela",
      "so-depois",
      "ta-escrito",
      "talvez",
      "trilha-do-amor",
      "velocidade-da-luz",
    ];

    return NextResponse.json({
      songs: fallbackSongs,
      count: fallbackSongs.length,
    });
  }
}
