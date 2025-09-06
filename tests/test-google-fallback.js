// Test script to demonstrate the Google search fallback functionality
// This simulates how the function works in the playlist page

function constructGoogleSearchUrl(query) {
  const match = query.match(/^(.*?) - (.*)$/);
  if (!match) return null;

  const artist = match[1].trim();
  const song = match[2].trim();

  // Create search query targeting CifraClub specifically
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
  "Charlie Brown Jr - Zóio de Lula",
  "Legião Urbana - Tempo Perdido",
];

console.log("=== Testing Google Search Fallback Function ===\n");

testQueries.forEach((query, index) => {
  console.log(`Test ${index + 1}: "${query}"`);
  const result = constructGoogleSearchUrl(query);
  console.log(`Result: ${result}\n`);
});

console.log("=== Example of how this works in the playlist page ===");
console.log("1. Try API search first");
console.log("2. If API fails, try direct CifraClub URL construction");
console.log("3. If direct URL construction fails, use Google search fallback");
console.log(
  "4. User gets a Google search URL that searches specifically on CifraClub"
);
