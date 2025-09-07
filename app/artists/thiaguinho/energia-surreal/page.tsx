import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Thiaguinho - Energia Surreal

[Intro] D7M  G7M  D7M  F#m7(5-)  Bm7  G7M  G/A

D7M    G7M             D7M
Olha a chuva caindo lá fora
     C#m7(5-)  F#7       Bm
E a casa inteira só pra gente
F#m7               G7M
Será que pode melhorar?
  A7
Que tal um chocolate quente?

 D7M     G7M               D7M
Olha, tá tarde pro'cê ir embora
C#m7(5-)    F#7       Bm7
Não é melhor você ficar?
F#m7                  G7M
Te empresto uma roupa minha
A7                      D7M
Se bem que nem vai precisar

D7M               D7               G7M
   Olha nos meus olhos lê a minha mente
      G7M D/F C7M              A7           D7M
Vai que, de repente, a gente tá pensando igual
          D7             G7M
No sofá da sala energia surreal
G7M D/F#     C7M         A7     D7M
Aqui dentro amor lá fora temporal

----------------- Acordes -----------------
A7 = X 0 2 0 2 0
Bm = X 2 4 4 3 2
Bm7 = X 2 4 2 3 2
C#m7(5-) = X 4 5 4 5 X
C7M = X 3 2 0 0 X
D/F = X X 3 2 3 2
D/F# = 2 X 0 2 3 2
D7 = X X 0 2 1 2
D7M = X X 0 2 2 2
F#7 = 2 4 2 3 2 2
F#m7 = 2 X 2 2 2 X
F#m7(5-) = 2 X 2 2 1 X
G/A = 5 X 5 4 3 X
G7M = 3 X 4 4 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EnergiaSurrealPage() {
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
