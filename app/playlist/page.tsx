"use client";

import React, { useState, useEffect } from "react";
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
  Download,
  Upload,
  Library,
  Trash2,
  WifiOff,
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
  savedAt?: string; // For offline library timestamp
}

export default function PlaylistPage() {
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [playlist, setPlaylist] = useState<SpotifyPlaylist | null>(null);
  const [error, setError] = useState<string | null>(null);
  // Collapsible Setup Instructions state
  const [showSetup, setShowSetup] = useState(false);
  // Token generation state
  const [generatingToken, setGeneratingToken] = useState(false);
  // Offline library state
  const [offlineLibrary, setOfflineLibrary] = useState<SpotifyPlaylist[]>([]);
  const [showOfflineLibrary, setShowOfflineLibrary] = useState(false);
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  // For now, using a placeholder token - in production, this should come from OAuth flow
  const SPOTIFY_TOKEN =
    process.env.NEXT_PUBLIC_SPOTIFY_TOKEN || "YOUR_SPOTIFY_TOKEN_HERE";

  // Client credentials for automatic token generation
  const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const SPOTIFY_CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

  const extractPlaylistId = (url: string): string | null => {
    // Handle various Spotify URL formats
    const patterns = [
      /https:\/\/open\.spotify\.com\/playlist\/([a-zA-Z0-9]+)(\?.*)?/, // With optional query params
      /spotify:playlist:([a-zA-Z0-9]+)/,
      /^([a-zA-Z0-9]+)$/, // Just the ID
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        const playlistId = match[1];
        console.log("Extracted playlist ID:", playlistId, "from URL:", url);
        return playlistId;
      }
    }

    console.error("Could not extract playlist ID from:", url);
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

    // Validate token format
    if (!SPOTIFY_TOKEN.startsWith("BQ")) {
      setError(
        "Invalid Spotify token format. Token should start with 'BQ'. Please generate a new token using the button above."
      );
      return;
    }

    setLoading(true);
    setError(null);
    setPlaylist(null);

    try {
      console.log("Fetching playlist with ID:", playlistId);
      console.log("Using token:", SPOTIFY_TOKEN.substring(0, 10) + "...");

      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}`,
        {
          headers: {
            Authorization: `Bearer ${SPOTIFY_TOKEN}`,
          },
        }
      );

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Spotify API Error:", errorData);

        if (response.status === 401) {
          throw new Error(
            "Invalid or expired Spotify token. Please generate a new one using the button above."
          );
        } else if (response.status === 404) {
          throw new Error(
            `Playlist not found. This could mean:\n• The playlist ID "${playlistId}" is incorrect\n• The playlist is private (only public playlists work)\n• The playlist has been deleted\n\nPlease check the URL and make sure the playlist is public.`
          );
        } else if (response.status === 403) {
          throw new Error(
            "Access forbidden. The playlist might be private or you don't have permission to access it."
          );
        } else {
          throw new Error(
            `Spotify API error (${response.status}): ${
              errorData.error?.message || "Unknown error"
            }`
          );
        }
      }

      const data: SpotifyPlaylist = await response.json();
      console.log("Successfully fetched playlist:", data.name);
      setPlaylist(data);
      setIsOfflineMode(false);
    } catch (err) {
      console.error("Fetch error:", err);
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

  const generateSpotifyToken = async () => {
    if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
      setError(
        "Spotify Client ID and Client Secret not configured. Please set NEXT_PUBLIC_SPOTIFY_CLIENT_ID and NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET environment variables."
      );
      return;
    }

    setGeneratingToken(true);
    setError(null);

    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: SPOTIFY_CLIENT_ID,
          client_secret: SPOTIFY_CLIENT_SECRET,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate token: ${response.status}`);
      }

      const data = await response.json();

      // Show success message with the token
      setError(null);
      alert(
        `Token generated successfully!\n\nAdd this to your .env.local file:\nNEXT_PUBLIC_SPOTIFY_TOKEN=${data.access_token}\n\nToken expires in ${data.expires_in} seconds (1 hour).`
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate token");
    } finally {
      setGeneratingToken(false);
    }
  };

  // Load offline library from localStorage on component mount
  useEffect(() => {
    const savedLibrary = localStorage.getItem("spotify-offline-library");
    if (savedLibrary) {
      try {
        const parsed = JSON.parse(savedLibrary);
        setOfflineLibrary(parsed);
      } catch (err) {
        console.error("Failed to load offline library:", err);
      }
    }
  }, []);

  // Save playlist to offline library
  const saveToOfflineLibrary = (playlistToSave: SpotifyPlaylist) => {
    const updatedLibrary = [...offlineLibrary];
    const existingIndex = updatedLibrary.findIndex(
      (p) => p.external_urls.spotify === playlistToSave.external_urls.spotify
    );

    const playlistWithTimestamp = {
      ...playlistToSave,
      savedAt: new Date().toISOString(),
    };

    if (existingIndex >= 0) {
      updatedLibrary[existingIndex] = playlistWithTimestamp;
    } else {
      updatedLibrary.push(playlistWithTimestamp);
    }

    setOfflineLibrary(updatedLibrary);
    localStorage.setItem(
      "spotify-offline-library",
      JSON.stringify(updatedLibrary)
    );
  };

  // Remove playlist from offline library
  const removeFromOfflineLibrary = (playlistUrl: string) => {
    const updatedLibrary = offlineLibrary.filter(
      (p) => p.external_urls.spotify !== playlistUrl
    );
    setOfflineLibrary(updatedLibrary);
    localStorage.setItem(
      "spotify-offline-library",
      JSON.stringify(updatedLibrary)
    );
  };

  // Load playlist from offline library
  const loadFromOfflineLibrary = (offlinePlaylist: SpotifyPlaylist) => {
    setPlaylist(offlinePlaylist);
    setPlaylistUrl(offlinePlaylist.external_urls.spotify);
    setIsOfflineMode(true);
    setError(null);
  };

  // Export offline library as JSON file
  const exportOfflineLibrary = () => {
    if (offlineLibrary.length === 0) {
      alert("No playlists in offline library to export.");
      return;
    }

    const dataStr = JSON.stringify(offlineLibrary, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `spotify-offline-library-${
      new Date().toISOString().split("T")[0]
    }.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Import offline library from JSON file
  const importOfflineLibrary = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        if (Array.isArray(imported)) {
          setOfflineLibrary(imported);
          localStorage.setItem(
            "spotify-offline-library",
            JSON.stringify(imported)
          );
          alert(`Successfully imported ${imported.length} playlists!`);
        } else {
          alert(
            "Invalid file format. Please select a valid offline library JSON file."
          );
        }
      } catch {
        alert("Failed to import file. Please check the file format.");
      }
    };
    reader.readAsText(file);
    // Reset input
    event.target.value = "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Collapsible Setup Instructions */}
        <Card className="p-0 mb-8 shadow-lg border-0 bg-yellow-50/80 backdrop-blur-sm border-yellow-200 overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 focus:outline-none hover:bg-yellow-100/60 transition-colors group"
            onClick={() => setShowSetup((v) => !v)}
            aria-expanded={showSetup}
            aria-controls="setup-instructions"
            type="button"
          >
            <span className="text-xl font-semibold text-yellow-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              Setup Instructions: Spotify API Token
            </span>
            <span className="ml-2">
              {/* Chevron icon, rotates when open */}
              <svg
                className={`w-6 h-6 text-yellow-700 transition-transform duration-200 ${
                  showSetup ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          {showSetup && (
            <div
              id="setup-instructions"
              className="px-6 pb-6 pt-0 animate-fade-in"
            >
              <ol className="list-decimal list-inside space-y-3 text-yellow-900 text-sm mt-2">
                <li>
                  <span className="font-medium">Create a Spotify App:</span>
                  <ul className="list-disc list-inside ml-6 mt-1 text-yellow-800">
                    <li>
                      Go to{" "}
                      <a
                        href="https://developer.spotify.com/dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-700"
                      >
                        Spotify Developer Dashboard
                      </a>{" "}
                      and log in with your Spotify account.
                    </li>
                    <li>
                      Click{" "}
                      <span className="font-mono bg-yellow-100 px-1 rounded">
                        Create an app
                      </span>{" "}
                      and fill in the form:
                      <ul className="list-disc list-inside ml-6 mt-1 text-yellow-700 text-xs">
                        <li>
                          <strong>App name:</strong> Any name (e.g.,
                          &quot;ciframanager&quot; or &quot;My Music App&quot;)
                        </li>
                        <li>
                          <strong>App description:</strong> Brief description
                          (e.g., &quot;manages song chords&quot; or
                          &quot;playlist explorer&quot;)
                        </li>
                        <li>
                          <strong>Website:</strong> Leave empty or use
                          http://localhost:3000
                        </li>
                        <li>
                          <strong>Redirect URIs:</strong> http://127.0.0.1:3000
                          or http://localhost:3000
                        </li>
                        <li>
                          <strong>APIs:</strong> Check &quot;Web API&quot; (this
                          is what we need for playlist data)
                        </li>
                        <li>
                          <strong>Terms:</strong> Check the agreement box
                        </li>
                      </ul>
                    </li>
                    <li>
                      Click{" "}
                      <span className="font-mono bg-yellow-100 px-1 rounded">
                        Save
                      </span>{" "}
                      to create your app.
                    </li>
                    <li>
                      Click on your app name, then{" "}
                      <span className="font-mono bg-yellow-100 px-1 rounded">
                        Settings
                      </span>{" "}
                      to find your Client ID and Client Secret (click &quot;View
                      client secret&quot;).
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Get an Access Token:</span>
                  <ul className="list-disc list-inside ml-6 mt-1 text-yellow-800">
                    <li>
                      <strong>Option 1 - Automatic (Recommended):</strong> Use
                      the &quot;Generate Token&quot; button below if you have
                      set up your Client ID and Secret.
                    </li>
                    <li>
                      <strong>Option 2 - Manual:</strong> Use the Client
                      Credentials flow to get a token. Run this cURL command
                      (replace with your credentials):
                      <pre className="bg-yellow-100 rounded p-2 mt-2 text-xs overflow-x-auto">
                        {`curl -X POST "https://accounts.spotify.com/api/token" \\
     -H "Content-Type: application/x-www-form-urlencoded" \\
     -d "grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"`}
                      </pre>
                    </li>
                    <li>
                      Copy the <span className="font-mono">access_token</span>{" "}
                      from the response (starts with{" "}
                      <span className="font-mono">BQ...</span>).
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">
                    Set the Environment Variable:
                  </span>
                  <ul className="list-disc list-inside ml-6 mt-1 text-yellow-800">
                    <li>
                      In your project root, create or edit{" "}
                      <span className="font-mono bg-yellow-100 px-1 rounded">
                        .env.local
                      </span>
                    </li>
                    <li>
                      Add these lines (replace with your actual values):
                      <pre className="bg-yellow-100 rounded p-2 mt-2 text-xs">
                        {`# For automatic token generation (recommended)
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_client_id_here
NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=your_client_secret_here

# Generated access token (use Generate Token button below)
NEXT_PUBLIC_SPOTIFY_TOKEN=your_token_here`}
                      </pre>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Restart Your Dev Server:</span>
                  <ul className="list-disc list-inside ml-6 mt-1 text-yellow-800">
                    <li>
                      Stop your dev server if running, then start it again:
                    </li>
                    <pre className="bg-yellow-100 rounded p-2 mt-2 text-xs">
                      pnpm dev
                    </pre>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Test the Playlist Page:</span>
                  <ul className="list-disc list-inside ml-6 mt-1 text-yellow-800">
                    <li>
                      Go to <span className="font-mono">/playlist</span> and
                      paste a public playlist URL, e.g.:
                      <pre className="bg-yellow-100 rounded p-2 mt-2 text-xs">
                        https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M
                      </pre>
                    </li>
                    <li>
                      Click <span className="font-mono">Explore</span> and you
                      should see the playlist tracks.
                    </li>
                  </ul>
                </li>
              </ol>
              <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded text-yellow-900 text-xs">
                <b>Note:</b> The token expires after 1 hour. If you get a 401
                error, repeat step 2 for a new token. For production apps,
                implement proper OAuth flows or server-side token management.
              </div>

              {/* Token Generation Button */}
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-blue-900 mb-1">
                      Quick Token Generation
                    </p>
                    <p className="text-blue-800 text-xs">
                      Generate a new access token automatically using your
                      environment variables.
                    </p>
                  </div>
                  <button
                    onClick={generateSpotifyToken}
                    disabled={
                      generatingToken ||
                      !SPOTIFY_CLIENT_ID ||
                      !SPOTIFY_CLIENT_SECRET
                    }
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium text-sm"
                  >
                    {generatingToken ? (
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Generating...
                      </div>
                    ) : (
                      "Generate Token"
                    )}
                  </button>
                </div>
                {(!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) && (
                  <p className="text-blue-700 text-xs mt-2">
                    ⚠️ Client ID and Secret not configured. Add
                    NEXT_PUBLIC_SPOTIFY_CLIENT_ID and
                    NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET to .env.local first.
                  </p>
                )}
              </div>
            </div>
          )}
        </Card>

        {/* Offline Library */}
        <Card className="p-0 mb-8 shadow-lg border-0 bg-blue-50/80 backdrop-blur-sm border-blue-200 overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 focus:outline-none hover:bg-blue-100/60 transition-colors group"
            onClick={() => setShowOfflineLibrary((v) => !v)}
            aria-expanded={showOfflineLibrary}
            aria-controls="offline-library"
            type="button"
          >
            <span className="text-xl font-semibold text-blue-900 flex items-center gap-2">
              <Library className="w-5 h-5 text-blue-600" />
              Offline Library ({offlineLibrary.length} playlists)
            </span>
            <span className="ml-2">
              <svg
                className={`w-6 h-6 text-blue-700 transition-transform duration-200 ${
                  showOfflineLibrary ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          {showOfflineLibrary && (
            <div
              id="offline-library"
              className="px-6 pb-6 pt-0 animate-fade-in"
            >
              {/* Library Controls */}
              <div className="flex flex-wrap gap-3 mb-4">
                <button
                  onClick={exportOfflineLibrary}
                  disabled={offlineLibrary.length === 0}
                  className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm"
                >
                  <Download className="w-4 h-4" />
                  Export Library
                </button>
                <label className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 text-sm cursor-pointer">
                  <Upload className="w-4 h-4" />
                  Import Library
                  <input
                    type="file"
                    accept=".json"
                    onChange={importOfflineLibrary}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Library Content */}
              {offlineLibrary.length === 0 ? (
                <div className="text-center py-8 text-blue-700">
                  <Library className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-lg font-medium mb-2">
                    No offline playlists yet
                  </p>
                  <p className="text-sm opacity-75">
                    Fetch a playlist above and click &quot;Save to Library&quot;
                    to build your offline collection.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {offlineLibrary.map((offlinePlaylist, index) => (
                    <div
                      key={`${offlinePlaylist.external_urls.spotify}-${index}`}
                      className="bg-white rounded-lg p-4 border border-blue-200 hover:border-blue-300 transition-colors group"
                    >
                      {/* Playlist Image */}
                      {offlinePlaylist.images?.[0] && (
                        <img
                          src={offlinePlaylist.images[0].url}
                          alt={offlinePlaylist.name}
                          className="w-full aspect-square rounded-lg object-cover mb-3"
                        />
                      )}

                      {/* Playlist Info */}
                      <h4 className="font-medium text-gray-900 truncate mb-1">
                        {offlinePlaylist.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {offlinePlaylist.tracks.total} tracks • by{" "}
                        {offlinePlaylist.owner.display_name}
                      </p>
                      {offlinePlaylist.savedAt && (
                        <p className="text-xs text-gray-500 mb-3">
                          Saved:{" "}
                          {new Date(
                            offlinePlaylist.savedAt
                          ).toLocaleDateString()}
                        </p>
                      )}

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            loadFromOfflineLibrary(offlinePlaylist)
                          }
                          className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
                        >
                          <WifiOff className="w-3 h-3" />
                          Load
                        </button>
                        <button
                          onClick={() =>
                            removeFromOfflineLibrary(
                              offlinePlaylist.external_urls.spotify
                            )
                          }
                          className="px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                          title="Remove from library"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </Card>

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
                        {isOfflineMode && (
                          <span className="ml-3 inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm">
                            <WifiOff className="w-3 h-3" />
                            Offline
                          </span>
                        )}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {playlist.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {!isOfflineMode && (
                        <button
                          onClick={() => saveToOfflineLibrary(playlist)}
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                          title="Save to offline library"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      )}
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
                    key={`${item.track.id}-${index}`}
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
