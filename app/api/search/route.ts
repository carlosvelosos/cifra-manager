import { NextRequest, NextResponse } from "next/server";

// Type definitions for Google Search API response
interface GoogleSearchItem {
  title: string;
  link: string;
  snippet: string;
}

// Helper function to add cavaco parameters to song URLs
function addCavacoParams(url: string, queryType: string): string {
  console.log(
    "🎸 [API - CAVACO] Adding cavaco params to URL:",
    url,
    "Query type:",
    queryType
  );

  if (queryType === "artist_and_song" && url.includes("cifraclub.com.br")) {
    // Check if it's a song page (has two path segments after domain)
    const urlPattern = /^https:\/\/www\.cifraclub\.com\.br\/[^\/]+\/[^\/]+\/?$/;
    if (urlPattern.test(url)) {
      // Ensure URL ends with / before adding fragment
      const baseUrl = url.endsWith("/") ? url : url + "/";
      const finalUrl = baseUrl + "#tabs=false&instrument=cavaco";
      console.log("✅ [API - CAVACO] Cavaco params added:", finalUrl);
      return finalUrl;
    } else {
      console.log(
        "ℹ️ [API - CAVACO] URL doesn't match song pattern, no params added"
      );
    }
  } else {
    console.log(
      "ℹ️ [API - CAVACO] Not artist+song or not cifraclub.com.br, no params added"
    );
  }
  return url;
}

// Helper function to extract cifra content from a CifraClub page
async function extractCifraContent(
  url: string,
  instrument: string = "cavaco"
): Promise<string | null> {
  console.log(
    "📄 [API - EXTRACT] Starting content extraction from:",
    url,
    "Instrument:",
    instrument
  );

  try {
    // Fetch the page directly - CifraClub will detect the instrument preference via user agent or other means
    console.log("🌐 [API - EXTRACT] Fetching page content...");
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8",
      },
    });

    if (!response.ok) {
      console.error(
        "❌ [API - EXTRACT] Fetch failed with status:",
        response.status
      );
      return null;
    }

    console.log("✅ [API - EXTRACT] Page fetched successfully");
    const html = await response.text();
    console.log("📊 [API - EXTRACT] HTML content length:", html.length); // Look for content within <pre> tags, which typically contain the cifra
    const preTagMatch = html.match(/<pre[^>]*>([\s\S]*?)<\/pre>/i);

    if (preTagMatch) {
      console.log("🎯 [API - EXTRACT] Found <pre> tag content");
      // Clean up the extracted content
      let content = preTagMatch[1]; // Remove tablatura spans first (before removing all HTML tags)
      console.log("🎸 [API - EXTRACT] Removing tablatura spans...");
      // Enhanced regex to handle nested spans and various formatting
      content = content.replace(
        /\n*\s*<span\s+class="tablatura"[^>]*>[\s\S]*?<\/span>\s*(?:<\/span>)?\s*\n*/gi,
        ""
      );

      // More comprehensive whitespace cleanup
      content = content
        // Remove multiple consecutive line breaks (more than 2)
        .replace(/\n\s*\n\s*\n+/g, "\n\n")
        // Remove lines that only contain whitespace
        .replace(/^\s*$/gm, "")
        // Remove empty lines at start of sections
        .replace(/^\s*\n+/gm, "")
        // Remove trailing whitespace on lines
        .replace(/[ \t]+$/gm, "")
        // Clean up multiple line breaks again
        .replace(/\n{3,}/g, "\n\n")
        // Remove leading/trailing whitespace
        .trim();

      console.log(
        "✅ [API - EXTRACT] Tablatura spans removed and whitespace cleaned"
      );

      // Remove HTML tags that might be inside the pre tag
      content = content.replace(/<[^>]*>/g, "");

      // Decode HTML entities
      content = content
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, " "); // Trim and normalize whitespace
      content = content.trim();

      console.log(
        "✨ [API - EXTRACT] Content extracted and cleaned, length:",
        content.length
      );
      return content || null;
    }

    console.log(
      "🔍 [API - EXTRACT] No <pre> tag found, trying alternative patterns..."
    );
    // Alternative: look for cifra content in other common patterns
    const cifraClassMatch = html.match(
      /<div[^>]*class="[^"]*cifra[^"]*"[^>]*>([\s\S]*?)<\/div>/i
    );
    if (cifraClassMatch) {
      console.log("🎯 [API - EXTRACT] Found cifra class content");
      let content = cifraClassMatch[1];
      content = content.replace(/<[^>]*>/g, "").trim();
      console.log(
        "✨ [API - EXTRACT] Alternative content extracted, length:",
        content.length
      );
      return content || null;
    }

    // Look for cavaco-specific content if instrument is cavaco
    if (instrument === "cavaco") {
      console.log("🎸 [API - EXTRACT] Looking for cavaco-specific content...");
      // Look for cavaco chord patterns or instrument-specific content
      const cavacoContentMatch = html.match(
        /<div[^>]*data-instrument[^>]*cavaco[^>]*>([\s\S]*?)<\/div>/i
      );
      if (cavacoContentMatch) {
        console.log("🎯 [API - EXTRACT] Found cavaco-specific content");
        let content = cavacoContentMatch[1];
        content = content.replace(/<[^>]*>/g, "").trim();
        console.log(
          "✨ [API - EXTRACT] Cavaco content extracted, length:",
          content.length
        );
        return content || null;
      }
    }

    console.log("❌ [API - EXTRACT] No cifra content found in any pattern");
    return null;
  } catch (error) {
    console.error("💥 [API - EXTRACT] Error during content extraction:", error);
    console.error("Error extracting cifra content:", error);
    return null;
  }
}

// Helper function to detect if query contains both artist and song
function parseQuery(query: string) {
  // Common separators for artist + song
  const separators = [" - ", " – ", " — ", " | ", " / ", " by ", " de "];

  for (const separator of separators) {
    if (query.includes(separator)) {
      const parts = query.split(separator);
      if (parts.length === 2) {
        return {
          type: "artist_and_song" as const,
          artist: parts[0].trim(),
          song: parts[1].trim(),
          original: query,
        };
      }
    }
  }

  // Check for common patterns like "Artist Song" where song has quotes
  const quotedSongMatch = query.match(/^(.+?)\s+"([^"]+)"$/);
  if (quotedSongMatch) {
    return {
      type: "artist_and_song" as const,
      artist: quotedSongMatch[1].trim(),
      song: quotedSongMatch[2].trim(),
      original: query,
    };
  }

  // If no clear pattern, treat as artist search
  return {
    type: "artist_only" as const,
    artist: query.trim(),
    original: query,
  };
}

// Helper function to sort results prioritizing song pages for artist+song queries
function prioritizeSongPages(results: GoogleSearchItem[], songName: string) {
  return results.sort((a, b) => {
    // Check if URL matches the song page pattern and contains the song name
    const aIsSongPage = a.link?.match(
      /^https:\/\/www\.cifraclub\.com\.br\/[^\/]+\/[^\/]+\/?$/
    );
    const bIsSongPage = b.link?.match(
      /^https:\/\/www\.cifraclub\.com\.br\/[^\/]+\/[^\/]+\/?$/
    );

    // Check if title or URL contains the song name
    const songSlug = songName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");
    const aContainsSong =
      (a.title?.toLowerCase().includes(songName.toLowerCase()) ||
        a.link?.toLowerCase().includes(songSlug)) &&
      aIsSongPage;
    const bContainsSong =
      (b.title?.toLowerCase().includes(songName.toLowerCase()) ||
        b.link?.toLowerCase().includes(songSlug)) &&
      bIsSongPage;

    // Song pages that match the song name come first
    if (aContainsSong && !bContainsSong) return -1;
    if (!aContainsSong && bContainsSong) return 1;

    // Then any song pages
    if (aIsSongPage && !bIsSongPage) return -1;
    if (!aIsSongPage && bIsSongPage) return 1;

    // Then any cifraclub.com.br page
    const aIsCifraClub = a.link?.includes("cifraclub.com.br");
    const bIsCifraClub = b.link?.includes("cifraclub.com.br");

    if (aIsCifraClub && !bIsCifraClub) return -1;
    if (!aIsCifraClub && bIsCifraClub) return 1;

    return 0;
  });
}

// Helper function to sort results prioritizing artist pages
function prioritizeArtistPages(results: GoogleSearchItem[]) {
  return results.sort((a, b) => {
    // Check if URL matches the artist page pattern: https://www.cifraclub.com.br/artist/
    const aIsArtistPage = a.link?.match(
      /^https:\/\/www\.cifraclub\.com\.br\/[^\/]+\/?$/
    );
    const bIsArtistPage = b.link?.match(
      /^https:\/\/www\.cifraclub\.com\.br\/[^\/]+\/?$/
    );

    // Log for debugging
    if (aIsArtistPage) console.log("Found artist page:", a.link);
    if (bIsArtistPage) console.log("Found artist page:", b.link);

    // Artist pages come first
    if (aIsArtistPage && !bIsArtistPage) return -1;
    if (!aIsArtistPage && bIsArtistPage) return 1;

    // Secondary priority: any cifraclub.com.br page
    const aIsCifraClub = a.link?.includes("cifraclub.com.br");
    const bIsCifraClub = b.link?.includes("cifraclub.com.br");
    if (aIsCifraClub && !bIsCifraClub) return -1;
    if (!aIsCifraClub && bIsCifraClub) return 1;

    // If same priority, maintain original order
    return 0;
  });
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");
  const multiple = searchParams.get("multiple") === "true";
  const plainUrl = searchParams.get("plainUrl") === "true"; // New parameter for plain URL response
  const maxResults = Math.min(parseInt(searchParams.get("num") || "10"), 10);

  console.log("🔥 [API - MAIN] ========== NEW SEARCH REQUEST ==========");
  console.log("🔍 [API - MAIN] Query:", query);
  console.log("📊 [API - MAIN] Parameters:", {
    multiple,
    plainUrl,
    maxResults,
  });

  if (!query) {
    console.error("❌ [API - MAIN] No query provided");
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 }
    );
  }

  // Parse the query to detect artist+song vs artist-only
  console.log("🧠 [API - MAIN] Parsing query to detect type...");
  const parsedQuery = parseQuery(query);
  console.log("🎯 [API - MAIN] Parsed query:", parsedQuery);

  try {
    console.log("🌐 [API - MAIN] Starting Google search...");
    // Use Google Custom Search API if available, fallback to scraping
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    const GOOGLE_CX = process.env.GOOGLE_CX;

    if (GOOGLE_API_KEY && GOOGLE_CX) {
      console.log("🔑 [API - MAIN] Using Google Custom Search API");
      // Adjust search strategy based on query type
      let searchQuery: string;
      if (parsedQuery.type === "artist_and_song") {
        // For artist+song, search for the specific song
        searchQuery = `site:cifraclub.com.br "${parsedQuery.artist}" "${parsedQuery.song}"`;
        console.log("🎵 [API - MAIN] Artist+Song search query:", searchQuery);
      } else if (multiple) {
        searchQuery = `site:cifraclub.com.br ${query}`;
        console.log(
          "📊 [API - MAIN] Multiple results search query:",
          searchQuery
        );
      } else {
        // For artist-only, prioritize artist pages
        searchQuery = `site:cifraclub.com.br "${query}" OR site:cifraclub.com.br/${query
          .toLowerCase()
          .replace(/\s+/g, "-")}`;
        console.log("🎤 [API - MAIN] Artist-only search query:", searchQuery);
      }

      const numResults = multiple ? maxResults : Math.min(10, maxResults);
      const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${GOOGLE_CX}&q=${encodeURIComponent(
        searchQuery
      )}&num=${numResults}`;

      console.log(
        "🔗 [API - MAIN] Google API URL:",
        apiUrl.replace(GOOGLE_API_KEY, "API_KEY_HIDDEN")
      );
      console.log("📞 [API - MAIN] Calling Google Custom Search API...");

      const response = await fetch(apiUrl);
      const data = await response.json();

      console.log(
        "📥 [API - MAIN] Google API response status:",
        response.status
      );
      console.log(
        "📊 [API - MAIN] Google API results count:",
        data.items?.length || 0
      );

      if (data.items && data.items.length > 0) {
        console.log(
          "✅ [API - MAIN] Google search successful, sorting results..."
        );
        // Sort results based on query type
        let sortedItems: GoogleSearchItem[];
        if (parsedQuery.type === "artist_and_song" && parsedQuery.song) {
          console.log(
            "🔀 [API - MAIN] Prioritizing song pages for artist+song query"
          );
          sortedItems = prioritizeSongPages(data.items, parsedQuery.song);
        } else {
          console.log("🔀 [API - MAIN] Prioritizing artist pages");
          sortedItems = prioritizeArtistPages(data.items);
        }

        console.log(
          "📋 [API - MAIN] Sorted results:",
          sortedItems.map((item) => ({ title: item.title, link: item.link }))
        );

        if (multiple) {
          console.log("📊 [API - MAIN] Returning multiple results");
          // Return multiple results
          const results = sortedItems.map((item: GoogleSearchItem) => ({
            title: item.title,
            url: item.link,
            snippet: item.snippet,
            source: "google_api",
          }));
          return NextResponse.json({
            results,
            totalResults: data.searchInformation?.totalResults || 0,
            source: "google_api",
          });
        } else {
          console.log("🎯 [API - MAIN] Returning single result");
          const firstResult = sortedItems[0];
          console.log("🏆 [API - MAIN] First result:", {
            title: firstResult.title,
            link: firstResult.link,
          });

          // For artist+song queries, return both URL and cifra content
          if (parsedQuery.type === "artist_and_song") {
            console.log("🎵 [API - MAIN] Processing artist+song result...");
            const urlWithParams = addCavacoParams(
              firstResult.link || "",
              parsedQuery.type
            );
            console.log(
              "🎸 [API - MAIN] URL with cavaco params:",
              urlWithParams
            );

            // Extract cifra content from the page
            console.log("📄 [API - MAIN] Extracting cifra content...");
            const cifraContent = await extractCifraContent(
              firstResult.link || "",
              "cavaco"
            );
            console.log(
              "📝 [API - MAIN] Content extracted:",
              cifraContent ? `${cifraContent.length} characters` : "null"
            );

            // Return structured response with URL and content
            const response = {
              url: urlWithParams,
              content: cifraContent || "Content not found",
            };

            console.log("✅ [API - MAIN] Returning artist+song JSON response");
            return new NextResponse(JSON.stringify(response), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          } // For artist-only queries with plainUrl parameter, return just the URL
          if (plainUrl) {
            console.log("📝 [API - MAIN] Returning plain URL response");
            const urlWithParams = addCavacoParams(
              firstResult.link || "",
              parsedQuery.type
            );
            return new NextResponse(urlWithParams, {
              status: 200,
              headers: { "Content-Type": "text/plain" },
            });
          }

          // For artist-only queries, return structured response
          console.log("🎤 [API - MAIN] Returning artist-only JSON response");
          return NextResponse.json({
            title: firstResult.title,
            url: firstResult.link,
            snippet: firstResult.snippet,
            source: "google_api",
          });
        }
      }
    } else {
      // Fallback: Try to fetch from CifraClub directly

      if (parsedQuery.type === "artist_and_song" && parsedQuery.song) {
        // For artist+song, try to construct direct song URL
        const artistSlug = parsedQuery.artist
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9\-]/g, "");
        const songSlug = parsedQuery.song
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9\-]/g, "");

        const directSongUrl = `https://www.cifraclub.com.br/${artistSlug}/${songSlug}/`;

        try {
          const directResponse = await fetch(directSongUrl, {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            },
          });
          if (directResponse.ok) {
            const html = await directResponse.text(); // Check if it's a valid song page
            if (
              html.includes('class="cifra"') ||
              html.includes("data-song") ||
              html.includes("song-page") ||
              html.includes("<pre") // Chord/lyric content
            ) {
              // Add cavaco parameters to URL
              const urlWithParams = addCavacoParams(
                directSongUrl,
                parsedQuery.type
              ); // Extract cifra content from the page
              const cifraContent = await extractCifraContent(
                directSongUrl,
                "cavaco"
              );

              // Return structured response with URL and content
              const response = {
                url: urlWithParams,
                content: cifraContent || "Content not found",
              };

              return new NextResponse(JSON.stringify(response), {
                status: 200,
                headers: { "Content-Type": "application/json" },
              });
            }
          }
        } catch (directError) {
          console.log("Direct song page fetch failed:", directError);
        }

        // Fallback to search if direct URL doesn't work
        const cifraClubSearchUrl = `https://www.cifraclub.com.br/busca/?q=${encodeURIComponent(
          `${parsedQuery.artist} ${parsedQuery.song}`
        )}`;

        try {
          const response = await fetch(cifraClubSearchUrl, {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            },
          });

          if (response.ok) {
            const html = await response.text(); // Look for song page links (with two path segments)
            const songLinkMatch = html.match(
              /href="(https:\/\/www\.cifraclub\.com\.br\/[^\/]+\/[^\/]+\/?)"/
            );
            if (songLinkMatch) {
              // Add cavaco parameters to URL
              const urlWithParams = addCavacoParams(
                songLinkMatch[1],
                parsedQuery.type
              ); // Extract cifra content from the page
              const cifraContent = await extractCifraContent(
                songLinkMatch[1],
                "cavaco"
              );

              // Return structured response with URL and content
              const response = {
                url: urlWithParams,
                content: cifraContent || "Content not found",
              };

              return new NextResponse(JSON.stringify(response), {
                status: 200,
                headers: { "Content-Type": "application/json" },
              });
            }
          }
        } catch (searchError) {
          console.log("CifraClub search failed:", searchError);
        }
      } else {
        // For artist-only queries, try direct artist page
        const artistSlug = query
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9\-]/g, "");

        const directArtistUrl = `https://www.cifraclub.com.br/${artistSlug}/`;

        try {
          const directResponse = await fetch(directArtistUrl, {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            },
          });

          if (directResponse.ok) {
            const html = await directResponse.text();

            // Check if it's a valid artist page (look for artist-specific content)
            if (
              html.includes('class="artist"') ||
              html.includes("data-artist") ||
              html.includes("artist-page")
            ) {
              const titleMatch = html.match(/<title>([^<]+)<\/title>/);
              const artistName = titleMatch
                ? titleMatch[1].replace(" - CIFRACLUB", "").trim()
                : query;

              if (plainUrl) {
                return new NextResponse(directArtistUrl, {
                  status: 200,
                  headers: { "Content-Type": "text/plain" },
                });
              }

              return NextResponse.json({
                title: artistName,
                url: directArtistUrl,
                snippet: `Página oficial do artista ${artistName} no CifraClub com todas as cifras disponíveis`,
                source: "cifraclub_direct_artist",
              });
            }
          }
        } catch (directError) {
          console.log("Direct artist page fetch failed:", directError);
        }

        // Fallback to search page
        const cifraClubUrl = `https://www.cifraclub.com.br/busca/?q=${encodeURIComponent(
          query
        )}`;

        try {
          const response = await fetch(cifraClubUrl, {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            },
          });

          if (response.ok) {
            const html = await response.text();

            // Look for artist page links first
            const artistLinkMatch = html.match(
              /href="(https:\/\/www\.cifraclub\.com\.br\/[^\/]+\/?)"/
            );

            if (artistLinkMatch) {
              const titleMatch = html.match(/<h3[^>]*>([^<]+)<\/h3>/);
              const result = {
                title: titleMatch ? titleMatch[1].trim() : query,
                url: artistLinkMatch[1],
                snippet: `Página do artista no CifraClub`,
                source: "cifraclub_search",
              };

              if (plainUrl) {
                return new NextResponse(artistLinkMatch[1], {
                  status: 200,
                  headers: { "Content-Type": "text/plain" },
                });
              }

              return NextResponse.json(result);
            }

            // Fallback to any cifraclub link
            const linkMatch = html.match(
              /href="([^"]*cifraclub\.com\.br[^"]*)" /
            );
            const titleMatch = html.match(/<h3[^>]*>([^<]+)<\/h3>/);

            if (titleMatch && linkMatch) {
              const result = {
                title: titleMatch[1].trim(),
                url: linkMatch[1],
                snippet: `Found on CifraClub: ${titleMatch[1]}`,
                source: "cifraclub_direct",
              };

              if (plainUrl) {
                return new NextResponse(linkMatch[1], {
                  status: 200,
                  headers: { "Content-Type": "text/plain" },
                });
              }

              return NextResponse.json(result);
            }
          }
        } catch (scrapeError) {
          console.log("CifraClub scraping failed:", scrapeError);
        }
      }
    } // If no results found, return a generic response
    console.log("⚠️ [API - MAIN] No results found, returning fallback");
    const fallbackUrl = `https://www.google.com/search?q=${encodeURIComponent(
      `site:cifraclub.com.br ${query}`
    )}`;

    if (parsedQuery.type === "artist_and_song") {
      console.log("🎵 [API - MAIN] Returning fallback for artist+song search");
      // For artist+song searches, return structured response even for fallback
      const response = {
        url: fallbackUrl,
        content: "No cifra content found - this is a search results page",
      };

      return new NextResponse(JSON.stringify(response), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (plainUrl) {
      console.log("📝 [API - MAIN] Returning fallback plain URL");
      return new NextResponse(fallbackUrl, {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    }

    console.log("🔄 [API - MAIN] Returning fallback JSON response");
    return NextResponse.json({
      title: `Search results for "${query}"`,
      url: fallbackUrl,
      snippet: `Click to see search results for ${query} on CifraClub`,
      source: "fallback",
    });
  } catch (error) {
    console.error("💥 [API - MAIN] CRITICAL ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch search results" },
      { status: 500 }
    );
  }
}
