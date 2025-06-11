"use client";

import { useState } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  placeholder?: string;
  onClear: () => void;
}

export default function SearchInput({
  value,
  onChange,
  onSubmit,
  isLoading,
  placeholder = "Buscar artista (ex: Grupo Revelação, Zeca Pagodinho...)",
  onClear,
}: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div
        className={`
          relative flex items-center bg-white rounded-full border
          transition-all duration-200 ease-in-out
          ${
            isFocused
              ? "shadow-lg border-gray-300"
              : "shadow-md border-gray-200 hover:shadow-lg"
          }
        `}
      >
        {/* Search Icon */}
        <div className="absolute left-4 text-gray-400">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
              e.preventDefault();
              handleSubmit();
            }
          }}
          placeholder={placeholder}
          className="w-full py-4 pl-12 pr-16 text-lg bg-transparent border-none outline-none text-gray-800 placeholder-gray-500"
          autoComplete="off"
          spellCheck="false"
        />

        {/* Clear Button */}
        {value && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-16 p-1 text-gray-400 hover:text-gray-600 transition-colors"
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
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!value.trim() || isLoading}
          className="absolute right-2 p-2 text-gray-400 hover:text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <svg
              className="w-6 h-6 animate-spin"
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
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5-5 5M6 12h12"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}
