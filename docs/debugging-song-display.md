# Debugging: Song Display Issue

## Problem

Artist page shows only 1 song when multiple songs exist in the filesystem and in `artists-data.ts`.

## Data Flow with Console Logs

### 1. Page Creation (`/api/create-pages`)

When you create a new song, watch for these logs:

```
🎨 CREATE PAGES API called
📦 Number of pages to create: X

📄 Creating page for: [Artist] - [Song]
  Artist slug: [slug]
  Song slug: [slug]
  Overwrite: true/false

  📁 Creating artist directory: [path]
  OR
  ✓ Artist directory exists: [path]

  ✅/❌ Song page result: { success: true/false }

🔄 Starting artists data regeneration...
🔄 Regenerating artists-data.ts...
▶️ Executing script: [path]
✅ Artists data regenerated successfully
📝 artists-data.ts last modified: [timestamp]
```

### 2. API Route (`/api/songs/[artist]`)

When the artist page fetches songs, watch for these logs:

```
🎵 API Request for artist: [artist-slug]
📂 Reading artists-data from: [path]
📄 File content length: [bytes]
✅ Parsed artists count: [number]

✅ Found artist: [Artist Name]
📚 Songs in data: [count]
🎼 Song titles: [list of titles]
📤 Returning song slugs: [list of slugs]
📊 Total count: [number]
```

### 3. Artist Page Component (Client-side)

In the browser console, watch for these logs:

```
🎨 [Artist Page] Fetching songs for: [artist-slug]
📡 [Artist Page] API URL: /api/songs/[artist-slug]
📥 [Artist Page] API Response: { songs: [...], count: X, artist: ... }
📊 [Artist Page] Songs count from API: X
🎵 [Artist Page] Song slugs from API: [list]
✨ [Artist Page] Formatted songs: [array of objects]
📝 [Artist Page] Setting state with X songs
```

## Debugging Steps

### Step 1: Verify File System

1. Check the artist folder exists:
   ```bash
   ls app/artists/harmonia-do-samba/
   ```
   Should show: `agachadinho/`, `o-rodo/`, `vem-nenem/`, `page.tsx`

### Step 2: Verify artists-data.ts

2. Check the data file contains all songs:
   ```bash
   grep -A 15 "harmonia-do-samba" lib/artists-data.ts
   ```
   Should show all 3 songs in the JSON

### Step 3: Test API Directly

3. Open browser dev tools and test the API:
   ```javascript
   fetch("/api/songs/harmonia-do-samba")
     .then((r) => r.json())
     .then(console.log);
   ```
   Should return: `{ songs: ["agachadinho", "o-rodo", "vem-nenem"], count: 3, ... }`

### Step 4: Check Browser Console

4. Navigate to `/artists/harmonia-do-samba` and check the browser console for:
   - All the client-side logs from the artist page component
   - Any errors or warnings
   - The final state being set

### Step 5: Clear All Caches

5. If data is correct but not showing:
   - Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
   - Clear Next.js cache: Delete `.next` folder and restart dev server
   - Restart dev server: Stop and start `npm run dev`

## Common Issues

### Issue: API returns correct data but UI shows old data

**Cause**: Browser cache or React state not updating
**Solution**: Hard refresh the page (Ctrl+Shift+R)

### Issue: artists-data.ts has old data

**Cause**: Script didn't run or failed
**Solution**: Manually run `node scripts/generate-artists-data.js`

### Issue: API reads old artists-data.ts

**Cause**: File system hasn't updated yet
**Solution**: Check the timestamp log after regeneration

### Issue: Dynamic import not working

**Cause**: Next.js module cache
**Solution**: Restart the dev server completely

## Expected Log Sequence

When creating a new song and then viewing the artist page:

1. **Create Page Request**

   - CREATE PAGES API logs showing file creation
   - Regeneration logs showing successful update
   - Timestamp showing artists-data.ts was just updated

2. **Navigate to Artist Page**

   - Browser logs showing fetch initiated
   - API logs showing file read with new data
   - API logs showing correct song count
   - Browser logs showing state update with correct count

3. **UI Update**
   - Page displays all songs
   - Count in header matches actual count
   - All song links are clickable

## Quick Test Commands

```bash
# Check directory
ls app/artists/harmonia-do-samba/

# Check data file
grep -A 20 "harmonia-do-samba" lib/artists-data.ts

# Manually regenerate data
node scripts/generate-artists-data.js

# Check when file was last modified
ls -l lib/artists-data.ts
```

## Still Not Working?

If logs show correct data at every step but UI still shows wrong count:

1. Check if there are multiple artists with similar names
2. Verify the artist slug matches exactly (no typos, correct dashes)
3. Check if there's a static export or build cache issue
4. Try accessing in incognito/private browsing mode
5. Check the Network tab in dev tools for the actual API response
