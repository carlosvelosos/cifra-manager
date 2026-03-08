"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import type { ChordWithPositions } from "./chord-position-loader";

interface ChordsContextType {
  chordsContent: string;
  setChordsContent: (content: string) => void;
  chordsWithPositions: ChordWithPositions[];
  setChordsWithPositions: (chords: ChordWithPositions[]) => void;
  missingChords: string[];
  setMissingChords: (chords: string[]) => void;
  showChordsPanel: boolean;
  setShowChordsPanel: (show: boolean) => void;
}

const ChordsContext = createContext<ChordsContextType | undefined>(undefined);

export function ChordsProvider({ children }: { children: ReactNode }) {
  const [chordsContent, setChordsContent] = useState("");
  const [chordsWithPositions, setChordsWithPositions] = useState<
    ChordWithPositions[]
  >([]);
  const [missingChords, setMissingChords] = useState<string[]>([]);
  const [showChordsPanel, setShowChordsPanel] = useState(false);

  return (
    <ChordsContext.Provider
      value={{
        chordsContent,
        setChordsContent,
        chordsWithPositions,
        setChordsWithPositions,
        missingChords,
        setMissingChords,
        showChordsPanel,
        setShowChordsPanel,
      }}
    >
      {children}
    </ChordsContext.Provider>
  );
}

export function useChords() {
  const context = useContext(ChordsContext);
  if (context === undefined) {
    throw new Error("useChords must be used within a ChordsProvider");
  }
  return context;
}
