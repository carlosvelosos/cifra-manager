"use client";

import Sidebar from "@/components/ui/sidebar";
import { useState } from "react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isSidebarPinned, setIsSidebarPinned] = useState(false);

  return (
    <>
      <Sidebar
        isPinned={isSidebarPinned}
        onPinToggle={() => setIsSidebarPinned(!isSidebarPinned)}
      />{" "}
      <div
        className={`relative min-h-screen transition-all duration-300 ease-in-out ${
          isSidebarPinned ? "ml-64" : "ml-12"
        }`}
      >
        <main className="p-4">{children}</main>
      </div>
    </>
  );
}
