# Console Logging Documentation - Artist + Song Search

## Overview

This document provides comprehensive documentation for the console logging system implemented throughout the Artist + Song Search functionality in the CifraManager application. The logging system tracks every step from user input to final cifra content visualization, making debugging and development significantly easier.

## Table of Contents

1. [Log Categories](#log-categories)
2. [Log Format](#log-format)
3. [Complete Flow Tracking](#complete-flow-tracking)
4. [How to Use the Logs](#how-to-use-the-logs)
5. [Troubleshooting Guide](#troubleshooting-guide)
6. [Log Examples](#log-examples)
7. [Implementation Details](#implementation-details)

## Log Categories

The logging system is organized into six main categories, each with a distinct prefix and emoji for easy identification:

### 1. 🎵 UI Component Logs (`[ARTIST+SONG UI]`)

**Location**: `app/test/components/ArtistSongSearch.tsx`

- User interactions (search, clear, copy)
- State changes (results, loading)
- UI events (fullscreen, keyboard navigation)
- Auto-scroll behaviors

### 2. 🔍 Hook Logic Logs (`[ARTIST+SONG SEARCH]`)

**Location**: `app/test/hooks.ts` - `useArtistSongSearch`

- Search initiation and parameters
- API call lifecycle
- Response processing
- Error handling

### 3. 🔥 API Main Processing (`[API - MAIN]`)

**Location**: `app/api/search/route.ts` - Main GET handler

- Request parsing and validation
- Query type detection
- Google API interaction
- Response formatting

### 4. 🎸 Cavaco Parameter Processing (`[API - CAVACO]`)

**Location**: `app/api/search/route.ts` - `addCavacoParams` function

- URL parameter addition logic
- Pattern matching decisions
- Cavaco-specific URL modifications

### 5. 📄 Content Extraction (`[API - EXTRACT]`)

**Location**: `app/api/search/route.ts` - `extractCifraContent` function

- Page fetching and parsing
- HTML content analysis
- Cifra content extraction
- Content cleaning and formatting

### 6. 🎵 Page-Level Tracking (`[PAGE]`)

**Location**: `app/test/page.tsx`

- Component state changes
- Result availability tracking
- Loading state monitoring

## Log Format

All logs follow a consistent format:

```
[EMOJI] [CATEGORY] [ACTION/DESCRIPTION]: [DETAILS]
```

**Examples:**

- `🚀 [ARTIST+SONG UI] Search button clicked, query: Skank - Garota Nacional`
- `✅ [API - MAIN] Google search successful, sorting results...`
- `📄 [API - EXTRACT] Content extracted and cleaned, length: 2847`

## Complete Flow Tracking

Here's the complete flow of logs you'll see for a typical Artist + Song search:

### Step 1: User Interaction

```
🚀 [ARTIST+SONG UI] Search button clicked, query: Skank - Garota Nacional
🎵 [ARTIST+SONG SEARCH] Starting search for: Skank - Garota Nacional
🔍 [ARTIST+SONG SEARCH] Calling API: /api/search?q=Skank%20-%20Garota%20Nacional
⏳ [PAGE] Artist + Song Search loading state: Loading...
```

### Step 2: API Processing

```
🔥 [API - MAIN] ========== NEW SEARCH REQUEST ==========
🔍 [API - MAIN] Query: Skank - Garota Nacional
📊 [API - MAIN] Parameters: { multiple: false, plainUrl: false, maxResults: 10 }
🧠 [API - MAIN] Parsing query to detect type...
🎯 [API - MAIN] Parsed query: { type: "artist_and_song", artist: "Skank", song: "Garota Nacional" }
```

### Step 3: Google Search

```
🌐 [API - MAIN] Starting Google search...
🔑 [API - MAIN] Using Google Custom Search API
🎵 [API - MAIN] Artist+Song search query: site:cifraclub.com.br "Skank" "Garota Nacional"
📞 [API - MAIN] Calling Google Custom Search API...
📥 [API - MAIN] Google API response status: 200
📊 [API - MAIN] Google API results count: 3
```

### Step 4: Result Processing

```
✅ [API - MAIN] Google search successful, sorting results...
🔀 [API - MAIN] Prioritizing song pages for artist+song query
🎯 [API - MAIN] Returning single result
🏆 [API - MAIN] First result: { title: "GAROTA NACIONAL - Skank - CIFRACLUB", link: "https://www.cifraclub.com.br/skank/garota-nacional/" }
```

### Step 5: Cavaco Parameter Addition

```
🎸 [API - CAVACO] Adding cavaco params to URL: https://www.cifraclub.com.br/skank/garota-nacional/ Query type: artist_and_song
✅ [API - CAVACO] Cavaco params added: https://www.cifraclub.com.br/skank/garota-nacional/#tabs=false&instrument=cavaco
```

### Step 6: Content Extraction

```
📄 [API - EXTRACT] Starting content extraction from: https://www.cifraclub.com.br/skank/garota-nacional/ Instrument: cavaco
🌐 [API - EXTRACT] Fetching page content...
✅ [API - EXTRACT] Page fetched successfully
📊 [API - EXTRACT] HTML content length: 157394
🎯 [API - EXTRACT] Found <pre> tag content
✨ [API - EXTRACT] Content extracted and cleaned, length: 2847
```

### Step 7: Response and UI Update

```
📝 [API - MAIN] Content extracted: 2847 characters
✅ [API - MAIN] Returning artist+song JSON response
✅ [ARTIST+SONG SEARCH] API response successful, status: 200
📄 [ARTIST+SONG SEARCH] Content-Type: application/json
🎯 [ARTIST+SONG SEARCH] JSON response received: { url: "...", contentLength: 2847, hasContent: true }
✨ [ARTIST+SONG SEARCH] Result stored in state
🏁 [ARTIST+SONG SEARCH] Search completed, loading state cleared
```

### Step 8: UI Display

```
🎵 [PAGE] Artist + Song Search result changed: Result available
⏳ [PAGE] Artist + Song Search loading state: Not loading
📊 [ARTIST+SONG UI] Result received: { url: "...", contentLength: 2847, hasContent: true }
🎨 [ARTIST+SONG UI] Parsed from URL: { artist: "Skank", song: "Garota Nacional" }
📱 [ARTIST+SONG UI] Result available, showing fullscreen in 100ms
✨ [ARTIST+SONG UI] Fullscreen content displayed
```

## How to Use the Logs

### 1. Open Developer Tools

1. Press `F12` or right-click and select "Inspect"
2. Navigate to the **Console** tab
3. Clear any existing logs with `Ctrl+L`

### 2. Perform a Search

1. Enter an artist + song query (e.g., "Skank - Garota Nacional")
2. Click the search button
3. Watch the console output in real-time

### 3. Filter Logs

Use the console filter to focus on specific categories:

- `[ARTIST+SONG UI]` - UI interactions only
- `[API - MAIN]` - API processing only
- `[API - EXTRACT]` - Content extraction only
- `ERROR` - Only error messages

### 4. Export Logs

Right-click in the console and select "Save as..." to export logs for analysis.

## Troubleshooting Guide

### Common Issues and Their Log Signatures

#### **1. No Search Results Found**

```
❌ [API - MAIN] No results found from Google API
⚠️ [API - MAIN] No results found, returning fallback
```

**Solution**: Check query formatting, Google API credentials, or network connectivity.

#### **2. Content Extraction Failed**

```
❌ [API - EXTRACT] Fetch failed with status: 404
❌ [API - EXTRACT] No cifra content found in any pattern
```

**Solution**: Verify URL accessibility and HTML pattern matching.

#### **3. API Request Failed**

```
💥 [ARTIST+SONG SEARCH] Request failed with error: NetworkError
💥 [API - MAIN] CRITICAL ERROR: [Error details]
```

**Solution**: Check network connectivity and server status.

#### **4. Invalid Query Format**

```
⚠️ [ARTIST+SONG UI] Search attempted with empty query
🧠 [API - MAIN] Parsing query to detect type...
🎯 [API - MAIN] Parsed query: { type: "artist_only", ... }
```

**Solution**: Ensure query follows "Artist - Song" format.

#### **5. Cavaco Parameters Not Added**

```
ℹ️ [API - CAVACO] Not artist+song or not cifraclub.com.br, no params added
```

**Solution**: Verify query type detection and URL format.

## Log Examples

### Successful Search Flow

```
🚀 [ARTIST+SONG UI] Search button clicked, query: Legião Urbana - Tempo Perdido
🎵 [ARTIST+SONG SEARCH] Starting search for: Legião Urbana - Tempo Perdido
🔍 [ARTIST+SONG SEARCH] Calling API: /api/search?q=Legi%C3%A3o%20Urbana%20-%20Tempo%20Perdido
🔥 [API - MAIN] ========== NEW SEARCH REQUEST ==========
🔍 [API - MAIN] Query: Legião Urbana - Tempo Perdido
🎯 [API - MAIN] Parsed query: { type: "artist_and_song", artist: "Legião Urbana", song: "Tempo Perdido" }
✅ [API - MAIN] Google search successful, sorting results...
🎸 [API - CAVACO] Cavaco params added: https://www.cifraclub.com.br/legiao-urbana/tempo-perdido/#tabs=false&instrument=cavaco
✨ [API - EXTRACT] Content extracted and cleaned, length: 3142
✅ [ARTIST+SONG SEARCH] API response successful, status: 200
📊 [ARTIST+SONG UI] Result received: { url: "...", contentLength: 3142, hasContent: true }
```

### Error Handling Flow

```
🚀 [ARTIST+SONG UI] Search button clicked, query: NonExistent - Artist
💥 [API - MAIN] CRITICAL ERROR: TypeError: Cannot read property 'link' of undefined
❌ [ARTIST+SONG SEARCH] API response failed, status: 500
🔄 [ARTIST+SONG UI] Result cleared/reset
```

### User Interaction Logs

```
📋 [ARTIST+SONG UI] Copying to clipboard: [Intro] G  C  G  C G                    C...
✅ [ARTIST+SONG UI] Content copied to clipboard successfully
⌨️ [ARTIST+SONG UI] ESC key pressed, closing fullscreen
📜 [ARTIST+SONG UI] Scrolled back to search section
```

## Implementation Details

### File Locations

| Component                      | File Path                                  | Functions Logged                                                    |
| ------------------------------ | ------------------------------------------ | ------------------------------------------------------------------- |
| **ArtistSongSearch Component** | `app/test/components/ArtistSongSearch.tsx` | `handleSearch`, `handleClear`, `copyToClipboard`, `useEffect` hooks |
| **useArtistSongSearch Hook**   | `app/test/hooks.ts`                        | `handleArtistSongSearch`                                            |
| **Search API Route**           | `app/api/search/route.ts`                  | `GET`, `addCavacoParams`, `extractCifraContent`                     |
| **Test Page**                  | `app/test/page.tsx`                        | `useEffect` for result/loading tracking                             |

### Log Configuration

All logs use `console.log()` for regular information and `console.error()` for errors. The logging is always active in development and can be disabled in production by environment variables if needed.

### Performance Impact

The logging system has minimal performance impact:

- Simple string concatenation for log messages
- No complex object serialization unless explicitly needed
- Logs are only generated during search operations
- No persistent storage or network calls for logging

### Customization

To modify logging behavior:

1. **Change log levels**: Replace `console.log` with `console.debug` for less verbose logging
2. **Add new categories**: Follow the `[EMOJI] [CATEGORY]` pattern
3. **Filter by environment**: Wrap logs in `if (process.env.NODE_ENV === 'development')` conditionals
4. **Add timestamps**: Prepend `new Date().toISOString()` to log messages

### Future Enhancements

Planned improvements to the logging system:

- Structured JSON logging for production
- Log aggregation and analysis tools
- Performance metrics tracking
- User session correlation
- Error reporting integration

---

## Quick Reference

### Most Important Logs for Debugging

1. **🔥 [API - MAIN] ========== NEW SEARCH REQUEST ==========** - Start of new search
2. **🎯 [API - MAIN] Parsed query:** - Query type detection result
3. **📊 [API - MAIN] Google API results count:** - Number of results found
4. **✨ [API - EXTRACT] Content extracted and cleaned, length:** - Successful content extraction
5. **💥 [API - MAIN] CRITICAL ERROR:** - Any critical failures
6. **📊 [ARTIST+SONG UI] Result received:** - UI successfully received data

### Console Filter Commands

```javascript
// Show only API logs
console.log = console.log; // Filter: [API

// Show only errors
console.log = console.log; // Filter: ERROR

// Show only UI interactions
console.log = console.log; // Filter: [ARTIST+SONG UI]

// Show full flow for specific search
console.log = console.log; // Filter: Skank
```

This logging system provides complete visibility into the Artist + Song Search functionality, making it easy to debug issues, optimize performance, and understand the application flow.
