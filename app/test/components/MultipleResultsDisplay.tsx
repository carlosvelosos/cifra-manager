"use client";

import { MultipleSearchResults } from "../types";

interface MultipleResultsDisplayProps {
  results: MultipleSearchResults;
  onClose: () => void;
  artistQuery: string;
}

export default function MultipleResultsDisplay({
  results,
  onClose,
  artistQuery,
}: MultipleResultsDisplayProps) {
  const openAllResults = () => {
    const searchQuery = `site:cifraclub.com.br ${artistQuery.trim()}`;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      searchQuery
    )}`;
    window.open(googleSearchUrl, "_blank");
  };

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900 flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>Resultados da Busca Avançada</span>
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Results Summary */}
        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            🎯 Encontrados <strong>{results.results.length}</strong> resultados
            {results.totalResults && parseInt(results.totalResults) > 0 && (
              <span>
                {" "}
                de aproximadamente <strong>{results.totalResults}</strong> total
              </span>
            )}{" "}
            para <strong>&quot;{artistQuery}&quot;</strong> no CifraClub
          </p>
        </div>

        {/* Results Grid */}
        <div className="space-y-4">
          {results.results.map((result, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 bg-gray-50 hover:bg-white"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xs font-medium text-blue-600">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <h4 className="text-blue-600 group-hover:text-blue-800 font-medium text-base mb-1 line-clamp-2">
                      {result.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {result.snippet}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="truncate">{result.url}</span>
                      <svg
                        className="w-3 h-3 ml-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </a>
                  <div className="mt-3">
                    <button
                      onClick={() => window.open(result.url, "_blank")}
                      className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                      Abrir Cifra
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Results Button */}
        <div className="mt-6 text-center">
          <button
            onClick={openAllResults}
            className="inline-flex items-center px-6 py-3 border border-blue-300 text-sm font-medium rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors space-x-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>Ver Todos os Resultados no Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
