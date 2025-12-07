# 🎸 Chord Dictionary - Visual Walkthrough

## Page Layout Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     Chord Dictionary                             │
│                   Explore guitar chord fingerings               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  🔍 Search chords (e.g., Am, Cmaj7, G7)...                      │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────┬────────────────────────────────────────────────┐
│                  │                                                 │
│  LEFT SIDEBAR    │         MAIN CONTENT AREA                      │
│                  │                                                 │
│  KEY SELECTOR    │  ┌──────────────────────────────────────────┐  │
│  [C] [C#] [D] .. │  │  Cmajor                                  │  │
│  [E] [F] [F#] .. │  │  3 voicings                              │  │
│  [G] [Ab] [A] .. │  │                                          │  │
│  [Bb] [B]       │  │  ┌────────────────────────────────────┐ │  │
│                  │  │  │  ●══●╭── Chord Diagram (SVG)  │ │  │
│  TYPE SELECTOR   │  │  │  │ 1│        ╱                 │ │  │
│  All Types      │  │  │  │ 2│       ╱                  │ │  │
│  major          │  │  │  ●  ●      ╱                   │ │  │
│  minor          │  │  │  ●╮    ╲                        │ │  │
│  dim            │  │  │    ●     ╲                      │ │  │
│  7              │  │  │                                 │ │  │
│  maj7           │  │  │  Base Fret: 1                   │ │  │
│  m7             │  │  └────────────────────────────────┘ │  │
│  [scroll]       │  │                                       │  │
│                  │  │  VOICINGS:                           │  │
│                  │  │  [Position 1] [Position 2]           │  │
│                  │  │  [Position 3] [Position 4]           │  │
│                  │  │                                       │  │
│                  │  │  CHORD INFO:                         │  │
│                  │  │  Base Fret: 1    │  Capo: No        │  │
│                  │  │                                       │  │
│                  │  │  OTHER C CHORDS:                     │  │
│                  │  │  [Cmaj] [Cmin] [C7] [Cmaj7]         │  │
│                  │  │  [Cdim] [Caug] [Csus2] [Csus4]      │  │
│                  │  └──────────────────────────────────────┘  │
└──────────────────┴────────────────────────────────────────────────┘
```

## Desktop View (1024px+)

**3-Column Layout**

- 25% Width: Filter sidebar
- 75% Width: Main content
- Spacious, easy to read
- All controls visible

## Tablet View (768px-1023px)

**Responsive Grid**

- Sidebar below search on smaller tablets
- Adjusts column widths
- Touch-friendly spacing

## Mobile View (<768px)

**Stacked Layout**

- Full-width search
- Filters above content
- Single column
- Touch-optimized buttons

## Component States

### Search Input

```
Normal State:
┌──────────────────────────────────────────────────────────┐
│ 🔍 Search chords (e.g., Am, Cmaj7, G7)...              │
└──────────────────────────────────────────────────────────┘

Active State (typing):
┌──────────────────────────────────────────────────────────┐
│ 🔍 Am                          ┆ (cursor blinking)      │
│ ✨ Focus ring visible          │ Blue border             │
└──────────────────────────────────────────────────────────┘
```

### Key Buttons (Row of 12)

```
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│  C  │ C#  │  D  │ Eb  │  E  │  F  │ F#  │  G  │ Ab  │  A  │ Bb  │  B  │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

Normal: Light gray background, dark text
Hover:  Slightly darker gray
Active: Blue background, white text
```

### Chord Diagram (SVG)

```
Standard 6-String Guitar:

         Fret Number
              1
    │   │   │   │
    E ─●───●───●  ← String positions
    A ─✕───○───●  ○ = Open, ✕ = Muted, ● = Finger
    D ───●───●───
    G ───●───○───
    B ───○───●───
    E ─✕───●───●

Barre Chord:
    ╭─────────╮
    │ ▄▄▄▄▄▄▄ │ ← Red barre indicator
    E ─●───●───●
    A ─●───○───●  Capo: Required
    ...

Multiple Frets:
    1  2  3  4
    ┌────┬────┬────┬────┐
    │ ●  │    │    │    │
    │    │ ●  │    │    │
    │    │    │ ●  │    │
    │    │    │    │ ●  │
    └────┴────┴────┴────┘
```

### Type/Suffix Selector

```
Scrollable List with Selection:

[All Types]  ← Currently selected, blue background
major        ← Dark text on light gray hover
minor
dim
dim7
sus
sus2
sus4
...
add9
[scroll down to see more]
```

### Position Navigation

```
Voicing Buttons:

┌────────────┬────────────┬────────────┬────────────┐
│ Position 1 │ Position 2 │ Position 3 │ Position 4 │
└────────────┴────────────┴────────────┴────────────┘
     ↑
   Active (blue), shows finger positions

Next to each:
  Position 1 🔒  ← Capo icon if required
```

### Chord Info Section

```
Subtle gray background with details:

┌──────────────────────────────────┐
│ Base Fret: 1   │  Capo: Required │
│ Barre Frets: 1 │                 │
└──────────────────────────────────┘
```

## Interaction Flows

### Finding a Chord by Search

```
1. User opens /chords page
2. Sees search input focused
3. Types "Am"
4. Results filter in real-time
5. A minor chord displays
6. Shows first position by default
7. User clicks "Position 2"
8. Diagram updates instantly
```

### Browsing by Key

```
1. User sees key selector buttons
2. Clicks "G"
3. All G chords appear in main area
4. User clicks "major"
5. Only G major chord displays
6. Shows all G major voicings
7. User clicks another key
8. Interface resets to show new key
```

### Learning from Diagram

```
1. User sees chord diagram
2. Identifies strings (vertical lines)
3. Finds frets (horizontal lines)
4. Reads finger numbers (1-4)
5. Applies to guitar neck
6. Can switch voicings to try different fingerings
7. Checks "Base Fret" for barres
8. Looks for capo indicator
```

## Color Scheme

### Primary Colors

- **Background**: White (#ffffff)
- **Primary Action**: Blue (#3b82f6)
- **Neutral Text**: Gray (#374151)

### Secondary Colors

- **Light Gray**: #f3f4f6 (backgrounds)
- **Dark Gray**: #6b7280 (secondary text)
- **Light Border**: #e5e7eb (subtle dividers)
- **Accent**: Teal (#4ecdc4) for capo

### Chord Diagram Colors

- **Strings**: Dark (#333333)
- **Frets**: Dark (#333333)
- **Dots**: Dark (#333333)
- **Finger Numbers**: White
- **Barre**: Red (#ff6b6b)
- **Capo**: Teal (#4ecdc4)
- **Muted/Open**: Gray (#999999)

## Typography Hierarchy

### H1 - Page Title

"Chord Dictionary" - 2xl, light weight

### H2 - Chord Name

"Cmajor" - 3xl, light weight

### H3 - Section Titles

"Key", "Type", "Voicings" - xs, uppercase, tracked

### Body Text

Regular size, readable gray

### Labels

Small, uppercase, tracked for emphasis

## Accessibility Features

### Keyboard Navigation

- Tab through buttons
- Enter to select
- Space to activate
- Arrow keys for navigation

### Screen Readers

- Semantic HTML structure
- Alt text for diagrams
- ARIA labels where needed
- Heading hierarchy

### Color Contrast

- All text meets WCAG AA standards
- Not relying on color alone
- Active states use background + shape
- Sufficient contrast ratios

### Touch Targets

- Buttons minimum 44x44px
- Adequate spacing between
- Large enough for easy tapping
- Hover states visible

## Responsive Breakpoints

### Mobile (< 768px)

- Single column layout
- Full-width search
- Stacked filters
- Touch-friendly spacing

### Tablet (768px - 1024px)

- 2-column layout option
- Adjusted sidebar width
- Hybrid layout

### Desktop (> 1024px)

- 3-column grid
- Optimal spacing
- All features visible
- Side-by-side comparison

## Animation & Transitions

### Hover Effects

- Button backgrounds slightly darken
- Smooth 150ms transition
- Visual feedback without delay

### Selection

- Active button highlights immediately
- Blue background with white text
- Clear visual state

### Search Results

- Instant filtering (no delay)
- Smooth content update
- No loading indicator needed

### Diagram Updates

- SVG renders instantly
- Smooth visual transition
- No flicker or delay

## Performance Indicators

### Load Time

- Page initial load: < 1s
- Diagram render: < 50ms
- Search response: instant

### Interaction Response

- Button clicks: immediate
- Search filtering: real-time
- Diagram switching: instant
- No lag or stuttering

---

**This walkthrough provides a complete visual understanding of the Chord Dictionary interface, layout, interactions, and user experience.**

For implementation details, see: `docs/chord-dictionary-implementation.md`
For usage guide, see: `docs/chord-dictionary-quick-start.md`
