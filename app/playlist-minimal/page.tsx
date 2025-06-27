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
  const [cifraUrls, setCifraUrls] = useState<Record<string, string | null>>({});
  const [loadingCifra, setLoadingCifra] = useState<Record<string, boolean>>({});

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

  // Function to handle artist+song search using the same logic as the floating search
  const handleArtistSongSearch = async (query: string) => {
    console.log(
      "🎵 [PLAYLIST MINIMAL] Starting artist+song search for:",
      query
    );
    setLoadingCifra((prev) => ({ ...prev, [query]: true }));

    try {
      const searchUrl = `/api/search?q=${encodeURIComponent(query)}`;
      console.log("🔍 [PLAYLIST MINIMAL] Calling API:", searchUrl);

      const response = await fetch(searchUrl);
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
          });

          // Only extract and store the URL
          setCifraUrls((prev) => ({ ...prev, [query]: result.url || null }));
        } else if (contentType && contentType.includes("text/plain")) {
          // Plain text response (fallback or artist-only)
          const url = await response.text();
          console.log("📝 [PLAYLIST MINIMAL] Plain text response:", url);

          // Store the URL
          setCifraUrls((prev) => ({ ...prev, [query]: url || null }));
        } else {
          // Other JSON response (artist-only)
          const result = await response.json();
          console.log("📊 [PLAYLIST MINIMAL] Other JSON response:", result);

          // Store the URL from artist page result
          setCifraUrls((prev) => ({ ...prev, [query]: result.url || null }));
        }
      } else {
        console.error(
          "❌ [PLAYLIST MINIMAL] API response failed, status:",
          response.status
        );

        // Mark as not found
        setCifraUrls((prev) => ({ ...prev, [query]: null }));
      }
    } catch (error) {
      console.error("💥 [PLAYLIST MINIMAL] Request failed with error:", error);

      // Mark as not found
      setCifraUrls((prev) => ({ ...prev, [query]: null }));
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
                          {cifraUrls[song.displayText] && (
                            <div className="mt-1">
                              <a
                                href={cifraUrls[song.displayText]!}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 text-xs break-all"
                              >
                                {cifraUrls[song.displayText]}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="ml-4">
                        {loadingCifra[song.displayText] ? (
                          <Loader2 className="h-4 w-4 text-white animate-spin" />
                        ) : !cifraUrls.hasOwnProperty(song.displayText) ? (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              handleArtistSongSearch(song.displayText)
                            }
                            className="h-8 px-2 text-xs bg-white/10 border-white/20 hover:bg-white/20"
                          >
                            <Search className="h-3 w-3 mr-1" />
                            Find Chords
                          </Button>
                        ) : cifraUrls[song.displayText] === null ? (
                          <span className="text-xs text-red-400">
                            Not Found
                          </span>
                        ) : null}
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
