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
}

interface SongData {
  artist: string;
  title: string;
  key: string;
  cifraContent: string;
}

export default function DownloadSongPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [songData, setSongData] = useState<SongData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const extractH1Content = (html: string) => {
    const h1Match = html.match(
      /<h1[^>]*class="[^"]*t1[^"]*"[^>]*>(.*?)<\/h1>/i
    );
    return h1Match ? h1Match[1].replace(/<[^>]*>/g, "").trim() : "";
  };

  const extractH2Content = (html: string) => {
    const h2Match = html.match(
      /<h2[^>]*class="[^"]*t3[^"]*"[^>]*>(.*?)<\/h2>/i
    );
    return h2Match ? h2Match[1].replace(/<[^>]*>/g, "").trim() : "";
  };

  const extractTomContent = (html: string) => {
    // Look for the span with id="cifra_tom" and extract the content of the <a> tag inside it
    const tomMatch = html.match(
      /<span[^>]*id="cifra_tom"[^>]*>[\s\S]*?<a[^>]*>([^<]+)<\/a>[\s\S]*?<\/span>/i
    );
    return tomMatch ? tomMatch[1].trim() : "";
  };

  const extractPreContent = (html: string) => {
    // Find the first <pre> tag
    const preStartMatch = html.match(/<pre[^>]*>/i);
    if (!preStartMatch) {
      return "";
    }

    const preStartIndex = preStartMatch.index! + preStartMatch[0].length;
    const remainingHtml = html.substring(preStartIndex);

    // Find the first </pre> tag and stop processing there
    const preEndIndex = remainingHtml.indexOf("</pre>");
    if (preEndIndex === -1) {
      return "";
    }

    return remainingHtml.substring(0, preEndIndex);
  };

  const handleFetch = async () => {
    if (!url.trim()) {
      setError("Please enter a URL");
      return;
    }

    setLoading(true);
    setError(null);
    setSongData(null);

    try {
      const encodedUrl = encodeURIComponent(url.trim());
      const apiResponse = await fetch(`/api/fetch-html?url=${encodedUrl}`);

      if (!apiResponse.ok) {
        const errorData = await apiResponse.json();
        throw new Error(errorData.error || `HTTP ${apiResponse.status}`);
      }

      const data: FetchResponse = await apiResponse.json();

      // Extract all the required information
      const artist = extractH2Content(data.html);
      const title = extractH1Content(data.html);
      const key = extractTomContent(data.html);
      const cifraContent = extractPreContent(data.html);

      // Validate that we got the essential data
      if (!artist || !title || !cifraContent) {
        throw new Error(
          "Could not extract essential song data (artist, title, or cifra content)"
        );
      }

      setSongData({
        artist,
        title,
        key: key || "Unknown",
        cifraContent,
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch song data"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleFetch();
    }
  };

  const downloadTxtFile = () => {
    if (!songData) return;

    // Create filename: "artist - song - key.txt"
    const filename = `${songData.artist} - ${songData.title} - ${songData.key}.txt`;

    // Create file content
    const content = `${songData.artist} - ${songData.title} (${songData.key})\n\n${songData.cifraContent}`;

    // Create blob and download
    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Song Downloader
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Extract song information from CifraClub and download as a text file.
          </p>
        </div>

        {/* URL Input Section */}
        <Card className="p-6 mb-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <div className="space-y-4">
            <label
              htmlFor="url-input"
              className="block text-sm font-medium text-gray-700"
            >
              Enter CifraClub song URL:
            </label>
            <div className="flex gap-3">
              <input
                id="url-input"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="https://www.cifraclub.com.br/artist/song"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                disabled={loading}
              />
              <button
                onClick={handleFetch}
                disabled={loading || !url.trim()}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium min-w-[120px]"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Extracting...
                  </div>
                ) : (
                  "Extract Song"
                )}
              </button>
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

        {/* Extracted Song Data */}
        {songData && (
          <div className="space-y-6">
            {/* Song Information Card */}
            <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Extracted Song Information
                </h2>
                <button
                  onClick={downloadTxtFile}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-medium flex items-center gap-2"
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download TXT
                </button>
              </div>

              <Separator className="mb-4" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Artist */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <h3 className="font-semibold text-gray-800">Artist</h3>
                  </div>
                  <div className="text-lg font-medium text-gray-800">
                    {songData.artist}
                  </div>
                </div>

                {/* Song Title */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <h3 className="font-semibold text-gray-800">Song Title</h3>
                  </div>
                  <div className="text-lg font-medium text-gray-800">
                    {songData.title}
                  </div>
                </div>

                {/* Musical Key */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <h3 className="font-semibold text-gray-800">Musical Key</h3>
                  </div>
                  <div className="text-lg font-medium text-purple-600">
                    {songData.key}
                  </div>
                </div>
              </div>

              {/* File Preview */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <h3 className="font-semibold text-gray-800">File Preview</h3>
                  <span className="text-sm text-gray-500">
                    ({songData.artist} - {songData.title} - {songData.key}.txt)
                  </span>
                </div>
                <div className="bg-white border rounded-lg p-4 max-h-[400px] overflow-auto">
                  <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">
                    {songData.artist} - {songData.title} ({songData.key})
                    {"\n\n"}
                    {songData.cifraContent}
                  </pre>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Instructions */}
        <Card className="p-6 mt-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            How to Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">📝 Steps</h3>
              <ol className="space-y-1 list-decimal list-inside">
                <li>Paste a CifraClub song URL in the input field</li>
                <li>Click "Extract Song" or press Enter</li>
                <li>Review the extracted information</li>
                <li>Click "Download TXT" to save the file</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                ℹ️ Information
              </h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Extracts artist name, song title, and musical key</li>
                <li>Downloads cifra content as a text file</li>
                <li>File format: "Artist - Song - Key.txt"</li>
                <li>Supports CifraClub URLs only</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
