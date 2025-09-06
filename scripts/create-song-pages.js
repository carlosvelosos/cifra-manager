#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Base directory for artists
const artistsDir = path.join(__dirname, "app", "artists");

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

// Function to update artist mapping in the API route
function updateArtistMapping(artistSlug, artistDisplayName) {
  const apiRoutePath = path.join(
    __dirname,
    "app",
    "api",
    "artists",
    "route.ts"
  );

  if (!fs.existsSync(apiRoutePath)) {
    console.log(`    API route not found: ${apiRoutePath}`);
    return false;
  }

  try {
    let content = fs.readFileSync(apiRoutePath, "utf8");

    // Check if the artist is already in the mapping
    const artistMappingRegex =
      /const artistMap: \{ \[key: string\]: string \} = \{([^}]*)\}/s;
    const match = content.match(artistMappingRegex);

    if (!match) {
      console.log(`    Could not find artistMap in API route`);
      return false;
    }

    const currentMapping = match[1];
    const artistKey = `"${artistSlug}"`;

    // Check if artist is already mapped
    if (currentMapping.includes(artistKey)) {
      return false; // Already exists
    }

    // Add the new artist mapping
    const newEntry = `    "${artistSlug}": "${artistDisplayName}",`;
    const updatedMapping = currentMapping.trim()
      ? `${currentMapping}\n${newEntry}`
      : `\n${newEntry}\n  `;

    const updatedContent = content.replace(
      artistMappingRegex,
      `const artistMap: { [key: string]: string } = {${updatedMapping}}`
    );

    fs.writeFileSync(apiRoutePath, updatedContent, "utf8");
    console.log(
      `    Added artist mapping: ${artistSlug} -> ${artistDisplayName}`
    );
    return true;
  } catch (error) {
    console.error(`    Error updating artist mapping: ${error.message}`);
    return false;
  }
}

// Function to process each artist directory
function processArtistDirectory(artistPath) {
  const artistName = path.basename(artistPath);
  console.log(`Processing artist: ${artistName}`);

  try {
    // First, try to create artist page if it doesn't exist
    const artistPageCreated = createArtistPageIfNotExists(
      artistPath,
      artistName
    );

    // If artist page was created, also update the API route mapping
    if (artistPageCreated) {
      const artistDisplayName = createArtistDisplayName(artistName);
      updateArtistMapping(artistName, artistDisplayName);
    }

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

// Function to ensure all existing artists are in the mapping
function ensureAllArtistsInMapping() {
  console.log("Checking artist mappings...");

  try {
    const artistDirs = fs
      .readdirSync(artistsDir)
      .map((dir) => path.join(artistsDir, dir))
      .filter((dir) => fs.statSync(dir).isDirectory());

    let mappingsAdded = 0;

    artistDirs.forEach((artistPath) => {
      const artistName = path.basename(artistPath);
      const artistPagePath = path.join(artistPath, "page.tsx");

      // Only add mapping if artist page exists
      if (fs.existsSync(artistPagePath)) {
        const artistDisplayName = createArtistDisplayName(artistName);
        const mappingAdded = updateArtistMapping(artistName, artistDisplayName);
        if (mappingAdded) {
          mappingsAdded++;
        }
      }
    });

    if (mappingsAdded > 0) {
      console.log(`Added ${mappingsAdded} missing artist mappings`);
    } else {
      console.log("All existing artists already in mapping");
    }
  } catch (error) {
    console.error(`Error checking artist mappings: ${error.message}`);
  }
}

// Main function
function main() {
  console.log("Starting song page creation process...");
  console.log(`Artists directory: ${artistsDir}`);

  if (!fs.existsSync(artistsDir)) {
    console.error(`Artists directory does not exist: ${artistsDir}`);
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

    // Ensure all existing artists are in the API mapping
    ensureAllArtistsInMapping();
  } catch (error) {
    console.error(`Error reading artists directory: ${error.message}`);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  main,
  processArtistDirectory,
  createComponentName,
  createDirectoryName,
};
