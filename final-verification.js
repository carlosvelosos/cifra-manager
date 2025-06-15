// Final verification that all tab blocks in Bijuteria are now detected

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
const cifraContent = cifraMatch[1];

// Use the fixed parsing logic
const [title, ...restOfCifra] = cifraContent.split(/\r?\n\r?\n/);
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex !== -1
    ? restOfCifra.slice(0, chordsSectionIndex).join("\n\n")
    : restOfCifra.join("\n\n");
const chords =
  chordsSectionIndex !== -1
    ? restOfCifra.slice(chordsSectionIndex).join("\n\n")
    : "";

console.log("=== FINAL VERIFICATION ===");
console.log("Title:", title.substring(0, 50));
console.log("Main cifra length:", mainCifra.length);
console.log("Chords length:", chords.length);

// Test tab detection on main cifra
if (mainCifra.length > 0) {
  const lines = mainCifra.split("\n");
  const tabLinePattern = /^[EBGDAE]\|[0-9\-~\.\/\|\sx]+\|?\s*$/;
  const partePattern = /^Parte\s+\d+\s+de\s+\d+\s*$/;
  const bracketPattern = /\[.*?\]/;

  let tabLines = 0,
    parteLines = 0,
    bracketLines = 0;
  const tabLineIndices = [];

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (tabLinePattern.test(trimmed)) {
      tabLines++;
      tabLineIndices.push(index);
    }
    if (partePattern.test(trimmed)) parteLines++;
    if (bracketPattern.test(trimmed)) bracketLines++;
  });

  console.log(`\nMain cifra detection results:`);
  console.log(`- Tab lines: ${tabLines}`);
  console.log(`- Parte lines: ${parteLines}`);
  console.log(`- Bracket lines: ${bracketLines}`);

  // Group tab lines to see how many tab blocks
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

  const qualifyingTabBlocks = tabGroups.filter((group) => group.length >= 6);
  console.log(`- Tab blocks (6+ lines): ${qualifyingTabBlocks.length}`);

  qualifyingTabBlocks.forEach((group, index) => {
    console.log(
      `  Block ${index + 1}: ${group.length} lines (lines ${group[0]}-${
        group[group.length - 1]
      })`
    );
  });

  // Check specific problematic sections from user's selection
  console.log("\nVerifying specific sections from user's selection:");
  const problematicSections = [
    "Parte 1 de 5",
    "Parte 2 de 5",
    "Parte 3 de 5",
    "Parte 4 de 5",
    "Parte 5 de 5",
  ];

  problematicSections.forEach((section) => {
    const sectionIndex = lines.findIndex((line) => line.trim() === section);
    if (sectionIndex !== -1) {
      console.log(`  Found "${section}" at line ${sectionIndex}`);

      // Check next 6 lines for tab patterns
      let tabLinesInSection = 0;
      for (let i = 1; i <= 8; i++) {
        if (sectionIndex + i < lines.length) {
          const line = lines[sectionIndex + i];
          if (tabLinePattern.test(line.trim())) {
            tabLinesInSection++;
          }
        }
      }
      console.log(`    Tab lines in this section: ${tabLinesInSection}`);
    }
  });
}

console.log(
  "\n✅ Verification complete! All tab blocks should now be detected and highlighted."
);
console.log(
  "🎯 The issue was Windows line endings (\\r\\n\\r\\n) vs Unix line endings (\\n\\n)."
);
console.log("🔧 Fixed by using regex split: /\\r?\\n\\r?\\n/");
