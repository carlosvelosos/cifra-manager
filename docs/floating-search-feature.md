# Floating Search Bar Feature

## Overview

The floating search bar is an interactive search component that appears on the home page after the hero section opacity animation completes. It provides real-time search functionality across all artists and songs in the application with auto-completion capabilities.

## Implementation Details

### Components Created

#### 1. FloatingSearch Component (`components/floating-search.tsx`)

**Purpose**: A floating, centered search interface with auto-completion functionality.

**Key Features**:

- Glass-morphism design with backdrop blur
- Real-time search with 300ms debounce
- Keyboard navigation support
- Auto-completion dropdown
- Loading states and error handling
- Responsive design

**Props**:

```typescript
interface FloatingSearchProps {
  show: boolean; // Controls visibility of the search bar
}
```

**State Management**:

- `query`: Current search input
- `results`: Array of search results
- `isLoading`: Loading state indicator
- `selectedIndex`: Currently selected result index
- `showResults`: Controls dropdown visibility

### 2. Updated HeroSection Component (`components/hero-section.tsx`)

**Changes Made**:

- Added `showSearch` state to control search bar visibility
- Updated timer logic to show search bar 1 second after opacity animation
- Imported and rendered `FloatingSearch` component

### Animation Timeline

```
0s ────────────────── 3s ────────── 4s ─────────────→
   Hero Normal State    Opacity      Search Bar
                       Animation     Appears
                       Starts        (Fade In)
```

1. **0-3 seconds**: Hero section displays normally
2. **3 seconds**: Hero opacity reduces to 10% (1-second transition)
3. **4 seconds**: Floating search bar fades in (1-second transition)

## Search Functionality

### Data Source

The search functionality uses the existing `/api/artists` endpoint to fetch all artists and their songs. The search is performed client-side for optimal performance.

### Search Algorithm

1. **Input Processing**: Query is converted to lowercase for case-insensitive matching
2. **Artist Matching**: Searches through artist names using `includes()` method
3. **Song Matching**: Searches through all song titles across all artists
4. **Result Sorting**:
   - Exact matches appear first
   - Partial matches sorted alphabetically
   - Limited to 8 results maximum

### Search Result Types

```typescript
interface SearchResult {
  title: string; // Song title or artist name
  artist: string; // Artist name (empty for artist results)
  href: string; // Navigation URL
  type: "song" | "artist"; // Result type
}
```

## User Interface

### Visual Design

- **Container**: Fixed positioned overlay with pointer-events control
- **Input Field**: Large, rounded input with search icon and loading spinner
- **Dropdown**: Semi-transparent results list with backdrop blur
- **Result Items**: Clickable items with type indicators (badges)
- **Animations**: Smooth fade-in transitions and hover effects

### Type Indicators

- **Artist Results**: Blue badge with "Artista" label
- **Song Results**: Green badge with "Música" label

### Keyboard Navigation

| Key          | Action                      |
| ------------ | --------------------------- |
| `Arrow Down` | Move to next result         |
| `Arrow Up`   | Move to previous result     |
| `Enter`      | Navigate to selected result |
| `Escape`     | Close search and lose focus |

## Technical Implementation

### Debouncing

Search requests are debounced with a 300ms delay to prevent excessive API calls while typing.

```typescript
useEffect(() => {
  const debounceTimer = setTimeout(searchSongs, 300);
  return () => clearTimeout(debounceTimer);
}, [query]);
```

### Performance Optimizations

1. **Client-side Search**: All data is fetched once and filtered locally
2. **Result Limiting**: Maximum 8 results displayed
3. **Conditional Rendering**: Search only triggers with non-empty queries
4. **Memory Cleanup**: Proper cleanup of timers and event handlers

### Accessibility Features

- **Focus Management**: Proper focus states and blur handling
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Semantic HTML structure
- **Visual Feedback**: Clear loading and selection states

## CSS Classes and Styling

### Key Tailwind Classes Used

- `backdrop-blur-sm`: Glass-morphism effect
- `fixed inset-0`: Full-screen overlay positioning
- `pointer-events-none/auto`: Smart pointer event management
- `transition-opacity duration-1000`: Smooth fade animations
- `focus:ring-2 focus:ring-blue-500`: Focus indicators

### Responsive Design

The search bar is fully responsive with:

- `max-w-md`: Maximum width constraint
- `mx-4`: Horizontal margins on mobile
- Adaptive font sizes and padding

## Integration Points

### With Existing API

The component integrates with:

- `/api/artists`: Fetches all artists and songs data
- Next.js Router: Handles navigation to search results

### With Hero Section

- Controlled by `show` prop from parent component
- Appears after hero opacity animation completes
- Maintains visual hierarchy and timing

## Future Enhancements

### Potential Improvements

1. **Search History**: Local storage of recent searches
2. **Search Analytics**: Track popular searches
3. **Advanced Filtering**: Filter by artist, genre, or difficulty
4. **Voice Search**: Integration with Web Speech API
5. **Fuzzy Search**: More intelligent matching algorithm
6. **Recent Results**: Show recently accessed songs

### Performance Optimizations

1. **Virtual Scrolling**: For large result sets
2. **Result Caching**: Cache search results
3. **Prefetching**: Preload popular songs
4. **Search Indexing**: Server-side search index

## Code Examples

### Basic Usage

```tsx
import FloatingSearch from "./floating-search";

const MyComponent = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      {/* Other content */}
      <FloatingSearch show={showSearch} />
    </div>
  );
};
```

### Integration with Animation

```tsx
useEffect(() => {
  const searchTimer = setTimeout(() => {
    setShowSearch(true);
  }, 4000); // Show after 4 seconds

  return () => clearTimeout(searchTimer);
}, []);
```

## Testing Recommendations

### Manual Testing Checklist

- [ ] Search bar appears after 4 seconds on home page
- [ ] Typing triggers search results after 300ms
- [ ] Keyboard navigation works correctly
- [ ] Clicking results navigates to correct pages
- [ ] Loading states display properly
- [ ] No results message appears when appropriate
- [ ] Responsive design works on mobile devices
- [ ] Focus management works correctly

### Automated Testing

Consider adding tests for:

- Search result filtering logic
- Keyboard event handling
- Debounce functionality
- Navigation integration
- Accessibility compliance

## Dependencies

### Required Packages

- `react`: For component state and effects
- `next/navigation`: For routing functionality
- No additional external dependencies required

### Internal Dependencies

- `/api/artists`: Existing API endpoint
- Tailwind CSS: For styling
- TypeScript: For type safety

## Troubleshooting

### Common Issues

1. **Search not appearing**: Check timer values and show prop
2. **No results**: Verify API endpoint is accessible
3. **Navigation not working**: Ensure router is properly imported
4. **Styling issues**: Check Tailwind CSS compilation

### Debug Tips

- Console log the `artists` data to verify API response
- Check network tab for failed API requests
- Verify component props are passed correctly
- Test keyboard events in browser dev tools

## Maintenance Notes

- The search relies on the existing folder structure in `app/artists/`
- Adding new artists requires no code changes (dynamic discovery)
- Search performance scales with the number of songs/artists
- Regular testing recommended when adding new content
