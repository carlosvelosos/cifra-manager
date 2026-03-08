"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useHighlightSettings } from "@/lib/highlight-context";
import { useChords } from "@/lib/chords-context";
import type { CifraStructure, CifraPreferences } from "@/lib/types/cifra-types";
import { TraditionalRenderer } from "@/components/renderers/traditional-renderer";
import KeyboardNavigationIndicator from "@/components/keyboard-navigation-indicator";
import {
  getChordPositionsWithMissing,
  formatChordPositions,
} from "@/lib/chord-position-loader";
import { extractUniqueChords } from "@/lib/parsers/cifra-html-parser";

interface CifraDisplayProps {
  title: string;
  cifraData: CifraStructure;
}

export default function CifraDisplay({ title, cifraData }: CifraDisplayProps) {
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
    showTablatura: mounted ? !tabHideEnabled : true,
    hideBracketSections: mounted ? bracketHideEnabled : false,
    showChordDiagrams: false,
    transposeKey: 0,
    fontSize: "medium",
    highlightChords: true,
    tabHighlightEnabled: mounted ? tabHighlightEnabled : true,
    parteHighlightEnabled: mounted ? parteHighlightEnabled : true,
    bracketHighlightEnabled: mounted ? bracketHighlightEnabled : true,
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

  return (
    <div className="container mx-auto p-0 min-h-screen flex flex-col">
      <Card className="flex flex-col overflow-hidden shadow-none border-none bg-transparent">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {allHeaderChordNames.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {allHeaderChordNames.map((name) =>
                headerFoundSet.has(name) ? (
                  <span
                    key={name}
                    className="inline-block px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold"
                  >
                    {name}
                  </span>
                ) : (
                  <span
                    key={name}
                    className="inline-block px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs font-mono font-semibold"
                    title="Not found in guitar.json"
                  >
                    ⚠ {name}
                  </span>
                ),
              )}
            </div>
          )}
          {headerMissing.length > 0 && (
            <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
              {headerMissing.length} chord{headerMissing.length > 1 ? "s" : ""}{" "}
              missing from guitar.json
            </p>
          )}
        </CardHeader>
        <CardContent className="flex-grow flex flex-col overflow-auto">
          <TraditionalRenderer cifra={cifraData} preferences={preferences} />
        </CardContent>
      </Card>
      <KeyboardNavigationIndicator />
    </div>
  );
}
