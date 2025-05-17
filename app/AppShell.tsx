"use client";

import Sidebar from "@/components/ui/sidebar";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isSidebarPinned, setIsSidebarPinned] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [songs, setSongs] = useState<string[]>([]);

  useEffect(() => {
    if (
      pathname.startsWith("/zeca-pagodinho/") &&
      pathname !== "/zeca-pagodinho"
    ) {
      fetch("/api/songs/zeca-pagodinho")
        .then((res) => res.json())
        .then((data) => {
          if (data.songs) {
            setSongs(data.songs);
          }
        })
        .catch((error) => console.error("Failed to fetch songs:", error));
    }
  }, [pathname]);

  const excludedPaths = ["/", "/zeca-pagodinho"];
  const showNavButtons = !excludedPaths.includes(pathname) && songs.length > 0;

  const handlePrevSong = () => {
    const currentSongSlug = pathname.split("/").pop() || "";
    const currentIndex = songs.indexOf(currentSongSlug);
    if (currentIndex > 0) {
      router.push(`/zeca-pagodinho/${songs[currentIndex - 1]}`);
    }
  };

  const handleNextSong = () => {
    const currentSongSlug = pathname.split("/").pop() || "";
    const currentIndex = songs.indexOf(currentSongSlug);
    if (currentIndex !== -1 && currentIndex < songs.length - 1) {
      router.push(`/zeca-pagodinho/${songs[currentIndex + 1]}`);
    }
  };

  return (
    <>
      <Sidebar
        isPinned={isSidebarPinned}
        onPinToggle={() => setIsSidebarPinned(!isSidebarPinned)}
      />
      <div
        className={`relative min-h-screen transition-all duration-300 ease-in-out ${
          isSidebarPinned ? "ml-64" : "ml-4"
        }`}
      >
        {showNavButtons && (
          <>
            <button
              title="Previous Song"
              onClick={handlePrevSong}
              disabled={songs.indexOf(pathname.split("/").pop() || "") === 0}
              className="absolute left-0 top-0 h-full w-16 flex items-center justify-center text-white text-3xl font-bold bg-transparent hover:bg-neutral-800/75 opacity-0 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out z-10 cursor-pointer"
            >
              &lt;
            </button>
            <button
              title="Next Song"
              onClick={handleNextSong}
              disabled={
                songs.indexOf(pathname.split("/").pop() || "") ===
                songs.length - 1
              }
              className="absolute right-0 top-0 h-full w-16 flex items-center justify-center text-white text-3xl font-bold bg-transparent hover:bg-neutral-800/75 opacity-0 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out z-10 cursor-pointer"
            >
              &gt;
            </button>
          </>
        )}
        <main className={`p-4 ${showNavButtons ? "mx-16" : ""}`}>
          {children}
        </main>
      </div>
    </>
  );
}
