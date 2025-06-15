#!/usr/bin/env node

/**
 * This script generates the artists data file from the file system structure.
 * Run this script whenever you add new artists or songs to keep the data in sync.
 *
 * Usage: node scripts/generate-artists-data.js
 */

const fs = require("fs").promises;
const path = require("path");

function formatSongTitle(folderName) {
  return folderName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatArtistName(folderName) {
  const artistMap = {
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

async function generateArtistsData() {
  try {
    const artistsPath = path.join(process.cwd(), "app", "artists");
    const artistFolders = await fs.readdir(artistsPath, {
      withFileTypes: true,
    });

    const artists = await Promise.all(
      artistFolders
        .filter((dirent) => dirent.isDirectory())
        .map(async (artistFolder) => {
          const artistPath = path.join(artistsPath, artistFolder.name);
          const songFolders = await fs.readdir(artistPath, {
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

    // Sort artists by name
    artists.sort((a, b) => a.name.localeCompare(b.name));

    const fileContent = `// Static artists data generated from the file system
// This ensures the data is available even in deployed environments
// Generated on: ${new Date().toISOString()}

export interface Song {
  title: string;
  href: string;
}

export interface Artist {
  id: string;
  name: string;
  href: string;
  songs: Song[];
}

export const artistsData: Artist[] = ${JSON.stringify(artists, null, 2)};`;

    const outputPath = path.join(process.cwd(), "lib", "artists-data.ts");
    await fs.writeFile(outputPath, fileContent);

    console.log(`✅ Generated artists data file: ${outputPath}`);
    console.log(`📊 Total artists: ${artists.length}`);
    console.log(
      `🎵 Total songs: ${artists.reduce(
        (sum, artist) => sum + artist.songs.length,
        0
      )}`
    );
  } catch (error) {
    console.error("❌ Error generating artists data:", error);
    process.exit(1);
  }
}

generateArtistsData();
