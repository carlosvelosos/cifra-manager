/**
 * Utility to load chord positions from guitar.json
 * Converts chord names to the correct key format and retrieves fret positions
 */

import guitarData from "./chords/guitar.json";

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
}

/**
 * Convert a chord name like "F#m7" to key and suffix
 * @param chordName - Chord name (e.g., "F#m7", "C#7(13-)", "A/C#")
 * @returns Object with key and suffix, or null if not found
 */
function parseChordName(
  chordName: string
): { key: string; suffix: string } | null {
  // Remove whitespace
  chordName = chordName.trim();

  // Extract the base note (A-G, optionally followed by # or b)
  const noteMatch = chordName.match(/^([A-G][#b]?)/);
  if (!noteMatch) return null;

  const note = noteMatch[1];
  const suffix = chordName.slice(note.length) || "major";

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
 * Get chord positions from guitar.json by chord name
 * @param chordName - Chord name (e.g., "F#m7", "C#7(13-)")
 * @returns Chord with positions, or null if not found
 */
export function getChordPositions(
  chordName: string
): ChordWithPositions | null {
  const parsed = parseChordName(chordName);
  if (!parsed) return null;

  const guitarKey = noteToGuitarKey(parsed.key);
  if (!guitarKey) return null;

  const chordsForKey =
    guitarData.chords[guitarKey as keyof typeof guitarData.chords];
  if (!chordsForKey || !Array.isArray(chordsForKey)) return null;

  // Find the chord with matching suffix
  const chordData = (
    chordsForKey as Array<{ suffix: string; positions: ChordPosition[] }>
  ).find((c) => c.suffix === parsed.suffix);
  if (!chordData) return null;

  return {
    name: chordName,
    key: parsed.key,
    suffix: parsed.suffix,
    positions: chordData.positions || [],
  };
}

/**
 * Get chord positions for multiple chords
 * @param chordNames - Array of chord names
 * @returns Array of chords with positions
 */
export function getChordPositionsForMultiple(
  chordNames: string[]
): ChordWithPositions[] {
  return chordNames
    .map((name) => getChordPositions(name))
    .filter((chord): chord is ChordWithPositions => chord !== null);
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
  chord.positions.forEach((pos, idx) => {
    lines.push(`  ${idx + 1}. ${formatChordPosition(pos)}`);
  });

  return lines.join("\n");
}
