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
  LyricsLine,
  ChordPosition,
  TablaturaBlock,
  ChordDefinition,
  SectionType,
} from "../types/cifra-types";
import {
  parseCifraHTML,
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
 * Extract unique chord definitions from HTML content
 * Identifies chords from <b>Chord</b> tags throughout the HTML
 * @param html - Full HTML content
 * @returns Array of unique chord definitions
 */
function extractChordDefinitions(html: string): ChordDefinition[] {
  const chordSet = new Set<string>();

  // Match all <b>ChordName</b> tags
  // This regex captures chord names inside <b> tags
  // Matches patterns like: C, C#, Cm, C7, C7M, Cm7, C#m7(5-), C#7(13-), C/G, etc.
  const chordRegex = /<b>([A-G][#b]?(?:[a-zA-Z0-9\-/()]+)?)<\/b>/g;

  let match;
  while ((match = chordRegex.exec(html)) !== null) {
    const chordName = match[1];
    // Only add if it looks like a valid chord (not random text)
    if (/^[A-G][#b]?/.test(chordName)) {
      chordSet.add(chordName);
    }
  }

  // Convert to array of chord definitions
  const chords: ChordDefinition[] = Array.from(chordSet).map((name) => ({
    name,
    mount: "", // mount/diagram not available from HTML parsing
  }));

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

    // Check for tablatura FIRST (before section marker check)
    // This prevents [Dedilhado...] text inside tablatura blocks from creating sections
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
        title: tabElement.metadata?.title as string | undefined,
        chord: tabElement.metadata?.chord as string | undefined,
        lines: (tabElement.metadata?.tabLines as string[]) || [],
        notation: tabElement.metadata?.notation as string | undefined,
      };

      console.log(
        `🎵 Adding tablatura to section:`,
        tabBlock.title,
        `with ${tabBlock.lines.length} lines`
      );

      currentContent.push({
        type: "tablatura",
        data: tabBlock,
      });
      continue;
    }

    // Check for section marker
    if (isSectionMarker(rawText)) {
      // Save previous section
      if (lyricsBuffer.length > 0) {
        currentContent.push({
          type: "lyrics",
          data: { lines: [...lyricsBuffer] },
        });
        lyricsBuffer = [];
      }

      if (currentSection) {
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

      // Check if there's chord content on the same line as the section marker
      // e.g., "[Intro] <b>G</b>  <b>Am</b>  <b>C</b>"
      const chordElements = parsedLine.elements.filter(
        (e) => e.type === "chord"
      );
      if (chordElements.length > 0) {
        // Create a new parsed line with just the chords (no section marker text)
        const cleanedRawText = parsedLine.rawText.replace(/\[.*?\]\s*/, "");
        const modifiedLine: ParsedLine = {
          rawText: cleanedRawText,
          elements: chordElements, // Keep only chord elements
        };
        const lyricsLine = processLyricsLine(modifiedLine);
        // Always add if there are chords
        if (lyricsLine.chords.length > 0) {
          lyricsBuffer.push(lyricsLine);
        }
      }

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
      // Add chord at current position in the TEXT (not including previous chords)
      const chordName = element.content;
      const [mainChord, bass] = chordName.split("/");

      chords.push({
        chord: mainChord,
        position: textPosition,
        bass: bass || undefined,
      });

      // Don't increment textPosition for chords - they don't take up space in lyrics
    } else if (element.type === "text") {
      lyrics += element.content;
      textPosition += element.content.length;
    }
  }

  // If no lyrics but has chords, it's a chord-only line
  // We need to preserve spacing from the original HTML
  if (!lyrics.trim() && chords.length > 0) {
    // Parse the raw text to get proper chord positions
    const rawText = parsedLine.rawText;
    const repositionedChords: ChordPosition[] = [];

    console.log(`🎼 Chord-only line rawText:`, rawText.substring(0, 100));

    // Find each <b> tag and its position in the display
    const chordRegex = /<b>([^<]+)<\/b>/g;
    let match;
    let chordIndex = 0;

    while (
      (match = chordRegex.exec(rawText)) !== null &&
      chordIndex < chords.length
    ) {
      // Calculate position by removing HTML tags before this chord
      const textBeforeChord = rawText.substring(0, match.index);
      const cleanTextBefore = textBeforeChord.replace(/<[^>]+>/g, "");
      const position = cleanTextBefore.length;

      console.log(
        `  Chord "${chords[chordIndex].chord}" at position ${position}`
      );

      repositionedChords.push({
        ...chords[chordIndex],
        position,
      });

      chordIndex++;
    }

    return {
      text: "", // Empty text for chord-only lines
      chords: repositionedChords,
    };
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
