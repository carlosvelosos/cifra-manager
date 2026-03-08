/**
 * Utility to load chord positions from guitar.json
 * Converts chord names to the correct key format and retrieves fret positions
 */

import guitarData from "./chords/guitar.json";
import {
  SUFFIX_ALIASES,
  NOTE_ALIASES,
  stripSlashBass,
} from "./chords/chord-aliases";

export interface ChordPosition {
  frets: number[];
  fingers?: number[];
  baseFret?: number;
  barres?: number[];
  capo?: boolean;
  midi?: number[];
}

export interface ChordWithPositions {
  name: string;
  key: string;
  suffix: string;
  positions: ChordPosition[];
  /** Set when the chord was resolved via an alias (not an exact guitar.json match). */
  resolvedAlias?: string;
}

/**
 * Convert a chord name like "F#m7" to key and suffix
 * @param chordName - Chord name (e.g., "F#m7", "C#7(13-)", "A/C#")
 * @returns Object with key and suffix, or null if not found
 */
function parseChordName(
  chordName: string,
): { key: string; suffix: string } | null {
  // Remove whitespace
  chordName = chordName.trim();

  // Extract the base note (A-G, optionally followed by # or b)
  // Also handles multi-char solfège roots like "Sol", "Fa", "Do"
  const noteMatch = chordName.match(/^([A-G][#b]?|Sol|Do|Re|Mi|Fa|La|Si|H)/);
  if (!noteMatch) return null;

  let note = noteMatch[1];
  // Apply note aliases (solfège / German notation → standard A–G)
  if (NOTE_ALIASES[note]) note = NOTE_ALIASES[note];

  const suffix = chordName.slice(noteMatch[1].length) || "major";

  return { key: note, suffix };
}

/**
 * Convert a note to the guitar.json key format
 * (C -> C, C# -> Csharp, Db -> Eb, etc.)
 * @param note - Note like "C", "F#", "Bb", etc.
 * @returns Key used in guitar.json
 */
function noteToGuitarKey(note: string): string | null {
  const noteMap: Record<string, string> = {
    C: "C",
    "C#": "Csharp",
    Db: "Csharp",
    D: "D",
    "D#": "Eb",
    Eb: "Eb",
    E: "E",
    F: "F",
    "F#": "Fsharp",
    Gb: "Fsharp",
    G: "G",
    "G#": "Ab",
    Ab: "Ab",
    A: "A",
    "A#": "Bb",
    Bb: "Bb",
    B: "B",
    Cb: "B",
  };

  return noteMap[note] || null;
}

/**
 * Look up a single suffix in the guitar.json data for a given key.
 * Returns the matching chord data or null.
 */
function findSuffix(
  chordsForKey: Array<{ suffix: string; positions: ChordPosition[] }>,
  suffix: string,
): { suffix: string; positions: ChordPosition[] } | null {
  return chordsForKey.find((c) => c.suffix === suffix) ?? null;
}

/**
 * Get chord positions from guitar.json by chord name.
 * Performs a 3-step lookup:
 *   1. Exact suffix match
 *   2. SUFFIX_ALIASES map lookup
 *   3. Programmatic slash-bass strip (e.g. "m/G#" → "minor")
 * When steps 2 or 3 resolve the chord, `resolvedAlias` is set on the result.
 *
 * @param chordName - Chord name (e.g., "F#m7", "C#7(13-)", "A/C#")
 * @returns Chord with positions, or null if not found
 */
export function getChordPositions(
  chordName: string,
): ChordWithPositions | null {
  const parsed = parseChordName(chordName);
  if (!parsed) return null;

  const guitarKey = noteToGuitarKey(parsed.key);
  if (!guitarKey) return null;

  const chordsForKey = guitarData.chords[
    guitarKey as keyof typeof guitarData.chords
  ] as Array<{ suffix: string; positions: ChordPosition[] }> | undefined;
  if (!chordsForKey || !Array.isArray(chordsForKey)) return null;

  // Step 1: exact suffix match
  let chordData = findSuffix(chordsForKey, parsed.suffix);
  if (chordData) {
    return {
      name: chordName,
      key: parsed.key,
      suffix: parsed.suffix,
      positions: chordData.positions || [],
    };
  }

  // Step 2: SUFFIX_ALIASES lookup
  const aliasSuffix = SUFFIX_ALIASES[parsed.suffix];
  if (aliasSuffix) {
    chordData = findSuffix(chordsForKey, aliasSuffix);
    if (chordData) {
      console.log(
        `🎸 Chord alias resolved: "${chordName}" suffix "${parsed.suffix}" → "${aliasSuffix}"`,
      );
      return {
        name: chordName,
        key: parsed.key,
        suffix: aliasSuffix,
        positions: chordData.positions || [],
        resolvedAlias: aliasSuffix,
      };
    }
  }

  // Step 3: programmatic slash-bass strip
  const baseSuffix = stripSlashBass(parsed.suffix);
  if (baseSuffix !== null) {
    chordData = findSuffix(chordsForKey, baseSuffix);
    if (chordData) {
      const label = `${baseSuffix} (bass note dropped)`;
      console.log(
        `🎸 Chord alias resolved: "${chordName}" suffix "${parsed.suffix}" → "${label}"`,
      );
      return {
        name: chordName,
        key: parsed.key,
        suffix: baseSuffix,
        positions: chordData.positions || [],
        resolvedAlias: label,
      };
    }
  }

  return null;
}

/**
 * Get chord positions for multiple chords
 * @param chordNames - Array of chord names
 * @returns Array of chords with positions
 */
export function getChordPositionsForMultiple(
  chordNames: string[],
): ChordWithPositions[] {
  return chordNames
    .map((name) => getChordPositions(name))
    .filter((chord): chord is ChordWithPositions => chord !== null);
}

/**
 * Get chord positions for multiple chords, separating found from missing
 * @param chordNames - Array of chord names
 * @returns Object with found chords (have positions) and missing chord names (not in guitar.json)
 */
export function getChordPositionsWithMissing(chordNames: string[]): {
  found: ChordWithPositions[];
  missing: string[];
} {
  const found: ChordWithPositions[] = [];
  const missing: string[] = [];
  for (const name of chordNames) {
    const result = getChordPositions(name);
    if (result !== null) {
      found.push(result);
    } else {
      missing.push(name);
    }
  }
  return { found, missing };
}

/**
 * Format chord position as a string for display
 * Calculates actual fret numbers using baseFret as an offset
 * @param position - Chord position
 * @returns Formatted string like "2-x-2-2-2-x" with actual fret numbers
 */
export function formatChordPosition(position: ChordPosition): string {
  const baseFret = position.baseFret || 1;

  const fretDisplay = position.frets
    .map((fret) => {
      if (fret === 0) return "0"; // Open string
      if (fret === -1) return "x"; // Muted string
      // Calculate actual fret number by adding baseFret offset
      return (fret + baseFret - 1).toString();
    })
    .join("-");

  return fretDisplay;
}

/**
 * Format all positions for a chord as a multi-line string
 * @param chord - Chord with positions
 * @returns Formatted string with all positions
 */
export function formatChordPositions(chord: ChordWithPositions): string {
  if (chord.positions.length === 0) {
    return `${chord.name}\n  (No positions found)`;
  }

  const lines = [`${chord.name}:`];
  if (chord.resolvedAlias) {
    lines.push(`  ↪ alias of "${chord.resolvedAlias}"`);
  }
  chord.positions.forEach((pos, idx) => {
    lines.push(`  ${idx + 1}. ${formatChordPosition(pos)}`);
  });

  return lines.join("\n");
}
