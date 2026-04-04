import { Song } from "@/lib/artists-data";

export interface PlaylistSong extends Song {
  artist: string;
}

export interface Playlist {
  id: string;
  name: string;
  href: string;
  description?: string;
  songs: PlaylistSong[];
}

export const playlistsData: Playlist[] = [
  {
    id: "pagode-os-melhores",
    name: "Pagode - Os Melhores",
    href: "/playlist/pagode-os-melhores",
    description:
      "Os melhores sambas e pagodes de todos os tempos! Anos 90 - 2026.",
    songs: [
      // Exaltasamba
      {
        title: "40 Graus De Amor",
        href: "/artists/exaltasamba/40-graus-de-amor",
        artist: "Exaltasamba",
      },
      {
        title: "A Carta",
        href: "/artists/exaltasamba/a-carta",
        artist: "Exaltasamba",
      },
      {
        title: "Acaba Tudo Bem",
        href: "/artists/exaltasamba/acaba-tudo-bem",
        artist: "Exaltasamba",
      },
      {
        title: "Gamei",
        href: "/artists/exaltasamba/gamei",
        artist: "Exaltasamba",
      },
      {
        title: "Me Apaixonei Pela Pessoa Errada",
        href: "/artists/exaltasamba/me-apaixonei-pela-pessoa-errada",
        artist: "Exaltasamba",
      },
      {
        title: "Te Amo Como Nunca Amei Ninguem",
        href: "/artists/exaltasamba/te-amo-como-nunca-amei-ninguem",
        artist: "Exaltasamba",
      },
      // Grupo Revelação
      {
        title: "A Pureza Da Flor",
        href: "/artists/revelacao/a-pureza-da-flor",
        artist: "Grupo Revelação",
      },
      {
        title: "Amor Sem Fim",
        href: "/artists/revelacao/amor-sem-fim",
        artist: "Grupo Revelação",
      },
      {
        title: "Aventureiro",
        href: "/artists/revelacao/aventureiro",
        artist: "Grupo Revelação",
      },
      {
        title: "Baixa Essa Guarda",
        href: "/artists/revelacao/baixa-essa-guarda",
        artist: "Grupo Revelação",
      },
      {
        title: "Capaz De Tudo",
        href: "/artists/revelacao/capaz-de-tudo",
        artist: "Grupo Revelação",
      },
      {
        title: "Conselho",
        href: "/artists/revelacao/conselho",
        artist: "Grupo Revelação",
      },
      {
        title: "Coracao Radiante",
        href: "/artists/revelacao/coracao-radiante",
        artist: "Grupo Revelação",
      },
      {
        title: "Deixa Acontecer",
        href: "/artists/revelacao/deixa-acontecer",
        artist: "Grupo Revelação",
      },
      {
        title: "Fala Baixinho Shiii",
        href: "/artists/revelacao/fala-baixinho-shiii",
        artist: "Grupo Revelação",
      },
      {
        title: "Nunca Mais",
        href: "/artists/revelacao/nunca-mais",
        artist: "Grupo Revelação",
      },
      {
        title: "Preciso Te Amar",
        href: "/artists/revelacao/preciso-te-amar",
        artist: "Grupo Revelação",
      },
      {
        title: "Ta Escrito",
        href: "/artists/revelacao/ta-escrito",
        artist: "Grupo Revelação",
      },
      {
        title: "Trilha Do Amor",
        href: "/artists/revelacao/trilha-do-amor",
        artist: "Grupo Revelação",
      },
      // Grupo Pixote
      {
        title: "Beijo Doce",
        href: "/artists/grupo-pixote/beijo-doce",
        artist: "Grupo Pixote",
      },
      {
        title: "Brilho De Cristal",
        href: "/artists/grupo-pixote/brilho-de-cristal",
        artist: "Grupo Pixote",
      },
      {
        title: "Inseguranca",
        href: "/artists/grupo-pixote/inseguranca",
        artist: "Grupo Pixote",
      },
      {
        title: "Mande Um Sinal",
        href: "/artists/grupo-pixote/mande-um-sinal",
        artist: "Grupo Pixote",
      },
      {
        title: "O Amor Nao Tem Culpa",
        href: "/artists/grupo-pixote/o-amor-nao-tem-culpa",
        artist: "Grupo Pixote",
      },
      // Sorriso Maroto
      {
        title: "Coracao Deserto",
        href: "/artists/sorriso-maroto/coracao-deserto",
        artist: "Sorriso Maroto",
      },
      {
        title: "E Diferente",
        href: "/artists/sorriso-maroto/e-diferente",
        artist: "Sorriso Maroto",
      },
      {
        title: "Ex Namorada",
        href: "/artists/sorriso-maroto/ex-namorada",
        artist: "Sorriso Maroto",
      },
      {
        title: "Oi Amor",
        href: "/artists/sorriso-maroto/oi-amor",
        artist: "Sorriso Maroto",
      },
      {
        title: "Sinais",
        href: "/artists/sorriso-maroto/sinais",
        artist: "Sorriso Maroto",
      },
      // Thiaguinho
      {
        title: "Energia Surreal",
        href: "/artists/thiaguinho/energia-surreal",
        artist: "Thiaguinho",
      },
      {
        title: "Falta Voce",
        href: "/artists/thiaguinho/falta-voce",
        artist: "Thiaguinho",
      },
      // Turma do Pagode
      {
        title: "Camisa Dez",
        href: "/artists/turma-do-pagode/camisa-dez",
        artist: "Turma do Pagode",
      },
      {
        title: "Pro Meu Mundo Girar",
        href: "/artists/turma-do-pagode/pro-meu-mundo-girar",
        artist: "Turma do Pagode",
      },
      // Grupo Menos É Mais
      {
        title: "Fatalmente Separacao Temporal Pot Pourri",
        href: "/artists/grupo-menos-e-mais/fatalmente-separacao-temporal-pot-pourri",
        artist: "Grupo Menos É Mais",
      },
      {
        title: "Vai Me Dando Corda",
        href: "/artists/grupo-menos-e-mais/vai-me-dando-corda",
        artist: "Grupo Menos É Mais",
      },
      // Others
      {
        title: "Pura Adrenalina",
        href: "/artists/belo/pura-adrenalina",
        artist: "Belo",
      },
      { title: "Trovao", href: "/artists/dilsinho/trovao", artist: "Dilsinho" },
      {
        title: "Pe Na Areia",
        href: "/artists/diogo-nogueira/pe-na-areia",
        artist: "Diogo Nogueira",
      },
      {
        title: "Fulminante",
        href: "/artists/mumuzinho/fulminante",
        artist: "Mumuzinho",
      },
      {
        title: "Final De Tarde",
        href: "/artists/pericles/final-de-tarde",
        artist: "Péricles",
      },
      {
        title: "Fatalmente",
        href: "/artists/rodriguinho/fatalmente",
        artist: "Rodriguinho",
      },
      {
        title: "E Tarde Demais",
        href: "/artists/raca-negra/e-tarde-demais",
        artist: "Raça Negra",
      },
      {
        title: "Tempo De Aprender",
        href: "/artists/soweto/tempo-de-aprender",
        artist: "Soweto",
      },
    ],
  },
];
