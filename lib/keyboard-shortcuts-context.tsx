"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface KeyboardShortcutsContextType {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
  useCtrlModifier: boolean;
  setUseCtrlModifier: (useCtrl: boolean) => void;
  useAltModifier: boolean;
  setUseAltModifier: (useAlt: boolean) => void;
}

const KeyboardShortcutsContext = createContext<
  KeyboardShortcutsContextType | undefined
>(undefined);

export function KeyboardShortcutsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [enabled, setEnabledState] = useState(true);
  const [useCtrlModifier, setUseCtrlModifierState] = useState(true);
  const [useAltModifier, setUseAltModifierState] = useState(true);

  // Load settings from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedEnabled = localStorage.getItem("keyboardShortcutsEnabled");
      const savedCtrl = localStorage.getItem("keyboardShortcutsUseCtrl");
      const savedAlt = localStorage.getItem("keyboardShortcutsUseAlt");

      if (savedEnabled !== null) {
        setEnabledState(savedEnabled === "true");
      }
      if (savedCtrl !== null) {
        setUseCtrlModifierState(savedCtrl === "true");
      }
      if (savedAlt !== null) {
        setUseAltModifierState(savedAlt === "true");
      }
    }
  }, []);

  // Save settings to localStorage when they change
  const setEnabled = (value: boolean) => {
    setEnabledState(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("keyboardShortcutsEnabled", value.toString());
    }
  };

  const setUseCtrlModifier = (value: boolean) => {
    setUseCtrlModifierState(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("keyboardShortcutsUseCtrl", value.toString());
    }
  };

  const setUseAltModifier = (value: boolean) => {
    setUseAltModifierState(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("keyboardShortcutsUseAlt", value.toString());
    }
  };

  return (
    <KeyboardShortcutsContext.Provider
      value={{
        enabled,
        setEnabled,
        useCtrlModifier,
        setUseCtrlModifier,
        useAltModifier,
        setUseAltModifier,
      }}
    >
      {children}
    </KeyboardShortcutsContext.Provider>
  );
}

export function useKeyboardShortcutsSettings() {
  const context = useContext(KeyboardShortcutsContext);
  if (context === undefined) {
    throw new Error(
      "useKeyboardShortcutsSettings must be used within a KeyboardShortcutsProvider"
    );
  }
  return context;
}
