import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Sorriso Maroto - Ex-Namorada

Intro: D7M  A7/4  D7M/A  Bb7M  A7/4

D7M              D7M/9          C#m7          Cº
Eu te falei que era melhor telefonar antes de vir
Bm7                         D/E       A7M    A7/4
Me procurar pra não sofrer,     pra não chorar
D7M              D7M/9          C#m7          Cº           Bm7
Ainda bem que o meu amor já percebeu que o culpado não fui eu
            D/E                   C#m7            F#7/4 F#7
Ex namorada é mesmo assim, você já quer voltar pra mim

Bm7
Ai, ai, ai, ai  mas como eu sou honesto
                D/E
Te confesso que no fundo eu bambeei
C#m7
Ai, ai, ai, ai,  botei a mão no fogo
                         F#7/4          F#7
Mas com medo de queimar eu recuei
    Bm7    C#m7      D7M    D/E   A7M    F#7 ( A7/4 )
Ai, ai, ai  eu vou deixar você na vontade

        DM7                               D/E
Não adianta voltar com esse papo de amar
                  C#m7               Em7    A7
Cheia de amor pra dar         Não dá, não dá
       DM7                               D/E
Não adianta voltar com esse papo de amar
                  F#7/4               A7/4  A7
Cheia de amor pra dar         Não dá, não dá
       DM7               E7/9  A7/4
Não adianta voltar...

----------------- Acordes -----------------
A7 = X 0 2 0 2 0
A7/4 = X 0 2 0 3 0
A7M = X 0 2 1 2 0
Bb7M = X 1 3 2 3 1
Bm7 = X 2 4 2 3 2
C#m7 = X 4 6 4 5 4
Cº = X 3 4 2 4 2
D/E = X X 2 2 3 2
D7M = X X 0 2 2 2
D7M/9 = X 5 4 6 5 X
D7M/A = 5 5 4 2 2 2
E7/9 = X X 2 1 3 2
Em7 = 0 2 2 0 3 0
F#7 = 2 4 2 3 2 2
F#7/4 = 2 4 2 4 2 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ExNamoradaPage() {
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
