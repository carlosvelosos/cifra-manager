"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Home,
  ArrowLeft,
  Folder,
  Code,
  Terminal,
  Copy,
  Music,
  GitBranch,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DocsPage() {
  const router = useRouter();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (text: string, codeId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(codeId);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

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

  const createSongScript = `const fs = require("fs");
const path = require("path");

// Song list in "Artist - Song Title" format
const songList = \`${songList}\`;

// Function to convert title to slug (URL-friendly)
function titleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9\\s-]/g, '') // Remove special characters
    .replace(/\\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

// Function to convert artist name to slug
function artistToSlug(artist) {
  return artist
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9\\s-]/g, '')
    .replace(/\\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Parse songs and create pages
function createSongPages() {
  const songs = songList
    .split('\\n')
    .filter(line => line.trim())
    .map(line => {
      const [artist, ...songParts] = line.split(' - ');
      const songTitle = songParts.join(' - '); // Handle songs with dashes
      return {
        artist: artist.trim(),
        artistSlug: artistToSlug(artist.trim()),
        songTitle: songTitle.trim(),
        songSlug: titleToSlug(songTitle.trim())
      };
    });

  console.log(\`Found \${songs.length} songs to process\\n\`);

  songs.forEach(({ artist, artistSlug, songTitle, songSlug }, index) => {
    console.log(\`\${index + 1}. Processing: \${artist} - \${songTitle}\`);
    
    // Create artist directory if it doesn't exist
    const artistDir = path.join(process.cwd(), 'app', 'artists', artistSlug);
    if (!fs.existsSync(artistDir)) {
      fs.mkdirSync(artistDir, { recursive: true });
      console.log(\`   Created artist directory: \${artistSlug}\`);
      
      // Create artist page.tsx
      const artistPageContent = \`import { ArtistSongDisplay } from "@/components/artist-song-display";
import FloatingMenu from "@/components/floating-menu";

export default function \${artist.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <>
      <ArtistSongDisplay 
        artistName="\${artist}" 
        artistSlug="\${artistSlug}" 
      />
      <FloatingMenu />
    </>
  );
}\`;
      
      fs.writeFileSync(path.join(artistDir, 'page.tsx'), artistPageContent);
      console.log(\`   Created artist page: \${artistSlug}/page.tsx\`);
    }

    // Create song directory
    const songDir = path.join(artistDir, songSlug);
    if (!fs.existsSync(songDir)) {
      fs.mkdirSync(songDir, { recursive: true });
      console.log(\`   Created song directory: \${artistSlug}/\${songSlug}\`);
    }

    // Create song page.tsx
    const songPageContent = \`import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = \\\`
\${artist} - \${songTitle}

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
\\\`;

export default function \${songTitle.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <>
      <CifraDisplay cifra={cifra} />
      <FloatingMenu />
    </>
  );
}\`;

    fs.writeFileSync(path.join(songDir, 'page.tsx'), songPageContent);
    console.log(\`   ✓ Created: \${artistSlug}/\${songSlug}/page.tsx\`);
  });

  console.log(\`\\n🎵 Successfully created \${songs.length} song pages!\`);
  console.log('\\nNext steps:');
  console.log('1. Add your chord progressions and lyrics to each page');
  console.log('2. Test the pages in your browser');
  console.log('3. Use the floating menu to navigate between songs');
}

// Run the script
createSongPages();`;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <h1 className="text-3xl font-bold">Documentation</h1>
        </div>

        {/* Quick Navigation */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="#adding-songs"
              className="p-3 rounded-lg border hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-2 font-medium">
                <Music className="w-4 h-4" />
                Adding New Songs
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Bulk add songs from a list
              </p>
            </a>
            <a
              href="#project-structure"
              className="p-3 rounded-lg border hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-2 font-medium">
                <Folder className="w-4 h-4" />
                Project Structure
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Understanding the file organization
              </p>
            </a>
            <a
              href="#manual-process"
              className="p-3 rounded-lg border hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-2 font-medium">
                <Code className="w-4 h-4" />
                Manual Process
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Step-by-step manual creation
              </p>
            </a>
          </div>
        </Card>

        {/* Adding New Songs */}
        <Card className="p-6 mb-8" id="adding-songs">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Music className="w-6 h-6" />
            Adding New Songs (Bulk Method)
          </h2>

          {/* Step 1: Prepare Song List */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                1
              </span>
              Prepare Your Song List
            </h3>
            <p className="text-muted-foreground mb-4">
              Format your songs as "Artist - Song Title", one per line:
            </p>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap">
                {songList}
              </pre>
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(songList, "songlist")}
              >
                {copiedCode === "songlist" ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Step 2: Create Script */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                2
              </span>
              Create the Automation Script
            </h3>
            <p className="text-muted-foreground mb-4">
              Create a file called{" "}
              <code className="bg-muted px-2 py-1 rounded">
                create-songs.js
              </code>{" "}
              in your project root:
            </p>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto max-h-96">
                {createSongScript}
              </pre>
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(createSongScript, "script")}
              >
                {copiedCode === "script" ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Step 3: Run Script */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                3
              </span>
              Run the Script
            </h3>
            <p className="text-muted-foreground mb-4">
              Open terminal in your project root and run:
            </p>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>node create-songs.js</span>
              </div>
            </div>
          </div>

          {/* Step 4: Add Content */}
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                4
              </span>
              Add Your Chords and Lyrics
            </h3>
            <p className="text-muted-foreground mb-4">
              Each song page will be created with a template. Navigate to each
              song file and replace the placeholder content with actual chords
              and lyrics.
            </p>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900">Pro Tip</p>
                  <p className="text-blue-800 text-sm">
                    The script automatically handles special characters,
                    accents, and creates URL-friendly slugs. It also sets up the
                    floating menu navigation automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Project Structure */}
        <Card className="p-6 mb-8" id="project-structure">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Folder className="w-6 h-6" />
            Project Structure
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Directory Layout</h3>
              <pre className="bg-muted p-4 rounded-lg text-sm">
                {`app/
  artists/
    [artist-slug]/
      page.tsx                    # Artist listing page
      [song-slug]/
        page.tsx                  # Individual song page
    revelacao/                    # Example artist
      page.tsx
      a-pureza-da-flor/
        page.tsx
      amor-sem-fim/
        page.tsx
    zeca-pagodinho/               # Another artist
      page.tsx
      deixa-a-vida-me-levar/
        page.tsx`}
              </pre>
            </div>

            <div>
              <h3 className="font-medium mb-2">Naming Conventions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Artist Slugs
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      • "Grupo Revelação" → <code>revelacao</code>
                    </li>
                    <li>
                      • "Zeca Pagodinho" → <code>zeca-pagodinho</code>
                    </li>
                    <li>
                      • "João Neto & Frederico" →{" "}
                      <code>joao-neto-frederico</code>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Song Slugs
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      • "A Pureza da Flor" → <code>a-pureza-da-flor</code>
                    </li>
                    <li>
                      • "Fala Baixinho (Shiii)" →{" "}
                      <code>fala-baixinho-shiii</code>
                    </li>
                    <li>
                      • "Coração Radiante" → <code>coracao-radiante</code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Manual Process */}
        <Card className="p-6 mb-8" id="manual-process">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Manual Creation Process
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">1. Create Artist Directory</h3>
              <div className="bg-black text-green-400 p-3 rounded-lg font-mono text-sm">
                mkdir -p app/artists/artist-slug
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">2. Create Artist Page</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Create <code>app/artists/artist-slug/page.tsx</code>:
              </p>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                {`import { ArtistSongDisplay } from "@/components/artist-song-display";
import FloatingMenu from "@/components/floating-menu";

export default function ArtistPage() {
  return (
    <>
      <ArtistSongDisplay 
        artistName="Artist Name" 
        artistSlug="artist-slug" 
      />
      <FloatingMenu />
    </>
  );
}`}
              </pre>
            </div>

            <div>
              <h3 className="font-medium mb-3">3. Create Song Directory</h3>
              <div className="bg-black text-green-400 p-3 rounded-lg font-mono text-sm">
                mkdir -p app/artists/artist-slug/song-slug
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">4. Create Song Page</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Create <code>app/artists/artist-slug/song-slug/page.tsx</code>:
              </p>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                {`import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = \`
Artist - Song Title

[Intro] Am  F  C  G

Am            F
  Your lyrics here
C             G
  More lyrics here

[Chorus]
F             C
  Chorus lyrics
G             Am
  More chorus
\`;

export default function SongPage() {
  return (
    <>
      <CifraDisplay cifra={cifra} />
      <FloatingMenu />
    </>
  );
}`}
              </pre>
            </div>
          </div>
        </Card>

        {/* Features */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Features Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Automatic Navigation
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Previous/Next song buttons</li>
                <li>• Artist page navigation</li>
                <li>• Home and settings access</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Auto-Advance Timer
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Configurable timer (5s - 5min)</li>
                <li>• Enable/disable in settings</li>
                <li>• Visual countdown display</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Responsive Design
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Mobile-friendly interface</li>
                <li>• Touch-optimized controls</li>
                <li>• Consistent styling</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                SEO Friendly
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Clean URL structure</li>
                <li>• Proper page titles</li>
                <li>• Organized content</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Navigation */}
        <div className="text-center">
          <Button asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
