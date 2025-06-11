import { NextRequest, NextResponse } from "next/server";

interface Song {
  title: string;
  url: string;
  artist?: string;
}

function parseMaisAcessadas(html: string): Song[] {
  const songs: Song[] = [];

  try {
    // Look for "Mais acessadas" or "mais tocadas" section with more patterns
    const patterns = [
      /mais\s+acessadas/i,
      /mais\s+tocadas/i,
      /mais\s+populares/i,
      /populares/i,
      /top\s+músicas/i,
      /top\s+hits/i,
      /sucessos/i,
    ];

    let sectionFound = false;
    let sectionStartIndex = -1;

    // Find the section
    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match && match.index !== undefined) {
        sectionFound = true;
        sectionStartIndex = match.index;
        console.log(
          `Found section "${match[0]}" at index ${sectionStartIndex}`
        );
        break;
      }
    }

    if (!sectionFound) {
      console.log(
        "No 'Mais acessadas' section found, trying alternative approach..."
      );
      // Try to find song links in the entire page
      sectionStartIndex = 0;
    }

    // Extract a reasonable section around the found text
    // If section found, get 8000 chars after; if not found, search first 15000 chars
    const sectionLength = sectionFound ? 8000 : 15000;
    const section = html.substring(
      sectionStartIndex,
      sectionStartIndex + sectionLength
    );
    // Look for more specific CifraClub song link patterns
    const linkPatterns = [
      // Pattern for direct song links like /artista/musica/
      /<a[^>]+href\s*=\s*["']([^"']*\/[a-z0-9\-]+\/[a-z0-9\-]+\/?)["'][^>]*>([^<]+)<\/a>/gi,
      // Pattern for cifra links
      /<a[^>]+href\s*=\s*["']([^"']*\/cifra\/[^"']+)["'][^>]*>([^<]+)<\/a>/gi,
      // Pattern for data-hits attributes (common in song listings)
      /<a[^>]+data-hits[^>]+href\s*=\s*["']([^"']+)["'][^>]*>([^<]+)<\/a>/gi,
      // Pattern for song title links with specific classes
      /<a[^>]+class[^>]*song[^>]+href\s*=\s*["']([^"']+)["'][^>]*>([^<]+)<\/a>/gi,
    ];

    for (const pattern of linkPatterns) {
      let match;
      while ((match = pattern.exec(section)) !== null && songs.length < 20) {
        const url = match[1];
        const title = match[2].trim();
        // Filter out invalid links and navigation items
        if (
          url &&
          title &&
          title.length > 2 &&
          title.length < 100 &&
          !title.toLowerCase().includes("cifraclub") &&
          !title.toLowerCase().includes("cadastro") &&
          !title.toLowerCase().includes("conta") &&
          !title.toLowerCase().includes("login") &&
          !title.toLowerCase().includes("contato") &&
          !title.toLowerCase().includes("suporte") &&
          !title.toLowerCase().includes("voltar") &&
          !title.toLowerCase().includes("próxima") &&
          !title.toLowerCase().includes("anterior") &&
          !title.toLowerCase().includes("mais acessadas") &&
          !title.toLowerCase().includes("populares") &&
          !url.includes("javascript:") &&
          !url.includes("#") &&
          !url.includes("cadastro") &&
          !url.includes("suporte") &&
          !url.includes("contato") &&
          (url.includes("/cifra/") ||
            (url.split("/").length >= 4 &&
              url.match(/\/[a-z0-9\-]+\/[a-z0-9\-]+\/?$/)))
        ) {
          // Ensure absolute URL
          const fullUrl = url.startsWith("http")
            ? url
            : `https://www.cifraclub.com.br${url}`;

          // Check for duplicates
          if (
            !songs.some((song) => song.url === fullUrl || song.title === title)
          ) {
            songs.push({
              title: title,
              url: fullUrl,
            });
          }
        }
      }
    }
    console.log(`Found ${songs.length} songs in "Mais acessadas" section`);
    console.log("Sample songs found:", songs.slice(0, 3));
    return songs.slice(0, 15); // Limit to 15 songs
  } catch (error) {
    console.error("Error parsing 'Mais acessadas':", error);
    return [];
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get("url");
  const tabs = searchParams.get("tabs");
  const instrument = searchParams.get("instrument");
  const testFile = searchParams.get("testFile");

  if (!url && !testFile) {
    return NextResponse.json(
      { error: "URL or testFile parameter is required" },
      { status: 400 }
    );
  }
  // Handle test file requests
  if (testFile) {
    try {
      const fs = await import("fs");
      const path = await import("path");
      const filePath = path.join(
        process.cwd(),
        "public",
        "cifras",
        `${testFile}.html`
      );

      if (!fs.existsSync(filePath)) {
        return NextResponse.json(
          { error: "Test file not found" },
          { status: 404 }
        );
      }

      const fileContent = fs.readFileSync(filePath, "utf8");

      // Wrap the content in a complete HTML structure for testing
      const fullHtml = `
<!DOCTYPE html>
<html>
<head><title>Test File</title></head>
<body>
  <h1 class="t1">Test Song Title</h1>
  <h2 class="t3">Test Artist</h2>
  <div class="cifra_cnt g-fix cifra-mono">
    <span id="cifra_tom">Tom: <a href="#">D</a></span>
    <pre>Test cifra content here</pre>
    ${fileContent}
  </div>
</body>
</html>`;

      return NextResponse.json({
        html: fullHtml,
        url: `test://localhost/${testFile}.html`,
        originalUrl: `test://localhost/${testFile}.html`,
        timestamp: new Date().toISOString(),
        success: true,
        songsFound: 0,
      });
    } catch {
      return NextResponse.json(
        { error: "Failed to read test file" },
        { status: 500 }
      );
    }
  }
  // Validate that the URL is from CifraClub for non-test requests
  if (!url || !url.includes("cifraclub.com.br")) {
    return NextResponse.json(
      { error: "Only CifraClub URLs are allowed" },
      { status: 400 }
    );
  }

  // Construct the final URL with fragment parameters if provided
  let finalUrl = url;
  if (tabs || instrument) {
    // Remove existing fragments from URL
    const baseUrl = url.split("#")[0];
    const fragmentParams = [];

    if (tabs) {
      fragmentParams.push(`tabs=${tabs}`);
    }
    if (instrument) {
      fragmentParams.push(`instrument=${instrument}`);
    }

    if (fragmentParams.length > 0) {
      finalUrl = `${baseUrl}#${fragmentParams.join("&")}`;
    }
  }

  try {
    console.log("Fetching HTML from:", finalUrl);

    const response = await fetch(finalUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
      return NextResponse.json(
        {
          error: `Failed to fetch content: ${response.status} ${response.statusText}`,
        },
        { status: response.status }
      );
    }

    const html = await response.text();
    console.log("Successfully fetched HTML, length:", html.length);

    // Basic validation to check if we got valid HTML
    if (!html.includes("<html") && !html.includes("<!DOCTYPE")) {
      return NextResponse.json(
        { error: "Invalid HTML content received" },
        { status: 422 }
      );
    }

    // Parse "Mais acessadas" songs
    const maisAcessadas = parseMaisAcessadas(html);
    return NextResponse.json({
      html,
      url: finalUrl, // Return the final URL with fragments
      originalUrl: url, // Also include the original URL
      timestamp: new Date().toISOString(),
      success: true,
      maisAcessadas: maisAcessadas,
      songsFound: maisAcessadas.length,
    });
  } catch (error) {
    console.error("Error fetching HTML:", error);
    return NextResponse.json(
      { error: "Failed to fetch HTML content" },
      { status: 500 }
    );
  }
}
