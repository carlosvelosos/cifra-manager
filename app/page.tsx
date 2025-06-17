"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/hero-section";
import FloatingSearch from "@/components/floating-search";
import ArtistSongDisplay from "@/components/artist-song-display";
import Link from "next/link";
import { User, Music } from "lucide-react";

interface ArtistSongResult {
  url: string;
  content: string;
}

export default function HomePage() {
  const [showSearch, setShowSearch] = useState(false);
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [artistSongResult, setArtistSongResult] =
    useState<ArtistSongResult | null>(null);

  // Function to handle showing search and animating hero
  const handleShowSearch = () => {
    setHeroAnimated(true);
    setShowSearch(true);
  };

  // Function to handle hiding search and reverting hero
  const handleHideSearch = () => {
    setHeroAnimated(false);
    setShowSearch(false);
  };

  const handleArtistSongResult = (result: ArtistSongResult) => {
    console.log("🏠 [HOME PAGE] Received artist+song result:", result);
    setArtistSongResult(result);
  };

  const handleCloseResult = () => {
    console.log("🏠 [HOME PAGE] Closing artist+song result");
    setArtistSongResult(null);
  };
  return (
    <>
      <HeroSection
        isAnimated={heroAnimated}
        onShowSearch={handleShowSearch}
        onHideSearch={handleHideSearch}
      />
      <FloatingSearch
        show={showSearch}
        onArtistSongResult={handleArtistSongResult}
        onInteraction={handleShowSearch}
      />
      <ArtistSongDisplay
        result={artistSongResult}
        onClose={handleCloseResult}
      />

      {/* Quick Access Navigation */}
      {!artistSongResult && (
        <div className="fixed bottom-8 right-8 z-30">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Quick Access
            </h3>
            <div className="space-y-2">
              <Link
                href="/artists/revelacao"
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Grupo Revelação</span>
              </Link>
              <Link
                href="/artists/zeca-pagodinho"
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Zeca Pagodinho</span>
              </Link>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <Link
                  href="/docs"
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Music className="h-4 w-4" />
                  <span>Documentation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
