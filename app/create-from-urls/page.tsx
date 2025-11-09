"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Loader2,
  Music,
  ExternalLink,
} from "lucide-react";

interface ProcessedUrl {
  url: string;
  status: "success" | "error" | "exists";
  artist?: string;
  artistSlug?: string;
  song?: string;
  songSlug?: string;
  content?: string;
  error?: string;
  artistExists?: boolean;
  songExists?: boolean;
  artistPath?: string;
  songPath?: string;
}

interface CreationResult {
  artist: string;
  song: string;
  success: boolean;
  error?: string;
}

export default function CreateFromUrlsPage() {
  const [urls, setUrls] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [processedUrls, setProcessedUrls] = useState<ProcessedUrl[]>([]);
  const [creationResults, setCreationResults] = useState<CreationResult[]>([]);
  const [selectedUrls, setSelectedUrls] = useState<Set<string>>(new Set());

  const handleProcess = async () => {
    setIsProcessing(true);
    setProcessedUrls([]);
    setCreationResults([]);
    setSelectedUrls(new Set());

    try {
      const urlList = urls
        .split("\n")
        .map((u) => u.trim())
        .filter((u) => u.length > 0);

      if (urlList.length === 0) {
        alert("Please enter at least one URL");
        return;
      }

      const response = await fetch("/api/process-urls", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: urlList }),
      });

      if (!response.ok) {
        throw new Error("Failed to process URLs");
      }

      const data = await response.json();
      setProcessedUrls(data.results);

      // Auto-select successful URLs that don't exist yet
      const autoSelect = new Set<string>();
      data.results.forEach((result: ProcessedUrl) => {
        if (result.status === "success" && !result.songExists) {
          autoSelect.add(result.url);
        }
      });
      setSelectedUrls(autoSelect);
    } catch (error) {
      console.error("Error processing URLs:", error);
      alert("Failed to process URLs. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCreate = async () => {
    const pagesToCreate = processedUrls.filter(
      (url) => url.status === "success" && selectedUrls.has(url.url)
    );

    if (pagesToCreate.length === 0) {
      alert("Please select at least one URL to create pages from");
      return;
    }

    setIsCreating(true);

    try {
      const pages = pagesToCreate.map((url) => ({
        artist: url.artist!,
        artistSlug: url.artistSlug!,
        song: url.song!,
        songSlug: url.songSlug!,
        content: url.content!,
        url: url.url,
      }));

      const response = await fetch("/api/create-pages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pages }),
      });

      if (!response.ok) {
        throw new Error("Failed to create pages");
      }

      const data = await response.json();
      setCreationResults(data.results);

      // Show success message
      const successCount = data.results.filter(
        (r: CreationResult) => r.success
      ).length;
      alert(
        `Successfully created ${successCount} of ${data.results.length} pages!\n` +
          (data.dataRegenerated
            ? "Navigation data has been regenerated."
            : "Warning: Failed to regenerate navigation data.")
      );
    } catch (error) {
      console.error("Error creating pages:", error);
      alert("Failed to create pages. Please try again.");
    } finally {
      setIsCreating(false);
    }
  };

  const toggleSelection = (url: string) => {
    const newSelection = new Set(selectedUrls);
    if (newSelection.has(url)) {
      newSelection.delete(url);
    } else {
      newSelection.add(url);
    }
    setSelectedUrls(newSelection);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "error":
        return <XCircle className="w-5 h-5 text-red-500" />;
      case "exists":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "destructive" | "secondary"> = {
      success: "default",
      error: "destructive",
      exists: "secondary",
    };
    return (
      <Badge variant={variants[status] || "default"}>
        {status === "exists" ? "Already Exists" : status}
      </Badge>
    );
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
          <Music className="w-8 h-8" />
          Create Pages from URLs
        </h1>
        <p className="text-gray-600">
          Enter Cifra Club URLs to automatically create artist and song pages
        </p>
      </div>

      {/* URL Input Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Enter URLs</CardTitle>
          <CardDescription>
            Paste one or more Cifra Club URLs (one per line). Format:
            https://www.cifraclub.com.br/artist/song/
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="https://www.cifraclub.com.br/artist-name/song-name/&#10;https://www.cifraclub.com.br/another-artist/another-song/"
            value={urls}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setUrls(e.target.value)
            }
            rows={8}
            className="mb-4 font-mono text-sm"
          />
          <Button
            onClick={handleProcess}
            disabled={isProcessing || !urls.trim()}
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              "Process URLs"
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Results Section */}
      {processedUrls.length > 0 && (
        <>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Processing Results</CardTitle>
              <CardDescription>
                Review the URLs and select which pages to create
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {processedUrls.map((result, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-4 ${
                      result.status === "success" && !result.songExists
                        ? "border-green-200 bg-green-50"
                        : result.status === "exists"
                        ? "border-yellow-200 bg-yellow-50"
                        : "border-red-200 bg-red-50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {getStatusIcon(result.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {result.status === "success" &&
                              !result.songExists && (
                                <input
                                  type="checkbox"
                                  checked={selectedUrls.has(result.url)}
                                  onChange={() => toggleSelection(result.url)}
                                  className="w-4 h-4 cursor-pointer"
                                />
                              )}
                            <span className="font-semibold text-lg">
                              {result.artist || "Unknown Artist"} -{" "}
                              {result.song || "Unknown Song"}
                            </span>
                          </div>
                          {getStatusBadge(result.status)}
                        </div>

                        <div className="text-sm text-gray-600 mb-2">
                          <a
                            href={result.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-blue-600 break-all"
                          >
                            {result.url}
                            <ExternalLink className="w-3 h-3 flex-shrink-0" />
                          </a>
                        </div>

                        {result.error && (
                          <Alert variant="destructive" className="mt-2">
                            <AlertDescription>{result.error}</AlertDescription>
                          </Alert>
                        )}

                        {result.status === "success" && (
                          <div className="mt-2 text-sm space-y-1">
                            <div>
                              <span className="font-medium">Artist:</span>{" "}
                              {result.artist}{" "}
                              {result.artistExists ? (
                                <Badge variant="secondary" className="ml-2">
                                  Exists
                                </Badge>
                              ) : (
                                <Badge variant="outline" className="ml-2">
                                  Will be created
                                </Badge>
                              )}
                            </div>
                            <div>
                              <span className="font-medium">Song:</span>{" "}
                              {result.song}{" "}
                              {result.songExists ? (
                                <Badge variant="secondary" className="ml-2">
                                  Exists
                                </Badge>
                              ) : (
                                <Badge variant="default" className="ml-2">
                                  Will be created
                                </Badge>
                              )}
                            </div>
                            <div className="text-gray-500">
                              Location: /artists/{result.artistSlug}/
                              {result.songSlug}
                            </div>
                          </div>
                        )}

                        {result.status === "exists" && (
                          <div className="mt-2 text-sm">
                            <div className="text-gray-600">
                              This song already exists at:{" "}
                              <a
                                href={result.songPath}
                                className="text-blue-600 hover:underline"
                              >
                                {result.songPath}
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {processedUrls.some(
                (r) => r.status === "success" && !r.songExists
              ) && (
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">
                        Selected: {selectedUrls.size} page(s)
                      </p>
                      <p className="text-sm text-gray-600">
                        Review the selections above and click Create Pages to
                        proceed
                      </p>
                    </div>
                    <Button
                      onClick={handleCreate}
                      disabled={isCreating || selectedUrls.size === 0}
                      size="lg"
                    >
                      {isCreating ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        `Create ${selectedUrls.size} Page(s)`
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Creation Results */}
          {creationResults.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Creation Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {creationResults.map((result, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded border ${
                        result.success
                          ? "border-green-200 bg-green-50"
                          : "border-red-200 bg-red-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {result.success ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                        <span>
                          {result.artist} - {result.song}
                        </span>
                      </div>
                      {result.error && (
                        <span className="text-sm text-red-600">
                          {result.error}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
