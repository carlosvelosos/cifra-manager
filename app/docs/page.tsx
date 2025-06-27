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
  Download,
  User,
  Search,
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
              href="#offline-library"
              className="p-3 rounded-lg border hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-2 font-medium">
                <Music className="w-4 h-4" />
                Offline Library
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Save and manage playlists for offline use
              </p>
            </a>
            <a
              href="#download-song-tool"
              className="p-3 rounded-lg border hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-2 font-medium">
                <Download className="w-4 h-4" />
                Download Song Tool
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Extract songs from CifraClub URLs
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
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
            Project Structure & Available Pages
          </h2>

          <div className="space-y-6">
            {/* Core Application Pages */}
            <div>
              <h3 className="font-medium mb-4 text-lg">
                🏠 Core Application Pages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/"
                  className="border rounded-lg p-4 hover:bg-muted transition-colors cursor-pointer"
                >
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Home Page
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <code>/</code> - Main landing page with hero section and
                    floating search
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Interactive hero section with search activation</li>
                    <li>• Artist & song search functionality</li>
                    <li>• Direct navigation to artist pages</li>
                    <li>• Responsive design with animations</li>
                  </ul>
                </Link>

                <div className="border rounded-lg p-4 bg-muted/50">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Folder className="w-4 h-4" />
                    Documentation
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <code>/docs</code> - Complete project documentation (this
                    page)
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Step-by-step automation guides</li>
                    <li>• Technical implementation details</li>
                    <li>• Troubleshooting and best practices</li>
                    <li>• Quick reference commands</li>
                  </ul>
                </div>

                <Link
                  href="/playlist"
                  className="border rounded-lg p-4 hover:bg-muted transition-colors cursor-pointer"
                >
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Music className="w-4 h-4" />
                    Playlist Explorer
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <code>/playlist</code> - Spotify playlist manager and
                    offline library
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Load and explore Spotify playlists</li>
                    <li>• Save playlists for offline access</li>
                    <li>• Export/import playlist collections</li>
                    <li>• Search and filter saved playlists</li>
                  </ul>
                </Link>

                <Link
                  href="/playlist-minimal"
                  className="border rounded-lg p-4 hover:bg-muted transition-colors cursor-pointer"
                >
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Minimal Playlist Viewer
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <code>/playlist-minimal</code> - Simple playlist viewer with
                    sortable song list
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Load playlists by URL or ID</li>
                    <li>• Upload offline playlist files (JSON)</li>
                    <li>• Display songs as "artist - song"</li>
                    <li>• Sortable song list (A-Z, Z-A, original)</li>
                    <li>• Clean, minimalist gray gradient interface</li>
                  </ul>
                </Link>

                <Link
                  href="/support"
                  className="border rounded-lg p-4 hover:bg-muted transition-colors cursor-pointer"
                >
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Support Center
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <code>/support</code> - Help center and contact information
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• FAQ and common issues</li>
                    <li>• Contact and feedback forms</li>
                    <li>• Feature request submission</li>
                    <li>• Community links and resources</li>
                  </ul>
                </Link>
              </div>
            </div>

            {/* Playground Tools */}
            <div>
              <h3 className="font-medium mb-4 text-lg">
                🛠️ Playground & Development Tools
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/playground/download-song"
                  className="border rounded-lg p-4 hover:bg-muted transition-colors cursor-pointer"
                >
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Song Tool
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <code>/playground/download-song</code> - Extract songs from
                    CifraClub URLs
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Automatic artist and song name extraction</li>
                    <li>• Musical key detection and parsing</li>
                    <li>• Complete cifra content extraction</li>
                    <li>• Download as formatted .txt files</li>
                  </ul>
                </Link>

                <Link
                  href="/playground/fetch-html"
                  className="border rounded-lg p-4 hover:bg-muted transition-colors cursor-pointer"
                >
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    HTML Fetch Tool
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <code>/playground/fetch-html</code> - Advanced HTML content
                    extraction
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Parse and display web page content</li>
                    <li>• Extract chord diagrams and lyrics</li>
                    <li>• Multiple viewing modes (preview, formatted)</li>
                    <li>• Content filtering and extraction tools</li>
                  </ul>
                </Link>
              </div>
            </div>

            {/* Testing Pages */}
            <div>
              <h3 className="font-medium mb-4 text-lg">
                🧪 Testing & Development Pages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="/test"
                  className="border rounded-lg p-4 hover:bg-muted transition-colors cursor-pointer"
                >
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Search Test Page
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <code>/test</code> - Comprehensive search functionality
                    testing
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Artist search with multiple results</li>
                    <li>• HTML content fetching tests</li>
                    <li>• Google Custom Search integration</li>
                    <li>• API response testing and debugging</li>
                  </ul>
                </Link>

                <Link
                  href="/test-floating-menu"
                  className="border rounded-lg p-4 hover:bg-muted transition-colors cursor-pointer"
                >
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Music className="w-4 h-4" />
                    Floating Menu Test
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <code>/test-floating-menu</code> - Floating menu component
                    testing
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Navigation functionality testing</li>
                    <li>• Auto-advance timer testing</li>
                    <li>• Settings and preferences validation</li>
                    <li>• Cross-page navigation testing</li>
                  </ul>
                </Link>

                <Link
                  href="/test-filter-menu"
                  className="border rounded-lg p-4 hover:bg-muted transition-colors cursor-pointer"
                >
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Filter Menu Test
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <code>/test-filter-menu</code> - Search filter testing
                    interface
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Filter menu component validation</li>
                    <li>• Search parameter testing</li>
                    <li>• UI component interaction testing</li>
                    <li>• Filter state management testing</li>
                  </ul>
                </Link>
              </div>
            </div>

            {/* Artist & Song Pages */}
            <div>
              <h3 className="font-medium mb-4 text-lg">
                🎵 Artist & Song Pages (Auto-Generated)
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">
                    Dynamic Artist Pages
                  </h4>
                  <p className="text-sm text-blue-800 mb-3">
                    Pattern: <code>/artists/[artist-slug]</code> -
                    Auto-generated listing pages for each artist
                  </p>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Displays all songs for the specific artist</li>
                    <li>
                      • Search and filter functionality within artist songs
                    </li>
                    <li>• Responsive grid layout with song cards</li>
                    <li>• Direct links to individual song pages</li>
                    <li>• Back navigation and floating menu integration</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">
                    Individual Song Pages
                  </h4>
                  <p className="text-sm text-green-800 mb-3">
                    Pattern: <code>/artists/[artist-slug]/[song-slug]</code> -
                    Complete cifra display with chords and lyrics
                  </p>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>• Full cifra content with chords and lyrics</li>
                    <li>• Advanced tab notation highlighting and detection</li>
                    <li>• Interactive chord diagrams and sections</li>
                    <li>• Previous/Next song navigation</li>
                    <li>• Floating menu with timer and quick navigation</li>
                    <li>
                      • Hide/show functionality for different content sections
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* API Endpoints */}
            <div>
              <h3 className="font-medium mb-4 text-lg">🔌 API Endpoints</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">/api/artists</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Returns static artists data for sidebar navigation
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Lists all available artists and their songs</li>
                    <li>
                      • Deployment-ready static data (no filesystem reads)
                    </li>
                    <li>• TypeScript interfaces for type safety</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">/api/search</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Advanced search with Google Custom Search integration
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Artist and song search functionality</li>
                    <li>• Prioritized results for artist/song pages</li>
                    <li>• Fallback mechanisms for robust search</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">/api/fetch-html</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Fetch and parse external web content (CifraClub, etc.)
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Extract song data from web pages</li>
                    <li>• Parse popular songs and trending content</li>
                    <li>• Content filtering and cleaning</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">/api/songs</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Song data management and retrieval
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Individual song content access</li>
                    <li>• Metadata and song information</li>
                    <li>• Integration with artist pages</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Directory Structure */}
            <div>
              <h3 className="font-medium mb-4 text-lg">
                📁 File System Structure
              </h3>
              <pre className="bg-muted p-4 rounded-lg text-sm">
                {`app/
├── page.tsx                    # 🏠 Home page with hero and search
├── docs/
│   └── page.tsx               # 📖 Complete documentation
├── playlist/
│   └── page.tsx               # 🎵 Spotify playlist manager
├── support/
│   └── page.tsx               # 💬 Support and help center
├── playground/
│   ├── download-song/
│   │   └── page.tsx           # ⬇️ CifraClub song extractor
│   └── fetch-html/
│       └── page.tsx           # 🌐 HTML content parser
├── test/
│   └── page.tsx               # 🧪 Search functionality testing
├── test-floating-menu/
│   └── page.tsx               # 🎛️ Floating menu testing
├── test-filter-menu/
│   └── page.tsx               # 🔍 Filter menu testing
├── artists/                   # 🎤 Auto-generated artist & song pages
│   └── [artist-slug]/
│       ├── page.tsx           # Artist listing page
│       └── [song-slug]/
│           └── page.tsx       # Individual song page
└── api/                       # 🔌 Backend API endpoints
    ├── artists/route.ts       # Artists data API
    ├── search/route.ts        # Search functionality
    ├── fetch-html/route.ts    # Content extraction
    └── songs/route.ts         # Song data management`}
              </pre>
            </div>

            {/* Naming Conventions */}
            <div>
              <h3 className="font-medium mb-4 text-lg">
                🏷️ Naming Conventions & URL Structure
              </h3>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-900">
                      Clean URL Structure!
                    </p>
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
                    Artist Slugs (kebab-case)
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      • "Marília Mendonça" → <code>marilia-mendonca</code>
                    </li>
                    <li>
                      • "Bruno e Marrone" → <code>bruno-e-marrone</code>
                    </li>
                    <li>
                      • "Chitãozinho & Xororó" →{" "}
                      <code>chitaozinho-e-xororo</code>
                    </li>
                    <li>
                      • "Zé Ramalho" → <code>ze-ramalho</code>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Song Slugs (song name only, kebab-case)
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      • "Marília Mendonça - Ausência.txt" →{" "}
                      <code>ausencia/</code>
                    </li>
                    <li>
                      • "Bruno e Marrone - Bijuteria.txt" →{" "}
                      <code>bijuteria/</code>
                    </li>
                    <li>
                      • "Chitãozinho & Xororó - Evidências.txt" →{" "}
                      <code>evidencias/</code>
                    </li>
                    <li>
                      • "Charlie Brown Jr - Só os Loucos Sabem.txt" →{" "}
                      <code>so-os-loucos-sabem/</code>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="text-sm font-medium mb-2">URL Examples:</h4>
                <ul className="text-xs text-muted-foreground space-y-1 font-mono">
                  <li>
                    • Artist page: <code>/artists/marilia-mendonca</code>
                  </li>
                  <li>
                    • Song page: <code>/artists/marilia-mendonca/ausencia</code>
                  </li>
                  <li>
                    • Another song:{" "}
                    <code>/artists/bruno-e-marrone/bijuteria</code>
                  </li>
                  <li>
                    • Playlist page: <code>/playlist</code>
                  </li>
                  <li>
                    • Tools: <code>/playground/download-song</code>
                  </li>
                </ul>
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
        {/* Offline Library */}
        <Card className="p-6 mb-8" id="offline-library">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Music className="w-6 h-6" />
            Spotify Playlist Offline Library
          </h2>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900">
                  🎵 Save Playlists for Offline Use
                </p>
                <p className="text-blue-800 text-sm">
                  Save your favorite Spotify playlists to an offline library,
                  export/import your collection, and browse without an internet
                  connection.
                </p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Overview</h3>
            <p className="text-muted-foreground mb-4">
              The Offline Library feature allows you to save Spotify playlist
              data locally in your browser for offline access. Once saved, you
              can browse, search, and manage your playlists even without an
              internet connection. All data is stored in your browser&apos;s
              local storage and persists between sessions.
            </p>
          </div>

          {/* How to Save Playlists */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                1
              </span>
              Saving Playlists to Your Library
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground mb-2">
                  After loading a Spotify playlist using the Playlist Explorer:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Load any Spotify playlist by entering its URL</li>
                    <li>
                      Once the playlist loads, look for the &quot;Save to
                      Library&quot; button in the playlist header
                    </li>
                    <li>
                      Click the download icon to save the playlist to your
                      offline library
                    </li>
                    <li>
                      The playlist will be saved with a timestamp and can be
                      accessed offline
                    </li>
                  </ol>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-900">
                      Automatic Updates
                    </p>
                    <p className="text-green-800 text-sm">
                      If you save a playlist that&apos;s already in your
                      library, it will update the existing entry with the latest
                      data and a new timestamp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Browsing Offline Library */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                2
              </span>
              Browsing Your Offline Library
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground mb-2">
                  Access your saved playlists anytime:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>
                      Scroll down to the &quot;Offline Library&quot; section on
                      the Playlist Explorer page
                    </li>
                    <li>
                      Click &quot;Show/Hide Offline Library&quot; to expand the
                      section
                    </li>
                    <li>
                      Browse through your saved playlists displayed as cards
                    </li>
                    <li>
                      Each card shows the playlist name, owner, track count, and
                      save date
                    </li>
                    <li>
                      Click &quot;Load Playlist&quot; to view any saved playlist
                      offline
                    </li>
                  </ol>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900">
                      Offline Mode Indicator
                    </p>
                    <p className="text-blue-800 text-sm">
                      When viewing a playlist from your offline library,
                      you&apos;ll see a &quot;OFFLINE MODE&quot; indicator to
                      remind you that you&apos;re viewing saved data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Managing Your Library */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                3
              </span>
              Managing Your Library
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Library Controls</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>Remove Playlists:</strong> Click the trash icon on
                      any playlist card to remove it from your library
                    </li>
                    <li>
                      <strong>Export Library:</strong> Use the &quot;Export
                      Library&quot; button to download your entire library as a
                      JSON file
                    </li>
                    <li>
                      <strong>Import Library:</strong> Use the &quot;Import
                      Library&quot; button to restore playlists from a
                      previously exported JSON file
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Export & Import Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">Export</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>
                        • Downloads a JSON file with all your saved playlists
                      </li>
                      <li>• Includes all track data and metadata</li>
                      <li>
                        • File named with current date for easy organization
                      </li>
                      <li>• Perfect for backing up your library</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">Import</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Restores playlists from exported JSON files</li>
                      <li>• Validates file format before importing</li>
                      <li>• Replaces your current library</li>
                      <li>• Great for transferring between devices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                ⚙️
              </span>
              Technical Details
            </h3>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-900">
                      Storage Information
                    </p>
                    <ul className="text-yellow-800 text-sm mt-2 space-y-1">
                      <li>
                        • Data is stored in your browser&apos;s localStorage
                      </li>
                      <li>
                        • Persists between browser sessions and page refreshes
                      </li>
                      <li>
                        • Limited by browser storage quotas (typically 5-10MB)
                      </li>
                      <li>• Data is isolated per browser and device</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">What&apos;s Saved</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Playlist metadata (name, description, owner)</li>
                    <li>
                      • Complete track listings with artist and album info
                    </li>
                    <li>• Album artwork URLs</li>
                    <li>• Spotify links for all items</li>
                    <li>• Save timestamp for each playlist</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Limitations</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• No audio playback (Spotify Premium required)</li>
                    <li>• Data limited to when playlist was saved</li>
                    <li>• Browser storage limits apply</li>
                    <li>• Preview URLs may expire over time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                🎯
              </span>
              Perfect For
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Music className="w-4 h-4" />
                  Music Enthusiasts
                </h4>
                <p className="text-sm text-muted-foreground">
                  Keep your favorite playlists accessible even when offline for
                  reference and discovery
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Backup &amp; Archive
                </h4>
                <p className="text-sm text-muted-foreground">
                  Create backups of important playlists and maintain a personal
                  music database
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Folder className="w-4 h-4" />
                  Research & Analysis
                </h4>
                <p className="text-sm text-muted-foreground">
                  Analyze playlist contents, track patterns, and music trends
                  offline
                </p>
              </div>
            </div>
          </div>
        </Card>
        {/* Download Song Tool */}
        <Card className="p-6 mb-8" id="download-song-tool">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Download className="w-6 h-6" />
            Download Song Tool
          </h2>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900">
                  🎵 CifraClub Song Extractor
                </p>
                <p className="text-blue-800 text-sm">
                  Automatically extract song information from CifraClub URLs and
                  download as formatted text files.
                </p>
              </div>
            </div>
          </div>

          {/* Access Location */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                📍
              </span>
              How to Access
            </h3>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="text-sm mb-2">
                Navigate to the Download Song Tool:
              </p>
              <code className="text-sm bg-background px-2 py-1 rounded">
                /playground/download-song
              </code>
            </div>
            <p className="text-sm text-muted-foreground">
              Or access it directly at:{" "}
              <code>http://localhost:3000/playground/download-song</code>
            </p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                ✨
              </span>
              What It Extracts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-green-900">Artist Name</p>
                    <p className="text-sm text-green-700">
                      From H2 element with class &quot;t3&quot;
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-blue-900">Song Title</p>
                    <p className="text-sm text-blue-700">
                      From H1 element with class &quot;t1&quot;
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-purple-900">Musical Key</p>
                    <p className="text-sm text-purple-700">
                      From span with id &quot;cifra_tom&quot;
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-orange-900">Cifra Content</p>
                    <p className="text-sm text-orange-700">
                      Complete chord and lyrics from PRE tags
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                📋
              </span>
              How to Use
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-blue-900 mb-1">
                  Step 1: Enter URL
                </h4>
                <p className="text-sm text-muted-foreground">
                  Paste any CifraClub song URL in the input field
                </p>
                <div className="bg-muted p-2 rounded mt-2 text-xs">
                  Example:{" "}
                  <code>
                    https://www.cifraclub.com.br/marilia-mendonca/ausencia/
                  </code>
                </div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium text-green-900 mb-1">
                  Step 2: Extract Data
                </h4>
                <p className="text-sm text-muted-foreground">
                  Click &quot;Extract Song&quot; or press Enter to fetch and
                  parse the song information
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-medium text-purple-900 mb-1">
                  Step 3: Review & Download
                </h4>
                <p className="text-sm text-muted-foreground">
                  Preview the extracted information and click &quot;Download
                  TXT&quot; to save the file
                </p>
              </div>
            </div>
          </div>

          {/* File Format */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                📄
              </span>
              File Format
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Filename Pattern:</h4>
                <div className="bg-muted p-3 rounded-lg">
                  <code className="text-sm">
                    &quot;Artist - Song - Key.txt&quot;
                  </code>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Example: <code>Marília Mendonça - Ausência - Am.txt</code>
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">File Content:</h4>
                <pre className="bg-muted p-3 rounded-lg text-sm">
                  {`Artist - Song (Key)

[Intro] Am  F  C  G

Am           F
  Verse lyrics here
C            G
  More lyrics here

[Chorus]
F            C
  Chorus lyrics
G            Am
  More chorus`}
                </pre>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                ⚙️
              </span>
              Technical Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Extraction Methods:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Uses regex patterns to parse HTML structure</li>
                  <li>• Handles special characters and accents</li>
                  <li>• Validates essential data before download</li>
                  <li>• Clean extraction without HTML tags</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Supported Sources:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• ✅ CifraClub.com.br URLs only</li>
                  <li>• ✅ Individual song pages</li>
                  <li>• ❌ Artist listing pages</li>
                  <li>• ❌ Other cifra websites</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                🎯
              </span>
              Perfect For
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Music className="w-4 h-4" />
                  Musicians
                </h4>
                <p className="text-sm text-muted-foreground">
                  Quickly save cifras for offline practice and study
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Developers
                </h4>
                <p className="text-sm text-muted-foreground">
                  Extract song data for content management systems
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Folder className="w-4 h-4" />
                  Organizers
                </h4>
                <p className="text-sm text-muted-foreground">
                  Build personal cifra libraries with consistent formatting
                </p>
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
