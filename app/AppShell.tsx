"use client";

import Sidebar from "@/components/ui/sidebar";
import ChordsPanel from "@/components/chords-panel";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useChords } from "@/lib/chords-context";

const PUSH_TRANSITION = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { showChordsPanel } = useChords();

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
          className="fixed top-4 left-4 z-50 p-3 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200"
          title="Open menu"
        >
          <Menu size={24} className="text-gray-700" />
        </button>
      )}

      {/* Page content — slides up when chords panel opens */}
      <motion.div
        className="relative min-h-screen"
        animate={{ y: showChordsPanel ? "-100vh" : "0" }}
        transition={PUSH_TRANSITION}
      >
        <main className="p-4">{children}</main>
      </motion.div>

      {/* Chords panel — slides up from below */}
      <ChordsPanel />
    </div>
  );
}
