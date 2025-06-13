# Migration Guide: Artist Page Redesign

## 🚀 Quick Start

If you're working with the updated codebase, here's what you need to know:

## ✅ What Changed

### Before (v1.x)

Each artist page was a separate implementation:

```tsx
// app/artists/my-artist/page.tsx
"use client";
import { useState, useEffect } from "react";
// ... 70+ lines of duplicate code

export default function MyArtistPage() {
  // Duplicate state management
  // Duplicate API calls
  // Duplicate UI rendering
}
```

### After (v2.0)

Single reusable component:

```tsx
// app/artists/my-artist/page.tsx
"use client";
import ArtistPage from "@/components/artist-page";

export default function MyArtistPage() {
  return (
    <ArtistPage
      artistSlug="my-artist"
      artistDisplayName="My Artist Name"
      description="Optional artist description"
    />
  );
}
```

## 🔧 How to Add a New Artist

### 1. Create the Page File

```bash
# Create new artist page
touch app/artists/[artist-slug]/page.tsx
```

### 2. Implement Using ArtistPage Component

```tsx
"use client";

import ArtistPage from "@/components/artist-page";

export default function NewArtistPage() {
  return (
    <ArtistPage
      artistSlug="artist-slug"
      artistDisplayName="Human Readable Name"
      description="Brief description of the artist (optional)"
    />
  );
}
```

### 3. Ensure API Endpoint Exists

Make sure `/api/songs/[artist-slug]` returns:

```json
{
  "songs": ["song-slug-1", "song-slug-2", "..."]
}
```

### 4. Test the Implementation

```bash
# Start development server
pnpm dev

# Visit your new artist page
# http://localhost:3000/artists/[artist-slug]
```

## 📋 Props Reference

### Required Props

- `artistSlug`: string - URL-safe identifier for API calls
- `artistDisplayName`: string - Human-readable artist name

### Optional Props

- `description`: string - Artist description shown below name

### Example Configurations

#### Minimal Setup

```tsx
<ArtistPage artistSlug="zeca-pagodinho" artistDisplayName="Zeca Pagodinho" />
```

#### With Description

```tsx
<ArtistPage
  artistSlug="revelacao"
  artistDisplayName="Grupo Revelação"
  description="One of Brazil's most beloved pagode groups, known for their romantic melodies and heartfelt performances."
/>
```

## 🔄 Migrating Existing Artist Pages

### Step 1: Backup Current Implementation

```bash
# Create backup of current page
cp app/artists/my-artist/page.tsx app/artists/my-artist/page.tsx.backup
```

### Step 2: Replace with New Implementation

```tsx
// Replace entire file content
"use client";

import ArtistPage from "@/components/artist-page";

export default function MyArtistPage() {
  return (
    <ArtistPage
      artistSlug="my-artist"
      artistDisplayName="My Artist Display Name"
      description="Optional description here"
    />
  );
}
```

### Step 3: Test Functionality

- [ ] Page loads correctly
- [ ] Songs display properly
- [ ] Search functionality works
- [ ] Navigation functions
- [ ] FloatingMenu appears

### Step 4: Remove Backup

```bash
# Once confirmed working
rm app/artists/my-artist/page.tsx.backup
```

## 🎨 Customization Options

### Artist Descriptions

Add context and personality to artist pages:

```tsx
// Good examples:
description = "Master of Brazilian samba and pagode with timeless classics.";
description =
  "Romantic pagode group known for heartfelt ballads and energetic performances.";
description =
  "Contemporary Brazilian artist blending traditional and modern styles.";
```

### API Integration

Ensure your API endpoint matches the expected format:

```typescript
// /api/songs/[artist].ts
export async function GET(
  request: Request,
  { params }: { params: { artist: string } }
) {
  const { artist } = params;

  // Your logic to fetch songs
  const songs = getSongsForArtist(artist);

  return Response.json({ songs });
}
```

## 🧪 Testing Your Changes

### Manual Testing Checklist

- [ ] Artist name displays correctly
- [ ] Song count is accurate
- [ ] Search filters songs in real-time
- [ ] Search counter updates correctly
- [ ] Clear search button works
- [ ] Loading state appears during data fetch
- [ ] Empty states display appropriate messages
- [ ] Song links navigate correctly
- [ ] FloatingMenu functionality intact
- [ ] Responsive design works on mobile

### Automated Testing

```bash
# Run build to check for errors
pnpm build

# Start dev server for manual testing
pnpm dev
```

## 🚨 Common Issues

### Issue: Songs not loading

**Check**: API endpoint returns correct format
**Fix**: Ensure `/api/songs/[artist-slug]` returns `{ songs: [...] }`

### Issue: Search not working

**Check**: Songs data structure
**Fix**: Verify song objects have `title` property

### Issue: Styling looks wrong

**Check**: Design system components imported
**Fix**: Ensure all UI components are properly installed

### Issue: TypeScript errors

**Check**: Props interface compliance
**Fix**: Verify artistSlug and artistDisplayName are strings

## 📚 Additional Resources

- [Component Documentation](./docs/artist-page-component.md)
- [Technical Overview](./docs/technical-overview-artist-page.md)
- [Update Details](./docs/artist-page-redesign-update.md)

## 🆘 Getting Help

If you encounter issues:

1. Check the documentation files above
2. Review existing artist page implementations
3. Test with the development server
4. Verify API endpoints are working
5. Check browser console for errors

## 🔮 Future Considerations

When working with the new system, consider:

- All artist pages share the same component
- Changes to the core component affect all artists
- Test changes across multiple artist pages
- Consider performance with large song collections
- Plan for future features (favorites, playlists, etc.)

---

**Happy coding! 🎸**
