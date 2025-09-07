import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Soweto - Tempo de Aprender

[Intro] A  A7

D                   F#m
  Dei tanto amor pra você
G7M    F#m    Em       F#m  G7M
  Mas você não entendeu
         F#m   Em         F#m   G7M
  Nem me olhou, nem me viu
         F#m   Em         A7
  Nem me tocou, nem sentiu
            D     A7
  O amor nascer

D                   F#m
E foi o fim pra nós dois
G7M    F#m    Em       F#m  G7M
Nada restou pra depois
         F#m   Em       F#m  G
Foi bom enquanto durou
         F#m   Em         A7
Esse romance, esse amor
            D     F#m7
Pena que acabou

          Bm     F#m        G   F#m
Mas vou viver de novo uma paixão
        Bm    F#m7   G      A7         D
E dessa vez vou acertar    bem no coração

           F#m      G
  E nunca mais vou errar
       A7       D
  Como errei com você
             F#m     G
  Quero o prazer de amar
      A7        D    ( A7 )
  É tempo de aprender

----------------- Acordes -----------------
A = X 0 2 2 2 0
A7 = X 0 2 0 2 0
Bm = X 2 4 4 3 2
D = X X 0 2 3 2
Em = 0 2 2 0 0 0
F#m = 2 4 4 2 2 2
F#m7 = 2 X 2 2 2 X
G = 3 2 0 0 0 3
G7M = 3 X 4 4 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TempoDeAprenderPage() {
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
