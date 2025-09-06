// Debug the line endings

const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "app",
  "artists",
  "bruno-e-marrone",
  "bijuteria",
  "page.tsx"
);
const content = fs.readFileSync(filePath, "utf8");

// Extract the cifra content
const cifraMatch = content.match(/const cifra = `([\s\S]*?)`;/);
if (!cifraMatch) {
  console.log("Could not find cifra content in the file");
  process.exit(1);
}

const cifraContent = cifraMatch[1];
console.log("=== DEBUGGING LINE ENDINGS ===");
console.log("Full cifra content length:", cifraContent.length);

// Check for different patterns
console.log("Contains \\n\\n:", cifraContent.includes("\n\n"));
console.log("Contains \\r\\n\\r\\n:", cifraContent.includes("\r\n\r\n"));

// Look at the first few hundred characters with escaped newlines
console.log("\nFirst 300 characters with visible newlines:");
console.log(JSON.stringify(cifraContent.substring(0, 300)));

// Try splitting with just \n to see the structure
const lines = cifraContent.split("\n");
console.log("\nTotal lines:", lines.length);

console.log("\nFirst 20 lines:");
for (let i = 0; i < Math.min(20, lines.length); i++) {
  console.log(`Line ${i}: "${lines[i]}"`);
}

// Look for the chords section
const chordsLineIndex = lines.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
console.log("\nChords section found at line:", chordsLineIndex);

if (chordsLineIndex !== -1) {
  console.log("Lines around chords section:");
  for (
    let i = Math.max(0, chordsLineIndex - 2);
    i <= Math.min(lines.length - 1, chordsLineIndex + 2);
    i++
  ) {
    console.log(`Line ${i}: "${lines[i]}"`);
  }
}
