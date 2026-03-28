"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import FloatingMenu from "@/components/floating-menu";
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

  return (
    <div
      style={{
        maxWidth: "48rem",
        margin: "0 auto",
        padding: "1rem",
        paddingBottom: "6rem",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: "700",
            color: "#111827",
            margin: "0 0 0.5rem",
          }}
        >
          {artistDisplayName}
        </h1>
        {description && (
          <p
            style={{
              color: "#6b7280",
              fontSize: "0.875rem",
              maxWidth: "36rem",
              margin: "0 auto 0.75rem",
            }}
          >
            {description}
          </p>
        )}
        <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
          {songs.length} songs · Updated recently
        </p>
      </div>

      {/* Search */}
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "0.75rem",
          padding: "0.75rem 1rem",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span style={{ color: "#9ca3af", fontSize: "1rem" }}>&#x1F50D;</span>
        <input
          type="text"
          placeholder="Search songs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            flex: "1",
            fontSize: "1rem",
            color: "#111827",
            backgroundColor: "transparent",
          }}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            style={{
              border: "none",
              background: "none",
              color: "#6b7280",
              fontSize: "0.875rem",
              cursor: "pointer",
              padding: "0.25rem 0.5rem",
            }}
          >
            Clear
          </button>
        )}
      </div>

      {/* Songs list */}
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "0.75rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "0.875rem 1rem",
            borderBottom: "1px solid #e5e7eb",
            fontWeight: "600",
            color: "#111827",
            fontSize: "0.9375rem",
          }}
        >
          {searchTerm
            ? `${filteredSongs.length} song${filteredSongs.length !== 1 ? "s" : ""} found`
            : "All Songs"}
        </div>

        {filteredSongs.length === 0 ? (
          <div
            style={{
              padding: "3rem 1rem",
              textAlign: "center",
              color: "#6b7280",
            }}
          >
            {searchTerm
              ? `No songs found matching "${searchTerm}"`
              : "No songs available"}
          </div>
        ) : (
          filteredSongs.map((song, index) => (
            <Link
              key={song.href}
              href={song.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.875rem 1rem",
                borderTop: index === 0 ? "none" : "1px solid #f3f4f6",
                textDecoration: "none",
                color: "#111827",
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "1.75rem",
                  height: "1.75rem",
                  borderRadius: "50%",
                  backgroundColor: "#eff6ff",
                  color: "#3b82f6",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {index + 1}
              </span>
              <div style={{ flex: "1", minWidth: 0 }}>
                <div
                  style={{
                    fontWeight: "500",
                    fontSize: "0.9375rem",
                    color: "#111827",
                  }}
                >
                  {song.title}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "#6b7280" }}>
                  {artistDisplayName}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      <FloatingMenu />
    </div>
  );
}
