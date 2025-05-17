// filepath: c:\Users\carlo\GITHUB\cifra-manager\app\page.tsx
"use client";

import { useState } from "react";
import HeroSection from "@/components/hero-section";
import Sidebar from "@/components/ui/sidebar";

export default function HomePage() {
  const [isSidebarPinned, setIsSidebarPinned] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Sidebar
        isPinned={isSidebarPinned}
        onPinToggle={() => setIsSidebarPinned((prev) => !prev)}
      />
      <main className="flex flex-col flex-grow pl-4">
        {/* Ensure main is a flex container and grows */}
        {/* Added pl-4 to prevent content from overlapping with the initial hover area of sidebar */}
        <HeroSection />
      </main>
    </div>
  );
}
