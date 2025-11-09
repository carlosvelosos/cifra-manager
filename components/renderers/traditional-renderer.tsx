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

export function TraditionalRenderer({
  cifra,
  preferences,
}: TraditionalRendererProps) {
  const { parteHideEnabled } = useHighlightSettings();

  // Use CSS columns for automatic flow - sections can split across columns
  // This minimizes scrolling by maximizing horizontal space usage
  const totalSections = cifra.sections.length;
  let columnCount = 1;

  // Determine optimal column count based on section count
  if (totalSections >= 8) {
    columnCount = 4; // Best for showing most content without scrolling
  } else if (totalSections >= 6) {
    columnCount = 3;
  } else if (totalSections >= 4) {
    columnCount = 2;
  }

  const getColumnClass = (cols: number): string => {
    if (cols === 4) return "md:columns-4";
    if (cols === 3) return "md:columns-3";
    if (cols === 2) return "md:columns-2";
    return "columns-1";
  };

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

  return (
    <div
      className={`cifra-traditional font-mono text-sm ${getColumnClass(
        columnCount
      )} gap-x-8`}
    >
      {cifra.sections.map((section, sectionIdx) => (
        <div
          key={sectionIdx}
          className="cifra-section mb-6 break-inside-avoid-column"
        >
          {/* Section Header - hide if parteHideEnabled and it's a "Parte" section */}
          {section.name && !shouldHideSectionHeader(section.name) && (
            <div className="section-header text-green-600 font-semibold mb-2">
              [{section.name}]
            </div>
          )}

          {/* Section Content */}
          {section.content.map((block, blockIdx) => (
            <div key={blockIdx} className="content-block mb-4">
              {block.type === "lyrics" && (
                <LyricsBlock
                  data={block.data as LyricsBlockType}
                  preferences={preferences}
                />
              )}

              {block.type === "tablatura" && preferences.showTablatura && (
                <TablaturaBlock
                  data={block.data as TablaturaBlockType}
                  preferences={preferences}
                />
              )}

              {block.type === "chord-progression" && (
                <ChordProgressionBlock
                  data={block.data as ChordProgressionBlockType}
                  preferences={preferences}
                />
              )}
            </div>
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
            <div className="chord-line whitespace-pre text-blue-600 font-semibold">
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
    <div className="tablatura-block bg-red-50 border-l-4 border-red-500 px-3 py-2 my-2">
      {/* Title */}
      {data.title && (
        <div className="tab-title text-blue-600 font-semibold mb-1 text-sm">
          {data.title}
        </div>
      )}

      {/* Chord being played */}
      {data.chord && (
        <div className="tab-chord text-blue-600 mb-1 text-sm">{data.chord}</div>
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
        <div className="tab-notation text-gray-600 mt-1 text-xs">
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
    <div className="chord-progression text-blue-600 font-semibold">
      {data.progression}
    </div>
  );
}
