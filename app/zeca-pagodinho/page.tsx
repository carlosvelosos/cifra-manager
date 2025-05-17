import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const songs = [
  { title: "Água da Minha Sede", href: "/zeca-pagodinho/agua-da-minha-sede" },
  {
    title: "Ainda é Tempo de Ser Feliz",
    href: "/zeca-pagodinho/ainda-e-tempo-de-ser-feliz",
  },
  {
    title: "Camarão que Dorme a Onda Leva",
    href: "/zeca-pagodinho/camarao-que-dorme-a-onda-leva",
  },
  {
    title: "Coração em Desalinho",
    href: "/zeca-pagodinho/coracao-em-desalinho",
  },
  {
    title: "Deixa a Vida Me Levar",
    href: "/zeca-pagodinho/deixa-a-vida-me-levar",
  },
  { title: "Faixa Amarela", href: "/zeca-pagodinho/faixa-amarela" },
  { title: "Lama nas Ruas", href: "/zeca-pagodinho/lama-nas-ruas" },
  { title: "Mais Feliz", href: "/zeca-pagodinho/mais-feliz" },
  { title: "Maneiras", href: "/zeca-pagodinho/maneiras" },
  { title: "Não Sou Mais Disso", href: "/zeca-pagodinho/nao-sou-mais-disso" },
  { title: "O Dono da Dor", href: "/zeca-pagodinho/o-dono-da-dor" },
  { title: "Ogum", href: "/zeca-pagodinho/ogum" },
  { title: "Pago pra Ver", href: "/zeca-pagodinho/pago-pra-ver" },
  { title: "Quando a Gira Girou", href: "/zeca-pagodinho/quando-a-gira-girou" },
  { title: "Quem é Ela?", href: "/zeca-pagodinho/quem-e-ela_" },
  { title: "Seu Balancê", href: "/zeca-pagodinho/seu-balance" },
  { title: "Toda Hora", href: "/zeca-pagodinho/toda-hora" },
  { title: "Vacilão", href: "/zeca-pagodinho/vacilao" },
  { title: "Vai Vadiar", href: "/zeca-pagodinho/vai-vadiar" },
  { title: "Verdade", href: "/zeca-pagodinho/verdade" },
];

export default function ZecaPagodinhoPage() {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Zeca Pagodinho - Cifras</CardTitle>
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
