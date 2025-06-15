#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Base directory for artists
const artistsDir = path.join(__dirname, "app", "artists");

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
  console.log("=" * 60);

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
    console.log(`   📄 Total .txt files found: ${totalTxtFiles}`);
    console.log(`   📁 New directories to create: ${totalNewDirectories}`);
    console.log(
      `   ⚠️  Existing directories (will skip): ${totalExistingDirectories}`
    );
    console.log(
      "\\n💡 To actually create the files, run: node create-song-pages.js"
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
