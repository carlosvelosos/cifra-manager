#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Base directory for artists
const artistsDir = path.join(__dirname, "app", "artists");

// Function to get creation stats
function getCreationStats() {
  console.log("📊 SONG PAGES CREATION SUMMARY");
  console.log("=" * 50);

  if (!fs.existsSync(artistsDir)) {
    console.error(`❌ Artists directory does not exist: ${artistsDir}`);
    return;
  }

  try {
    const artistDirs = fs
      .readdirSync(artistsDir)
      .map((dir) => path.join(artistsDir, dir))
      .filter((dir) => fs.statSync(dir).isDirectory());

    let totalTxtFiles = 0;
    let totalCreatedDirs = 0;
    let totalCreatedPages = 0;

    artistDirs.forEach((artistPath) => {
      const artistName = path.basename(artistPath);
      const files = fs.readdirSync(artistPath);
      const txtFiles = files.filter((file) => file.endsWith(".txt"));
      const songDirs = files.filter((file) => {
        const filePath = path.join(artistPath, file);
        return (
          fs.statSync(filePath).isDirectory() &&
          fs.existsSync(path.join(filePath, "page.tsx"))
        );
      });

      if (txtFiles.length > 0 || songDirs.length > 0) {
        console.log(`\\n🎵 ${artistName}:`);
        console.log(`   📄 .txt files: ${txtFiles.length}`);
        console.log(`   📁 Song directories created: ${songDirs.length}`);

        songDirs.forEach((dir) => {
          console.log(`     - ${dir}`);
        });
      }

      totalTxtFiles += txtFiles.length;
      totalCreatedDirs += songDirs.length;
      totalCreatedPages += songDirs.length; // Each directory has one page.tsx
    });

    console.log("\\n" + "=" * 50);
    console.log(`📈 TOTALS:`);
    console.log(`   📄 Total .txt files found: ${totalTxtFiles}`);
    console.log(`   📁 Total song directories created: ${totalCreatedDirs}`);
    console.log(`   📄 Total page.tsx files created: ${totalCreatedPages}`);
    console.log(
      `   ✅ Success rate: ${totalCreatedDirs}/${totalTxtFiles} (${Math.round(
        (totalCreatedDirs / totalTxtFiles) * 100
      )}%)`
    );
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
}

// Function to list all generated routes for documentation
function listGeneratedRoutes() {
  console.log("\\n🔗 GENERATED ROUTES:");
  console.log("=" * 50);

  try {
    const artistDirs = fs
      .readdirSync(artistsDir)
      .map((dir) => path.join(artistsDir, dir))
      .filter((dir) => fs.statSync(dir).isDirectory());

    artistDirs.forEach((artistPath) => {
      const artistName = path.basename(artistPath);
      const files = fs.readdirSync(artistPath);
      const songDirs = files.filter((file) => {
        const filePath = path.join(artistPath, file);
        return (
          fs.statSync(filePath).isDirectory() &&
          fs.existsSync(path.join(filePath, "page.tsx"))
        );
      });

      if (songDirs.length > 0) {
        console.log(`\\n🎤 ${artistName}:`);
        songDirs.forEach((dir) => {
          console.log(`   /artists/${artistName}/${dir}`);
        });
      }
    });
  } catch (error) {
    console.error(`❌ Error listing routes: ${error.message}`);
  }
}

// Main function
function main() {
  const command = process.argv[2];

  switch (command) {
    case "stats":
      getCreationStats();
      break;
    case "routes":
      listGeneratedRoutes();
      break;
    case "all":
    default:
      getCreationStats();
      listGeneratedRoutes();
      break;
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { getCreationStats, listGeneratedRoutes };
