# Artist + Song Search Feature

## Overview

The CifraManager has been enhanced to support intelligent artist + song searches that automatically detect when users are searching for a specific song and return direct URLs to the cifra page.

## How It Works

### Query Detection

The system automatically detects if a search query contains both an artist and song name by looking for common separators:

- `Artist - Song` (hyphen)
- `Artist – Song` (em dash)
- `Artist — Song` (em dash variant)
- `Artist | Song` (pipe)
- `Artist / Song` (slash)
- `Artist by Song` (by keyword)
- `Artist de Song` (Portuguese "de")

### Response Behavior

#### Artist + Song Queries

When an artist+song pattern is detected:

- **Response Format**: JSON object with URL and content
- **Cavaco Parameters**: Automatically adds `#tabs=false&instrument=cavaco` to song URLs
- **Content Extraction**: Extracts cifra content from `<pre>` tags on the page
- **URL Strategy**:
  1. First attempts direct URL construction: `https://www.cifraclub.com.br/{artist-slug}/{song-slug}/#tabs=false&instrument=cavaco`
  2. Falls back to CifraClub search if direct URL fails
  3. Prioritizes song pages in search results
  4. Extracts and returns cifra content along with URL

#### Artist-Only Queries

When only an artist is detected:

- **Response Format**: JSON structure (default) or plain text URL (with `plainUrl=true`)
- **URL Strategy**: Prioritizes artist pages over individual song pages

## API Examples

### Artist + Song Search (Returns JSON with URL and Content)

```bash
curl "http://localhost:3003/api/search?q=Legião%20Urbana%20-%20Tempo%20Perdido"
# Returns: {"url": "https://www.cifraclub.com.br/legiao-urbana/tempo-perdido/#tabs=false&instrument=cavaco", "content": "Full cifra content..."}

curl "http://localhost:3003/api/search?q=Cazuza%20by%20Ideologia"
# Returns: {"url": "https://www.cifraclub.com.br/cazuza/ideologia/#tabs=false&instrument=cavaco", "content": "Intro 4x: Am7\nAm7  Am7(13) (2x)..."}
```

### Response Structure for Artist + Song

```json
{
  "url": "https://www.cifraclub.com.br/artist/song/#tabs=false&instrument=cavaco",
  "content": "Complete cifra content with chords and lyrics extracted from the page"
}

curl "http://localhost:3003/api/search?q=Capital%20Inicial%20|%20Primeiros%20Erros"
# Returns: https://www.cifraclub.com.br/capital-inicial/primeiros-erros/#tabs=false&instrument=cavaco
```

### Artist-Only Search (Returns JSON)

```bash
curl "http://localhost:3002/api/search?q=Legião%20Urbana"
# Returns: {"title":"Legião Urbana - Cifra Club","url":"https://www.cifraclub.com.br/legiao-urbana/","snippet":"...","source":"google_api"}

curl "http://localhost:3002/api/search?q=Legião%20Urbana&plainUrl=true"
# Returns: https://www.cifraclub.com.br/legiao-urbana/
```

## UI Interface

The test page now includes a dedicated "Artist + Song Search" section that:

- Provides clear examples of supported formats
- Shows the plain text URL result in a copy-friendly format
- Includes buttons to open the cifra directly or copy the URL
- Demonstrates different separator patterns

## Enhanced Test Interface

### Artist + Song Search Section

The test interface (`/test`) now includes a dedicated section for artist+song searches with enhanced functionality:

#### Input Features

- **Smart Input Field**: Detects artist+song patterns as you type
- **Format Examples**: Shows supported separator formats below the input
- **Clear Button**: Easily clear the search field
- **Enter to Search**: Press Enter or click the search button

#### Result Display

When an artist+song search succeeds, the interface displays:

##### URL Section

- **Direct Cifra URL**: Shows the complete URL with cavaco parameters
- **"Abrir Cifra" Button**: Opens the cifra page in a new tab
- **"Copiar URL" Button**: Copies the URL to clipboard

##### Content Section

- **Full Cifra Display**: Shows the complete cifra content in a scrollable container
- **Monospace Font**: Proper formatting for chord alignment
- **Copy Content Button**: Copies the entire cifra text to clipboard
- **Max Height**: Scrollable container (24rem max-height) for long cifras

#### Visual Design

- **Green Theme**: Success-oriented color scheme for found cifras
- **Clear Sections**: Distinct URL and content areas
- **Responsive Layout**: Works on desktop and mobile
- **Loading States**: Shows spinner while searching

#### Supported Input Formats

The interface accepts various artist+song separator formats:

```
Legião Urbana - Tempo Perdido
Cazuza by Ideologia
Capital Inicial | Primeiros Erros
Skank de Garota Nacional
Artista / Música
Artista – Música (em dash)
Artista — Música (em dash variant)
```

#### Example Usage Flow

1. **Enter Query**: Type "Cazuza by Ideologia" in the artist+song search field
2. **Click Search**: Press Enter or click the search button
3. **View Results**: See both the URL and complete cifra content
4. **Copy Content**: Use the copy buttons to save URL or cifra text
5. **Open Page**: Click "Abrir Cifra" to view the original page

### Integration with Main Search

The artist+song functionality integrates seamlessly with the existing search features:

- **Main Search**: Still available for artist-only searches
- **Advanced Search**: Multiple results for broader searches
- **Google CSE Widget**: Legacy search widget remains available
- **HTML Fetching**: View raw HTML content when needed

## Content Extraction Features

### Automatic Content Parsing

- Extracts content from `<pre>` tags (primary method)
- Fallback to `.cifra` class elements
- Removes HTML tags and entities
- Preserves formatting and line breaks

### Content Cleaning

- Decodes HTML entities (`&amp;`, `&lt;`, etc.)
- Removes unwanted HTML markup
- Maintains chord and lyric alignment
- Trims excess whitespace

### Error Handling

- Graceful fallback when content unavailable
- Descriptive error messages
- Maintains URL functionality even if content extraction fails

## API Changes

### Enhanced Search Endpoint

The search API endpoint (`/api/search`) has been enhanced to support:

- **Artist + Song Detection**: Intelligent detection of artist+song queries
- **Direct URL Response**: Returns direct URL to the cifra page
- **Content Extraction**: Extracts and returns cifra content in the response

### New Query Parameters

- **`plainUrl`**: (optional) If set to `true`, the response will be a plain text URL instead of JSON
- **`instrument`**: (optional) Specify the instrument for cifra (e.g., `cavaco`)

### Example Requests

#### Artist + Song Query

```bash
curl "http://localhost:3003/api/search?q=Legião%20Urbana%20-%20Tempo%20Perdido"
# Returns JSON with direct URL and cifra content
```

#### Artist-Only Query

```bash
curl "http://localhost:3002/api/search?q=Legião%20Urbana"
# Returns JSON with artist page URL
```

#### Plain URL Request

```bash
curl "http://localhost:3002/api/search?q=Legião%20Urbana&plainUrl=true"
# Returns plain text URL of the artist page
```

## Status

✅ **Completed**: Full implementation with comprehensive testing
✅ **API Enhanced**: Search endpoint supports artist+song detection  
✅ **UI Updated**: Test interface includes dedicated artist+song section
✅ **Tested**: Multiple separator patterns verified working
✅ **Cavaco Parameters**: Automatic cavaco instrument selection for song URLs
