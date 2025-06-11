"use client";

import { useState } from "react";
import {
  SearchResult,
  MultipleSearchResults,
  HtmlContent,
  ArtistSongResult,
} from "./types";

// Hook for handling main artist search functionality
export function useArtistSearch() {
  const [artist, setArtist] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [multipleResults, setMultipleResults] =
    useState<MultipleSearchResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMultiple, setIsLoadingMultiple] = useState(false);

  const handleSubmit = async () => {
    if (!artist.trim()) return;

    setIsLoading(true);
    setSearchResult(null);

    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(artist.trim())}`
      );
      const result = await response.json();

      if (response.ok) {
        setSearchResult(result);
      } else {
        console.error("Search API error:", result.error);
        // Fallback to opening Google search
        const searchQuery = `site:cifraclub.com.br ${artist.trim()}`;
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
          searchQuery
        )}`;
        window.open(googleSearchUrl, "_blank");
      }
    } catch (error) {
      console.error("Search request failed:", error);
      // Fallback to opening Google search
      const searchQuery = `site:cifraclub.com.br ${artist.trim()}`;
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        searchQuery
      )}`;
      window.open(googleSearchUrl, "_blank");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdvancedSearch = async () => {
    if (!artist.trim()) return;

    setIsLoadingMultiple(true);
    setMultipleResults(null);
    setSearchResult(null);

    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(artist.trim())}&multiple=true&num=8`
      );
      const result = await response.json();

      if (response.ok) {
        setMultipleResults(result);
      } else {
        console.error("Advanced Search API error:", result.error);
        // Fallback to opening Google search
        const searchQuery = `site:cifraclub.com.br ${artist.trim()}`;
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
          searchQuery
        )}`;
        window.open(googleSearchUrl, "_blank");
      }
    } catch (error) {
      console.error("Advanced Search request failed:", error);
      const searchQuery = `site:cifraclub.com.br ${artist.trim()}`;
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        searchQuery
      )}`;
      window.open(googleSearchUrl, "_blank");
    } finally {
      setIsLoadingMultiple(false);
    }
  };

  const clearAll = () => {
    setArtist("");
    setSearchResult(null);
    setMultipleResults(null);
  };

  return {
    artist,
    setArtist,
    searchResult,
    multipleResults,
    isLoading,
    isLoadingMultiple,
    handleSubmit,
    handleAdvancedSearch,
    clearAll,
    setSearchResult,
    setMultipleResults,
  };
}

// Hook for handling HTML content fetching
export function useHtmlContent() {
  const [htmlContent, setHtmlContent] = useState<HtmlContent | null>(null);
  const [isLoadingHtml, setIsLoadingHtml] = useState(false); // Utility function to remove tablatura spans
  const removeTablaturaSpans = (html: string): string => {
    if (!html) return ""; // First, remove <span class="tablatura">...</span> and their content with surrounding context
    // Enhanced regex to handle nested spans and various formatting
    let cleanHtml = html.replace(
      /\n*\s*<span\s+class="tablatura"[^>]*>[\s\S]*?<\/span>\s*(?:<\/span>)?\s*\n*/gi,
      ""
    ); // More comprehensive whitespace cleanup
    cleanHtml = cleanHtml
      // Remove multiple consecutive line breaks (more than 2)
      .replace(/\n\s*\n\s*\n+/g, "\n\n")
      // Remove lines that only contain whitespace
      .replace(/^\s*$/gm, "")
      // Remove empty lines at the start of sections/paragraphs
      .replace(/^\s*\n+/gm, "")
      // Remove trailing whitespace on lines
      .replace(/[ \t]+$/gm, "")
      // Remove excessive spaces (more than 2 consecutive spaces)
      .replace(/  +/g, " ")
      // Clean up spacing around HTML tags
      .replace(/>\s*\n\s*</g, ">\n<")
      // Remove empty paragraphs or divs that might be left
      .replace(/<(p|div|span)[^>]*>\s*<\/\1>/gi, "")
      // Remove empty pre tags that might be left behind
      .replace(/<pre[^>]*>\s*<\/pre>/gi, "") // Additional cleanup for common patterns after tablatura removal
      .replace(/\n\s*\n\s*\[/g, "\n\n[") // Clean up spacing before section markers
      .replace(/\]\s*\n\s*\n\s*\n/g, "]\n\n") // Clean up spacing after section markers
      .replace(/\n\s*\n\s*<b>/g, "\n\n<b>") // Clean up spacing before chord markers
      .replace(/\]\s*<b>/g, "]\n\n<b>") // Add line break between section headers and chords
      // Clean up multiple line breaks again after all other cleanup
      .replace(/\n{3,}/g, "\n\n")
      // Remove leading/trailing whitespace from the entire content
      .trim();

    return cleanHtml;
  };

  const handleFetchHtml = async (url: string) => {
    setIsLoadingHtml(true);
    setHtmlContent(null);

    try {
      console.log("Fetching HTML for:", url);

      // Parse URL to extract fragment parameters
      const urlObj = new URL(url);
      const fragment = urlObj.hash.substring(1); // Remove # from fragment
      const baseUrl = url.split("#")[0]; // URL without fragment

      // Build API URL with fragment parameters as query params
      const apiUrl = new URL("/api/fetch-html", window.location.origin);
      apiUrl.searchParams.set("url", baseUrl);

      if (fragment) {
        const fragmentParams = new URLSearchParams(fragment);
        // Pass fragment parameters as query parameters
        for (const [key, value] of fragmentParams) {
          apiUrl.searchParams.set(key, value);
        }
      }

      const response = await fetch(apiUrl.toString());
      const result = await response.json();

      if (response.ok) {
        // Remove tablatura spans from the HTML content
        if (result.html) {
          result.html = removeTablaturaSpans(result.html);
        }
        setHtmlContent(result);
        console.log("HTML content fetched successfully (tablatura removed)");
      } else {
        console.error("HTML fetch API error:", result.error);
        alert(`Erro ao buscar HTML: ${result.error}`);
      }
    } catch (error) {
      console.error("HTML fetch request failed:", error);
      alert("Erro ao buscar conteúdo HTML da página");
    } finally {
      setIsLoadingHtml(false);
    }
  };

  return {
    htmlContent,
    isLoadingHtml,
    handleFetchHtml,
    setHtmlContent,
  };
}

// Hook for handling artist+song search functionality
export function useArtistSongSearch() {
  const [artistSongResult, setArtistSongResult] =
    useState<ArtistSongResult | null>(null);
  const [isLoadingArtistSong, setIsLoadingArtistSong] = useState(false);
  const handleArtistSongSearch = async (query: string) => {
    console.log("🎵 [ARTIST+SONG SEARCH] Starting search for:", query);
    setIsLoadingArtistSong(true);
    setArtistSongResult(null);

    try {
      const searchUrl = `/api/search?q=${encodeURIComponent(query)}`;
      console.log("🔍 [ARTIST+SONG SEARCH] Calling API:", searchUrl);

      const response = await fetch(searchUrl);
      if (response.ok) {
        console.log(
          "✅ [ARTIST+SONG SEARCH] API response successful, status:",
          response.status
        );
        const contentType = response.headers.get("content-type");
        console.log("📄 [ARTIST+SONG SEARCH] Content-Type:", contentType);

        if (contentType && contentType.includes("application/json")) {
          // JSON response with URL and content (artist+song detected)
          const result = await response.json();
          console.log("🎯 [ARTIST+SONG SEARCH] JSON response received:", {
            url: result.url,
            contentLength: result.content?.length || 0,
            hasContent: !!result.content,
          });
          setArtistSongResult({
            url: result.url,
            content: result.content,
          });
          console.log("✨ [ARTIST+SONG SEARCH] Result stored in state");
        } else if (contentType && contentType.includes("text/plain")) {
          // Plain text response (fallback or artist-only)
          const url = await response.text();
          console.log("📝 [ARTIST+SONG SEARCH] Plain text response:", url);
          setArtistSongResult({
            url: url,
            content: "Content not available - this appears to be a search page",
          });
          console.log("⚠️ [ARTIST+SONG SEARCH] Fallback result stored");
        } else {
          // Other JSON response (artist-only)
          const result = await response.json();
          console.log("📊 [ARTIST+SONG SEARCH] Other JSON response:", result);
          setArtistSongResult({
            url: result.url,
            content: "Content not available - this is an artist page",
          });
          console.log("ℹ️ [ARTIST+SONG SEARCH] Artist page result stored");
        }
      } else {
        console.error(
          "❌ [ARTIST+SONG SEARCH] API response failed, status:",
          response.status
        );
        setArtistSongResult({
          url: "Search failed",
          content: "Search failed",
        });
      }
    } catch (error) {
      console.error(
        "💥 [ARTIST+SONG SEARCH] Request failed with error:",
        error
      );
      setArtistSongResult({
        url: "Request failed",
        content: "Request failed",
      });
    } finally {
      console.log(
        "🏁 [ARTIST+SONG SEARCH] Search completed, loading state cleared"
      );
      setIsLoadingArtistSong(false);
    }
  };

  return {
    artistSongResult,
    isLoadingArtistSong,
    handleArtistSongSearch,
    setArtistSongResult,
  };
}
