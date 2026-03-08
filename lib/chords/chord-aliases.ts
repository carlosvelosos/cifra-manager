/**
 * Chord alias mappings for Brazilian cifra notation variants.
 *
 * SUFFIX_ALIASES maps non-standard or alternative chord suffixes (as written
 * in cifra HTML) to their canonical equivalents in guitar.json.
 *
 * NOTE_ALIASES maps alternative root-note spellings to standard A–G notation.
 *
 * When the loader resolves a chord via an alias, it records the canonical
 * suffix in `ChordWithPositions.resolvedAlias` so the UI can surface it.
 */

/**
 * Maps non-standard chord suffixes to canonical guitar.json suffixes.
 *
 * Slash-bass fallback (e.g. "m/G#" → "m/Ab") is listed here for enharmonic
 * equivalents. A further programmatic fallback that strips the bass note
 * entirely is applied in chord-position-loader.ts after this map is exhausted.
 */
export const SUFFIX_ALIASES: Record<string, string> = {
  // ── Dominant 7th extensions ────────────────────────────────────────────────
  "7(13-)": "aug7", // dom7 ♭13 = dom7 #5 = augmented dominant 7th
  "7(b13)": "aug7",
  "7(5-)": "7b5", // dom7 ♭5 (Brazilian cifra flat-5 notation)
  "7+": "aug7", // augmented dominant 7th (+ = #5)
  "7(9)": "9", // dom7 add9 = 9th chord
  "m7(9)": "m9", // minor 7th add9 = minor 9th (Brazilian cifra notation)
  "7(#9)": "7#9",
  "7(b9)": "7b9",
  "7(11)": "11",
  "7(13)": "13", // dominant 13th (Brazilian parenthesised notation)
  "7(#11)": "9#11",
  "7(11+)": "9#11", // Brazilian raised-11 notation (+ = sharp/raised)

  // ── Major 7th variants ─────────────────────────────────────────────────────
  M7: "maj7",
  Maj7: "maj7",
  "7M": "maj7",
  "△": "maj7",
  "△7": "maj7",
  Δ: "maj7",
  Δ7: "maj7",
  maj: "major", // bare "maj" without a number

  // ── Augmented ──────────────────────────────────────────────────────────────
  "+": "aug",
  "5+": "aug", // Brazilian shorthand for augmented (e.g. B5+, Eb5+)

  // ── Diminished ────────────────────────────────────────────────────────────
  "°": "dim",
  "°7": "dim7",
  dim9: "dim7", // approximate; dim9 has no direct guitar.json entry

  // ── Half-diminished (ø / hdim) ────────────────────────────────────────────
  ø: "m7b5",
  ø7: "m7b5",
  hdim: "m7b5",
  hdim7: "m7b5",
  "m7(b5)": "m7b5",
  "m7(5-)": "m7b5", // Brazilian cifra notation for ♭5
  "-7b5": "m7b5",

  // ── Minor variants ────────────────────────────────────────────────────────
  m: "minor",
  min: "minor",
  "-": "minor",
  min7: "m7",
  "-7": "m7",
  min9: "m9",
  min11: "m11",
  min6: "m6",
  min69: "m69",
  minmaj7: "mmaj7",
  "m(maj7)": "mmaj7",
  mM7: "mmaj7",
  m7M: "mmaj7",
  "m△7": "mmaj7",
  mΔ7: "mmaj7",

  // ── Suspended ─────────────────────────────────────────────────────────────
  "7(4)": "7sus4", // dom7 add4 = 7sus4 (Brazilian cifra notation)
  "4(7)": "7sus4", // sus4 add b7 = 7sus4 (reversed notation, e.g. B4(7))
  sus9: "sus2", // suspended 9th = suspended 2nd (no 3rd, add 2nd/9th)

  // ── Add chords ─────────────────────────────────────────────────────────────
  add2: "add9", // add2 and add9 are the same pitch in different octave names
  "2": "add9",
  "add(9)": "add9",
  "(add9)": "add9",
  "(9)": "add9",

  // ── 6/9 chords ────────────────────────────────────────────────────────────
  "6/9": "69",
  "6add9": "69",
  "m6/9": "m69",
  "6(9)": "69",

  // ── Slash-bass enharmonic equivalents ─────────────────────────────────────
  // G# ↔ Ab
  "/G#": "/Ab",
  "m/G#": "m/Ab",
  "maj7/G#": "maj7/Ab",
  "7/G#": "7/Ab",
  // D# ↔ Eb
  "/D#": "/Eb",
  "m/D#": "m/Eb",
  // A# ↔ Bb
  "/A#": "/Bb",
  "m/A#": "m/Bb",
  // C# ↔ Db (root C# sometimes has a C# bass in slash notation)
  "m/C#": "m/C",
};

/**
 * Maps alternative root-note spellings to standard A–G English notation.
 * Applied to the root note BEFORE the guitar.json key lookup.
 */
export const NOTE_ALIASES: Record<string, string> = {
  // German notation (H = B, used in Eastern European scores)
  H: "B",
  // Solfège (occasionally seen in Brazilian annotations)
  Do: "C",
  Re: "D",
  Mi: "E",
  Fa: "F",
  Sol: "G",
  La: "A",
  Si: "B",
};

/**
 * Strips the slash-bass component from a chord suffix.
 *
 * Examples:
 *   "m/G#"   → "minor"   (base was "m", normalised to guitar.json "minor")
 *   "/Ab"    → "major"   (no base = root-position chord → "major")
 *   "maj7/E" → "maj7"
 *
 * Returns `null` if the suffix contains no slash (no fallback needed).
 */
export function stripSlashBass(suffix: string): string | null {
  const slashIdx = suffix.lastIndexOf("/");
  if (slashIdx === -1) return null;
  const base = suffix.slice(0, slashIdx);
  if (base === "" || base === "major") return "major";
  if (base === "m" || base === "minor") return "minor";
  return base;
}
