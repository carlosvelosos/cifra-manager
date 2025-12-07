# Guitar Chord Dictionary

A modern, minimalist chord dictionary page for browsing and learning guitar chord fingerings.

## Features

✨ **Modern UI**

- Clean, minimalist design with Tailwind CSS
- Responsive layout (mobile, tablet, desktop)
- Smooth transitions and interactions

🔍 **Smart Search**

- Real-time search by chord name (e.g., "Am", "Cmaj7", "G7")
- Instant filtering without page reloads
- Autocomplete suggestions

🎸 **Chord Browser**

- Browse by key (C, C#, D, Eb, E, F, F#, G, Ab, A, Bb, B)
- Filter by chord type (major, minor, dim, 7th, sus, etc.)
- View all available voicings for each chord

📊 **Chord Visualization**

- SVG-based chord diagrams showing:
  - String and fret positions
  - Finger numbering (1-4)
  - Muted strings (✕) and open strings (○)
  - Barre chords (highlighted in red)
  - Capo indicators
  - Fret numbers for reference

⚡ **Performance**

- Lazy-loaded chord data
- In-memory caching
- Efficient filtering and search

## File Structure

```
app/
  chords/
    page.tsx                    # Main page component

components/
  chord-diagram.tsx             # Chord diagram React component
  chords-page-widget.tsx        # Main dictionary widget

lib/
  chord-dict.ts                 # Chord data loading and utilities
  chord-diagram-renderer.ts     # SVG rendering engine
  chords/
    guitar.json                 # Chord data source
```

## Usage

### Access the Page

Navigate to `/chords` in your application to view the chord dictionary.

### API Reference

#### `loadChordData(): ChordDictionary`

Loads and caches the chord data from `guitar.json`.

```typescript
const data = loadChordData();
```

#### `getChordList(): ChordInfo[]`

Returns a flat list of all available chords.

```typescript
const chords = getChordList();
// Returns: [
//   { key: 'C', suffix: 'major', displayName: 'Cmajor' },
//   { key: 'C', suffix: 'minor', displayName: 'Cminor' },
//   ...
// ]
```

#### `findChord(key: string, suffix: string): Chord | null`

Find a specific chord by key and suffix.

```typescript
const chord = findChord("A", "minor");
// Returns: { key: 'A', suffix: 'minor', positions: [...] }
```

#### `getChordsForKey(key: string): Chord[]`

Get all chords for a specific key.

```typescript
const chords = getChordsForKey("G");
```

#### `searchChords(query: string): ChordInfo[]`

Search for chords by name (supports partial matching).

```typescript
const results = searchChords("Am");
// Returns: [
//   { key: 'A', suffix: 'minor', displayName: 'Aminor' },
//   ...
// ]
```

### Chord Diagram Component

```tsx
import { ChordDiagram } from "@/components/chord-diagram";

<ChordDiagram
  position={chordPosition}
  chordName="Am7"
  config={{
    strings: 6,
    fretsOnChord: 4,
    showFretNumbers: true,
  }}
/>;
```

#### Props

- `position: ChordPosition` - Finger position data
- `chordName: string` - Display name of the chord
- `config?: Partial<ChordDiagramConfig>` - Rendering options
- `className?: string` - Additional CSS classes

## Data Format

Each chord contains:

- `key`: Note name (C, C#, D, etc.)
- `suffix`: Chord type (major, minor, 7, maj7, etc.)
- `positions`: Array of voicings

Each position contains:

- `frets`: Array of fret numbers (1-24, -1 for muted, 0 for open)
- `fingers`: Finger numbers (1-4, 0 for open/muted)
- `baseFret`: Starting fret number (default: 1)
- `barres`: Array of fret numbers with barre chords
- `capo`: Boolean indicating if capo is required
- `midi`: MIDI note numbers

## Chord Diagram Rendering

The SVG renderer (`chord-diagram-renderer.ts`) creates visual chord diagrams with:

- **Fret Lines**: Horizontal lines representing frets
- **String Lines**: Vertical lines representing strings
- **Dots**: Finger positions with numbers
- **Barre Indicators**: Red curved lines showing barre frets
- **Muted/Open**: ✕ for muted strings, ○ for open strings
- **Capo Info**: Green indicator when capo is required

### Configuration

```typescript
interface ChordDiagramConfig {
  strings: number; // Number of strings (default: 6)
  fretsOnChord: number; // Frets to display (default: 4)
  stringWidth?: number; // Pixel width between strings (default: 45)
  fretHeight?: number; // Pixel height per fret (default: 30)
  padding?: number; // Padding around diagram (default: 25)
  showFretNumbers?: boolean; // Show fret numbers (default: true)
}
```

## Performance Considerations

1. **Caching**: Chord data is loaded once and cached in memory
2. **Search**: Implemented efficiently with string matching
3. **Rendering**: SVG diagrams are generated on-demand
4. **Bundle Size**: Chord data is embedded but loaded lazily

## Styling

The page uses Tailwind CSS with these utility classes:

- Layout: `flex`, `grid`, `space-y-*`
- Colors: `bg-white`, `text-gray-500`, `text-blue-500`
- Interactive: `hover:bg-gray-200`, `focus:ring-2`
- Typography: `font-light`, `uppercase`, `tracking-wide`

## Future Enhancements

- [ ] Capo suggestions for alternate voicings
- [ ] Chord transposition tools
- [ ] User-saved favorite chords (localStorage)
- [ ] Difficulty ratings for each voicing
- [ ] Video tutorials for challenging chords
- [ ] Ukulele and other instrument support
- [ ] Printing/PDF export
- [ ] Sharing chords via URL

## Technical Stack

- **React 19**: UI components
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **SVG**: Chord diagram rendering
- **lucide-react**: Icons (Search)
- **Next.js 15**: Framework and routing

## Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile browsers: ✅

## License

This chord dictionary uses guitar chord data from the `guitar.json` file. The chord positions and fingering information are based on standard guitar tuning and playing techniques.
