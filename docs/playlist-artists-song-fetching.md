# Playlist Artists - CifraClub Song Fetching Feature

## Overview

The Playlist Artists page now includes the ability to fetch all available songs from CifraClub for any artist, and download them as a text file. This feature scrapes the artist's CifraClub page, extracts the complete song list with metadata, and intelligently deduplicates instrument variations to provide a clean list of unique songs.

## How It Works

### 1. Optimized Song Fetching Process

When a user clicks the "Fetch Songs" button for an artist:

1. **URL Construction**: The system first attempts to use an existing CifraClub URL or constructs a direct artist URL using multiple strategies
2. **Targeted Content Extraction**: Primary attempt to extract only the songs list container (`<ul id="js-a-songs">`) from the page
3. **CORS Proxy Fallback**: If targeted extraction fails, falls back to full page fetch using multiple proxy services
4. **HTML Parsing**: Parses the fetched HTML (either targeted or full page) to find the songs list container
5. **Data Extraction**: Extracts song information including name, URL, and view counts

### 2. Song List Download Feature

After successfully fetching songs, a "Download URLs" button appears that allows users to:

- **Export Complete Song List**: Download all CifraClub song URLs for the artist as a `.txt` file
- **Structured Format**: The file includes song names, view counts, and direct URLs in an organized format
- **Metadata Included**: File contains artist name, total song count, and generation timestamp
- **Direct URL Section**: Includes a separate section with just the URLs for easy copying

### 3. Performance Optimization

The new implementation includes several optimizations to handle large pages and Content-Length header issues:

- **Targeted Extraction**: Attempts to fetch only the songs container instead of the entire page
- **Multiple Proxy Services**: Falls back through different CORS proxy services for better reliability
- **Smart Content Detection**: Automatically detects whether fetched content is a songs container or full page
- **Efficient Parsing**: Improved HTML parsing with better error handling and performance limits

### 4. HTML Structure Parsing

The algorithm looks for the specific CifraClub HTML structure and includes smart deduplication:

**Song Deduplication Logic:**

The system implements comprehensive deduplication using a sophisticated grouping algorithm:

1. **URL Path Extraction**: Songs are grouped by their base URL pattern (`/artist/song-name/`)
2. **Comprehensive Filtering**:
   - Instrument variations (violão, guitarra, cavaco, teclado, ukulele, viola caipira, baixo, bateria, gaita) are excluded
   - "Letra" (lyrics-only) versions are excluded
   - Submission/contribution links (`/enviar`) are excluded
   - Album, playlist, and category links are excluded
   - External non-CifraClub links are excluded
3. **Base URL Construction**: For each unique song, a clean main URL is constructed (e.g., `https://www.cifraclub.com.br/artist/song-name/`)
4. **Intelligent Name Resolution**:
   - Song names are extracted from meaningful link text
   - If link text is generic ("letra", instrument names), song names are generated from URL slugs
   - Names are properly capitalized and formatted
5. **Quality Prioritization**: When multiple versions exist, the system prefers main song URLs with meaningful names over instrument-specific or letra versions

**Example Deduplication:**

```
Before: 18 links for 3 songs (6 instrument variations each)
- "100% Dela" - violão, guitarra, letra, cavaco, teclado, ukulele, viola caipira
- "2 Dias" - violão, guitarra, letra, cavaco, teclado, ukulele, viola caipira
- "30 Audios" - violão, guitarra, letra, cavaco, teclado, ukulele, viola caipira

After: 3 unique songs with main URLs
- "100% Dela" - https://www.cifraclub.com.br/artist/100-dela/
- "2 Dias" - https://www.cifraclub.com.br/artist/2-dias/
- "30 Audios" - https://www.cifraclub.com.br/artist/30-audios/
```

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

### Song Variations and Expandable Interface

Each song in the fetched results now includes all available variations (letra, instruments, etc.) that can be expanded for detailed access:

#### Main Song Display

- **Primary Version**: Shows the main song name with a clean URL
- **View Count**: Displays hit count when available
- **Direct Access**: Clicking opens the main song page

#### Expandable Variations

When multiple versions exist, users can expand each song to see:

- **Letra (Lyrics)**: Text-only versions marked with a file icon
- **Instrument Variations**:
  - Violão (Guitar icon)
  - Guitarra (Guitar icon)
  - Teclado/Piano (Piano icon)
  - Cavaco, Baixo, Bateria, Gaita, etc. (Music icons)
- **Other Formats**: Guitar Pro, Partituras, etc.

#### Visual Organization

- **Color Coding**: Different variation types have distinct colors
  - Green: Main versions
  - Blue: Letra (lyrics) versions
  - Yellow: Instrument variations
  - Purple: Other formats
- **Icons**: Each variation type has an appropriate icon for quick identification
- **Hierarchical Structure**: Variations are indented under the main song
- **View Counts**: Individual hit counts for each variation when available

#### User Experience

- **Clean Overview**: Main list shows only unique songs without clutter
- **On-Demand Details**: Users can expand any song to see all available versions
- **Quick Access**: Each variation links directly to its specific CifraClub page
- **Responsive Design**: Smooth transitions and hover effects for better interaction

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

1. **`fetchSongsListOnly(url: string)`**

   - Attempts to fetch and extract only the songs list container from the page
   - More efficient than full page loading, reduces Content-Length header issues
   - Returns the songs container HTML or null if extraction fails

2. **`fetchWithProxyFallbacks(url: string)`**

   - Tries multiple CORS proxy services for better reliability
   - Handles different response formats (JSON vs text)
   - Provides fallback options when primary proxy services fail

3. **`fetchArtistSongs(artistName: string)`**

   - Main function that orchestrates the song fetching process
   - Uses targeted extraction first, falls back to full page fetch if needed
   - Handles URL construction, proxy requests, and error handling

4. **`parseCifraClubSongs(htmlContent: string)`**
   - Enhanced parser that handles both full pages and extracted containers
   - Multiple fallback strategies for finding song lists
   - Improved URL validation and filtering for accurate results

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
6. Click "Download URLs" to export all song URLs as a text file
7. Click individual songs to open them in new tabs

### Expected Results

For a popular artist like "Zeca Pagodinho", the system might fetch:

- 50+ songs with their full CifraClub URLs
- View counts for each song
- Direct links to individual song pages
- Organized in a scrollable, searchable list
- Available for download as a structured text file

### Download File Format

When downloading songs, the generated `.txt` file includes:

```
CifraClub Songs for: [Artist Name]
Total songs: [Number]
Generated on: [Date/Time]

Song List:
==================================================

1. [Song Name] ([View Count] views)
   Main URL: https://www.cifraclub.com.br/[artist]/[song]/
   Available versions (X):
     1. [Song Name] [Main] ([View Count] views)
        URL: https://www.cifraclub.com.br/[artist]/[song]/
     2. Letra (Lyrics) [Letra] ([View Count] views)
        URL: https://www.cifraclub.com.br/[artist]/[song]/letra/
     3. Violão [Instrument] ([View Count] views)
        URL: https://www.cifraclub.com.br/[artist]/[song]/violao/

2. [Song Name] ([View Count] views)
   Main URL: https://www.cifraclub.com.br/[artist]/[song]/
   ...

Direct URLs only (Main versions):
==============================

https://www.cifraclub.com.br/[artist]/[song-1]/
https://www.cifraclub.com.br/[artist]/[song-2]/
...

All Variation URLs:
=========================

# [Song Name 1]
https://www.cifraclub.com.br/[artist]/[song-1]/ # [Song Name]
https://www.cifraclub.com.br/[artist]/[song-1]/letra/ # Letra (Lyrics)
https://www.cifraclub.com.br/[artist]/[song-1]/violao/ # Violão

# [Song Name 2]
https://www.cifraclub.com.br/[artist]/[song-2]/ # [Song Name]
...
```

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
3. **Search/Filter**: Search within fetched songs
4. **Server-Side Proxy**: Implement own CORS proxy for better reliability

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
