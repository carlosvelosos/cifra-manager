// Test the full Vida Vazia content to ensure all tab blocks are detected

const fs = require("fs");
const path = require("path");

// Read the Vida Vazia file
const filePath = path.join(
  __dirname,
  "app",
  "artists",
  "bruno-e-marrone",
  "Bruno e Marrone - Vida Vazia.txt"
);
const content = fs.readFileSync(filePath, "utf8");

console.log("Testing full Vida Vazia content:");
console.log("Content length:", content.length);

// Updated regex to include x and arrows
const tabLinePattern = /^[EBGDAE]\|[0-9\-~\.\/\|\sxhpbr↓↑]+\|?\s*$/;
const partePattern = /^Parte\s+\d+\s+de\s+\d+\s*$/;
const bracketPattern = /\[.*?\]/;

const lines = content.split("\n");
console.log("Total lines:", lines.length);

let tabLines = 0,
  parteLines = 0,
  bracketLines = 0;
const tabLineIndices = [];

console.log("\nDetection results:");
lines.forEach((line, index) => {
  const trimmed = line.trim();

  if (tabLinePattern.test(trimmed)) {
    tabLines++;
    tabLineIndices.push(index);
  }
  if (partePattern.test(trimmed)) parteLines++;
  if (bracketPattern.test(trimmed)) bracketLines++;
});

console.log(`- Tab lines: ${tabLines}`);
console.log(`- Parte lines: ${parteLines}`);
console.log(`- Bracket lines: ${bracketLines}`);

// Group tab lines to see how many tab blocks
console.log("\nGrouping tab lines:");
const tabGroups = [];
let currentGroup = [];

for (let i = 0; i < tabLineIndices.length; i++) {
  const currentLineIndex = tabLineIndices[i];
  const prevLineIndex = i > 0 ? tabLineIndices[i - 1] : -1;

  if (prevLineIndex === -1 || currentLineIndex <= prevLineIndex + 3) {
    currentGroup.push(currentLineIndex);
  } else {
    if (currentGroup.length > 0) {
      tabGroups.push(currentGroup);
    }
    currentGroup = [currentLineIndex];
  }
}

if (currentGroup.length > 0) {
  tabGroups.push(currentGroup);
}

console.log(`Found ${tabGroups.length} tab groups:`);
const qualifyingTabBlocks = tabGroups.filter((group) => group.length >= 6);

tabGroups.forEach((group, index) => {
  const qualifies = group.length >= 6;
  console.log(
    `  Group ${index + 1}: ${group.length} lines ${
      qualifies ? "✅ QUALIFIES" : "❌ too small"
    } (lines ${group[0]}-${group[group.length - 1]})`
  );

  if (qualifies) {
    console.log(`    Content preview:`);
    group.slice(0, 3).forEach((lineIndex) => {
      console.log(
        `      Line ${lineIndex}: "${lines[lineIndex].substring(0, 50)}${
          lines[lineIndex].length > 50 ? "..." : ""
        }"`
      );
    });
  }
});

console.log(`\nTotal qualifying tab blocks: ${qualifyingTabBlocks.length}`);

// Check specific "Parte * de *" sections
console.log("\nVerifying 'Parte * de *' sections:");
const parteSections = lines
  .map((line, index) => ({ line: line.trim(), index }))
  .filter(({ line }) => partePattern.test(line));

parteSections.forEach(({ line, index }) => {
  console.log(`  Found "${line}" at line ${index}`);

  // Check if this parte is followed by tab lines
  let tabLinesAfter = 0;
  for (let i = 1; i <= 10; i++) {
    if (index + i < lines.length) {
      const nextLine = lines[index + i];
      if (tabLinePattern.test(nextLine.trim())) {
        tabLinesAfter++;
      }
    }
  }
  console.log(`    Tab lines following: ${tabLinesAfter}`);
});
