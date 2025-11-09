"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useKeyboardShortcutsSettings } from "@/lib/keyboard-shortcuts-context";

export interface GlobalSong {
  artistId: string;
  artistName: string;
  songSlug: string;
  songTitle: string;
  href: string;
  globalIndex: number;
}

interface NavigationInfo {
  currentSong: GlobalSong | null;
  nextSong: GlobalSong | null;
  prevSong: GlobalSong | null;
  currentIndex: number;
  totalSongs: number;
  canNavigateNext: boolean;
  canNavigatePrev: boolean;
  isActive: boolean;
}

export function useKeyboardNavigation(): NavigationInfo {
  const [globalSongs, setGlobalSongs] = useState<GlobalSong[]>([]);
  const [isModifierHeld, setIsModifierHeld] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { enabled, useCtrlModifier, useAltModifier } =
    useKeyboardShortcutsSettings();

  // Fetch global songs list on mount
  useEffect(() => {
    console.log("🎹 Fetching global songs list for keyboard navigation");
    fetch("/api/songs/global")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API returned ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.songs && Array.isArray(data.songs)) {
          console.log(`✅ Loaded ${data.totalCount} songs for navigation`);
          setGlobalSongs(data.songs);
        } else {
          console.error("❌ Invalid API response format:", data);
          setGlobalSongs([]);
        }
      })
      .catch((error) => {
        console.error("❌ Failed to load global songs:", error);
        setGlobalSongs([]);
      });
  }, []);

  // Find current song's global index based on pathname
  const currentIndex = useMemo(() => {
    if (!globalSongs || globalSongs.length === 0) {
      return -1;
    }
    const index = globalSongs.findIndex((song) => pathname === song.href);
    if (index !== -1) {
      console.log(
        `🎵 Current song: ${globalSongs[index].songTitle} (${index + 1}/${
          globalSongs.length
        })`
      );
    }
    return index;
  }, [pathname, globalSongs]);

  // Get current, next, and previous songs
  const currentSong = currentIndex !== -1 ? globalSongs[currentIndex] : null;
  const nextSong =
    currentIndex !== -1 && currentIndex < globalSongs.length - 1
      ? globalSongs[currentIndex + 1]
      : null;
  const prevSong = currentIndex > 0 ? globalSongs[currentIndex - 1] : null;

  // Navigation functions
  const navigateToPrevious = useCallback(() => {
    if (prevSong) {
      console.log(`⬅️ Navigating to previous: ${prevSong.songTitle}`);
      router.push(prevSong.href);
    } else {
      console.log("⬅️ Already at first song, cannot navigate previous");
    }
  }, [prevSong, router]);

  const navigateToNext = useCallback(() => {
    if (nextSong) {
      console.log(`➡️ Navigating to next: ${nextSong.songTitle}`);
      router.push(nextSong.href);
    } else {
      console.log("➡️ Already at last song, cannot navigate next");
    }
  }, [nextSong, router]);

  // Keyboard event handlers
  useEffect(() => {
    if (!enabled || currentIndex === -1) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // Check if required modifiers are held
      const ctrlHeld = e.ctrlKey || e.metaKey; // Support both Ctrl and Cmd (Mac)
      const altHeld = e.altKey;

      // Determine if navigation mode should be active
      const shouldActivate =
        (useCtrlModifier && ctrlHeld) || (useAltModifier && altHeld);

      if (shouldActivate) {
        if (!isModifierHeld) {
          setIsModifierHeld(true);
          console.log("⌨️ Navigation mode activated");
        }

        // Handle arrow key navigation
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          navigateToPrevious();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          navigateToNext();
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      // Deactivate navigation mode when modifiers are released
      const ctrlReleased = !e.ctrlKey && !e.metaKey;
      const altReleased = !e.altKey;

      if (
        (useCtrlModifier && ctrlReleased && e.key === "Control") ||
        (useAltModifier && altReleased && e.key === "Alt")
      ) {
        setIsModifierHeld(false);
        console.log("⌨️ Navigation mode deactivated");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    enabled,
    currentIndex,
    isModifierHeld,
    useCtrlModifier,
    useAltModifier,
    navigateToPrevious,
    navigateToNext,
  ]);

  return {
    currentSong,
    nextSong,
    prevSong,
    currentIndex,
    totalSongs: globalSongs.length,
    canNavigateNext: nextSong !== null,
    canNavigatePrev: prevSong !== null,
    isActive: isModifierHeld && enabled && currentIndex !== -1,
  };
}
