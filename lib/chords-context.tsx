"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ChordsContextType {
  chordsContent: string;
  setChordsContent: (content: string) => void;
}

const ChordsContext = createContext<ChordsContextType | undefined>(undefined);

export function ChordsProvider({ children }: { children: ReactNode }) {
  const [chordsContent, setChordsContent] = useState("");

  return (
    <ChordsContext.Provider value={{ chordsContent, setChordsContent }}>
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
