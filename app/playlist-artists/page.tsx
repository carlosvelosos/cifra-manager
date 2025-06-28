"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  AlertCircle,
  Upload,
  Users,
  Music2,
  Download,
  Search,
  ExternalLink,
  Loader2,
  Music,
  List,
  FileDown,
} from "lucide-react";

interface SpotifyTrack {
  id: string;
  name: string;
  artists: Array<{
    name: string;
  }>;
}

interface SpotifyPlaylist {
  name: string;
  tracks: {
    items: Array<{
      track: SpotifyTrack;
    }>;
  };
}

interface ArtistData {
  name: string;
  songCount: number;
  songs: string[];
  cifraClubUrl?: string;
  cifraClubSongs?: CifraClubSong[];
  fetchingSongs?: boolean;
}

interface CifraClubSong {
  name: string;
  url: string;
  hits?: string;
}

export default function PlaylistArtistsPage() {
  const [playlist, setPlaylist] = useState<SpotifyPlaylist | null>(null);
  const [artists, setArtists] = useState<ArtistData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchingArtist, setSearchingArtist] = useState<string | null>(null);
  const [fetchingSongs, setFetchingSongs] = useState<string | null>(null);

  const uploadOfflinePlaylist = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith(".json")) {
      setError("Please select a valid JSON file");
      return;
    }

    setLoading(true);
    setError(null);

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
            setLoading(false);
            return;
          }
        } else if (data.name && data.tracks) {
          // If it's a single playlist object
          targetPlaylist = data;
        } else {
          setError(
            "Invalid playlist format. Expected a playlist object or array of playlists."
          );
          setLoading(false);
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
          setLoading(false);
          return;
        }

        setPlaylist(targetPlaylist);
        extractArtists(targetPlaylist);
        setError(null);
      } catch (err) {
        console.error("Failed to parse JSON:", err);
        setError(
          "Failed to parse the uploaded file. Please ensure it&apos;s a valid JSON file."
        );
      } finally {
        setLoading(false);
      }
    };

    reader.readAsText(file);
    // Reset input
    event.target.value = "";
  };

  const extractArtists = (playlistData: SpotifyPlaylist) => {
    const artistMap = new Map<string, { songCount: number; songs: string[] }>();

    // Process each track and extract artists
    playlistData.tracks.items.forEach((item) => {
      if (item.track && item.track.artists) {
        const songName = item.track.name;

        item.track.artists.forEach((artist) => {
          const artistName = artist.name;

          if (artistMap.has(artistName)) {
            const existing = artistMap.get(artistName)!;
            existing.songCount += 1;
            existing.songs.push(songName);
          } else {
            artistMap.set(artistName, {
              songCount: 1,
              songs: [songName],
            });
          }
        });
      }
    });

    // Convert to array and sort by song count (descending)
    const artistsArray: ArtistData[] = Array.from(artistMap.entries())
      .map(([name, data]) => ({
        name,
        songCount: data.songCount,
        songs: data.songs.sort(),
      }))
      .sort((a, b) => b.songCount - a.songCount);

    setArtists(artistsArray);
  };

  const downloadArtistsList = () => {
    if (artists.length === 0 || !playlist) return;

    const content = [
      `Artists from: ${playlist.name}`,
      `Total unique artists: ${artists.length}`,
      `Total songs: ${playlist.tracks.items.length}`,
      "",
      "Artists (sorted by song count):",
      "=====================================",
      "",
      ...artists.map(
        (artist, index) =>
          `${index + 1}. ${artist.name} (${artist.songCount} song${
            artist.songCount > 1 ? "s" : ""
          })`
      ),
      "",
      "",
      "Detailed breakdown:",
      "===================",
      "",
      ...artists.flatMap((artist) => [
        `${artist.name}:`,
        ...artist.songs.map((song) => `  - ${song}`),
        "",
      ]),
    ];

    const blob = new Blob([content.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    const timestamp = new Date()
      .toISOString()
      .replace(/[:.]/g, "-")
      .slice(0, 19);
    const sanitizedPlaylistName = playlist.name.replace(/[^\w\s-]/g, "").trim();
    const filename = `${sanitizedPlaylistName}_artists_${timestamp}.txt`;

    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    console.log(`📁 [PLAYLIST ARTISTS] Downloaded artists list: ${filename}`);
  };

  /**
   * Downloads all CifraClub song URLs for a specific artist as a .txt file
   *
   * @param artistName - The name of the artist
   * @param songs - Array of CifraClub songs with URLs
   */
  const downloadArtistSongs = (artistName: string, songs: CifraClubSong[]) => {
    if (!songs || songs.length === 0) {
      alert(`No CifraClub songs found for ${artistName}`);
      return;
    }

    const content = [
      `CifraClub Songs for: ${artistName}`,
      `Total songs: ${songs.length}`,
      `Generated on: ${new Date().toLocaleString()}`,
      "",
      "Song List:",
      "=".repeat(50),
      "",
      ...songs.map((song, index) => {
        let line = `${index + 1}. ${song.name}`;
        if (song.hits) {
          line += ` (${song.hits} views)`;
        }
        line += `\n   URL: ${song.url}`;
        return line;
      }),
      "",
      "",
      "Direct URLs only:",
      "=".repeat(30),
      "",
      ...songs.map((song) => song.url),
    ];

    const blob = new Blob([content.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    const timestamp = new Date()
      .toISOString()
      .replace(/[:.]/g, "-")
      .slice(0, 19);
    const sanitizedArtistName = artistName.replace(/[^\w\s-]/g, "").trim();
    const filename = `${sanitizedArtistName}_cifraclub_songs_${timestamp}.txt`;

    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    console.log(
      `📁 [PLAYLIST ARTISTS] Downloaded CifraClub songs for ${artistName}: ${filename}`
    );
  };

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalSongs = playlist?.tracks?.items?.length || 0;
  const totalArtists = artists.length;

  const searchArtistOnCifraClub = async (artistName: string) => {
    setSearchingArtist(artistName);

    try {
      console.log(`🔍 [PLAYLIST ARTISTS] Searching for artist: ${artistName}`);

      // First try to construct a direct artist page URL
      const directArtistUrl = constructDirectArtistUrl(artistName);

      if (directArtistUrl) {
        console.log(
          `🎯 [PLAYLIST ARTISTS] Constructed direct artist URL: ${directArtistUrl}`
        );

        // Update the artist data with the constructed URL
        setArtists((prevArtists) =>
          prevArtists.map((artist) =>
            artist.name === artistName
              ? { ...artist, cifraClubUrl: directArtistUrl }
              : artist
          )
        );

        // Open the URL in a new tab
        window.open(directArtistUrl, "_blank");
        return;
      }

      // If direct URL construction fails, fall back to Google search
      const searchQuery = `${artistName} site:cifraclub.com.br`;
      const encodedQuery = encodeURIComponent(searchQuery);
      const googleUrl = `https://www.google.com/search?q=${encodedQuery}`;

      console.log(
        `🔍 [PLAYLIST ARTISTS] Direct URL construction failed, falling back to Google search: ${googleUrl}`
      );
      window.open(googleUrl, "_blank");
    } catch (error) {
      console.error(
        `💥 [PLAYLIST ARTISTS] Unexpected error searching for artist ${artistName}:`,
        error
      );

      // Final fallback - construct and open Google search URL
      const searchQuery = `${artistName} site:cifraclub.com.br`;
      const encodedQuery = encodeURIComponent(searchQuery);
      const googleUrl = `https://www.google.com/search?q=${encodedQuery}`;

      console.log(
        `🔄 [PLAYLIST ARTISTS] Final fallback to Google search: ${googleUrl}`
      );
      window.open(googleUrl, "_blank");
    } finally {
      setSearchingArtist(null);
    }
  };

  /**
   * Constructs a direct CifraClub artist page URL from an artist name.
   * Uses multiple URL construction strategies for better success rate.
   *
   * @param artistName - The artist name to convert to a CifraClub URL
   * @returns A constructed CifraClub artist URL or null if construction fails
   */
  const constructDirectArtistUrl = (artistName: string): string | null => {
    if (!artistName || typeof artistName !== "string") return null;

    const strategies = [
      // Strategy 1: Standard conversion - most common format
      () => {
        const artistSlug = artistName
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") // Remove accents
          .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
          .replace(/\s+/g, "-") // Replace spaces with hyphens
          .replace(/-+/g, "-") // Remove duplicate hyphens
          .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

        if (!artistSlug) return null;
        return `https://www.cifraclub.com.br/${artistSlug}/`;
      },

      // Strategy 2: Keep some special characters that might be in artist names
      () => {
        const artistSlug = artistName
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") // Remove accents
          .replace(/[^a-z0-9\s&-]/g, "") // Keep & character
          .replace(/\s+/g, "-") // Replace spaces with hyphens
          .replace(/-+/g, "-") // Remove duplicate hyphens
          .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

        if (!artistSlug) return null;
        return `https://www.cifraclub.com.br/${artistSlug}/`;
      },

      // Strategy 3: Handle common abbreviations and clean up
      () => {
        const cleanArtist = artistName
          .replace(/\bfeat\b\.?/gi, "") // Remove "feat"
          .replace(/\bft\b\.?/gi, "") // Remove "ft"
          .replace(/\bpart\b\.?/gi, "") // Remove "part"
          .replace(/\s+/g, " ") // Normalize spaces
          .trim();

        const artistSlug = cleanArtist
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") // Remove accents
          .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
          .replace(/\s+/g, "-") // Replace spaces with hyphens
          .replace(/-+/g, "-") // Remove duplicate hyphens
          .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

        if (!artistSlug) return null;
        return `https://www.cifraclub.com.br/${artistSlug}/`;
      },

      // Strategy 4: Handle numbers and special cases
      () => {
        const artistSlug = artistName
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") // Remove accents
          .replace(/\s+e\s+/gi, "-e-") // Handle "Artist e Artist" format
          .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
          .replace(/\s+/g, "-") // Replace spaces with hyphens
          .replace(/-+/g, "-") // Remove duplicate hyphens
          .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens

        if (!artistSlug) return null;
        return `https://www.cifraclub.com.br/${artistSlug}/`;
      },
    ];

    // Try each strategy and return the first successful one
    for (let i = 0; i < strategies.length; i++) {
      const directUrl = strategies[i]();
      if (directUrl) {
        console.log(
          `� [PLAYLIST ARTISTS] Constructed artist URL (strategy ${i + 1}):`,
          directUrl
        );
        return directUrl;
      }
    }

    console.warn(
      "❌ [PLAYLIST ARTISTS] Could not construct direct URL for artist:",
      artistName
    );
    return null;
  };

  /**
   * Fetches HTML content using multiple CORS proxy services as fallbacks.
   * Tries different proxy services to handle various response size limitations.
   *
   * @param url - The URL to fetch content from
   * @returns The HTML content as a string, or null if all proxies fail
   */
  const fetchWithProxyFallbacks = async (
    url: string
  ): Promise<string | null> => {
    interface ProxyConfig {
      name: string;
      getUrl: (targetUrl: string) => string;
      extractContent: (data: ProxyResponse) => string;
    }

    interface ProxyResponse {
      contents?: string;
      [key: string]: unknown;
    }

    const proxies: ProxyConfig[] = [
      // Proxy 1: AllOrigins (most reliable for small-medium pages)
      {
        name: "AllOrigins",
        getUrl: (targetUrl: string) =>
          `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`,
        extractContent: (data: ProxyResponse) => data.contents || "",
      },
      // Proxy 2: ThingProxy
      {
        name: "ThingProxy",
        getUrl: (targetUrl: string) =>
          `https://thingproxy.freeboard.io/fetch/${encodeURIComponent(
            targetUrl
          )}`,
        extractContent: (data: ProxyResponse) => data as unknown as string, // Direct response
      },
      // Proxy 3: AllOrigins Raw
      {
        name: "AllOrigins Raw",
        getUrl: (targetUrl: string) =>
          `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`,
        extractContent: (data: ProxyResponse) => data as unknown as string, // Direct HTML response
      },
    ];

    for (const proxy of proxies) {
      try {
        console.log(`🔄 [PLAYLIST ARTISTS] Trying ${proxy.name} proxy...`);

        const proxyUrl = proxy.getUrl(url);
        const response = await fetch(proxyUrl);

        if (!response.ok) {
          console.warn(
            `⚠️ [PLAYLIST ARTISTS] ${proxy.name} returned status: ${response.status}`
          );
          continue;
        }

        let data: ProxyResponse;
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          data = (await response.json()) as ProxyResponse;
        } else {
          data = (await response.text()) as unknown as ProxyResponse;
        }

        const htmlContent = proxy.extractContent(data);

        if (
          htmlContent &&
          typeof htmlContent === "string" &&
          htmlContent.length > 100
        ) {
          console.log(
            `✅ [PLAYLIST ARTISTS] Successfully fetched content using ${proxy.name}`
          );
          return htmlContent;
        } else {
          console.warn(
            `⚠️ [PLAYLIST ARTISTS] ${proxy.name} returned insufficient content`
          );
        }
      } catch (error) {
        console.warn(`❌ [PLAYLIST ARTISTS] ${proxy.name} failed:`, error);
        continue;
      }
    }

    console.error(
      `💥 [PLAYLIST ARTISTS] All proxy services failed for URL: ${url}`
    );
    return null;
  };

  /**
   * Attempts to fetch only the songs list section from a CifraClub artist page.
   * Uses multiple strategies to get just the content we need instead of the full page.
   *
   * @param url - The CifraClub artist page URL
   * @returns The songs list HTML content or null if all methods fail
   */
  const fetchSongsListOnly = async (url: string): Promise<string | null> => {
    console.log(
      `🎯 [PLAYLIST ARTISTS] Attempting to fetch only songs list from: ${url}`
    );

    // Strategy 1: Try to fetch the page and extract just the songs section
    // This is more efficient than loading the entire page
    try {
      const htmlContent = await fetchWithProxyFallbacks(url);
      if (!htmlContent) {
        throw new Error("No content received");
      }

      // Parse the full HTML and extract just the songs container
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");

      // Look for the main songs container
      const songsContainer = doc.querySelector("#js-a-songs");
      if (songsContainer) {
        console.log(
          `✅ [PLAYLIST ARTISTS] Successfully extracted songs container`
        );
        return songsContainer.outerHTML;
      }

      // If main container not found, try fallback selectors
      const fallbackSelectors = [
        "ul.art_musics",
        "ul.artistMusics--allSongs",
        ".list-links.art_musics",
      ];

      for (const selector of fallbackSelectors) {
        const container = doc.querySelector(selector);
        if (container) {
          console.log(
            `✅ [PLAYLIST ARTISTS] Found songs container using fallback: ${selector}`
          );
          return container.outerHTML;
        }
      }

      throw new Error("Songs container not found in page");
    } catch (error) {
      console.warn(
        `⚠️ [PLAYLIST ARTISTS] Failed to extract songs list:`,
        error
      );
      return null;
    }
  };

  /**
   * Fetches all songs available on CifraClub for a specified artist.
   * Scrapes the artist's CifraClub page and parses the songs list from the HTML.
   *
   * @param artistName - The artist name to fetch songs for
   */
  const fetchArtistSongs = async (artistName: string) => {
    setFetchingSongs(artistName);

    try {
      console.log(
        `🎵 [PLAYLIST ARTISTS] Fetching songs for artist: ${artistName}`
      );

      // Get the artist's CifraClub URL (either existing or construct new one)
      const artist = artists.find((a) => a.name === artistName);
      let artistUrl = artist?.cifraClubUrl;

      if (!artistUrl) {
        const constructedUrl = constructDirectArtistUrl(artistName);
        if (!constructedUrl) {
          throw new Error("Could not construct artist URL");
        }
        artistUrl = constructedUrl;
      }

      console.log(`🔗 [PLAYLIST ARTISTS] Fetching from URL: ${artistUrl}`);

      // Try to fetch only the songs list section for better performance
      let songsHtml = await fetchSongsListOnly(artistUrl);

      if (!songsHtml) {
        console.log(
          `🔄 [PLAYLIST ARTISTS] Fallback: Fetching full page content`
        );
        // Fallback to full page fetch if targeted fetch fails
        const htmlContent = await fetchWithProxyFallbacks(artistUrl);
        if (!htmlContent) {
          throw new Error("No content received from the artist page");
        }
        songsHtml = htmlContent;
      }

      console.log(
        `📄 [PLAYLIST ARTISTS] Successfully fetched artist page content`
      );

      // Parse the HTML to extract songs
      const songs = parseCifraClubSongs(songsHtml);

      if (songs.length === 0) {
        throw new Error("No songs found on the artist page");
      }

      console.log(
        `🎶 [PLAYLIST ARTISTS] Found ${songs.length} songs for ${artistName}`
      );

      // Update the artist data with the fetched songs
      setArtists((prevArtists) =>
        prevArtists.map((artist) =>
          artist.name === artistName
            ? {
                ...artist,
                cifraClubUrl: artistUrl,
                cifraClubSongs: songs,
                fetchingSongs: false,
              }
            : artist
        )
      );
    } catch (error) {
      console.error(
        `💥 [PLAYLIST ARTISTS] Error fetching songs for ${artistName}:`,
        error
      );

      // Update artist state to show error
      setArtists((prevArtists) =>
        prevArtists.map((artist) =>
          artist.name === artistName
            ? {
                ...artist,
                fetchingSongs: false,
                cifraClubSongs: [],
              }
            : artist
        )
      );

      // Provide more specific error messages based on the error type
      let errorMessage = `Failed to fetch songs for ${artistName}.`;

      if (error instanceof Error) {
        if (error.message.includes("Content-Length")) {
          errorMessage +=
            " The artist page is too large to fetch through proxy services.";
        } else if (error.message.includes("No content received")) {
          errorMessage += " The artist page could not be loaded.";
        } else if (error.message.includes("No songs found")) {
          errorMessage += " No songs were found on the artist page.";
        } else if (error.message.includes("Could not construct")) {
          errorMessage +=
            " Could not construct a valid CifraClub URL for this artist.";
        } else {
          errorMessage += ` Error: ${error.message}`;
        }
      }

      errorMessage +=
        " Please try opening the artist page manually or try again later.";

      alert(errorMessage);
    } finally {
      setFetchingSongs(null);
    }
  };

  /**
   * Parses CifraClub HTML content to extract song information.
   * Can handle both full HTML pages and extracted songs list containers.
   * Includes fallback strategies for different page structures.
   *
   * @param htmlContent - The HTML content (full page or songs container)
   * @returns Array of parsed songs with name, URL, and hits data
   */
  const parseCifraClubSongs = (htmlContent: string): CifraClubSong[] => {
    try {
      // Create a temporary DOM parser
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");

      let songsContainer: Element | null = null;

      // Check if the content is already a songs container
      const rootElement = doc.documentElement || doc.body?.firstElementChild;
      if (
        rootElement &&
        (rootElement.id === "js-a-songs" ||
          rootElement.classList.contains("art_musics") ||
          rootElement.classList.contains("artistMusics--allSongs"))
      ) {
        songsContainer = rootElement;
        console.log(
          `🎯 [PLAYLIST ARTISTS] Content is already a songs container`
        );
      } else {
        // Look for the main songs container in a full page
        songsContainer = doc.querySelector("#js-a-songs");

        // Fallback strategies if the main container is not found
        if (!songsContainer) {
          console.warn(
            "❌ [PLAYLIST ARTISTS] Could not find #js-a-songs element, trying fallbacks..."
          );

          // Fallback 1: Look for any ul with art_musics class
          songsContainer = doc.querySelector("ul.art_musics");

          // Fallback 2: Look for any ul with artistMusics class
          if (!songsContainer) {
            songsContainer = doc.querySelector("ul.artistMusics--allSongs");
          }

          // Fallback 3: Look for any ul containing song links
          if (!songsContainer) {
            const allUls = doc.querySelectorAll("ul");
            for (const ul of allUls) {
              if (
                ul.querySelector("a[href*='cifraclub.com']") ||
                ul.querySelector("a[href^='/']")
              ) {
                songsContainer = ul;
                break;
              }
            }
          }
        }
      }

      if (!songsContainer) {
        console.warn(
          "❌ [PLAYLIST ARTISTS] Could not find any songs container"
        );
        return [];
      }

      console.log(
        `🔍 [PLAYLIST ARTISTS] Found songs container: ${songsContainer.tagName}.${songsContainer.className}`
      );

      // Find all song links within the container
      const songLinks = songsContainer.querySelectorAll("li a[href], a[href]");
      const songs: CifraClubSong[] = [];

      songLinks.forEach((link, index) => {
        const href = link.getAttribute("href");
        const songName =
          link.textContent?.trim() || link.getAttribute("title")?.trim();

        // Look for hits data in various locations
        let hits: string | undefined;
        const parentLi = link.closest("li");
        if (parentLi) {
          hits =
            parentLi.getAttribute("data-hits") ||
            parentLi.getAttribute("data-name") ||
            undefined;
        }

        // Validate the link is actually a song URL
        if (
          href &&
          songName &&
          (href.includes("cifraclub.com") ||
            href.startsWith("/") ||
            href.includes("/"))
        ) {
          // Construct full URL if the href is relative
          const fullUrl = href.startsWith("http")
            ? href
            : `https://www.cifraclub.com.br${href}`;

          // Filter out non-song URLs (like artist pages, categories, etc.)
          // Songs typically have paths like /artist/song-name/
          const urlParts = fullUrl.split("/");
          if (urlParts.length >= 5 && urlParts[4] && urlParts[4] !== "") {
            songs.push({
              name: songName,
              url: fullUrl,
              hits: hits || undefined,
            });
          }
        }

        // Limit parsing to prevent infinite loops on malformed pages
        if (index > 500) {
          console.warn(
            "⚠️ [PLAYLIST ARTISTS] Stopping parsing after 500 links to prevent performance issues"
          );
          return;
        }
      });

      console.log(
        `🔍 [PLAYLIST ARTISTS] Parsed ${songs.length} songs from HTML`
      );

      // If we found very few songs, it might indicate a parsing issue
      if (songs.length === 0) {
        console.warn(
          "⚠️ [PLAYLIST ARTISTS] No songs found - this might be a parsing issue or the artist has no songs"
        );
      } else if (songs.length < 3) {
        console.warn(
          `⚠️ [PLAYLIST ARTISTS] Only found ${songs.length} songs - this might indicate a parsing issue`
        );
      }

      return songs;
    } catch (error) {
      console.error(
        "💥 [PLAYLIST ARTISTS] Error parsing CifraClub HTML:",
        error
      );
      return [];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Playlist Artists Analyzer
            </h1>
            <p className="text-gray-300">
              Upload a playlist file to discover all unique artists and their
              song counts
            </p>
          </motion.div>

          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="p-6 mb-6 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="space-y-4">
                <div>
                  <div className="text-white mb-2 block text-sm font-medium">
                    Upload Playlist (JSON)
                  </div>
                  <div className="flex gap-2">
                    <label className="flex-1 cursor-pointer">
                      <Input
                        type="file"
                        accept=".json"
                        onChange={uploadOfflinePlaylist}
                        className="hidden"
                        disabled={loading}
                      />
                      <div className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-white/30 rounded-lg hover:border-white/50 transition-colors">
                        <Upload className="h-5 w-5 text-gray-300" />
                        <span className="text-gray-300">
                          {loading
                            ? "Processing..."
                            : "Choose JSON file or drag & drop"}
                        </span>
                      </div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    Supported formats: Spotify playlist exports, offline library
                    JSON files
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

          {/* Results Section */}
          {playlist && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                {/* Playlist Info Header */}
                <div className="text-center mb-6">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-white mb-1">
                      {playlist.name}
                    </h2>
                    <div className="flex items-center justify-center gap-6 text-gray-400">
                      <div className="flex items-center gap-1">
                        <Music2 className="h-4 w-4" />
                        <span>{totalSongs} songs</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{totalArtists} unique artists</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <Button
                      onClick={downloadArtistsList}
                      variant="outline"
                      className="bg-blue-500/20 border-blue-400/30 text-blue-300 hover:bg-blue-500/30 h-10 px-4"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download Artists List
                    </Button>
                  </div>
                </div>

                <Separator className="bg-white/20 mb-6" />

                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search artists..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Showing {filteredArtists.length} of {totalArtists} artists
                  </p>
                </div>

                {/* Artists List */}
                <div className="space-y-3 max-h-[500px] overflow-y-auto">
                  {filteredArtists.map((artist, index) => (
                    <motion.div
                      key={artist.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 mr-4">
                          <h3 className="text-white font-medium text-lg">
                            {artist.name}
                          </h3>
                          <p className="text-gray-400 text-sm mb-2">
                            {artist.songCount} song
                            {artist.songCount > 1 ? "s" : ""}
                          </p>

                          {/* Show found CifraClub URL if available */}
                          {artist.cifraClubUrl && (
                            <div className="mb-2">
                              <a
                                href={artist.cifraClubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1"
                              >
                                <ExternalLink className="h-3 w-3" />
                                CifraClub Page Found
                              </a>
                            </div>
                          )}

                          {/* Songs List (collapsed by default, can be expanded) */}
                          <details className="group">
                            <summary className="cursor-pointer text-blue-300 hover:text-blue-200 text-sm">
                              View playlist songs ({artist.songs.length})
                            </summary>
                            <div className="mt-2 space-y-1">
                              {artist.songs.map((song, songIndex) => (
                                <div
                                  key={songIndex}
                                  className="text-gray-300 text-sm pl-4 border-l-2 border-blue-400/20"
                                >
                                  {song}
                                </div>
                              ))}
                            </div>
                          </details>

                          {/* CifraClub Songs List */}
                          {artist.cifraClubSongs &&
                            artist.cifraClubSongs.length > 0 && (
                              <details className="group mt-2">
                                <summary className="cursor-pointer text-green-300 hover:text-green-200 text-sm flex items-center gap-1">
                                  <List className="h-3 w-3" />
                                  CifraClub songs (
                                  {artist.cifraClubSongs.length})
                                </summary>
                                <div className="mt-2 space-y-1 max-h-40 overflow-y-auto">
                                  {artist.cifraClubSongs.map(
                                    (song, songIndex) => (
                                      <div
                                        key={songIndex}
                                        className="text-gray-300 text-sm pl-4 border-l-2 border-green-400/20 hover:bg-white/5 rounded px-2 py-1"
                                      >
                                        <a
                                          href={song.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="hover:text-green-300 transition-colors flex items-center justify-between group"
                                        >
                                          <span>{song.name}</span>
                                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {song.hits && (
                                              <span className="text-xs text-gray-400">
                                                {song.hits} views
                                              </span>
                                            )}
                                            <ExternalLink className="h-3 w-3" />
                                          </div>
                                        </a>
                                      </div>
                                    )
                                  )}
                                </div>
                              </details>
                            )}
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          <div className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm font-medium">
                            #{filteredArtists.indexOf(artist) + 1}
                          </div>

                          {/* Search CifraClub Button */}
                          <Button
                            onClick={() => searchArtistOnCifraClub(artist.name)}
                            disabled={searchingArtist === artist.name}
                            variant="outline"
                            size="sm"
                            className="bg-orange-500/20 border-orange-400/30 text-orange-300 hover:bg-orange-500/30 text-xs px-2 py-1 h-auto"
                          >
                            {searchingArtist === artist.name ? (
                              <>
                                <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                                Searching...
                              </>
                            ) : (
                              <>
                                <Search className="h-3 w-3 mr-1" />
                                Find on CifraClub
                              </>
                            )}
                          </Button>

                          {/* Fetch Songs Button */}
                          <Button
                            onClick={() => fetchArtistSongs(artist.name)}
                            disabled={fetchingSongs === artist.name}
                            variant="outline"
                            size="sm"
                            className="bg-green-500/20 border-green-400/30 text-green-300 hover:bg-green-500/30 text-xs px-2 py-1 h-auto"
                          >
                            {fetchingSongs === artist.name ? (
                              <>
                                <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                                Fetching...
                              </>
                            ) : (
                              <>
                                <Music className="h-3 w-3 mr-1" />
                                Fetch Songs
                              </>
                            )}
                          </Button>

                          {/* Download Songs Button */}
                          {artist.cifraClubSongs &&
                            artist.cifraClubSongs.length > 0 && (
                              <Button
                                onClick={() =>
                                  downloadArtistSongs(
                                    artist.name,
                                    artist.cifraClubSongs!
                                  )
                                }
                                variant="outline"
                                size="sm"
                                className="bg-blue-500/20 border-blue-400/30 text-blue-300 hover:bg-blue-500/30 text-xs px-2 py-1 h-auto"
                              >
                                <FileDown className="h-3 w-3 mr-1" />
                                Download URLs
                              </Button>
                            )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {filteredArtists.length === 0 && searchTerm && (
                  <div className="text-center py-8 text-gray-400">
                    <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>No artists found matching &quot;{searchTerm}&quot;</p>
                  </div>
                )}
              </Card>
            </motion.div>
          )}

          {/* Help Section */}
          {!playlist && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How to use
                </h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>• Upload a JSON file containing playlist data</p>
                  <p>• View all unique artists sorted by song count</p>
                  <p>• Search through the artists list</p>
                  <p>• Download a detailed report as a text file</p>
                  <p className="text-gray-400 mt-3">
                    Tip: You can export playlists from the main playlist viewer
                    or use any compatible Spotify playlist JSON export.
                  </p>
                </div>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
