"use client";

import { Home, Settings, User, Music } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useHighlightSettings } from "@/lib/highlight-context";
import { useChords } from "@/lib/chords-context";

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
  const { showChordsPanel, setShowChordsPanel } = useChords();
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const settingsMenuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(settingsMenuRef as React.RefObject<HTMLElement>, () => {
    setShowSettingsMenu(false);
  });

  // Extract artist slug from pathname for "Artist" navigation button
  const pathParts = pathname.split("/");
  const artist = pathParts[1] === "artists" && pathParts[2] ? pathParts[2] : "";

  // Show chords/artist/home tabs only on song pages (depth > 3)
  const isOnSongPage = pathParts.length > 3;

  const handleTabChange = (index: number | null) => {
    if (index === null) return;

    if (isOnSongPage) {
      // tabs: [Chords(0), separator(1), Artist(2), Home(3), Settings(4)]
      if (index === 0) {
        setShowChordsPanel(!showChordsPanel);
      } else if (index === 2) {
        router.push(`/artists/${artist}`);
      } else if (index === 3) {
        router.push("/");
      } else if (index === 4) {
        setShowSettingsMenu(!showSettingsMenu);
      }
    } else {
      // tabs: [Home(0), Settings(1)]
      if (index === 0) {
        router.push("/");
      } else if (index === 1) {
        setShowSettingsMenu(!showSettingsMenu);
      }
    }
  };

  const tabs = isOnSongPage
    ? [
        { title: "Chords", icon: Music },
        { type: "separator" as const },
        { title: "Artist", icon: User },
        { title: "Home", icon: Home },
        { title: "Settings", icon: Settings },
      ]
    : [
        { title: "Home", icon: Home },
        { title: "Settings", icon: Settings },
      ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative flex flex-col items-center">
        {/* Settings Menu */}
        {showSettingsMenu && (
          <div
            ref={settingsMenuRef}
            className="absolute bottom-full mb-4 right-0 bg-background border rounded-2xl shadow-lg p-4 min-w-64"
          >
            <div className="space-y-3">
              <div className="text-sm font-medium text-foreground mb-3">
                Settings
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
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${tabHighlightEnabled ? "bg-red-500 text-white" : "bg-muted text-muted-foreground"}`}
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
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${parteHighlightEnabled ? "bg-blue-500 text-white" : "bg-muted text-muted-foreground"}`}
                  >
                    {parteHighlightEnabled ? "ON" : "OFF"}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Bracket sections
                  </span>
                  <button
                    onClick={() =>
                      setBracketHighlightEnabled(!bracketHighlightEnabled)
                    }
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${bracketHighlightEnabled ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"}`}
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
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${tabHideEnabled ? "bg-red-500 text-white" : "bg-muted text-muted-foreground"}`}
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
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${parteHideEnabled ? "bg-blue-500 text-white" : "bg-muted text-muted-foreground"}`}
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
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${bracketHideEnabled ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"}`}
                  >
                    {bracketHideEnabled ? "ON" : "OFF"}
                  </button>
                </div>
              </div>

              <button
                onClick={() => setShowSettingsMenu(false)}
                className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
              >
                Close
              </button>
            </div>
          </div>
        )}
        <ExpandableTabs tabs={tabs} onChange={handleTabChange} />
      </div>
    </div>
  );
}
