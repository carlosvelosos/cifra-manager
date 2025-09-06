const fs = require("fs");
const path = require("path");

// Function to add floating menu to a page file
function addFloatingMenuToFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Skip if already has FloatingMenu
    if (content.includes("FloatingMenu") || content.includes("floating-menu")) {
      console.log(`Skipping ${filePath} - already has FloatingMenu`);
      return;
    }

    // Add import at the top (after existing imports)
    const importRegex = /(import[\s\S]*?from\s+["'][^"']+["'];?\s*)/g;
    let lastImportMatch;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      lastImportMatch = match;
    }

    if (lastImportMatch) {
      const insertIndex = lastImportMatch.index + lastImportMatch[0].length;
      content =
        content.slice(0, insertIndex) +
        '\nimport FloatingMenu from "@/components/floating-menu";' +
        content.slice(insertIndex);
    } else {
      // If no imports found, add at the top
      content =
        'import FloatingMenu from "@/components/floating-menu";\n' + content;
    }

    // Check if it's a cifra page (has CifraDisplay) or artist listing page
    if (content.includes("CifraDisplay")) {
      // For cifra pages, wrap return in fragment and add FloatingMenu
      content = content.replace(
        /export default function \w+\(\) \{\s*return <CifraDisplay[^>]*\/>;?\s*\}/,
        (match) => {
          const displayMatch = match.match(/<CifraDisplay[^>]*\/>;?/);
          if (displayMatch) {
            return match.replace(
              displayMatch[0],
              `(\n    <>\n      ${displayMatch[0].replace(
                /;$/,
                ""
              )}\n      <FloatingMenu />\n    </>\n  );`
            );
          }
          return match;
        }
      );
    } else {
      // For other pages, add FloatingMenu before the closing div and )
      content = content.replace(
        /(\s*<\/div>\s*\);\s*})\s*$/,
        "\n      <FloatingMenu />$1"
      );
    }

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
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

// Get all page files and update them
const pageFiles = getAllPageFiles(artistsDir);
console.log(`Found ${pageFiles.length} page files`);

pageFiles.forEach(addFloatingMenuToFile);

console.log("Finished updating all pages!");
