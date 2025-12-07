import { ChordsPageWidget } from "@/components/chords-page-widget";

export const metadata = {
  title: "Guitar Chord Dictionary",
  description: "Browse and learn guitar chord fingerings",
};

export default function ChordsPage() {
  return (
    <main className="bg-white min-h-screen">
      <ChordsPageWidget />
    </main>
  );
}
