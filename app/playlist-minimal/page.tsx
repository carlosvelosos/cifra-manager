"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Music,
  Search,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  AlertCircle,
  Loader2,
  Upload,
  FileText,
  X,
} from "lucide-react";

interface SpotifyTrack {
  track: {
    id: string;
    name: string;
    artists: Array<{
      name: string;
    }>;
  };
}

interface SpotifyPlaylist {
  name: string;
  tracks: {
    items: SpotifyTrack[];
  };
}

type SortOrder = "asc" | "desc" | "none";

export default function MinimalPlaylistPage() {
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [playlist, setPlaylist] = useState<SpotifyPlaylist | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("none");
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [showFocusMode, setShowFocusMode] = useState(false);
  const [cifraUrls, setCifraUrls] = useState<Record<string, string[]>>({});
  const [loadingCifra, setLoadingCifra] = useState<Record<string, boolean>>({});
  // =============================================================================
  // CACHING & RATE LIMITING STATE
  // =============================================================================

  /**
   * Search results cache with 24-hour persistence
   * Stores successful search results to reduce API calls and improve performance
   * Cache entries include URLs, timestamp, and source information
   */
  const [searchCache, setSearchCache] = useState<
    Record<
      string,
      {
        urls: string[]; // Found CifraClub URLs
        timestamp: number; // When result was cached (Date.now())
        source: "api" | "direct" | "cache" | "fresh"; // How result was obtained
      }
    >
  >({});

  /**
   * API rate limiting state to prevent quota exceeded errors
   * Tracks daily usage and automatically throttles requests
   * Resets every 24 hours to align with Google API quota reset
   */
  const [rateLimitState, setRateLimitState] = useState<{
    requestCount: number; // Current API requests made today
    lastResetTime: number; // When counter was last reset (Date.now())
    isThrottled: boolean; // Whether we're currently rate limited
  }>({
    requestCount: 0,
    lastResetTime: Date.now(),
    isThrottled: false,
  });
  const [searchStatus, setSearchStatus] = useState<{
    isSearching: boolean;
    totalSongs: number;
    completedSongs: number;
    totalUrls: number;
    failedSongs: number;
    apiIssueDetected: boolean;
  }>({
    isSearching: false,
    totalSongs: 0,
    completedSongs: 0,
    totalUrls: 0,
    failedSongs: 0,
    apiIssueDetected: false,
  });

  // For now, using a placeholder token - in production, this should come from OAuth flow
  const SPOTIFY_TOKEN =
    process.env.NEXT_PUBLIC_SPOTIFY_TOKEN || "YOUR_SPOTIFY_TOKEN_HERE";

  // =============================================================================
  // CACHING & RATE LIMITING CONFIGURATION
  // =============================================================================

  /**
   * Cache duration: 24 hours in milliseconds
   * CifraClub chord data rarely changes, so 24h provides good balance
   * between freshness and API usage reduction
   */
  const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  /**
   * Conservative daily API limit: 80 requests out of 100 quota
   * Leaves 20 requests buffer for other features and error tolerance
   * Google Custom Search API allows 100 free requests per day
   */
  const MAX_API_REQUESTS_PER_DAY = 80; // Conservative limit (80 out of 100)

  /**
   * Delay between API requests: 500ms
   * Respectful to API servers and helps avoid rate limiting
   * Also provides time for UI updates between requests
   */
  const REQUEST_DELAY = 500; // 500ms delay between requests

  /**
   * API quota reset time: Midnight PT (Google's timezone)
   * Used for automatic rate limit counter reset
   * Note: Currently auto-resets every 24 hours regardless of timezone
   */
  // const DAILY_RESET_HOUR = 0; // API resets at midnight PT (adjust for your timezone)

  // =============================================================================
  // CACHE & RATE LIMIT PERSISTENCE (localStorage Integration)
  // =============================================================================

  /**
   * Load cached data and rate limit state from localStorage on component mount
   * Provides persistence across browser sessions and page reloads
   * Automatically cleans expired cache entries during load
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        // Load search cache
        const savedCache = localStorage.getItem("cifra-search-cache");
        if (savedCache) {
          const parsedCache = JSON.parse(savedCache);
          // Clean expired entries
          const cleanedCache: typeof searchCache = {};
          Object.entries(parsedCache).forEach(
            ([key, entry]: [string, unknown]) => {
              const typedEntry = entry as {
                timestamp: number;
                urls: string[];
                source: "api" | "direct" | "cache" | "fresh";
              };
              if (isCacheValid(typedEntry.timestamp)) {
                cleanedCache[key] = typedEntry;
              }
            }
          );
          setSearchCache(cleanedCache);
          console.log(
            `💾 [PLAYLIST MINIMAL] Loaded ${
              Object.keys(cleanedCache).length
            } valid cache entries from localStorage`
          );
        }

        // Load rate limit state
        const savedRateLimit = localStorage.getItem("cifra-rate-limit");
        if (savedRateLimit) {
          const parsedRateLimit = JSON.parse(savedRateLimit);
          // Check if rate limit should be reset (24 hours passed)
          const now = Date.now();
          const timeSinceReset = now - parsedRateLimit.lastResetTime;
          const hoursPassedSinceReset = timeSinceReset / (1000 * 60 * 60);

          if (hoursPassedSinceReset >= 24) {
            console.log(
              "🔄 [PLAYLIST MINIMAL] Rate limit reset period passed, resetting counters"
            );
            setRateLimitState({
              requestCount: 0,
              lastResetTime: now,
              isThrottled: false,
            });
          } else {
            setRateLimitState(parsedRateLimit);
            console.log(
              `🚦 [PLAYLIST MINIMAL] Loaded rate limit state: ${parsedRateLimit.requestCount}/${MAX_API_REQUESTS_PER_DAY} requests used`
            );
          }
        }
      } catch (error) {
        console.error(
          "❌ [PLAYLIST MINIMAL] Error loading from localStorage:",
          error
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Save search cache to localStorage whenever it changes
   * Ensures cache persistence across browser sessions
   * Gracefully handles localStorage errors (quota, disabled, etc.)
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("cifra-search-cache", JSON.stringify(searchCache));
      } catch (error) {
        console.error(
          "❌ [PLAYLIST MINIMAL] Error saving cache to localStorage:",
          error
        );
      }
    }
  }, [searchCache]);

  /**
   * Save rate limit state to localStorage whenever it changes
   * Maintains rate limiting across browser sessions
   * Essential for preventing quota exceeded errors
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "cifra-rate-limit",
          JSON.stringify(rateLimitState)
        );
      } catch (error) {
        console.error(
          "❌ [PLAYLIST MINIMAL] Error saving rate limit to localStorage:",
          error
        );
      }
    }
  }, [rateLimitState]);

  // =============================================================================
  // CACHE MANAGEMENT HELPER FUNCTIONS
  // =============================================================================

  /**
   * Check if a cache entry is still valid based on timestamp
   * @param timestamp - When the cache entry was created (Date.now())
   * @returns true if cache entry is less than CACHE_DURATION old
   */
  const isCacheValid = (timestamp: number): boolean => {
    return Date.now() - timestamp < CACHE_DURATION;
  };

  /**
   * Clear all cached search results and related data
   * Removes data from both component state and localStorage
   * Used by the "Clear Cache" button in the UI
   */
  const clearAllCache = () => {
    setSearchCache({});
    setCifraUrls({});

    // Clear localStorage as well
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem("cifra-search-cache");
        console.log("🗑️ [PLAYLIST MINIMAL] Cache cleared from localStorage");
      } catch (error) {
        console.error(
          "❌ [PLAYLIST MINIMAL] Error clearing cache from localStorage:",
          error
        );
      }
    }

    console.log("🗑️ [PLAYLIST MINIMAL] All cache cleared");
  };

  /**
   * Reset rate limit counter and state
   * Used for manual reset during development or troubleshooting
   * Also clears rate limit data from localStorage
   * Note: Currently not exposed in UI but available for debugging
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const resetRateLimit = () => {
    setRateLimitState({
      requestCount: 0,
      lastResetTime: Date.now(),
      isThrottled: false,
    });

    // Clear localStorage rate limit as well
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem("cifra-rate-limit");
        console.log("🔄 [PLAYLIST MINIMAL] Rate limit manually reset");
      } catch (error) {
        console.error(
          "❌ [PLAYLIST MINIMAL] Error resetting rate limit in localStorage:",
          error
        );
      }
    }
  };
  /**
   * Cache statistics helper function
   * @returns Object with total, valid, and expired cache entry counts
   */
  const getCacheStats = () => {
    const totalCached = Object.keys(searchCache).length;
    const validCached = Object.entries(searchCache).filter(([, entry]) =>
      isCacheValid(entry.timestamp)
    ).length;
    const expiredCached = totalCached - validCached;

    return { totalCached, validCached, expiredCached };
  };

  // =============================================================================
  // RATE LIMITING HELPER FUNCTIONS
  // =============================================================================

  /**
   * Check if rate limit should be reset and reset if needed
   * Called before each API usage check to ensure current state
   * Automatically resets counter after 24 hours have passed
   * @returns true if reset occurred, false otherwise
   */
  const checkAndResetRateLimit = () => {
    const now = Date.now();
    const lastReset = rateLimitState.lastResetTime;
    const timeSinceReset = now - lastReset;
    const hoursPassedSinceReset = timeSinceReset / (1000 * 60 * 60);

    // Reset if more than 24 hours have passed
    if (hoursPassedSinceReset >= 24) {
      console.log("🔄 [PLAYLIST MINIMAL] Resetting daily rate limit counter");
      setRateLimitState({
        requestCount: 0,
        lastResetTime: now,
        isThrottled: false,
      });
      return true;
    }
    return false;
  };

  /**
   * Determine whether to use API or fallback method based on rate limit
   * Checks current usage against daily maximum and auto-resets if needed
   * Sets throttled flag when limit is reached
   * @returns true if API usage is allowed, false if rate limited
   */
  const shouldUseAPI = (): boolean => {
    checkAndResetRateLimit();

    if (rateLimitState.requestCount >= MAX_API_REQUESTS_PER_DAY) {
      console.log(
        `⚠️ [PLAYLIST MINIMAL] Rate limit reached (${rateLimitState.requestCount}/${MAX_API_REQUESTS_PER_DAY}), using direct URL construction`
      );
      setRateLimitState((prev) => ({ ...prev, isThrottled: true }));
      return false;
    }

    return true;
  };

  /**
   * Increment the API request counter
   * Called after each successful API call to track usage
   * Automatically persisted to localStorage via useEffect
   */
  const incrementRequestCounter = () => {
    setRateLimitState((prev) => ({
      ...prev,
      requestCount: prev.requestCount + 1,
    }));
  };

  /**
   * Add delay between API requests to be respectful to the API
   * Helps prevent rate limiting and reduces server load
   * @returns Promise that resolves after REQUEST_DELAY milliseconds
   */
  const addRequestDelay = (): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, REQUEST_DELAY));
  };

  const extractPlaylistId = (url: string): string | null => {
    const patterns = [
      /https:\/\/open\.spotify\.com\/playlist\/([a-zA-Z0-9]+)(\?.*)?/,
      /spotify:playlist:([a-zA-Z0-9]+)/,
      /^([a-zA-Z0-9]+)$/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1];
      }
    }
    return null;
  };

  const fetchPlaylist = async () => {
    if (!playlistUrl.trim()) {
      setError("Please enter a Spotify playlist URL or ID");
      return;
    }

    const playlistId = extractPlaylistId(playlistUrl.trim());
    if (!playlistId) {
      setError("Invalid Spotify playlist URL format");
      return;
    }

    if (SPOTIFY_TOKEN === "YOUR_SPOTIFY_TOKEN_HERE") {
      setError(
        "Spotify token not configured. Please set NEXT_PUBLIC_SPOTIFY_TOKEN environment variable."
      );
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}?fields=name,tracks.items(track(id,name,artists(name)))`,
        {
          headers: {
            Authorization: `Bearer ${SPOTIFY_TOKEN}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch playlist: ${response.statusText}`);
      }

      const data = await response.json();
      setPlaylist(data);
      setIsOfflineMode(false);
      setShowFocusMode(false);
    } catch (err) {
      console.error("Error fetching playlist:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch playlist");
    } finally {
      setLoading(false);
    }
  };

  // Function to generate and download URLs text file
  const downloadUrlsFile = () => {
    if (!playlist) return;

    const songs = getSortedSongs();
    const allUrls: string[] = [];

    // Collect all URLs from all songs
    songs.forEach((song) => {
      const urls = cifraUrls[song.displayText];
      if (urls && urls.length > 0) {
        allUrls.push(`${song.displayText}:`);
        urls.forEach((url) => {
          allUrls.push(`  ${url}`);
        });
        allUrls.push(""); // Empty line between songs
      }
    });

    if (allUrls.length === 0) {
      console.log("No URLs found to download");
      return;
    }

    // Create file content
    const fileContent = allUrls.join("\n");

    // Generate filename with playlist name, song count, and timestamp
    const timestamp = new Date()
      .toISOString()
      .replace(/[:.]/g, "-")
      .slice(0, 19);
    const sanitizedPlaylistName = playlist.name.replace(/[^\w\s-]/g, "").trim();
    const filename = `${sanitizedPlaylistName}_${songs.length}songs_${timestamp}.txt`;

    // Create and download file
    const blob = new Blob([fileContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    console.log(`📁 [PLAYLIST MINIMAL] Downloaded URLs file: ${filename}`);
  };

  // Function to search all songs at once
  const searchAllSongs = async () => {
    const songs = getSortedSongs();
    console.log(
      "🚀 [PLAYLIST MINIMAL] Starting search for ALL songs:",
      songs.length
    );

    // Initialize search status
    setSearchStatus({
      isSearching: true,
      totalSongs: songs.length,
      completedSongs: 0,
      totalUrls: 0,
      failedSongs: 0,
      apiIssueDetected: false,
    });

    // Search songs sequentially to respect rate limiting
    try {
      for (let i = 0; i < songs.length; i++) {
        const song = songs[i];
        console.log(
          `🎵 [PLAYLIST MINIMAL] Processing song ${i + 1}/${songs.length}: ${
            song.displayText
          }`
        );

        await handleArtistSongSearch(song.displayText);

        // Small delay between songs to avoid overwhelming the API
        if (i < songs.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }

      console.log("✅ [PLAYLIST MINIMAL] All searches completed");

      // Calculate total URLs found by accessing the current state
      setCifraUrls((currentCifraUrls) => {
        const totalUrls = Object.values(currentCifraUrls).reduce(
          (sum, urls) => sum + urls.length,
          0
        );

        // Update status to completed with correct total
        setSearchStatus((prev) => ({
          ...prev,
          isSearching: false,
          completedSongs: songs.length,
          totalUrls,
        }));

        return currentCifraUrls; // Return unchanged state
      });
    } catch (error) {
      console.error("❌ [PLAYLIST MINIMAL] Error in batch search:", error);
      setSearchStatus((prev) => ({
        ...prev,
        isSearching: false,
      }));
    }
  };

  // =============================================================================
  // SMART SEARCH WITH CACHING & RATE LIMITING
  // =============================================================================

  /**
   * Enhanced search function with intelligent caching and rate limiting
   *
   * Search Flow:
   * 1. Check cache first - return immediately if valid cached result exists
   * 2. If cache miss, check rate limit status
   * 3. If under limit, make API call with delay and increment counter
   * 4. If over limit, use direct URL construction fallback
   * 5. Cache successful results for future use
   * 6. Update UI state with progress and status information
   *
   * Features:
   * - 24-hour persistent caching reduces API usage
   * - Rate limiting prevents quota exceeded errors
   * - Sequential processing respects API limits
   * - Multiple fallback strategies ensure results
   * - Real-time progress tracking for batch operations
   *
   * @param query - Song query in "Artist - Song" format
   */
  const handleArtistSongSearch = async (query: string) => {
    console.log("🎵 [PLAYLIST MINIMAL] Starting search for:", query);

    // Check cache first
    const cacheKey = query.toLowerCase().trim();
    const cachedResult = searchCache[cacheKey];

    if (cachedResult && isCacheValid(cachedResult.timestamp)) {
      console.log("💾 [PLAYLIST MINIMAL] Using cached result for:", query);
      setCifraUrls((prev) => ({ ...prev, [query]: cachedResult.urls }));

      // Update search status if we're in a batch search
      setCifraUrls((currentUrls) => {
        const updated = { ...currentUrls, [query]: cachedResult.urls };

        setSearchStatus((prevStatus) => {
          if (prevStatus.isSearching) {
            const completedSongsCount = Object.keys(updated).length;
            const currentTotalUrls = Object.values(updated).reduce(
              (sum, existingUrls) => sum + existingUrls.length,
              0
            );
            const failedSongsCount = Object.values(updated).filter(
              (urlArray) => urlArray.length === 0
            ).length;

            return {
              ...prevStatus,
              completedSongs: Math.min(
                completedSongsCount,
                prevStatus.totalSongs
              ),
              totalUrls: currentTotalUrls,
              failedSongs: failedSongsCount,
            };
          }
          return prevStatus;
        });

        return updated;
      });

      return;
    }

    // Always clear any existing data first
    setCifraUrls((prev) => {
      const updated = { ...prev };
      delete updated[query];
      return updated;
    });

    // Clean the query by removing " - ao vivo" if present
    const cleanedQuery = query.replace(/ - ao vivo/gi, "");

    // Split by " / " to handle multiple songs
    const parts = cleanedQuery.split(" / ");

    // Extract artist name from the first part
    const firstPart = parts[0].trim();
    const artistMatch = firstPart.match(/^(.*?) - (.*)$/);

    if (!artistMatch) {
      console.error("Could not extract artist from:", firstPart);
      return;
    }

    const artist = artistMatch[1].trim();

    // Create individual song queries
    const songQueries = parts.map((part, index) => {
      const trimmedPart = part.trim();

      if (index === 0) {
        // First part is already in "Artist - Song" format
        return trimmedPart;
      } else {
        // For subsequent parts, check if they already contain the artist
        if (trimmedPart.includes(" - ")) {
          // Already in "Artist - Song" format, use as is
          return trimmedPart;
        } else {
          // Just the song name, prepend the artist
          return `${artist} - ${trimmedPart}`;
        }
      }
    });

    console.log(
      "🎵 [PLAYLIST MINIMAL] Cleaned query:",
      cleanedQuery,
      "Individual songs:",
      songQueries
    );
    setLoadingCifra((prev) => ({ ...prev, [query]: true }));

    try {
      const urls: string[] = [];

      // Search for each song separately
      for (const songQuery of songQueries) {
        try {
          let foundUrl = null;
          let searchSource: "api" | "direct" | "cache" = "direct";

          // Check if we should use API or go directly to fallback
          if (shouldUseAPI()) {
            // Add delay between requests to be respectful to the API
            if (rateLimitState.requestCount > 0) {
              console.log(
                `⏱️ [PLAYLIST MINIMAL] Adding ${REQUEST_DELAY}ms delay between requests...`
              );
              await addRequestDelay();
            }

            // Use the same API call as the working floating search component
            const searchUrl = `/api/search?q=${encodeURIComponent(songQuery)}`;
            console.log(
              "🔍 [PLAYLIST MINIMAL] Calling API:",
              searchUrl,
              `(Request ${
                rateLimitState.requestCount + 1
              }/${MAX_API_REQUESTS_PER_DAY})`
            );

            // Increment counter before making request
            incrementRequestCounter();

            try {
              const response = await fetch(searchUrl);

              console.log("📡 [PLAYLIST MINIMAL] Raw response:", {
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                headers: Object.fromEntries(response.headers.entries()),
              });

              if (response.ok) {
                console.log(
                  "✅ [PLAYLIST MINIMAL] API response successful, status:",
                  response.status
                );
                const contentType = response.headers.get("content-type");
                console.log("📄 [PLAYLIST MINIMAL] Content-Type:", contentType);

                if (contentType && contentType.includes("application/json")) {
                  // JSON response with URL and content (artist+song detected)
                  const result = await response.json();
                  console.log("🎯 [PLAYLIST MINIMAL] JSON response received:", {
                    url: result.url,
                    contentLength: result.content?.length || 0,
                    hasContent: !!result.content,
                    fullResult: result,
                  });

                  // Check if the API returned an error (like invalid API key)
                  if (result.error) {
                    console.error(
                      "❌ [PLAYLIST MINIMAL] API returned error:",
                      result.error
                    );
                    console.log(
                      "🔄 [PLAYLIST MINIMAL] API error detected, trying direct URL construction..."
                    );

                    // Mark that we detected an API issue
                    setSearchStatus((prev) => ({
                      ...prev,
                      apiIssueDetected: true,
                    }));

                    // Try direct URL construction as fallback
                    foundUrl = constructDirectCifraUrl(songQuery);
                    searchSource = "direct";
                  } else if (result.url) {
                    // Check if this is a Google search URL (indicates API fallback)
                    if (result.url.includes("google.com/search")) {
                      console.warn(
                        "⚠️ [PLAYLIST MINIMAL] WARNING: Got Google search URL instead of CifraClub URL!"
                      );
                      console.warn(
                        "⚠️ [PLAYLIST MINIMAL] This indicates the search API is falling back to Google search"
                      );

                      // Try to construct and validate a direct CifraClub URL as fallback
                      foundUrl = constructDirectCifraUrl(songQuery);
                      searchSource = "direct";
                    } else {
                      foundUrl = result.url;
                      searchSource = "api";
                      console.log(
                        "🎯 [PLAYLIST MINIMAL] Found URL via API:",
                        foundUrl
                      );
                    }
                  }
                } else if (contentType && contentType.includes("text/plain")) {
                  // Plain text response (fallback or artist-only)
                  const url = await response.text();
                  console.log(
                    "📝 [PLAYLIST MINIMAL] Plain text response:",
                    url
                  );
                  if (url) {
                    // Check if this is a Google search URL
                    if (url.includes("google.com/search")) {
                      console.warn(
                        "⚠️ [PLAYLIST MINIMAL] WARNING: Got Google search URL instead of CifraClub URL!"
                      );
                      console.warn(
                        "⚠️ [PLAYLIST MINIMAL] This indicates the search API is falling back to Google search"
                      );

                      // Try to construct and validate a direct CifraClub URL as fallback
                      foundUrl = constructDirectCifraUrl(songQuery);
                      searchSource = "direct";
                    } else {
                      foundUrl = url;
                      searchSource = "api";
                      console.log(
                        "🎯 [PLAYLIST MINIMAL] Found URL via API (text):",
                        foundUrl
                      );
                    }
                  }
                }
              } else {
                console.error(
                  "❌ [PLAYLIST MINIMAL] API response failed, status:",
                  response.status,
                  "statusText:",
                  response.statusText,
                  "for query:",
                  songQuery
                );

                // Try to get error details
                try {
                  const errorText = await response.text();
                  console.error(
                    "❌ [PLAYLIST MINIMAL] Error response body:",
                    errorText
                  );

                  // Check if it's an API key error or quota exceeded
                  if (
                    errorText.includes("API key not valid") ||
                    errorText.includes("INVALID_ARGUMENT") ||
                    errorText.includes("quota") ||
                    errorText.includes("exceeded") ||
                    response.status === 429
                  ) {
                    console.log(
                      "🔑 [PLAYLIST MINIMAL] API quota/key error detected, trying direct URL construction..."
                    );

                    // Mark that we detected an API issue and throttle further requests
                    setSearchStatus((prev) => ({
                      ...prev,
                      apiIssueDetected: true,
                    }));
                    setRateLimitState((prev) => ({
                      ...prev,
                      isThrottled: true,
                    }));

                    // Try direct URL construction as fallback
                    foundUrl = constructDirectCifraUrl(songQuery);
                    searchSource = "direct";
                  }
                } catch {
                  console.error(
                    "❌ [PLAYLIST MINIMAL] Could not read error response"
                  );
                }
              }
            } catch (apiError) {
              console.error(
                "💥 [PLAYLIST MINIMAL] API request failed for song:",
                songQuery,
                "Error:",
                apiError
              );

              // Network error occurred, try direct URL construction as fallback
              console.log(
                "🔄 [PLAYLIST MINIMAL] Network error occurred, trying direct URL construction..."
              );
              foundUrl = constructDirectCifraUrl(songQuery);
              searchSource = "direct";
            }
          } else {
            // Rate limit reached or API is throttled, use direct URL construction
            console.log(
              "🚫 [PLAYLIST MINIMAL] API rate limit reached or throttled, using direct URL construction for:",
              songQuery
            );
            foundUrl = constructDirectCifraUrl(songQuery);
            searchSource = "direct";
          }

          // Add found URL to results
          if (foundUrl) {
            urls.push(foundUrl);
            console.log(
              `✅ [PLAYLIST MINIMAL] Found URL (${searchSource}):`,
              foundUrl
            );
          } else {
            // If no CifraClub URL found, try to extract first result from Google search
            const googleResult = await extractFirstGoogleResult(songQuery);
            if (googleResult) {
              urls.push(googleResult);
              console.log(
                `🔍 [PLAYLIST MINIMAL] No CifraClub URL found, using Google search result:`,
                googleResult
              );
            } else {
              console.warn(
                "❌ [PLAYLIST MINIMAL] No URL found for:",
                songQuery
              );
            }
          }
        } catch (songError) {
          console.error("💥 [PLAYLIST MINIMAL] Song search failed:", songError);
        }
      }

      /**
       * Extract first CifraClub result from Google search
       * Fetches Google search results and extracts the first CifraClub URL
       *
       * Note: This function may be limited by CORS policies in some browsers
       * or blocked by Google's anti-bot measures. In such cases, it gracefully
       * falls back to returning the Google search URL.
       *
       * @param query - Song query in "Artist - Song" format
       * @returns Promise<string | null> - First CifraClub URL found or Google search URL as fallback
       */
      async function extractFirstGoogleResult(
        query: string
      ): Promise<string | null> {
        const match = query.match(/^(.*?) - (.*)$/);
        if (!match) return null;

        const artist = match[1].trim();
        const song = match[2].trim();

        // Create search query targeting CifraClub specifically
        const searchQuery = `${artist} ${song} site:cifraclub.com.br`;
        const encodedQuery = encodeURIComponent(searchQuery);

        const googleUrl = `https://www.google.com/search?q=${encodedQuery}`;
        console.log(
          "🔍 [PLAYLIST MINIMAL] Fetching Google search results:",
          googleUrl
        );

        try {
          const response = await fetch(googleUrl, {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            },
            mode: "cors",
          });

          if (!response.ok) {
            console.warn(
              "❌ [PLAYLIST MINIMAL] Google search request failed:",
              response.status
            );
            return constructGoogleSearchUrl(query); // Fall back to search URL
          }

          const html = await response.text();

          // Extract CifraClub URLs from the HTML
          // Look for links to cifraclub.com.br in the search results
          // Multiple patterns to catch different URL formats
          const urlPatterns = [
            /https?:\/\/(?:www\.)?cifraclub\.com\.br\/[^"\s<>&]+/g,
            /\/url\?q=(https?:\/\/(?:www\.)?cifraclub\.com\.br\/[^"&\s<>]+)/g,
          ];

          let foundUrls: string[] = [];

          for (const pattern of urlPatterns) {
            const matches = html.match(pattern);
            if (matches) {
              foundUrls = foundUrls.concat(matches);
            }
          }

          if (foundUrls.length > 0) {
            // Clean up the URL (remove any trailing characters that aren't part of the URL)
            let firstResult = foundUrls[0];

            // If it's a Google redirect URL, extract the actual URL
            if (firstResult.includes("/url?q=")) {
              const urlMatch = firstResult.match(/\/url\?q=([^&]+)/);
              if (urlMatch) {
                firstResult = decodeURIComponent(urlMatch[1]);
              }
            }

            // Clean up the URL
            firstResult = firstResult
              .replace(/&amp;/g, "&")
              .replace(/['"<>]/g, "")
              .split("&")[0] // Remove Google tracking parameters
              .split("#")[0]; // Remove URL fragments for cleaner URLs

            // Validate that it's actually a CifraClub URL
            if (firstResult.includes("cifraclub.com.br")) {
              console.log(
                "✅ [PLAYLIST MINIMAL] Extracted first Google result:",
                firstResult
              );
              return firstResult;
            }
          }

          console.warn(
            "⚠️ [PLAYLIST MINIMAL] No valid CifraClub URLs found in Google results, returning search URL"
          );
          return constructGoogleSearchUrl(query); // Fall back to search URL
        } catch (error) {
          console.error(
            "💥 [PLAYLIST MINIMAL] Error fetching Google results:",
            error
          );
          // If it's a CORS error, inform user and fall back gracefully
          if (
            error instanceof Error &&
            error.message &&
            error.message.includes("CORS")
          ) {
            console.warn(
              "🚫 [PLAYLIST MINIMAL] CORS restriction encountered, falling back to search URL"
            );
          }
          return constructGoogleSearchUrl(query); // Fall back to search URL
        }
      }

      /**
       * Construct Google search URL as final fallback
       * Creates a targeted search for the song on CifraClub via Google
       * @param query - Song query in "Artist - Song" format
       * @returns Google search URL or null if query is invalid
       */
      function constructGoogleSearchUrl(query: string): string | null {
        const match = query.match(/^(.*?) - (.*)$/);
        if (!match) return null;

        const artist = match[1].trim();
        const song = match[2].trim();

        // Create search query targeting CifraClub specifically
        const searchQuery = `${artist} ${song} site:cifraclub.com.br`;
        const encodedQuery = encodeURIComponent(searchQuery);

        const googleUrl = `https://www.google.com/search?q=${encodedQuery}`;
        console.log(
          "🔍 [PLAYLIST MINIMAL] Constructed Google search URL:",
          googleUrl
        );
        return googleUrl;
      }

      /**
       * Constructs a direct CifraClub URL from a song query.
       * Uses multiple URL construction strategies and returns the first valid URL.
       * Note: URL validation is not performed due to CORS restrictions.
       *
       * @param query - The song query in format "Artist - Song"
       * @returns A constructed CifraClub URL or null if query format is invalid
       */
      function constructDirectCifraUrl(query: string): string | null {
        const match = query.match(/^(.*?) - (.*)$/);
        if (!match) return null;

        const artist = match[1].trim();
        const song = match[2].trim();

        // Try multiple URL construction strategies
        const strategies = [
          // Strategy 1: Standard conversion
          () => {
            const artistSlug = artist
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") // Remove accents
              .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
              .replace(/\s+/g, "-") // Replace spaces with hyphens
              .replace(/-+/g, "-") // Remove duplicate hyphens
              .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

            const songSlug = song
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") // Remove accents
              .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
              .replace(/\s+/g, "-") // Replace spaces with hyphens
              .replace(/-+/g, "-") // Remove duplicate hyphens
              .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

            if (!artistSlug || !songSlug) return null;
            return `https://www.cifraclub.com.br/${artistSlug}/${songSlug}/#tabs=false&instrument=cavaco`;
          },

          // Strategy 2: Keep some special characters that might be common
          () => {
            const artistSlug = artist
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") // Remove accents
              .replace(/[^a-z0-9\s&-]/g, "") // Keep & character
              .replace(/\s+/g, "-") // Replace spaces with hyphens
              .replace(/-+/g, "-") // Remove duplicate hyphens
              .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

            const songSlug = song
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") // Remove accents
              .replace(/[^a-z0-9\s&-]/g, "") // Keep & character
              .replace(/\s+/g, "-") // Replace spaces with hyphens
              .replace(/-+/g, "-") // Remove duplicate hyphens
              .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

            if (!artistSlug || !songSlug) return null;
            return `https://www.cifraclub.com.br/${artistSlug}/${songSlug}/#tabs=false&instrument=cavaco`;
          },

          // Strategy 3: Replace common words/abbreviations
          () => {
            const cleanArtist = artist
              .replace(/\bfeat\b\.?/gi, "")
              .replace(/\bft\b\.?/gi, "")
              .trim();
            const cleanSong = song.replace(/\(.*?\)/g, "").trim(); // Remove parenthetical content

            const artistSlug = cleanArtist
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") // Remove accents
              .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
              .replace(/\s+/g, "-") // Replace spaces with hyphens
              .replace(/-+/g, "-") // Remove duplicate hyphens
              .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

            const songSlug = cleanSong
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") // Remove accents
              .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
              .replace(/\s+/g, "-") // Replace spaces with hyphens
              .replace(/-+/g, "-") // Remove duplicate hyphens
              .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

            if (!artistSlug || !songSlug) return null;
            return `https://www.cifraclub.com.br/${artistSlug}/${songSlug}/#tabs=false&instrument=cavaco`;
          },
        ];

        // Try each strategy and return the first successful one
        // Note: We don't validate URLs due to CORS restrictions
        for (let i = 0; i < strategies.length; i++) {
          const directUrl = strategies[i]();
          if (directUrl) {
            console.log(
              `� [PLAYLIST MINIMAL] Constructed direct URL (strategy ${
                i + 1
              }):`,
              directUrl
            );
            return directUrl;
          }
        }

        console.warn(
          "❌ [PLAYLIST MINIMAL] Could not construct URL for:",
          query
        );
        return null;
      }

      // Store all found URLs
      console.log("📝 [PLAYLIST MINIMAL] Final URLs found:", urls);

      // Cache the result for future use
      if (urls.length > 0) {
        setSearchCache((prev) => ({
          ...prev,
          [cacheKey]: {
            urls: urls,
            timestamp: Date.now(),
            source: "fresh", // Mark as fresh result
          },
        }));
        console.log("💾 [PLAYLIST MINIMAL] Cached search result for:", query);
      }

      setCifraUrls((prev) => {
        const updated = { ...prev, [query]: urls };

        // Update search status if we're in a batch search, using the updated state
        setSearchStatus((prevStatus) => {
          if (prevStatus.isSearching) {
            // Count how many songs have been completed based on the updated cifraUrls
            const completedSongsCount = Object.keys(updated).length;
            const currentTotalUrls = Object.values(updated).reduce(
              (sum, existingUrls) => sum + existingUrls.length,
              0
            );

            // Count failed songs (completed but no URLs found)
            const failedSongsCount = Object.values(updated).filter(
              (urlArray) => urlArray.length === 0
            ).length;

            return {
              ...prevStatus,
              completedSongs: Math.min(
                completedSongsCount,
                prevStatus.totalSongs
              ), // Ensure we don't exceed total
              totalUrls: currentTotalUrls,
              failedSongs: failedSongsCount,
            };
          }
          return prevStatus;
        });

        return updated;
      });
    } catch (error) {
      console.error("💥 [PLAYLIST MINIMAL] Request failed with error:", error);
      // Store empty array for not found
      setCifraUrls((prev) => ({ ...prev, [query]: [] }));
    } finally {
      console.log(
        "🏁 [PLAYLIST MINIMAL] Search completed, loading state cleared"
      );
      setLoadingCifra((prev) => ({ ...prev, [query]: false }));
    }
  };

  const getSortedSongs = () => {
    if (!playlist?.tracks?.items) return [];

    const songs = playlist.tracks.items
      .filter((item) => item.track) // Filter out null tracks
      .map((item, originalIndex) => ({
        id: item.track.id,
        originalIndex, // Add original index for unique keys
        artist: item.track.artists[0]?.name || "Unknown Artist",
        song: item.track.name,
        displayText: `${item.track.artists[0]?.name || "Unknown Artist"} - ${
          item.track.name
        }`,
      }));

    if (sortOrder === "none") {
      return songs;
    }

    return songs.sort((a, b) => {
      const comparison = a.displayText.localeCompare(b.displayText);
      return sortOrder === "asc" ? comparison : -comparison;
    });
  };

  const toggleSort = () => {
    if (sortOrder === "none") {
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("none");
    }
  };

  const getSortIcon = () => {
    switch (sortOrder) {
      case "asc":
        return <ArrowUp className="h-4 w-4" />;
      case "desc":
        return <ArrowDown className="h-4 w-4" />;
      default:
        return <ArrowUpDown className="h-4 w-4" />;
    }
  };

  const getSortButtonText = () => {
    switch (sortOrder) {
      case "asc":
        return "Sorted A-Z";
      case "desc":
        return "Sorted Z-A";
      default:
        return "Sort Songs";
    }
  };

  const getSortStatusText = () => {
    switch (sortOrder) {
      case "asc":
        return "Sorted alphabetically A-Z";
      case "desc":
        return "Sorted alphabetically Z-A";
      default:
        return "Showing in original playlist order";
    }
  };

  const uploadOfflinePlaylist = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith(".json")) {
      setError("Please select a valid JSON file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);

        // Check if it's a single playlist or array of playlists
        let targetPlaylist = null;

        if (Array.isArray(data)) {
          // If it's an array, take the first playlist
          if (data.length > 0) {
            targetPlaylist = data[0];
          } else {
            setError("No playlists found in the uploaded file");
            return;
          }
        } else if (data.name && data.tracks) {
          // If it's a single playlist object
          targetPlaylist = data;
        } else {
          setError(
            "Invalid playlist format. Expected a playlist object or array of playlists."
          );
          return;
        }

        // Validate required fields
        if (
          !targetPlaylist.name ||
          !targetPlaylist.tracks ||
          !Array.isArray(targetPlaylist.tracks.items)
        ) {
          setError(
            "Invalid playlist format. Missing required fields (name, tracks, or tracks.items)."
          );
          return;
        }

        setPlaylist(targetPlaylist);
        setPlaylistUrl(""); // Clear the URL input since we loaded from file
        setError(null);
        setSortOrder("none"); // Reset sort order
        setIsOfflineMode(true);

        // Trigger focus mode animation after a short delay
        setTimeout(() => {
          setShowFocusMode(true);
        }, 800); // Increased delay for smoother transition
      } catch (err) {
        console.error("Failed to parse JSON:", err);
        setError(
          "Failed to parse the uploaded file. Please ensure it's a valid JSON file."
        );
      }
    };

    reader.readAsText(file);
    // Reset input
    event.target.value = "";
  };

  const exitFocusMode = () => {
    setShowFocusMode(false);
    setIsOfflineMode(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
      {/* Focus Mode Backdrop */}
      {showFocusMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          {!showFocusMode && (
            <motion.div
              className="text-center mb-8"
              animate={{
                opacity: showFocusMode ? 0 : 1,
                y: showFocusMode ? -50 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: showFocusMode ? 0 : 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4"
              >
                <Music className="h-8 w-8 text-white" />
              </motion.div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Minimal Playlist Viewer
              </h1>
              <p className="text-gray-300">
                Load a Spotify playlist by URL or upload an offline playlist
                file to view songs in a simple, sortable list
              </p>
            </motion.div>
          )}

          {/* Input Section */}
          {!showFocusMode && (
            <motion.div
              animate={{
                opacity: showFocusMode ? 0 : 1,
                y: showFocusMode ? -50 : 0,
                scale: showFocusMode ? 0.9 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 mb-6 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="space-y-4">
                  <div>
                    <div className="text-white mb-2 block text-sm font-medium">
                      Spotify Playlist URL or ID
                    </div>
                    <div className="flex gap-2">
                      <Input
                        id="playlist-url"
                        type="text"
                        placeholder="https://open.spotify.com/playlist/... or playlist ID"
                        value={playlistUrl}
                        onChange={(e) => setPlaylistUrl(e.target.value)}
                        className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                        disabled={loading}
                      />
                      <Button
                        onClick={fetchPlaylist}
                        disabled={loading}
                        className="bg-green-600 hover:bg-green-700 text-white px-6"
                      >
                        {loading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Search className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/20"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 text-gray-400 bg-transparent">
                        or
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="text-white mb-2 block text-sm font-medium">
                      Or Upload Offline Playlist (JSON)
                    </div>
                    <div className="flex gap-2">
                      <label className="flex-1 cursor-pointer">
                        <Input
                          id="playlist-upload"
                          type="file"
                          accept=".json"
                          onChange={uploadOfflinePlaylist}
                          className="hidden"
                          disabled={loading}
                        />
                        <div className="flex items-center gap-2 px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white hover:bg-white/30 transition-colors">
                          <Upload className="h-4 w-4" />
                          <span className="text-sm">Choose JSON file...</span>
                        </div>
                      </label>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      Upload a previously exported playlist or offline library
                      JSON file
                    </p>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20"
                    >
                      <AlertCircle className="h-4 w-4" />
                      <span>{error}</span>
                    </motion.div>
                  )}
                </div>
              </Card>
            </motion.div>
          )}

          {/* Playlist Display */}
          {playlist && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: showFocusMode ? 1.05 : 1,
                x: showFocusMode ? 0 : 0,
              }}
              transition={{
                delay: showFocusMode ? 0 : 0.3,
                duration: showFocusMode ? 0.8 : 0.5,
                type: showFocusMode ? "spring" : "tween",
                stiffness: showFocusMode ? 100 : 200,
              }}
              className={
                showFocusMode
                  ? "fixed inset-4 z-50 flex items-center justify-center"
                  : ""
              }
            >
              <Card
                className={`p-6 bg-white/10 backdrop-blur-sm border-white/20 ${
                  showFocusMode
                    ? "w-full max-w-4xl max-h-[90vh] overflow-hidden"
                    : ""
                }`}
              >
                {/* Playlist Header */}
                <div className="text-center mb-6">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-300 mb-1">
                      {playlist.name}
                      {isOfflineMode && (
                        <span className="ml-2 text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                          Offline
                        </span>
                      )}
                    </h2>
                    <p className="text-gray-400">
                      {playlist.tracks.items.length} songs
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    {showFocusMode && (
                      <Button
                        onClick={exitFocusMode}
                        variant="outline"
                        className="bg-red-500/20 border-red-400/30 text-red-300 hover:bg-red-500/30 h-10 px-4"
                      >
                        <X className="h-4 w-4 mr-1" />
                        Exit Focus
                      </Button>
                    )}
                    <Button
                      onClick={searchAllSongs}
                      variant="outline"
                      className="bg-green-500/20 border-green-400/30 text-green-300 hover:bg-green-500/30 h-10 px-4"
                      disabled={searchStatus.isSearching}
                    >
                      <Search className="h-4 w-4 mr-1" />
                      {searchStatus.isSearching ? "Searching..." : "Search All"}
                    </Button>
                    {(searchStatus.totalUrls > 0 ||
                      searchStatus.completedSongs > 0) && (
                      <Button
                        onClick={downloadUrlsFile}
                        variant="outline"
                        className="bg-blue-500/20 border-blue-400/30 text-blue-300 hover:bg-blue-500/30 h-10 px-4"
                      >
                        <FileText className="h-4 w-4 mr-1" />
                        Download URLs
                      </Button>
                    )}
                    <Button
                      onClick={toggleSort}
                      variant="outline"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30 h-10 px-4"
                    >
                      {getSortIcon()}
                      <span className="ml-2">{getSortButtonText()}</span>
                    </Button>

                    {/* Cache Management Button */}
                    {Object.keys(searchCache).length > 0 && (
                      <Button
                        onClick={clearAllCache}
                        variant="outline"
                        className="bg-orange-500/20 border-orange-400/30 text-orange-300 hover:bg-orange-500/30 h-10 px-4"
                        title={`Clear cache (${
                          getCacheStats().validCached
                        } valid, ${getCacheStats().expiredCached} expired)`}
                      >
                        <X className="h-4 w-4 mr-1" />
                        Clear Cache
                      </Button>
                    )}
                  </div>
                </div>

                <Separator className="bg-white/20" />

                {/* Sort Status */}
                <div className="mb-0">
                  <motion.p
                    key={sortOrder}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs text-gray-400 text-center"
                  >
                    {getSortStatusText()}
                  </motion.p>

                  {/* Search Status */}
                  {(searchStatus.isSearching ||
                    searchStatus.completedSongs > 0) && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 space-y-3"
                    >
                      {/* Cache and Rate Limit Status */}
                      {(Object.keys(searchCache).length > 0 ||
                        rateLimitState.requestCount > 0) && (
                        <div className="text-xs text-gray-500 text-center space-y-1">
                          {Object.keys(searchCache).length > 0 && (
                            <div>
                              💾 Cache: {getCacheStats().validCached} valid,{" "}
                              {getCacheStats().expiredCached} expired
                            </div>
                          )}
                          {rateLimitState.requestCount > 0 && (
                            <div>
                              🚦 API Usage: {rateLimitState.requestCount}/
                              {MAX_API_REQUESTS_PER_DAY} requests today
                              {rateLimitState.isThrottled && (
                                <span className="text-yellow-400 ml-2">
                                  (Rate limited - using fallback method)
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                      {/* Progress Bar */}
                      {searchStatus.isSearching && (
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-gray-400">
                              Progress
                            </span>
                            <span className="text-xs text-gray-400">
                              {searchStatus.completedSongs}/
                              {searchStatus.totalSongs}
                            </span>
                          </div>
                          <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width: `${
                                  (searchStatus.completedSongs /
                                    searchStatus.totalSongs) *
                                  100
                                }%`,
                              }}
                              transition={{ duration: 0.5, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                            >
                              {/* Animated shimmer effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                            </motion.div>
                          </div>
                        </div>
                      )}

                      {/* Status Text */}
                      <p className="text-xs text-center">
                        {searchStatus.isSearching ? (
                          <span className="text-yellow-400">
                            Searching {searchStatus.completedSongs}/
                            {searchStatus.totalSongs} songs...
                            {searchStatus.totalUrls > 0 &&
                              ` Found ${searchStatus.totalUrls} URLs`}
                            {searchStatus.failedSongs > 0 &&
                              `, ${searchStatus.failedSongs} failed`}
                          </span>
                        ) : (
                          <span className="text-green-400">
                            Search completed! Found {searchStatus.totalUrls}{" "}
                            URLs from {searchStatus.completedSongs} songs
                            {searchStatus.failedSongs > 0 && (
                              <span className="text-yellow-400">
                                {" "}
                                ({searchStatus.failedSongs} songs not found)
                              </span>
                            )}
                          </span>
                        )}
                      </p>

                      {/* API Issue Warning */}
                      {searchStatus.apiIssueDetected && (
                        <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-3 mt-3">
                          <p className="text-xs text-yellow-400 text-center">
                            ⚠️ <strong>Search API Issue Detected</strong>
                          </p>
                          <p className="text-xs text-yellow-300 text-center mt-1">
                            The search service is experiencing issues (likely
                            daily API quota exceeded or API key problems). The
                            system is using a fallback method to construct
                            direct CifraClub URLs. Results may be limited but
                            should still work for most popular songs.
                          </p>
                        </div>
                      )}

                      {/* Helpful note for failed searches */}
                      {!searchStatus.isSearching &&
                        searchStatus.failedSongs > 0 && (
                          <p className="text-xs text-gray-500 mt-2 text-center">
                            💡 Songs not found may have different names on
                            CifraClub or may not be available. Try searching
                            individual songs manually for better results.
                          </p>
                        )}
                    </motion.div>
                  )}
                </div>

                {/* Songs List */}
                <div
                  className={`space-y-2 overflow-y-auto ${
                    showFocusMode ? "max-h-[60vh]" : "max-h-96"
                  }`}
                >
                  {getSortedSongs().map((song, index) => (
                    <motion.div
                      key={`${song.id}-${song.originalIndex}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: showFocusMode ? index * 0.02 : index * 0.05,
                        duration: showFocusMode ? 0.3 : 0.5,
                      }}
                      whileHover={{
                        scale: showFocusMode ? 1.02 : 1.01,
                        x: showFocusMode ? 10 : 5,
                      }}
                      className={`p-3 rounded-lg transition-colors ${
                        showFocusMode
                          ? "bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30"
                          : "bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center flex-1">
                        <div className="w-8 text-sm text-gray-400 text-center">
                          {index + 1}
                        </div>
                        <div className="flex-1 text-white text-sm">
                          <div>{song.displayText}</div>
                          {cifraUrls[song.displayText] &&
                            cifraUrls[song.displayText].length > 0 && (
                              <div className="mt-1 space-y-1">
                                {cifraUrls[song.displayText].map(
                                  (url, urlIndex) => (
                                    <div
                                      key={urlIndex}
                                      className="flex items-center gap-2"
                                    >
                                      <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 text-xs break-all flex-1"
                                      >
                                        {url}
                                      </a>
                                      {searchCache[
                                        song.displayText.toLowerCase().trim()
                                      ] &&
                                        isCacheValid(
                                          searchCache[
                                            song.displayText
                                              .toLowerCase()
                                              .trim()
                                          ].timestamp
                                        ) && (
                                          <span
                                            className="text-gray-500 text-xs"
                                            title="From cache"
                                          >
                                            💾
                                          </span>
                                        )}
                                    </div>
                                  )
                                )}
                              </div>
                            )}
                        </div>
                      </div>
                      <div className="ml-4 flex gap-1">
                        {loadingCifra[song.displayText] ? (
                          <Loader2 className="h-4 w-4 text-white animate-spin" />
                        ) : (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                handleArtistSongSearch(song.displayText)
                              }
                              className="h-8 px-2 text-xs bg-white/10 border-white/20 hover:bg-white/20"
                            >
                              <Search className="h-3 w-3 mr-1" />
                              {cifraUrls.hasOwnProperty(song.displayText)
                                ? "Search Again"
                                : "Find Chords"}
                            </Button>
                            {cifraUrls[song.displayText] &&
                              cifraUrls[song.displayText].length === 0 && (
                                <span className="text-xs text-red-400 ml-2">
                                  Not Found
                                </span>
                              )}
                          </>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {getSortedSongs().length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    No songs found in this playlist
                  </div>
                )}
              </Card>
            </motion.div>
          )}

          {/* Token Setup Info */}
          {!playlist && !loading && !showFocusMode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Setup Required (for URL loading only)
                </h3>
                <p className="text-gray-300 text-sm">
                  To load playlists by URL, you need to set the{" "}
                  <code className="bg-white/20 px-2 py-1 rounded text-xs">
                    NEXT_PUBLIC_SPOTIFY_TOKEN
                  </code>{" "}
                  environment variable with a valid Spotify access token.
                  <br />
                  <br />
                  <strong>Note:</strong> Uploading offline playlist files
                  doesn&apos;t require any token setup.
                  <br />
                  <br />
                  For development, you can get a temporary token from the{" "}
                  <a
                    href="https://developer.spotify.com/console/get-playlist/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Spotify Web API Console
                  </a>
                  .
                  <br />
                  <br />
                  <strong>Search Functionality:</strong> The chord search
                  feature uses Google Custom Search API (100 queries/day limit).
                  When the daily quota is exceeded, the system automatically
                  falls back to direct URL construction for CifraClub links.
                  <br />
                  <br />
                  <strong>Caching & Rate Limiting:</strong> Search results are
                  cached for 24 hours to reduce API usage. API requests are
                  limited to 80 per day to stay within quota. Cache and rate
                  limiting data persist across page reloads.
                </p>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
