# Cifra Content Extraction Feature

## Overview

Enhanced the CifraManager artist+song search functionality to extract and return both the URL and the actual cifra content from CifraClub pages. When users search for "Artist - Song", they now receive the complete cifra text along with the URL.

## Features Implemented

### 1. Content Extraction Function

- **Function**: `extractCifraContent(url: string)`
- **Purpose**: Extracts cifra content from `<pre>` tags in CifraClub pages
- **Location**: `/app/api/search/route.ts`
- **Features**:
  - Parses HTML to find `<pre>` tags containing cifra content
  - Removes HTML tags and decodes HTML entities
  - Handles alternative content patterns (`.cifra` class)
  - Returns clean, formatted text content

### 2. Enhanced API Response Structure

- **Previous**: Plain text URL only for artist+song searches
- **Current**: JSON object with both URL and content
- **Response Format**:
  ```json
  {
    "url": "https://www.cifraclub.com.br/artist/song/#tabs=false&instrument=cavaco",
    "content": "Full cifra content with chords and lyrics..."
  }
  ```

### 3. Updated Test Interface

- **Enhanced Display**: Shows both URL and content sections
- **URL Section**:
  - Displays the cifra URL with cavaco parameters
  - "Abrir Cifra" button to open in new tab
  - "Copiar URL" button to copy URL to clipboard
- **Content Section**:
  - Displays full cifra content in monospace font
  - Scrollable container (max-height: 24rem)
  - "Copiar Conteúdo" button to copy content to clipboard
- **Visual Improvements**:
  - Clear section headers
  - Proper spacing and styling
  - Enhanced user experience

## Technical Implementation

### API Changes (`/app/api/search/route.ts`)

#### New Function: `extractCifraContent()`

```typescript
async function extractCifraContent(url: string): Promise<string | null> {
  // Fetches page HTML and extracts content from <pre> tags
  // Cleans HTML tags and entities
  // Returns formatted cifra text
}
```

#### Enhanced Response Logic

- **Google API Results**: Extract content from first result URL
- **Direct URL Access**: Extract content when direct song page is found
- **Search Fallback**: Extract content from search result URLs
- **Error Handling**: Graceful fallback with descriptive messages

### Frontend Changes (`/app/test/page.tsx`)

#### Updated Type Definitions

```typescript
interface ArtistSongResult {
  url: string;
  content: string;
}
```

#### Enhanced Search Handler

- Handles new JSON response format
- Maintains backward compatibility with plain text responses
- Provides appropriate fallback messages

#### Improved UI Components

- Separate sections for URL and content
- Copy functionality for both URL and content
- Better visual hierarchy and spacing

## Usage Examples

### API Calls

```bash
# Artist + Song Search (returns JSON with URL and content)
curl "http://localhost:3002/api/search?q=Cazuza%20by%20Ideologia"

# Response:
{
  "url": "https://www.cifraclub.com.br/cazuza/ideologia/#tabs=false&instrument=cavaco",
  "content": "Intro 4x: Am7\nAm7  Am7(13) (2x)\n\nPrimeira Parte:\n Am7\nMeu partido..."
}
```

### Supported Query Formats

- `Artista - Música` (ex: Legião Urbana - Tempo Perdido)
- `Artista by Música` (ex: Cazuza by Ideologia)
- `Artista | Música` (ex: Capital Inicial | Primeiros Erros)
- `Artista de Música` (ex: Skank de Garota Nacional)

## Benefits

### For Users

1. **Complete Information**: Get both URL and content in one request
2. **Offline Access**: Copy cifra content for offline use
3. **Quick Reference**: View content without leaving the page
4. **Easy Sharing**: Copy either URL or content as needed

### For Developers

1. **Rich Data**: Access to structured cifra content
2. **Error Handling**: Graceful fallbacks when content unavailable
3. **Consistent API**: Unified response format
4. **Extensible**: Easy to add more content parsing features

## Testing Results

### Successful Extractions

- ✅ Cazuza - Ideologia: Full cifra with chords and lyrics extracted
- ✅ Cavaco parameters automatically added to URLs
- ✅ Content properly formatted with line breaks
- ✅ HTML entities correctly decoded

### Error Handling

- ✅ Graceful fallback when content not found
- ✅ Descriptive error messages for different scenarios
- ✅ Maintains functionality for artist-only searches

## Future Enhancements

### Potential Improvements

1. **Content Parsing**: Extract structured chord/lyric data
2. **Caching**: Cache extracted content to reduce API calls
3. **Metadata**: Extract song key, tempo, and other metadata
4. **Multiple Formats**: Support different output formats (tabs, chords only, etc.)

### Integration Options

1. **Bulk Processing**: Batch content extraction for multiple songs
2. **Playlist Generation**: Create playlists with embedded content
3. **Export Features**: Export to PDF, text files, or other formats

## Configuration

### Environment Variables

- `GOOGLE_API_KEY`: Required for Google Custom Search API
- `GOOGLE_CX`: Custom Search Engine ID
- No additional configuration needed for content extraction

### Dependencies

- Next.js 15.3.2
- Node.js built-in fetch API
- TypeScript for type safety

## Conclusion

The cifra content extraction feature significantly enhances the CifraManager's capabilities by providing users with immediate access to complete cifra content. This eliminates the need for multiple page loads and provides a more streamlined user experience while maintaining all existing functionality.

The implementation is robust, with proper error handling and fallbacks, ensuring reliability across different scenarios and content types.
