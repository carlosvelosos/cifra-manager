"use client";

import { useState, useEffect, useRef } from "react";

interface SearchResult {
  title: string;
  artist: string;
  href: string;
  type: "song" | "artist";
}

interface ArtistSongResult {
  url: string;
  content: string;
}

interface FloatingSearchProps {
  show: boolean;
  onArtistSongResult?: (result: ArtistSongResult) => void;
}

const FloatingSearch: React.FC<FloatingSearchProps> = ({
  show,
  onArtistSongResult,
}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showResults, setShowResults] = useState(false);
  const [isSearchingExternal, setIsSearchingExternal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Function to detect artist-song patterns (Artist - Song)
  const isArtistSongPattern = (query: string): boolean => {
    return query.includes(" - ") && query.split(" - ").length === 2;
  };

  // Function to handle artist+song search using the exact same logic as the test page
  const handleArtistSongSearch = async (query: string) => {
    console.log("🎵 [FLOATING SEARCH] Starting artist+song search for:", query);
    setIsSearchingExternal(true);

    try {
      const searchUrl = `/api/search?q=${encodeURIComponent(query)}`;
      console.log("🔍 [FLOATING SEARCH] Calling API:", searchUrl);

      const response = await fetch(searchUrl);
      if (response.ok) {
        console.log(
          "✅ [FLOATING SEARCH] API response successful, status:",
          response.status
        );
        const contentType = response.headers.get("content-type");
        console.log("📄 [FLOATING SEARCH] Content-Type:", contentType);

        if (contentType && contentType.includes("application/json")) {
          // JSON response with URL and content (artist+song detected)
          const result = await response.json();
          console.log("🎯 [FLOATING SEARCH] JSON response received:", {
            url: result.url,
            contentLength: result.content?.length || 0,
            hasContent: !!result.content,
          });

          // Call the callback with the result
          if (onArtistSongResult) {
            onArtistSongResult({
              url: result.url,
              content: result.content,
            });
          }
          console.log("✨ [FLOATING SEARCH] Result passed to callback");
        } else if (contentType && contentType.includes("text/plain")) {
          // Plain text response (fallback or artist-only)
          const url = await response.text();
          console.log("📝 [FLOATING SEARCH] Plain text response:", url);

          // Call the callback with fallback result
          if (onArtistSongResult) {
            onArtistSongResult({
              url: url,
              content:
                "Content not available - this appears to be a search page",
            });
          }
          console.log(
            "⚠️ [FLOATING SEARCH] Fallback result passed to callback"
          );
        } else {
          // Other JSON response (artist-only)
          const result = await response.json();
          console.log("📊 [FLOATING SEARCH] Other JSON response:", result);

          // Call the callback with artist page result
          if (onArtistSongResult) {
            onArtistSongResult({
              url: result.url,
              content: "Content not available - this is an artist page",
            });
          }
          console.log(
            "ℹ️ [FLOATING SEARCH] Artist page result passed to callback"
          );
        }
      } else {
        console.error(
          "❌ [FLOATING SEARCH] API response failed, status:",
          response.status
        );

        // Call the callback with error result
        if (onArtistSongResult) {
          onArtistSongResult({
            url: "Search failed",
            content: "Search failed",
          });
        }
      }
    } catch (error) {
      console.error("💥 [FLOATING SEARCH] Request failed with error:", error);

      // Call the callback with error result
      if (onArtistSongResult) {
        onArtistSongResult({
          url: "Request failed",
          content: "Request failed",
        });
      }
    } finally {
      console.log(
        "🏁 [FLOATING SEARCH] Search completed, loading state cleared"
      );
      setIsSearchingExternal(false);
    }
  };

  // Function to handle regular search (fallback)
  const handleRegularSearch = (query: string) => {
    const searchQuery = `site:cifraclub.com.br ${query}`;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      searchQuery
    )}`;
    window.open(googleSearchUrl, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const searchSongs = async () => {
      if (!query.trim()) {
        setResults([]);
        setShowResults(false);
        return;
      }
      setIsLoading(true);
      try {
        // Create a simple search by fetching all artists and filtering locally
        const response = await fetch("/api/artists");

        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();

        // Handle both possible response formats
        const artists = Array.isArray(data) ? data : data.artists || [];

        if (!Array.isArray(artists)) {
          console.error("Artists data is not an array:", artists);
          setResults([]);
          return;
        }

        const searchResults: SearchResult[] = [];
        const queryLower = query.toLowerCase();

        // Search through artists
        // Ensure `artistName` is always a string
        artists.forEach(
          (artist: {
            name?: string;
            artist?: string;
            songs?: Array<{
              title?: string;
              name?: string;
              href?: string;
              url?: string;
            }>;
          }) => {
            const artistName = String(artist.name || artist.artist || artist);
            if (artistName.toLowerCase().includes(queryLower)) {
              searchResults.push({
                title: artistName,
                artist: "",
                href: `/artists/${artistName
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`,
                type: "artist",
              });
            }

            // Search through songs if available
            if (artist.songs && Array.isArray(artist.songs)) {
              artist.songs.forEach(
                (song: {
                  title?: string;
                  name?: string;
                  href?: string;
                  url?: string;
                }) => {
                  const songTitle = String(song.title || song.name || song);
                  if (songTitle.toLowerCase().includes(queryLower)) {
                    searchResults.push({
                      title: songTitle,
                      artist: artistName,
                      href: song.href || song.url || "#",
                      type: "song",
                    });
                  }
                }
              );
            }
          }
        );

        // Limit to 5 results
        setResults(searchResults.slice(0, 5));
        setShowResults(searchResults.length > 0);
      } catch (error) {
        console.error("Search failed:", error);
        setResults([]);
        setShowResults(false);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchSongs, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(-1);
  }, [results]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        console.log("🔍 [FLOATING SEARCH] Enter key pressed", {
          "query.trim()": query.trim(),
          showResults: showResults,
          "results.length": results.length,
          selectedIndex: selectedIndex,
          isArtistSongPattern: isArtistSongPattern(query.trim()),
        });

        if (
          selectedIndex >= 0 &&
          selectedIndex < results.length &&
          showResults
        ) {
          console.log("🎯 [FLOATING SEARCH] Navigating to selected result");
          window.open(results[selectedIndex].href, "_blank");
        } else if (query.trim()) {
          // If no result is selected but there's a query, check for artist-song pattern
          if (isArtistSongPattern(query.trim())) {
            console.log(
              "🎵 [FLOATING SEARCH] Artist-song pattern detected:",
              query.trim()
            );
            handleArtistSongSearch(query.trim());
          } else {
            console.log(
              "🔍 [FLOATING SEARCH] Regular search, opening Google:",
              query.trim()
            );
            handleRegularSearch(query.trim());
          }
        } else {
          console.log("⚠️ [FLOATING SEARCH] Enter pressed but no query");
        }

        setShowResults(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
      case "Escape":
        setShowResults(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleInputFocus = () => {
    if (results.length > 0) {
      setShowResults(true);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding results to allow clicks
    setTimeout(() => setShowResults(false), 150);
  };

  if (!show) return null;

  return (
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 backdrop-blur-sm">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Buscar artista ou música..."
            className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none text-lg transition-all duration-200"
            disabled={isSearchingExternal}
          />

          {/* Loading indicator */}
          {(isLoading || isSearchingExternal) && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
            </div>
          )}

          {/* Search icon */}
          {!isLoading && !isSearchingExternal && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Artist-Song pattern hint */}
        {query.trim() && isArtistSongPattern(query) && (
          <div className="mt-2 text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
            💡 Formato &quot;Artista - Música&quot; detectado! Pressione Enter
            para buscar.
          </div>
        )}

        {/* Search Results */}
        {showResults && results.length > 0 && !isSearchingExternal && (
          <div
            ref={resultsRef}
            className="mt-3 max-h-64 overflow-y-auto border border-gray-200 rounded-xl bg-white shadow-lg"
          >
            {results.map((result, index) => (
              <div
                key={index}
                className={`px-4 py-3 cursor-pointer transition-colors duration-150 ${
                  index === selectedIndex
                    ? "bg-blue-50 border-l-4 border-blue-500"
                    : "hover:bg-gray-50"
                } ${
                  index !== results.length - 1 ? "border-b border-gray-100" : ""
                }`}
                onClick={() => window.open(result.href, "_blank")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">
                      {result.title}
                    </div>
                    {result.artist && (
                      <div className="text-sm text-gray-500 truncate">
                        {result.artist}
                      </div>
                    )}
                  </div>
                  <div className="ml-2 flex-shrink-0">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        result.type === "song"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {result.type === "song" ? "Música" : "Artista"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No results message */}
        {showResults &&
          results.length === 0 &&
          !isLoading &&
          !isSearchingExternal &&
          query.trim() && (
            <div className="mt-3 p-4 text-center text-gray-500 bg-gray-50 rounded-xl">
              Nenhum resultado encontrado
            </div>
          )}

        {/* Usage instructions */}
        {!query.trim() && (
          <div className="mt-3 text-xs text-gray-500 text-center space-y-1">
            <div>Digite para buscar localmente</div>
            <div>Use &quot;Artista - Música&quot; para busca específica</div>
            <div>Pressione Enter para buscar no Google</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingSearch;
