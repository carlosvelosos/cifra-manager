"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  ArrowLeft,
  Folder,
  Code,
  Terminal,
  Music,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DocsPage() {
  const router = useRouter();

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
        </div>{" "}
        {/* Quick Navigation */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <a
              href="#adding-songs"
              className="p-3 rounded-lg border hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-2 font-medium">
                <Music className="w-4 h-4" />
                Adding New Songs
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Automated song creation process
              </p>
            </a>
            <a
              href="#sidebar-routing-fix"
              className="p-3 rounded-lg border hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle className="w-4 h-4" />
                Sidebar Routing Fix
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Deployment-ready sidebar solution
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
                Updated file organization & naming
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
                Optional manual creation reference
              </p>
            </a>
          </div>
        </Card>
        {/* Adding New Songs */}
        <Card className="p-6 mb-8" id="adding-songs">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Music className="w-6 h-6" />
            Adding New Songs (Automated Method)
          </h2>
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-green-900">
                  ✨ Fully Automated!
                </p>
                <p className="text-green-800 text-sm">
                  Our new automation scripts handle everything: song pages,
                  artist pages, and sidebar navigation updates.
                </p>
              </div>
            </div>
          </div>
          {/* Step 1: Add Song File */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                1
              </span>
              Add Your Song File
            </h3>
            <p className="text-muted-foreground mb-4">
              Place your .txt file in the appropriate artist directory using
              this format:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm">
                app/artists/[artist-name]/Artist Name - Song Title.txt
              </code>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Example:</strong>{" "}
              <code>
                app/artists/marilia-mendonca/Marília Mendonça - Nova Música.txt
              </code>
            </p>
          </div>{" "}
          {/* Step 2: Preview Changes */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                2
              </span>
              Preview What Will Be Created (Recommended)
            </h3>
            <p className="text-muted-foreground mb-4">
              Run the preview script to see what will be created without making
              any changes:
            </p>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>node preview-song-pages.js</span>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900">Preview Output</p>
                  <p className="text-blue-800 text-sm">
                    Shows which artist pages, song pages, and API mappings will
                    be created or skipped.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Step 3: Run Automation */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                3
              </span>
              Run the Automation Script
            </h3>
            <p className="text-muted-foreground mb-4">
              Create all missing pages and update the sidebar automatically:
            </p>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>node create-song-pages.js</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-sm">
                <strong>This script will:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>✅ Create song pages for new .txt files</li>
                  <li>✅ Create artist pages if they don&apos;t exist</li>
                  <li>✅ Update sidebar navigation automatically</li>
                  <li>✅ Add proper display names to the API mapping</li>
                  <li>⚠️ Skip existing files (safe to run multiple times)</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Step 4: Verify Results */}
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                4
              </span>
              Verify and Add Content
            </h3>
            <p className="text-muted-foreground mb-4">
              Your new songs will automatically appear in the sidebar! Now you
              can:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Visit your new song pages in the browser</li>
              <li>
                Add/edit the cifra content in the generated page.tsx files
              </li>
              <li>Use the floating menu to navigate between songs</li>
              <li>Check that the sidebar shows your new artist and songs</li>
            </ul>
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-green-900">That&apos;s it!</p>
                  <p className="text-green-800 text-sm">
                    Your songs are now live and accessible. The sidebar
                    automatically updates to show all artists and songs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>{" "}
        {/* Automation Scripts Section */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            Available Automation Scripts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Code className="w-4 h-4" />
                preview-song-pages.js
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Shows what will be created without making changes. Perfect for
                testing and verification.
              </p>
              <div className="bg-black text-green-400 p-2 rounded text-xs font-mono">
                node preview-song-pages.js
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                create-song-pages.js
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Creates all missing pages and updates sidebar navigation
                automatically.
              </p>
              <div className="bg-black text-green-400 p-2 rounded text-xs font-mono">
                node create-song-pages.js
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Folder className="w-4 h-4" />
                generate-artists-data.js
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Regenerates static artists data for deployment-ready sidebar.
              </p>
              <div className="bg-black text-green-400 p-2 rounded text-xs font-mono">
                npm run generate-artists
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Script Features:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>
                • ✅ Creates song pages using only the song name (cleaner URLs)
              </li>
              <li>• ✅ Auto-generates artist pages if they don&apos;t exist</li>
              <li>
                • ✅ Updates API mappings for proper display names in sidebar
              </li>
              <li>• ✅ Safe to run multiple times (skips existing files)</li>
              <li>• ✅ Handles special characters and accents automatically</li>
              <li>
                • ✅ Comprehensive logging shows what&apos;s created vs skipped
              </li>
              <li>• ✅ Generates deployment-ready static data for sidebar</li>
            </ul>
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
              <h3 className="font-medium mb-2">Directory Layout (Updated)</h3>
              <pre className="bg-muted p-4 rounded-lg text-sm">
                {`app/
  artists/
    [artist-slug]/
      page.tsx                    # Artist listing page (auto-generated)
      [song-slug]/                # Uses only song name!
        page.tsx                  # Individual song page
    marilia-mendonca/             # Example artist
      page.tsx                    # Auto-generated artist page
      ausencia/                   # Song: "Ausência" 
        page.tsx
      graveto/                    # Song: "Graveto"
        page.tsx
    bruno-e-marrone/              # Another artist
      page.tsx
      bijuteria/                  # Song: "Bijuteria"
        page.tsx`}
              </pre>
            </div>

            <div>
              <h3 className="font-medium mb-2">Updated Naming Conventions</h3>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-900">New Format!</p>
                    <p className="text-yellow-800 text-sm">
                      Song directories now use only the song name for cleaner
                      URLs and better organization.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Artist Slugs (unchanged)
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      • &quot;Marília Mendonça&quot; →{" "}
                      <code>marilia-mendonca</code>
                    </li>
                    <li>
                      • &quot;Bruno e Marrone&quot; →{" "}
                      <code>bruno-e-marrone</code>
                    </li>
                    <li>
                      • &quot;Chitãozinho & Xororó&quot; →{" "}
                      <code>chitaozinho-e-xororo</code>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Song Slugs (NEW: song name only!)
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      • &quot;Marília Mendonça - Ausência.txt&quot; →{" "}
                      <code>ausencia/</code>
                    </li>
                    <li>
                      • &quot;Bruno e Marrone - Bijuteria.txt&quot; →{" "}
                      <code>bijuteria/</code>
                    </li>
                    <li>
                      • &quot;Chitãozinho & Xororó - Evidências.txt&quot; →{" "}
                      <code>evidencias/</code>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>{" "}
        {/* Manual Process - Now Optional */}
        <Card className="p-6 mb-8" id="manual-process">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Manual Creation Process (Optional)
          </h2>

          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg mb-6">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
              <div>
                <p className="font-medium text-orange-900">
                  ⚠️ Manual Process No Longer Recommended
                </p>
                <p className="text-orange-800 text-sm">
                  The automation scripts above handle everything automatically.
                  This manual process is only provided for reference or special
                  cases.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">1. Create Artist Directory</h3>
              <div className="bg-black text-green-400 p-3 rounded-lg font-mono text-sm">
                mkdir -p app/artists/artist-slug
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">
                2. Create Artist Page (Auto-generated by script)
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Create <code>app/artists/artist-slug/page.tsx</code>:
              </p>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                {`"use client";

import ArtistPage from "@/components/artist-page";

export default function ArtistPageComponent() {
  return (
    <ArtistPage
      artistSlug="artist-slug"
      artistDisplayName="Artist Display Name"
      description="Description for Artist Display Name with their songs and cifras."
    />
  );
}`}
              </pre>
            </div>

            <div>
              <h3 className="font-medium mb-3">
                3. Create Song Directory (Song name only)
              </h3>
              <div className="bg-black text-green-400 p-3 rounded-lg font-mono text-sm">
                mkdir -p app/artists/artist-slug/song-name
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">4. Create Song Page</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Create <code>app/artists/artist-slug/song-name/page.tsx</code>:
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

const [title, ...restOfCifra] = cifra.split("\\n\\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\\n\\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\\n\\n");

export default function SongNamePage() {
  return (
    <>
      <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}`}
              </pre>
            </div>
          </div>
        </Card>{" "}
        {/* Features */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Features Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                🤖 Full Automation
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Automated song page creation from .txt files</li>
                <li>• Auto-generated artist pages</li>
                <li>• Automatic sidebar navigation updates</li>
                <li>• Safe to run multiple times</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                🎵 Smart Navigation
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Previous/Next song buttons</li>
                <li>• Artist page navigation</li>
                <li>• Home and settings access</li>
                <li>• Floating menu with auto-advance timer</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                📱 Responsive Design
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Mobile-friendly interface</li>
                <li>• Touch-optimized controls</li>
                <li>• Consistent styling across all pages</li>
                <li>• Auto-advance timer (5s - 5min)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                🔧 Developer Friendly
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Clean URL structure (song-name only)</li>
                <li>• Proper page titles and SEO</li>
                <li>• Preview mode for testing</li>
                <li>• Comprehensive error handling</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-medium text-green-900 mb-2">
              🎯 Current Status:
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">14</div>
                <div className="text-green-600">Artists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">35</div>
                <div className="text-green-600">Songs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">100%</div>
                <div className="text-green-600">Automated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">✅</div>
                <div className="text-green-600">Sidebar Ready</div>
              </div>
            </div>
          </div>{" "}
        </Card>{" "}
        {/* Quick Commands Reference */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            Quick Commands Reference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-3 text-blue-700">
                🔍 Preview Mode (Safe)
              </h3>
              <div className="bg-black text-green-400 p-3 rounded-lg font-mono text-sm mb-2">
                node preview-song-pages.js
              </div>
              <p className="text-sm text-muted-foreground">
                Shows what will be created without making any changes. Always
                run this first!
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3 text-green-700">
                ✨ Create Everything
              </h3>
              <div className="bg-black text-green-400 p-3 rounded-lg font-mono text-sm mb-2">
                node create-song-pages.js
              </div>
              <p className="text-sm text-muted-foreground">
                Creates all missing pages and updates sidebar navigation
                automatically.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3 text-purple-700">
                🔄 Update Sidebar Data
              </h3>
              <div className="bg-black text-green-400 p-3 rounded-lg font-mono text-sm mb-2">
                npm run generate-artists
              </div>
              <p className="text-sm text-muted-foreground">
                Regenerates static artists data for deployment-ready sidebar
                navigation.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-medium mb-2">💡 Complete Workflow:</h4>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Add your .txt files to artist directories</li>
              <li>
                Run{" "}
                <code className="bg-gray-200 px-1 rounded">
                  preview-song-pages.js
                </code>{" "}
                to see what will happen
              </li>
              <li>
                Run{" "}
                <code className="bg-gray-200 px-1 rounded">
                  create-song-pages.js
                </code>{" "}
                to create everything
              </li>
              <li>
                Run{" "}
                <code className="bg-gray-200 px-1 rounded">
                  npm run generate-artists
                </code>{" "}
                to update sidebar data
              </li>
              <li>
                Commit and deploy - new songs appear automatically in the
                sidebar!
              </li>
            </ol>
          </div>
        </Card>
        {/* Sidebar Routing Fix */}
        <Card className="p-6 mb-8" id="sidebar-routing-fix">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6" />
            Sidebar Routing Fix (Deployment Ready)
          </h2>

          <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-green-900">
                  ✅ Deployment Issue Resolved!
                </p>
                <p className="text-green-800 text-sm">
                  The sidebar content is now available in all deployment
                  environments through static data generation.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">What Was Fixed</h3>
              <p className="text-muted-foreground mb-4">
                The sidebar was not showing artists and songs in deployed
                environments because the API relied on reading the file system
                at runtime, which often fails in deployment platforms.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-2">
                    ❌ Before (Problem)
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• API read file system at runtime</li>
                    <li>• Failed in deployment environments</li>
                    <li>• Empty sidebar in production</li>
                    <li>• Dependent on file permissions</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">
                    ✅ After (Solution)
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Static data bundled with app</li>
                    <li>• Works in all deployment environments</li>
                    <li>• Faster API responses</li>
                    <li>• Full TypeScript support</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Technical Implementation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">
                    Static Data File
                  </h4>
                  <div className="bg-muted p-3 rounded-lg text-sm">
                    <code>lib/artists-data.ts</code> - Contains all artist and
                    song data with TypeScript interfaces
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">
                    Updated API Route
                  </h4>
                  <div className="bg-muted p-3 rounded-lg text-sm">
                    <code>app/api/artists/route.ts</code> - Now returns static
                    data instead of reading file system
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">
                    Generation Script
                  </h4>
                  <div className="bg-muted p-3 rounded-lg text-sm">
                    <code>scripts/generate-artists-data.js</code> - Regenerates
                    static data from file structure
                  </div>
                </div>
              </div>
            </div>

            <div>
              {" "}
              <h3 className="font-medium mb-3">Keeping Data in Sync</h3>
              <p className="text-muted-foreground mb-4">
                When you add new artists or songs using the automation scripts,
                you&apos;ll also need to update the static data:
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-blue-900 mb-2">
                  After adding new content:
                </h4>
                <div className="space-y-2">
                  <div className="bg-black text-green-400 p-3 rounded-lg font-mono text-sm">
                    npm run generate-artists
                  </div>
                  <p className="text-sm text-blue-800">
                    This command regenerates the static data file to include
                    your new artists and songs in the sidebar.
                  </p>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-900">Important</p>
                    <p className="text-yellow-800 text-sm">
                      Remember to commit the updated{" "}
                      <code>lib/artists-data.ts</code> file and deploy your
                      changes for the sidebar to update in production.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Benefits of the Fix</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">🚀 Performance</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Faster API responses</li>
                    <li>• No file system operations</li>
                    <li>• Cached responses possible</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">🌐 Deployment</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Works on Vercel, Netlify, etc.</li>
                    <li>• Static hosting compatible</li>
                    <li>• No runtime dependencies</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">🔧 Development</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Full TypeScript support</li>
                    <li>• Easy to maintain</li>
                    <li>• Version control friendly</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">✅ Reliability</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• No file permission issues</li>
                    <li>• Consistent across environments</li>
                    <li>• Predictable behavior</li>
                  </ul>
                </div>
              </div>
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
