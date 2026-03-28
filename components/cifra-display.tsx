"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHighlightSettings } from "@/lib/highlight-context";
import { useChords } from "@/lib/chords-context";
import type { CifraStructure, CifraPreferences } from "@/lib/types/cifra-types";
import { TraditionalRenderer } from "@/components/renderers/traditional-renderer";
import {
  getChordPositionsWithMissing,
  formatChordPositions,
} from "@/lib/chord-position-loader";
import { extractUniqueChords } from "@/lib/parsers/cifra-html-parser";
import { artistsData } from "@/lib/artists-data";

interface CifraDisplayProps {
  title: string;
  cifraData: CifraStructure;
}

export default function CifraDisplay({ title, cifraData }: CifraDisplayProps) {
  const pathname = usePathname();

  // Resolve prev/next song from artistsData
  const getNeighbors = () => {
    const parts = pathname.split("/");
    if (parts.length < 4 || parts[1] !== "artists")
      return { prev: null, next: null };
    const artistSlug = parts[2];
    const songSlug = parts[3];
    const artist = artistsData.find((a) => a.id === artistSlug);
    if (!artist) return { prev: null, next: null };
    const idx = artist.songs.findIndex((s) => s.href.endsWith("/" + songSlug));
    if (idx === -1) return { prev: null, next: null };
    return {
      prev: idx > 0 ? artist.songs[idx - 1].href : null,
      next: idx < artist.songs.length - 1 ? artist.songs[idx + 1].href : null,
    };
  };

  const { prev, next } = getNeighbors();
  // Get highlight settings from context
  const {
    tabHighlightEnabled,
    parteHighlightEnabled,
    bracketHighlightEnabled,
    tabHideEnabled,
    bracketHideEnabled,
    mounted,
  } = useHighlightSettings();

  const { setChordsContent, setChordsWithPositions, setMissingChords } =
    useChords();

  // Set chords content in context when component mounts or cifraData changes
  React.useEffect(() => {
    if (!cifraData) return;

    // Primary: use chord definitions from the --- Acordes --- section
    let chordNames = cifraData.chords.map((chord) => chord.name);

    // Fallback: extract unique chords from <b> tags in the raw HTML sections
    // (handles songs where the Acordes section was missing or empty)
    if (chordNames.length === 0) {
      const rawHtml = cifraData.sections
        .flatMap((s) => s.content)
        .map((b) => {
          if (b.type === "lyrics") {
            const block = b.data as {
              lines: Array<{ text: string; chords: Array<{ chord: string }> }>;
            };
            return block.lines
              .flatMap((l) => l.chords.map((c) => `<b>${c.chord}</b>`))
              .join(" ");
          }
          return "";
        })
        .join("\n");
      chordNames = extractUniqueChords(rawHtml);
      console.log(
        `🎸 Song Chords Debug - Fallback extraction found ${chordNames.length} chord(s):`,
        chordNames,
      );
    } else {
      console.log(
        `🎸 Song Chords Debug - Found ${chordNames.length} unique chord(s):`,
        chordNames,
      );
    }

    // Load chord positions from guitar.json, tracking which names are missing
    const { found: chordsWithPositions, missing: missingChordNames } =
      getChordPositionsWithMissing(chordNames);

    console.log(
      `🎸 Song Chords Debug - Loaded positions for ${chordsWithPositions.length} chord(s), ${missingChordNames.length} missing:`,
    );
    chordsWithPositions.forEach((chord) => {
      console.log(
        `  • ${chord.name}: ${chord.positions.length} position(s) found`,
      );
    });
    if (missingChordNames.length > 0) {
      console.warn(`  ⚠️ Not found in guitar.json:`, missingChordNames);
    }

    setChordsWithPositions(chordsWithPositions);
    setMissingChords(missingChordNames);

    const formattedChords = chordsWithPositions
      .map((chord) => formatChordPositions(chord))
      .join("\n\n");

    const missingBlock =
      missingChordNames.length > 0
        ? `\n\n──────────────────────\n⚠️ Missing from guitar.json:\n${missingChordNames.map((n) => `  ${n}`).join("\n")}`
        : "";

    setChordsContent(formattedChords + missingBlock);
  }, [cifraData, setChordsContent, setChordsWithPositions, setMissingChords]);

  const preferences: CifraPreferences = {
    displayMode: "traditional",
    showTablatura: false,
    hideBracketSections: true,
    showChordDiagrams: false,
    transposeKey: 0,
    fontSize: "medium",
    highlightChords: true,
    tabHighlightEnabled: false,
    parteHighlightEnabled: false,
    bracketHighlightEnabled: false,
    autoScroll: false,
    autoScrollSpeed: 50,
  };

  // Derive chord names for the header from cifraData (mirrors useEffect logic)
  const allHeaderChordNames: string[] =
    cifraData.chords.length > 0
      ? cifraData.chords.map((c) => c.name)
      : extractUniqueChords(
          cifraData.sections
            .flatMap((s) => s.content)
            .map((b) => {
              if (b.type === "lyrics") {
                const block = b.data as {
                  lines: Array<{ chords: Array<{ chord: string }> }>;
                };
                return block.lines
                  .flatMap((l) => l.chords.map((c) => `<b>${c.chord}</b>`))
                  .join(" ");
              }
              return "";
            })
            .join("\n"),
        );

  // Split into found (blue) vs missing from guitar.json (amber)
  const { found: headerFound, missing: headerMissing } =
    getChordPositionsWithMissing(allHeaderChordNames);
  const headerFoundSet = new Set(headerFound.map((c) => c.name));
  // Map name → resolvedAlias for tooltip/styling on alias-resolved chords
  const headerAliasMap = new Map(
    headerFound
      .filter((c) => c.resolvedAlias)
      .map((c) => [c.name, c.resolvedAlias!]),
  );

  return (
    <div style={{ width: "100%", padding: 0, minHeight: "100vh" }}>
      <div style={{ padding: "1rem 1rem 0.5rem" }}>
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </h2>
        {allHeaderChordNames.length > 0 && (
          <div
            style={{ display: "flex", flexWrap: "wrap", marginTop: "0.25rem" }}
          >
            {allHeaderChordNames.map((name) => {
              if (!headerFoundSet.has(name)) {
                return (
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
                      marginRight: "4px",
                      marginBottom: "4px",
                    }}
                    title="Not found in guitar.json"
                  >
                    ⚠ {name}
                  </span>
                );
              }
              const alias = headerAliasMap.get(name);
              return (
                <span
                  key={name}
                  style={{
                    display: "inline-block",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    backgroundColor: "#dbeafe",
                    color: "#1d4ed8",
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                    fontWeight: "600",
                    fontStyle: alias ? "italic" : "normal",
                    border: alias ? "1px solid #93c5fd" : "none",
                    marginRight: "4px",
                    marginBottom: "4px",
                  }}
                  title={alias ? `Alias of "${alias}"` : undefined}
                >
                  {name}
                </span>
              );
            })}
          </div>
        )}
        {headerMissing.length > 0 && (
          <p
            style={{
              fontSize: "0.75rem",
              color: "#d97706",
              marginTop: "0.25rem",
            }}
          >
            {headerMissing.length} chord{headerMissing.length > 1 ? "s" : ""}{" "}
            missing from guitar.json
          </p>
        )}
      </div>
      <div style={{ padding: "0.5rem 1rem 5rem" }}>
        <TraditionalRenderer cifra={cifraData} preferences={preferences} />
      </div>

      {/* Fixed left/right tap zones for song navigation */}
      {prev && (
        <Link
          href={prev}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "14%",
            height: "100%",
            zIndex: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "4px",
            textDecoration: "none",
          }}
        >
          <span style={{ fontSize: "1.5rem", color: "rgba(0,0,0,0.15)" }}>
            ‹
          </span>
        </Link>
      )}
      {next && (
        <Link
          href={next}
          style={{
            position: "fixed",
            right: 0,
            top: 0,
            width: "14%",
            height: "100%",
            zIndex: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: "4px",
            textDecoration: "none",
          }}
        >
          <span style={{ fontSize: "1.5rem", color: "rgba(0,0,0,0.15)" }}>
            ›
          </span>
        </Link>
      )}
    </div>
  );
}
