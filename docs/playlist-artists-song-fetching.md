# Playlist Artists - CifraClub Song Fetching Feature

## Overview

The Playlist Artists page now includes the ability to fetch all available songs from CifraClub for any artist. This feature scrapes the artist's CifraClub page and extracts the complete song list with metadata.

## How It Works

### 1. Song Fetching Process

When a user clicks the "Fetch Songs" button for an artist:

1. **URL Construction**: The system first attempts to use an existing CifraClub URL or constructs a direct artist URL using multiple strategies
2. **CORS Proxy**: Uses `https://api.allorigins.win/get` to bypass CORS restrictions when fetching the artist page
3. **HTML Parsing**: Parses the fetched HTML to find the songs list container
4. **Data Extraction**: Extracts song information including name, URL, and view counts

### 2. HTML Structure Parsing

The algorithm looks for the specific CifraClub HTML structure:

```html
<ul class="list-links art_musics alf artistMusics--allSongs" id="js-a-songs">
  <li data-hits="1" data-name="song-name">
    <a href="/artist/song-url" class="art_music-link" title="Song Title">
      Song Name
    </a>
  </li>
  <!-- More songs... -->
</ul>
```

### 3. Data Extraction

For each song, the system extracts:

- **Song Name**: From the link text content
- **Song URL**: Full CifraClub URL (handles both relative and absolute URLs)
- **View Count**: From the `data-hits` attribute (optional)

## User Interface

### New Components

1. **Fetch Songs Button**: Green button with loading state

   - Shows "Fetch Songs" when ready
   - Shows "Fetching..." with spinner when loading
   - Disabled during operation

2. **CifraClub Songs List**: Expandable section displaying fetched songs
   - Shows song count in the header
   - Each song is clickable and opens in a new tab
   - Hover effects show view counts and external link icon
   - Scrollable list for artists with many songs

### Visual Indicators

- **Loading State**: Spinner and "Fetching..." text during operation
- **Success State**: Green-themed expandable section with song list
- **Error Handling**: Alert message if fetching fails
- **View Counts**: Displayed on hover for each song

## Technical Implementation

### State Management

```typescript
interface ArtistData {
  name: string;
  songCount: number;
  songs: string[];
  cifraClubUrl?: string;
  cifraClubSongs?: CifraClubSong[];
  fetchingSongs?: boolean;
}

interface CifraClubSong {
  name: string;
  url: string;
  hits?: string;
}
```

### Key Functions

1. **`fetchArtistSongs(artistName: string)`**

   - Main function that orchestrates the song fetching process
   - Handles URL construction, CORS proxy requests, and error handling

2. **`parseCifraClubSongs(htmlContent: string)`**
   - Parses HTML content using DOM parser
   - Extracts song data from the `#js-a-songs` container
   - Returns array of CifraClubSong objects

### Error Handling

- **Network Errors**: Catches fetch failures and HTTP errors
- **Parsing Errors**: Handles malformed HTML or missing elements
- **Empty Results**: Alerts user when no songs are found
- **CORS Issues**: Uses proxy service to avoid cross-origin restrictions

## Usage Examples

### Typical Workflow

1. Upload a playlist JSON file
2. Browse the extracted artists list
3. Click "Find on CifraClub" to open the artist page
4. Click "Fetch Songs" to scrape all available songs
5. Browse the fetched songs in the expandable list
6. Click individual songs to open them in new tabs

### Expected Results

For a popular artist like "Zeca Pagodinho", the system might fetch:

- 50+ songs with their full CifraClub URLs
- View counts for each song
- Direct links to individual song pages
- Organized in a scrollable, searchable list

## Limitations and Considerations

### CORS Proxy Dependency

The feature relies on `https://api.allorigins.win/get` as a CORS proxy:

- **Pros**: Free service that handles CORS restrictions
- **Cons**: External dependency, potential rate limits
- **Alternative**: Could implement server-side proxy in the future

### Rate Limiting

- No built-in rate limiting for song fetching
- Relies on the CORS proxy service's limitations
- Users should avoid rapid successive requests

### CifraClub Structure Changes

- The feature depends on CifraClub's HTML structure
- Changes to the `#js-a-songs` element could break parsing
- Regular testing recommended to ensure compatibility

## Future Enhancements

### Potential Improvements

1. **Caching**: Cache fetched song lists locally
2. **Batch Operations**: Fetch songs for multiple artists simultaneously
3. **Export Feature**: Download complete song lists as files
4. **Search/Filter**: Search within fetched songs
5. **Server-Side Proxy**: Implement own CORS proxy for better reliability

### Integration Opportunities

1. **Playlist Matching**: Compare playlist songs with CifraClub availability
2. **Bulk Download**: Generate download links for multiple songs
3. **Statistics**: Show coverage percentage (playlist songs vs. available songs)

## Troubleshooting

### Common Issues

1. **"No songs found"**: Artist page might have different structure or no songs
2. **Network errors**: CORS proxy might be down or rate-limited
3. **Empty results**: Artist URL might be incorrect or artist not found

### Debug Information

The feature logs detailed information to the browser console:

- URL construction attempts
- Fetch requests and responses
- Parsing results and errors
- Song extraction statistics

### Manual Verification

Users can always verify results by:

1. Opening the artist's CifraClub page manually
2. Checking the song count in the page
3. Comparing with the fetched results

## Security Considerations

- Uses CORS proxy to avoid direct cross-origin requests
- No sensitive data is transmitted
- All requests are read-only operations
- External links open in new tabs for security
