# Song Pages Automation Scripts

This folder contains scripts to automate the creation of song pages from .txt files in the artist directories.

## 🚀 Quick Start: Adding New Songs

### Step-by-Step Guide

#### 1. **Add Your Song File**

Place your `.txt` file in the appropriate artist directory:

```
app/artists/[artist-name]/[Artist Name] - [Song Title].txt
```

**Example**: `app/artists/marilia-mendonca/Marília Mendonça - Nova Música.txt`

#### 2. **Preview What Will Be Created** (Recommended)

```bash
node preview-song-pages.js
```

This shows you exactly what will be created without making any changes.

#### 3. **Run the Automation**

```bash
node create-song-pages.js
```

This will:

- ✅ Create song pages for new .txt files
- ✅ Create artist pages if they don't exist
- ✅ Update the sidebar to show new artists/songs
- ⚠️ Skip existing files (safe to run multiple times)

#### 4. **Verify Results** (Optional)

```bash
node preview-song-pages.js
```

Run again to confirm everything was created successfully.

### 🎯 **That's it!** Your new songs will automatically appear in the sidebar and be accessible via their URLs.

---

## Scripts Overview

### 1. `preview-song-pages.js`

**Purpose**: Preview what the automation will create without actually creating files.

```bash
node preview-song-pages.js
```

This script will:

- Scan all artist directories for .txt files
- Show what directories and components would be created
- Display a summary of the total changes

### 2. `create-song-pages.js`

**Purpose**: Actually create the song page directories and files.

```bash
node create-song-pages.js
```

This script will:

- Go through each artist directory in `app/artists/`
- Find all .txt files containing song cifras
- **Create artist pages if they don't exist**
- Create a new directory for each song (using only the song name)
- Generate a `page.tsx` file with the cifra content
- **Update the API mapping so new artists appear in the sidebar**
- **Automatically add artist and song links to the sidebar**

### 3. `song-pages-summary.js` (Legacy - Optional)

**Purpose**: Show statistics and results after running the automation.

```bash
# Show both stats and routes
node song-pages-summary.js

# Show only stats
node song-pages-summary.js stats

# Show only generated routes
node song-pages-summary.js routes
```

---

## 📋 Complete Workflow Examples

### Adding a Single New Song

**Scenario**: You want to add "Evidências" by Chitãozinho & Xororó

1. **Create the .txt file**:

   ```
   app/artists/chitaozinho-e-xororo/Chitãozinho & Xororó - Evidências.txt
   ```

2. **Preview first**:

   ```bash
   node preview-song-pages.js
   ```

   **Output will show**:

   ```
   🎵 Artist: chitaozinho-e-xororo
      ✅ Artist page: Exists
      🔗 API mapping: Exists
      📝 Found 1 new .txt files:
      1. Evidências.txt
         → Directory: evidencias
         → Component: EvidenciasPage
         ✨ Will create new directory!
   ```

3. **Run the automation**:

   ```bash
   node create-song-pages.js
   ```

4. **Result**:
   - New page created at `/artists/chitaozinho-e-xororo/evidencias`
   - Song automatically appears in sidebar under "Chitãozinho E Xororó"

### Adding a New Artist with Songs

**Scenario**: You want to add a completely new artist "João Bosco e Vinícius"

1. **Create the artist directory**:

   ```
   app/artists/joao-bosco-e-vinicius/
   ```

2. **Add song files**:

   ```
   app/artists/joao-bosco-e-vinicius/João Bosco e Vinícius - Bebida na Ferida.txt
   app/artists/joao-bosco-e-vinicius/João Bosco e Vinícius - Lágrimas.txt
   ```

3. **Preview first**:

   ```bash
   node preview-song-pages.js
   ```

   **Output will show**:

   ```
   🎵 Artist: joao-bosco-e-vinicius
      ❌ Artist page: Will create
      ❌ API mapping: Will add
      📝 Found 2 .txt files:
      1. Bebida na Ferida.txt → Will create
      2. Lágrimas.txt → Will create
   ```

4. **Run the automation**:

   ```bash
   node create-song-pages.js
   ```

5. **Result**:
   - Artist page created at `/artists/joao-bosco-e-vinicius`
   - Both song pages created
   - Artist appears in sidebar with both songs listed

---

## ⚙️ Technical Details

## ⚙️ Technical Details

### How It Works

1. **File Discovery**: The script scans each artist directory for `.txt` files
2. **Directory Creation**: For each `.txt` file, it creates a directory using **only the song name**:

   - Format: `Artist Name - Song Title.txt` → Directory: `song-title`
   - Special characters are removed/replaced with hyphens
   - Accented characters are normalized (e.g., `ção` becomes `cao`)
   - Spaces become hyphens
   - Everything is lowercase

3. **Component Generation**: Each directory gets a `page.tsx` file with:

   - Proper React component structure
   - Import statements for `CifraDisplay` and `FloatingMenu`
   - The full cifra content from the .txt file
   - A unique component name based on the song title only

4. **Artist Page Creation**: If an artist doesn't have a `page.tsx` file:

   - Creates artist page with auto-generated display name and description
   - Uses the `ArtistPage` component

5. **Sidebar Integration**: Updates `/api/artists/route.ts`:
   - Adds new artists to the `artistMap` for proper display names
   - The sidebar automatically reflects all filesystem changes
   - No manual sidebar updates needed

### Current Naming Convention (Updated)

For a file named `Marília Mendonça - Ausência.txt`:

- **Directory**: `ausencia/` (song name only)
- **Component**: `AusenciaPage` (song name only)
- **Route**: `/artists/marilia-mendonca/ausencia`

### File Structure Created

```
app/artists/
  marilia-mendonca/
    page.tsx                    ← Artist page (auto-created if missing)
    ausencia/
      page.tsx                  ← Song page
    graveto/
      page.tsx                  ← Another song page
```

## 📊 Current Status

The automation has successfully processed:

- **14 artists** with complete pages and API mappings ✅
- **35 songs** with dedicated pages ✅
- **100%** sidebar integration ✅
- **0** manual steps required for new songs ✅

## 🛡️ Safety Features

- **Existing Directory Check**: Won't overwrite existing directories or files
- **Error Handling**: Continues processing other files if one fails
- **Preview Mode**: Test what will be created before running
- **Detailed Logging**: Shows exactly what was created vs. skipped
- **Safe Multiple Runs**: Can run the script multiple times safely
- **Automatic Validation**: Checks for existing artist pages and API mappings

## 🔧 Troubleshooting

### Common Issues

1. **"No .txt files found"**

   - Make sure your .txt file is directly in the artist directory
   - Check the file extension is exactly `.txt`

2. **"Directory already exists"**

   - This is normal! The script skips existing files
   - If you want to recreate, delete the song directory first

3. **"Artist not appearing in sidebar"**
   - Make sure the artist directory has a `page.tsx` file
   - Run the script again to update API mappings
   - Check that the API route is working: visit `/api/artists`

### File Naming Requirements

✅ **Correct format**: `Artist Name - Song Title.txt`
✅ **Examples**:

- `Marília Mendonça - Ausência.txt`
- `Bruno e Marrone - Bijuteria.txt`
- `Chitãozinho & Xororó - Evidências.txt`

❌ **Avoid**:

- Files without the artist-song separator: `Song Title.txt`
- Empty files or files without proper cifra content

## 📁 File Structure Reference

## 📁 File Structure Reference

### Before Running Script

```
app/artists/
  marilia-mendonca/
    Marília Mendonça - Nova Música.txt  ← Your new song file
    ausencia/                           ← Existing song
      page.tsx
```

### After Running Script

```
app/artists/
  marilia-mendonca/
    page.tsx                            ← Artist page (created if missing)
    Marília Mendonça - Nova Música.txt  ← Original file (untouched)
    nova-musica/                        ← New song directory
      page.tsx                          ← New song page
    ausencia/                           ← Existing song (untouched)
      page.tsx
```

### Generated Page Template

Each generated song page follows this template:

```tsx
import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = \`[CIFRA_CONTENT_FROM_TXT_FILE]\`;

const [title, ...restOfCifra] = cifra.split("\\n\\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\\n\\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\\n\\n");

export default function [SONG_NAME]Page() {
  return (
    <>
      <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
```

### Generated Artist Page Template

```tsx
"use client";

import ArtistPage from "@/components/artist-page";

export default function [ARTIST_NAME]Page() {
  return (
    <ArtistPage
      artistSlug="artist-slug"
      artistDisplayName="Artist Display Name"
      description="Description for [Artist Display Name] with their songs and cifras."
    />
  );
}
```

## 🎯 Quick Commands Reference

```bash
# Preview changes (recommended first step)
node preview-song-pages.js

# Create all missing pages and update sidebar
node create-song-pages.js

# Check what exists vs what would be created
node preview-song-pages.js | grep "Will create"

# See all existing song directories
node preview-song-pages.js | grep "already exists"
```

---

## 💡 Pro Tips

1. **Always preview first**: Run `preview-song-pages.js` before creating to see what will happen
2. **Consistent naming**: Use the format `Artist Name - Song Title.txt` for best results
3. **Multiple songs**: You can add multiple .txt files and run the script once to process all
4. **Check the sidebar**: After running, check the app to see your new songs appear automatically
5. **Safe experimentation**: The script won't overwrite existing files, so it's safe to experiment

## 🔄 Maintenance

The scripts are designed to be run periodically as you add new songs:

- **Weekly/Monthly**: Run the automation to process any new .txt files added
- **After bulk additions**: When adding many songs at once
- **Before deployment**: Ensure all songs are properly converted to pages

---

_This automation saves manual work and ensures consistency across all song pages while automatically maintaining the sidebar navigation._
