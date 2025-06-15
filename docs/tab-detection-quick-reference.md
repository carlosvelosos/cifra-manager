# Tab Block Detection - Quick Reference Guide

## 🎯 Quick Overview

The CifraManager tab detection algorithm automatically identifies and highlights guitar tablature blocks in song content using advanced pattern recognition.

## 🎸 Supported Tab Notation

| Symbol | Meaning        | Example         |
| ------ | -------------- | --------------- | --- | --- |
| `0-9`  | Fret numbers   | `3`, `12`, `15` |
| `x`    | Muted string   | `x`             |
| `h`    | Hammer-on      | `3h5`           |
| `p`    | Pull-off       | `5p3`           |
| `b`    | Bend           | `3b5`           |
| `r`    | Release        | `5r3`           |
| `/`    | Slide up       | `3/5`           |
| `\`    | Slide down     | `5\3`           |
| `~`    | Vibrato        | `3~`            |
| `.`    | Sustained note | `3...`          |
| `↓`    | Downstroke     | `↓`             |
| `↑`    | Upstroke       | `↑`             |
| `-`    | Empty beat     | `---`           |
| `      | `              | Bar line        | `   | `   |

## 🔍 Detection Rules

### ✅ Valid Tab Block

- **Minimum**: 6 consecutive tab lines (standard guitar)
- **Format**: Each line starts with `E|`, `B|`, `G|`, `D|`, `A|`, or `E|`
- **Content**: Contains valid tab notation characters
- **Gaps**: Allows up to 2 empty lines within blocks

### ❌ Invalid/Ignored

- **Arrow-only lines**: Lines with only `↓↑` (strumming patterns)
- **Short blocks**: Less than 6 lines
- **Wrong format**: Doesn't start with string notation
- **Non-tab content**: Regular text, chords, lyrics

## 🎨 Visual Highlighting

```css
/* Tab blocks are highlighted with: */
background: red-200; /* Light red background */
border-left: 4px red-500; /* Red left border */
padding: 2px 8px; /* Proper spacing */
```

## 🛠️ Usage Examples

### Standard Tab Block ✅

```
E|--3--2--0--2--3-----|
B|--0--0--0--0--0-----|
G|--0--0--0--0--0-----|
D|--0--0--0--0--0-----|
A|--2--2--2--2--2-----|
E|--3--3--3--3--3-----|
```

### Complex Notation ✅

```
E|--0--2h3--/5\3--x--|
B|--3--3----3---------|
G|--2--2b4r2--2-------|
D|--0--0----0---------|
A|--x--x----x---------|
E|--3--3----3---------|
```

### Not a Tab Block ❌

```
↓ ↑ ↓ ↓ ↑ ↓
(Only strumming pattern)
```

## 🔧 Configuration

### Key Settings

```typescript
MIN_TAB_LINES = 6; // Minimum lines for valid block
MAX_GAP_LINES = 3; // Max gap between tab lines
TAB_PATTERN = /^[EBGDAE]\|[0-9\-~\.\/\\\|\sxhpbr↓↑]+\|?\s*$/;
```

### File Locations

- **Algorithm**: `components/cifra-display.tsx`
- **Documentation**: `docs/tab-block-detection-algorithm.md`
- **Tests**: `app/artists/*/page.tsx` (song pages)

## 🐛 Troubleshooting

| Problem            | Solution                                        |
| ------------------ | ----------------------------------------------- |
| Tabs not detected  | Check 6-line format with proper string notation |
| Wrong highlighting | Verify regex pattern matches your notation      |
| Build errors       | Run `pnpm build` to check for syntax issues     |
| Performance slow   | Check for large content or infinite loops       |

## ⚡ Quick Commands

```bash
# Test the algorithm
pnpm dev
# Navigate to any song page to see highlighting

# Check for build errors
pnpm build

# View specific test songs
# /artists/bruno-e-marrone/vida-vazia    (complex notation)
# /artists/bruno-e-marrone/bijuteria     (advanced patterns)
# /artists/almir-sater/tocando-em-frente (standard reference)
```

## 📋 Testing Checklist

- [ ] Standard 6-line guitar tabs are highlighted
- [ ] Complex notation (h, p, b, r, /, \) is supported
- [ ] Multi-digit frets (10, 12, 15) work correctly
- [ ] Muted strings (x) are recognized
- [ ] Arrow-only lines are NOT highlighted
- [ ] Context lines above/below are highlighted
- [ ] Build completes without errors
- [ ] Performance is acceptable for large songs

## 🚀 Common Use Cases

### Adding New Song Content

1. Format tabs with proper string notation (`E|B|G|D|A|E|`)
2. Ensure 6 lines for complete guitar tabs
3. Use standard notation characters
4. Test with `pnpm dev` to verify highlighting

### Debugging Detection Issues

1. Check browser console for errors
2. Verify line endings (Unix vs Windows)
3. Test regex pattern with online tools
4. Compare with working examples

### Performance Optimization

1. Monitor large song files
2. Check processing time in browser dev tools
3. Optimize regex if needed
4. Consider caching for frequently accessed songs

## 📞 Support

For technical issues or enhancement requests:

1. Check existing documentation in `docs/`
2. Test with known working examples
3. Verify build status with `pnpm build`
4. Review algorithm implementation in `components/cifra-display.tsx`
