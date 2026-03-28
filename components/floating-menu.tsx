"use client";

import { Home, Settings, User, Music } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useHighlightSettings } from "@/lib/highlight-context";
import { useChords } from "@/lib/chords-context";

export default function FloatingMenu() {
  const pathname = usePathname();
  const {
    tabHighlightEnabled,
    parteHighlightEnabled,
    bracketHighlightEnabled,
    tabHideEnabled,
    parteHideEnabled,
    bracketHideEnabled,
    setTabHighlightEnabled,
    setParteHighlightEnabled,
    setBracketHighlightEnabled,
    setTabHideEnabled,
    setParteHideEnabled,
    setBracketHideEnabled,
  } = useHighlightSettings();
  const { showChordsPanel, setShowChordsPanel } = useChords();
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const settingsMenuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(settingsMenuRef as React.RefObject<HTMLElement>, () => {
    setShowSettingsMenu(false);
  });

  const pathParts = pathname.split("/");
  const artist =
    pathParts[1] === "artists" && pathParts[2] ? pathParts[2] : "";
  const isOnSongPage = pathParts.length > 3;

  const iconBtn: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "40px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "transparent",
    cursor: "pointer",
    color: "#6b7280",
    padding: 0,
    textDecoration: "none",
  };

  const ToggleRow = ({
    label,
    on,
    toggle,
    color,
  }: {
    label: string;
    on: boolean;
    toggle: () => void;
    color: string;
  }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "8px",
      }}
    >
      <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>{label}</span>
      <button
        onClick={toggle}
        style={{
          padding: "2px 12px",
          fontSize: "0.75rem",
          borderRadius: "9999px",
          border: "none",
          cursor: "pointer",
          backgroundColor: on ? color : "#f3f4f6",
          color: on ? "#ffffff" : "#6b7280",
        }}
      >
        {on ? "ON" : "OFF"}
      </button>
    </div>
  );

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        WebkitTransform: "translateX(-50%)",
        transform: "translateX(-50%)",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Settings panel */}
      {showSettingsMenu && (
        <div
          ref={settingsMenuRef}
          style={{
            position: "absolute",
            bottom: "100%",
            right: 0,
            marginBottom: "16px",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
            padding: "16px",
            minWidth: "256px",
          }}
        >
          <div
            style={{
              fontSize: "0.875rem",
              fontWeight: "600",
              color: "#111827",
              marginBottom: "12px",
            }}
          >
            Settings
          </div>

          {/* Highlight section */}
          <div
            style={{
              borderBottom: "1px solid #e5e7eb",
              paddingBottom: "12px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "8px",
              }}
            >
              Highlight Features
            </div>
            <ToggleRow
              label="Tab blocks"
              on={tabHighlightEnabled}
              toggle={() => setTabHighlightEnabled(!tabHighlightEnabled)}
              color="#ef4444"
            />
            <ToggleRow
              label="Parte sections"
              on={parteHighlightEnabled}
              toggle={() => setParteHighlightEnabled(!parteHighlightEnabled)}
              color="#3b82f6"
            />
            <ToggleRow
              label="Bracket sections"
              on={bracketHighlightEnabled}
              toggle={() =>
                setBracketHighlightEnabled(!bracketHighlightEnabled)
              }
              color="#22c55e"
            />
          </div>

          {/* Hide section */}
          <div
            style={{
              borderBottom: "1px solid #e5e7eb",
              paddingBottom: "12px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "8px",
              }}
            >
              Hide Lines
            </div>
            <ToggleRow
              label="Hide tab blocks"
              on={tabHideEnabled}
              toggle={() => setTabHideEnabled(!tabHideEnabled)}
              color="#ef4444"
            />
            <ToggleRow
              label="Hide parte sections"
              on={parteHideEnabled}
              toggle={() => setParteHideEnabled(!parteHideEnabled)}
              color="#3b82f6"
            />
            <ToggleRow
              label="Hide bracket sections"
              on={bracketHideEnabled}
              toggle={() => setBracketHideEnabled(!bracketHideEnabled)}
              color="#22c55e"
            />
          </div>

          <button
            onClick={() => setShowSettingsMenu(false)}
            style={{
              width: "100%",
              textAlign: "left",
              fontSize: "0.875rem",
              color: "#6b7280",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* Tab bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          padding: "4px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {isOnSongPage && (
          <>
            <button
              onClick={() => setShowChordsPanel(!showChordsPanel)}
              style={iconBtn}
              aria-label="Toggle chords panel"
            >
              <Music size={20} />
            </button>
            <div
              style={{
                width: "1px",
                height: "24px",
                backgroundColor: "#e5e7eb",
                marginLeft: "2px",
                marginRight: "2px",
              }}
              aria-hidden="true"
            />
            <Link
              href={`/artists/${artist}`}
              style={iconBtn}
              aria-label="Go to artist page"
            >
              <User size={20} />
            </Link>
          </>
        )}
        <Link href="/" style={iconBtn} aria-label="Go to home page">
          <Home size={20} />
        </Link>
        <button
          onClick={() => setShowSettingsMenu(!showSettingsMenu)}
          style={iconBtn}
          aria-label="Toggle settings menu"
        >
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
}