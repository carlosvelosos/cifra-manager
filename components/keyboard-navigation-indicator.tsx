"use client";

import { useKeyboardNavigation } from "@/lib/hooks/use-keyboard-navigation";
import { useKeyboardShortcutsSettings } from "@/lib/keyboard-shortcuts-context";
import { ArrowLeft, ArrowRight, Music, User, Keyboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function KeyboardNavigationIndicator() {
  const {
    isActive,
    currentSong,
    nextSong,
    prevSong,
    currentIndex,
    totalSongs,
    canNavigateNext,
    canNavigatePrev,
  } = useKeyboardNavigation();

  const { useCtrlModifier, useAltModifier } = useKeyboardShortcutsSettings();

  // Build modifier key text
  const modifierText = [];
  if (useCtrlModifier) modifierText.push("Ctrl");
  if (useAltModifier) modifierText.push("Alt");
  const modifierString = modifierText.join(" or ");

  if (!isActive || !currentSong) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-2xl border-2 border-blue-400/50 backdrop-blur-sm">
          {/* Header */}
          <div className="px-6 py-3 border-b border-blue-400/30 bg-blue-800/30">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Keyboard className="w-5 h-5 animate-pulse" />
                <span className="font-semibold text-sm">
                  Navigation Mode Active
                </span>
              </div>
              <div className="text-xs bg-blue-800/50 px-3 py-1 rounded-full">
                {currentIndex + 1} / {totalSongs}
              </div>
            </div>
          </div>

          {/* Current Song Info */}
          <div className="px-6 py-4 bg-blue-700/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-800/50 rounded-lg">
                <Music className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold truncate">
                  {currentSong.songTitle}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-blue-200">
                  <User className="w-3 h-3" />
                  <span className="truncate">{currentSong.artistName}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Info */}
          <div className="px-6 py-4 border-t border-blue-400/30">
            <div className="grid grid-cols-2 gap-4">
              {/* Previous Song */}
              <div
                className={`flex items-center gap-2 ${
                  !canNavigatePrev ? "opacity-40" : ""
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    canNavigatePrev
                      ? "bg-blue-800/50"
                      : "bg-gray-700/30 cursor-not-allowed"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-blue-200 mb-0.5">Previous</div>
                  <div className="text-xs font-medium truncate">
                    {prevSong ? prevSong.songTitle : "None"}
                  </div>
                  {prevSong && (
                    <div className="text-xs text-blue-300 truncate">
                      {prevSong.artistName}
                    </div>
                  )}
                </div>
              </div>

              {/* Next Song */}
              <div
                className={`flex items-center gap-2 ${
                  !canNavigateNext ? "opacity-40" : ""
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    canNavigateNext
                      ? "bg-blue-800/50"
                      : "bg-gray-700/30 cursor-not-allowed"
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-blue-200 mb-0.5">Next</div>
                  <div className="text-xs font-medium truncate">
                    {nextSong ? nextSong.songTitle : "None"}
                  </div>
                  {nextSong && (
                    <div className="text-xs text-blue-300 truncate">
                      {nextSong.artistName}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Instructions */}
          <div className="px-6 py-2.5 bg-blue-800/40 border-t border-blue-400/30 rounded-b-xl">
            <div className="flex items-center justify-center gap-4 text-xs text-blue-200">
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-0.5 bg-blue-900/50 rounded border border-blue-400/30">
                  {modifierString}
                </kbd>
                +
                <kbd className="px-2 py-0.5 bg-blue-900/50 rounded border border-blue-400/30">
                  ← →
                </kbd>
                Navigate
              </span>
              <span className="text-blue-300">•</span>
              <span>Release {modifierString} to exit</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
