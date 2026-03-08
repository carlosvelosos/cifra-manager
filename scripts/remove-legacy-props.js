/**
 * Script to remove legacy mainCifra/chords props from all song page.tsx files.
 *
 * After the legacy rendering path was removed from CifraDisplay, this script:
 *  1. Removes `const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");`
 *  2. Removes `mainCifra={mainCifra || ""}` from <CifraDisplay> JSX
 *  3. Removes `chords={chords || ""}` from <CifraDisplay> JSX
 *
 * Safe to run multiple times (idempotency: skips files that have no legacy props).
 *
 * Usage:
 *   node scripts/remove-legacy-props.js          # dry run (shows what would change)
 *   node scripts/remove-legacy-props.js --write  # apply changes
 */

const fs = require("fs");
const path = require("path");

const DRY_RUN = !process.argv.includes("--write");

if (DRY_RUN) {
  console.log("🔍 DRY RUN — pass --write to apply changes\n");
} else {
  console.log("✏️  WRITE MODE — applying changes\n");
}

// ---------------------------------------------------------------------------
// File discovery
// ---------------------------------------------------------------------------

function findSongPageFiles(dir, results = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) {
      findSongPageFiles(full, results);
    } else if (
      entry === "page.tsx" &&
      // exclude the artist-index pages and the top-level artists page
      !full.match(/\\artists\\page\.tsx$/) &&
      !full.match(/\\artists\\[^\\]+\\page\.tsx$/)
    ) {
      results.push(full);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Transformation
// ---------------------------------------------------------------------------

function transformContent(content) {
  // Already clean — nothing to do
  if (
    !content.includes("mainCifra={") &&
    !content.includes('chords={chords || ""}') &&
    !content.includes("const chords = restOfCifra")
  ) {
    return null;
  }

  let next = content;

  // 1. Remove `const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");`
  //    (may span one line)
  next = next.replace(
    /\nconst chords = restOfCifra\.slice\(chordsSectionIndex\)\.join\("\\n\\n"\);/g,
    "",
  );

  // 2. Remove `        mainCifra={mainCifra || ""}` JSX prop line
  next = next.replace(/\n[ \t]+mainCifra=\{mainCifra \|\| ""\}/g, "");

  // 3. Remove `        chords={chords || ""}` JSX prop line
  next = next.replace(/\n[ \t]+chords=\{chords \|\| ""\}/g, "");

  // Return null if nothing actually changed
  return next === content ? null : next;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const artistsDir = path.join(__dirname, "..", "app", "artists");
const pages = findSongPageFiles(artistsDir);

let changed = 0;
let skipped = 0;
let errors = 0;

for (const filePath of pages) {
  try {
    const original = fs.readFileSync(filePath, "utf8");
    const updated = transformContent(original);

    if (updated === null) {
      skipped++;
      continue;
    }

    const rel = path.relative(path.join(__dirname, ".."), filePath);
    console.log(`✅ ${rel}`);

    if (!DRY_RUN) {
      fs.writeFileSync(filePath, updated, "utf8");
    }

    changed++;
  } catch (err) {
    errors++;
    console.error(`❌ ${filePath}: ${err.message}`);
  }
}

console.log(
  `\nDone — ${changed} file(s) ${DRY_RUN ? "would be " : ""}updated, ${skipped} skipped, ${errors} error(s).`,
);
if (DRY_RUN && changed > 0) {
  console.log("Run with --write to apply changes.");
}
