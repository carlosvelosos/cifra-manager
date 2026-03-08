"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useChords } from "@/lib/chords-context";

const SWIPE_CLOSE_THRESHOLD = 80; // px downward drag to dismiss
const TRANSITION = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

export default function ChordsPanel() {
  const { chordsContent, missingChords, showChordsPanel, setShowChordsPanel } =
    useChords();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to top every time the panel opens
  useEffect(() => {
    if (showChordsPanel) {
      scrollRef.current?.scrollTo({ top: 0 });
    }
  }, [showChordsPanel]);

  // Split chordsContent into the "found" block and strip the separator/warning
  // (the warning is re-rendered with proper styling below)
  const foundContent = chordsContent
    ? chordsContent.split(/\n*─+\n/)[0].trimEnd()
    : "";

  return (
    <AnimatePresence>
      {showChordsPanel && (
        <motion.div
          key="chords-panel"
          className="fixed inset-0 z-40 bg-background flex flex-col"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={TRANSITION}
          drag="y"
          dragConstraints={{ top: 0 }}
          dragElastic={{ top: 0, bottom: 0.2 }}
          onDragEnd={(_, info) => {
            if (info.offset.y > SWIPE_CLOSE_THRESHOLD) {
              setShowChordsPanel(false);
            }
          }}
        >
          {/* Sticky top bar */}
          <div className="sticky top-0 z-10 bg-background border-b flex flex-col items-center pt-3 pb-2 px-4 shrink-0 cursor-grab active:cursor-grabbing">
            {/* Drag handle pill */}
            <div className="w-10 h-1 rounded-full bg-muted-foreground/30 mb-3" />
            <div className="w-full flex items-center justify-between">
              <span className="text-base font-semibold text-foreground">
                Chords
              </span>
              <button
                onClick={() => setShowChordsPanel(false)}
                className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close chords panel"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Scrollable body */}
          <div ref={scrollRef} className="flex-1 overflow-auto p-4 pb-28">
            {foundContent ? (
              <div className="whitespace-pre-wrap font-mono text-sm text-foreground">
                {foundContent}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No chords available for this song.
              </p>
            )}

            {/* Missing chords warning */}
            {missingChords.length > 0 && (
              <div className="mt-6 pt-4 border-t border-amber-200 dark:border-amber-800">
                <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2">
                  ⚠️ Missing from guitar.json
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {missingChords.map((name) => (
                    <span
                      key={name}
                      className="inline-block px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs font-mono font-semibold"
                    >
                      {name}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Add these to{" "}
                  <code className="font-mono">lib/chords/guitar.json</code> to
                  see their fingering positions.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
