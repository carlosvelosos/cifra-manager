/**
 * Script to update all song pages to use the new structured format
 * This adds the convertToStructure import and updates the CifraDisplay component
 * to pass cifraData prop instead of just mainCifra
 */

const fs = require("fs");
const path = require("path");

// Find all page.tsx files in the artists directory
function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findPageFiles(filePath, fileList);
    } else if (
      file === "page.tsx" &&
      !filePath.includes("\\artists\\page.tsx")
    ) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function updatePageFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // Skip if already converted (contains convertToStructure import)
  if (content.includes("convertToStructure")) {
    console.log(`⏭️  Skipping ${filePath} - already converted`);
    return false;
  }

  // Skip if doesn't use CifraDisplay
  if (!content.includes("CifraDisplay")) {
    console.log(`⏭️  Skipping ${filePath} - no CifraDisplay component`);
    return false;
  }

  // Extract the URL from the comment
  const urlMatch = content.match(/\/\/ URL: (https:\/\/[^\n]+)/);
  if (!urlMatch) {
    console.log(`⚠️  Warning: No URL found in ${filePath}`);
    return false;
  }
  const url = urlMatch[1];

  // Add the import for convertToStructure
  const importLine =
    'import { convertToStructure } from "@/lib/parsers/cifra-converter";';

  if (!content.includes(importLine)) {
    // Find the last import statement
    const lines = content.split("\n");
    let lastImportIndex = -1;

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith("import ")) {
        lastImportIndex = i;
      }
    }

    if (lastImportIndex >= 0) {
      lines.splice(lastImportIndex + 1, 0, importLine);
      content = lines.join("\n");
    }
  }

  // Find the default export function
  const exportMatch = content.match(/export default function (\w+)\(\) \{/);
  if (!exportMatch) {
    console.log(`⚠️  Warning: Could not find export function in ${filePath}`);
    return false;
  }

  // Check if the function already has cifraData conversion
  const functionStartIndex = content.indexOf(exportMatch[0]);
  const functionContent = content.substring(functionStartIndex);

  if (
    functionContent.includes("cifraStructure") ||
    functionContent.includes("cifraData={")
  ) {
    console.log(`⏭️  Skipping ${filePath} - already has structured data`);
    return false;
  }

  // Find the CifraDisplay usage
  const cifraDisplayMatch = functionContent.match(
    /<CifraDisplay\s+title=\{[^}]+\}(?:\s+cifraData=\{[^}]+\})?\s+mainCifra=\{[^}]+\}\s+chords=\{[^}]+\}\s*\/>/s
  );

  if (!cifraDisplayMatch) {
    console.log(
      `⚠️  Warning: Could not find CifraDisplay pattern in ${filePath}`
    );
    return false;
  }

  // Build the new function content
  const conversionCode = `  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "${url}"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
        // Fallback to old format if needed
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}`;

  // Replace the return statement
  const returnMatch = functionContent.match(
    /return \(\s*<>[\s\S]*?<\/>\s*\);?\s*\}/
  );
  if (returnMatch) {
    const newFunctionContent = functionContent.replace(
      returnMatch[0],
      conversionCode
    );

    content =
      content.substring(0, functionStartIndex) +
      exportMatch[0] +
      "\n" +
      newFunctionContent.substring(exportMatch[0].length);
  } else {
    console.log(`⚠️  Warning: Could not find return statement in ${filePath}`);
    return false;
  }

  // Write the updated content
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ Updated ${filePath}`);
  return true;
}

// Main execution
const artistsDir = path.join(__dirname, "..", "app", "artists");
const pageFiles = findPageFiles(artistsDir);

console.log(`Found ${pageFiles.length} page.tsx files\n`);

let updatedCount = 0;
let skippedCount = 0;

pageFiles.forEach((filePath) => {
  const updated = updatePageFile(filePath);
  if (updated) {
    updatedCount++;
  } else {
    skippedCount++;
  }
});

console.log(`\n✅ Updated: ${updatedCount} files`);
console.log(`⏭️  Skipped: ${skippedCount} files`);
