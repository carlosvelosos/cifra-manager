"use client"; // Make it a client component

import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { artistsData } from "@/lib/artists-data";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const pathname = usePathname();
  const artists = artistsData;

  const rootLink = (active: boolean) =>
    `block px-0 py-2 text-sm font-semibold uppercase tracking-wider rounded-md hover:font-bold hover:scale-110 transition-all origin-left ${
      active ? "font-bold scale-110 text-gray-900" : "text-gray-500"
    }`;

  const subLink = (active: boolean) =>
    `block px-3 ml-2 py-1 rounded-md hover:font-bold hover:scale-110 transition-all text-sm origin-left ${
      active ? "font-bold scale-110 text-gray-900" : "text-gray-700"
    }`;

  const accordionLabel = (active: boolean) =>
    `text-sm font-semibold uppercase tracking-wider ${
      active ? "font-bold text-gray-900" : "text-gray-500"
    }`;

  return (
    <>
      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 transition-opacity duration-300"
          onClick={onToggle}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full bg-white/95 backdrop-blur-sm border-r border-gray-200 shadow-lg w-100 z-40
                   flex flex-col
                   transform transition-transform duration-300 ease-in-out
                   ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex-grow overflow-y-auto">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-xl font-bold text-gray-800">CifraManager</h1>
            <button
              onClick={onToggle}
              className="text-gray-500 hover:text-gray-700"
              title="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>
          <nav>
            <ul className="space-y-2 [&:has(a:hover)_a:not(:hover)]:opacity-40 [&:has(a:hover)_a]:transition-opacity">
              {/* HOME */}
              <li>
                <Link href="/" className={rootLink(pathname === "/")}>
                  Home
                </Link>
              </li>

              <Separator className="my-4" />

              {/* CIFRAS */}
              <li>
                <Accordion type="single" collapsible className="border-none">
                  <AccordionItem value="cifras" className="border-none">
                    <AccordionTrigger className="py-2 hover:no-underline [&>svg]:ml-auto [&>svg]:shrink-0">
                      <span
                        className={accordionLabel(
                          pathname.startsWith("/artists"),
                        )}
                      >
                        Cifras
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-0 pt-1">
                      <Accordion
                        type="single"
                        collapsible
                        className="border-none"
                      >
                        {artists.map((artist) => (
                          <AccordionItem
                            key={artist.id}
                            value={artist.id}
                            className="border-none"
                          >
                            <AccordionTrigger className="py-2 pl-3 hover:no-underline [&>svg]:ml-auto [&>svg]:shrink-0">
                              <Link
                                href={artist.href}
                                onClick={(e) => e.stopPropagation()}
                                className={`text-left text-sm font-semibold uppercase tracking-wider rounded-md hover:font-bold hover:scale-110 transition-all origin-left inline-block ${
                                  pathname === artist.href
                                    ? "font-bold scale-110 text-gray-900"
                                    : "text-gray-500"
                                }`}
                              >
                                {artist.name}
                              </Link>
                            </AccordionTrigger>
                            <AccordionContent className="pb-0 pt-1 mb-30">
                              <ul className="space-y-1">
                                {artist.songs.map((song) => (
                                  <li key={song.href}>
                                    <Link
                                      href={song.href}
                                      className={subLink(
                                        pathname === song.href,
                                      )}
                                    >
                                      {song.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>

              {/* CHORDS */}
              <li>
                <Link
                  href="/chords"
                  className={rootLink(pathname === "/chords")}
                >
                  Chords
                </Link>
              </li>

              {/* CREATE FROM URL */}
              <li>
                <Link
                  href="/create-from-urls"
                  className={rootLink(pathname === "/create-from-urls")}
                >
                  Create from URL
                </Link>
              </li>

              {/* PLAYLIST TOOLS */}
              <li>
                <Accordion type="single" collapsible className="border-none">
                  <AccordionItem value="playlist-tools" className="border-none">
                    <AccordionTrigger className="py-2 hover:no-underline [&>svg]:ml-auto [&>svg]:shrink-0">
                      <span
                        className={accordionLabel(
                          pathname.startsWith("/playlist"),
                        )}
                      >
                        Playlist Tools
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-0 pt-1">
                      <ul className="space-y-1">
                        <li>
                          <Link
                            href="/playlist"
                            className={subLink(pathname === "/playlist")}
                          >
                            Playlist Explorer
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/playlist-minimal"
                            className={subLink(pathname === "/playlist-minimal")}
                          >
                            Minimal Viewer
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/playlist-artists"
                            className={subLink(pathname === "/playlist-artists")}
                          >
                            Playlist Artists
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>

              <Separator className="my-4" />

              {/* DOCUMENTATION */}
              <li>
                <Link href="/docs" className={rootLink(pathname === "/docs")}>
                  Documentation
                </Link>
              </li>

              {/* KEYBOARD SHORTCUTS */}
              <li>
                <Link
                  href="/keyboard-shortcuts"
                  className={rootLink(pathname === "/keyboard-shortcuts")}
                >
                  Keyboard Shortcuts
                </Link>
              </li>

              {/* SUPPORT */}
              <li>
                <Link
                  href="/support"
                  className={rootLink(pathname === "/support")}
                >
                  Support
                </Link>
              </li>

              <Separator className="my-4" />

              {/* BETA */}
              <li>
                <Accordion type="single" collapsible className="border-none">
                  <AccordionItem value="beta" className="border-none">
                    <AccordionTrigger className="py-2 hover:no-underline [&>svg]:ml-auto [&>svg]:shrink-0">
                      <span
                        className={accordionLabel(
                          pathname.startsWith("/test") ||
                            pathname.startsWith("/playground"),
                        )}
                      >
                        Beta
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-0 pt-1">
                      <ul className="space-y-1">
                        <li>
                          <Link
                            href="/playground/download-song"
                            className={subLink(
                              pathname === "/playground/download-song",
                            )}
                          >
                            Download Song
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/playground/fetch-html"
                            className={subLink(
                              pathname === "/playground/fetch-html",
                            )}
                          >
                            Fetch HTML
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/test"
                            className={subLink(pathname === "/test")}
                          >
                            Search Test
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/test-filter-menu"
                            className={subLink(
                              pathname === "/test-filter-menu",
                            )}
                          >
                            Filter Menu Test
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/test-floating-menu"
                            className={subLink(
                              pathname === "/test-floating-menu",
                            )}
                          >
                            Floating Menu Test
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} CifraManager
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
