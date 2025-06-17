"use client";

import Sidebar from "@/components/ui/sidebar";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isSidebarPinned, setIsSidebarPinned] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [songs, setSongs] = useState<string[]>([]);
  useEffect(() => {
    // Extract artist name from pathname
    const pathParts = pathname.split("/");
    if (pathParts.length >= 3 && pathParts[1] === "artists") {
      const artistName = pathParts[2];
      const isArtistMainPage = pathParts.length === 3;

      if (!isArtistMainPage) {
        // We're on a song page, fetch the songs for this artist
        fetch(`/api/songs/${artistName}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.songs) {
              setSongs(data.songs);
            }
          })
          .catch((error) => console.error("Failed to fetch songs:", error));
      } else {
        // We're on the artist main page, clear songs
        setSongs([]);
      }
    } else {
      // We're not on an artist page, clear songs
      setSongs([]);
    }
  }, [pathname]);
  const excludedPaths = ["/"];
  const isArtistMainPage = pathname.match(/^\/artists\/[^/]+$/) !== null;
  const showNavButtons =
    !excludedPaths.includes(pathname) && !isArtistMainPage && songs.length > 0;
  const handlePrevSong = () => {
    const currentSongSlug = pathname.split("/").pop() || "";
    const currentIndex = songs.indexOf(currentSongSlug);
    if (currentIndex > 0) {
      const pathParts = pathname.split("/");
      const artistName = pathParts[2]; // Extract artist name from /artists/[artist]/[song]
      router.push(`/artists/${artistName}/${songs[currentIndex - 1]}`);
    }
  };

  const handleNextSong = () => {
    const currentSongSlug = pathname.split("/").pop() || "";
    const currentIndex = songs.indexOf(currentSongSlug);
    if (currentIndex !== -1 && currentIndex < songs.length - 1) {
      const pathParts = pathname.split("/");
      const artistName = pathParts[2]; // Extract artist name from /artists/[artist]/[song]
      router.push(`/artists/${artistName}/${songs[currentIndex + 1]}`);
    }
  };

  return (
    <>
      <Sidebar
        isPinned={isSidebarPinned}
        onPinToggle={() => setIsSidebarPinned(!isSidebarPinned)}
      />{" "}
      <div
        className={`relative min-h-screen transition-all duration-300 ease-in-out ${
          isSidebarPinned ? "ml-64" : "ml-12"
        }`}
      >
        <main className={`${pathname === "/" ? "" : "p-4"}`}>{children}</main>
      </div>
    </>
  );
}
