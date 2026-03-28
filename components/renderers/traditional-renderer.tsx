/**
 * Traditional Renderer - Renders cifra in classic separate-lines format
 *
 * This renderer maintains the traditional cifra club style where chords
 * appear on separate lines above/below lyrics, preserving original spacing.
 */

"use client";

import React from "react";
import type {
  CifraStructure,
  CifraPreferences,
  LyricsBlock as LyricsBlockType,
  TablaturaBlock as TablaturaBlockType,
  ChordProgressionBlock as ChordProgressionBlockType,
} from "@/lib/types/cifra-types";
import { useHighlightSettings } from "@/lib/highlight-context";

interface TraditionalRendererProps {
  cifra: CifraStructure;
  preferences: CifraPreferences;
}

interface RenderableLine {
  type:
    | "section-header"
    | "lyrics-line"
    | "tablatura"
    | "chord-progression"
    | "empty";
  content: React.ReactNode;
  key: string;
}

export function TraditionalRenderer({
  cifra,
  preferences,
}: TraditionalRendererProps) {
  const { parteHideEnabled } = useHighlightSettings();

  // Check if section name should be hidden — always hide all section headers
  const shouldHideSectionHeader = (_sectionName: string): boolean => {
    return true;
  };

  // Get highlight style for a section header
  const getSectionHeaderStyle = (sectionName: string): React.CSSProperties => {
    const isParte = /Parte\s+\d+\s+[Dd]e\s+\d+/i.test(sectionName);
    if (isParte && preferences.parteHighlightEnabled) {
      return {
        display: "block",
        backgroundColor: "#bfdbfe",
        borderLeft: "4px solid #3b82f6",
        padding: "2px 8px",
        fontWeight: "600",
        marginBottom: "8px",
      };
    }
    if (!isParte && preferences.bracketHighlightEnabled) {
      return {
        display: "block",
        backgroundColor: "#bbf7d0",
        borderLeft: "4px solid #22c55e",
        padding: "2px 8px",
        fontWeight: "500",
        marginBottom: "8px",
      };
    }
    return { color: "#16a34a", fontWeight: "600", marginBottom: "8px" };
  };

  // Flatten all content into individual renderable lines
  const allLines: RenderableLine[] = [];

  cifra.sections.forEach((section, sectionIdx) => {
    // Add section header if not hidden
    if (section.name && !shouldHideSectionHeader(section.name)) {
      allLines.push({
        type: "section-header",
        content: (
          <div style={getSectionHeaderStyle(section.name)}>
            [{section.name}]
          </div>
        ),
        key: `section-${sectionIdx}`,
      });
    }

    // Process each content block
    section.content.forEach((block, blockIdx) => {
      if (block.type === "lyrics") {
        const lyricsData = block.data as LyricsBlockType;
        lyricsData.lines.forEach((line, lineIdx) => {
          // Each lyrics line can produce 1-2 rendered lines (chords + text)
          const hasChords = line.chords && line.chords.length > 0;
          const hasText = line.text || line.chords.length === 0;

          if (hasChords) {
            // Chord line
            allLines.push({
              type: "lyrics-line",
              content: (
                <div
                  style={{
                    whiteSpace: "pre",
                    color: "#2563eb",
                    fontWeight: "600",
                  }}
                >
                  {renderChordsLine(line)}
                </div>
              ),
              key: `${sectionIdx}-${blockIdx}-${lineIdx}-chords`,
            });
          }

          if (hasText) {
            // Text line
            allLines.push({
              type: "lyrics-line",
              content: <div>{line.text || "\u00A0"}</div>,
              key: `${sectionIdx}-${blockIdx}-${lineIdx}-text`,
            });
          }
        });
      } else if (block.type === "tablatura" && preferences.showTablatura) {
        const tabData = block.data as TablaturaBlockType;
        // Count tablatura as: title(1) + chord(1) + lines + notation(1)
        const tabLineCount =
          (tabData.title ? 1 : 0) +
          (tabData.chord ? 1 : 0) +
          tabData.lines.length +
          (tabData.notation ? 1 : 0);

        // Add as single block but count its lines
        for (let i = 0; i < tabLineCount; i++) {
          allLines.push({
            type: "tablatura",
            content:
              i === 0 ? (
                <TablaturaBlock data={tabData} preferences={preferences} />
              ) : null,
            key: `${sectionIdx}-${blockIdx}-tab-${i}`,
          });
        }
      } else if (block.type === "chord-progression") {
        const progressionData = block.data as ChordProgressionBlockType;
        allLines.push({
          type: "chord-progression",
          content: (
            <ChordProgressionBlock
              data={progressionData}
              preferences={preferences}
            />
          ),
          key: `${sectionIdx}-${blockIdx}-progression`,
        });
      }
    });

    // Add spacing after section
    allLines.push({
      type: "empty",
      content: <div style={{ height: "1rem" }} />,
      key: `${sectionIdx}-spacer`,
    });
  });

  // Split lines into columns based on line count (like legacy implementation)
  const MAX_LINES_PER_COLUMN = 30;
  const numberOfLines = allLines.length;
  let columns: RenderableLine[][] = [];

  if (numberOfLines <= MAX_LINES_PER_COLUMN * 1.2) {
    // 1 column
    columns = [allLines];
  } else if (numberOfLines <= MAX_LINES_PER_COLUMN * 2.2) {
    // 2 columns
    const midpoint = Math.ceil(numberOfLines / 2);
    columns = [allLines.slice(0, midpoint), allLines.slice(midpoint)];
  } else if (numberOfLines <= MAX_LINES_PER_COLUMN * 3.2) {
    // 3 columns
    const linesPerCol = Math.ceil(numberOfLines / 3);
    columns = [
      allLines.slice(0, linesPerCol),
      allLines.slice(linesPerCol, 2 * linesPerCol),
      allLines.slice(2 * linesPerCol),
    ];
  } else {
    // 4 columns
    const linesPerCol = Math.ceil(numberOfLines / 4);
    columns = [
      allLines.slice(0, linesPerCol),
      allLines.slice(linesPerCol, 2 * linesPerCol),
      allLines.slice(2 * linesPerCol, 3 * linesPerCol),
      allLines.slice(3 * linesPerCol),
    ];
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
        columnGap: "2rem",
      }}
    >
      {columns.map((columnLines, colIdx) => (
        <div
          key={`col-${colIdx}`}
          style={{
            fontFamily: "monospace",
            fontSize: "0.875rem",
            overflow: "hidden",
            minWidth: 0,
          }}
        >
          {columnLines.map((line) => (
            <div key={line.key}>{line.content}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * Render chords positioned above lyrics text
 */
function renderChordsLine(line: {
  text: string;
  chords: Array<{ chord: string; bass?: string; position: number }>;
}): React.ReactNode {
  if (line.chords.length === 0) return null;

  // Build a string with chords at their positions
  let chordLine = "";

  // Sort chords by position
  const sortedChords = [...line.chords].sort((a, b) => a.position - b.position);

  for (let i = 0; i < sortedChords.length; i++) {
    const chord = sortedChords[i];
    const chordText = chord.bass ? `${chord.chord}/${chord.bass}` : chord.chord;

    // Add spaces up to chord position (accounting for chords already added)
    while (chordLine.length < chord.position) {
      chordLine += " ";
    }

    // If we're past the position due to a previous long chord, add a space
    if (chordLine.length > chord.position && i > 0) {
      chordLine += " ";
    }

    // Add the chord
    chordLine += chordText;
  }

  return chordLine || "\u00A0";
}

/**
 * Render tablatura block
 */
function TablaturaBlock({
  data,
  preferences,
}: {
  data: {
    title?: string;
    chord?: string;
    lines: string[];
    notation?: string;
  };
  preferences: CifraPreferences;
}) {
  const containerStyle: React.CSSProperties = preferences.tabHighlightEnabled
    ? {
        backgroundColor: "#fff1f2",
        borderLeft: "4px solid #ef4444",
        padding: "8px 12px",
        margin: "8px 0",
      }
    : { padding: "8px 12px", margin: "8px 0" };

  return (
    <div style={containerStyle}>
      {data.title && (
        <div
          style={{
            color: "#2563eb",
            fontWeight: "600",
            marginBottom: "4px",
            fontSize: "0.875rem",
          }}
        >
          {data.title}
        </div>
      )}
      {data.chord && (
        <div
          style={{
            color: "#2563eb",
            marginBottom: "4px",
            fontSize: "0.875rem",
          }}
        >
          {data.chord}
        </div>
      )}
      <div style={{ fontSize: "0.75rem", lineHeight: "1.25" }}>
        {data.lines.map((line: string, idx: number) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      {data.notation && (
        <div
          style={{ color: "#4b5563", marginTop: "4px", fontSize: "0.75rem" }}
        >
          {data.notation}
        </div>
      )}
    </div>
  );
}

/**
 * Render chord progression block
 */
function ChordProgressionBlock({
  data,
}: {
  data: {
    progression: string;
  };
  preferences: CifraPreferences;
}) {
  return (
    <div style={{ color: "#2563eb", fontWeight: "600" }}>
      {data.progression}
    </div>
  );
}
