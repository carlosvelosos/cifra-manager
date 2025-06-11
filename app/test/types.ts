// Types for the test page components

export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  source: string;
}

export interface MultipleSearchResults {
  results: SearchResult[];
  totalResults: string;
  source: string;
}

export interface Song {
  title: string;
  url: string;
  artist?: string;
}

export interface HtmlContent {
  html: string;
  url: string;
  timestamp: string;
  success: boolean;
  maisAcessadas?: Song[];
  songsFound?: number;
}

export interface ArtistSongResult {
  url: string;
  content: string;
}
