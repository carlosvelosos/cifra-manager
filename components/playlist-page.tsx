"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import FloatingMenu from "@/components/floating-menu";
import { playlistsData } from "@/lib/playlists-data";

interface PlaylistPageProps {
  playlistSlug: string;
  playlistDisplayName: string;
  description?: string;
}

export default function PlaylistPage({
  playlistSlug,
  playlistDisplayName,
  description,
}: PlaylistPageProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const songs = useMemo(() => {
    const playlist = playlistsData.find((p) => p.id === playlistSlug);
    return playlist?.songs ?? [];
  }, [playlistSlug]);

  const filteredSongs = useMemo(() => {
    if (searchTerm.trim() === "") return songs;
    return songs.filter(
      (song) =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase()),
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
        <div style={{ marginBottom: "0.5rem" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#fef3c7",
              color: "#92400e",
              fontSize: "0.75rem",
              fontWeight: "600",
              padding: "0.2rem 0.6rem",
              borderRadius: "9999px",
              letterSpacing: "0.025em",
            }}
          >
            ♫ Playlist
          </span>
        </div>
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: "700",
            color: "#111827",
            margin: "0 0 0.5rem",
          }}
        >
          {playlistDisplayName}
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
          {songs.length} músicas
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
          placeholder="Buscar músicas ou artistas..."
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
            ? `${filteredSongs.length} música${filteredSongs.length !== 1 ? "s" : ""} encontrada${filteredSongs.length !== 1 ? "s" : ""}`
            : "Todas as músicas"}
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
              ? `Nenhuma música encontrada para "${searchTerm}"`
              : "Nenhuma música disponível"}
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
                  backgroundColor: "#fef3c7",
                  color: "#92400e",
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
                  {song.artist}
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
