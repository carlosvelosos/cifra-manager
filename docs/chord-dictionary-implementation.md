# Chord Dictionary Implementation Guide

## Overview

This guide documents the implementation of the modern, minimalist Chord Dictionary feature for the CifraManager application.

## Architecture

### Data Flow

```
guitar.json (static data)
    ↓
lib/chord-dict.ts (loading & caching)
    ↓
lib/chord-diagram-renderer.ts (SVG generation)
    ↓
components/chord-diagram.tsx (React component)
    ↓
components/chords-page-widget.tsx (UI logic)
    ↓
app/chords/page.tsx (page route)
```

## File Structure

```
app/
├── chords/
│   └── page.tsx                     # Page component

components/
├── chord-diagram.tsx                # SVG chord display component
├── chord-diagram.stories.tsx        # Storybook stories
└── chords-page-widget.tsx           # Main widget

lib/
├── chord-dict.ts                    # Data loading utilities
├── chord-diagram-renderer.ts        # SVG generation
└── chords/
    └── guitar.json                  # Chord data source

docs/
├── chord-dictionary.md              # User documentation
└── chord-dictionary-implementation.md  # This file

tests/
└── chord-dict.test.ts              # Unit tests
```

## Components

### 1. `chord-diagram-renderer.ts`

**Purpose**: Generate SVG markup for chord diagrams

**Key Functions**:

- `generateChordSVG()`: Main SVG generation engine
- `svgToDataUrl()`: Convert SVG to data URL for img tags

**Configuration Options**:

```typescript
{
  strings: 6,              // Number of strings
  fretsOnChord: 4,         // Frets to display
  stringWidth: 45,         // Pixel spacing
  fretHeight: 30,          // Fret height in pixels
  padding: 25,             // Diagram padding
  showFretNumbers: true    // Show fret labels
}
```

**SVG Elements**:

- Fret lines (horizontal)
- String lines (vertical)
- Finger dots with numbers
- Barre indicators
- Muted/open string markers
- Capo indicators
- Fret number labels

### 2. `chord-diagram.tsx`

**Purpose**: React wrapper for SVG chord diagram

**Props**:

```typescript
{
  position: ChordPosition,           // Finger data
  chordName: string,                 // Display name
  config?: ChordDiagramConfig,       // Render options
  className?: string                 // Additional CSS
}
```

**Behavior**:

- Memoizes SVG generation for performance
- Renders using `dangerouslySetInnerHTML` for SVG
- Responsive sizing with Tailwind classes
- Shows chord name below diagram

### 3. `chord-dict.ts`

**Purpose**: Load and manage chord data

**Key Functions**:

- `loadChordData()`: Load and cache full dataset
- `getChordList()`: Get all chords as flat array
- `findChord(key, suffix)`: Find specific chord
- `getChordsForKey(key)`: Get all chords for a key
- `getAllKeys()`: Get all available keys
- `getAllSuffixes()`: Get all chord types
- `searchChords(query)`: Search by name

**Caching Strategy**:

- Full data cached after first load
- Chord list cached for search performance
- In-memory only (no IndexedDB currently)

### 4. `chords-page-widget.tsx`

**Purpose**: Main UI component with search and filtering

**Features**:

- Search bar with real-time filtering
- Key selector (12 buttons)
- Type/suffix selector (scrollable list)
- Chord diagram display
- Voicing selection
- Chord info display
- Similar chords list

**State Management**:

```typescript
{
  searchQuery: string,            // Search text
  selectedKey: string,            // Selected key
  selectedSuffix: string | null,  // Selected type
  selectedPositionIndex: number   // Selected voicing
}
```

**Layout**:

- 3-column grid on desktop
- Responsive on mobile
- Left sidebar for filters
- Main area for chord display

### 5. `page.tsx`

**Purpose**: Route handler and page metadata

**Responsibilities**:

- Server-side page component
- SEO metadata
- Pass to client widget

## Data Format

### Chord Structure

```typescript
{
  "key": "C",
  "suffix": "major",
  "positions": [
    {
      "frets": [-1, 3, 2, 0, 1, 0],
      "fingers": [0, 3, 2, 0, 1, 0],
      "baseFret": 1,
      "barres": [],
      "capo": false
    },
    // ... more voicings
  ]
}
```

### Position Properties

- **frets**: Fret positions (-1=muted, 0=open, 1-24=fret number)
- **fingers**: Finger numbers (0=open/muted, 1-4=finger)
- **baseFret**: Starting fret (for barres)
- **barres**: Array of fret numbers with barre chords
- **capo**: Boolean indicating capo requirement
- **midi**: MIDI note numbers (optional)

## Styling

### Colors

- Primary: Blue (#3b82f6)
- Neutral: Gray (#6b7280)
- Accent: Teal (#4ecdc4) for capo
- Muted text: Light gray (#d1d5db)

### Typography

- Headers: `font-light` (300 weight)
- Labels: `uppercase`, `text-xs`, `tracking-wide`
- Content: Standard weight with gray tones

### Layout Classes

- Spacing: `gap-4`, `mb-6`, `p-4`
- Grid: `grid-cols-3` for keys, responsive on mobile
- Responsive: `lg:col-span-2`, `sm:grid-cols-3`

## Performance Optimizations

### 1. Data Caching

- Chord data loaded once and cached
- Chord list indexed for fast search
- No redundant computations

### 2. Memoization

- SVG generation memoized in component
- Search results memoized
- Available suffixes filtered once

### 3. Lazy Loading

- Data loaded on first access
- No preloading of unused data
- Search optimized with string methods

### 4. Bundle Size

- Chord data embedded in guitar.json
- SVG generated dynamically (not pre-rendered)
- Components use existing dependencies

## Search Implementation

### Algorithm

1. Normalize query: lowercase, trim whitespace
2. Iterate through chord list
3. Check if chord name includes query
4. Return matches

### Examples

- "Am" → finds all A minor chords
- "C" → finds all C chords
- "maj" → finds all major chords
- "7b9" → finds all 7b9 chords

### Performance

- O(n) where n = number of chords (~1000+)
- Instant on modern devices
- No debouncing needed (simple algorithm)

## UI/UX Decisions

### 1. Mobile-First Design

- Stacked layout on mobile
- Grid layout on desktop
- Touch-friendly button sizes

### 2. Minimalist Aesthetic

- Light background
- Generous whitespace
- Clear typography hierarchy
- Minimal colors

### 3. Interaction Patterns

- Buttons with hover states
- Active state highlighting
- Smooth transitions
- No animations (clean look)

### 4. Information Hierarchy

- Chord name most prominent
- Voicings secondary
- Detailed info in subtle section

## Integration Points

### 1. With ChordsContext

Currently independent. Could integrate:

```typescript
const { setChordsContent } = useChords();
// When a chord is selected, update context
```

### 2. With CifraDisplay

Could add "View in dictionary" button:

```typescript
<button onClick={() => navigate(`/chords?chord=Am`)}>View in Dictionary</button>
```

### 3. With Song Display

Show relevant chords from song in dictionary:

```typescript
const [selectedChord] = useChords();
// Pre-select chord in dictionary
```

## Future Enhancements

### Phase 1: Enhancement

- [ ] URL-based preset selection (`/chords?key=G&suffix=major`)
- [ ] Print/PDF export
- [ ] Dark mode toggle
- [ ] Favorite chords (localStorage)

### Phase 2: Advanced Features

- [ ] Capo suggestions
- [ ] Transpose tool
- [ ] Video tutorials per chord
- [ ] Difficulty ratings
- [ ] User submissions

### Phase 3: Extended Instruments

- [ ] Cavaquinho support
- [ ] Ukulele support
- [ ] Piano chords
- [ ] Banjo fingerings

### Phase 4: Community

- [ ] User chord library
- [ ] Sharing/URLs
- [ ] Comments on chords
- [ ] Alternative fingerings

## Testing

### Unit Tests

```bash
npm test -- chord-dict.test.ts
```

Covers:

- Data loading and caching
- Search functionality
- Chord filtering
- Data validation

### Component Tests

```bash
npm run storybook
```

Storybook stories demonstrate:

- Basic chord diagrams
- Barre chords
- Various sizes
- Multiple chords grid

### Integration Tests

1. Navigate to `/chords`
2. Test search functionality
3. Test key/suffix filtering
4. Test voicing selection
5. Test responsive design

## Deployment

### Build

```bash
npm run build
```

### Configuration

No special environment variables needed. Uses static data from `guitar.json`.

### Performance Targets

- Page load: < 1s
- Search response: < 100ms
- Diagram render: < 50ms

## Troubleshooting

### Issue: Chords not loading

- Check `guitar.json` exists and is valid JSON
- Verify import path in `chord-dict.ts`
- Check browser console for errors

### Issue: Diagrams not rendering

- Verify SVG generation in `chord-diagram-renderer.ts`
- Check `ChordDiagram` component receives valid position
- Inspect generated SVG in browser DevTools

### Issue: Search not working

- Verify search function receives string
- Check case-sensitivity handling
- Ensure chord data is loaded

### Issue: Layout broken on mobile

- Check Tailwind responsive classes
- Verify viewport meta tag
- Test on actual mobile device

## Contributing

### Adding New Chords

1. Update `guitar.json` with new positions
2. Run tests to verify data format
3. Test in UI

### Improving UI

1. Edit `chords-page-widget.tsx`
2. Update Tailwind classes
3. Test responsive layout
4. Update Storybook stories

### Optimizing Performance

1. Profile with DevTools
2. Identify bottlenecks
3. Implement caching/memoization
4. Benchmark improvements

## References

- **Guitar Tuning**: E2-A2-D3-G3-B3-E4
- **Standard Chords**: major, minor, 7, maj7, m7, dim, aug
- **Fret Range**: 1-24 (common acoustic/electric)
- **Fingers**: 1=index, 2=middle, 3=ring, 4=pinky

## License

Chord positions and fingering information based on standard guitar playing techniques and notation conventions.

---

**Last Updated**: December 2024
**Maintainer**: CifraManager Team
