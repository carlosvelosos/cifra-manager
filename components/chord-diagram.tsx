"use client";

import React, { useMemo } from "react";
import {
  ChordPosition,
  generateChordSVG,
  ChordDiagramConfig,
} from "@/lib/chord-diagram-renderer";

interface ChordDiagramProps {
  position: ChordPosition;
  chordName: string;
  config?: Partial<ChordDiagramConfig>;
  className?: string;
}

export function ChordDiagram({
  position,
  chordName,
  config = {},
  className = "",
}: ChordDiagramProps) {
  const svgString = useMemo(
    () => generateChordSVG(position, config),
    [position, config]
  );

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div
        className="w-full aspect-square bg-white border border-gray-200 rounded-lg p-2 flex items-center justify-center"
        dangerouslySetInnerHTML={{ __html: svgString }}
      />
      <p className="text-xs text-gray-500 text-center">{chordName}</p>
    </div>
  );
}
