"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import FloatingMenu from "@/components/floating-menu";

interface Song {
  title: string;
  href: string;
}

// Helper function to convert folder names to readable titles
function formatSongTitle(folderName: string): string {
  return folderName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export default function RevelacaoPage() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch("/api/songs/revelacao");
        const data = await response.json();
        if (data.songs) {
          const formattedSongs = data.songs.map((slug: string) => ({
            title: formatSongTitle(slug),
            href: `/artists/revelacao/${slug}`,
          }));
          setSongs(formattedSongs);
        }
      } catch (error) {
        console.error("Failed to fetch songs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Grupo Revelação - Cifras</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-gray-500">Loading songs...</p>
          ) : (
            <ul className="space-y-2">
              {songs.map((song) => (
                <li key={song.href}>
                  <Link
                    href={song.href}
                    className="text-blue-600 hover:underline"
                  >
                    {song.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
      <FloatingMenu />
    </div>
  );
}
