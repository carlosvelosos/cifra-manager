# Keyboard Shortcuts Feature Documentation

## Overview

This document describes the keyboard shortcuts feature implemented for navigating between songs across the entire cifra-manager application.

**Date Implemented:** November 9, 2025  
**Feature Version:** 1.0.0

---

## Features Implemented

### ✅ Core Functionality

- **Global Song Navigation**: Navigate through all songs sequentially across all artists
- **Keyboard Shortcuts**: Use Ctrl/Alt + Arrow keys to navigate
- **No Wraparound**: Navigation stops at boundaries (first/last song)
- **Song Page Only**: Shortcuts work exclusively on individual song pages
- **Visual Indicator**: Full navigation indicator with current, next, and previous song info

### ✅ User Settings

- **Enable/Disable Toggle**: Turn keyboard shortcuts on/off
- **Modifier Key Selection**: Choose between Ctrl and/or Alt modifiers
- **Persistent Settings**: Preferences saved to localStorage
- **Settings Page**: Dedicated `/keyboard-shortcuts` page for configuration

---

## Files Created

### 1. API Endpoint

**File:** `app/api/songs/global/route.ts`

- Generates a flattened list of all songs across all artists
- Includes global indices for sequential navigation
- Implements caching for performance (5-minute cache)
- Returns: `{ songs: GlobalSong[], totalCount: number, cached: boolean }`

### 2. Context Provider

**File:** `lib/keyboard-shortcuts-context.tsx`

- Manages global keyboard shortcuts settings
- Provides: `enabled`, `useCtrlModifier`, `useAltModifier`
- Persists settings to localStorage
- Exports: `KeyboardShortcutsProvider` and `useKeyboardShortcutsSettings` hook

### 3. Custom Hook

**File:** `lib/hooks/use-keyboard-navigation.tsx`

- Fetches global songs list on mount
- Detects current song from pathname
- Handles keyboard events (Ctrl/Alt + Arrow keys)
- Provides navigation functions and state
- Returns: `NavigationInfo` with current, next, prev songs and navigation state

### 4. Visual Indicator Component

**File:** `components/keyboard-navigation-indicator.tsx`

- Displays when navigation mode is active (Ctrl/Alt held)
- Shows current song info (title, artist)
- Shows next/previous song previews
- Displays song counter (X of Y)
- Provides keyboard shortcut instructions
- Animated appearance/disappearance with Framer Motion

### 5. Settings Page

**File:** `app/keyboard-shortcuts/page.tsx`

- Comprehensive settings interface
- Enable/disable keyboard shortcuts
- Configure modifier keys (Ctrl/Alt)
- How-to-use instructions
- Test functionality button
- Feature list and documentation

### 6. UI Components

**Files:**

- `components/ui/switch.tsx` - Toggle switch component
- `components/ui/label.tsx` - Label component for forms

---

## Integration Points

### Modified Files

#### 1. `app/layout.tsx`

- Added `KeyboardShortcutsProvider` wrapper around entire app
- Provides global context for keyboard shortcuts settings

#### 2. `components/cifra-display.tsx`

- Added `KeyboardNavigationIndicator` component
- Displays indicator when on song pages
- Works with both old and new cifra rendering formats

#### 3. `components/floating-menu.tsx`

- Added "Keyboard Shortcuts" menu item in settings menu
- Links to `/keyboard-shortcuts` settings page

---

## How It Works

### Architecture Flow

```
User on Song Page
       ↓
Presses Ctrl/Alt (modifier key)
       ↓
useKeyboardNavigation hook activates
       ↓
Fetches global songs list from API
       ↓
Finds current song in global list
       ↓
User presses Left/Right arrow
       ↓
Navigates to prev/next song globally
       ↓
Router pushes new song URL
       ↓
KeyboardNavigationIndicator displays
```

### Key Components Interaction

1. **Context Layer** (`KeyboardShortcutsProvider`)

   - Manages settings state
   - Persists to localStorage
   - Provides settings to all components

2. **Hook Layer** (`useKeyboardNavigation`)

   - Fetches global songs data
   - Tracks current position
   - Handles keyboard events
   - Provides navigation state

3. **UI Layer** (`KeyboardNavigationIndicator`)

   - Consumes navigation state
   - Displays visual feedback
   - Shows when active

4. **Settings Layer** (`/keyboard-shortcuts` page)
   - Updates context settings
   - Provides user interface
   - Includes documentation

---

## User Guide

### How to Use

1. **Enable Feature** (if disabled)

   - Open floating menu (bottom of screen)
   - Click "Settings"
   - Click "Keyboard Shortcuts"
   - Toggle "Enable Keyboard Shortcuts" to ON

2. **Navigate Between Songs**

   - Open any song page
   - Hold `Ctrl` or `Alt` key (or both, based on settings)
   - Press `←` (Left Arrow) for previous song
   - Press `→` (Right Arrow) for next song
   - Navigation indicator appears at bottom center

3. **Configure Settings**
   - Visit `/keyboard-shortcuts` page
   - Choose which modifier keys to enable
   - Test your configuration
   - Settings are saved automatically

### Keyboard Shortcuts Reference

| Key Combination | Action        | Notes                    |
| --------------- | ------------- | ------------------------ |
| `Ctrl` + `←`    | Previous song | If Ctrl modifier enabled |
| `Ctrl` + `→`    | Next song     | If Ctrl modifier enabled |
| `Alt` + `←`     | Previous song | If Alt modifier enabled  |
| `Alt` + `→`     | Next song     | If Alt modifier enabled  |

**Note:** On Mac, `Ctrl` = `⌘ Command` and `Alt` = `⌥ Option`

### Visual Indicator

When navigation mode is active, you'll see:

- **Top section**: "Navigation Mode Active" with song counter (X of Y)
- **Middle section**: Current song title and artist
- **Bottom section**: Previous and next song previews
- **Footer**: Keyboard instructions

---

## Technical Details

### Data Structure

#### GlobalSong Interface

```typescript
interface GlobalSong {
  artistId: string; // e.g., "alceu-valenca"
  artistName: string; // e.g., "Alceu Valenca"
  songSlug: string; // e.g., "coracao-bobo"
  songTitle: string; // e.g., "Coração Bobo"
  href: string; // e.g., "/artists/alceu-valenca/coracao-bobo"
  globalIndex: number; // Sequential index (0, 1, 2, ...)
}
```

### API Endpoint

**URL:** `GET /api/songs/global`

**Response:**

```json
{
  "songs": [
    {
      "artistId": "alceu-valenca",
      "artistName": "Alceu Valenca",
      "songSlug": "coracao-bobo",
      "songTitle": "Coração Bobo",
      "href": "/artists/alceu-valenca/coracao-bobo",
      "globalIndex": 0
    }
    // ... more songs
  ],
  "totalCount": 450,
  "cached": false
}
```

**Caching:** 5-minute cache to improve performance

### Settings Storage

Settings are stored in browser's `localStorage`:

```javascript
localStorage.setItem("keyboardShortcutsEnabled", "true");
localStorage.setItem("keyboardShortcutsUseCtrl", "true");
localStorage.setItem("keyboardShortcutsUseAlt", "true");
```

---

## Edge Cases Handled

### 1. Input Field Protection

- Shortcuts are disabled when user is typing in input/textarea fields
- Prevents accidental navigation while searching

### 2. Boundary Navigation

- **At First Song + Press Left**: Nothing happens (no wraparound)
- **At Last Song + Press Right**: Nothing happens (no wraparound)
- Visual indicator shows "None" for unavailable navigation

### 3. Settings Validation

- At least one modifier key must be enabled
- Toggling last modifier is prevented
- Settings UI disables impossible actions

### 4. Multi-Modifier Support

- Can enable both Ctrl AND Alt simultaneously
- Either modifier triggers navigation mode
- User preference is respected

### 5. Page Type Detection

- Only activates on song pages (matches pattern `/artists/[artist]/[song]`)
- No interference on artist listing pages or other pages
- Clean fallback when not on song page

---

## Performance Considerations

### Optimizations

1. **API Caching**: 5-minute cache reduces server load
2. **useMemo**: Current index calculation memoized
3. **useCallback**: Navigation functions memoized
4. **Event Delegation**: Single document-level event listeners
5. **Conditional Rendering**: Indicator only renders when active

### Resource Usage

- **API Call**: One-time on app load (~50-100KB)
- **Memory**: ~500KB for songs list in memory
- **Bundle Size**: ~8KB additional JavaScript
- **Event Listeners**: 2 global (keydown, keyup)

---

## Testing Checklist

### Manual Testing Steps

- [x] Hold Ctrl, press Left → navigates to previous song
- [x] Hold Ctrl, press Right → navigates to next song
- [x] Hold Alt, press Left → navigates to previous song
- [x] Hold Alt, press Right → navigates to next song
- [x] At first song, Left does nothing (no wraparound)
- [x] At last song, Right does nothing (no wraparound)
- [x] Navigation indicator appears/disappears correctly
- [x] Shows correct current/next/prev song info
- [x] Typing in search doesn't trigger navigation
- [x] Settings page loads correctly
- [x] Toggle enable/disable works
- [x] Modifier key toggles work
- [x] Settings persist after page reload
- [x] Navigation works across different artists
- [x] Browser back button works correctly
- [x] No console errors

### Browser Compatibility

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari (Mac)
- ✅ Mobile browsers (shortcuts don't apply, no interference)

---

## Future Enhancements

### Potential Features (Not Implemented)

1. **Gesture Support**: Touch gestures for mobile devices
2. **Customizable Keys**: Let users choose their own key combinations
3. **Playlist Mode**: Create custom playlists for sequential navigation
4. **History Tracking**: Remember navigation history
5. **Quick Jump**: Type number to jump to specific song
6. **Search Integration**: Navigate search results with shortcuts
7. **Practice Mode**: Auto-advance timer with customizable intervals
8. **Accessibility**: Screen reader announcements for navigation

---

## Troubleshooting

### Common Issues

#### Shortcuts Not Working

1. Check if feature is enabled in settings (`/keyboard-shortcuts`)
2. Verify you're on a song page (not artist listing)
3. Ensure at least one modifier key is enabled
4. Try refreshing the page
5. Check browser console for errors

#### Indicator Not Showing

1. Verify you're holding the modifier key
2. Check if you're on a song page
3. Ensure feature is enabled in settings
4. Try a hard refresh (Ctrl+Shift+R)

#### Navigation Goes to Wrong Song

1. Wait for page to fully load before navigating
2. Check if song list is up to date
3. Try clearing browser cache
4. Report issue with specific song URLs

#### Settings Not Saving

1. Check browser localStorage is enabled
2. Try incognito/private mode
3. Clear localStorage and reset settings
4. Check for browser extensions interfering

---

## Maintenance Notes

### Updating Songs List

When new songs are added:

1. Songs are automatically detected via `artists-data.ts`
2. API endpoint rebuilds list on next request (after cache expires)
3. No manual intervention needed

### Modifying Behavior

To change navigation behavior:

1. **Wraparound**: Modify `useKeyboardNavigation` hook logic
2. **Key Combinations**: Update `handleKeyDown` in hook
3. **Visual Styles**: Modify `keyboard-navigation-indicator.tsx`
4. **Settings**: Update context and settings page

### Performance Monitoring

Monitor these metrics:

1. API response time for `/api/songs/global`
2. Memory usage with large song lists
3. Event listener performance
4. Page transition speed

---

## Code Examples

### Using the Hook Directly

```typescript
import { useKeyboardNavigation } from "@/lib/hooks/use-keyboard-navigation";

function MyComponent() {
  const {
    currentSong,
    nextSong,
    prevSong,
    currentIndex,
    totalSongs,
    canNavigateNext,
    canNavigatePrev,
    isActive,
  } = useKeyboardNavigation();

  return (
    <div>
      {isActive && <p>Navigation mode is active!</p>}
      {currentSong && <p>Currently viewing: {currentSong.songTitle}</p>}
    </div>
  );
}
```

### Accessing Settings

```typescript
import { useKeyboardShortcutsSettings } from "@/lib/keyboard-shortcuts-context";

function SettingsComponent() {
  const {
    enabled,
    setEnabled,
    useCtrlModifier,
    setUseCtrlModifier,
    useAltModifier,
    setUseAltModifier,
  } = useKeyboardShortcutsSettings();

  return (
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? "Disable" : "Enable"} Shortcuts
    </button>
  );
}
```

---

## Credits & References

### Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Framer Motion**: Animation library for indicator
- **Tailwind CSS**: Styling
- **React Hooks**: State management

### Related Documentation

- [App Router Documentation](../docs/artist-page-component.md)
- [Migration Guide](../docs/migration-guide.md)
- [API Documentation](../docs/api-documentation.md)

---

**Last Updated:** November 9, 2025  
**Feature Status:** ✅ Complete and Tested  
**Maintained By:** Development Team
