/**
 * Chord Dictionary - Unit Tests
 * Tests for chord loading, searching, and filtering
 */

import { describe, it, expect, beforeAll } from "@jest/globals";
import {
  loadChordData,
  getChordList,
  findChord,
  getChordsForKey,
  getAllKeys,
  getAllSuffixes,
  searchChords,
  type ChordDictionary,
} from "@/lib/chord-dict";

describe("Chord Dictionary", () => {
  let data: ChordDictionary;

  beforeAll(() => {
    data = loadChordData();
  });

  describe("loadChordData", () => {
    it("should load chord data successfully", () => {
      expect(data).toBeDefined();
      expect(data.main).toBeDefined();
      expect(data.chords).toBeDefined();
    });

    it("should have correct instrument properties", () => {
      expect(data.main.strings).toBe(6);
      expect(data.main.name).toBe("guitar");
    });

    it("should cache data on second call", () => {
      const firstCall = loadChordData();
      const secondCall = loadChordData();
      expect(firstCall).toBe(secondCall); // Same object reference
    });
  });

  describe("getChordList", () => {
    it("should return a list of all chords", () => {
      const chords = getChordList();
      expect(chords.length).toBeGreaterThan(0);
    });

    it("should have correct chord structure", () => {
      const chords = getChordList();
      const chord = chords[0];
      expect(chord).toHaveProperty("key");
      expect(chord).toHaveProperty("suffix");
      expect(chord).toHaveProperty("displayName");
    });

    it("should cache the list", () => {
      const firstCall = getChordList();
      const secondCall = getChordList();
      expect(firstCall).toBe(secondCall);
    });
  });

  describe("findChord", () => {
    it("should find a chord by key and suffix", () => {
      const chord = findChord("C", "major");
      expect(chord).toBeDefined();
      expect(chord?.key).toBe("C");
      expect(chord?.suffix).toBe("major");
    });

    it("should return null for non-existent chord", () => {
      const chord = findChord("X", "nonexistent");
      expect(chord).toBeNull();
    });

    it("should have positions array", () => {
      const chord = findChord("A", "minor");
      expect(chord?.positions).toBeDefined();
      expect(Array.isArray(chord?.positions)).toBe(true);
      expect(chord!.positions.length).toBeGreaterThan(0);
    });
  });

  describe("getChordsForKey", () => {
    it("should return all chords for a key", () => {
      const chords = getChordsForKey("G");
      expect(chords.length).toBeGreaterThan(0);
    });

    it("should filter chords correctly", () => {
      const chords = getChordsForKey("E");
      chords.forEach((chord) => {
        expect(chord.key).toBe("E");
      });
    });

    it("should return empty array for non-existent key", () => {
      const chords = getChordsForKey("Z");
      expect(chords).toEqual([]);
    });
  });

  describe("getAllKeys", () => {
    it("should return all 12 keys", () => {
      const keys = getAllKeys();
      expect(keys.length).toBe(12);
    });

    it("should include all standard chromatic notes", () => {
      const keys = getAllKeys();
      expect(keys).toContain("C");
      expect(keys).toContain("A");
      expect(keys).toContain("E");
    });
  });

  describe("getAllSuffixes", () => {
    it("should return all chord suffixes", () => {
      const suffixes = getAllSuffixes();
      expect(suffixes.length).toBeGreaterThan(0);
    });

    it("should include common chord types", () => {
      const suffixes = getAllSuffixes();
      expect(suffixes).toContain("major");
      expect(suffixes).toContain("minor");
      expect(suffixes).toContain("7");
    });
  });

  describe("searchChords", () => {
    it("should find chords by exact name", () => {
      const results = searchChords("Am");
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].displayName).toContain("Am");
    });

    it("should support partial matching", () => {
      const results = searchChords("C");
      expect(results.length).toBeGreaterThan(0);
    });

    it("should be case-insensitive", () => {
      const lowerResults = searchChords("am");
      const upperResults = searchChords("AM");
      expect(lowerResults.length).toBe(upperResults.length);
    });

    it("should return empty array for no matches", () => {
      const results = searchChords("XYZ123");
      expect(results).toEqual([]);
    });

    it("should trim whitespace", () => {
      const results1 = searchChords("Am");
      const results2 = searchChords("  Am  ");
      expect(results1.length).toBe(results2.length);
    });

    it("should return empty array for empty query", () => {
      const results = searchChords("");
      expect(results).toEqual([]);
    });
  });

  describe("Chord Positions", () => {
    it("should have valid position data", () => {
      const chord = findChord("D", "major");
      expect(chord?.positions).toBeDefined();

      const position = chord!.positions[0];
      expect(position.frets).toBeDefined();
      expect(position.fingers).toBeDefined();
      expect(position.frets.length).toBe(6); // 6 strings
    });

    it("should have correct fret values", () => {
      const chord = findChord("G", "major");
      const position = chord!.positions[0];

      // Frets should be -1 (muted), 0 (open), or 1-24
      position.frets.forEach((fret) => {
        expect(fret).toBeGreaterThanOrEqual(-1);
        expect(fret).toBeLessThanOrEqual(24);
      });
    });

    it("should have finger numbers 0-4", () => {
      const chord = findChord("A", "minor");
      const position = chord!.positions[0];

      position.fingers.forEach((finger) => {
        expect(finger).toBeGreaterThanOrEqual(0);
        expect(finger).toBeLessThanOrEqual(4);
      });
    });
  });
});
