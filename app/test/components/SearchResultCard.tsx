"use client";

import { SearchResult } from "../types";

interface SearchResultCardProps {
  result: SearchResult;
  onFetchHtml: (url: string) => void;
  isLoadingHtml: boolean;
  artistQuery: string;
}

export default function SearchResultCard({
  result,
  onFetchHtml,
  isLoadingHtml,
  artistQuery,
}: SearchResultCardProps) {
  const openMoreResults = () => {
    const searchQuery = `site:cifraclub.com.br ${artistQuery.trim()}`;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      searchQuery
    )}`;
    window.open(googleSearchUrl, "_blank");
  };

  return (
    <div className="mt-8 max-w-xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 mt-1">
            <svg
              className="w-5 h-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Resultado Encontrado
            </h3>
            <a
              href={result.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <h4 className="text-blue-600 group-hover:text-blue-800 font-medium text-base mb-1 truncate">
                {result.title}
              </h4>
              <p
                className="text-sm text-gray-600 mb-2 overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical" as const,
                }}
              >
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

            {/* Action Buttons */}
            <div className="mt-4 flex space-x-3">
              <button
                onClick={() => window.open(result.url, "_blank")}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Abrir Cifra
              </button>
              <button
                onClick={() => onFetchHtml(result.url)}
                disabled={isLoadingHtml}
                className="inline-flex items-center px-3 py-1.5 border border-blue-300 text-xs font-medium rounded text-blue-700 bg-blue-50 hover:bg-blue-100 disabled:bg-blue-50 disabled:text-blue-400 disabled:cursor-not-allowed transition-colors"
              >
                {isLoadingHtml && (
                  <svg
                    className="w-3 h-3 mr-1 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                {isLoadingHtml ? "Carregando..." : "Ver HTML"}
              </button>
              <button
                onClick={openMoreResults}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Ver Mais Resultados
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
