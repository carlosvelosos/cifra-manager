import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const songs = [
  { title: "A Pureza da Flor", href: "/revelacao/a-pureza-da-flor" },
  { title: "Amor Sem Fim", href: "/revelacao/amor-sem-fim" },
  { title: "Baixa Essa Guarda", href: "/revelacao/baixa-essa-guarda" },
  { title: "Compasso do Amor", href: "/revelacao/compasso-do-amor" },
  { title: "Conselho", href: "/revelacao/conselho" },
  { title: "Coração Radiante", href: "/revelacao/coracao-radiante" },
  { title: "Deixa Acontecer", href: "/revelacao/deixa-acontecer" },
  { title: "Deixa Alagar", href: "/revelacao/deixa-alagar" },
  { title: "Essência da Paixão", href: "/revelacao/essencia-da-paixao" },
  { title: "Fala Baixinho (Shiii)", href: "/revelacao/fala-baixinho-shiii" },
  { title: "Grades do Coração", href: "/revelacao/grades-do-coracao" },
  { title: "Novos Tempos", href: "/revelacao/novos-tempos" },
  { title: "Ô Queiroz", href: "/revelacao/o-queiroz" },
  { title: "Preciso Te Amar", href: "/revelacao/preciso-te-amar" },
  { title: "Primeira Estrela", href: "/revelacao/primeira-estrela" },
  { title: "Só Depois", href: "/revelacao/so-depois" },
  { title: "Tá Escrito", href: "/revelacao/ta-escrito" },
  { title: "Talvez", href: "/revelacao/talvez" },
  { title: "Trilha do Amor", href: "/revelacao/trilha-do-amor" },
  { title: "Velocidade da Luz", href: "/revelacao/velocidade-da-luz" },
];

export default function RevelacaoPage() {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Grupo Revelação - Cifras</CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
    </div>
  );
}
