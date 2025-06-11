# Developer Debug Cheat Sheet - Artist + Song Search

## 🚀 Quick Debug Setup

1. **Open Console**: `F12` → Console tab
2. **Clear logs**: `Ctrl+L`
3. **Search**: Enter "Artist - Song" format
4. **Watch logs**: Real-time flow tracking

## 🎯 Essential Console Filters

Copy these filters directly into the console filter box:

```
# All API processing
[API

# UI interactions only
[ARTIST+SONG UI]

# Errors only
ERROR|CRITICAL|failed|❌|💥

# Content extraction
[API - EXTRACT]

# Specific search (replace with your query)
Skank
```

## 🔍 Key Checkpoints

### 1. Search Initiated

```
🚀 [ARTIST+SONG UI] Search button clicked, query: [YOUR_QUERY]
```

**If missing**: Check UI event handlers

### 2. Query Parsed Correctly

```
🎯 [API - MAIN] Parsed query: { type: "artist_and_song", artist: "...", song: "..." }
```

**If `artist_only`**: Query format issue - ensure "Artist - Song" format

### 3. Google API Working

```
📊 [API - MAIN] Google API results count: [NUMBER]
```

**If 0**: Check Google API credentials or network

### 4. Cavaco Parameters Added

```
✅ [API - CAVACO] Cavaco params added: [URL]#tabs=false&instrument=cavaco
```

**If missing**: Check URL pattern matching

### 5. Content Extracted

```
✨ [API - EXTRACT] Content extracted and cleaned, length: [NUMBER]
```

**If 0 or null**: Page structure changed or fetch failed

### 6. UI Updated

```
📊 [ARTIST+SONG UI] Result received: { url: "...", contentLength: [NUMBER], hasContent: true }
```

**If missing**: Check hook state management

## 🚨 Common Error Patterns

### Network Issues

```
💥 [ARTIST+SONG SEARCH] Request failed with error: NetworkError
```

**Fix**: Check internet connection, API endpoints

### API Limits/Auth

```
❌ [API - MAIN] Google API response status: 403
```

**Fix**: Check Google API key, daily limits, billing

### Content Not Found

```
❌ [API - EXTRACT] No cifra content found in any pattern
```

**Fix**: Check if URL is valid, page structure changed

### Query Format

```
⚠️ [ARTIST+SONG UI] Search attempted with empty query
```

**Fix**: Ensure proper "Artist - Song" format

## 🛠️ Debug Commands

### Test Specific Functions

```javascript
// Test query parsing (paste in console)
const testQuery = "Skank - Garota Nacional";
console.log("Testing query:", testQuery);

// Check if Google API is configured
console.log("Google API Key:", process.env.GOOGLE_API_KEY ? "SET" : "NOT SET");
console.log("Google CX:", process.env.GOOGLE_CX ? "SET" : "NOT SET");
```

### Mock API Response

```javascript
// Test UI with mock data (paste in console)
const mockResult = {
  url: "https://www.cifraclub.com.br/test/song/#tabs=false&instrument=cavaco",
  content: "Test cifra content here",
};
// Then trigger a search to see if UI handles it
```

## 📊 Performance Monitoring

### Response Times

Look for time gaps between:

1. `🔍 [ARTIST+SONG SEARCH] Calling API`
2. `✅ [ARTIST+SONG SEARCH] API response successful`

**Normal**: < 3 seconds  
**Slow**: > 5 seconds (check network/API)

### Content Size

```
✨ [API - EXTRACT] Content extracted and cleaned, length: [SIZE]
```

**Normal**: 1000-5000 characters  
**Suspicious**: < 100 (likely extraction failed)

## 🎵 Test Queries

### Working Examples

- `Skank - Garota Nacional`
- `Legião Urbana - Tempo Perdido`
- `Charlie Brown Jr - Zoio de Lula`
- `Capital Inicial - Primeiros Erros`

### Edge Cases

- `Artist` (no song - should detect as artist_only)
- `Artist Song` (no separator - should detect as artist_only)
- `Artist - ` (empty song)
- `- Song` (empty artist)

## 🔧 Environment Check

```javascript
// Check environment variables (paste in console)
console.log("Environment check:");
console.log("- Google API Key:", typeof process.env.GOOGLE_API_KEY);
console.log("- Google CX:", typeof process.env.GOOGLE_CX);
console.log("- Node ENV:", process.env.NODE_ENV);
```

## 📱 Mobile Debug

For mobile debugging:

1. Enable remote debugging in Chrome
2. Connect device via USB
3. Visit `chrome://inspect`
4. Use same console commands

## 🆘 Emergency Reset

If everything breaks:

```javascript
// Clear all states (paste in console)
localStorage.clear();
sessionStorage.clear();
location.reload();
```

## 📞 Support Escalation

If logs show:

- `💥 [API - MAIN] CRITICAL ERROR`
- Multiple `❌` patterns
- Complete silence after search

**Immediate actions**:

1. Save console output (`Right-click → Save as`)
2. Note exact search query used
3. Check network tab for failed requests
4. Verify environment variables
