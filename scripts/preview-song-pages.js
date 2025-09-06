#!/usr/bin/env node

/**
 * PREVIEW SONG PAGES - Dry Run Script
 *
 * This script performs a dry run preview of song page creation without actually
 * creating any files or directories. It analyzes the existing artist structure
 * and shows what would be created when running the actual song page creation script.
 *
 * PURPOSE:
 * - Scans all artist directories in app/artists/
 * - Scans app/new-songs/ for new chord files to be processed
 * - Identifies .txt files (song chord files) in each artist directory
 * - Shows what directory names and component names would be generated
 * - Checks for existing directories to avoid conflicts
 * - Provides a summary of how many new directories would be created
 * - Verifies artist page existence and API mapping status
 *
 * WHAT IT ANALYZES:
 * - New song files in app/new-songs/ directory
 * - Artist directories and their .txt files
 * - Existing artist pages (page.tsx files)
 * - API route mappings for artists
 * - Existing song directories that would be skipped
 *
 * OUTPUT:
 * - Lists each artist and their songs
 * - Shows proposed directory and component names
 * - Indicates which directories already exist
 * - Provides a summary count of files and directories
 *
 * HOW TO RUN:
 * node preview-song-pages.js
 *
 * RELATED FILES:
 * - create-song-pages.js - The actual creation script (run after this preview)
 * - app/artists/ - Directory containing artist folders and .txt song files
 * - app/new-songs/ - Directory for new chord files to be processed
 * - app/api/artists/route.ts - API mapping file for artists
 */

const fs = require("fs");
const path = require("path");

// Base directory for artists
const artistsDir = path.join(__dirname, "..", "app", "artists");
// Directory for new songs to be processed
const newSongsDir = path.join(__dirname, "..", "app", "new-songs");

// Function to convert filename to component name
function createComponentName(filename) {
  // Extract song name from "Artist - Song.txt" format
  const nameWithoutExt = filename.replace(/\.txt$/, "");
  const parts = nameWithoutExt.split(" - ");

  // If there's a dash separator, use everything after the first dash as song name
  // Otherwise use the whole filename
  const songName =
    parts.length > 1 ? parts.slice(1).join(" - ") : nameWithoutExt;

  return (
    songName
      // Normalize accented characters
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]/g, " ")
      .split(" ")
      .filter((word) => word.length > 0)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("")
      .replace(/^[^a-zA-Z]/, "Song") + "Page"
  );
}

// Function to convert filename to directory name
function createDirectoryName(filename) {
  // Extract song name from "Artist - Song.txt" format
  const nameWithoutExt = filename.replace(/\.txt$/, "");
  const parts = nameWithoutExt.split(" - ");

  // If there's a dash separator, use everything after the first dash as song name
  // Otherwise use the whole filename
  const songName =
    parts.length > 1 ? parts.slice(1).join(" - ") : nameWithoutExt;

  return (
    songName
      .toLowerCase()
      // Normalize accented characters
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      // Replace special characters with hyphens
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
  );
}

// Function to create artist display name from directory name
function createArtistDisplayName(artistSlug) {
  return artistSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Function to check if artist is in API mapping
function checkArtistMapping(artistSlug) {
  const apiRoutePath = path.join(
    __dirname,
    "..",
    "app",
    "api",
    "artists",
    "route.ts"
  );

  if (!fs.existsSync(apiRoutePath)) {
    return false;
  }

  try {
    const content = fs.readFileSync(apiRoutePath, "utf8");
    const artistKey = `"${artistSlug}"`;
    return content.includes(artistKey);
  } catch (error) {
    return false;
  }
}

// Function to process new songs directory (dry run)
function processNewSongsDryRun() {
  console.log(`\n📂 NEW SONGS DIRECTORY: ${newSongsDir}`);

  if (!fs.existsSync(newSongsDir)) {
    console.log(`   ℹ️  Directory doesn't exist - no new songs to process`);
    return { totalFiles: 0, readyToProcess: 0 };
  }

  try {
    const files = fs.readdirSync(newSongsDir);
    const txtFiles = files.filter((file) => file.endsWith(".txt"));

    if (txtFiles.length === 0) {
      console.log(`   ℹ️  No .txt files found in new-songs directory`);
      return { totalFiles: 0, readyToProcess: 0 };
    }

    console.log(`   📄 Found ${txtFiles.length} new song files:`);

    let readyToProcess = 0;

    txtFiles.forEach((txtFile, index) => {
      console.log(`   ${index + 1}. ${txtFile}`);

      // Parse artist and song from filename
      const nameWithoutExt = txtFile.replace(/\.txt$/, "");
      const parts = nameWithoutExt.split(" - ");

      if (parts.length < 2) {
        console.log(`      ⚠️  Invalid format - needs "Artist - Song.txt"`);
        return;
      }

      const artistName = parts[0]
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

      const songName = parts.slice(1).join(" - ");
      const dirName = createDirectoryName(txtFile);
      const componentName = createComponentName(txtFile);

      const targetArtistDir = path.join(artistsDir, artistName);
      const targetSongDir = path.join(targetArtistDir, dirName);

      console.log(`      → Artist: ${artistName}`);
      console.log(`      → Song Directory: ${dirName}`);
      console.log(`      → Component: ${componentName}`);
      console.log(`      → Target Path: ${targetSongDir}`);

      // Check if target already exists
      if (fs.existsSync(targetSongDir)) {
        console.log(`      ⚠️  Target directory already exists!`);
      } else if (!fs.existsSync(targetArtistDir)) {
        console.log(`      📝 Artist directory will be created`);
        console.log(`      ✅ Ready to process`);
        readyToProcess++;
      } else {
        console.log(`      ✅ Ready to process`);
        readyToProcess++;
      }
    });

    return { totalFiles: txtFiles.length, readyToProcess };
  } catch (error) {
    console.error(
      `   ❌ Error processing new-songs directory: ${error.message}`
    );
    return { totalFiles: 0, readyToProcess: 0 };
  }
}

// Function to process each artist directory (dry run)
function processArtistDirectoryDryRun(artistPath) {
  const artistName = path.basename(artistPath);
  console.log(`\\n📁 Artist: ${artistName}`);
  try {
    // Check artist page
    const artistPagePath = path.join(artistPath, "page.tsx");
    const artistPageExists = fs.existsSync(artistPagePath);
    const artistInMapping = checkArtistMapping(artistName);

    if (artistPageExists) {
      console.log(`   🎤 Artist page: ✅ Exists`);
    } else {
      console.log(`   🎤 Artist page: 📝 Will be created`);
    }

    if (artistInMapping) {
      console.log(`   🗺️  API mapping: ✅ Exists`);
    } else {
      if (!artistPageExists) {
        console.log(`   🗺️  API mapping: 📝 Will be added`);
      } else {
        console.log(
          `   🗺️  API mapping: ⚠️  Missing (artist page exists but not in mapping)`
        );
      }
    }

    const files = fs.readdirSync(artistPath);
    const txtFiles = files.filter((file) => file.endsWith(".txt"));

    if (txtFiles.length === 0) {
      console.log(`   ℹ️  No .txt files found`);
      return;
    }

    console.log(`   📄 Found ${txtFiles.length} .txt files:`);

    txtFiles.forEach((txtFile, index) => {
      const dirName = createDirectoryName(txtFile);
      const componentName = createComponentName(txtFile);
      const songDir = path.join(artistPath, dirName);
      const pageFilePath = path.join(songDir, "page.tsx");

      console.log(`   ${index + 1}. ${txtFile}`);
      console.log(`      → Directory: ${dirName}`);
      console.log(`      → Component: ${componentName}`);
      console.log(`      → Full path: ${songDir}`);

      // Check if directory or page file already exists
      if (fs.existsSync(songDir)) {
        console.log(`      ⚠️  Directory already exists!`);
      } else if (fs.existsSync(pageFilePath)) {
        console.log(`      ⚠️  Page file already exists!`);
      } else {
        console.log(`      ✅ Ready to create`);
      }
    });
  } catch (error) {
    console.error(`   ❌ Error processing ${artistName}: ${error.message}`);
  }
}

// Main function for dry run
function dryRun() {
  console.log("🔍 DRY RUN - Song page creation preview");
  console.log(`📂 Artists directory: ${artistsDir}`);
  console.log(`📂 New songs directory: ${newSongsDir}`);
  console.log("=" * 60);

  // First process new songs
  const newSongsResult = processNewSongsDryRun();

  if (!fs.existsSync(artistsDir)) {
    console.error(`❌ Artists directory does not exist: ${artistsDir}`);
    process.exit(1);
  }

  try {
    const artistDirs = fs
      .readdirSync(artistsDir)
      .map((dir) => path.join(artistsDir, dir))
      .filter((dir) => fs.statSync(dir).isDirectory());

    console.log(`🎯 Found ${artistDirs.length} artist directories`);

    let totalTxtFiles = 0;
    let totalNewDirectories = 0;
    let totalExistingDirectories = 0;

    artistDirs.forEach((artistPath) => {
      const files = fs.readdirSync(artistPath);
      const txtFiles = files.filter((file) => file.endsWith(".txt"));
      totalTxtFiles += txtFiles.length;

      txtFiles.forEach((txtFile) => {
        const dirName = createDirectoryName(txtFile);
        const songDir = path.join(artistPath, dirName);

        if (fs.existsSync(songDir)) {
          totalExistingDirectories++;
        } else {
          totalNewDirectories++;
        }
      });

      processArtistDirectoryDryRun(artistPath);
    });

    console.log("\\n" + "=" * 60);
    console.log("📊 SUMMARY:");
    console.log(
      `   📄 New songs ready to process: ${newSongsResult.readyToProcess}/${newSongsResult.totalFiles}`
    );
    console.log(`   📄 Existing .txt files found: ${totalTxtFiles}`);
    console.log(`   📁 New directories to create: ${totalNewDirectories}`);
    console.log(
      `   ⚠️  Existing directories (will skip): ${totalExistingDirectories}`
    );
    console.log(
      "\\n💡 To actually create the files, run: node scripts/create-song-pages.js"
    );
  } catch (error) {
    console.error(`❌ Error reading artists directory: ${error.message}`);
    process.exit(1);
  }
}

// Run the dry run
if (require.main === module) {
  dryRun();
}
