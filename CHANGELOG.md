# Changelog

## [2.4.0] - 2025-06-28

### 🎵 Playlist Artists: CifraClub Song Fetching Feature

#### ✨ Added

- **CifraClub song fetching** for individual artists
  - "Fetch Songs" button for each artist in the playlist
  - Scrapes artist's CifraClub page to extract all available songs
  - Displays song name, URL, and view count data
  - Loading states with spinner and disabled button during operation
- **Enhanced song data display**
  - Expandable "CifraClub songs" section with song count
  - Clickable song links that open in new tabs
  - Hover effects showing view counts and external link icons
  - Scrollable list for artists with many songs (max height with overflow)
- **Robust HTML parsing**
  - Targets specific CifraClub HTML structure (`#js-a-songs`)
  - Extracts song metadata including `data-hits` attributes
  - Handles both relative and absolute URLs automatically
  - DOM parser implementation for reliable content extraction
- **CORS proxy integration**
  - Uses `https://api.allorigins.win/get` to bypass CORS restrictions
  - Comprehensive error handling for network issues
  - Fallback messaging for failed requests
- **Visual improvements**
  - Green-themed button design for song fetching
  - Improved playlist songs vs. CifraClub songs distinction
  - Better visual hierarchy and spacing in artist cards
  - Added Music icon for song fetching button

#### 🔄 Changed

- **Artist data structure** extended to support CifraClub songs:
  - Added `cifraClubSongs` array with song metadata
  - Added `fetchingSongs` loading state tracking
  - Enhanced TypeScript interfaces for better type safety
- **UI layout improvements**:
  - Distinguished between "playlist songs" and "CifraClub songs"
  - Better visual separation with color-coded borders
  - Enhanced hover states and interactive elements

#### 📚 Documentation

- **New comprehensive documentation**: `docs/playlist-artists-song-fetching.md`
  - Detailed technical implementation guide
  - HTML parsing algorithm explanation
  - User interface component documentation
  - Troubleshooting and security considerations
  - Future enhancement suggestions

## [2.3.0] - 2025-06-28

### 📊 Playlist Page: Smart Caching & Rate Limiting System

#### ✨ Added

- **24-hour persistent caching system** for search results
  - Automatic cache validation and expiration
  - localStorage integration for cross-session persistence
  - Cache statistics tracking (valid/expired entries)
  - Manual cache management with "Clear Cache" button
- **Conservative rate limiting** (80/100 daily API quota)
  - Automatic request counting and throttling
  - 500ms delay between API requests
  - Daily quota reset at midnight PT
  - Graceful fallback to direct URL construction when limit reached
- **Enhanced UI/UX indicators**
  - 💾 Cache hit indicators on search results
  - 🚦 Real-time API usage display (X/80 requests today)
  - Progress bars with completion statistics for batch searches
  - Status warnings for API issues and quota limits
  - Orange "Clear Cache" button with tooltip statistics
- **Sequential batch processing**
  - Songs processed one by one to respect rate limits
  - Small delays between requests to avoid API overwhelming
  - Real-time progress tracking with song-by-song updates
- **Comprehensive error handling**
  - API quota exceeded detection and automatic fallback
  - Network error recovery with alternative methods
  - Clear user feedback for all error conditions
- **Developer tools & debugging**
  - Detailed console logging with emoji prefixes
  - localStorage inspection helpers
  - Manual reset functions for development
  - Cache and rate limit statistics functions

#### 🔄 Changed

- **Search function architecture** completely redesigned:
  - Cache-first approach with API fallback
  - Multi-strategy URL construction and validation
  - Enhanced error handling and recovery
  - Persistent state management across sessions
- **Batch search processing** now sequential instead of parallel:
  - Respects rate limiting constraints
  - Provides better progress feedback
  - Reduces API server load
  - Improves reliability and error handling

#### 📚 Documentation

- Added comprehensive technical documentation (`docs/playlist-caching-rate-limiting.md`)
- Created developer quick reference guide (`docs/playlist-caching-quick-reference.md`)
- Enhanced inline code documentation with detailed JSDoc comments
- Updated main README with new feature descriptions

#### 🛠️ Technical Implementation

- **State Management**: New cache and rate limit state with TypeScript interfaces
- **localStorage Integration**: Automatic save/load with error handling
- **Performance Optimization**: Reduced API calls by up to 100% for cached results
- **Error Recovery**: Multiple fallback strategies ensure results even when API fails
- **User Experience**: Transparent caching with clear indicators and feedback

#### 💾 Cache System Details

```typescript
// Cache entry structure
interface CacheEntry {
  urls: string[]; // Found CifraClub URLs
  timestamp: number; // When cached (Date.now())
  source: "api" | "direct" | "cache" | "fresh"; // Result source
}

// Rate limit state
interface RateLimitState {
  requestCount: number; // Daily API request count
  lastResetTime: number; // Last reset timestamp
  isThrottled: boolean; // Current throttle status
}
```

## [2.2.0] - 2025-06-17

### 🎨 Interactive Search Experience & Animation System

#### ✨ Added

- **Mouse-triggered hero animation** - Hero content animates out when user moves mouse
- **Centered floating search** - Search component appears in perfect center of screen
- **Interactive revert system** - Animation reverts after 5 seconds of inactivity
- **Keyboard interaction detection** - Typing in search resets the inactivity timer
- **Auto-scrolling search results** - Keyboard navigation automatically scrolls results into view
- **Fullscreen cifra display** - Search results can be viewed in fullscreen with CifraDisplay component
- **Current tab navigation** - Local search results open in current tab instead of new tabs
- **Coordinated animation system** - Hero section and search component work together seamlessly

#### 🔄 Changed

- **Enhanced FloatingSearch component** with:
  - 2x wider search input (max-w-4xl)
  - Smooth fade-in/scale animations
  - Better interaction handling
  - Auto-scroll for keyboard navigation
- **Improved HeroSection component** with:
  - Mouse movement detection
  - Directional content animation (headings up, paragraph down)
  - Smart timeout management
  - External state coordination
- **Updated ArtistSongDisplay component** with:
  - True fullscreen mode
  - CifraDisplay integration
  - Better visual hierarchy
- **Enhanced user interactions**:
  - Current tab navigation for local results
  - Smooth scrolling for keyboard navigation
  - Responsive animation triggers

#### 🐛 Fixed

- **Build compilation errors** - Removed unused imports and fixed ref cleanup warnings
- **TypeScript compliance** - All components now build without errors or warnings
- **Animation coordination** - Search appearance and hero disappearance now work together
- **Keyboard navigation** - Search results properly scroll into view when using arrow keys
- **Navigation behavior** - Local search results open in current tab for better UX

#### 🎯 User Experience Improvements

- **Intuitive search discovery** - Mouse movement reveals search functionality
- **Smooth transitions** - All animations use consistent 1000ms easing
- **Keyboard-friendly** - Full keyboard navigation with auto-scrolling
- **Responsive design** - Works seamlessly across different screen sizes
- **Visual feedback** - Clear animation states and loading indicators

#### 🏗️ Technical Enhancements

- **Clean build process** - No TypeScript errors or ESLint warnings
- **Proper ref management** - Fixed React hooks warnings with proper cleanup
- **Event coordination** - Mouse and keyboard events properly managed
- **Performance optimization** - Smooth animations without blocking UI

#### 📁 Files Modified

- `components/floating-search.tsx` - Enhanced with animations and auto-scroll
- `components/hero-section.tsx` - Added mouse detection and coordinated animations
- `components/artist-song-display.tsx` - Integrated fullscreen CifraDisplay
- `app/page.tsx` - Coordinated animation state management

#### 🧪 Testing

- ✅ Build validation passed (pnpm build successful)
- ✅ TypeScript compilation clean
- ✅ ESLint validation passed
- ✅ Animation timing verified
- ✅ Keyboard navigation tested
- ✅ Responsive behavior confirmed

## [2.1.0] - 2025-06-15

### 🎸 Enhanced Tab Block Detection & Highlighting

#### ✨ Added

- **Advanced tab notation support** - Handles all real-world guitar tab symbols including:
  - Multi-digit frets (10, 12, 15)
  - Muted strings (x)
  - Hammer-ons (h) and pull-offs (p)
  - Bends (b) and releases (r)
  - Slides (/, \) and vibrato (~)
  - Strumming arrows (↓, ↑)
- **Smart block identification** - Only highlights complete 6-line guitar tab blocks
- **Gap tolerance** - Allows up to 2 empty lines within tab blocks for better formatting
- **Context highlighting** - Highlights lines above and below tab blocks for visual clarity
- **Column-safe processing** - Prevents tab blocks from being split across columns
- **Enhanced regex pattern** - `/^[EBGDAE]\|[0-9\-~\.\/\\\|\sxhpbr↓↑]+\|?\s*$/`

#### 🔄 Changed

- **Enhanced CifraDisplay component** with improved tab detection algorithm
- **Updated song page parsing** to handle both Unix and Windows line endings
- **Improved visual styling** with red background and left border for tab blocks
- **Better edge case handling** for tabs at file start/end and irregular formatting

#### 🐛 Fixed

- **Line ending compatibility** - Fixed parsing issues with different line ending formats
- **Complex notation detection** - Now properly detects tabs in songs like "Bijuteria" and "Vida Vazia"
- **False positive prevention** - Excludes arrow-only strumming patterns from tab detection
- **Build process compatibility** - Enhanced algorithm maintains clean build without errors

#### 📚 Documentation

- **Complete algorithm documentation** in `docs/tab-block-detection-algorithm.md`
- **Quick reference guide** in `docs/tab-detection-quick-reference.md`
- **API documentation** in `docs/cifra-display-api-documentation.md`
- **Development guide** in `docs/tab-detection-development-guide.md`
- **Updated main README** with comprehensive feature overview

## [2.0.0] - 2025-06-13

### 🎉 Major Update: Artist Page Redesign

#### ✨ Added

- **New reusable `ArtistPage` component** for all artist pages
- **Real-time search functionality** with instant filtering
- **Enhanced UI design** with modern card-based layout
- **Professional loading states** with animated spinners
- **Artist descriptions** and metadata display
- **Numbered song entries** for better organization
- **Search result counter** and empty state handling
- **Input component** (`components/ui/input.tsx`) for forms
- **Comprehensive documentation** for the new component system

#### 🔄 Changed

- **Refactored artist pages** to use shared component
- **Improved visual hierarchy** with better typography and spacing
- **Enhanced accessibility** with proper ARIA labels and semantic HTML
- **Optimized performance** with better state management
- **Standardized API** across all artist pages

#### 🗑️ Removed

- **Duplicate code** from individual artist page implementations
- **Inconsistent styling** across different artist pages
- **Basic loading text** replaced with professional loading UI

#### 📊 Impact

- **84% code reduction** in individual artist page files
- **Unified user experience** across all artist pages
- **Improved maintainability** with single source of truth
- **Enhanced search capabilities** for better content discovery

#### 📁 Files Modified

- `components/artist-page.tsx` (NEW)
- `components/ui/input.tsx` (NEW)
- `app/artists/revelacao/page.tsx` (REFACTORED)
- `app/artists/zeca-pagodinho/page.tsx` (REFACTORED)
- `docs/artist-page-component.md` (NEW)
- `docs/artist-page-redesign-update.md` (NEW)

#### 🧪 Testing

- ✅ Build validation passed
- ✅ TypeScript compilation successful
- ✅ ESLint validation passed
- ✅ Component functionality verified
- ✅ Search performance tested
- ✅ Responsive design confirmed

#### 🚀 Deployment

- Ready for production deployment
- No breaking changes for end users
- Backward compatible with existing functionality
- All routes and navigation preserved

---

### Previous Versions

## [1.0.0] - Previous

- Initial artist page implementations
- Basic song listing functionality
- Individual page components for each artist
