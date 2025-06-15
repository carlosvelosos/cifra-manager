# Tab Block Detection - Development Guide

## 🎯 Overview

This guide provides comprehensive information for developers working with the tab block detection algorithm in CifraManager.

## 🏗️ Architecture

### Component Hierarchy

```
CifraDisplay (main component)
├── identifyTabBlocks() (core algorithm)
├── splitProcessedLinesIntoColumns() (layout)
├── renderProcessedText() (rendering)
└── useHighlightSettings() (context integration)
```

### Data Flow

```
Raw Song Content → Line Splitting → Pattern Matching → Block Grouping → Context Addition → Column Layout → Rendering
```

## 🛠️ Development Setup

### Prerequisites

```bash
# Required tools
Node.js 18+
pnpm 8+
TypeScript 5+
Next.js 15+
```

### Local Development

```bash
# Clone and setup
git clone <repository>
cd cifra-manager
pnpm install

# Start development server
pnpm dev

# Run build to check for errors
pnpm build
```

### Testing Environment

```bash
# Test with specific songs
http://localhost:3000/artists/bruno-e-marrone/vida-vazia    # Complex notation
http://localhost:3000/artists/bruno-e-marrone/bijuteria     # Advanced patterns
http://localhost:3000/artists/almir-sater/tocando-em-frente # Standard reference
```

## 🔍 Algorithm Deep Dive

### Regex Pattern Analysis

```typescript
const tabLinePattern = /^[EBGDAE]\|[0-9\-~\.\/\\\|\sxhpbr↓↑]+\|?\s*$/;
```

**Pattern Breakdown**:

- `^` - Start of line
- `[EBGDAE]` - Standard guitar string names
- `\|` - Pipe character (literal)
- `[0-9\-~\.\/\\\|\sxhpbr↓↑]+` - Tab notation characters
  - `0-9` - Fret numbers
  - `\-` - Empty beats
  - `~` - Vibrato
  - `\.` - Sustained notes
  - `\/\\` - Slides (up/down)
  - `\|` - Bar lines
  - `\s` - Whitespace
  - `xhpbr` - Special techniques
  - `↓↑` - Strumming directions
- `\|?` - Optional ending pipe
- `\s*$` - Optional whitespace at end

### Grouping Algorithm

```typescript
// Step 1: Identify all tab lines
const tabLineIndices: number[] = [];
for (let i = 0; i < lines.length; i++) {
  if (tabLinePattern.test(lines[i].trim())) {
    tabLineIndices.push(i);
  }
}

// Step 2: Group with gap tolerance
const tabGroups: number[][] = [];
let currentGroup: number[] = [];

for (let i = 0; i < tabLineIndices.length; i++) {
  const currentLineIndex = tabLineIndices[i];
  const prevLineIndex = i > 0 ? tabLineIndices[i - 1] : -1;

  // Allow gaps of up to 3 lines (MAX_GAP_SIZE + 1)
  if (prevLineIndex === -1 || currentLineIndex <= prevLineIndex + 3) {
    currentGroup.push(currentLineIndex);
  } else {
    // Gap too large, start new group
    if (currentGroup.length > 0) {
      tabGroups.push(currentGroup);
    }
    currentGroup = [currentLineIndex];
  }
}

// Step 3: Validate block size (minimum 6 lines)
for (const group of tabGroups) {
  if (group.length >= 6) {
    // Mark as valid tab block
  }
}
```

## 🧪 Testing Strategy

### Unit Testing

```typescript
// Test cases to implement
describe("Tab Block Detection", () => {
  test("detects standard 6-line guitar tabs", () => {
    const input = `
E|--3--2--0--2--3-----|
B|--0--0--0--0--0-----|
G|--0--0--0--0--0-----|
D|--0--0--0--0--0-----|
A|--2--2--2--2--2-----|
E|--3--3--3--3--3-----|
    `;
    const result = identifyTabBlocks(input);
    expect(result.filter((line) => line.isTab)).toHaveLength(6);
  });

  test("supports complex notation", () => {
    const input = `
E|--0--2h3--/5\\3--x--|
B|--3--3b4r3--3------|
G|--2--2----2--------|
D|--0--0----0--------|
A|--x--x----x--------|
E|--3--3----3--------|
    `;
    const result = identifyTabBlocks(input);
    expect(result.filter((line) => line.isTab)).toHaveLength(6);
  });

  test("ignores arrow-only lines", () => {
    const input = `↓ ↑ ↓ ↓ ↑ ↓`;
    const result = identifyTabBlocks(input);
    expect(result.filter((line) => line.isTab)).toHaveLength(0);
  });

  test("handles gaps in tab blocks", () => {
    const input = `
E|--3--2--0--2--3-----|
B|--0--0--0--0--0-----|

G|--0--0--0--0--0-----|
D|--0--0--0--0--0-----|
A|--2--2--2--2--2-----|
E|--3--3--3--3--3-----|
    `;
    const result = identifyTabBlocks(input);
    expect(result.filter((line) => line.isTab)).toHaveLength(6);
  });
});
```

### Integration Testing

```typescript
// Test with real song content
describe("Real Song Integration", () => {
  test("processes Vida Vazia correctly", async () => {
    const response = await fetch("/api/songs/vida-vazia");
    const content = await response.text();
    const result = identifyTabBlocks(content);

    // Should detect multiple tab blocks
    expect(result.filter((line) => line.isTab).length).toBeGreaterThan(20);
  });
});
```

### Manual Testing Checklist

```bash
# Standard cases
- [ ] 6-line guitar tabs with simple fret numbers
- [ ] Multi-digit frets (10, 12, 15)
- [ ] Standard notation (dashes, pipes, spaces)

# Complex notation
- [ ] Hammer-ons (h) and pull-offs (p)
- [ ] Bends (b) and releases (r)
- [ ] Slides (/ and \)
- [ ] Muted strings (x)
- [ ] Vibrato (~) and dots (.)
- [ ] Strumming arrows (↓↑)

# Edge cases
- [ ] Tabs at start of file
- [ ] Tabs at end of file
- [ ] Empty lines within tab blocks
- [ ] Mixed content (tabs + chords + lyrics)
- [ ] Very long tab sections
- [ ] Malformed tab lines

# Performance
- [ ] Large song files (>1000 lines)
- [ ] Multiple tab blocks in one song
- [ ] Column splitting with tab blocks
- [ ] Build time impact
```

## 🔧 Common Modifications

### Adding New Tab Notation

```typescript
// Current pattern
const tabLinePattern = /^[EBGDAE]\|[0-9\-~\.\/\\\|\sxhpbr↓↑]+\|?\s*$/;

// To add new characters (e.g., 't' for tapping)
const tabLinePattern = /^[EBGDAE]\|[0-9\-~\.\/\\\|\sxhpbrt↓↑]+\|?\s*$/;
//                                                           ^^ added 't'
```

### Adjusting Block Size Requirements

```typescript
// Current minimum (standard guitar)
const MIN_TAB_LINES = 6;

// For bass guitar (4 strings)
const MIN_TAB_LINES = 4;

// For 7-string guitar
const MIN_TAB_LINES = 7;
```

### Modifying Gap Tolerance

```typescript
// Current gap tolerance
if (currentLineIndex <= prevLineIndex + 3) {
  // Allow up to 2 empty lines between tab lines
}

// Stricter (consecutive lines only)
if (currentLineIndex <= prevLineIndex + 1) {
  // No gaps allowed
}

// More lenient (larger gaps)
if (currentLineIndex <= prevLineIndex + 5) {
  // Allow up to 4 empty lines
}
```

### Custom Highlighting Styles

```typescript
// In renderProcessedText function
const getTabHighlightClass = (line: ProcessedLine) => {
  if (line.isTab || line.isTabContext) {
    // Default red highlighting
    return "bg-red-200 border-l-4 border-red-500 px-2 py-0.5";

    // Alternative: blue highlighting
    // return "bg-blue-200 border-l-4 border-blue-500 px-2 py-0.5";

    // Alternative: green highlighting
    // return "bg-green-200 border-l-4 border-green-500 px-2 py-0.5";
  }
  return "";
};
```

## 🐛 Debugging Guide

### Common Issues and Solutions

**Issue**: Tab blocks not detected

```typescript
// Debug steps:
1. Check regex pattern matches your content
   console.log(tabLinePattern.test("E|--3--2--0--|"));

2. Verify line count
   console.log("Tab lines found:", tabLineIndices.length);

3. Check grouping logic
   console.log("Tab groups:", tabGroups);

4. Verify minimum line requirement
   console.log("Groups with 6+ lines:", validGroups.length);
```

**Issue**: Wrong lines highlighted

```typescript
// Debug highlighting logic:
const processedLines = identifyTabBlocks(content);
processedLines.forEach((line, index) => {
  if (line.isTab || line.isTabContext) {
    console.log(
      `Line ${index}: ${line.content} (tab: ${line.isTab}, context: ${line.isTabContext})`
    );
  }
});
```

**Issue**: Performance problems

```typescript
// Profile processing time:
console.time("Tab Detection");
const result = identifyTabBlocks(largeContent);
console.timeEnd("Tab Detection");

// Check memory usage:
const memBefore = performance.memory?.usedJSHeapSize;
const result = identifyTabBlocks(content);
const memAfter = performance.memory?.usedJSHeapSize;
console.log("Memory used:", memAfter - memBefore, "bytes");
```

### Browser DevTools

```javascript
// Console commands for debugging:

// Test regex pattern
/^[EBGDAE]\|[0-9\-~\.\/\\\|\sxhpbr↓↑]+\|?\s*$/.test("E|--3--2--0--|");

// Inspect processed lines
window.debugTabDetection = true; // Enable debug logging

// Check component state
React.DevTools; // Use React DevTools to inspect component state
```

## 📊 Performance Optimization

### Benchmarking

```typescript
// Performance test setup
const testContent = generateLargeTabContent(1000); // 1000 lines
const iterations = 100;

console.time("Tab Detection Benchmark");
for (let i = 0; i < iterations; i++) {
  identifyTabBlocks(testContent);
}
console.timeEnd("Tab Detection Benchmark");
```

### Optimization Strategies

1. **Regex Optimization**

   ```typescript
   // Compile regex once
   const TAB_LINE_REGEX = /^[EBGDAE]\|[0-9\-~\.\/\\\|\sxhpbr↓↑]+\|?\s*$/;

   // Use compiled regex in function
   const isTabLine = TAB_LINE_REGEX.test(line.trim());
   ```

2. **Memoization**

   ```typescript
   const memoizedTabDetection = useMemo(() => {
     return identifyTabBlocks(content);
   }, [content]);
   ```

3. **Early Exit Optimization**
   ```typescript
   // Skip processing if content is too short
   if (lines.length < MIN_TAB_LINES) {
     return createEmptyProcessedLines(lines);
   }
   ```

## 🚀 Deployment Considerations

### Build Process Integration

```typescript
// Ensure algorithm doesn't break builds
export const validateTabDetection = (content: string): boolean => {
  try {
    const result = identifyTabBlocks(content);
    return Array.isArray(result) && result.length > 0;
  } catch (error) {
    console.error("Tab detection validation failed:", error);
    return false;
  }
};
```

### Error Handling in Production

```typescript
const identifyTabBlocks = (text: string): ProcessedLine[] => {
  try {
    // Main algorithm
    return processTabBlocks(text);
  } catch (error) {
    console.error("Tab block detection failed:", error);

    // Fallback: return basic processed lines without highlighting
    return text.split("\n").map((line) => ({
      content: line,
      isTab: false,
      isTabContext: false,
      isParte: false,
      isBracket: false,
    }));
  }
};
```

### Monitoring and Analytics

```typescript
// Track algorithm performance in production
const trackTabDetection = (content: string, processingTime: number) => {
  analytics.track("tab_detection", {
    content_length: content.length,
    processing_time: processingTime,
    blocks_found: result.filter((line) => line.isTab).length,
  });
};
```

## 📚 Resources

### Related Documentation

- [`tab-block-detection-algorithm.md`](./tab-block-detection-algorithm.md) - Complete algorithm overview
- [`tab-detection-quick-reference.md`](./tab-detection-quick-reference.md) - Quick reference guide
- [`cifra-display-api-documentation.md`](./cifra-display-api-documentation.md) - Component API docs

### External Resources

- [Guitar Tab Notation Standards](https://en.wikipedia.org/wiki/Tablature)
- [Regular Expression Testing](https://regex101.com/)
- [Next.js Performance Best Practices](https://nextjs.org/docs/advanced-features/performance)
- [React Performance Optimization](https://react.dev/learn/render-and-commit)
