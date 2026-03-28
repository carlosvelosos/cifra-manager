"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useChords } from "@/lib/chords-context";
import { formatChordPosition } from "@/lib/chord-position-loader";

export default function ChordsPanel() {
  const {
    chordsWithPositions,
    missingChords,
    showChordsPanel,
    setShowChordsPanel,
  } = useChords();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to top every time the panel opens
  useEffect(() => {
    if (showChordsPanel) {
      scrollRef.current?.scrollTo({ top: 0 });
    }
  }, [showChordsPanel]);

  return (
    <div
      className={`chords-panel-slide${showChordsPanel ? " chords-panel-slide-open" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 40,
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        pointerEvents: showChordsPanel ? "auto" : "none",
      }}
    >
      {/* Sticky header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "12px",
          paddingBottom: "8px",
          paddingLeft: "16px",
          paddingRight: "16px",
          flexShrink: 0,
        }}
      >
        {/* Drag handle pill */}
        <div
          style={{
            width: "40px",
            height: "4px",
            borderRadius: "9999px",
            backgroundColor: "#d1d5db",
            marginBottom: "12px",
          }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{ fontSize: "1rem", fontWeight: "600", color: "#111827" }}
          >
            Chords
          </span>
          <button
            onClick={() => setShowChordsPanel(false)}
            aria-label="Close chords panel"
            style={{
              padding: "6px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              color: "#6b7280",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X style={{ width: "20px", height: "20px" }} />
          </button>
        </div>
      </div>

      {/* Scrollable body */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "16px",
          paddingBottom: "112px",
        }}
      >
        {chordsWithPositions.length > 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {chordsWithPositions.map((chord) => (
              <div
                key={chord.name}
                style={{
                  width: "50%",
                  marginBottom: "20px",
                  fontFamily: "monospace",
                  fontSize: "0.875rem",
                  boxSizing: "border-box",
                  paddingRight: "16px",
                }}
              >
                <div style={{ fontWeight: "600", color: "#111827" }}>
                  {chord.name}
                </div>
                {chord.resolvedAlias && (
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#6b7280",
                      marginBottom: "2px",
                    }}
                  >
                    ↪ alias of{" "}
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontWeight: "500",
                      }}
                    >
                      {chord.resolvedAlias}
                    </span>
                  </div>
                )}
                {chord.positions.length === 0 ? (
                  <div style={{ color: "#6b7280", paddingLeft: "12px" }}>
                    (no positions found)
                  </div>
                ) : (
                  chord.positions.map((pos, idx) => (
                    <div
                      key={idx}
                      style={{
                        color: "#111827",
                        paddingLeft: "12px",
                        lineHeight: "1.625",
                      }}
                    >
                      {idx + 1}. {formatChordPosition(pos)}
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>
        ) : (
          <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            No chords available for this song.
          </p>
        )}

        {/* Missing chords warning */}
        {missingChords.length > 0 && (
          <div
            style={{
              marginTop: "24px",
              paddingTop: "16px",
              borderTop: "1px solid #fde68a",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: "600",
                color: "#d97706",
                marginBottom: "8px",
              }}
            >
              ⚠️ Missing from guitar.json
            </p>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {missingChords.map((name) => (
                <span
                  key={name}
                  style={{
                    display: "inline-block",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    backgroundColor: "#fef3c7",
                    color: "#b45309",
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                    fontWeight: "600",
                    marginRight: "6px",
                    marginBottom: "6px",
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
            <p
              style={{
                fontSize: "0.75rem",
                color: "#6b7280",
                marginTop: "8px",
              }}
            >
              Add these to{" "}
              <code style={{ fontFamily: "monospace" }}>
                lib/chords/guitar.json
              </code>{" "}
              to see their fingering positions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
