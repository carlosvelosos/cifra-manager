const fs = require("fs");
const path = require("path");

// Function to recursively find all page.tsx files in artists folder
function findSongPages(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findSongPages(fullPath));
    } else if (item === "page.tsx" && fullPath.includes("artists")) {
      // Only include song pages (not artist index pages)
      const pathParts = fullPath.split(path.sep);
      const artistsIndex = pathParts.findIndex((part) => part === "artists");
      if (artistsIndex !== -1 && pathParts.length > artistsIndex + 2) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

// Function to update a song page file
function updateSongPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Replace the import statement
    content = content.replace(
      /import SongTransitionWrapper from "@\/components\/song-transition-wrapper(-\w+)?";/g,
      'import FramerTransitionWrapper from "@/components/framer-transition-wrapper";'
    );

    // Replace the wrapper usage in the export
    content = content.replace(
      /<SongTransitionWrapper>/g,
      "<FramerTransitionWrapper>"
    );

    content = content.replace(
      /<\/SongTransitionWrapper>/g,
      "</FramerTransitionWrapper>"
    );

    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Updated: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
const artistsDir = path.join(__dirname, "..", "app", "artists");

if (!fs.existsSync(artistsDir)) {
  console.error("❌ Artists directory not found");
  process.exit(1);
}

console.log("🔍 Finding all song pages...");
const songPages = findSongPages(artistsDir);

console.log(`📄 Found ${songPages.length} song pages`);

let successCount = 0;
let errorCount = 0;

for (const pagePath of songPages) {
  if (updateSongPage(pagePath)) {
    successCount++;
  } else {
    errorCount++;
  }
}

console.log("\n📊 Summary:");
console.log(`✅ Successfully updated: ${successCount}`);
console.log(`❌ Errors: ${errorCount}`);

if (errorCount === 0) {
  console.log("\n🎉 All song pages updated successfully!");
} else {
  console.log("\n⚠️  Some updates failed. Please check the errors above.");
}
