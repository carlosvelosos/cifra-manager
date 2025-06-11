"use client";

import { useState, useEffect, useRef } from "react";
import { ArtistSongResult } from "../types";
import SearchInput from "./SearchInput";

interface ArtistSongSearchProps {
  onSearch: (query: string) => void;
  result: ArtistSongResult | null;
  isLoading: boolean;
}

export default function ArtistSongSearch({
  onSearch,
  result,
  isLoading,
}: ArtistSongSearchProps) {
  const [query, setQuery] = useState("");
  const [showFullscreenContent, setShowFullscreenContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Track result changes
  useEffect(() => {
    if (result) {
      console.log("📊 [ARTIST+SONG UI] Result received:", {
        url: result.url,
        contentLength: result.content?.length || 0,
        hasContent: !!result.content,
      });

      // Parse artist and song from URL for additional logging
      const parsed = parseArtistAndSong(result.url);
      if (parsed) {
        console.log("🎨 [ARTIST+SONG UI] Parsed from URL:", parsed);
      }
    } else {
      console.log("🔄 [ARTIST+SONG UI] Result cleared/reset");
    }
  }, [result]);

  // Track loading state changes
  useEffect(() => {
    if (isLoading) {
      console.log("⏳ [ARTIST+SONG UI] Loading started");
    } else {
      console.log("✅ [ARTIST+SONG UI] Loading completed");
    }
  }, [isLoading]);
  const handleSearch = () => {
    if (query.trim()) {
      console.log(
        "🚀 [ARTIST+SONG UI] Search button clicked, query:",
        query.trim()
      );
      onSearch(query.trim());
    } else {
      console.warn("⚠️ [ARTIST+SONG UI] Search attempted with empty query");
    }
  };

  const handleClear = () => {
    console.log("🧹 [ARTIST+SONG UI] Clear button clicked");
    setQuery("");
  };
  const copyToClipboard = (text: string) => {
    console.log(
      "📋 [ARTIST+SONG UI] Copying to clipboard:",
      text.substring(0, 100) + "..."
    );
    navigator.clipboard.writeText(text);
    console.log("✅ [ARTIST+SONG UI] Content copied to clipboard successfully");
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

  // Split content into three parts
  const splitContentIntoThreeParts = (content: string) => {
    const lines = content.split("\n");
    const totalLines = lines.length;
    const linesPerColumn = Math.ceil(totalLines / 3);

    const part1 = lines.slice(0, linesPerColumn).join("\n");
    const part2 = lines.slice(linesPerColumn, linesPerColumn * 2).join("\n");
    const part3 = lines.slice(linesPerColumn * 2).join("\n");

    return { part1, part2, part3 };
  }; // Auto-scroll to content when result is available
  useEffect(() => {
    if (result) {
      console.log(
        "📱 [ARTIST+SONG UI] Result available, showing fullscreen in 100ms"
      );
      setTimeout(() => {
        setShowFullscreenContent(true);
        console.log("✨ [ARTIST+SONG UI] Fullscreen content displayed");
      }, 100);
    } else {
      console.log("🔄 [ARTIST+SONG UI] No result, hiding fullscreen content");
      setShowFullscreenContent(false);
    }
  }, [result]);

  // Handle ESC key to close fullscreen
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showFullscreenContent) {
        console.log("⌨️ [ARTIST+SONG UI] ESC key pressed, closing fullscreen");
        setShowFullscreenContent(false);
        setTimeout(() => {
          const searchSection = document.querySelector("[data-search-section]");
          searchSection?.scrollIntoView({ behavior: "smooth", block: "start" });
          console.log("📜 [ARTIST+SONG UI] Scrolled back to search section");
        }, 100);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showFullscreenContent]);
  return (
    <div className="w-full mt-12" data-search-section>
      <div className="w-full max-w-2xl mt-12">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-light text-gray-800 mb-2">
            Busca <span className="font-normal">Artista + Música</span>
          </h2>{" "}
          <p className="text-gray-600">
            Digite &quot;Artista - Música&quot; para obter URL direta da cifra
          </p>
        </div>
        <SearchInput
          value={query}
          onChange={setQuery}
          onSubmit={handleSearch}
          isLoading={isLoading}
          placeholder="Ex: Capital Inicial - Primeiros Erros"
          onClear={handleClear}
        />
        {/* Search Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSearch}
            disabled={!query.trim() || isLoading}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white text-sm rounded-lg transition-all duration-200 flex items-center space-x-2"
          >
            {isLoading && (
              <svg
                className="w-4 h-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            <span>{isLoading ? "Buscando..." : "Buscar Cifra"}</span>
          </button>
        </div>{" "}
        {/* Format Examples */}
        <div className="text-center mb-2 mt-6">
          <details className="inline-block text-left">
            <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
              📖 Formatos Suportados
            </summary>
            <div className="mt-3 mb-2 p-4 bg-gray-50 rounded-lg border text-sm">
              <p className="font-medium text-gray-800 mb-2">
                Exemplos de busca por artista + música:
              </p>
              <ul className="space-y-1 text-gray-600">
                <li>
                  • <code>Artista - Música</code> (ex: Skank - Garota Nacional)
                </li>
                <li>
                  • <code>Artista | Música</code> (ex: Capital Inicial |
                  Primeiros Erros)
                </li>
                <li>
                  • <code>Artista de Música</code> (ex: Skank de Garota
                  Nacional)
                </li>
              </ul>
            </div>
          </details>
        </div>
        {/* Result Display - URL Section Only */}
        {result && (
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Cifra Encontrada</span>
                </h3>
              </div>

              {/* URL Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-gray-700">
                    URL da Cifra
                  </h4>
                  <button
                    onClick={() => copyToClipboard(result.url)}
                    className="inline-flex items-center px-2 py-1 text-xs border border-gray-300 rounded text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Copiar
                  </button>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border text-sm font-mono break-all">
                  {result.url}
                </div>{" "}
                <div className="mt-2">
                  <button
                    onClick={() => window.open(result.url, "_blank")}
                    className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors mr-2"
                  >
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Abrir Cifra
                  </button>
                  <button
                    onClick={() => setShowFullscreenContent(true)}
                    className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors"
                  >
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                    Ver Tela Cheia
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>{" "}
      {/* Fullscreen Content Section */}
      {result && showFullscreenContent && (
        <div
          ref={contentRef}
          className="fixed inset-0 z-50 bg-white overflow-y-auto"
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {" "}
          {/* Fixed Header with Close Button */}{" "}
          <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-light text-gray-800">
                {(() => {
                  const parsedInfo = parseArtistAndSong(result.url);
                  if (parsedInfo) {
                    return (
                      <>
                        <span className="font-medium">{parsedInfo.artist}</span>
                        <span className="mx-2">-</span>
                        <span className="font-normal">{parsedInfo.song}</span>
                      </>
                    );
                  }
                  return (
                    <>
                      Conteúdo da <span className="font-normal">Cifra</span>
                    </>
                  );
                })()}
              </h2>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => copyToClipboard(result.content)}
                  className="inline-flex items-center px-4 py-2 text-sm border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copiar Conteúdo
                </button>
                <button
                  onClick={() => {
                    setShowFullscreenContent(false);
                    // Scroll back to search section when closing
                    setTimeout(() => {
                      const searchSection = document.querySelector(
                        "[data-search-section]"
                      );
                      searchSection?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }, 100);
                  }}
                  className="inline-flex items-center px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
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
                  Fechar
                </button>
              </div>
            </div>
          </div>{" "}
          {/* Fullscreen Content Display - Single Unified Element */}
          <div className="bg-gray-50">
            <div className="p-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="grid grid-cols-3 gap-8">
                  {(() => {
                    const { part1, part2, part3 } = splitContentIntoThreeParts(
                      result.content
                    );
                    return (
                      <>
                        <div className="text-sm leading-relaxed text-gray-800 font-mono whitespace-pre-wrap">
                          {part1}
                        </div>
                        <div className="text-sm leading-relaxed text-gray-800 font-mono whitespace-pre-wrap">
                          {part2}
                        </div>
                        <div className="text-sm leading-relaxed text-gray-800 font-mono whitespace-pre-wrap">
                          {part3}
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
