#!/usr/bin/env node

/**
 * CREATE SONG PAGES - Production Script
 *
 * This script automatically creates Next.js page components for all song chord files
 * (.txt files) found in artist directories. It processes the entire artist structure
 * and generates the necessary React components and directory structure.
 *
 * PURPOSE:
 * - Scans app/new-songs/ for new chord files to process first
 * - Scans all artist directories in app/artists/
 * - Reads .txt files containing chord/lyric content
 * - Creates individual song page directories with Next.js page.tsx files
 * - Generates React components that display chord content using CifraDisplay
 * - Creates artist landing pages if they don't exist
 * - Regenerates navigation data automatically for immediate visibility
 * - Moves processed new songs to a "processed" subfolder
 *
 * WHAT IT CREATES:
 * - Processes new songs from app/new-songs/ directory first
 * - Song directories: app/artists/[artist]/[song-slug]/
 * - Song pages: app/artists/[artist]/[song-slug]/page.tsx
 * - Artist pages: app/artists/[artist]/page.tsx (if missing)
 * - Navigation data: Updates lib/artists-data.ts for sidebar menu
 * - Processed folder: Moves completed files to app/new-songs/processed/
 *
 * FILE STRUCTURE GENERATED:
 * app/artists/
 * └── artist-name/
 *     ├── page.tsx (artist landing page)
 *     ├── song-name-1/
 *     │   └── page.tsx (song page with chords)
 *     └── song-name-2/
 *         └── page.tsx (song page with chords)
 *
 * NAMING CONVENTIONS:
 * - Input: "Artist - Song Name.txt"
 * - Directory: "song-name" (lowercase, hyphenated)
 * - Component: "SongNamePage" (PascalCase + "Page")
 *
 * SAFETY FEATURES:
 * - Skips existing directories and pages to prevent overwrites
 * - Validates file existence before processing
 * - Provides detailed logging of all operations
 * - Handles special characters and accented text normalization
 *
 * HOW TO RUN:
 * node scripts/create-song-pages.js
 *
 * PREREQUISITES:
 * - Run `node scripts/preview-song-pages.js` first to preview changes
 * - Place new chord files in app/new-songs/ directory
 * - Ensure .txt files follow "Artist - Song.txt" naming convention
 * - Verify app/artists/ directory structure exists
 *
 * RELATED FILES:
 * - preview-song-pages.js - Dry run preview script (run this first)
 * - app/new-songs/ - Directory for new chord files to be processed
 * - components/cifra-display.tsx - Component used to render chord content
 * - components/floating-menu.tsx - Navigation component included in pages
 * - lib/artists-data.ts - Navigation data file updated automatically
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const readline = require("readline");

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to ask user a yes/no question
function askYesNo(question) {
  return new Promise((resolve) => {
    rl.question(`${question} (y/n): `, (answer) => {
      const response = answer.toLowerCase().trim();
      resolve(response === "y" || response === "yes");
    });
  });
}

// Function to run the artists data generation script
function regenerateArtistsData() {
  console.log("\n🔄 Regenerating artists navigation data...");
  try {
    const generateScriptPath = path.join(__dirname, "generate-artists-data.js");
    execSync(`node "${generateScriptPath}"`, { stdio: "inherit" });
    console.log("✅ Artists data regenerated successfully!\n");
    return true;
  } catch (error) {
    console.error(`\n❌ Error regenerating artists data: ${error.message}\n`);
    return false;
  }
}

// Function to run the preview script
function runPreviewScript() {
  console.log("\n🔍 Running preview-song-pages script...\n");
  try {
    const previewScriptPath = path.join(__dirname, "preview-song-pages.js");
    execSync(`node "${previewScriptPath}"`, { stdio: "inherit" });
    console.log("\n✅ Preview completed!\n");
    return true;
  } catch (error) {
    console.error(`\n❌ Error running preview script: ${error.message}\n`);
    return false;
  }
}

// Base directory for artists
const artistsDir = path.join(__dirname, "..", "app", "artists");
// Directory for new songs to be processed
const newSongsDir = path.join(__dirname, "..", "app", "new-songs");

// Template for the page.tsx file
const pageTemplate = `import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = \`CIFRA_CONTENT\`;

const [title, ...restOfCifra] = cifra.split("\\n\\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\\n\\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\\n\\n");

export default function COMPONENT_NAME() {
  return (
    <>
      <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
`;

// Template for the artist page.tsx file
const artistPageTemplate = `"use client";

import ArtistPage from "@/components/artist-page";

export default function ARTIST_COMPONENT_NAME() {
  return (
    <ArtistPage
      artistSlug="ARTIST_SLUG"
      artistDisplayName="ARTIST_DISPLAY_NAME"
      description="ARTIST_DESCRIPTION"
    />
  );
}
`;

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

// Function to create artist component name from directory name
function createArtistComponentName(artistSlug) {
  return (
    artistSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("") + "Page"
  );
}

// Function to create artist display name from directory name
function createArtistDisplayName(artistSlug) {
  return artistSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Function to create artist description
function createArtistDescription(artistDisplayName) {
  return `Discover the amazing songs of ${artistDisplayName}. Enjoy their most beloved tracks with complete chords and lyrics for guitar and other instruments.`;
}

// Function to create artist page if it doesn't exist
function createArtistPageIfNotExists(artistPath, artistSlug) {
  const artistPagePath = path.join(artistPath, "page.tsx");

  // Check if artist page already exists
  if (fs.existsSync(artistPagePath)) {
    return false; // Already exists
  }

  try {
    const artistComponentName = createArtistComponentName(artistSlug);
    const artistDisplayName = createArtistDisplayName(artistSlug);
    const artistDescription = createArtistDescription(artistDisplayName);

    const artistPageContent = artistPageTemplate
      .replace("ARTIST_COMPONENT_NAME", artistComponentName)
      .replace("ARTIST_SLUG", artistSlug)
      .replace("ARTIST_DISPLAY_NAME", artistDisplayName)
      .replace("ARTIST_DESCRIPTION", artistDescription);

    fs.writeFileSync(artistPagePath, artistPageContent, "utf8");
    console.log(`    Created artist page.tsx for: ${artistSlug}`);
    return true; // Successfully created
  } catch (error) {
    console.error(
      `    Error creating artist page for ${artistSlug}: ${error.message}`
    );
    return false;
  }
}

// Function to process new songs from app/new-songs directory
function processNewSongs() {
  console.log("Processing new songs...");

  if (!fs.existsSync(newSongsDir)) {
    console.log(
      "  No new-songs directory found - skipping new song processing"
    );
    return { processed: 0, errors: 0 };
  }

  try {
    const files = fs.readdirSync(newSongsDir);
    const txtFiles = files.filter((file) => file.endsWith(".txt"));

    if (txtFiles.length === 0) {
      console.log("  No .txt files found in new-songs directory");
      return { processed: 0, errors: 0 };
    }

    console.log(`  Found ${txtFiles.length} new song files`);

    let processed = 0;
    let errors = 0;

    txtFiles.forEach((txtFile) => {
      const txtFilePath = path.join(newSongsDir, txtFile);

      // Parse artist and song from filename
      const nameWithoutExt = txtFile.replace(/\.txt$/, "");
      const parts = nameWithoutExt.split(" - ");

      if (parts.length < 2) {
        console.log(
          `    ❌ Invalid format for ${txtFile} - needs "Artist - Song.txt"`
        );
        errors++;
        return;
      }

      const artistName = parts[0]
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/&/g, "e")
        .replace(/[^a-z0-9]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

      const dirName = createDirectoryName(txtFile);
      const targetArtistDir = path.join(artistsDir, artistName);
      const targetSongDir = path.join(targetArtistDir, dirName);
      const targetPagePath = path.join(targetSongDir, "page.tsx");

      console.log(`    Processing: ${txtFile} → ${artistName}/${dirName}`);

      // Check if target already exists
      if (fs.existsSync(targetSongDir)) {
        console.log(`      ⚠️ Directory already exists - skipping`);
        return;
      }

      try {
        // Create artist directory if it doesn't exist
        if (!fs.existsSync(targetArtistDir)) {
          fs.mkdirSync(targetArtistDir, { recursive: true });
          console.log(`      Created artist directory: ${artistName}`);

          // Create artist page
          createArtistPageIfNotExists(targetArtistDir, artistName);
        }

        // Read the cifra content
        const cifraContent = fs.readFileSync(txtFilePath, "utf8");
        // Escape backslashes to prevent octal escape sequence errors
        const escapedCifraContent = cifraContent.replace(/\\/g, "\\\\");

        // Create song directory
        fs.mkdirSync(targetSongDir, { recursive: true });
        console.log(`      Created song directory: ${dirName}`);

        // Generate component name
        const componentName = createComponentName(txtFile);

        // Create page.tsx content
        const pageContent = pageTemplate
          .replace("CIFRA_CONTENT", escapedCifraContent)
          .replace("COMPONENT_NAME", componentName);

        // Write page.tsx file
        fs.writeFileSync(targetPagePath, pageContent, "utf8");
        console.log(`      Created page.tsx for: ${txtFile}`);

        // Move the processed file to a processed folder or delete it
        const processedDir = path.join(newSongsDir, "processed");
        if (!fs.existsSync(processedDir)) {
          fs.mkdirSync(processedDir, { recursive: true });
        }

        const processedFilePath = path.join(processedDir, txtFile);
        fs.renameSync(txtFilePath, processedFilePath);
        console.log(`      Moved ${txtFile} to processed folder`);

        processed++;
      } catch (error) {
        console.error(`      ❌ Error processing ${txtFile}: ${error.message}`);
        errors++;
      }
    });

    return { processed, errors };
  } catch (error) {
    console.error(`  Error reading new-songs directory: ${error.message}`);
    return { processed: 0, errors: 1 };
  }
}

// Function to process each artist directory
function processArtistDirectory(artistPath) {
  const artistName = path.basename(artistPath);
  console.log(`Processing artist: ${artistName}`);

  try {
    // First, try to create artist page if it doesn't exist
    createArtistPageIfNotExists(artistPath, artistName);

    const files = fs.readdirSync(artistPath);
    const txtFiles = files.filter((file) => file.endsWith(".txt"));

    if (txtFiles.length === 0) {
      console.log(`  No .txt files found in ${artistName}`);
      return;
    }

    console.log(`  Found ${txtFiles.length} .txt files`);

    txtFiles.forEach((txtFile) => {
      const txtFilePath = path.join(artistPath, txtFile);
      const dirName = createDirectoryName(txtFile);
      const songDir = path.join(artistPath, dirName);
      const pageFilePath = path.join(songDir, "page.tsx"); // Check if directory already exists
      if (fs.existsSync(songDir)) {
        console.log(`    Directory already exists: ${dirName}`);
        return;
      }

      // Also check if page.tsx file already exists (extra safety)
      if (fs.existsSync(pageFilePath)) {
        console.log(`    Page file already exists: ${dirName}/page.tsx`);
        return;
      }

      // Read the cifra content from .txt file
      let cifraContent;
      try {
        cifraContent = fs.readFileSync(txtFilePath, "utf8");
        // Escape backslashes to prevent octal escape sequence errors
        cifraContent = cifraContent.replace(/\\/g, "\\\\");
      } catch (error) {
        console.error(`    Error reading ${txtFile}: ${error.message}`);
        return;
      }

      // Create directory
      try {
        fs.mkdirSync(songDir, { recursive: true });
        console.log(`    Created directory: ${dirName}`);
      } catch (error) {
        console.error(
          `    Error creating directory ${dirName}: ${error.message}`
        );
        return;
      }

      // Generate component name
      const componentName = createComponentName(txtFile);

      // Create page.tsx content
      const pageContent = pageTemplate
        .replace("CIFRA_CONTENT", cifraContent)
        .replace("COMPONENT_NAME", componentName);

      // Write page.tsx file
      try {
        fs.writeFileSync(pageFilePath, pageContent, "utf8");
        console.log(`    Created page.tsx for: ${txtFile}`);
      } catch (error) {
        console.error(
          `    Error writing page.tsx for ${txtFile}: ${error.message}`
        );
        return;
      }
    });
  } catch (error) {
    console.error(`Error processing ${artistName}: ${error.message}`);
  }
}

// Main function
async function main() {
  console.log("🎵 CIFRA MANAGER - Song Page Creation Script");
  console.log("==========================================");

  // Ask user if they want to run preview first
  const runPreview = await askYesNo(
    "Would you like to run the preview script first to see what will be created?"
  );

  if (runPreview) {
    const previewSuccess = runPreviewScript();
    if (!previewSuccess) {
      console.log("❌ Preview script failed. Exiting...");
      rl.close();
      process.exit(1);
    }

    // Ask if user wants to continue after seeing the preview
    const continueCreation = await askYesNo(
      "Do you want to continue and create the song pages?"
    );
    if (!continueCreation) {
      console.log("👋 Operation cancelled by user. No files were created.");
      rl.close();
      process.exit(0);
    }
  }

  console.log("\n🚀 Starting song page creation process...");
  console.log(`📂 Artists directory: ${artistsDir}`);
  console.log(`📂 New songs directory: ${newSongsDir}\n`);

  // First, process new songs
  const newSongsResult = processNewSongs();
  console.log(
    `New songs processed: ${newSongsResult.processed}, errors: ${newSongsResult.errors}`
  );

  if (!fs.existsSync(artistsDir)) {
    console.error(`❌ Artists directory does not exist: ${artistsDir}`);
    rl.close();
    process.exit(1);
  }

  try {
    const artistDirs = fs
      .readdirSync(artistsDir)
      .map((dir) => path.join(artistsDir, dir))
      .filter((dir) => fs.statSync(dir).isDirectory());

    console.log(`Found ${artistDirs.length} artist directories`);
    artistDirs.forEach(processArtistDirectory);

    console.log("\\nSong page creation process completed!");

    // Regenerate artists data for navigation
    const dataRegenerated = regenerateArtistsData();
    if (!dataRegenerated) {
      console.log(
        "⚠️  Artists data regeneration failed - navigation may be out of sync"
      );
    }

    // Summary
    console.log("\\n📊 FINAL SUMMARY:");
    console.log(`   📄 New songs processed: ${newSongsResult.processed}`);
    if (newSongsResult.errors > 0) {
      console.log(`   ❌ New song errors: ${newSongsResult.errors}`);
    }
    if (dataRegenerated) {
      console.log(`   🔄 Navigation data: ✅ Updated`);
    } else {
      console.log(`   🔄 Navigation data: ⚠️  Failed to update`);
    }

    console.log("\\n✅ All operations completed successfully!");
  } catch (error) {
    console.error(`❌ Error reading artists directory: ${error.message}`);
    rl.close();
    process.exit(1);
  }

  // Close readline interface
  rl.close();
}

// Run the script
if (require.main === module) {
  main().catch((error) => {
    console.error(`❌ Unexpected error: ${error.message}`);
    process.exit(1);
  });
}

module.exports = {
  main,
  processNewSongs,
  processArtistDirectory,
  createComponentName,
  createDirectoryName,
  askYesNo,
  runPreviewScript,
  regenerateArtistsData,
};
