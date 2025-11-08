# Structured Cifra Implementation - Design Document

## Overview

Implement a structured data model for cifras (song sheets) that parses HTML content into a rich data structure, enabling multiple display modes, chord transposition, and enhanced user experience.

## Current State

- Cifras stored as plain text with HTML tags (`<b>`, `<span class="tablatura">`)
- Display component uses regex to detect tabs and formatting
- No structured understanding of chords vs lyrics
- Limited ability to manipulate or transform content

## Target State

- Parse HTML into structured data model
- Support multiple display modes (traditional, inline, above-lyrics)
- Enable chord transposition
- Preserve all information (tabs, chords, lyrics, sections)
- User preferences for display customization

---

## Design Requirements

### 1. Data Structure

#### CifraStructure

```typescript
interface CifraStructure {
  title: string;
  url?: string;
  sections: CifraSection[];
  chords: ChordDefinition[];
}

interface CifraSection {
  type:
    | "intro"
    | "verse"
    | "chorus"
    | "bridge"
    | "outro"
    | "instrumental"
    | "other";
  name?: string; // e.g., "Primeira Parte", "Refrão"
  content: ContentBlock[];
}

interface ContentBlock {
  type: "lyrics" | "tablatura" | "chord-progression";
  data: LyricsBlock | TablaturaBlock | ChordProgressionBlock;
}

interface LyricsBlock {
  lines: LyricsLine[];
}

interface LyricsLine {
  text: string;
  chords: ChordPosition[];
}

interface ChordPosition {
  chord: string;
  position: number; // Character position in the line
  bass?: string; // For bass notes like C/G
}

interface TablaturaBlock {
  title?: string; // e.g., "Parte 1 De 5", "Dedilhado - Intro"
  chord?: string; // Chord being played (if specified)
  lines: string[]; // Raw tab lines (E|, B|, etc.)
  notation?: string; // Additional info like "(4x)", "↓"
}

interface ChordProgressionBlock {
  progression: string; // e.g., "( Am  C  G )"
}

interface ChordDefinition {
  name: string;
  mount: string; // e.g., "X 0 2 2 1 0"
  tuning?: string; // e.g., "E A D G B E"
}
```

### 2. Display Modes

#### Mode 1: Traditional (Separate Lines)

- Chords on separate lines above/below lyrics
- Preserves original spacing
- Most familiar to users
- Default mode

#### Mode 2: Inline Chords

- Chords inline with lyrics at exact positions
- Modern, compact view
- Better for small screens
- Format: `Que vêm de [Am]dentro`

#### Mode 3: Above Lyrics

- Chords positioned above lyrics with alignment
- Sheet music style
- Clear visual hierarchy

```
     Am              C
Que vêm de dentro
```

### 3. User Preferences

#### Settings

```typescript
interface CifraPreferences {
  displayMode: "traditional" | "inline" | "above-lyrics";
  showTablatura: boolean;
  showChordDiagrams: boolean;
  transposeKey: number; // Semitones (-6 to +6)
  fontSize: "small" | "medium" | "large";
  highlightChords: boolean;
  autoScroll: boolean;
  autoScrollSpeed: number;
}
```

### 4. Features

#### Phase 1 - Core Structure

- [x] Define TypeScript interfaces
- [ ] HTML parser (extract chords, tabs, sections)
- [ ] Convert parsed data to structured format
- [ ] Traditional renderer (maintain current look)
- [ ] Update page.tsx files to use new structure

#### Phase 2 - Display Modes

- [ ] Create display mode context
- [ ] Implement inline renderer
- [ ] Implement above-lyrics renderer
- [ ] Add mode toggle in floating menu
- [ ] Persist user preference

#### Phase 3 - Chord Features

- [ ] Extract unique chords automatically
- [ ] Generate chord list from structure
- [ ] Chord transpose logic
- [ ] Update all chord occurrences on transpose
- [ ] Transpose UI controls

#### Phase 4 - Enhanced Features

- [ ] Clickable chords (show diagram)
- [ ] Chord diagrams modal
- [ ] Search by chord
- [ ] Highlight chord on hover
- [ ] Print-optimized views

---

## Implementation Plan

### Step 1: Define Types and Interfaces

**File:** `lib/types/cifra-types.ts`

- Create all TypeScript interfaces
- Export types for use across app
- Document each interface

### Step 2: Create HTML Parser

**File:** `lib/parsers/cifra-html-parser.ts`

- Parse `<b>` tags for chords
- Parse `<span class="tablatura">` for tabs
- Parse section markers `[Intro]`, `[Refrão]`, etc.
- Handle nested spans and formatting
- Extract chord positions relative to text

### Step 3: Create Data Converter

**File:** `lib/parsers/cifra-converter.ts`

- Convert parsed HTML to CifraStructure
- Group lines into sections
- Identify line types (lyrics, chords, tabs)
- Extract chord definitions
- Handle edge cases

### Step 4: Update CifraDisplay Component

**File:** `components/cifra-display.tsx`

- Accept CifraStructure instead of strings
- Implement traditional renderer first
- Maintain backward compatibility
- Ensure visual parity with current version

### Step 5: Create Display Mode Context

**File:** `lib/contexts/display-mode-context.tsx`

- Store display mode preference
- Store transpose settings
- Provide hooks for components
- Persist to localStorage

### Step 6: Implement Renderers

**Files:**

- `components/renderers/traditional-renderer.tsx`
- `components/renderers/inline-renderer.tsx`
- `components/renderers/above-lyrics-renderer.tsx`

Each renderer:

- Takes CifraStructure as input
- Renders according to mode style
- Handles tabs, chords, lyrics
- Maintains proper spacing

### Step 7: Create Mode Toggle UI

**File:** `components/floating-menu.tsx` (update)

- Add display mode selector
- Add transpose controls (+/- buttons)
- Show current transpose state
- Integrate with context

### Step 8: Implement Transpose Logic

**File:** `lib/utils/chord-transpose.ts`

- Chord name parser (handle C, C#, Cm, C7, etc.)
- Transpose algorithm
- Apply to all chords in structure
- Handle edge cases (bass notes, complex chords)

### Step 9: Migration Script

**File:** `scripts/convert-to-structured.ts`

- Convert existing page.tsx files
- Parse current cifra format
- Generate CifraStructure
- Update component usage
- Backup original files

### Step 10: Testing and Refinement

- Test with multiple songs
- Test all display modes
- Test transpose functionality
- Fix rendering issues
- Performance optimization

---

## File Structure

```
lib/
  types/
    cifra-types.ts              # Type definitions
  parsers/
    cifra-html-parser.ts        # HTML parsing logic
    cifra-converter.ts          # Convert to structure
  contexts/
    display-mode-context.tsx    # User preferences
  utils/
    chord-transpose.ts          # Transpose logic
    chord-utils.ts              # Chord name parsing/validation

components/
  cifra-display.tsx             # Main component (updated)
  renderers/
    traditional-renderer.tsx    # Traditional mode
    inline-renderer.tsx         # Inline mode
    above-lyrics-renderer.tsx   # Above lyrics mode
    tablatura-renderer.tsx      # Tab rendering (shared)
  floating-menu.tsx             # Updated with new controls

scripts/
  convert-to-structured.ts      # Migration script
```

---

## Acceptance Criteria

### Phase 1 - Core

- [ ] TypeScript interfaces defined and documented
- [ ] Parser correctly extracts chords from `<b>` tags
- [ ] Parser correctly extracts tabs from `<span class="tablatura">`
- [ ] Parser identifies section markers
- [ ] Traditional renderer looks identical to current version
- [ ] No visual regression

### Phase 2 - Display Modes

- [ ] Can switch between 3 display modes
- [ ] Mode preference persists across sessions
- [ ] Inline mode positions chords correctly
- [ ] Above-lyrics mode aligns chords properly
- [ ] All modes handle tabs correctly

### Phase 3 - Transpose

- [ ] Can transpose up/down by semitones
- [ ] All chord occurrences update
- [ ] Chord definitions update
- [ ] Handles complex chords (7th, sus, dim, etc.)
- [ ] Handles bass notes (C/G)
- [ ] UI shows current transpose state

### Phase 4 - Polish

- [ ] Performance is acceptable (< 100ms render)
- [ ] Mobile responsive
- [ ] Print-friendly
- [ ] Accessible (keyboard navigation)
- [ ] Error handling for malformed input

---

## Migration Strategy

### For Existing Songs

1. Keep HTML in page.tsx files (source of truth)
2. Parse on component mount
3. Cache parsed structure
4. No file changes needed initially

### For New Songs

1. Fetched HTML is already in correct format
2. Parser handles automatically
3. No special handling needed

### Rollback Plan

1. Keep old component as backup
2. Feature flag for new vs old
3. Can switch back if issues arise

---

## Technical Considerations

### Performance

- Parse once, cache result
- Memoize rendered output
- Virtual scrolling for long songs
- Lazy load chord diagrams

### Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard shortcuts for transpose
- Screen reader friendly

### Browser Compatibility

- Modern browsers (ES6+)
- localStorage for preferences
- No external dependencies for parsing

### Mobile

- Touch-friendly controls
- Responsive layout
- Optimized for small screens
- Swipe gestures for mode switch

---

## Future Enhancements

- [ ] Export to PDF
- [ ] Share with specific display mode
- [ ] Chord library/dictionary
- [ ] Playback/metronome integration
- [ ] Collaborative editing
- [ ] Chord suggestions/corrections
- [ ] Auto-detect key signature
- [ ] Capo simulation

---

## Success Metrics

- Zero visual regressions
- All songs render correctly
- User preference adoption rate
- Page load performance maintained
- User satisfaction (feedback)

---

## Timeline Estimate

- **Phase 1:** 4-6 hours (types, parser, converter, basic renderer)
- **Phase 2:** 3-4 hours (display modes, context, UI)
- **Phase 3:** 2-3 hours (transpose logic)
- **Phase 4:** 2-3 hours (polish, testing)
- **Total:** ~12-16 hours of development

---

## Next Steps

1. ✅ Review and approve this design document
2. Create git branch: `feature/structured-cifra`
3. Start with Step 1: Define Types
4. Implement incrementally
5. Test after each step
6. Merge when Phase 1 is stable
