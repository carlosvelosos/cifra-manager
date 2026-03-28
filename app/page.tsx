import Link from "next/link";
import { artistsData } from "@/lib/artists-data";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">CifraManager</h1>
      <div
        className="flex flex-wrap"
        style={{ gap: "0.75rem" }}
      >
        {artistsData.map((artist) => (
          <Link
            key={artist.id}
            href={artist.href}
            className="flex-none bg-white border border-gray-200 rounded-xl shadow-sm px-5 py-4 text-gray-800 font-medium text-base hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
            style={{ minWidth: "10rem" }}
          >
            {artist.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
