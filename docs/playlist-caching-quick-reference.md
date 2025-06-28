# Playlist Page: Caching & Rate Limiting Quick Reference

## 🚀 Quick Start

The playlist page now includes intelligent caching and rate limiting to optimize API usage and improve performance.

### Key Features

- ✅ **24-hour cache** - Results persist across sessions
- ✅ **Rate limiting** - Stays within Google API quota (80/100 daily)
- ✅ **Smart fallbacks** - Direct URL construction when API unavailable
- ✅ **Real-time status** - Cache hits, API usage, and progress tracking

### User Interface

#### Cache Indicators

- **💾 Icon** - Shows when results come from cache
- **"Clear Cache" Button** - Orange button to manually clear cache
- **Cache Stats** - Displays valid/expired cache counts in tooltips

#### Rate Limit Display

- **🚦 API Usage** - Shows X/80 requests used today
- **Yellow Warning** - When rate limited (using fallback method)
- **Progress Bar** - Real-time updates during batch searches

## 🔧 Configuration

### Constants (in `page.tsx`)

```typescript
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const MAX_API_REQUESTS_PER_DAY = 80; // Conservative limit
const REQUEST_DELAY = 500; // Delay between requests
```

### localStorage Keys

- `cifra-search-cache` - Cached search results
- `cifra-rate-limit` - Rate limiting state

## 🛠️ Developer Tools

### Debug Console Commands

```javascript
// Check cache data
console.log(JSON.parse(localStorage.getItem("cifra-search-cache")));

// Check rate limit status
console.log(JSON.parse(localStorage.getItem("cifra-rate-limit")));

// Clear everything
localStorage.removeItem("cifra-search-cache");
localStorage.removeItem("cifra-rate-limit");
```

### Console Log Patterns

- `💾 [PLAYLIST MINIMAL]` - Cache operations
- `🚦 [PLAYLIST MINIMAL]` - Rate limit operations
- `🔍 [PLAYLIST MINIMAL]` - API calls
- `🔄 [PLAYLIST MINIMAL]` - Fallback operations
- `🚫 [PLAYLIST MINIMAL]` - Rate limit reached

## 📊 Performance Impact

### Before Implementation

- Every search = API call
- No persistence across sessions
- Vulnerable to quota exceeded errors
- Slower response times

### After Implementation

- Cache hits = instant results
- 24-hour persistence
- Rate limiting prevents quota errors
- Fallback ensures reliability

### Typical Usage Patterns

- **First search**: API call → cached
- **Repeat search**: Cache hit → instant
- **After 24h**: Cache expired → fresh API call
- **Over rate limit**: Direct URL construction

## 🐛 Troubleshooting

### Cache Issues

**Problem**: Cache not persisting
**Solution**: Check localStorage quota, disable private browsing

**Problem**: Stale data
**Solution**: Use "Clear Cache" button or wait for 24h expiration

### Rate Limit Issues

**Problem**: Still getting quota errors
**Solution**: Lower `MAX_API_REQUESTS_PER_DAY`, check other API usage

**Problem**: Counter not resetting
**Solution**: Clear `cifra-rate-limit` from localStorage

### API Issues

**Problem**: No results despite working previously
**Solution**: Check Google API key, verify quota in Cloud Console

## 📝 Code Structure

### State Management

```typescript
// Cache with metadata
searchCache: Record<string, CacheEntry>;

// Rate limiting state
rateLimitState: RateLimitState;

// UI status tracking
searchStatus: SearchStatus;
```

### Key Functions

- `handleArtistSongSearch()` - Main search with caching
- `clearAllCache()` - Manual cache clearing
- `shouldUseAPI()` - Rate limit checking
- `getCacheStats()` - Cache statistics

### Search Flow

1. Check cache → 2. Check rate limit → 3. API call OR fallback → 4. Cache result

## 📚 Full Documentation

For comprehensive documentation, see:

- [`docs/playlist-caching-rate-limiting.md`](./playlist-caching-rate-limiting.md)

---

_Quick Reference - Updated June 28, 2025_
