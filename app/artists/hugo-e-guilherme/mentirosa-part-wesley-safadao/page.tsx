import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Hugo & Guilherme - Mentirosa (part. Wesley Safadão)

[Intro] C  G/B  Am  Dm  F  G

[Primeira Parte]

C           G/B          Am   Am7/G
  Sumiu de mim ontem na festa
    F                         G
Só de manhã foi dar o ar da graça
C          G/B                Am
  Onde cê tava? Que olheira é essa?
     F                           G
Que bom que cê já veio aqui pra casa

C              G/B           Am
  Porque eu já arrumei suas coisas
         Em                 F
Tá tudo dentro desse saco preto
                     C/E
Mas antes de ir embora
Dm                 G
   Me responde primeiro

[Refrão]

                                 C
Por que que cê é assim tão mentirosa?
   G/B                  Am
O povo lá em casa te detesta
                                Dm
Se eu chegar com essa notícia agora
         F                    G
Vai ser pelo menos 3 dias de festa

                                 C
Por que que cê é assim tão mentirosa?
   G/B                  Am
O povo lá em casa te detesta
                                Dm
Se eu chegar com essa notícia agora
         F                    G
Vai ser pelo menos 3 dias de festa

                                 C
Por que que cê é assim tão mentirosa?

( G/B  Am  Dm  F  G )

[Primeira Parte]

C          G/B                Am
  Onde cê tava? Que olheira é essa?
     F                           G
Que bom que cê já veio aqui pra casa

C              G/B           Am
  Porque eu já arrumei suas coisas
         Em                 F
Tá tudo dentro desse saco preto
                     C/E
Mas antes de ir embora
Dm                 G
   Me responde primeiro

[Refrão]

                                 C
Por que que cê é assim tão mentirosa?
   G/B                  Am
O povo lá em casa te detesta
                                Dm
Se eu chegar com essa notícia agora
         F                    G
Vai ser pelo menos 3 dias de festa

                                 C
Por que que cê é assim tão mentirosa?
   G/B                  Am
O povo lá em casa te detesta
                                Dm
Se eu chegar com essa notícia agora
         F                    G
Vai ser pelo menos 3 dias de festa

                                 C
Por que que cê é assim tão mentirosa?

----------------- Acordes -----------------
Am = X 0 2 2 1 0
Am7/G = 3 0 2 0 1 0
C = X 3 2 0 1 0
C/E = 0 3 2 0 1 0
Dm = X X 0 2 3 1
Em = 0 2 2 0 0 0
F = 1 3 3 2 1 1
G = 3 2 0 0 0 3
G/B = X 2 0 0 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MentirosaPartWesleySafadaoPage() {
  return (
    <>
      <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
