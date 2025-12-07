/**
 * Chord Dictionary - Load and cache guitar chords from JSON
 */

import guitarData from "@/lib/chords/guitar.json";

export interface Chord {
  key: string;
  suffix: string;
  positions: any[];
}

export interface ChordDictionary {
  main: { strings: number; fretsOnChord: number; name: string };
  tunings: Record<string, string[]>;
  keys: string[];
  suffixes: string[];
  chords: Record<string, Chord[]>;
}

// Cache
let cachedData: ChordDictionary | null = null;
let cachedChordList: Array<{
  key: string;
  suffix: string;
  displayName: string;
}> | null = null;

/**
 * Load guitar chords data (cached)
 */
export function loadChordData(): ChordDictionary {
  if (!cachedData) {
    cachedData = guitarData as ChordDictionary;
  }
  return cachedData;
}

/**
 * Get all available chords as a flat list
 */
export function getChordList(): Array<{
  key: string;
  suffix: string;
  displayName: string;
}> {
  if (cachedChordList) {
    return cachedChordList;
  }

  const data = loadChordData();
  const chords: Array<{ key: string; suffix: string; displayName: string }> =
    [];

  Object.entries(data.chords).forEach(([key, chordVariants]) => {
    chordVariants.forEach((chord) => {
      chords.push({
        key: chord.key,
        suffix: chord.suffix,
        displayName: `${chord.key}${chord.suffix}`,
      });
    });
  });

  cachedChordList = chords;
  return chords;
}

/**
 * Find a specific chord
 */
export function findChord(key: string, suffix: string): Chord | null {
  const data = loadChordData();
  const keyChords = data.chords[key];
  if (!keyChords) return null;

  const chord = keyChords.find((c) => c.suffix === suffix);
  return chord || null;
}

/**
 * Get all chords for a specific key
 */
export function getChordsForKey(key: string): Chord[] {
  const data = loadChordData();
  return data.chords[key] || [];
}

/**
 * Get all keys
 */
export function getAllKeys(): string[] {
  const data = loadChordData();
  return data.keys || [];
}

/**
 * Get all suffixes
 */
export function getAllSuffixes(): string[] {
  const data = loadChordData();
  return data.suffixes || [];
}

/**
 * Search chords by name (supports partial matching)
 */
export function searchChords(
  query: string
): Array<{ key: string; suffix: string; displayName: string }> {
  const normalizedQuery = query.toLowerCase().trim();
  if (normalizedQuery.length === 0) return [];

  const allChords = getChordList();
  return allChords.filter((chord) =>
    chord.displayName.toLowerCase().includes(normalizedQuery)
  );
}
