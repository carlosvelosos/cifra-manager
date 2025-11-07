"use client";

import Sidebar from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isSidebarPinned, setIsSidebarPinned] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar
        isPinned={isSidebarPinned}
        onPinToggle={() => setIsSidebarPinned(!isSidebarPinned)}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Floating menu button - only visible when sidebar is not pinned */}
      {!isSidebarPinned && !isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 p-3 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200"
          title="Open menu"
        >
          <Menu size={24} className="text-gray-700" />
        </button>
      )}

      <div
        className={`relative min-h-screen transition-all duration-300 ease-in-out ${
          isSidebarPinned ? "ml-64" : "ml-0"
        }`}
      >
        <main className="p-4">{children}</main>
      </div>
    </>
  );
}
