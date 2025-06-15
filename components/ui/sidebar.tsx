"use client"; // Make it a client component

import Link from "next/link";
import { Pin, PinOff } from "lucide-react";
import { usePathname } from "next/navigation"; // Import usePathname
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Artist } from "@/lib/artists-data";

interface SidebarProps {
  isPinned: boolean;
  onPinToggle: () => void;
}

const Sidebar = ({ isPinned, onPinToggle }: SidebarProps) => {
  const pathname = usePathname();
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch("/api/artists");
        const data = await response.json();
        setArtists(data.artists || []);
      } catch (error) {
        console.error("Failed to fetch artists:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);
  return (
    <div
      className={`group fixed top-0 left-0 h-full z-40 transition-all duration-300 ease-in-out overflow-hidden ${
        isPinned ? "w-64" : "w-12 hover:w-64"
      }`}
    >
      {/* Sidebar handle - visible when not pinned */}
      {!isPinned && (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-20 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-r-lg shadow-md flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 cursor-pointer">
          <div className="flex flex-col space-y-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      )}

      <aside
        className={`h-full bg-white/95 backdrop-blur-sm border-r border-gray-200 shadow-lg w-64
                   flex flex-col
                   transform transition-transform duration-300 ease-in-out
                   ${
                     isPinned
                       ? "translate-x-0"
                       : "translate-x-[-240px] group-hover:translate-x-0"
                   }`}
      >
        <div className="p-6 flex-grow overflow-y-auto">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-2xl font-bold text-gray-800">CifraManager</h1>
            <button
              onClick={onPinToggle}
              className="text-gray-500 hover:text-gray-700"
            >
              {isPinned ? <PinOff size={20} /> : <Pin size={20} />}
            </button>
          </div>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className={`block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors text-sm ${
                    pathname === "/"
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700"
                  }`}
                >
                  Home
                </Link>
              </li>
              <Separator className="my-4" />
              {loading ? (
                <li className="text-gray-500 text-sm px-3 py-2">
                  Loading artists...
                </li>
              ) : (
                <li>
                  <Accordion type="single" collapsible className="border-none">
                    {artists.map((artist) => (
                      <AccordionItem
                        key={artist.id}
                        value={artist.id}
                        className="border-none"
                      >
                        <AccordionTrigger className="py-2 hover:no-underline">
                          <Link
                            href={artist.href}
                            className={`block w-full text-left px-0 text-sm font-semibold uppercase tracking-wider rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors ${
                              pathname === artist.href
                                ? "text-gray-900"
                                : "text-gray-500"
                            }`}
                          >
                            {artist.name}
                          </Link>
                        </AccordionTrigger>
                        <AccordionContent className="pb-0 pt-1">
                          <ul className="space-y-1">
                            {artist.songs.map((song) => (
                              <li key={song.href}>
                                <Link
                                  href={song.href}
                                  className={`block px-3 ml-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors text-sm ${
                                    pathname === song.href
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700"
                                  }`}
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
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="p-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} CifraManager
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
