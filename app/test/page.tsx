"use client";

import { useState, useEffect } from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchInput from "./components/SearchInput";
import SearchButtons from "./components/SearchButtons";
import SearchResultCard from "./components/SearchResultCard";
import MultipleResultsDisplay from "./components/MultipleResultsDisplay";
import ArtistSongSearch from "./components/ArtistSongSearch";
import HtmlContentDisplay from "./components/HtmlContentDisplay";
import GoogleCSEWidget from "./components/GoogleCSEWidget";

// Hooks
import { useArtistSearch, useHtmlContent, useArtistSongSearch } from "./hooks";

export default function TestPage() {
  const [showGoogleCSE, setShowGoogleCSE] = useState(false);

  // Use custom hooks for different functionalities
  const {
    artist,
    setArtist,
    searchResult,
    multipleResults,
    isLoading,
    isLoadingMultiple,
    handleSubmit,
    handleAdvancedSearch,
    clearAll,
  } = useArtistSearch();

  const { htmlContent, isLoadingHtml, handleFetchHtml, setHtmlContent } =
    useHtmlContent();

  const {
    artistSongResult,
    isLoadingArtistSong,
    handleArtistSongSearch,
    setArtistSongResult,
  } = useArtistSongSearch();

  // Load Google Custom Search Engine script
  useEffect(() => {
    if (
      showGoogleCSE &&
      !document.querySelector('script[src*="cse.google.com"]')
    ) {
      const script = document.createElement("script");
      // Get CX ID from environment variable or use placeholder
      const cxId = process.env.NEXT_PUBLIC_GOOGLE_CX || "GOOGLE_CX";
      script.src = `https://cse.google.com/cse.js?cx=${cxId}`;
      script.async = true;
      document.head.appendChild(script);

      // Add custom CSS for better styling
      const style = document.createElement("style");
      style.innerHTML = `
        .gcse-search {
          font-family: inherit !important;
        }
        .gsc-control-cse {
          padding: 0 !important;
          border: none !important;
          background: transparent !important;
        }
        .gsc-search-box {
          margin-bottom: 20px !important;
        }
        .gsc-input-box {
          border: 1px solid #d1d5db !important;
          border-radius: 8px !important;
          height: 48px !important;
        }
        .gsc-input {
          padding: 12px 16px !important;
          font-size: 16px !important;
          background: transparent !important;
        }
        .gsc-search-button {
          border-radius: 8px !important;
          background: #3b82f6 !important;
          border: none !important;
          height: 48px !important;
          padding: 0 20px !important;
        }
        .gsc-results .gsc-cursor-box {
          margin: 20px 0 !important;
        }
        .gsc-results .gsc-result {
          border-bottom: 1px solid #e5e7eb !important;
          padding: 16px 0 !important;
        }
        .gs-title a {
          color: #1d4ed8 !important;
          text-decoration: none !important;
          font-weight: 500 !important;
        }
        .gs-title a:hover {
          text-decoration: underline !important;
        }
        .gs-snippet {
          color: #6b7280 !important;
          line-height: 1.5 !important;
        }
        .gs-visibleUrl {
          color: #059669 !important;
          font-size: 14px !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, [showGoogleCSE]);
  const handleClearAll = () => {
    clearAll();
    setShowGoogleCSE(false);
    setHtmlContent(null);
    setArtistSongResult(null);
  };

  // Track Artist + Song Search results
  useEffect(() => {
    console.log(
      "🎵 [PAGE] Artist + Song Search result changed:",
      artistSongResult ? "Result available" : "No result"
    );
  }, [artistSongResult]);
  // Track Artist + Song Search loading state
  useEffect(() => {
    console.log(
      "⏳ [PAGE] Artist + Song Search loading state:",
      isLoadingArtistSong ? "Loading..." : "Not loading"
    );
  }, [isLoadingArtistSong]);

  // Handle artistSong URL parameter from floating search
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const hasArtistSongParam = urlParams.get("artistSong") === "true";

      if (hasArtistSongParam) {
        console.log(
          "🔄 [PAGE] Detected artistSong URL parameter, checking localStorage..."
        );

        // Try to load the result from localStorage
        const storedResult = localStorage.getItem("artistSongResult");
        if (storedResult) {
          try {
            const parsedResult = JSON.parse(storedResult);
            console.log(
              "✅ [PAGE] Loaded artistSong result from localStorage:",
              parsedResult
            );
            setArtistSongResult(parsedResult);

            // Clean up localStorage after loading
            localStorage.removeItem("artistSongResult");
            console.log("🧹 [PAGE] Cleaned up localStorage");
          } catch (error) {
            console.error(
              "❌ [PAGE] Failed to parse artistSong result from localStorage:",
              error
            );
          }
        } else {
          console.log("⚠️ [PAGE] No artistSong result found in localStorage");
        }

        // Clean up URL parameter
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.delete("artistSong");
        window.history.replaceState({}, "", newUrl.toString());
        console.log("🧹 [PAGE] Cleaned up URL parameter");
      }
    }
  }, [setArtistSongResult]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <Header />
      {/* Search Container */}
      <div className="w-full max-w-2xl">
        <SearchInput
          value={artist}
          onChange={setArtist}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          onClear={handleClearAll}
        />

        <SearchButtons
          onSearch={handleSubmit}
          onAdvancedSearch={handleAdvancedSearch}
          onClear={handleClearAll}
          isSearching={isLoading}
          isAdvancedSearching={isLoadingMultiple}
          disabled={!artist.trim()}
        />

        {/* Results Preview */}
        {artist && !searchResult && !isLoading && (
          <div className="mt-8 text-center">
            {" "}
            <p className="text-gray-600">
              Procurando por:{" "}
              <span className="font-medium text-gray-800">
                &quot;{artist}&quot;
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              🔍 Busca será realizada no Google (site:cifraclub.com.br)
            </p>
          </div>
        )}

        {/* Search Result Display */}
        {searchResult && (
          <SearchResultCard
            result={searchResult}
            artistQuery={artist}
            onFetchHtml={handleFetchHtml}
            isLoadingHtml={isLoadingHtml}
          />
        )}

        {/* Multiple Results Display */}
        {multipleResults && (
          <MultipleResultsDisplay
            results={multipleResults}
            artistQuery={artist}
            onClose={() => setHtmlContent(null)}
          />
        )}

        {/* HTML Content Display */}
        {htmlContent && (
          <HtmlContentDisplay
            content={htmlContent}
            onClose={() => setHtmlContent(null)}
          />
        )}
      </div>{" "}
      <div className="w-full max-w-2xl mt-12">
        {/* Artist + Song Search Section */}
        <ArtistSongSearch
          result={artistSongResult}
          isLoading={isLoadingArtistSong}
          onSearch={handleArtistSongSearch}
        />
      </div>
      {/* Google CSE Section */}
      <div className="w-full max-w-4xl mt-24">
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Busca Avançada no Google
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Use o widget oficial do Google para encontrar cifras em toda a web
          </p>
        </div>

        {/* Google CSE Toggle */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowGoogleCSE(!showGoogleCSE)}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl border-0 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
                d={showGoogleCSE ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
            <span>{showGoogleCSE ? "Ocultar" : "Mostrar"} Widget de Busca</span>{" "}
          </button>
        </div>

        {/* Google CSE Widget */}
        {showGoogleCSE && (
          <div className="mt-12 transform transition-all duration-500 ease-out">
            <GoogleCSEWidget showGoogleCSE={showGoogleCSE} />
          </div>
        )}
      </div>
      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
