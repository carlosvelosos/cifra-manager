const fs = require("fs");
const path = require("path");

// Function to fix floating menu in cifra pages
function fixCifraPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Skip if it doesn't have CifraDisplay or if it's already properly formatted
    if (
      !content.includes("CifraDisplay") ||
      content.includes("<>\n      <CifraDisplay")
    ) {
      return;
    }

    // Fix import formatting
    content = content.replace(
      /import FloatingMenu from "@\/components\/floating-menu";([^\n])/,
      'import FloatingMenu from "@/components/floating-menu";\n\n$1'
    );

    // Fix the return statement to wrap in fragment
    content = content.replace(
      /(export default function \w+\(\) \{\s*return)\s*(\(\s*)?<CifraDisplay[\s\S]*?\/>\s*(\))?;\s*\}/,
      (match, funcStart, openParen, closeParen) => {
        const cifraDisplayMatch = match.match(/<CifraDisplay[\s\S]*?\/>/);
        if (cifraDisplayMatch) {
          const cifraDisplay = cifraDisplayMatch[0];
          return `${funcStart} (\n    <>\n      ${cifraDisplay}\n      <FloatingMenu />\n    </>\n  );\n}`;
        }
        return match;
      }
    );

    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to fix artist listing pages
function fixArtistPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Skip if it has CifraDisplay or if FloatingMenu is already properly placed
    if (
      content.includes("CifraDisplay") ||
      content.includes("<FloatingMenu />")
    ) {
      return;
    }

    // Fix import formatting
    content = content.replace(
      /import FloatingMenu from "@\/components\/floating-menu";([^\n])/,
      'import FloatingMenu from "@/components/floating-menu";\n\n$1'
    );

    // Add FloatingMenu before closing div if not already there
    if (!content.includes("<FloatingMenu />")) {
      content = content.replace(
        /(\s*<\/Card>\s*<\/div>\s*\);\s*})\s*$/,
        "\n      <FloatingMenu />$1"
      );
    }

    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page.tsx files in artists directory
const artistsDir = "./app/artists";

function getAllPageFiles(dir) {
  const files = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === "page.tsx") {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

// Get all page files and fix them
const pageFiles = getAllPageFiles(artistsDir);
console.log(`Found ${pageFiles.length} page files`);

pageFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf8");
  if (content.includes("CifraDisplay")) {
    fixCifraPage(file);
  } else {
    fixArtistPage(file);
  }
});

console.log("Finished fixing all pages!");
