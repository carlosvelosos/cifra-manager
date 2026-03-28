"use client";

import Sidebar from "@/components/ui/sidebar";
import ChordsPanel from "@/components/chords-panel";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useChords } from "@/lib/chords-context";
import { useMouseActive } from "@/lib/use-mouse-active";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { showChordsPanel } = useChords();
  const isMouseActive = useMouseActive(2000);

  return (
    // overflow-hidden is required so the cifra slides off-screen cleanly
    <div className="overflow-hidden">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Floating menu button - only visible when sidebar is closed */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className={`fixed top-4 left-4 z-50 p-3 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 ${
            isMouseActive ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          title="Open menu"
        >
          <Menu size={24} className="text-gray-700" />
        </button>
      )}

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
