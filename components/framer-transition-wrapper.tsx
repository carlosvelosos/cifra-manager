"use client";

import React, { useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface FramerTransitionWrapperProps {
  children: React.ReactNode;
}

// Global variable to store navigation direction
declare global {
  var __songNavDirection: "next" | "prev" | null;
}

export default function FramerTransitionWrapper({
  children,
}: FramerTransitionWrapperProps) {
  const pathname = usePathname();
  const previousPathnameRef = useRef(pathname);
  const navigationDirectionRef = useRef<"next" | "prev" | null>(null);
  useEffect(() => {
    // Check if navigation direction was set
    if (globalThis.__songNavDirection) {
      navigationDirectionRef.current = globalThis.__songNavDirection;
    }
  }, [pathname]);
  // Determine animation direction based on navigation
  const variants = useMemo(() => {
    const direction =
      navigationDirectionRef.current || globalThis.__songNavDirection;

    if (direction === "next") {
      return {
        initial: { x: "100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "-100%", opacity: 0 },
      };
    } else if (direction === "prev") {
      return {
        initial: { x: "-100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "100%", opacity: 0 },
      };
    } else {
      // Default fade transition for non-directional navigation
      return {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.98 },
      };
    }
  }, [pathname]); // Re-compute when pathname changes
  // Only apply transitions on song pages
  const isSongPage = pathname.split("/").length > 3;

  useEffect(() => {
    // Clear direction after transition
    if (pathname !== previousPathnameRef.current) {
      setTimeout(() => {
        globalThis.__songNavDirection = null;
        navigationDirectionRef.current = null;
      }, 500);
    }
    previousPathnameRef.current = pathname;
  }, [pathname]);

  if (!isSongPage) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={variants.initial}
        animate={variants.animate}
        exit={variants.exit}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1], // Custom easing for smooth feel
        }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
