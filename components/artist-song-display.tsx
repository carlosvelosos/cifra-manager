"use client";

import { useState, useEffect, useRef } from "react";
import CifraDisplay from "./cifra-display";

interface ArtistSongResult {
  url: string;
  content: string;
}

interface ArtistSongDisplayProps {
  result: ArtistSongResult | null;
  onClose: () => void;
}

export default function ArtistSongDisplay({
  result,
  onClose,
}: ArtistSongDisplayProps) {
  const [showFullscreenContent, setShowFullscreenContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Track result changes
  useEffect(() => {
    if (result) {
      console.log("📊 [ARTIST+SONG HOME] Result received:", {
        url: result.url,
        contentLength: result.content?.length || 0,
        hasContent: !!result.content,
      });

      // Parse artist and song from URL for additional logging
      const parsed = parseArtistAndSong(result.url);
      if (parsed) {
        console.log("🎨 [ARTIST+SONG HOME] Parsed from URL:", parsed);
      }
    } else {
      console.log("🔄 [ARTIST+SONG HOME] Result cleared/reset");
    }
  }, [result]);

  const copyToClipboard = (text: string) => {
    console.log(
      "📋 [ARTIST+SONG HOME] Copying to clipboard:",
      text.substring(0, 100) + "..."
    );
    navigator.clipboard.writeText(text);
    console.log(
      "✅ [ARTIST+SONG HOME] Content copied to clipboard successfully"
    );
  };

  // Function to extract artist and song names from CifraClub URL
  const parseArtistAndSong = (url: string) => {
    try {
      const urlObj = new URL(url);
      const pathParts = urlObj.pathname
        .split("/")
        .filter((part) => part.length > 0);

      if (pathParts.length >= 2) {
        const artistSlug = pathParts[0];
        const songSlug = pathParts[1];

        // Convert slug to readable format (replace hyphens with spaces and capitalize)
        const formatName = (slug: string) => {
          return slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        };

        return {
          artist: formatName(artistSlug),
          song: formatName(songSlug),
        };
      }
    } catch (error) {
      console.error("Error parsing URL:", error);
    }
    return null;
  };

  // Function to check if content contains cifra/chord information
  const containsCifraContent = (content: string): boolean => {
    if (!content) return false;

    // Check for common chord patterns and cifra indicators
    const cifraPatterns = [
      /\b[A-G][m]?[0-9]?\b/g, // Basic chords like C, Dm, G7
      /\b[A-G][#b]?[m]?[0-9]?\b/g, // Chords with sharps/flats
      /\[(.*?)\]/g, // Chords in brackets
      /Pre-Verse|Verse|Chorus|Bridge|Intro|Solo/i, // Song structure
      /Cifra|Tablatura|Tab/i, // Cifra-related terms
    ];

    return cifraPatterns.some((pattern) => pattern.test(content));
  };

  const isError =
    result &&
    (result.url.includes("failed") || result.content.includes("failed"));
  const isSearchPage = result && result.content.includes("search page");
  const isArtistPage = result && result.content.includes("artist page");
  const hasCifraContent = result && containsCifraContent(result.content);

  if (!result) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                🎵 Resultado da Busca
              </h2>
              {parseArtistAndSong(result.url) && (
                <div className="text-lg text-gray-600">
                  <span className="font-semibold text-blue-600">
                    {parseArtistAndSong(result.url)?.artist}
                  </span>
                  {" - "}
                  <span className="text-purple-600">
                    {parseArtistAndSong(result.url)?.song}
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Status indicators */}
          <div className="mb-4 flex flex-wrap gap-2">
            {isError && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                ❌ Erro na busca
              </span>
            )}
            {isSearchPage && !isError && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                🔍 Página de busca
              </span>
            )}
            {isArtistPage && !isError && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                👤 Página do artista
              </span>
            )}
            {hasCifraContent && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                🎸 Contém cifra
              </span>
            )}
          </div>

          {/* URL */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL encontrada:
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={result.url}
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
              />
              <button
                onClick={() => copyToClipboard(result.url)}
                className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                title="Copiar URL"
              >
                📋
              </button>
              <button
                onClick={() =>
                  window.open(result.url, "_blank", "noopener,noreferrer")
                }
                className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                title="Abrir em nova aba"
              >
                🔗
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Conteúdo extraído:
              </label>
              <div className="flex space-x-2">
                <button
                  onClick={() => copyToClipboard(result.content)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-xs"
                >
                  📋 Copiar
                </button>
                <button
                  onClick={() => setShowFullscreenContent(true)}
                  className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors text-xs"
                >
                  🔍 Expandir
                </button>
              </div>
            </div>
            <div
              ref={contentRef}
              className="p-4 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm max-h-96 overflow-y-auto whitespace-pre-wrap"
            >
              {result.content}
            </div>
          </div>

          {/* Content statistics */}
          <div className="text-xs text-gray-500 space-y-1">
            <div>Tamanho do conteúdo: {result.content.length} caracteres</div>
            <div>Linhas: {result.content.split("\n").length}</div>
            {hasCifraContent && (
              <div className="text-green-600 font-medium">
                ✓ Este conteúdo parece conter acordes ou cifras
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>{" "}
      {/* Fullscreen content modal */}
      {showFullscreenContent && (
        <div className="fixed inset-0 bg-white z-60">
          <div className="h-full w-full flex flex-col">
            <div className="flex-shrink-0 p-4 border-b border-gray-200 flex items-center justify-between bg-white">
              <h3 className="text-lg font-semibold">
                {parseArtistAndSong(result.url)
                  ? `${parseArtistAndSong(result.url)?.artist} - ${
                      parseArtistAndSong(result.url)?.song
                    }`
                  : "Conteúdo Completo"}
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => copyToClipboard(result.content)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
                >
                  📋 Copiar
                </button>
                <button
                  onClick={() => setShowFullscreenContent(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <CifraDisplay
                title={
                  parseArtistAndSong(result.url)
                    ? `${parseArtistAndSong(result.url)?.artist} - ${
                        parseArtistAndSong(result.url)?.song
                      }`
                    : "Cifra"
                }
                mainCifra={result.content}
                chords=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
