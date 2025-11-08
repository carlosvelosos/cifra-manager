/**
 * Traditional Renderer - Renders cifra in classic separate-lines format
 *
 * This renderer maintains the traditional cifra club style where chords
 * appear on separate lines above/below lyrics, preserving original spacing.
 */

"use client";

import React from "react";
import type { CifraStructure, CifraPreferences } from "@/lib/types/cifra-types";

interface TraditionalRendererProps {
  cifra: CifraStructure;
  preferences: CifraPreferences;
}

export function TraditionalRenderer({
  cifra,
  preferences,
}: TraditionalRendererProps) {
  return (
    <div className="cifra-traditional font-mono text-sm">
      {cifra.sections.map((section, sectionIdx) => (
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
                <TablaturaBlock data={block.data} preferences={preferences} />
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
          {line.chords.length > 0 && (
            <div
              className={`chord-line ${
                preferences.highlightChords ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {renderChordsLine(line, preferences)}
            </div>
          )}

          {/* Lyrics line */}
          <div className="text-line">{line.text || "\u00A0"}</div>
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
    <div className="tablatura-block bg-red-50 border-l-4 border-red-500 px-3 py-2 my-2">
      {/* Title */}
      {data.title && (
        <div className="tab-title text-blue-600 font-semibold mb-1">
          {data.title}
        </div>
      )}

      {/* Chord being played */}
      {data.chord && (
        <div className="tab-chord text-blue-600 mb-1">{data.chord}</div>
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
