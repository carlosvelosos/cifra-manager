/**
 * Script to migrate all song pages to the new format with convertToStructure
 *
 * This script:
 * 1. Finds all song page.tsx files
 * 2. Updates imports to include convertToStructure
 * 3. Removes FramerTransitionWrapper if present
 * 4. Updates the component to use cifraData prop with convertToStructure
 */

const fs = require("fs").promises;
const path = require("path");

/**
 * Extract URL reference from page content
 */
function extractURLReference(content) {
  const urlMatch = content.match(/\/\/\s*URL:\s*(.+)/);
  return urlMatch ? urlMatch[1].trim() : null;
}

/**
 * Migrate a single page to new format
 */
async function migratePage(filePath) {
  try {
    const content = await fs.readFile(filePath, "utf8");

    // Skip if already has convertToStructure
    if (content.includes("convertToStructure")) {
      return { status: "skipped", reason: "already migrated" };
    }

    // Skip artist pages (they don't have cifra variable)
    if (!content.includes("const cifra = ")) {
      return { status: "skipped", reason: "not a song page" };
    }

    // Get URL reference
    const url = extractURLReference(content);

    let newContent = content;

    // Update imports - remove FramerTransitionWrapper, add convertToStructure
    const importLines = [];
    importLines.push('import CifraDisplay from "@/components/cifra-display";');
    importLines.push('import FloatingMenu from "@/components/floating-menu";');
    importLines.push(
      'import { convertToStructure } from "@/lib/parsers/cifra-converter";'
    );

    // Add URL comment if exists
    let afterImports = "";
    if (url) {
      afterImports = `\n// URL: ${url}\n`;
    }

    // Find where imports end and cifra starts
    const cifraMatch = content.match(/const cifra = `([^`]+)`/s);
    if (!cifraMatch) {
      return { status: "error", reason: "no cifra found" };
    }

    // Extract everything from const cifra onwards
    const cifraStartIndex = content.indexOf("const cifra = ");
    const cifraAndBeyond = content.substring(cifraStartIndex);

    // Build component section - extract function name from export
    const exportMatch = content.match(/export default function (\w+)\(\)/);
    const functionName = exportMatch ? exportMatch[1] : "CifraPage";

    const componentSection = `
const [title, ...restOfCifra] = cifra.split("\\n\\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\\n\\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\\n\\n");

export default function ${functionName}() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "${url || ""}"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
        // Fallback to old format if needed
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
`;

    // Replace everything after cifra with new component
    const cifraEndMatch = cifraAndBeyond.match(/`;(\r?\n)/);
    if (!cifraEndMatch) {
      return { status: "error", reason: "couldn't find cifra end" };
    }

    const cifraSection = cifraAndBeyond.substring(
      0,
      cifraEndMatch.index + cifraEndMatch[0].length
    );

    // Build final content
    newContent =
      importLines.join("\n") +
      afterImports +
      "\n" +
      cifraSection +
      componentSection;

    // Write back
    await fs.writeFile(filePath, newContent, "utf8");

    return { status: "migrated" };
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

  let migrated = 0;
  let skipped = 0;
  let errors = 0;

  for (const song of songs) {
    const result = await migratePage(song.filePath);

    if (result.status === "migrated") {
      console.log(`✅ ${song.artist}/${song.song}`);
      migrated++;
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
  console.log(`  Migrated: ${migrated}`);
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
  migratePage,
  findSongPages,
};
