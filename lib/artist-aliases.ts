/**
 * Artist Alias Map
 *
 * Maps Cifra Club URL slugs to our app's folder slugs.
 * Add entries here when Cifra Club uses a different slug than our artist folder.
 *
 * Format: { "cifraclub-slug": "our-app-folder-slug" }
 *
 * Example: Cifra Club uses /pixote/ but our folder is /grupo-pixote/
 */
export const ARTIST_ALIASES: Record<string, string> = {
  pixote: "grupo-pixote",
};
