"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface FetchResponse {
  html: string;
  url: string;
  originalUrl: string;
  timestamp: string;
  success: boolean;
  maisAcessadas?: Array<{
    title: string;
    url: string;
    artist?: string;
  }>;
  songsFound?: number;
}

export default function FetchHtmlPlayground() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<FetchResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"preview" | "raw" | "formatted">(
    "preview"
  );
  const [showBodyOnly, setShowBodyOnly] = useState(false);
  const [showCifraOnly, setShowCifraOnly] = useState(false);

  const handleFetch = async () => {
    if (!url.trim()) {
      setError("Please enter a URL");
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const encodedUrl = encodeURIComponent(url.trim());
      const apiResponse = await fetch(`/api/fetch-html?url=${encodedUrl}`);

      if (!apiResponse.ok) {
        const errorData = await apiResponse.json();
        throw new Error(errorData.error || `HTTP ${apiResponse.status}`);
      }

      const data = await apiResponse.json();
      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch HTML");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleFetch();
    }
  };
  const handleTestFile = async (testFile: string) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const apiResponse = await fetch(`/api/fetch-html?testFile=${testFile}`);

      if (!apiResponse.ok) {
        const errorData = await apiResponse.json();
        throw new Error(errorData.error || `HTTP ${apiResponse.status}`);
      }

      const data = await apiResponse.json();
      setResponse(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch test file"
      );
    } finally {
      setLoading(false);
    }
  };

  const formatHtml = (html: string) => {
    // Basic HTML formatting for better readability
    let formatted = html.replace(/></g, ">\n<").replace(/^\s*\n/gm, "");

    const lines = formatted.split("\n");
    let indentLevel = 0;

    return lines
      .map((line, index) => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return "";

        // Decrease indent for closing tags
        if (trimmedLine.startsWith("</")) {
          indentLevel = Math.max(0, indentLevel - 1);
        }

        const indent = "  ".repeat(indentLevel);
        const lineNumber = (index + 1).toString().padStart(4);
        const formattedLine = `${lineNumber}: ${indent}${trimmedLine}`;

        // Increase indent for opening tags (but not self-closing or closing tags)
        if (
          trimmedLine.startsWith("<") &&
          !trimmedLine.startsWith("</") &&
          !trimmedLine.endsWith("/>") &&
          !trimmedLine.match(
            /<(br|hr|img|input|meta|link|area|base|col|embed|source|track|wbr)[\s>]/i
          )
        ) {
          indentLevel++;
        }

        return formattedLine;
      })
      .filter((line) => line.trim())
      .join("\n");
  };
  const extractBodyContent = (html: string) => {
    // Extract content between <body> tags
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    return bodyMatch ? bodyMatch[1] : html;
  };
  const extractCifraContent = (html: string) => {
    // Find the start of the cifra div
    const startMatch = html.match(
      /<div[^>]*class="[^"]*g-1[^"]*g-fix[^"]*cifra[^"]*"[^>]*>/i
    );
    if (!startMatch) {
      return html; // No cifra div found, return original
    }

    const startIndex = startMatch.index! + startMatch[0].length;

    // Check for the tuning input tag and stop there if found
    const tuningInputIndex = html.indexOf(
      '<input type="hidden" data-cy="song-tuningValue"',
      startIndex
    );

    let divCount = 1; // We're already inside one div
    let currentIndex = startIndex;

    // Parse through the HTML to find the matching closing div or tuning input
    while (currentIndex < html.length && divCount > 0) {
      // If we encounter the tuning input, stop processing there
      if (tuningInputIndex !== -1 && currentIndex >= tuningInputIndex) {
        let extractedContent = html.substring(startIndex, tuningInputIndex);
        return removeTabSection(extractedContent);
      }

      // Look for the next div tag (opening or closing)
      const nextDivMatch = html.substring(currentIndex).match(/<\/?div[^>]*>/i);

      if (!nextDivMatch) {
        break; // No more div tags found
      }

      const fullMatch = nextDivMatch[0];
      currentIndex += nextDivMatch.index! + fullMatch.length;

      if (fullMatch.startsWith("</div")) {
        divCount--; // Closing div
      } else if (!fullMatch.endsWith("/>")) {
        divCount++; // Opening div (not self-closing)
      }
    } // If tuning input was found and we reached the end, return up to that point
    if (tuningInputIndex !== -1) {
      let extractedContent = html.substring(startIndex, tuningInputIndex);
      return removeTabSection(extractedContent);
    }

    if (divCount === 0) {
      // Found the matching closing div
      const endIndex = currentIndex - "</div>".length;
      let extractedContent = html.substring(startIndex, endIndex);
      return removeTabSection(extractedContent);
    }

    // Fallback: look for the marketing modal as end marker
    const marketingModalIndex = html.indexOf(
      '<div id="js-marketing-modal-wrapper">'
    );
    if (marketingModalIndex > startIndex) {
      let extractedContent = html.substring(startIndex, marketingModalIndex);
      return removeTabSection(extractedContent);
    }

    // Last resort: return from start to end of body
    let extractedContent = html.substring(startIndex);
    return removeTabSection(extractedContent);
  }; // Helper function to remove the tab section and tablatura spans
  const removeTabSection = (content: string) => {
    if (!content) return ""; // First, remove tablatura spans and their content with surrounding context
    // Enhanced regex to handle nested spans and various formatting
    let cleanContent = content.replace(
      /\n*\s*<span\s+class="tablatura"[^>]*>[\s\S]*?<\/span>\s*(?:<\/span>)?\s*\n*/gi,
      ""
    );

    // Then remove the existing tab section logic
    const tabStartPattern = '<span class="tab_el dark tab_more">';
    const tabEndPattern = '<span id="cifra_tom">';

    const tabStartIndex = cleanContent.indexOf(tabStartPattern);
    const tabEndIndex = cleanContent.indexOf(tabEndPattern);

    if (
      tabStartIndex !== -1 &&
      tabEndIndex !== -1 &&
      tabStartIndex < tabEndIndex
    ) {
      // Remove everything between the start tag and the end tag (keeping the end tag)
      cleanContent =
        cleanContent.substring(0, tabStartIndex) +
        cleanContent.substring(tabEndIndex);
    } // Clean up excessive whitespace that may be left behind
    cleanContent = cleanContent
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
      .replace(/>\s*\n\s*</g, ">\n<") // Remove empty paragraphs or divs that might be left
      .replace(/<(p|div|span)[^>]*>\s*<\/\1>/gi, "")
      // Additional cleanup for common patterns after tablatura removal
      .replace(/\n\s*\n\s*\[/g, "\n\n[") // Clean up spacing before section markers
      .replace(/\]\s*\n\s*\n\s*\n/g, "]\n\n") // Clean up spacing after section markers
      .replace(/\n\s*\n\s*<b>/g, "\n\n<b>") // Clean up spacing before chord markers
      .replace(/\]\s*<b>/g, "]\n\n<b>") // Add line break between section headers and chords
      // Clean up multiple line breaks again
      .replace(/\n{3,}/g, "\n\n")
      // Remove leading/trailing whitespace
      .trim();

    return cleanContent;
  };
  const getDisplayHtml = () => {
    if (!response) return "";
    let html = response.html;

    if (showCifraOnly) {
      html = extractCifraContent(html);
    } else if (showBodyOnly) {
      html = extractBodyContent(html);
    }

    return html;
  };

  // New specific content extractors
  const extractH1Content = (html: string) => {
    const h1Match = html.match(
      /<h1[^>]*class="[^"]*t1[^"]*"[^>]*>(.*?)<\/h1>/i
    );
    return h1Match ? h1Match[1].replace(/<[^>]*>/g, "").trim() : "Not found";
  };

  const extractH2Content = (html: string) => {
    const h2Match = html.match(
      /<h2[^>]*class="[^"]*t3[^"]*"[^>]*>(.*?)<\/h2>/i
    );
    return h2Match ? h2Match[1].replace(/<[^>]*>/g, "").trim() : "Not found";
  };

  const extractTomContent = (html: string) => {
    const tomMatch = html.match(/<span[^>]*id="cifra_tom"[^>]*>(.*?)<\/span>/i);
    return tomMatch ? tomMatch[1].replace(/<[^>]*>/g, "").trim() : "Not found";
  };
  const extractPreContent = (html: string) => {
    // Find the first <pre> tag
    const preStartMatch = html.match(/<pre[^>]*>/i);
    if (!preStartMatch) {
      return "Not found";
    }

    const preStartIndex = preStartMatch.index! + preStartMatch[0].length;
    const remainingHtml = html.substring(preStartIndex);

    // Find the first </pre> tag and stop processing there
    const preEndIndex = remainingHtml.indexOf("</pre>");
    if (preEndIndex === -1) {
      return "Not found";
    }

    return remainingHtml.substring(0, preEndIndex);
  };
  const extractJsListContent = (html: string) => {
    // Find the div with class="js-list"
    const jsListMatch = html.match(
      /<div[^>]*class="[^"]*js-list[^"]*"[^>]*>([\s\S]*?)<\/div>/i
    );
    return jsListMatch ? jsListMatch[1] : "Not found";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            HTML Fetch Playground
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Enter any URL to fetch and visualize its HTML content. Perfect for
            testing and debugging web scraping.
          </p>
        </div>

        {/* URL Input Section */}
        <Card className="p-6 mb-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <div className="space-y-4">
            <label
              htmlFor="url-input"
              className="block text-sm font-medium text-gray-700"
            >
              Enter URL to fetch:
            </label>
            <div className="flex gap-3">
              <input
                id="url-input"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="https://www.cifraclub.com.br/artista"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                disabled={loading}
              />
              <button
                onClick={handleFetch}
                disabled={loading || !url.trim()}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium min-w-[100px]"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Fetching...
                  </div>
                ) : (
                  "Fetch HTML"
                )}
              </button>
            </div>

            {/* Test Files Section */}
            <div className="border-t pt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Or test with sample files:
              </label>
              <div className="flex gap-2 flex-wrap">
                {["cifra-example-4", "cifra-example-5"].map((testFile) => (
                  <button
                    key={testFile}
                    onClick={() => handleTestFile(testFile)}
                    disabled={loading}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm"
                  >
                    Test {testFile}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 text-red-500">⚠️</div>
                  <span className="text-red-700 font-medium">Error:</span>
                  <span className="text-red-600">{error}</span>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Results Section */}
        {response && (
          <div className="space-y-6">
            {/* Response Info */}
            <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Response Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-medium text-gray-600">Status</div>
                  <div className="text-green-600 font-semibold">✅ Success</div>
                </div>{" "}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-medium text-gray-600">Content Size</div>
                  <div className="font-semibold">
                    {(getDisplayHtml().length / 1024).toFixed(1)} KB
                    {showCifraOnly && (
                      <span className="text-xs text-purple-500 ml-1">
                        (cifra only)
                      </span>
                    )}
                    {showBodyOnly && !showCifraOnly && (
                      <span className="text-xs text-gray-500 ml-1">
                        (body only)
                      </span>
                    )}
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-medium text-gray-600">Timestamp</div>
                  <div className="font-semibold">
                    {new Date(response.timestamp).toLocaleTimeString()}
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-medium text-gray-600">Songs Found</div>
                  <div className="font-semibold">
                    {response.songsFound || 0}
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                <div className="font-medium text-gray-600 mb-1">Final URL</div>
                <div className="text-sm text-blue-600 break-all">
                  {response.url}
                </div>
              </div>
            </Card>
            {/* Songs Found (if any) */}
            {response.maisAcessadas && response.maisAcessadas.length > 0 && (
              <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Parsed Songs ({response.maisAcessadas.length})
                </h2>
                <div className="grid gap-3 max-h-96 overflow-y-auto">
                  {response.maisAcessadas.map((song, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="font-medium text-gray-800">
                        {song.title}
                      </div>
                      <div className="text-sm text-blue-600 break-all">
                        {song.url}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}{" "}
            {/* View Mode Toggle */}
            <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  HTML Content
                </h2>{" "}
                <div className="flex gap-4 items-center">
                  {/* Body Filter Toggle */}
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">
                      Body Only:
                    </label>
                    <button
                      onClick={() => {
                        setShowBodyOnly(!showBodyOnly);
                        if (!showBodyOnly) setShowCifraOnly(false);
                      }}
                      disabled={showCifraOnly}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        showBodyOnly ? "bg-blue-600" : "bg-gray-300"
                      } ${
                        showCifraOnly ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          showBodyOnly ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Cifra Filter Toggle */}
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">
                      Cifra Only:
                    </label>
                    <button
                      onClick={() => {
                        setShowCifraOnly(!showCifraOnly);
                        if (!showCifraOnly) setShowBodyOnly(false);
                      }}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        showCifraOnly ? "bg-purple-600" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          showCifraOnly ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* View Mode Tabs */}
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    {" "}
                    {[
                      { key: "preview", label: "Preview" },
                      { key: "raw", label: "Raw HTML" },
                      { key: "formatted", label: "Formatted" },
                    ].map((mode) => (
                      <button
                        key={mode.key}
                        onClick={() => setViewMode(mode.key as typeof viewMode)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                          viewMode === mode.key
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-gray-600 hover:text-gray-800"
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <Separator className="mb-4" />{" "}
              <div className="bg-gray-50 rounded-lg p-4 max-h-[600px] overflow-auto">
                {viewMode === "preview" && (
                  <div className="bg-white border rounded-lg p-4">
                    <div
                      className="prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: getDisplayHtml() }}
                      style={{
                        pointerEvents: "none",
                        userSelect: "text",
                      }}
                    />
                  </div>
                )}
                {viewMode === "raw" && (
                  <pre className="text-xs text-gray-700 whitespace-pre-wrap break-words">
                    {getDisplayHtml()}
                  </pre>
                )}
                {viewMode === "formatted" && (
                  <pre className="text-xs text-gray-700 whitespace-pre-wrap break-words font-mono">
                    {formatHtml(getDisplayHtml())}
                  </pre>
                )}{" "}
              </div>
            </Card>
            {/* Specific Content Extractors */}
            <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Specific Content Extractors
              </h2>
              <div className="space-y-4">
                {/* Song Title (H1) */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <h3 className="font-semibold text-gray-800">
                      Song Title (H1 .t1)
                    </h3>
                  </div>
                  <div className="bg-white border rounded-lg p-3 min-h-[40px] flex items-center">
                    <span className="text-lg font-medium text-gray-800">
                      {extractH1Content(response.html)}
                    </span>
                  </div>
                </div>
                {/* Artist Name (H2) */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <h3 className="font-semibold text-gray-800">
                      Artist Name (H2 .t3)
                    </h3>
                  </div>
                  <div className="bg-white border rounded-lg p-3 min-h-[40px] flex items-center">
                    <span className="text-lg font-medium text-gray-800">
                      {extractH2Content(response.html)}
                    </span>
                  </div>
                </div>
                {/* Musical Key (Tom) */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <h3 className="font-semibold text-gray-800">
                      Musical Key (Tom)
                    </h3>
                  </div>
                  <div className="bg-white border rounded-lg p-3 min-h-[40px] flex items-center">
                    <span className="text-lg font-medium text-purple-600">
                      {extractTomContent(response.html)}
                    </span>
                  </div>
                </div>
                {/* Cifra Content (PRE) */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <h3 className="font-semibold text-gray-800">
                      Cifra Content (PRE tags)
                    </h3>
                  </div>
                  <div className="bg-white border rounded-lg p-3 max-h-[400px] overflow-auto">
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                      {extractPreContent(response.html)}
                    </pre>
                  </div>
                </div>{" "}
                {/* JS List Content */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <h3 className="font-semibold text-gray-800">
                      JS List Content (Chord Info)
                    </h3>
                  </div>
                  <div className="bg-white border rounded-lg p-3 max-h-[400px] overflow-auto">
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                      {extractJsListContent(response.html)}
                    </pre>
                  </div>
                </div>
              </div>
            </Card>
            {/* Chord Information Section */}
            <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Chord Diagrams & Information
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <h3 className="font-semibold text-gray-800">
                      Interactive Chord List (div.js-list)
                    </h3>
                  </div>
                  <div className="bg-white border rounded-lg p-3 max-h-[600px] overflow-auto">
                    {extractJsListContent(response.html) !== "Not found" ? (
                      <div
                        className="prose max-w-none [&_.chord]:inline-block [&_.chord]:m-2 [&_.chord]:p-3 [&_.chord]:border [&_.chord]:rounded-lg [&_.chord]:bg-gray-50 [&_strong]:text-lg [&_strong]:font-bold [&_strong]:mb-2 [&_strong]:block [&_.chord-grid]:my-2 [&_.chord-notes]:text-xs [&_.chord-notes]:text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: extractJsListContent(response.html),
                        }}
                        style={{
                          pointerEvents: "none",
                          userSelect: "text",
                        }}
                      />
                    ) : (
                      <div className="text-gray-500 italic">
                        No chord diagrams found
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Help Section */}
        <Card className="p-6 mt-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            How to Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              {" "}
              <h3 className="font-semibold text-gray-800 mb-2">
                📝 Features
              </h3>{" "}
              <ul className="space-y-1 list-disc list-inside">
                <li>Fetch HTML from any CifraClub URL</li>
                <li>Preview rendered HTML content</li>
                <li>View raw and formatted HTML source</li>
                <li>Filter to show only body tag content</li>
                <li>Filter to show only cifra content (chords & lyrics)</li>
                <li>Extract specific content: title, artist, key, and cifra</li>
                <li>
                  Extract chord diagrams and interactive chord information
                </li>
                <li>Extract and parse song information</li>
                <li>Responsive design with beautiful UI</li>
              </ul>
            </div>
            <div>
              {" "}
              <h3 className="font-semibold text-gray-800 mb-2">🔧 Tips</h3>{" "}
              <ul className="space-y-1 list-disc list-inside">
                <li>Currently supports CifraClub URLs only</li>
                <li>Use Preview mode to see the rendered page</li>
                <li>Use Formatted mode for easier HTML reading</li>
                <li>Toggle "Body Only" to filter out head and document tags</li>
                <li>Toggle "Cifra Only" to show just chords and lyrics</li>
                <li>Filters are mutually exclusive - only one can be active</li>
                <li>Specific extractors show individual content pieces</li>
                <li>
                  Chord diagrams section shows interactive chord information
                </li>
                <li>Songs are automatically extracted and listed</li>
                <li>Press Enter in the URL field to fetch quickly</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
