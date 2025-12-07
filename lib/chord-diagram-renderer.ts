/**
 * Chord Diagram Renderer
 * Converts chord position data into SVG markup
 */

export interface ChordPosition {
  frets: (number | -1)[];
  fingers: (number | 0)[];
  barres?: number[];
  capo?: boolean;
  baseFret?: number;
  midi?: number[];
}

export interface ChordDiagramConfig {
  strings: number;
  fretsOnChord: number;
  stringWidth?: number;
  fretHeight?: number;
  padding?: number;
  showFretNumbers?: boolean;
}

export const DEFAULT_CONFIG: ChordDiagramConfig = {
  strings: 6,
  fretsOnChord: 4,
  stringWidth: 45,
  fretHeight: 30,
  padding: 25,
  showFretNumbers: true,
};

/**
 * Generate SVG for a chord diagram
 */
export function generateChordSVG(
  position: ChordPosition,
  config: Partial<ChordDiagramConfig> = {}
): string {
  const settings = { ...DEFAULT_CONFIG, ...config };
  const strings = settings.strings;
  const fretsOnChord = settings.fretsOnChord;
  const stringWidth = settings.stringWidth || DEFAULT_CONFIG.stringWidth!;
  const fretHeight = settings.fretHeight || DEFAULT_CONFIG.fretHeight!;
  const padding = settings.padding || DEFAULT_CONFIG.padding!;
  const showFretNumbers =
    settings.showFretNumbers ?? DEFAULT_CONFIG.showFretNumbers;

  // Reserve extra space at top for capo indicator
  const capoSpace = fretHeight / 2;
  const width = stringWidth * (strings - 1) + padding * 2;
  const height =
    fretHeight * (fretsOnChord + 1) +
    padding * 2 +
    (showFretNumbers ? 30 : 0) +
    capoSpace;

  const frets = position.frets;
  const fingers = position.fingers;
  const baseFret = position.baseFret || 1;
  const barres = position.barres || [];
  const capo = position.capo || false;

  // Adjust padding to account for capo space
  const adjustedPadding = padding + capoSpace;

  let svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" class="chord-diagram">`;

  // Draw fret lines
  for (let f = 0; f <= fretsOnChord; f++) {
    const y = adjustedPadding + f * fretHeight;
    const x1 = adjustedPadding;
    const x2 = adjustedPadding + stringWidth * (strings - 1);

    // Thicker line for first fret (nut) or capo
    const strokeWidth = f === 0 && !capo ? 3 : 1;
    svg += `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#333" stroke-width="${strokeWidth}"/>`;
  }

  // Draw string lines
  for (let s = 0; s < strings; s++) {
    const x = adjustedPadding + s * stringWidth;
    const y1 = adjustedPadding;
    const y2 = adjustedPadding + fretsOnChord * fretHeight;
    svg += `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="#333" stroke-width="1.5"/>`;
  }

  // Draw fret numbers on the left
  if (showFretNumbers && baseFret > 1) {
    for (let f = 1; f <= fretsOnChord; f++) {
      const actualFret = baseFret + f - 1;
      const y = adjustedPadding + f * fretHeight + fretHeight / 2 + 5;
      svg += `<text x="${
        adjustedPadding - 15
      }" y="${y}" font-size="10" fill="#666" text-anchor="end">${actualFret}</text>`;
    }
  }

  // Draw muted strings (X) and open strings (O)
  for (let s = 0; s < strings; s++) {
    const x = adjustedPadding + s * stringWidth;
    if (frets[s] === -1) {
      // Muted string (X)
      svg += `<text x="${x}" y="${
        adjustedPadding - 8
      }" font-size="16" font-weight="bold" fill="#999" text-anchor="middle">✕</text>`;
    } else if (frets[s] === 0) {
      // Open string (O)
      svg += `<circle cx="${x}" cy="${
        adjustedPadding - 8
      }" r="6" fill="none" stroke="#999" stroke-width="1.5"/>`;
    }
  }

  // Draw barre lines
  barres.forEach((barFret) => {
    const fretIndex = barFret - (baseFret - 1);
    if (fretIndex > 0 && fretIndex <= fretsOnChord) {
      const y = adjustedPadding + fretIndex * fretHeight - fretHeight / 2;
      const x1 = adjustedPadding;
      const x2 = adjustedPadding + stringWidth * (strings - 1);
      svg += `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#ff6b6b" stroke-width="4" stroke-linecap="round" opacity="0.6"/>`;
    }
  });

  // Draw finger positions (dots)
  for (let s = 0; s < strings; s++) {
    const fret = frets[s];
    if (fret > 0) {
      const fretIndex = fret - (baseFret - 1);
      if (fretIndex >= 1 && fretIndex <= fretsOnChord) {
        const x = adjustedPadding + s * stringWidth;
        const y = adjustedPadding + fretIndex * fretHeight - fretHeight / 2;
        const finger = fingers[s] || 0;

        // Dot color based on finger number
        const dotColor = finger === 0 ? "#ddd" : "#333";
        svg += `<circle cx="${x}" cy="${y}" r="8" fill="${dotColor}" stroke="none"/>`;

        // Finger number inside dot
        if (finger > 0 && finger <= 4) {
          svg += `<text x="${x}" y="${
            y + 4
          }" font-size="11" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${finger}</text>`;
        }
      }
    }
  }

  // Draw capo indicator
  if (capo && baseFret > 1) {
    const y = padding + fretHeight / 2;
    const x1 = adjustedPadding - 5;
    const x2 = adjustedPadding + stringWidth * (strings - 1) + 5;
    svg += `<rect x="${x1}" y="${y - 8}" width="${
      x2 - x1
    }" height="16" fill="#4ecdc4" opacity="0.3" rx="4"/>`;
    svg += `<text x="${adjustedPadding - 20}" y="${
      y + 5
    }" font-size="10" fill="#4ecdc4" font-weight="bold">Capo ${baseFret}</text>`;
  }

  svg += `</svg>`;
  return svg;
}

/**
 * Convert SVG string to data URL
 */
export function svgToDataUrl(svg: string): string {
  const encoded = encodeURIComponent(svg);
  return `data:image/svg+xml;utf8,${encoded}`;
}
