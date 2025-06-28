"use client";

import React, { useState } from "react";
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
  Link as LinkIcon,
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
  const [searchStatus, setSearchStatus] = useState<{
    isSearching: boolean;
    totalSongs: number;
    completedSongs: number;
    totalUrls: number;
    failedSongs: number;
  }>({
    isSearching: false,
    totalSongs: 0,
    completedSongs: 0,
    totalUrls: 0,
    failedSongs: 0,
  });

  // For now, using a placeholder token - in production, this should come from OAuth flow
  const SPOTIFY_TOKEN =
    process.env.NEXT_PUBLIC_SPOTIFY_TOKEN || "YOUR_SPOTIFY_TOKEN_HERE";

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
    });

    // Search all songs in parallel
    const searchPromises = songs.map((song) =>
      handleArtistSongSearch(song.displayText)
    );

    try {
      await Promise.all(searchPromises);
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

  // Function to handle artist+song search - always performs fresh search
  const handleArtistSongSearch = async (query: string) => {
    console.log("🎵 [PLAYLIST MINIMAL] Starting FRESH search for:", query);

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
          // Use the same API call as the working floating search component (no timestamp, no headers)
          const searchUrl = `/api/search?q=${encodeURIComponent(songQuery)}`;
          console.log("🔍 [PLAYLIST MINIMAL] Calling API:", searchUrl);

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

              if (result.url) {
                // Check if this is a Google search URL (indicates API fallback)
                if (result.url.includes("google.com/search")) {
                  console.warn(
                    "⚠️ [PLAYLIST MINIMAL] WARNING: Got Google search URL instead of CifraClub URL!"
                  );
                  console.warn(
                    "⚠️ [PLAYLIST MINIMAL] This indicates the search API is falling back to Google search"
                  );

                  // Try to construct and validate a direct CifraClub URL as fallback
                  const directUrl = await constructAndValidateDirectCifraUrl(
                    songQuery
                  );
                  if (directUrl) {
                    console.log(
                      "✅ [PLAYLIST MINIMAL] Validated direct CifraClub URL:",
                      directUrl
                    );
                    urls.push(directUrl);
                  } else {
                    console.warn(
                      "❌ [PLAYLIST MINIMAL] Could not construct valid direct URL, skipping this song"
                    );
                    // Don't add the Google search URL as it's not useful
                  }
                } else {
                  urls.push(result.url);
                  console.log("🎯 [PLAYLIST MINIMAL] Found URL:", result.url);
                }
              } else {
                console.warn(
                  "⚠️ [PLAYLIST MINIMAL] JSON response has no URL field"
                );
              }
            } else if (contentType && contentType.includes("text/plain")) {
              // Plain text response (fallback or artist-only)
              const url = await response.text();
              console.log("📝 [PLAYLIST MINIMAL] Plain text response:", url);
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
                  const directUrl = await constructAndValidateDirectCifraUrl(
                    songQuery
                  );
                  if (directUrl) {
                    console.log(
                      "✅ [PLAYLIST MINIMAL] Validated direct CifraClub URL:",
                      directUrl
                    );
                    urls.push(directUrl);
                  } else {
                    console.warn(
                      "❌ [PLAYLIST MINIMAL] Could not construct valid direct URL, skipping this song"
                    );
                    // Don't add the Google search URL as it's not useful
                  }
                } else {
                  urls.push(url);
                  console.log("🎯 [PLAYLIST MINIMAL] Found URL (text):", url);
                }
              } else {
                console.warn("⚠️ [PLAYLIST MINIMAL] Empty plain text response");
              }
            } else {
              // Other response type
              console.warn(
                "⚠️ [PLAYLIST MINIMAL] Unexpected content type:",
                contentType
              );
              const text = await response.text();
              console.log("📄 [PLAYLIST MINIMAL] Raw response text:", text);
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
            } catch (e) {
              console.error(
                "❌ [PLAYLIST MINIMAL] Could not read error response"
              );
            }
          }
        } catch (error) {
          console.error(
            "💥 [PLAYLIST MINIMAL] Request failed for song:",
            songQuery,
            "Error:",
            error
          );
        }
      }

      // Helper function to construct direct CifraClub URLs
      function constructDirectCifraUrl(query: string): string | null {
        const match = query.match(/^(.*?) - (.*)$/);
        if (!match) return null;

        const artist = match[1].trim();
        const song = match[2].trim();

        // Convert to URL-friendly format
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

        const directUrl = `https://www.cifraclub.com.br/${artistSlug}/${songSlug}/#tabs=false&instrument=cavaco`;
        console.log("🔧 [PLAYLIST MINIMAL] Constructed direct URL:", directUrl);
        return directUrl;
      }

      async function constructAndValidateDirectCifraUrl(
        query: string
      ): Promise<string | null> {
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

        // Try each strategy until one works
        for (let i = 0; i < strategies.length; i++) {
          const directUrl = strategies[i]();
          if (!directUrl) continue;

          try {
            console.log(
              `🔍 [PLAYLIST MINIMAL] Validating direct URL (strategy ${
                i + 1
              }):`,
              directUrl
            );
            const response = await fetch(directUrl, { method: "HEAD" });

            if (response.ok) {
              console.log(
                "✅ [PLAYLIST MINIMAL] Direct URL is valid:",
                directUrl
              );
              return directUrl;
            } else {
              console.warn(
                `❌ [PLAYLIST MINIMAL] Strategy ${i + 1} failed with status:`,
                response.status,
                "for:",
                directUrl
              );
            }
          } catch (error) {
            console.warn(
              `❌ [PLAYLIST MINIMAL] Strategy ${i + 1} error:`,
              error,
              "for:",
              directUrl
            );
          }
        }

        console.warn(
          "❌ [PLAYLIST MINIMAL] All URL construction strategies failed for:",
          query
        );
        return null;
      }

      // Store all found URLs
      console.log("📝 [PLAYLIST MINIMAL] Final URLs found:", urls);
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
                                    <div key={urlIndex}>
                                      <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 text-xs break-all"
                                      >
                                        {url}
                                      </a>
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
                  doesn't require any token setup.
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
                </p>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
