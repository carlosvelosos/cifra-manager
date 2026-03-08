"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useHighlightSettings } from "@/lib/highlight-context";
import { useChords } from "@/lib/chords-context";
import type { CifraStructure, CifraPreferences } from "@/lib/types/cifra-types";
import { TraditionalRenderer } from "@/components/renderers/traditional-renderer";
import KeyboardNavigationIndicator from "@/components/keyboard-navigation-indicator";
import {
  getChordPositionsForMultiple,
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

  const { setChordsContent, setChordsWithPositions } = useChords();

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

    // Load chord positions from guitar.json
    const chordsWithPositions = getChordPositionsForMultiple(chordNames);

    console.log(
      `🎸 Song Chords Debug - Loaded positions for ${chordsWithPositions.length} chord(s):`,
    );
    chordsWithPositions.forEach((chord) => {
      console.log(
        `  • ${chord.name}: ${chord.positions.length} position(s) found`,
      );
    });

    setChordsWithPositions(chordsWithPositions);

    const formattedChords = chordsWithPositions
      .map((chord) => formatChordPositions(chord))
      .join("\n\n");
    setChordsContent(formattedChords);
  }, [cifraData, setChordsContent, setChordsWithPositions]);

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
  const headerChordNames: string[] =
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

  return (
    <div className="container mx-auto p-0 min-h-screen flex flex-col">
      <Card className="flex flex-col overflow-hidden shadow-none border-none bg-transparent">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {headerChordNames.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {headerChordNames.map((name) => (
                <span
                  key={name}
                  className="inline-block px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold"
                >
                  {name}
                </span>
              ))}
            </div>
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
