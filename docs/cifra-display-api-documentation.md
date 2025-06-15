# CifraDisplay Component API Documentation

## Overview

The `CifraDisplay` component is the core component responsible for rendering song content with advanced features including tab block detection, highlighting, and responsive column layout.

## Component Interface

```typescript
interface CifraDisplayProps {
  title: string; // Song title
  mainCifra: string; // Main song content (lyrics, chords, tabs)
  chords: string; // Chord diagrams and additional information
}
```

## Core Features

### 1. Tab Block Detection & Highlighting

Automatically identifies and highlights guitar tablature blocks using sophisticated pattern recognition.

**Algorithm**: Enhanced regex pattern supports all common guitar tab notation
**Visual Style**: Red background with left border for clear identification
**Context**: Highlights lines above and below tab blocks

### 2. Content Section Highlighting

Special highlighting for different content types:

- **Tab Blocks**: Guitar tablature (6+ lines with string notation)
- **Section Markers**: Lines containing "[Intro]", "[Chorus]", "[Verse]", etc.
- **Part Indicators**: Lines matching "Parte X de Y" pattern
- **Context Lines**: Lines adjacent to tab blocks

### 3. Responsive Column Layout

Automatically splits content into columns based on length:

- **Short content**: Single column
- **Medium content**: Two columns
- **Long content**: Three columns
- **Column-safe**: Tab blocks are never split across columns

### 4. Hide/Show Toggle Integration

Integrates with global highlight settings context for user-controlled visibility.

## Internal Data Structures

### ProcessedLine Interface

```typescript
interface ProcessedLine {
  content: string; // Original line content
  isTab: boolean; // Part of a tab block (6+ consecutive lines)
  isTabContext: boolean; // Line above/below a tab block
  isParte: boolean; // Contains "Parte X de Y" pattern
  isBracket: boolean; // Contains "[section]" marker
}
```

## Core Functions

### identifyTabBlocks(text: string): ProcessedLine[]

Main algorithm for processing song content and identifying different line types.

**Process**:

1. Split text into individual lines
2. Apply regex patterns to identify tab lines, section markers, part indicators
3. Group tab lines allowing for small gaps (empty lines)
4. Mark groups with 6+ lines as valid tab blocks
5. Add context highlighting for adjacent lines

**Regex Patterns**:

```typescript
// Tab line detection (enhanced for all notation)
const tabLinePattern = /^[EBGDAE]\|[0-9\-~\.\/\\\|\sxhpbr↓↑]+\|?\s*$/;

// Part indicator detection
const partePattern = /^Parte\s+\d+\s+de\s+\d+\s*$/;

// Section marker detection
const bracketPattern = /\[.*?\]/;
```

### splitProcessedLinesIntoColumns(processedLines: ProcessedLine[], maxLinesPerColumn: number): ProcessedLine[][]

Intelligently splits content into columns while preserving highlighting.

**Logic**:

- Single column: ≤ maxLines × 1.2
- Two columns: ≤ maxLines × 2.2
- Three columns: > maxLines × 2.2

### renderProcessedText(processedLines: ProcessedLine[]): JSX.Element

Renders processed lines with appropriate CSS classes based on line properties.

**CSS Classes Applied**:

```typescript
// Tab block highlighting
"bg-red-200 border-l-4 border-red-500 px-2 py-0.5";

// Section marker highlighting
"bg-blue-100 border-l-4 border-blue-400 px-2 py-0.5 font-semibold";

// Part indicator highlighting
"bg-green-100 border-l-4 border-green-400 px-2 py-0.5 font-medium";
```

## Usage Examples

### Basic Usage

```typescript
import { CifraDisplay } from "@/components/cifra-display";

const SongPage = () => {
  const songContent = `
[Intro]
E|--3--2--0--2--3-----|
B|--0--0--0--0--0-----|
G|--0--0--0--0--0-----|
D|--0--0--0--0--0-----|
A|--2--2--2--2--2-----|
E|--3--3--3--3--3-----|

C                G
Verse lyrics here...
  `;

  return (
    <CifraDisplay
      title="Song Title"
      mainCifra={songContent}
      chords="C major: 032010"
    />
  );
};
```

### Advanced Content Processing

The component automatically handles:

```typescript
// Complex tab notation
const complexTabs = `
E|--0--2h3--/5\3--x--|
B|--3--3b4r3--3------|
G|--2--2----2--------|
D|--0--0----0--------|
A|--x--x----x--------|
E|--3--3----3--------|
`;

// Section markers
const sectionMarkers = `
[Intro]
[Verse 1]
[Chorus]
[Bridge]
`;

// Part indicators
const partIndicators = `
Parte 1 de 3
Parte 2 de 3
`;
```

## Integration with Highlight Context

The component integrates with the global `HighlightContext` for user-controlled visibility:

```typescript
import { useHighlightSettings } from "@/lib/highlight-context";

// Inside component
const { showHighlights } = useHighlightSettings();

// Conditionally apply highlighting based on user preference
const getLineClasses = (line: ProcessedLine) => {
  if (!showHighlights) return "";

  if (line.isTab || line.isTabContext) {
    return "bg-red-200 border-l-4 border-red-500 px-2 py-0.5";
  }
  // ... other highlighting logic
};
```

## Performance Considerations

### Optimization Strategies

1. **Memoization**: Consider memoizing processed lines for large content
2. **Regex Efficiency**: Optimized patterns for fast execution
3. **Column Processing**: Efficient splitting algorithm
4. **Render Optimization**: Minimal re-renders with proper key props

### Memory Usage

- **Small songs**: < 1MB processed data
- **Large songs**: 2-5MB processed data
- **Very large songs**: Consider lazy loading or pagination

## Error Handling

### Graceful Degradation

```typescript
// Empty content handling
if (!text) {
  return [
    {
      content: "",
      isTab: false,
      isTabContext: false,
      isParte: false,
      isBracket: false,
    },
  ];
}

// Invalid regex handling
try {
  const isTabLine = tabLinePattern.test(line.trim());
} catch (error) {
  console.warn("Tab pattern matching failed:", error);
  const isTabLine = false;
}
```

## Testing

### Unit Test Coverage

Key areas for testing:

- Tab block detection accuracy
- Column splitting logic
- Highlighting application
- Edge case handling
- Performance with large content

### Integration Testing

- Component rendering with real song data
- Highlight context integration
- Responsive behavior
- Build process compatibility

## Configuration Options

### Customizable Parameters

```typescript
// Minimum lines for tab block recognition
const MIN_TAB_LINES = 6;

// Maximum gap between tab lines in a block
const MAX_GAP_SIZE = 3;

// Maximum lines per column for responsive layout
const MAX_LINES_PER_COLUMN = 40;
```

### Style Customization

```css
/* Tab block highlighting */
.tab-highlight {
  @apply bg-red-200 border-l-4 border-red-500 px-2 py-0.5;
}

/* Section marker highlighting */
.section-highlight {
  @apply bg-blue-100 border-l-4 border-blue-400 px-2 py-0.5 font-semibold;
}

/* Part indicator highlighting */
.parte-highlight {
  @apply bg-green-100 border-l-4 border-green-400 px-2 py-0.5 font-medium;
}
```

## Accessibility

### Screen Reader Support

- Proper semantic HTML structure
- ARIA labels for different content types
- Keyboard navigation support
- High contrast highlighting options

### Implementation

```typescript
<div
  className={getLineClasses(line)}
  aria-label={getAriaLabel(line)}
  role={getSemanticRole(line)}
>
  {line.content}
</div>
```

## Future Enhancements

### Planned Features

1. **Custom Highlight Colors**: User-selectable color schemes
2. **Export Functionality**: Export highlighted content to PDF/image
3. **Tab Validation**: Musical accuracy checking
4. **Interactive Elements**: Click-to-play tab sections
5. **Mobile Optimization**: Touch-friendly interface improvements

### Technical Improvements

1. **Performance**: Implement virtual scrolling for very long songs
2. **Caching**: Add intelligent caching for processed content
3. **Modularity**: Extract highlighting logic into separate hooks
4. **Testing**: Comprehensive test suite with edge cases
