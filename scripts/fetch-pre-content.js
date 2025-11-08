/**
 * Script to fetch content from <pre> HTML tags from a given URL
 * Example usage:
 * node scripts/fetch-pre-content.js
 * node fetch-pre-content.js
 * node scripts/fetch-pre-content.js https://example.com/page
 */

const https = require("https");
const http = require("http");

/**
 * Fetch HTML content from a URL
 * @param {string} url - The URL to fetch
 * @returns {Promise<string>} - The HTML content
 */
function fetchURL(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;

    protocol
      .get(url, (res) => {
        let data = "";

        // Handle redirect
        if (res.statusCode === 301 || res.statusCode === 302) {
          return fetchURL(res.headers.location).then(resolve).catch(reject);
        }

        // Check for successful response
        if (res.statusCode !== 200) {
          reject(
            new Error(`Failed to fetch URL. Status code: ${res.statusCode}`)
          );
          return;
        }

        // Accumulate data
        res.on("data", (chunk) => {
          data += chunk;
        });

        // Resolve with complete data
        res.on("end", () => {
          resolve(data);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

/**
 * Extract content from <pre> tags
 * @param {string} html - The HTML content
 * @returns {Array<string>} - Array of content from <pre> tags
 */
function extractPreContent(html) {
  const preContents = [];
  const preRegex = /<pre[^>]*>([\s\S]*?)<\/pre>/gi;
  let match;

  while ((match = preRegex.exec(html)) !== null) {
    // Decode HTML entities
    let content = match[1]
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, " ");

    preContents.push(content);
  }

  return preContents;
}

/**
 * Main function
 */
async function main() {
  // Default URL - Cifra Club example
  const url =
    process.argv[2] || "https://www.cifraclub.com.br/alceu-valenca/anunciacao/";

  console.log(`Fetching content from: ${url}\n`);

  try {
    // Fetch the HTML
    const html = await fetchURL(url);
    console.log(`✓ Successfully fetched HTML (${html.length} bytes)\n`);

    // Extract <pre> content
    const preContents = extractPreContent(html);

    if (preContents.length === 0) {
      console.log("No <pre> tags found in the HTML.");
      return;
    }

    console.log(`Found ${preContents.length} <pre> tag(s):\n`);

    // Display each <pre> content
    preContents.forEach((content, index) => {
      console.log(`=== <pre> Tag #${index + 1} ===`);
      console.log(content);
      console.log(`\n${"=".repeat(50)}\n`);
    });

    // Optional: Save to file
    // const fs = require('fs');
    // fs.writeFileSync('pre-content.txt', preContents.join('\n\n'));
    // console.log('Content saved to pre-content.txt');
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

// Export functions for use in other modules
module.exports = {
  fetchURL,
  extractPreContent,
};
