"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useHighlightSettings } from "@/lib/highlight-context";
import { useChords } from "@/lib/chords-context";
import type { CifraStructure, CifraPreferences } from "@/lib/types/cifra-types";
import { TraditionalRenderer } from "@/components/renderers/traditional-renderer";
import KeyboardNavigationIndicator from "@/components/keyboard-navigation-indicator";
import {
  getChordPositionsForMultiple,
  formatChordPositions,
} from "@/lib/chord-position-loader";

// Support both old (string) and new (structured) formats
interface CifraDisplayProps {
  title: string;
  mainCifra?: string; // Old format: raw HTML string
  chords?: string; // Old format: chord list
  cifraData?: CifraStructure; // New format: structured data
}

interface ProcessedLine {
  content: string;
  isTab: boolean;
  isTabContext: boolean; // Line above or below a tab block
  isParte: boolean; // Line containing "Parte * de *" pattern
  isBracket: boolean; // Line containing "[*]" pattern
}

const identifyTabBlocks = (text: string): ProcessedLine[] => {
  if (!text) {
    return [
      {
        content: "",
        isTab: false,
        isTabContext: false,
        isParte: false,
        isBracket: false,
      },
    ];
  }

  const lines = text.split("\n");
  const processedLines: ProcessedLine[] = []; // Regex to match tablature lines: starts with E|, B|, G|, D|, A|, or E| followed by various tab characters
  // Supports: digits (including multi-digit), dashes, pipes, spaces, slides (/\), vibrato (~), dots (.), muted strings (x), hammer-ons (h), pull-offs (p), bends (b), releases (r), arrows (↓↑)
  const tabLinePattern = /^[EBGDAE]\|[0-9\-~\.\/\\\|\sxhpbr↓↑]+\|?\s*$/;
  // Regex to match "Parte * de *" pattern
  const partePattern = /^Parte\s+\d+\s+de\s+\d+\s*$/;
  // Regex to match "[*]" pattern (square brackets with any content)
  const bracketPattern = /\[.*?\]/;

  // First pass: identify all tab lines, parte lines, and bracket lines
  const tabLineIndices: number[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isTabLine = tabLinePattern.test(line.trim());
    const isParteLine = partePattern.test(line.trim());
    const isBracketLine = bracketPattern.test(line.trim());

    if (isTabLine) {
      tabLineIndices.push(i);
    }

    processedLines.push({
      content: line,
      isTab: false,
      isTabContext: false,
      isParte: isParteLine,
      isBracket: isBracketLine,
    });
  }

  // Second pass: identify which tab lines are part of 6-line blocks
  // Allow for empty lines within tab blocks (common in guitar tabs)
  const tabBlockLines = new Set<number>();

  // Group tab line indices into potential blocks, allowing gaps of 1-2 empty lines
  const tabGroups: number[][] = [];
  let currentGroup: number[] = [];

  for (let i = 0; i < tabLineIndices.length; i++) {
    const currentLineIndex = tabLineIndices[i];
    const prevLineIndex = i > 0 ? tabLineIndices[i - 1] : -1;

    // If this line is consecutive to the previous one, or within 2 lines (allowing empty lines), add to current group
    if (prevLineIndex === -1 || currentLineIndex <= prevLineIndex + 3) {
      currentGroup.push(currentLineIndex);
    } else {
      // Start a new group (gap is too large)
      if (currentGroup.length > 0) {
        tabGroups.push(currentGroup);
      }
      currentGroup = [currentLineIndex];
    }
  }

  // Don't forget the last group
  if (currentGroup.length > 0) {
    tabGroups.push(currentGroup);
  }

  // Mark all lines in groups that have 6 or more tab lines (not necessarily consecutive)
  for (const group of tabGroups) {
    if (group.length >= 6) {
      for (const lineIndex of group) {
        tabBlockLines.add(lineIndex);
      }
    }
  }

  // Mark the identified tab block lines
  for (const lineIndex of tabBlockLines) {
    if (lineIndex < processedLines.length) {
      processedLines[lineIndex].isTab = true;
    }
  }

  // Mark lines above and below tab blocks as context
  for (let i = 0; i < processedLines.length; i++) {
    if (processedLines[i].isTab) {
      // Mark line above as context
      if (i > 0 && !processedLines[i - 1].isTab) {
        processedLines[i - 1].isTabContext = true;
      }

      // Find the end of the tab block and mark the line below
      let j = i;
      while (j < processedLines.length && processedLines[j].isTab) {
        j++;
      }
      if (j < processedLines.length) {
        processedLines[j].isTabContext = true;
      }
      i = j - 1; // Skip to end of tab block
    }
  }

  return processedLines;
};

const splitProcessedLinesIntoColumns = (
  processedLines: ProcessedLine[],
  maxLinesPerColumn: number
): ProcessedLine[][] => {
  const numberOfLines = processedLines.length;

  if (numberOfLines <= maxLinesPerColumn * 1.2) {
    return [processedLines];
  } else if (numberOfLines <= maxLinesPerColumn * 2.2) {
    const midpoint = Math.ceil(numberOfLines / 2);
    const col1 = processedLines.slice(0, midpoint);
    const col2 = processedLines.slice(midpoint);
    return [col1, col2];
  } else if (numberOfLines <= maxLinesPerColumn * 3.2) {
    const linesPerCol = Math.ceil(numberOfLines / 3);
    const col1 = processedLines.slice(0, linesPerCol);
    const col2 = processedLines.slice(linesPerCol, 2 * linesPerCol);
    const col3 = processedLines.slice(2 * linesPerCol);
    return [col1, col2, col3];
  } else {
    const linesPerCol = Math.ceil(numberOfLines / 4);
    const col1 = processedLines.slice(0, linesPerCol);
    const col2 = processedLines.slice(linesPerCol, 2 * linesPerCol);
    const col3 = processedLines.slice(2 * linesPerCol, 3 * linesPerCol);
    const col4 = processedLines.slice(3 * linesPerCol);
    return [col1, col2, col3, col4];
  }
};

const filterHiddenLines = (
  processedLines: ProcessedLine[],
  hideSettings: {
    tabHideEnabled: boolean;
    parteHideEnabled: boolean;
    bracketHideEnabled: boolean;
  }
): ProcessedLine[] => {
  return processedLines.filter((line) => {
    // Hide bracket lines if bracket hide is enabled
    if (line.isBracket && hideSettings.bracketHideEnabled) {
      return false;
    }
    // Hide parte lines if parte hide is enabled
    if (line.isParte && hideSettings.parteHideEnabled) {
      return false;
    }
    // Hide tab/context lines if tab hide is enabled
    if ((line.isTab || line.isTabContext) && hideSettings.tabHideEnabled) {
      return false;
    }
    return true;
  });
};

const renderProcessedText = (
  processedLines: ProcessedLine[],
  highlightSettings: {
    tabHighlightEnabled: boolean;
    parteHighlightEnabled: boolean;
    bracketHighlightEnabled: boolean;
  }
) => {
  return processedLines.map((line, index) => {
    let className = "";

    if (line.isBracket && highlightSettings.bracketHighlightEnabled) {
      // Green highlighting for "[*]" lines (highest priority)
      className =
        "bg-green-200 border-l-4 border-green-500 px-2 py-0.5 font-medium";
    } else if (line.isParte && highlightSettings.parteHighlightEnabled) {
      // Blue highlighting for "Parte * de *" lines
      className =
        "bg-blue-200 border-l-4 border-blue-500 px-2 py-0.5 font-semibold";
    } else if (
      (line.isTab || line.isTabContext) &&
      highlightSettings.tabHighlightEnabled
    ) {
      // Red highlighting for tab blocks
      className = "bg-red-200 border-l-4 border-red-500 px-2 py-0.5";
    }

    return (
      <div key={index} className={className}>
        {line.content}
      </div>
    );
  });
};

export default function CifraDisplay({
  title,
  mainCifra,
  chords,
  cifraData,
}: CifraDisplayProps) {
  const MAX_LINES_PER_COLUMN = 30; // Adjust this based on desired column length

  // Get highlight settings from context
  const {
    tabHighlightEnabled,
    parteHighlightEnabled,
    bracketHighlightEnabled,
    tabHideEnabled,
    parteHideEnabled,
    bracketHideEnabled,
    mounted,
  } = useHighlightSettings();

  const { setChordsContent, setChordsWithPositions } = useChords();

  // Set chords content in context when component mounts or chords change
  React.useEffect(() => {
    if (cifraData && cifraData.chords && cifraData.chords.length > 0) {
      // Get chord names
      const chordNames = cifraData.chords.map((chord) => chord.name);

      // Load chord positions from guitar.json
      const chordsWithPositions = getChordPositionsForMultiple(chordNames);
      setChordsWithPositions(chordsWithPositions);

      // Format chords with positions for display
      const formattedChords = chordsWithPositions
        .map((chord) => formatChordPositions(chord))
        .join("\n\n");

      setChordsContent(formattedChords);
    } else {
      // Fall back to string chords if available
      setChordsContent(chords || "");
      setChordsWithPositions([]);
    }
  }, [chords, cifraData, setChordsContent, setChordsWithPositions]);

  // NEW: If cifraData is provided, use new structured rendering
  if (cifraData) {
    const preferences: CifraPreferences = {
      displayMode: "traditional", // Default to traditional mode for now
      showTablatura: mounted ? !tabHideEnabled : true,
      hideBracketSections: mounted ? bracketHideEnabled : false,
      showChordDiagrams: false,
      transposeKey: 0,
      fontSize: "medium",
      highlightChords: true,
      autoScroll: false,
      autoScrollSpeed: 50,
    };

    return (
      <div className="container mx-auto p-0 min-h-screen flex flex-col">
        <Card className="flex flex-col overflow-hidden shadow-none border-none bg-transparent">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col overflow-auto">
            <TraditionalRenderer cifra={cifraData} preferences={preferences} />
          </CardContent>
        </Card>
        <KeyboardNavigationIndicator />
      </div>
    );
  }

  // OLD: Legacy rendering for string-based cifras
  // Process the full text first to identify tab blocks correctly
  const processedMainCifra = identifyTabBlocks(mainCifra || "");

  // Filter out hidden lines (only apply filtering after mounted to avoid hydration issues)
  const hideSettings = {
    tabHideEnabled: mounted ? tabHideEnabled : false,
    parteHideEnabled: mounted ? parteHideEnabled : false,
    bracketHideEnabled: mounted ? bracketHideEnabled : false,
  };

  const filteredMainCifra = filterHiddenLines(processedMainCifra, hideSettings);

  // Split the processed lines into columns while preserving highlighting
  const mainCifraColumns = splitProcessedLinesIntoColumns(
    filteredMainCifra,
    MAX_LINES_PER_COLUMN
  ); // Highlight settings object to pass to renderProcessedText (only apply highlighting after mounted)
  const highlightSettings = {
    tabHighlightEnabled: mounted ? tabHighlightEnabled : true,
    parteHighlightEnabled: mounted ? parteHighlightEnabled : true,
    bracketHighlightEnabled: mounted ? bracketHighlightEnabled : true,
  };

  const getGridColsClass = (columnsLength: number): string => {
    if (columnsLength === 4) {
      return "md:grid-cols-4";
    }
    if (columnsLength === 3) {
      return "md:grid-cols-3";
    }
    if (columnsLength === 2) {
      return "md:grid-cols-2";
    }
    return "grid-cols-1";
  };

  return (
    <div className="container mx-auto p-0 min-h-screen flex flex-col">
      <Card className="flex flex-col overflow-hidden shadow-none border-none bg-transparent">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col overflow-auto">
          {" "}
          {/* Main Cifra Section */}
          <div className="flex-shrink-0 basis-3/4 overflow-auto pb-4">
            <div
              className={`grid ${getGridColsClass(
                mainCifraColumns.length
              )} gap-x-8`}
            >
              {" "}
              {mainCifraColumns.map((columnProcessedLines, index) => {
                return (
                  <div
                    key={`main-${index}`}
                    className="whitespace-pre-wrap font-mono text-sm mb-4"
                  >
                    {renderProcessedText(
                      columnProcessedLines,
                      highlightSettings
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
      <KeyboardNavigationIndicator />
    </div>
  );
}
