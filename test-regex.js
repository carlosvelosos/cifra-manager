const fs = require("fs");
const path = require("path");

const dataPath = path.join(process.cwd(), "lib", "artists-data.ts");
console.log("Reading from:", dataPath);

const fileContent = fs.readFileSync(dataPath, "utf-8");
console.log("File length:", fileContent.length);

// Test the regex
const match = fileContent.match(
  /export const artistsData[:\s]*Artist\[\]\s*=\s*(\[[\s\S]*\]);/
);
console.log("\n=== REGEX TEST ===");
console.log("Match found:", !!match);

if (match) {
  console.log("Matched JSON length:", match[1].length);

  try {
    const data = JSON.parse(match[1]);
    console.log("✅ Successfully parsed!");
    console.log("Total artists:", data.length);

    // Find harmonia-do-samba
    const hs = data.find((a) => a.id === "harmonia-do-samba");
    if (hs) {
      console.log("\n=== HARMONIA DO SAMBA ===");
      console.log("Artist name:", hs.name);
      console.log("Songs count:", hs.songs.length);
      console.log("Song titles:", hs.songs.map((s) => s.title).join(", "));
      console.log("Song hrefs:", hs.songs.map((s) => s.href).join(", "));
    } else {
      console.log("❌ Harmonia do Samba not found!");
    }
  } catch (error) {
    console.error("❌ JSON parse error:", error.message);
  }
} else {
  console.log("❌ Regex did not match!");
  console.log("\nFile starts with:");
  console.log(fileContent.substring(0, 200));
}
