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
  const artists = artistsData; // Direct static import - no loading needed

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
        className={`fixed top-0 left-0 h-full bg-white/95 backdrop-blur-sm border-r border-gray-200 shadow-lg w-64 z-40
                   flex flex-col
                   transform transition-transform duration-300 ease-in-out
                   ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex-grow overflow-y-auto">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-2xl font-bold text-gray-800">CifraManager</h1>
            <button
              onClick={onToggle}
              className="text-gray-500 hover:text-gray-700"
              title="Close sidebar"
            >
              <X size={20} />
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
