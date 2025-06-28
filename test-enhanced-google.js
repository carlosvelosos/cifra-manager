// Test script to demonstrate the enhanced Google search functionality
// This simulates the new extractFirstGoogleResult function

async function extractFirstGoogleResult(query) {
  const match = query.match(/^(.*?) - (.*)$/);
  if (!match) return null;

  const artist = match[1].trim();
  const song = match[2].trim();

  // Create search query targeting CifraClub specifically
  const searchQuery = `${artist} ${song} site:cifraclub.com.br`;
  const encodedQuery = encodeURIComponent(searchQuery);

  const googleUrl = `https://www.google.com/search?q=${encodedQuery}`;
  console.log("🔍 Fetching Google search results:", googleUrl);

  try {
    // Note: In a real browser environment, this would fetch the actual Google results
    // For demonstration, we'll simulate what would happen
    console.log("📡 Making request to Google...");

    // Simulated response - in reality this would parse actual HTML
    const simulatedCifraClubUrls = [
      `https://www.cifraclub.com.br/${artist
        .toLowerCase()
        .replace(/\s+/g, "-")}/${song.toLowerCase().replace(/\s+/g, "-")}/`,
      `https://www.cifraclub.com.br/search/?q=${encodeURIComponent(query)}`,
    ];

    if (simulatedCifraClubUrls.length > 0) {
      const firstResult = simulatedCifraClubUrls[0];
      console.log("✅ Extracted first Google result:", firstResult);
      return firstResult;
    } else {
      console.warn("⚠️ No CifraClub URLs found in Google results");
      return constructGoogleSearchUrl(query);
    }
  } catch (error) {
    console.error("💥 Error fetching Google results:", error);
    return constructGoogleSearchUrl(query);
  }
}

function constructGoogleSearchUrl(query) {
  const match = query.match(/^(.*?) - (.*)$/);
  if (!match) return null;

  const artist = match[1].trim();
  const song = match[2].trim();

  const searchQuery = `${artist} ${song} site:cifraclub.com.br`;
  const encodedQuery = encodeURIComponent(searchQuery);

  const googleUrl = `https://www.google.com/search?q=${encodedQuery}`;
  console.log("🔍 Constructed Google search URL:", googleUrl);
  return googleUrl;
}

// Test cases
const testQueries = [
  "Grupo Revelação - Deixa Acontecer",
  "Zeca Pagodinho - Casal sem Vergonha",
];

console.log("=== Testing Enhanced Google Search Functionality ===\n");

async function runTests() {
  for (let i = 0; i < testQueries.length; i++) {
    const query = testQueries[i];
    console.log(`Test ${i + 1}: "${query}"`);
    const result = await extractFirstGoogleResult(query);
    console.log(`Result: ${result}\n`);
  }

  console.log("=== How this works in the playlist page ===");
  console.log("1. Try API search first");
  console.log("2. If API fails, try direct CifraClub URL construction");
  console.log(
    "3. If direct URL construction fails, fetch Google search results"
  );
  console.log("4. Extract first CifraClub URL from Google results");
  console.log("5. If extraction fails, fall back to Google search URL");
  console.log(
    "\n✨ Now users get actual CifraClub URLs instead of search pages!"
  );
}

runTests();
