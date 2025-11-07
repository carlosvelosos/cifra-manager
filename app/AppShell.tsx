"use client";

import Sidebar from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
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

      <div className="relative min-h-screen">
        <main className="p-4">{children}</main>
      </div>
    </>
  );
}
