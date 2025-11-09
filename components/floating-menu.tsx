"use client";

import {
  Home,
  HelpCircle,
  Settings,
  ChevronLeft,
  ChevronRight,
  User,
  Music,
  Moon,
  Sun,
} from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useHighlightSettings } from "@/lib/highlight-context";
import { useChords } from "@/lib/chords-context";
import { useTheme } from "@/lib/theme-context";

export default function FloatingMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const {
    tabHighlightEnabled,
    parteHighlightEnabled,
    bracketHighlightEnabled,
    tabHideEnabled,
    parteHideEnabled,
    bracketHideEnabled,
    setTabHighlightEnabled,
    setParteHighlightEnabled,
    setBracketHighlightEnabled,
    setTabHideEnabled,
    setParteHideEnabled,
    setBracketHideEnabled,
  } = useHighlightSettings();
  const { chordsContent } = useChords();
  const { theme, toggleTheme } = useTheme();
  const [songs, setSongs] = useState<string[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const [artist, setArtist] = useState<string>("");
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showChordsMenu, setShowChordsMenu] = useState(false);
  const [autoAdvanceEnabled, setAutoAdvanceEnabled] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("autoAdvanceEnabled") === "true";
    }
    return false;
  });
  const [autoAdvanceTime, setAutoAdvanceTime] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("autoAdvanceTime");
      return saved ? parseInt(saved) : 30;
    }
    return 30;
  });
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const settingsMenuRef = useRef<HTMLDivElement>(null);
  const chordsMenuRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  // Close settings menu when clicking outside
  useOnClickOutside(settingsMenuRef as React.RefObject<HTMLElement>, () => {
    setShowSettingsMenu(false);
  });
  // Close chords menu when clicking outside
  useOnClickOutside(chordsMenuRef as React.RefObject<HTMLElement>, () => {
    setShowChordsMenu(false);
  });

  useEffect(() => {
    // Extract artist and song info from pathname
    const pathParts = pathname.split("/");
    if (pathParts[1] === "artists" && pathParts[2]) {
      const artistName = pathParts[2];
      setArtist(artistName);

      // If we're on a specific song page (not just the artist page)
      if (pathParts[3]) {
        fetchArtistSongs(artistName, pathParts[3]);
      }
    }
  }, [pathname]);
  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem("autoAdvanceEnabled", autoAdvanceEnabled.toString());
  }, [autoAdvanceEnabled]);
  useEffect(() => {
    localStorage.setItem("autoAdvanceTime", autoAdvanceTime.toString());
  }, [autoAdvanceTime]);

  // Reset navigation state when page changes
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);
  const navigateToSong = useCallback(
    (direction: "prev" | "next") => {
      if (songs.length === 0 || currentSongIndex === -1) return;

      let newIndex;
      if (direction === "prev") {
        newIndex =
          currentSongIndex > 0 ? currentSongIndex - 1 : songs.length - 1;
      } else {
        newIndex =
          currentSongIndex < songs.length - 1 ? currentSongIndex + 1 : 0;
      }

      // Set global direction for transition
      globalThis.__songNavDirection = direction;

      const newSong = songs[newIndex];
      router.push(`/artists/${artist}/${newSong}`);
    },
    [songs, currentSongIndex, artist, router]
  );

  // Auto-advance timer effect
  useEffect(() => {
    if (
      autoAdvanceEnabled &&
      songs.length > 0 &&
      currentSongIndex !== -1 &&
      !isNavigating
    ) {
      setTimeRemaining(autoAdvanceTime);

      const countdown = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Set navigation state and stay at 0
            setIsNavigating(true);
            // Schedule navigation for next tick to avoid setState during render
            setTimeout(() => {
              navigateToSong("next");
            }, 0);
            return 0; // Stay at 0 during navigation
          }
          return prev - 1;
        });
      }, 1000);

      timerRef.current = countdown;
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      if (!autoAdvanceEnabled) {
        setTimeRemaining(0);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [
    autoAdvanceEnabled,
    autoAdvanceTime,
    songs.length,
    currentSongIndex,
    isNavigating,
    navigateToSong,
  ]);

  const fetchArtistSongs = async (artistName: string, currentSong: string) => {
    try {
      const response = await fetch(`/api/songs/${artistName}`);
      const data = await response.json();
      if (data.songs) {
        // data.songs is already an array of song slugs
        const songList = data.songs;
        setSongs(songList);
        const currentIndex = songList.indexOf(currentSong);
        setCurrentSongIndex(currentIndex);
      }
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  // Helper function to format time in mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // Helper function to format song titles
  const formatSongTitle = (songSlug: string) => {
    return songSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
  };

  // Get previous and next song info
  const getPrevNextInfo = () => {
    if (songs.length === 0 || currentSongIndex === -1) {
      return { prevSong: null, nextSong: null };
    }

    const prevIndex =
      currentSongIndex > 0 ? currentSongIndex - 1 : songs.length - 1;
    const nextIndex =
      currentSongIndex < songs.length - 1 ? currentSongIndex + 1 : 0;

    return {
      prevSong: songs[prevIndex] ? formatSongTitle(songs[prevIndex]) : null,
      nextSong: songs[nextIndex] ? formatSongTitle(songs[nextIndex]) : null,
    };
  };
  const handleTabChange = (index: number | null) => {
    if (index === null) return;

    if (isOnSongPage) {
      // Handle navigation tabs for song pages
      if (index === 0) {
        // Previous
        navigateToSong("prev");
      } else if (index === 1) {
        // Next
        navigateToSong("next");
      } else if (index === 3) {
        // Chords - toggle chords menu
        setShowChordsMenu(!showChordsMenu);
      } else if (index === 4) {
        // Artist page (after separator)
        router.push(`/artists/${artist}`);
      } else if (index === 5) {
        // Home
        router.push("/");
      } else if (index === 6) {
        // Settings - toggle settings menu
        setShowSettingsMenu(!showSettingsMenu);
      } else if (index === 7) {
        // Support - navigate to support page
        router.push("/support");
      }
    } else {
      // Handle navigation tabs for non-song pages (artist pages, etc.)
      if (index === 0) {
        // Home
        router.push("/");
      } else if (index === 1) {
        // Settings - toggle settings menu
        setShowSettingsMenu(!showSettingsMenu);
      }
    }
  };
  // Show navigation tabs only on song pages
  const isOnSongPage = pathname.split("/").length > 3;
  const { prevSong, nextSong } = getPrevNextInfo();
  const tabs = isOnSongPage
    ? [
        { title: "Previous", icon: ChevronLeft },
        { title: "Next", icon: ChevronRight },
        { type: "separator" as const },
        { title: "Chords", icon: Music },
        { title: "Artist", icon: User },
        { title: "Home", icon: Home },
        { title: "Settings", icon: Settings },
        { title: "Support", icon: HelpCircle },
      ]
    : [
        { title: "Home", icon: Home },
        { title: "Settings", icon: Settings },
      ];
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative flex flex-col items-center">
        {/* Chords Menu - appears above and aligned with chords tab */}
        {showChordsMenu && (
          <div
            ref={chordsMenuRef}
            className="absolute bottom-full mb-4 left-0 bg-background border rounded-2xl shadow-lg p-4 min-w-80 max-w-96 max-h-96 overflow-auto"
          >
            <div className="space-y-3">
              <div className="text-sm font-medium text-foreground mb-3">
                Chords
              </div>
              <div className="whitespace-pre-wrap font-mono text-sm text-foreground">
                {chordsContent || "No chords available for this song."}
              </div>
              <div className="border-t pt-2">
                <button
                  onClick={() => setShowChordsMenu(false)}
                  className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Settings Menu - appears above and aligned with settings tab */}
        {showSettingsMenu && (
          <div
            ref={settingsMenuRef}
            className="absolute bottom-full mb-4 right-0 bg-background border rounded-2xl shadow-lg p-4 min-w-64"
          >
            {" "}
            <div className="space-y-3">
              <div className="text-sm font-medium text-foreground mb-3">
                Settings
              </div>
              {/* Auto-advance controls - only show on song pages */}
              {isOnSongPage && (
                <div className="space-y-2 pb-3 border-b">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Auto-advance
                    </span>
                    <button
                      onClick={() => setAutoAdvanceEnabled(!autoAdvanceEnabled)}
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        autoAdvanceEnabled
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {autoAdvanceEnabled ? "ON" : "OFF"}
                    </button>
                  </div>

                  {autoAdvanceEnabled && (
                    <>
                      {" "}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          Time
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              setAutoAdvanceTime(
                                Math.max(5, autoAdvanceTime - 5)
                              )
                            }
                            className="w-6 h-6 rounded text-xs bg-muted hover:bg-muted/80 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="text-sm w-12 text-center font-mono">
                            {formatTime(autoAdvanceTime)}
                          </span>
                          <button
                            onClick={() =>
                              setAutoAdvanceTime(
                                Math.min(300, autoAdvanceTime + 5)
                              )
                            }
                            className="w-6 h-6 rounded text-xs bg-muted hover:bg-muted/80 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>{" "}
                      {autoAdvanceEnabled &&
                        (timeRemaining > 0 || isNavigating) && (
                          <div className="text-xs text-center text-muted-foreground font-mono">
                            Next song in: {formatTime(timeRemaining)}
                          </div>
                        )}{" "}
                    </>
                  )}
                </div>
              )}
              {/* Theme toggle */}
              <div className="space-y-2 pb-3 border-b">
                <div className="text-xs font-medium text-foreground mb-2">
                  Appearance
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-3 py-1 text-xs rounded-full transition-colors bg-muted hover:bg-muted/80"
                  >
                    {theme === "dark" ? (
                      <>
                        <Moon className="w-3 h-3" />
                        <span>Dark</span>
                      </>
                    ) : theme === "carlos" ? (
                      <>
                        <User className="w-3 h-3" />
                        <span>Carlos</span>
                      </>
                    ) : (
                      <>
                        <Sun className="w-3 h-3" />
                        <span>Light</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
              {/* Highlight controls */}
              <div className="space-y-2 pb-3 border-b">
                <div className="text-xs font-medium text-foreground mb-2">
                  Highlight Features
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Tab blocks
                  </span>
                  <button
                    onClick={() => setTabHighlightEnabled(!tabHighlightEnabled)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      tabHighlightEnabled
                        ? "bg-red-500 text-white"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {tabHighlightEnabled ? "ON" : "OFF"}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Parte sections
                  </span>
                  <button
                    onClick={() =>
                      setParteHighlightEnabled(!parteHighlightEnabled)
                    }
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      parteHighlightEnabled
                        ? "bg-blue-500 text-white"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {parteHighlightEnabled ? "ON" : "OFF"}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Bracket sections
                  </span>{" "}
                  <button
                    onClick={() =>
                      setBracketHighlightEnabled(!bracketHighlightEnabled)
                    }
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      bracketHighlightEnabled
                        ? "bg-green-500 text-white"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {bracketHighlightEnabled ? "ON" : "OFF"}
                  </button>
                </div>
              </div>

              {/* Hide controls */}
              <div className="space-y-2 pb-3 border-b">
                <div className="text-xs font-medium text-foreground mb-2">
                  Hide Lines
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Hide tab blocks
                  </span>
                  <button
                    onClick={() => setTabHideEnabled(!tabHideEnabled)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      tabHideEnabled
                        ? "bg-red-500 text-white"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {tabHideEnabled ? "ON" : "OFF"}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Hide parte sections
                  </span>
                  <button
                    onClick={() => setParteHideEnabled(!parteHideEnabled)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      parteHideEnabled
                        ? "bg-blue-500 text-white"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {parteHideEnabled ? "ON" : "OFF"}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Hide bracket sections
                  </span>
                  <button
                    onClick={() => setBracketHideEnabled(!bracketHideEnabled)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      bracketHideEnabled
                        ? "bg-green-500 text-white"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {bracketHideEnabled ? "ON" : "OFF"}
                  </button>
                </div>
              </div>
              <button
                onClick={() => {
                  router.push("/support");
                  setShowSettingsMenu(false);
                }}
                className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
              >
                Support & Help
              </button>
              <button
                onClick={() => {
                  router.push("/keyboard-shortcuts");
                  setShowSettingsMenu(false);
                }}
                className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
              >
                Keyboard Shortcuts
              </button>
              <button
                onClick={() => {
                  router.push("/test");
                  setShowSettingsMenu(false);
                }}
                className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
              >
                Test Page
              </button>
              <button
                onClick={() => {
                  router.push("/test-floating-menu");
                  setShowSettingsMenu(false);
                }}
                className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
              >
                Floating Menu Demo
              </button>
              <button
                onClick={() => {
                  router.push("/test-filter-menu");
                  setShowSettingsMenu(false);
                }}
                className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
              >
                Filter Menu Demo
              </button>
              <button
                onClick={() => {
                  router.push("/docs");
                  setShowSettingsMenu(false);
                }}
                className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
              >
                Documentation
              </button>
              <div className="border-t pt-2">
                <button
                  onClick={() => setShowSettingsMenu(false)}
                  className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <ExpandableTabs tabs={tabs} onChange={handleTabChange} />{" "}
        {isOnSongPage && (prevSong || nextSong) && (
          <div className="mt-2 text-xs text-muted-foreground text-center whitespace-nowrap">
            <div className="flex justify-between items-center gap-6 min-w-max">
              <div className="text-left flex-1">
                {prevSong && <span className="opacity-70">← {prevSong}</span>}
              </div>{" "}
              {/* Timer display in the center */}
              {autoAdvanceEnabled && (timeRemaining > 0 || isNavigating) && (
                <div className="text-center text-xs font-mono">
                  <span className="opacity-90">
                    {formatTime(timeRemaining)}
                  </span>
                </div>
              )}
              <div className="text-right flex-1">
                {nextSong && <span className="opacity-70">{nextSong} →</span>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
