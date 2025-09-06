// Debug the splitting logic step by step

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
console.log("=== DEBUGGING SPLITTING LOGIC ===");
console.log("Full cifra content length:", cifraContent.length);

// Test the splitting
const parts = cifraContent.split("\n\n");
console.log("Split into", parts.length, "parts");

console.log("\nFirst 5 parts:");
for (let i = 0; i < Math.min(5, parts.length); i++) {
  console.log(
    `Part ${i}: "${parts[i].substring(0, 100)}${
      parts[i].length > 100 ? "..." : ""
    }"`
  );
}

console.log("\nLooking for chords section...");
const restOfCifra = parts.slice(1);
console.log("restOfCifra length:", restOfCifra.length);

const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
console.log("chordsSectionIndex:", chordsSectionIndex);

if (chordsSectionIndex !== -1) {
  console.log(
    `Found chords section at index ${chordsSectionIndex} in restOfCifra`
  );
  console.log(`Actual index in parts array: ${chordsSectionIndex + 1}`);
  console.log(
    `Chords section content: "${restOfCifra[chordsSectionIndex].substring(
      0,
      100
    )}"`
  );

  const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
  const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

  console.log("\nMain cifra length:", mainCifra.length);
  console.log("Chords length:", chords.length);

  if (mainCifra.length > 0) {
    console.log("Main cifra starts with:", mainCifra.substring(0, 200));
  }

  if (chords.length > 0) {
    console.log("Chords starts with:", chords.substring(0, 200));
  }
} else {
  console.log("Chords section not found");
  console.log("Using all content as main cifra");

  const mainCifra = restOfCifra.join("\n\n");
  console.log("Main cifra length:", mainCifra.length);
  if (mainCifra.length > 0) {
    console.log("Main cifra starts with:", mainCifra.substring(0, 200));
  }
}
