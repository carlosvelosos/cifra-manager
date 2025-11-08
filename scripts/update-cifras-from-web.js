/**
 * Script to update cifra pages with content from Cifra Club URLs
 *
 * This script:
 * 1. Scans the app/artists directory for song pages
 * 2. Checks if each song has a URL reference
 * 3. If not, constructs a URL from artist/song names
 * 4. Asks for user confirmation before proceeding (unless --auto flag is used)
 * 5. Fetches content from the URL's <pre> tag
 * 6. Updates the page while preserving title and chords
 *
 * Usage:
 *   node scripts/update-cifras-from-web.js           (interactive mode - asks for each song)
 *   node scripts/update-cifras-from-web.js --auto    (auto mode - processes all songs without asking)
 */

const fs = require("fs").promises;
const path = require("path");
const readline = require("readline");
const { fetchURL, extractPreContent } = require("./fetch-pre-content");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Ask user a yes/no question
 * @param {string} question - The question to ask
 * @returns {Promise<boolean>} - True if user answers yes
 */
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question + " (y/n): ", (answer) => {
      resolve(answer.toLowerCase() === "y" || answer.toLowerCase() === "yes");
    });
  });
}

/**
 * Ask user for text input
 * @param {string} question - The question to ask
 * @returns {Promise<string>} - The user's input
 */
function askForInput(question) {
  return new Promise((resolve) => {
    rl.question(question + " ", (answer) => {
      resolve(answer.trim());
    });
  });
}

/**
 * Extract URL reference from page content
 * @param {string} content - The page content
 * @returns {string|null} - The URL if found, null otherwise
 */
function extractURLReference(content) {
  const urlMatch = content.match(/\/\/\s*URL:\s*(.+)/);
  return urlMatch ? urlMatch[1].trim() : null;
}

/**
 * Construct Cifra Club URL from artist and song names
 * @param {string} artist - Artist name
 * @param {string} song - Song name
 * @returns {string} - The constructed URL
 */
function constructURL(artist, song) {
  const normalizeSlug = (str) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens

  return `https://www.cifraclub.com.br/${normalizeSlug(artist)}/${normalizeSlug(
    song
  )}/`;
}

/**
 * Extract title and chords section from existing cifra
 * @param {string} content - The page content
 * @returns {Object} - Object with title and chords
 */
function extractTitleAndChords(content) {
  const cifraMatch = content.match(/const cifra = `([^`]+)`/s);
  if (!cifraMatch) return { title: "", chords: "" };

  const cifraContent = cifraMatch[1];
  const lines = cifraContent.split("\n");
  const title = lines[0] || "";

  const chordsIndex = cifraContent.indexOf(
    "----------------- Acordes -----------------"
  );
  const chords = chordsIndex !== -1 ? cifraContent.substring(chordsIndex) : "";

  return { title, chords };
}

/**
 * Update page content with new cifra
 * @param {string} content - The original page content
 * @param {string} newCifra - The new cifra content
 * @param {string} title - The title to preserve
 * @param {string} chords - The chords section to preserve
 * @param {string} url - The URL reference to add
 * @returns {string} - The updated page content
 */
function updatePageContent(content, newCifra, title, chords, url) {
  // Build the new cifra with title, new content, and preserved chords
  let fullCifra = title;
  if (newCifra) {
    fullCifra += "\n\n" + newCifra.trim();
  }
  if (chords) {
    fullCifra += "\n\n" + chords.trim();
  }

  // Add URL reference comment if not present
  let updatedContent = content;
  if (!extractURLReference(content)) {
    const urlComment = `// URL: ${url}\n`;
    // Insert after imports
    const lastImportIndex = content.lastIndexOf("import ");
    const nextLineIndex = content.indexOf("\n", lastImportIndex);
    updatedContent =
      content.slice(0, nextLineIndex + 1) +
      "\n" +
      urlComment +
      content.slice(nextLineIndex + 1);
  }

  // Replace the cifra content
  const cifraRegex = /const cifra = `[^`]*`/s;
  updatedContent = updatedContent.replace(
    cifraRegex,
    `const cifra = \`${fullCifra}\``
  );

  return updatedContent;
}

/**
 * Find all song page files in the artists directory
 * @param {string} artistsDir - Path to artists directory
 * @returns {Promise<Array>} - Array of {artist, song, filePath}
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
 * Process a single song page
 * @param {Object} songInfo - Object with artist, song, filePath
 * @param {boolean} autoMode - If true, skip confirmation prompts
 * @returns {Promise<boolean>} - True if updated, false if skipped
 */
async function processSongPage(songInfo, autoMode = false) {
  const { artist, song, filePath } = songInfo;

  console.log(`\n${"=".repeat(60)}`);
  console.log(`Artist: ${artist}`);
  console.log(`Song: ${song}`);
  console.log(`File: ${filePath}`);
  console.log("=".repeat(60));

  // Read the file
  const content = await fs.readFile(filePath, "utf8");

  // Check for existing URL reference
  let url = extractURLReference(content);

  if (url) {
    // Skip songs that already have a URL reference
    console.log(`\nFound existing URL: ${url}`);
    console.log("⏭️  Skipping (already has URL reference).");
    return false;
  }

  // Construct URL
  url = constructURL(artist, song);
  console.log(`\nConstructed URL: ${url}`);

  if (!autoMode) {
    // Interactive mode: ask if URL is correct
    const urlCorrect = await askQuestion("\nIs this URL correct?");

    if (!urlCorrect) {
      const newUrl = await askForInput(
        "Enter the correct URL (or press Enter to skip):"
      );

      if (!newUrl) {
        console.log("Skipped.");
        return false;
      }

      url = newUrl;
      console.log(`\nUsing URL: ${url}`);
    }

    // Ask for confirmation
    const proceed = await askQuestion(
      "\nProceed with fetching and updating this page?"
    );

    if (!proceed) {
      console.log("Skipped.");
      return false;
    }
  } else {
    // Auto mode: proceed without asking
    console.log("⚡ Auto mode: proceeding...");
  }

  // Try to fetch with the constructed/provided URL
  let fetchSuccess = false;
  let newCifra = "";

  while (!fetchSuccess) {
    try {
      // Fetch content from URL
      console.log("\nFetching content...");
      const html = await fetchURL(url);
      const preContents = extractPreContent(html);

      if (preContents.length === 0) {
        console.log("❌ No <pre> tags found in the URL.");

        // Ask user for correct URL
        const retry = await askQuestion(
          "Would you like to try a different URL?"
        );

        if (!retry) {
          console.log("Skipped.");
          return false;
        }

        const newUrl = await askForInput(
          "Enter the correct URL (or press Enter to skip):"
        );

        if (!newUrl) {
          console.log("Skipped.");
          return false;
        }

        url = newUrl;
        console.log(`\nTrying URL: ${url}`);
        continue; // Retry with new URL
      }

      console.log(`✓ Found ${preContents.length} <pre> tag(s)`);
      newCifra = preContents[0];
      fetchSuccess = true;
    } catch (err) {
      console.error(`❌ Error fetching: ${err.message}`);

      // Ask user for correct URL
      const retry = await askQuestion("Would you like to try a different URL?");

      if (!retry) {
        console.log("Skipped.");
        return false;
      }

      const newUrl = await askForInput(
        "Enter the correct URL (or press Enter to skip):"
      );

      if (!newUrl) {
        console.log("Skipped.");
        return false;
      }

      url = newUrl;
      console.log(`\nTrying URL: ${url}`);
    }
  }

  try {
    // Extract title and chords from existing content
    const { title, chords } = extractTitleAndChords(content);

    // Update the page content
    const updatedContent = updatePageContent(
      content,
      newCifra,
      title,
      chords,
      url
    );

    // Write back to file
    await fs.writeFile(filePath, updatedContent, "utf8");

    console.log("✅ Successfully updated!");
    return true;
  } catch (err) {
    console.error(`❌ Error writing file: ${err.message}`);
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  const artistsDir = path.join(__dirname, "..", "app", "artists");

  // Check for --auto flag
  const autoMode = process.argv.includes("--auto");

  if (autoMode) {
    console.log(
      "🤖 Running in AUTO MODE - will process all songs without confirmation\n"
    );
  } else {
    console.log(
      "👤 Running in INTERACTIVE MODE - will ask for confirmation for each song\n"
    );
  }

  console.log("Scanning for song pages...\n");

  const songs = await findSongPages(artistsDir);

  if (songs.length === 0) {
    console.log("No song pages found.");
    rl.close();
    return;
  }

  console.log(`Found ${songs.length} song page(s).\n`);

  let updated = 0;
  let skipped = 0;
  let failed = 0;

  for (const song of songs) {
    try {
      const result = await processSongPage(song, autoMode);
      if (result) {
        updated++;
      } else {
        skipped++;
      }
    } catch (err) {
      console.error(
        `❌ Fatal error processing ${song.artist}/${song.song}: ${err.message}`
      );
      failed++;
    }
  }

  console.log(`\n${"=".repeat(60)}`);
  console.log("Summary:");
  console.log(`  Total: ${songs.length}`);
  console.log(`  Updated: ${updated}`);
  console.log(`  Skipped: ${skipped}`);
  console.log(`  Failed: ${failed}`);
  console.log("=".repeat(60));

  rl.close();
}

// Run the script
if (require.main === module) {
  main().catch((err) => {
    console.error("Fatal error:", err);
    rl.close();
    process.exit(1);
  });
}

module.exports = {
  findSongPages,
  processSongPage,
  constructURL,
};
