/**
 * HTML Parser for Cifra Club content
 *
 * Parses HTML content fetched from Cifra Club into a structured format
 * that can be converted into our CifraStructure data model.
 */

/**
 * Parsed HTML element representing different content types
 */
export interface ParsedElement {
  type: "text" | "chord" | "tablatura" | "section-marker";
  content: string;
  metadata?: Record<string, string | number | boolean | string[]>;
}

/**
 * Parsed line with its elements
 */
export interface ParsedLine {
  elements: ParsedElement[];
  rawText: string;
}

/**
 * Parse HTML content from Cifra Club
 * @param html - Raw HTML string with <b> and <span> tags
 * @returns Array of parsed lines
 */
export function parseCifraHTML(html: string): ParsedLine[] {
  const parsedLines: ParsedLine[] = [];

  // First, extract multi-line tablatura blocks and replace them with placeholders
  // We need to handle nested <span> tags properly
  const tablaturaBlocks: string[] = [];
  let processedHtml = html;
  let startIndex = 0;

  while (true) {
    const openTag = '<span class="tablatura">';
    const closeTag = "</span>";

    const openIndex = processedHtml.indexOf(openTag, startIndex);
    if (openIndex === -1) break;

    // Find the matching closing tag by counting nested spans
    let depth = 1;
    let pos = openIndex + openTag.length;
    let closeIndex = -1;

    while (pos < processedHtml.length && depth > 0) {
      const nextOpen = processedHtml.indexOf("<span", pos);
      const nextClose = processedHtml.indexOf(closeTag, pos);

      if (nextClose === -1) break;

      if (nextOpen !== -1 && nextOpen < nextClose) {
        depth++;
        pos = nextOpen + 5; // length of '<span'
      } else {
        depth--;
        if (depth === 0) {
          closeIndex = nextClose;
        }
        pos = nextClose + closeTag.length;
      }
    }

    if (closeIndex === -1) {
      // Couldn't find matching close tag, skip this one
      startIndex = openIndex + openTag.length;
      continue;
    }

    // Extract the full block
    const match = processedHtml.substring(
      openIndex,
      closeIndex + closeTag.length
    );
    const index = tablaturaBlocks.length;
    tablaturaBlocks.push(match);
    console.log(
      `📦 Extracted tablatura block ${index}:`,
      match.substring(0, 100) + "..."
    );

    // Replace with placeholder
    processedHtml =
      processedHtml.substring(0, openIndex) +
      `__TABLATURA_${index}__` +
      processedHtml.substring(closeIndex + closeTag.length);

    // Continue searching from the start of the placeholder
    startIndex = openIndex + `__TABLATURA_${index}__`.length;
  }

  // Now split by lines
  const lines = processedHtml.split("\n");

  for (const line of lines) {
    // Check if this line contains a tablatura placeholder
    const tabPlaceholderMatch = line.match(/__TABLATURA_(\d+)__/);
    if (tabPlaceholderMatch) {
      const tabIndex = parseInt(tabPlaceholderMatch[1]);
      const tabHtml = tablaturaBlocks[tabIndex];

      // Parse the tablatura block
      const tabMetadata = parseTablaturaBlock(tabHtml);
      console.log(
        `🎸 Parsed tablatura ${tabIndex}:`,
        tabMetadata.title,
        `- ${tabMetadata.tabLines?.length || 0} lines`
      );
      parsedLines.push({
        rawText: tabHtml,
        elements: [
          {
            type: "tablatura",
            content: tabHtml,
            metadata: tabMetadata,
          },
        ],
      });
    } else {
      // Normal line parsing
      const parsed = parseLine(line);
      parsedLines.push(parsed);
    }
  }

  return parsedLines;
}

/**
 * Parse a single line of HTML
 * @param line - Single line with potential HTML tags
 * @returns Parsed line with elements
 */
function parseLine(line: string): ParsedLine {
  const elements: ParsedElement[] = [];

  // Process the line character by character, tracking HTML tags
  const segments: Array<{
    start: number;
    end: number;
    type: string;
    content: string;
  }> = [];

  // Find all <b> tags (chords)
  const chordRegex = /<b>([^<]+)<\/b>/gi;
  let chordMatch;
  while ((chordMatch = chordRegex.exec(line)) !== null) {
    segments.push({
      start: chordMatch.index,
      end: chordMatch.index + chordMatch[0].length,
      type: "chord",
      content: chordMatch[1],
    });
  }

  // Find all <span class="tablatura"> blocks
  const tablaturaRegex = /<span class="tablatura">[\s\S]*?<\/span>/gi;
  let tabMatch;
  while ((tabMatch = tablaturaRegex.exec(line)) !== null) {
    segments.push({
      start: tabMatch.index,
      end: tabMatch.index + tabMatch[0].length,
      type: "tablatura",
      content: tabMatch[0],
    });
  }

  // Sort segments by position
  segments.sort((a, b) => a.start - b.start);

  // Build elements from segments
  let lastEnd = 0;
  for (const segment of segments) {
    // Add text before this segment
    if (segment.start > lastEnd) {
      const text = line.substring(lastEnd, segment.start);
      if (text.trim()) {
        elements.push({
          type: "text",
          content: stripHTML(text),
        });
      }
    }

    // Add the segment
    if (segment.type === "chord") {
      elements.push({
        type: "chord",
        content: segment.content,
      });
    } else if (segment.type === "tablatura") {
      const tabContent = parseTablaturaBlock(segment.content);
      elements.push({
        type: "tablatura",
        content: segment.content,
        metadata: tabContent,
      });
    }

    lastEnd = segment.end;
  }

  // Add remaining text
  if (lastEnd < line.length) {
    const text = line.substring(lastEnd);
    if (text.trim()) {
      elements.push({
        type: "text",
        content: stripHTML(text),
      });
    }
  }

  // Check for section markers like [Intro], [Refrão], etc.
  const cleanText = stripHTML(line);
  const sectionMarkerRegex = /\[(.*?)\]/g;
  if (sectionMarkerRegex.test(cleanText)) {
    elements.push({
      type: "section-marker",
      content: cleanText,
    });
  }

  return {
    elements:
      elements.length > 0
        ? elements
        : [{ type: "text", content: stripHTML(line) }],
    rawText: line, // Keep original HTML for chord position calculation
  };
}

/**
 * Parse a tablatura block to extract metadata
 * @param html - HTML content of tablatura block
 * @returns Metadata about the tablatura
 */
function parseTablaturaBlock(html: string): Record<string, string | string[]> {
  const metadata: Record<string, string | string[]> = {};

  // Extract title - prioritize "Parte X De Y" over "[Dedilhado...]"
  // because some blocks contain both
  const parteMatch = html.match(/Parte\s+\d+\s+[Dd]e\s+\d+/i);
  if (parteMatch) {
    metadata.title = parteMatch[0].trim();
  } else {
    // Fall back to Dedilhado header if no Parte found
    const dedilhadoMatch = html.match(/\[?[Dd]edilhado[^\]<\n]*/i);
    if (dedilhadoMatch) {
      metadata.title = dedilhadoMatch[0].trim().replace(/^\[|\]$/g, "");
    }
  }

  // Extract chord if specified
  const chordMatch = html.match(/<b>([^<]+)<\/b>/);
  if (chordMatch) {
    metadata.chord = chordMatch[1];
  }

  // Extract notation (e.g., "(4x)", "↓")
  const notationMatch = html.match(/\((\d+x)\)|([↓↑]+)/g);
  if (notationMatch) {
    metadata.notation = notationMatch.join(" ");
  }

  // Extract tab lines (E|, B|, etc.)
  const tabLines: string[] = [];
  const cntRegex = /<span class="cnt">([^<]*(?:<[^>]+>[^<]*)*?)<\/span>/gi;
  let cntMatch;
  while ((cntMatch = cntRegex.exec(html)) !== null) {
    const content = stripHTML(cntMatch[1]);
    const lines = content.split("\n").filter((l) => l.trim());
    tabLines.push(...lines);
  }
  metadata.tabLines = tabLines;

  return metadata;
}

/**
 * Strip HTML tags from a string
 * @param html - String with HTML tags
 * @returns Plain text
 */
function stripHTML(html: string): string {
  return html.replace(/<[^>]+>/g, "");
}

/**
 * Extract chords from a line
 * @param line - Line with potential <b> tags
 * @returns Array of chord names
 */
export function extractChords(line: string): string[] {
  const chords: string[] = [];
  const chordRegex = /<b>([^<]+)<\/b>/gi;
  let match;

  while ((match = chordRegex.exec(line)) !== null) {
    chords.push(match[1]);
  }

  return chords;
}

/**
 * Check if a line contains tablatura
 * @param line - Line to check
 * @returns True if line contains tablatura
 */
export function isTablaturaLine(line: string): boolean {
  return line.includes('<span class="tablatura">');
}

/**
 * Check if a line is a section marker
 * @param line - Line to check
 * @returns True if line is a section marker
 */
export function isSectionMarker(line: string): boolean {
  const text = stripHTML(line).trim();
  // Match lines that START with [something] even if there's content after
  return /^\[.*?\]/.test(text);
}

/**
 * Extract section name from marker
 * @param marker - Section marker text
 * @returns Section name
 */
export function extractSectionName(marker: string): string {
  const text = stripHTML(marker).trim();
  const match = text.match(/\[(.*?)\]/); // Non-greedy match
  return match ? match[1] : "";
}

/**
 * Parse chord definition line
 * @param line - Line with chord definition (e.g., "Am = X 0 2 2 1 0")
 * @returns Chord definition or null
 */
export function parseChordDefinition(
  line: string
): { name: string; mount: string } | null {
  const text = stripHTML(line).trim();
  const match = text.match(
    /^([A-G][#b]?(?:m|maj|dim|aug|sus|add)?[0-9]?(?:\/[A-G][#b]?)?)\s*=\s*(.+)$/
  );

  if (match) {
    return {
      name: match[1],
      mount: match[2].trim(),
    };
  }

  return null;
}
