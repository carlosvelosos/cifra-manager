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
  CifraSection,
} from "@/lib/types/cifra-types";

interface TraditionalRendererProps {
  cifra: CifraStructure;
  preferences: CifraPreferences;
}

export function TraditionalRenderer({
  cifra,
  preferences,
}: TraditionalRendererProps) {
  // Split sections into columns for better layout
  const MAX_SECTIONS_PER_COLUMN = 4;
  const columnCount = Math.min(
    4,
    Math.ceil(cifra.sections.length / MAX_SECTIONS_PER_COLUMN)
  );

  // Group sections into columns
  const columns: CifraSection[][] = [];
  if (cifra.sections.length <= MAX_SECTIONS_PER_COLUMN * 1.2) {
    columns.push(cifra.sections);
  } else {
    const sectionsPerColumn = Math.ceil(cifra.sections.length / columnCount);
    for (let i = 0; i < columnCount; i++) {
      const start = i * sectionsPerColumn;
      const end = Math.min(start + sectionsPerColumn, cifra.sections.length);
      columns.push(cifra.sections.slice(start, end));
    }
  }

  const getGridColsClass = (cols: number): string => {
    if (cols === 4) return "md:grid-cols-4";
    if (cols === 3) return "md:grid-cols-3";
    if (cols === 2) return "md:grid-cols-2";
    return "grid-cols-1";
  };

  return (
    <div
      className={`cifra-traditional font-mono text-sm grid ${getGridColsClass(
        columns.length
      )} gap-x-8`}
    >
      {columns.map((columnSections, colIdx) => (
        <div key={colIdx} className="cifra-column">
          {columnSections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="cifra-section mb-6">
              {/* Section Header */}
              {section.name && (
                <div className="section-header text-green-600 font-semibold mb-2">
                  [{section.name}]
                </div>
              )}

              {/* Section Content */}
              {section.content.map((block, blockIdx) => (
                <div key={blockIdx} className="content-block mb-4">
                  {block.type === "lyrics" && (
                    <LyricsBlock data={block.data} preferences={preferences} />
                  )}

                  {block.type === "tablatura" && preferences.showTablatura && (
                    <TablaturaBlock
                      data={block.data}
                      preferences={preferences}
                    />
                  )}

                  {block.type === "chord-progression" && (
                    <ChordProgressionBlock
                      data={block.data}
                      preferences={preferences}
                    />
                  )}
                </div>
              ))}
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
  preferences,
}: {
  data: any;
  preferences: CifraPreferences;
}) {
  return (
    <div className="lyrics-block">
      {data.lines.map((line: any, lineIdx: number) => (
        <div key={lineIdx} className="lyrics-line-group">
          {/* Chord line (if any chords) */}
          {line.chords && line.chords.length > 0 && (
            <div
              className={`chord-line ${
                preferences.highlightChords ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {renderChordsLine(line, preferences)}
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
function renderChordsLine(
  line: any,
  preferences: CifraPreferences
): React.ReactNode {
  if (line.chords.length === 0) return null;

  // Build a string with chords at their positions
  let chordLine = "";
  let lastPos = 0;

  // Sort chords by position
  const sortedChords = [...line.chords].sort((a, b) => a.position - b.position);

  for (const chord of sortedChords) {
    // Add spaces up to chord position
    while (chordLine.length < chord.position) {
      chordLine += " ";
    }

    // Add the chord
    const chordText = chord.bass ? `${chord.chord}/${chord.bass}` : chord.chord;
    chordLine += chordText;
    lastPos = chord.position + chordText.length;
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
  data: any;
  preferences: CifraPreferences;
}) {
  return (
    <div className="tablatura-block bg-red-50 border-l-4 border-red-500 px-3 py-2 my-2 text-xs">
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

      {/* Tab lines */}
      <div className="tab-lines">
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
  preferences,
}: {
  data: any;
  preferences: CifraPreferences;
}) {
  return (
    <div
      className={`chord-progression ${
        preferences.highlightChords ? "text-blue-600 font-semibold" : ""
      }`}
    >
      {data.progression}
    </div>
  );
}
