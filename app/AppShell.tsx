"use client";

import ChordsPanel from "@/components/chords-panel";
import { useChords } from "@/lib/chords-context";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { showChordsPanel } = useChords();

  return (
    <div className="overflow-hidden">
      {/* Page content — CSS transition slides up when chords panel opens */}
      <div
        className={`relative min-h-screen chords-panel-transition${showChordsPanel ? " chords-panel-open" : ""}`}
      >
        <main className="p-4">{children}</main>
      </div>

      {/* Chords panel — slides up from below */}
      <ChordsPanel />
    </div>
  );
}
