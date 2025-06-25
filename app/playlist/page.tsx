"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Music,
  Play,
  ExternalLink,
  RefreshCw,
  AlertCircle,
  Users,
  Disc3,
  Clock,
  Search,
} from "lucide-react";

interface SpotifyTrack {
  track: {
    id: string;
    name: string;
    artists: Array<{
      name: string;
      external_urls: {
        spotify: string;
      };
    }>;
    album: {
      name: string;
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
      external_urls: {
        spotify: string;
      };
    };
    preview_url: string | null;
    external_urls: {
      spotify: string;
    };
    duration_ms: number;
  };
}

interface SpotifyPlaylist {
  name: string;
  description: string;
  external_urls: {
    spotify: string;
  };
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  tracks: {
    total: number;
    items: SpotifyTrack[];
  };
  owner: {
    display_name: string;
  };
}

export default function PlaylistPage() {
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [playlist, setPlaylist] = useState<SpotifyPlaylist | null>(null);
  const [error, setError] = useState<string | null>(null);

  // For now, using a placeholder token - in production, this should come from OAuth flow
  const SPOTIFY_TOKEN =
    process.env.NEXT_PUBLIC_SPOTIFY_TOKEN || "YOUR_SPOTIFY_TOKEN_HERE";

  const extractPlaylistId = (url: string): string | null => {
    // Handle various Spotify URL formats
    const patterns = [
      /https:\/\/open\.spotify\.com\/playlist\/([a-zA-Z0-9]+)/,
      /spotify:playlist:([a-zA-Z0-9]+)/,
      /^([a-zA-Z0-9]+)$/, // Just the ID
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1];
      }
    }
    return null;
  };

  const formatDuration = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${parseInt(seconds) < 10 ? "0" : ""}${seconds}`;
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
    setPlaylist(null);

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}`,
        {
          headers: {
            Authorization: `Bearer ${SPOTIFY_TOKEN}`,
          },
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Invalid or expired Spotify token");
        } else if (response.status === 404) {
          throw new Error("Playlist not found or is private");
        } else {
          throw new Error(`Failed to fetch playlist: ${response.status}`);
        }
      }

      const data: SpotifyPlaylist = await response.json();
      setPlaylist(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch playlist");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      fetchPlaylist();
    }
  };

  const handleRefresh = () => {
    if (playlist) {
      fetchPlaylist();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Spotify Playlist Explorer
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Enter a Spotify playlist URL to explore its tracks and discover
            music.
          </p>
        </motion.div>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6 mb-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <div className="space-y-4">
              <label
                htmlFor="playlist-input"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Spotify Playlist URL or ID:
              </label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="playlist-input"
                    type="text"
                    value={playlistUrl}
                    onChange={(e) => setPlaylistUrl(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                    disabled={loading}
                  />
                </div>
                <button
                  onClick={fetchPlaylist}
                  disabled={loading || !playlistUrl.trim()}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium min-w-[120px]"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Loading...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Music className="w-4 h-4" />
                      Explore
                    </div>
                  )}
                </button>
                {playlist && (
                  <button
                    onClick={handleRefresh}
                    disabled={loading}
                    className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    title="Refresh playlist"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* URL Format Examples */}
              <div className="text-sm text-gray-500">
                <p className="mb-1">Supported formats:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>
                    <code>
                      https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M
                    </code>
                  </li>
                  <li>
                    <code>spotify:playlist:37i9dQZF1DXcBWIGoYBM5M</code>
                  </li>
                  <li>
                    <code>37i9dQZF1DXcBWIGoYBM5M</code> (just the ID)
                  </li>
                </ul>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-700 font-medium">Error:</span>
                    <span className="text-red-600">{error}</span>
                  </div>
                </motion.div>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Playlist Information */}
        {playlist && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Playlist Header */}
            <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  {playlist.images?.[0] && (
                    <img
                      src={playlist.images[0].url}
                      alt={playlist.name}
                      className="w-48 h-48 rounded-lg shadow-md object-cover"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {playlist.name}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {playlist.description}
                      </p>
                    </div>
                    <a
                      href={playlist.external_urls.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                      title="Open in Spotify"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">
                        by {playlist.owner.display_name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Music className="w-4 h-4" />
                      <span className="text-sm">
                        {playlist.tracks.total} tracks
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">
                        {Math.round(
                          playlist.tracks.items.reduce(
                            (acc, item) => acc + item.track.duration_ms,
                            0
                          ) / 60000
                        )}{" "}
                        min total
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tracks List */}
            <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Tracks ({playlist.tracks.total})
                </h3>
              </div>

              <Separator className="mb-6" />

              <div className="space-y-3">
                {playlist.tracks.items.map((item, index) => (
                  <motion.div
                    key={item.track.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 bg-white/50"
                  >
                    <div className="flex items-center gap-4">
                      {/* Track Number */}
                      <div className="w-8 text-center">
                        <span className="text-gray-500 text-sm group-hover:hidden">
                          {index + 1}
                        </span>
                        <Play className="w-4 h-4 text-green-600 hidden group-hover:block mx-auto cursor-pointer" />
                      </div>

                      {/* Album Art */}
                      <div className="flex-shrink-0">
                        {item.track.album.images?.[2] && (
                          <img
                            src={item.track.album.images[2].url}
                            alt={item.track.album.name}
                            className="w-12 h-12 rounded object-cover"
                          />
                        )}
                      </div>

                      {/* Track Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-gray-900 truncate">
                            {item.track.name}
                          </h4>
                          {item.track.preview_url && (
                            <button
                              onClick={() => {
                                const audio = new Audio(
                                  item.track.preview_url!
                                );
                                audio.play();
                              }}
                              className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors"
                              title="Play preview"
                            >
                              <Play className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span className="truncate">
                              {item.track.artists
                                .map((artist) => artist.name)
                                .join(", ")}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Disc3 className="w-3 h-3" />
                            <span className="truncate">
                              {item.track.album.name}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Duration & Actions */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <Clock className="w-3 h-3" />
                          <span>{formatDuration(item.track.duration_ms)}</span>
                        </div>
                        <a
                          href={item.track.external_urls.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-100 rounded transition-colors opacity-0 group-hover:opacity-100"
                          title="Open in Spotify"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 mt-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              How to Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">📝 Steps</h3>
                <ol className="space-y-1 list-decimal list-inside">
                  <li>
                    Copy a Spotify playlist URL from the Spotify app or web
                    player
                  </li>
                  <li>Paste the URL in the input field above</li>
                  <li>Click &quot;Explore&quot; or press Enter</li>
                  <li>Browse the tracks and click play icons for previews</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  ℹ️ Features
                </h3>
                <ul className="space-y-1 list-disc list-inside">
                  <li>View track names, artists, and album information</li>
                  <li>See album artwork and playlist cover</li>
                  <li>Play 30-second previews (when available)</li>
                  <li>Open tracks directly in Spotify</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-900">Setup Required</p>
                  <p className="text-yellow-800 text-sm">
                    To use this feature, you need to set the{" "}
                    <code>NEXT_PUBLIC_SPOTIFY_TOKEN</code> environment variable
                    with a valid Spotify API token.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
