// Test specifically on arrow lines to see if they need special handling

const arrowLine = "   ↓ ↑ ↓ ↑ ↓  ↓ ↑ ↓ ↓  ↓ ↑ ↓ ↑ ↓ ↑ ↓  ↓ ↑ ↓ ↓  ↓ ↑";

console.log("Testing arrow line detection:");
console.log(`Arrow line: "${arrowLine}"`);

const tabLinePattern = /^[EBGDAE]\|[0-9\-~\.\/\|\sxhpbr↓↑]+\|?\s*$/;

console.log(
  "Does it match tab pattern?",
  tabLinePattern.test(arrowLine.trim())
);
console.log("Trimmed line:", `"${arrowLine.trim()}"`);

// The arrow line doesn't start with E|, B|, etc., so it's not a tab line
// This is correct behavior - arrow lines are strumming pattern indicators, not tablature
console.log("\nThis is expected behavior:");
console.log("- Arrow lines are strumming patterns, not tab lines");
console.log("- They should NOT be counted as tab lines");
console.log("- The 6 guitar string lines above them ARE the tab block");

// Test a few more complex tab notations to ensure they work
const complexTabLines = [
  "E|-3h5p3-x-x-5/7\\5-3~-----|",
  "B|-8b10r8-x-x-7h9p7-------|",
  "G|-5↓↑x↓↑-x-x-------------|",
  "D|-7-9-x-x-5-7-9----------|",
];

console.log("\nTesting complex tab notations:");
complexTabLines.forEach((line, index) => {
  const matches = tabLinePattern.test(line);
  console.log(`Line ${index + 1}: ${matches ? "✅" : "❌"} "${line}"`);
});
