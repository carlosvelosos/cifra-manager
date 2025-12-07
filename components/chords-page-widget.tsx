"use client";

import React, { useState, useMemo } from "react";
import { getAllKeys, getChordsForKey } from "@/lib/chord-dict";

export function ChordsPageWidget() {
  const allKeys = getAllKeys();

  const [selectedKey, setSelectedKey] = useState<string>(allKeys[0] || "C");
  const [selectedSuffix, setSelectedSuffix] = useState<string | null>(null);

  // Get available suffixes for selected key
  const availableSuffixes = useMemo(() => {
    const keyChords = getChordsForKey(selectedKey);
    return keyChords.map((c) => c.suffix);
  }, [selectedKey]);

  // Get selected chord with all its positions
  const selectedChord = useMemo(() => {
    if (!selectedSuffix) return null;
    const keyChords = getChordsForKey(selectedKey);
    return keyChords.find((c) => c.suffix === selectedSuffix) || null;
  }, [selectedKey, selectedSuffix]);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="border-b border-gray-200 sticky top-0 bg-white z-50">
        {/* Keys Bar */}
        <div className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {allKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedKey(key);
                    setSelectedSuffix(null);
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded transition-colors whitespace-nowrap ${
                    selectedKey === key
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Suffixes Bar */}
        <div>
          <div className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              <button
                onClick={() => setSelectedSuffix(null)}
                className={`px-4 py-2 text-sm font-medium rounded transition-colors whitespace-nowrap ${
                  selectedSuffix === null
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              {availableSuffixes.map((suffix) => (
                <button
                  key={suffix}
                  onClick={() => setSelectedSuffix(suffix)}
                  className={`px-4 py-2 text-sm font-medium rounded transition-colors whitespace-nowrap ${
                    selectedSuffix === suffix
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {suffix || "major"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {selectedChord ? (
          <div>
            {/* Chord Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-light mb-2">
                {selectedChord.key}
                <span className="text-gray-500 font-light">
                  {selectedChord.suffix}
                </span>
              </h1>
              <p className="text-sm text-gray-500">
                {selectedChord.positions.length} position
                {selectedChord.positions.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Fret Positions Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Position
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase">
                      String 1
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase">
                      String 2
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase">
                      String 3
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase">
                      String 4
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase">
                      String 5
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase">
                      String 6
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedChord.positions.map((position, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      {position.frets.map((fret, stringIdx) => {
                        // Calculate actual fret number by adding base fret offset
                        const baseFret = position.baseFret || 1;
                        const displayFret =
                          fret === 0 || fret === -1
                            ? fret
                            : fret + baseFret - 1;

                        return (
                          <td
                            key={stringIdx}
                            className="px-4 py-3 text-center text-sm font-semibold"
                          >
                            <span
                              className={`inline-block w-8 h-8 flex items-center justify-center rounded ${
                                displayFret === 0
                                  ? "bg-green-100 text-green-700 border border-green-300"
                                  : displayFret === -1
                                  ? "bg-red-100 text-red-700 border border-red-300"
                                  : "bg-blue-100 text-blue-700 border border-blue-300"
                              }`}
                            >
                              {displayFret === 0
                                ? "O"
                                : displayFret === -1
                                ? "X"
                                : displayFret}
                            </span>
                          </td>
                        );
                      })}
                      <td className="px-4 py-3 text-sm text-gray-600">
                        <div className="flex flex-col gap-1">
                          {position.baseFret && position.baseFret > 1 && (
                            <span className="text-xs bg-gray-200 px-2 py-1 rounded w-fit">
                              Base fret: {position.baseFret}
                            </span>
                          )}
                          {position.capo && (
                            <span className="text-xs bg-teal-200 text-teal-800 px-2 py-1 rounded w-fit">
                              Capo: {position.baseFret}
                            </span>
                          )}
                          {position.barres && position.barres.length > 0 && (
                            <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded w-fit">
                              Barre: fret {position.barres.join(", ")}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-xs font-semibold text-gray-700 uppercase mb-3">
                Legend
              </p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-6 h-6 bg-green-100 border border-green-300 rounded text-center text-xs font-semibold text-green-700">
                    O
                  </span>
                  <span className="text-gray-600">Open string</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-6 h-6 bg-red-100 border border-red-300 rounded text-center text-xs font-semibold text-red-700">
                    X
                  </span>
                  <span className="text-gray-600">Muted string</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-6 h-6 bg-blue-100 border border-blue-300 rounded text-center text-xs font-semibold text-blue-700">
                    3
                  </span>
                  <span className="text-gray-600">Fret number</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-96 text-center">
            <div>
              <p className="text-gray-500 text-lg">Select a chord type</p>
              <p className="text-sm text-gray-400 mt-2">
                Click a suffix above to view positions
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
