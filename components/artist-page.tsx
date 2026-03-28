"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useMemo } from "react";
import FloatingMenu from "@/components/floating-menu";
import { Music, Search, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { artistsData } from "@/lib/artists-data";

interface ArtistPageProps {
  artistSlug: string;
  artistDisplayName: string;
  description?: string;
}

export default function ArtistPage({
  artistSlug,
  artistDisplayName,
  description,
}: ArtistPageProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const songs = useMemo(() => {
    const artist = artistsData.find((a) => a.id === artistSlug);
    return artist?.songs ?? [];
  }, [artistSlug]);

  const filteredSongs = useMemo(() => {
    if (searchTerm.trim() === "") return songs;
    return songs.filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, songs]);

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 bg-primary/10 rounded-full">
            <User className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            {artistDisplayName}
          </h1>
        </div>
        {description && (
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Music className="h-4 w-4" />
            <span>{songs.length} songs</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>Updated recently</span>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />{" "}
            <Input
              type="text"
              placeholder="Search songs..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              className="pl-10 pr-20"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 px-2"
              >
                Clear
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Songs List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Music className="h-5 w-5" />
            <span>
              {searchTerm
                ? `${filteredSongs.length} song${
                    filteredSongs.length !== 1 ? "s" : ""
                  } found`
                : "All Songs"}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredSongs.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <div className="p-4 bg-muted/30 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <p className="text-muted-foreground">
                  {searchTerm
                    ? `No songs found matching "${searchTerm}"`
                    : "No songs available"}
                </p>
                {searchTerm && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleClearSearch}
                    className="mt-2"
                  >
                    Clear search
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className="grid gap-2">
              {filteredSongs.map((song, index) => (
                <Link
                  key={song.href}
                  href={song.href}
                  className="block p-4 rounded-lg border border-border/50 hover:border-border hover:bg-accent/50 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-medium text-primary">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {song.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {artistDisplayName}
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Music className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <FloatingMenu />
    </div>
  );
}
