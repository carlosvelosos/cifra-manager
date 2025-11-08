/**
 * Converter to transform parsed HTML into structured CifraStructure
 *
 * Takes the output from cifra-html-parser and converts it into
 * our rich CifraStructure data model.
 */

import type {
  CifraStructure,
  CifraSection,
  ContentBlock,
  LyricsBlock,
  LyricsLine,
  ChordPosition,
  TablaturaBlock,
  ChordProgressionBlock,
  ChordDefinition,
  SectionType,
} from "../types/cifra-types";
import {
  parseCifraHTML,
  extractChords,
  isSectionMarker,
  extractSectionName,
  parseChordDefinition,
  type ParsedLine,
} from "./cifra-html-parser";

/**
 * Convert HTML cifra content to structured format
 * @param html - Raw HTML cifra content
 * @param title - Song title
 * @param url - Source URL
 * @returns Structured cifra data
 */
export function convertToStructure(
  html: string,
  title: string,
  url?: string
): CifraStructure {
  const parsedLines = parseCifraHTML(html);

  // Extract chord definitions (usually at the end)
  const chords = extractChordDefinitions(html);

  // Group lines into sections
  const sections = groupIntoSections(parsedLines);

  return {
    title,
    url,
    sections,
    chords,
  };
}

/**
 * Extract chord definitions from the chord section
 * @param html - Full HTML content
 * @returns Array of chord definitions
 */
function extractChordDefinitions(html: string): ChordDefinition[] {
  const chords: ChordDefinition[] = [];
  const lines = html.split("\n");

  // Find the chords section (after "------- Acordes -------")
  let inChordsSection = false;

  for (const line of lines) {
    if (line.includes("Acordes")) {
      inChordsSection = true;
      continue;
    }

    if (inChordsSection) {
      const chordDef = parseChordDefinition(line);
      if (chordDef) {
        chords.push({
          name: chordDef.name,
          mount: chordDef.mount,
        });
      }
    }
  }

  return chords;
}

/**
 * Group parsed lines into logical sections
 * @param parsedLines - Array of parsed lines
 * @returns Array of cifra sections
 */
function groupIntoSections(parsedLines: ParsedLine[]): CifraSection[] {
  const sections: CifraSection[] = [];
  let currentSection: CifraSection | null = null;
  let currentContent: ContentBlock[] = [];
  let lyricsBuffer: LyricsLine[] = [];

  for (let i = 0; i < parsedLines.length; i++) {
    const parsedLine = parsedLines[i];
    const rawText = parsedLine.rawText.trim();

    // Skip empty lines
    if (!rawText) {
      // Empty line might signal end of lyrics block
      if (lyricsBuffer.length > 0) {
        currentContent.push({
          type: "lyrics",
          data: { lines: [...lyricsBuffer] },
        });
        lyricsBuffer = [];
      }
      continue;
    }

    // Check for section marker
    if (isSectionMarker(rawText)) {
      // Save previous section
      if (currentSection && currentContent.length > 0) {
        currentSection.content = currentContent;
        sections.push(currentSection);
      }

      // Start new section
      const sectionName = extractSectionName(rawText);
      const sectionType = determineSectionType(sectionName);

      currentSection = {
        type: sectionType,
        name: sectionName,
        content: [],
      };
      currentContent = [];
      lyricsBuffer = [];
      continue;
    }

    // Check for tablatura
    const tabElement = parsedLine.elements.find((e) => e.type === "tablatura");
    if (tabElement && tabElement.metadata) {
      // Save any buffered lyrics
      if (lyricsBuffer.length > 0) {
        currentContent.push({
          type: "lyrics",
          data: { lines: [...lyricsBuffer] },
        });
        lyricsBuffer = [];
      }

      // Add tablatura block
      const tabBlock: TablaturaBlock = {
        title: tabElement.metadata.title,
        chord: tabElement.metadata.chord,
        lines: tabElement.metadata.tabLines || [],
        notation: tabElement.metadata.notation,
      };

      currentContent.push({
        type: "tablatura",
        data: tabBlock,
      });
      continue;
    }

    // Check for chord progression (e.g., "( Am  C  G )")
    if (isChordProgression(rawText)) {
      // Save any buffered lyrics
      if (lyricsBuffer.length > 0) {
        currentContent.push({
          type: "lyrics",
          data: { lines: [...lyricsBuffer] },
        });
        lyricsBuffer = [];
      }

      currentContent.push({
        type: "chord-progression",
        data: { progression: rawText },
      });
      continue;
    }

    // Process as lyrics line
    const lyricsLine = processLyricsLine(parsedLine);
    lyricsBuffer.push(lyricsLine);
  }

  // Save final lyrics buffer
  if (lyricsBuffer.length > 0) {
    currentContent.push({
      type: "lyrics",
      data: { lines: lyricsBuffer },
    });
  }

  // Save final section
  if (currentSection && currentContent.length > 0) {
    currentSection.content = currentContent;
    sections.push(currentSection);
  } else if (currentContent.length > 0) {
    // No section marker found, create default section
    sections.push({
      type: "other",
      content: currentContent,
    });
  }

  return sections;
}

/**
 * Process a lyrics line to extract text and chord positions
 * @param parsedLine - Parsed line data
 * @returns Lyrics line with chord positions
 */
function processLyricsLine(parsedLine: ParsedLine): LyricsLine {
  const chords: ChordPosition[] = [];
  let textPosition = 0;
  let lyrics = "";

  for (const element of parsedLine.elements) {
    if (element.type === "chord") {
      // Add chord at current position
      const chordName = element.content;
      const [mainChord, bass] = chordName.split("/");

      chords.push({
        chord: mainChord,
        position: textPosition,
        bass: bass || undefined,
      });
    } else if (element.type === "text") {
      lyrics += element.content;
      textPosition += element.content.length;
    }
  }

  // If no lyrics but has chords, it's a chord-only line
  if (!lyrics.trim() && chords.length > 0) {
    // Build a text representation with spacing
    lyrics = parsedLine.rawText.replace(/<[^>]+>/g, "");
  }

  return {
    text: lyrics,
    chords,
  };
}

/**
 * Determine section type from section name
 * @param name - Section name
 * @returns Section type
 */
function determineSectionType(name: string): SectionType {
  const lowerName = name.toLowerCase();

  if (lowerName.includes("intro")) return "intro";
  if (
    lowerName.includes("refrão") ||
    lowerName.includes("refrao") ||
    lowerName.includes("chorus")
  )
    return "chorus";
  if (lowerName.includes("verso") || lowerName.includes("parte"))
    return "verse";
  if (lowerName.includes("ponte") || lowerName.includes("bridge"))
    return "bridge";
  if (lowerName.includes("final") || lowerName.includes("outro"))
    return "outro";
  if (lowerName.includes("solo") || lowerName.includes("instrumental"))
    return "instrumental";

  return "other";
}

/**
 * Check if a line is a chord progression
 * @param text - Line text
 * @returns True if it's a chord progression
 */
function isChordProgression(text: string): boolean {
  // Match patterns like: ( Am  C  G ) or (Am C G)
  return /^\(\s*[A-G][#b]?(?:m|maj|dim|aug|sus|add)?[0-9]?(?:\/[A-G][#b]?)?\s+(?:[A-G][#b]?(?:m|maj|dim|aug|sus|add)?[0-9]?(?:\/[A-G][#b]?)?\s*)+\)$/.test(
    text.trim()
  );
}
