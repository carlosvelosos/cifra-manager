"use client";

import ChordsPanel from "@/components/chords-panel";
import { useChords } from "@/lib/chords-context";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { showChordsPanel } = useChords();

  return (
    <div style={{ overflow: "hidden" }}>
      {/* Page content — CSS transition slides up when chords panel opens */}
      <div
        className={`chords-panel-transition${showChordsPanel ? " chords-panel-open" : ""}`}
        style={{ position: "relative", minHeight: "100vh" }}
      >
        <main>{children}</main>
      </div>

      {/* Chords panel — slides up from below */}
      <ChordsPanel />
    </div>
  );
}
