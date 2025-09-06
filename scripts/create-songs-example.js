const fs = require("fs");
const path = require("path");

// Song list in "Artist - Song Title" format
// Replace this with your own list of songs
const songList = `Revelação - Coração Radiante
Revelação - Deixa Acontecer
Revelação - Essência da Paixão
Revelação - Fala Baixinho
Revelação - Grades do Coração
Revelação - Novos Tempos
Revelação - Primeira Estrela
Revelação - Só Depois
Revelação - Talvez
Revelação - Trilha do Amor
Zeca Pagodinho - Deixa a Vida Me Levar
Zeca Pagodinho - Ser Humano
Zeca Pagodinho - Verdade
Zeca Pagodinho - Maneiras
Zeca Pagodinho - Camarão que Dorme
Zeca Pagodinho - Água da Minha Sede
Zeca Pagodinho - Quintal da Minha Casa
Zeca Pagodinho - Judia de Mim
Zeca Pagodinho - Vai Vadiar
Zeca Pagodinho - Sonho Meu`;

// Function to convert title to slug (URL-friendly)
function titleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/[àáâãäå]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôõö]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/[ç]/g, "c")
    .replace(/[ñ]/g, "n")
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .trim();
}

// Function to convert artist name to slug
function artistToSlug(artist) {
  return artist
    .toLowerCase()
    .replace(/[àáâãäå]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôõö]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/[ç]/g, "c")
    .replace(/[ñ]/g, "n")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// Parse songs and create pages
function createSongPages() {
  const songs = songList
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => {
      const [artist, ...songParts] = line.split(" - ");
      const songTitle = songParts.join(" - "); // Handle songs with dashes
      return {
        artist: artist.trim(),
        artistSlug: artistToSlug(artist.trim()),
        songTitle: songTitle.trim(),
        songSlug: titleToSlug(songTitle.trim()),
      };
    });

  console.log(`Found ${songs.length} songs to process\n`);

  songs.forEach(({ artist, artistSlug, songTitle, songSlug }, index) => {
    console.log(`${index + 1}. Processing: ${artist} - ${songTitle}`);

    // Create artist directory if it doesn't exist
    const artistDir = path.join(process.cwd(), "app", "artists", artistSlug);
    if (!fs.existsSync(artistDir)) {
      fs.mkdirSync(artistDir, { recursive: true });
      console.log(`   Created artist directory: ${artistSlug}`);

      // Create artist page.tsx
      const artistPageContent = `import { ArtistSongDisplay } from "@/components/artist-song-display";
import FloatingMenu from "@/components/floating-menu";

export default function ${artist.replace(/[^a-zA-Z0-9]/g, "")}Page() {
  return (
    <>
      <ArtistSongDisplay 
        artistName="${artist}" 
        artistSlug="${artistSlug}" 
      />
      <FloatingMenu />
    </>
  );
}`;

      fs.writeFileSync(path.join(artistDir, "page.tsx"), artistPageContent);
      console.log(`   Created artist page: ${artistSlug}/page.tsx`);
    }

    // Create song directory
    const songDir = path.join(artistDir, songSlug);
    if (!fs.existsSync(songDir)) {
      fs.mkdirSync(songDir, { recursive: true });
      console.log(`   Created song directory: ${artistSlug}/${songSlug}`);
    }

    // Create song page.tsx
    const songPageContent = `import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = \`
${artist} - ${songTitle}

[Intro] Am  F  C  G

Am            F
  Verse lyrics go here
C             G
  More lyrics here
Am            F
  Continue with the song
C             G              Am
  End of verse

[Chorus]
F             C
  Chorus lyrics here
G             Am
  More chorus lyrics
F             C
  Continue chorus
G                    Am
  End of chorus

// Add your chords and lyrics here
// Follow the pattern above
// [Intro], [Verse], [Chorus], [Bridge], etc.
\`;

export default function ${songTitle.replace(/[^a-zA-Z0-9]/g, "")}Page() {
  return (
    <>
      <CifraDisplay cifra={cifra} />
      <FloatingMenu />
    </>
  );
}`;

    fs.writeFileSync(path.join(songDir, "page.tsx"), songPageContent);
    console.log(`   ✓ Created: ${artistSlug}/${songSlug}/page.tsx`);
  });

  console.log(`\n🎵 Successfully created ${songs.length} song pages!`);
  console.log("\nNext steps:");
  console.log("1. Add your chord progressions and lyrics to each page");
  console.log("2. Test the pages in your browser");
  console.log("3. Use the floating menu to navigate between songs");
}

// Run the script
createSongPages();
