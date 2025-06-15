// Test the updated regex on the Vida Vazia tab block

const problematicTabBlock = `Parte 4 de 4

E|-----x-x-------------x-x-----x-x-------------x-x-----
B|-8-8-x-x-7--7-7-7-7--x-x-5-5-x-x-7--7-7-7-7--x-x-----
G|-----x-x-------------x-x-----x-x-------------x-x-----
D|-9-9-x-x-7--7-7-7-7--x-x-5-5-x-x-7--7-7-7-7--x-x-----
A|-----------------------------------------------------
E|-----------------------------------------------------
   ↓ ↑ ↓ ↑ ↓  ↓ ↑ ↓ ↓  ↓ ↑ ↓ ↑ ↓ ↑ ↓  ↓ ↑ ↓ ↓  ↓ ↑`;

console.log("Testing updated regex on Vida Vazia tab block:");
console.log("Content:");
console.log(problematicTabBlock);
console.log("\n" + "=".repeat(50) + "\n");

const lines = problematicTabBlock.split("\n");
// Updated regex pattern
const tabLinePattern = /^[EBGDAE]\|[0-9\-~\.\/\|\sxhpbr↓↑]+\|?\s*$/;
const partePattern = /^Parte\s+\d+\s+de\s+\d+\s*$/;

console.log("Line-by-line analysis:");
const tabLineIndices = [];
lines.forEach((line, index) => {
  const trimmed = line.trim();
  const isTabLine = tabLinePattern.test(trimmed);
  const isParteLine = partePattern.test(trimmed);

  let type = "normal";
  if (isTabLine) {
    type = "TAB";
    tabLineIndices.push(index);
  }
  if (isParteLine) type = "PARTE";

  console.log(`Line ${index}: [${type}] "${line}"`);
});

console.log(`\nTotal tab lines found: ${tabLineIndices.length}`);
console.log("Tab line indices:", tabLineIndices);
console.log("Should be detected as tab block:", tabLineIndices.length >= 6);

// Test grouping logic
if (tabLineIndices.length > 0) {
  console.log("\nGrouping test:");
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

  tabGroups.forEach((group, index) => {
    if (group.length >= 6) {
      console.log(
        `✅ Group ${index + 1} qualifies as tab block (${group.length} lines)`
      );
    } else {
      console.log(`❌ Group ${index + 1} too small (${group.length} lines)`);
    }
  });
}
