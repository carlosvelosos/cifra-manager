import { notFound } from "next/navigation";
import PlaylistPage from "@/components/playlist-page";
import { playlistsData } from "@/lib/playlists-data";

export function generateStaticParams() {
  return playlistsData.map((playlist) => ({
    "playlist-slug": playlist.id,
  }));
}

export default async function PlaylistSlugPage({
  params,
}: {
  params: Promise<{ "playlist-slug": string }>;
}) {
  const { "playlist-slug": slug } = await params;
  const playlist = playlistsData.find((p) => p.id === slug);

  if (!playlist) {
    notFound();
  }

  return (
    <PlaylistPage
      playlistSlug={playlist.id}
      playlistDisplayName={playlist.name}
      description={playlist.description}
    />
  );
}
