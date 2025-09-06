// Test script to validate the API logic
const fs = require("fs");
const path = require("path");

// Read the artists data file
const artistsDataPath = path.join(__dirname, "lib", "artists-data.ts");
const content = fs.readFileSync(artistsDataPath, "utf8");

// Extract the JSON data (rough parsing for testing)
const jsonMatch = content.match(
  /export const artistsData: Artist\[\] = (\[[\s\S]*?\]);/
);
if (!jsonMatch) {
  console.error("Could not find artistsData in the file");
  process.exit(1);
}

let artistsData;
try {
  // Convert the TypeScript array to JSON and parse it
  const jsonStr = jsonMatch[1];
  artistsData = eval(`(${jsonStr})`);
} catch (error) {
  console.error("Error parsing artists data:", error);
  process.exit(1);
}

console.log(`Loaded ${artistsData.length} artists`);

// Test the hugo-e-guilherme artist
const artist = "hugo-e-guilherme";
const artistData = artistsData.find((a) => a.id === artist);

if (!artistData) {
  console.error(`Artist ${artist} not found`);
  process.exit(1);
}

console.log("Found artist:", artistData.name);
console.log("Songs count:", artistData.songs.length);

// Extract song slugs like the API does
const songSlugs = artistData.songs
  .map((song) => {
    const parts = song.href.split("/");
    return parts[parts.length - 1];
  })
  .sort();

console.log("Song slugs:", songSlugs);

// Simulate API response
const response = {
  songs: songSlugs,
  count: songSlugs.length,
  artist: artist,
};

console.log("API would return:", JSON.stringify(response, null, 2));
