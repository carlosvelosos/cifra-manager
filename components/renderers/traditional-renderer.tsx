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

  // Check if section name should be hidden
  const shouldHideSectionHeader = (sectionName: string): boolean => {
    // Hide if section name matches "Parte X De Y" pattern and parte hide is enabled
    if (parteHideEnabled && /Parte\s+\d+\s+[Dd]e\s+\d+/i.test(sectionName)) {
      return true;
    }

    // Hide bracket sections (e.g., "Intro", "Refrão", "Primeira Parte")
    // Note: Section names are stored WITHOUT brackets - brackets are added during rendering
    // Only hide non-Parte sections when bracket hide is enabled
    if (preferences.hideBracketSections && sectionName) {
      // Don't hide if it's a "Parte" section (those are handled separately)
      if (!/Parte\s+\d+\s+[Dd]e\s+\d+/i.test(sectionName)) {
        return true;
      }
    }

    return false;
  };

  // Flatten all content into individual renderable lines
  const allLines: RenderableLine[] = [];

  cifra.sections.forEach((section, sectionIdx) => {
    // Add section header if not hidden
    if (section.name && !shouldHideSectionHeader(section.name)) {
      allLines.push({
        type: "section-header",
        content: (
          <div className="section-header text-green-600 dark:text-green-400 font-semibold mb-2">
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
                <div className="chord-line whitespace-pre text-blue-600 dark:text-blue-400 font-semibold">
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
              content: <div className="text-line">{line.text || "\u00A0"}</div>,
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
      content: <div className="h-4" />,
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

  const getGridColsClass = (columnsLength: number): string => {
    if (columnsLength === 4) return "md:grid-cols-4";
    if (columnsLength === 3) return "md:grid-cols-3";
    if (columnsLength === 2) return "md:grid-cols-2";
    return "grid-cols-1";
  };

  return (
    <div className={`grid ${getGridColsClass(columns.length)} gap-x-8`}>
      {columns.map((columnLines, colIdx) => (
        <div
          key={`col-${colIdx}`}
          className="cifra-traditional font-mono text-sm"
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
 * Render lyrics block in traditional format
 */
function LyricsBlock({
  data,
}: {
  data: LyricsBlockType;
  preferences: CifraPreferences;
}) {
  return (
    <div className="lyrics-block">
      {data.lines.map((line, lineIdx: number) => (
        <div key={lineIdx} className="lyrics-line-group">
          {/* Chord line (if any chords) */}
          {line.chords && line.chords.length > 0 && (
            <div className="chord-line whitespace-pre text-blue-600 dark:text-blue-400 font-semibold">
              {renderChordsLine(line)}
            </div>
          )}

          {/* Lyrics line - only show if there's actual text content */}
          {(line.text || line.chords.length === 0) && (
            <div className="text-line">{line.text || "\u00A0"}</div>
          )}
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
}: {
  data: {
    title?: string;
    chord?: string;
    lines: string[];
    notation?: string;
  };
  preferences: CifraPreferences;
}) {
  return (
    <div className="tablatura-block bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 px-3 py-2 my-2">
      {/* Title */}
      {data.title && (
        <div className="tab-title text-blue-600 dark:text-blue-400 font-semibold mb-1 text-sm">
          {data.title}
        </div>
      )}

      {/* Chord being played */}
      {data.chord && (
        <div className="tab-chord text-blue-600 dark:text-blue-400 mb-1 text-sm">
          {data.chord}
        </div>
      )}

      {/* Tab lines - smaller font for better fit */}
      <div className="tab-lines text-xs leading-tight">
        {data.lines.map((line: string, idx: number) => (
          <div key={idx} className="tab-line">
            {line}
          </div>
        ))}
      </div>

      {/* Notation */}
      {data.notation && (
        <div className="tab-notation text-gray-600 dark:text-gray-400 mt-1 text-xs">
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
    <div className="chord-progression text-blue-600 dark:text-blue-400 font-semibold">
      {data.progression}
    </div>
  );
}
