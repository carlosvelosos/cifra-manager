"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

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

export default function ZecaPagodinhoPage() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch("/api/songs/zeca-pagodinho");
        const data = await response.json();
        if (data.songs) {
          const formattedSongs = data.songs.map((slug: string) => ({
            title: formatSongTitle(slug),
            href: `/artists/zeca-pagodinho/${slug}`,
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
          <CardTitle>Zeca Pagodinho - Cifras</CardTitle>
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
    </div>
  );
}
