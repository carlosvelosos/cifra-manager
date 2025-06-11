# Console Logging Quick Reference

## Log Categories & Emojis

| Category           | Prefix                 | Location               | Purpose                          |
| ------------------ | ---------------------- | ---------------------- | -------------------------------- |
| 🎵 UI Component    | `[ARTIST+SONG UI]`     | `ArtistSongSearch.tsx` | User interactions, state changes |
| 🔍 Hook Logic      | `[ARTIST+SONG SEARCH]` | `hooks.ts`             | API calls, response processing   |
| 🔥 API Main        | `[API - MAIN]`         | `search/route.ts`      | Request processing, Google API   |
| 🎸 Cavaco Params   | `[API - CAVACO]`       | `search/route.ts`      | URL parameter addition           |
| 📄 Content Extract | `[API - EXTRACT]`      | `search/route.ts`      | Content fetching, parsing        |
| 🎵 Page Level      | `[PAGE]`               | `page.tsx`             | Component state tracking         |

## Key Log Markers

### ✅ Success Indicators

- `✅ [API - MAIN] Google search successful`
- `✨ [API - EXTRACT] Content extracted and cleaned`
- `✅ [ARTIST+SONG SEARCH] API response successful`
- `📊 [ARTIST+SONG UI] Result received`

### ❌ Error Indicators

- `💥 [API - MAIN] CRITICAL ERROR`
- `❌ [API - EXTRACT] No cifra content found`
- `💥 [ARTIST+SONG SEARCH] Request failed`

### 🔍 Debug Points

- `🔥 [API - MAIN] ========== NEW SEARCH REQUEST ==========`
- `🎯 [API - MAIN] Parsed query`
- `📊 [API - MAIN] Google API results count`
- `🎸 [API - CAVACO] Cavaco params added`

## Console Filters

```javascript
// Quick filters to copy/paste in console:

// Show only API processing
/\[API/

// Show only UI interactions
/\[ARTIST\+SONG UI\]/

// Show only errors
/(ERROR|CRITICAL|failed|❌|💥)/

// Show specific search
/Skank/

// Show content extraction only
/\[API - EXTRACT\]/
```

## Typical Flow Sequence

1. 🚀 `[ARTIST+SONG UI] Search button clicked`
2. 🔥 `[API - MAIN] ========== NEW SEARCH REQUEST ==========`
3. 🎯 `[API - MAIN] Parsed query`
4. 📊 `[API - MAIN] Google API results count`
5. 🎸 `[API - CAVACO] Cavaco params added`
6. ✨ `[API - EXTRACT] Content extracted and cleaned`
7. 📊 `[ARTIST+SONG UI] Result received`

## Common Issues

| Problem           | Log Signature                                           | Solution                  |
| ----------------- | ------------------------------------------------------- | ------------------------- |
| No results        | `❌ [API - MAIN] No results found`                      | Check query format        |
| Content not found | `❌ [API - EXTRACT] No cifra content found`             | Verify URL accessibility  |
| API error         | `💥 [API - MAIN] CRITICAL ERROR`                        | Check network/credentials |
| Empty query       | `⚠️ [ARTIST+SONG UI] Search attempted with empty query` | Enter valid query         |

## Export Logs

Right-click in console → "Save as..." → `search-logs-[timestamp].txt`
