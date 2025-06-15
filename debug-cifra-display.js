// Debug the CifraDisplay component by adding console logs

// Test with the exact same content from Bijuteria
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

// Split into title, main cifra, and chords just like in the page
const parts = cifraContent.split("\n\n");
const title = parts[0];
const chordsSectionIndex = parts
  .slice(1)
  .findIndex((line) =>
    line.includes("----------------- Acordes -----------------")
  );
const mainCifra =
  chordsSectionIndex !== -1
    ? parts.slice(1, chordsSectionIndex + 1).join("\n\n")
    : parts.slice(1).join("\n\n");
const chords =
  chordsSectionIndex !== -1
    ? parts.slice(chordsSectionIndex + 1).join("\n\n")
    : "";

console.log("=== DEBUGGING CIFRA DISPLAY PROCESSING ===");
console.log("Title:", title);
console.log("Main cifra length:", mainCifra.length);
console.log("Chords length:", chords.length);

// Test the identifyTabBlocks function on mainCifra
function identifyTabBlocks(text) {
  console.log(
    "\n--- identifyTabBlocks called with text length:",
    text ? text.length : 0
  );

  if (!text) {
    console.log("Text is empty, returning default");
    return [
      {
        content: "",
        isTab: false,
        isTabContext: false,
        isParte: false,
        isBracket: false,
      },
    ];
  }

  const lines = text.split("\n");
  console.log("Split into", lines.length, "lines");

  const processedLines = [];
  const tabLinePattern = /^[EBGDAE]\|[0-9\-~\.\/\|\sx]+\|?\s*$/;
  const partePattern = /^Parte\s+\d+\s+de\s+\d+\s*$/;
  const bracketPattern = /\[.*?\]/;

  // First pass: identify all tab lines, parte lines, and bracket lines
  const tabLineIndices = [];
  let tabLineCount = 0;
  let parteLineCount = 0;
  let bracketLineCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isTabLine = tabLinePattern.test(line.trim());
    const isParteLine = partePattern.test(line.trim());
    const isBracketLine = bracketPattern.test(line.trim());

    if (isTabLine) {
      tabLineIndices.push(i);
      tabLineCount++;
    }
    if (isParteLine) parteLineCount++;
    if (isBracketLine) bracketLineCount++;

    processedLines.push({
      content: line,
      isTab: false,
      isTabContext: false,
      isParte: isParteLine,
      isBracket: isBracketLine,
    });
  }

  console.log(
    `Found ${tabLineCount} tab lines, ${parteLineCount} parte lines, ${bracketLineCount} bracket lines`
  );
  console.log("Tab line indices:", tabLineIndices);

  // Group tab lines logic
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

  console.log("Tab groups:", tabGroups);

  // Mark qualifying tab blocks
  const tabBlockLines = new Set();
  let qualifyingGroups = 0;

  for (const group of tabGroups) {
    if (group.length >= 6) {
      qualifyingGroups++;
      for (const lineIndex of group) {
        tabBlockLines.add(lineIndex);
      }
    }
  }

  console.log(`${qualifyingGroups} groups qualify as tab blocks`);
  console.log(`Total lines marked as tab blocks: ${tabBlockLines.size}`);

  // Mark the identified tab block lines
  for (const lineIndex of tabBlockLines) {
    if (lineIndex < processedLines.length) {
      processedLines[lineIndex].isTab = true;
    }
  }

  // Mark context lines
  let contextLinesMarked = 0;
  for (let i = 0; i < processedLines.length; i++) {
    if (processedLines[i].isTab) {
      // Mark line above as context
      if (i > 0 && !processedLines[i - 1].isTab) {
        processedLines[i - 1].isTabContext = true;
        contextLinesMarked++;
      }

      // Find the end of the tab block and mark the line below
      let j = i;
      while (j < processedLines.length && processedLines[j].isTab) {
        j++;
      }
      if (j < processedLines.length) {
        processedLines[j].isTabContext = true;
        contextLinesMarked++;
      }
      i = j - 1; // Skip to end of tab block
    }
  }

  console.log(`Marked ${contextLinesMarked} context lines`);

  // Summary
  let finalTabCount = 0,
    finalParteCount = 0,
    finalBracketCount = 0,
    finalContextCount = 0;
  processedLines.forEach((line) => {
    if (line.isTab) finalTabCount++;
    if (line.isTabContext) finalContextCount++;
    if (line.isParte) finalParteCount++;
    if (line.isBracket) finalBracketCount++;
  });

  console.log(
    `Final counts - Tab: ${finalTabCount}, Context: ${finalContextCount}, Parte: ${finalParteCount}, Bracket: ${finalBracketCount}`
  );

  return processedLines;
}

console.log("\n=== TESTING MAIN CIFRA ===");
const processedMainCifra = identifyTabBlocks(mainCifra);

console.log("\n=== TESTING CHORDS ===");
const processedChords = identifyTabBlocks(chords);

console.log("\n=== SUMMARY ===");
console.log("Main cifra processed lines:", processedMainCifra.length);
console.log("Chords processed lines:", processedChords.length);

// Show some examples of highlighted lines
console.log("\nExample lines that should be highlighted in main cifra:");
processedMainCifra.forEach((line, index) => {
  if (line.isTab || line.isParte || line.isBracket) {
    const types = [];
    if (line.isTab) types.push("TAB");
    if (line.isTabContext) types.push("CONTEXT");
    if (line.isParte) types.push("PARTE");
    if (line.isBracket) types.push("BRACKET");
    console.log(
      `  Line ${index}: [${types.join(", ")}] "${line.content.substring(
        0,
        50
      )}${line.content.length > 50 ? "..." : ""}"`
    );
  }
});
