"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface HighlightSettings {
  tabHighlightEnabled: boolean;
  parteHighlightEnabled: boolean;
  bracketHighlightEnabled: boolean;
  tabHideEnabled: boolean;
  parteHideEnabled: boolean;
  bracketHideEnabled: boolean;
  mounted: boolean;
  setTabHighlightEnabled: (enabled: boolean) => void;
  setParteHighlightEnabled: (enabled: boolean) => void;
  setBracketHighlightEnabled: (enabled: boolean) => void;
  setTabHideEnabled: (enabled: boolean) => void;
  setParteHideEnabled: (enabled: boolean) => void;
  setBracketHideEnabled: (enabled: boolean) => void;
}

const HighlightContext = createContext<HighlightSettings | undefined>(
  undefined
);

export function HighlightProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Initialize with default values that match server-side rendering
  const [tabHighlightEnabled, setTabHighlightEnabled] = useState(true);
  const [parteHighlightEnabled, setParteHighlightEnabled] = useState(true);
  const [bracketHighlightEnabled, setBracketHighlightEnabled] = useState(true);
  const [tabHideEnabled, setTabHideEnabled] = useState(false);
  const [parteHideEnabled, setParteHideEnabled] = useState(false);
  const [bracketHideEnabled, setBracketHideEnabled] = useState(false);

  // Load values from localStorage after mounting
  useEffect(() => {
    setMounted(true);

    // Load highlight settings
    const tabHighlight = localStorage.getItem("tabHighlightEnabled");
    if (tabHighlight !== null) {
      setTabHighlightEnabled(tabHighlight !== "false");
    }

    const parteHighlight = localStorage.getItem("parteHighlightEnabled");
    if (parteHighlight !== null) {
      setParteHighlightEnabled(parteHighlight !== "false");
    }

    const bracketHighlight = localStorage.getItem("bracketHighlightEnabled");
    if (bracketHighlight !== null) {
      setBracketHighlightEnabled(bracketHighlight !== "false");
    }

    // Load hide settings
    const tabHide = localStorage.getItem("tabHideEnabled");
    if (tabHide !== null) {
      setTabHideEnabled(tabHide === "true");
    }

    const parteHide = localStorage.getItem("parteHideEnabled");
    if (parteHide !== null) {
      setParteHideEnabled(parteHide === "true");
    }

    const bracketHide = localStorage.getItem("bracketHideEnabled");
    if (bracketHide !== null) {
      setBracketHideEnabled(bracketHide === "true");
    }
  }, []);
  // Save to localStorage (only after mounting to avoid hydration issues)
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(
        "tabHighlightEnabled",
        tabHighlightEnabled.toString()
      );
    }
  }, [tabHighlightEnabled, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(
        "parteHighlightEnabled",
        parteHighlightEnabled.toString()
      );
    }
  }, [parteHighlightEnabled, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(
        "bracketHighlightEnabled",
        bracketHighlightEnabled.toString()
      );
    }
  }, [bracketHighlightEnabled, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("tabHideEnabled", tabHideEnabled.toString());
    }
  }, [tabHideEnabled, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("parteHideEnabled", parteHideEnabled.toString());
    }
  }, [parteHideEnabled, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("bracketHideEnabled", bracketHideEnabled.toString());
    }
  }, [bracketHideEnabled, mounted]);
  return (
    <HighlightContext.Provider
      value={{
        tabHighlightEnabled,
        parteHighlightEnabled,
        bracketHighlightEnabled,
        tabHideEnabled,
        parteHideEnabled,
        bracketHideEnabled,
        mounted,
        setTabHighlightEnabled,
        setParteHighlightEnabled,
        setBracketHighlightEnabled,
        setTabHideEnabled,
        setParteHideEnabled,
        setBracketHideEnabled,
      }}
    >
      {children}
    </HighlightContext.Provider>
  );
}

export function useHighlightSettings() {
  const context = useContext(HighlightContext);
  if (context === undefined) {
    throw new Error(
      "useHighlightSettings must be used within a HighlightProvider"
    );
  }
  return context;
}
