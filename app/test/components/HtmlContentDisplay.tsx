"use client";

import { HtmlContent } from "../types";
import { useEffect, useRef } from "react";

interface HtmlContentDisplayProps {
  content: HtmlContent;
  onClose: () => void;
}

export default function HtmlContentDisplay({
  content,
  onClose,
}: HtmlContentDisplayProps) {
  const contentRef = useRef<HTMLPreElement>(null);

  // Post-process the rendered content to remove any remaining spacing issues
  useEffect(() => {
    if (contentRef.current) {
      const processContent = () => {
        const container = contentRef.current;
        if (!container) return;

        // Find all pre elements in the rendered content
        const preElements = container.querySelectorAll("pre");

        preElements.forEach((pre) => {
          // Get the text content and clean it up
          let textContent = pre.textContent || "";

          // Apply aggressive whitespace cleanup
          textContent = textContent
            // Remove excessive line breaks
            .replace(/\n{3,}/g, "\n\n")
            // Remove lines that are only whitespace
            .replace(/^\s*$/gm, "")
            // Clean up leading/trailing whitespace
            .trim();

          // Update the pre element's content
          pre.textContent = textContent;
        });

        // Remove any empty elements that might be left
        const emptyElements = container.querySelectorAll(
          "p:empty, div:empty, span:empty"
        );
        emptyElements.forEach((el) => el.remove());
      };

      // Process immediately and after a short delay to catch any dynamic content
      processContent();
      setTimeout(processContent, 100);
    }
  }, [content.html]);

  // Utility function to remove tablatura spans from HTML content
  const removeTablaturaFromHtml = (html: string): string => {
    if (!html) return ""; // Remove <span class="tablatura">...</span> and their content with surrounding context
    // Enhanced regex to handle nested spans and various formatting
    let cleanHtml = html.replace(
      /\n*\s*<span\s+class="tablatura"[^>]*>[\s\S]*?<\/span>\s*(?:<\/span>)?\s*\n*/gi,
      ""
    );

    // More comprehensive whitespace cleanup
    cleanHtml = cleanHtml
      // Remove multiple consecutive line breaks (more than 2)
      .replace(/\n\s*\n\s*\n+/g, "\n\n")
      // Remove lines that only contain whitespace
      .replace(/^\s*$/gm, "")
      // Remove empty lines at the start of sections/paragraphs
      .replace(/^\s*\n+/gm, "")
      // Remove trailing whitespace on lines
      .replace(/[ \t]+$/gm, "")
      // Remove excessive spaces (more than 2 consecutive spaces)
      .replace(/  +/g, " ")
      // Clean up spacing around HTML tags
      .replace(/>\s*\n\s*</g, ">\n<")
      // Remove empty paragraphs or divs that might be left
      .replace(/<(p|div|span)[^>]*>\s*<\/\1>/gi, "") // Remove empty pre tags that might be left behind
      .replace(/<pre[^>]*>\s*<\/pre>/gi, "")
      // Additional cleanup for common patterns after tablatura removal
      .replace(/\n\s*\n\s*\[/g, "\n\n[") // Clean up spacing before section markers
      .replace(/\]\s*\n\s*\n\s*\n/g, "]\n\n") // Clean up spacing after section markers
      .replace(/\n\s*\n\s*<b>/g, "\n\n<b>") // Clean up spacing before chord markers
      .replace(/\]\s*<b>/g, "]\n\n<b>") // Add line break between section headers and chords
      // Clean up any remaining whitespace anomalies around common HTML elements
      .replace(/(<\/?(div|p|span|br)[^>]*>)\s*\n\s*\n\s*/gi, "$1\n")
      // Clean up multiple line breaks again after all other cleanup
      .replace(/\n{3,}/g, "\n\n")
      // Remove leading/trailing whitespace from the entire content
      .trim();

    return cleanHtml;
  };

  // Get clean HTML content without tablatura
  const cleanHtmlContent = removeTablaturaFromHtml(content.html);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="mt-8 max-w-6xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span>Conteúdo HTML da Página</span>
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

        {/* Status Info */}
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <span
                  className={`w-2 h-2 rounded-full ${
                    content.success ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
                <span className="text-gray-600">
                  Status: {content.success ? "Sucesso" : "Erro"}
                </span>
              </span>
              <span className="text-gray-600">
                Timestamp: {new Date(content.timestamp).toLocaleString()}
              </span>
            </div>
            <a
              href={content.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {content.url}
            </a>
          </div>
        </div>

        {/* Songs Found Summary */}
        {content.songsFound !== undefined && (
          <div className="p-4 bg-blue-50 border-b border-gray-200">
            <p className="text-sm text-blue-800">
              🎵 <strong>{content.songsFound}</strong> músicas encontradas
              {content.maisAcessadas && content.maisAcessadas.length > 0 && (
                <span>
                  {" "}
                  (as {content.maisAcessadas.length} mais acessadas listadas
                  abaixo)
                </span>
              )}
            </p>
          </div>
        )}

        {/* Most Accessed Songs */}
        {content.maisAcessadas && content.maisAcessadas.length > 0 && (
          <div className="p-4 border-b border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              🔥 Músicas Mais Acessadas
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {content.maisAcessadas.map((song, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-2 bg-gray-50 rounded border"
                >
                  <span className="text-xs font-medium text-gray-500 w-6">
                    {index + 1}.
                  </span>
                  <a
                    href={song.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-sm text-blue-600 hover:text-blue-800 truncate"
                  >
                    {song.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HTML Content */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-gray-700">
              Código HTML da Página
            </h4>{" "}
            <div className="flex space-x-2">
              <button
                onClick={() => copyToClipboard(cleanHtmlContent)}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copiar HTML
              </button>
              <span className="text-xs text-gray-500 px-2 py-1.5">
                {(cleanHtmlContent.length / 1024).toFixed(1)} KB (tablatura
                removida)
              </span>
            </div>{" "}
          </div>
          <div className="max-h-96 overflow-auto border border-gray-200 rounded">
            <pre
              ref={contentRef}
              className="p-4 text-xs font-mono text-gray-800 whitespace-pre-wrap"
            >
              {cleanHtmlContent}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
