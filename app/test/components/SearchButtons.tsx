"use client";

interface SearchButtonsProps {
  onSearch: () => void;
  onAdvancedSearch: () => void;
  onClear: () => void;
  isSearching: boolean;
  isAdvancedSearching: boolean;
  disabled: boolean;
}

export default function SearchButtons({
  onSearch,
  onAdvancedSearch,
  onClear,
  isSearching,
  isAdvancedSearching,
  disabled,
}: SearchButtonsProps) {
  return (
    <div className="flex justify-center mt-8 space-x-4">
      {/* Main Search Button */}
      <button
        onClick={onSearch}
        disabled={disabled || isSearching}
        className="px-6 py-3 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed text-gray-700 text-sm rounded border border-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center space-x-2"
      >
        {isSearching && (
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
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
        <span>{isSearching ? "Buscando..." : "Buscar no Google"}</span>
      </button>

      {/* Advanced Search Button */}
      <button
        onClick={onAdvancedSearch}
        disabled={disabled || isAdvancedSearching}
        className="px-6 py-3 bg-blue-50 hover:bg-blue-100 disabled:bg-blue-50 disabled:text-blue-400 disabled:cursor-not-allowed text-blue-700 text-sm rounded border border-blue-200 hover:border-blue-300 transition-all duration-200 flex items-center space-x-2"
      >
        {isAdvancedSearching && (
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
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
        <span>{isAdvancedSearching ? "Buscando..." : "Busca Avançada"}</span>
      </button>

      {/* Clear Button */}
      <button
        type="button"
        onClick={onClear}
        className="px-6 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm rounded border border-gray-200 hover:border-gray-300 transition-all duration-200"
      >
        Limpar
      </button>
    </div>
  );
}
