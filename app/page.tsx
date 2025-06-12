"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/hero-section";
import FloatingSearch from "@/components/floating-search";
import ArtistSongDisplay from "@/components/artist-song-display";

interface ArtistSongResult {
  url: string;
  content: string;
}

export default function HomePage() {
  const [showSearch, setShowSearch] = useState(false);
  const [artistSongResult, setArtistSongResult] =
    useState<ArtistSongResult | null>(null);

  useEffect(() => {
    const searchTimer = setTimeout(() => {
      setShowSearch(true);
    }, 2500); // 2.5 seconds - 0.5 second after opacity animation starts

    return () => {
      clearTimeout(searchTimer);
    };
  }, []);

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
      <HeroSection />
      <FloatingSearch
        show={showSearch}
        onArtistSongResult={handleArtistSongResult}
      />
      <ArtistSongDisplay
        result={artistSongResult}
        onClose={handleCloseResult}
      />
    </>
  );
}
