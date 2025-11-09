/**
 * Script to fix backslash escape sequences in cifra template literals
 */

const fs = require("fs").promises;
const path = require("path");

/**
 * Fix backslashes in a single file
 */
async function fixFile(filePath) {
  try {
    let content = await fs.readFile(filePath, "utf8");
    const original = content;

    // Find the cifra template literal
    const cifraMatch = content.match(/const cifra = `([^`]+)`/s);
    if (!cifraMatch) {
      return { status: "skipped", reason: "no cifra found" };
    }

    const cifraContent = cifraMatch[1];

    // Fix backslash-digit patterns: replace \0-9 with \\0-9
    // But only if it's a single backslash (not already escaped)
    // Use negative lookbehind to ensure we're not already escaped
    const fixedCifra = cifraContent.replace(/(?<!\\)\\([0-9])/g, "\\\\$1");

    if (cifraContent === fixedCifra) {
      return { status: "skipped", reason: "no changes needed" };
    }

    // Replace in content
    content = content.replace(
      /const cifra = `[^`]+`/s,
      `const cifra = \`${fixedCifra}\``
    );

    // Write back
    await fs.writeFile(filePath, content, "utf8");

    return { status: "fixed" };
  } catch (err) {
    return { status: "error", reason: err.message };
  }
}

/**
 * Find all song page files
 */
async function findSongPages(artistsDir) {
  const songs = [];

  try {
    const artists = await fs.readdir(artistsDir);

    for (const artist of artists) {
      const artistPath = path.join(artistsDir, artist);
      const stats = await fs.stat(artistPath);

      if (stats.isDirectory()) {
        const songDirs = await fs.readdir(artistPath);

        for (const song of songDirs) {
          const songPath = path.join(artistPath, song);
          const songStats = await fs.stat(songPath);

          if (songStats.isDirectory()) {
            const pagePath = path.join(songPath, "page.tsx");

            try {
              await fs.access(pagePath);
              songs.push({
                artist,
                song,
                filePath: pagePath,
              });
            } catch (err) {
              // page.tsx doesn't exist, skip
            }
          }
        }
      }
    }
  } catch (err) {
    console.error("Error scanning artists directory:", err.message);
  }

  return songs;
}

/**
 * Main function
 */
async function main() {
  const artistsDir = path.join(__dirname, "..", "app", "artists");

  console.log("Scanning for song pages...\n");

  const songs = await findSongPages(artistsDir);

  console.log(`Found ${songs.length} song page(s).\n`);

  let fixed = 0;
  let skipped = 0;
  let errors = 0;

  for (const song of songs) {
    const result = await fixFile(song.filePath);

    if (result.status === "fixed") {
      console.log(`✅ ${song.artist}/${song.song}`);
      fixed++;
    } else if (result.status === "skipped") {
      skipped++;
    } else {
      console.log(`❌ ${song.artist}/${song.song}: ${result.reason}`);
      errors++;
    }
  }

  console.log(`\n${"=".repeat(60)}`);
  console.log("Summary:");
  console.log(`  Total: ${songs.length}`);
  console.log(`  Fixed: ${fixed}`);
  console.log(`  Skipped: ${skipped}`);
  console.log(`  Errors: ${errors}`);
  console.log("=".repeat(60));
}

// Run the script
if (require.main === module) {
  main().catch((err) => {
    console.error("Fatal error:", err);
    process.exit(1);
  });
}

module.exports = {
  fixFile,
  findSongPages,
};
