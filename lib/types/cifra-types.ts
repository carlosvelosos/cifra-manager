/**
 * Type definitions for structured cifra (song sheet) data model
 *
 * This file defines the core data structures for representing cifras
 * in a structured, type-safe way that enables multiple display modes,
 * chord transposition, and enhanced features.
 */

/**
 * Main cifra structure containing all song information
 */
export interface CifraStructure {
  /** Song title (artist - song name) */
  title: string;
  /** Source URL from Cifra Club */
  url?: string;
  /** Organized sections of the song */
  sections: CifraSection[];
  /** Chord definitions with fingering positions */
  chords: ChordDefinition[];
}

/**
 * Section types in a song
 */
export type SectionType =
  | "intro"
  | "verse"
  | "chorus"
  | "bridge"
  | "outro"
  | "instrumental"
  | "other";

/**
 * A section of the song (intro, verse, chorus, etc.)
 */
export interface CifraSection {
  /** Type of section */
  type: SectionType;
  /** Display name (e.g., "Primeira Parte", "Refrão") */
  name?: string;
  /** Content blocks within this section */
  content: ContentBlock[];
}

/**
 * Content block types
 */
export type ContentBlockType = "lyrics" | "tablatura" | "chord-progression";

/**
 * A block of content within a section
 */
export interface ContentBlock {
  /** Type of content */
  type: ContentBlockType;
  /** Actual content data (discriminated union) */
  data: LyricsBlock | TablaturaBlock | ChordProgressionBlock;
}

/**
 * Block containing lyrics with chord positions
 */
export interface LyricsBlock {
  /** Lines of lyrics with their chords */
  lines: LyricsLine[];
}

/**
 * A single line of lyrics with chord positions
 */
export interface LyricsLine {
  /** The actual lyrics text */
  text: string;
  /** Chords that occur in this line with their positions */
  chords: ChordPosition[];
}

/**
 * Position of a chord within a lyrics line
 */
export interface ChordPosition {
  /** Chord name (e.g., "Am", "G", "C7") */
  chord: string;
  /** Character position in the text (0-indexed) */
  position: number;
  /** Optional bass note for slash chords (e.g., "G" in "C/G") */
  bass?: string;
}

/**
 * Block containing guitar tablature
 */
export interface TablaturaBlock {
  /** Optional title (e.g., "Parte 1 De 5", "Dedilhado - Intro") */
  title?: string;
  /** Chord being played (if specified) */
  chord?: string;
  /** Raw tablature lines (E|, B|, G|, D|, A|, E|) */
  lines: string[];
  /** Additional notation (e.g., "(4x)", "↓", repeat marks) */
  notation?: string;
}

/**
 * Block containing chord progression notation
 */
export interface ChordProgressionBlock {
  /** Chord progression string (e.g., "( Am  C  G )") */
  progression: string;
}

/**
 * Chord definition with fingering information
 */
export interface ChordDefinition {
  /** Chord name */
  name: string;
  /** Fingering positions (e.g., "X 0 2 2 1 0") */
  mount: string;
  /** Guitar tuning (e.g., "E A D G B E") */
  tuning?: string;
}

/**
 * Display mode for rendering cifras
 */
export type DisplayMode = "traditional" | "inline" | "above-lyrics";

/**
 * Font size options
 */
export type FontSize = "small" | "medium" | "large";

/**
 * User preferences for cifra display
 */
export interface CifraPreferences {
  /** How to display chords relative to lyrics */
  displayMode: DisplayMode;
  /** Whether to show tablatura sections */
  showTablatura: boolean;
  /** Whether to show chord diagrams */
  showChordDiagrams: boolean;
  /** Whether to hide bracket sections (e.g., [Intro], [Refrão]) */
  hideBracketSections: boolean;
  /** Transpose amount in semitones (-6 to +6) */
  transposeKey: number;
  /** Font size for cifra text */
  fontSize: FontSize;
  /** Whether to highlight chords in different color */
  highlightChords: boolean;
  /** Enable auto-scroll feature */
  autoScroll: boolean;
  /** Auto-scroll speed (pixels per second) */
  autoScrollSpeed: number;
}

/**
 * Default preferences
 */
export const DEFAULT_CIFRA_PREFERENCES: CifraPreferences = {
  displayMode: "traditional",
  showTablatura: true,
  showChordDiagrams: true,
  hideBracketSections: false,
  transposeKey: 0,
  fontSize: "medium",
  highlightChords: true,
  autoScroll: false,
  autoScrollSpeed: 50,
};

/**
 * Props for cifra display component
 */
export interface CifraDisplayProps {
  /** Structured cifra data */
  cifra: CifraStructure;
  /** Optional preferences override */
  preferences?: Partial<CifraPreferences>;
}

/**
 * Props for renderer components
 */
export interface RendererProps {
  /** Structured cifra data */
  cifra: CifraStructure;
  /** Display preferences */
  preferences: CifraPreferences;
}
