import Link from "next/link";
import { artistsData } from "@/lib/artists-data";
import { playlistsData } from "@/lib/playlists-data";

export default function HomePage() {
  return (
    <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "2rem 1rem" }}>
      <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "#111827",
          marginBottom: "1.5rem",
        }}
      >
        CifraManager
      </h1>
      {/* negative margin compensates for each item's margin so edges stay flush */}
      <div style={{ display: "flex", flexWrap: "wrap", margin: "-0.375rem" }}>
        {playlistsData.map((playlist) => (
          <Link
            key={playlist.id}
            href={playlist.href}
            style={{
              display: "block",
              flex: "none",
              backgroundColor: "#fffbeb",
              border: "1px solid #fde68a",
              borderRadius: "0.75rem",
              boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              padding: "1rem 1.25rem",
              color: "#1f2937",
              fontWeight: "500",
              fontSize: "1rem",
              textDecoration: "none",
              margin: "0.375rem",
              minWidth: "10rem",
            }}
          >
            {playlist.name}
          </Link>
        ))}
        {artistsData.map((artist) => (
          <Link
            key={artist.id}
            href={artist.href}
            style={{
              display: "block",
              flex: "none",
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "0.75rem",
              boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              padding: "1rem 1.25rem",
              color: "#1f2937",
              fontWeight: "500",
              fontSize: "1rem",
              textDecoration: "none",
              margin: "0.375rem",
              minWidth: "10rem",
            }}
          >
            {artist.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
