import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Saulo Fernandes - Rua 15

Intro: A Bm

A
Ô zuzum bá zumbaiôba
        Bm
Oba oba oba... (Ô erereiom)
A
Domingo rua 15
             Bm
Festa da quizumba

lá na casa de mãe
A
Ô zumalaikara  ô zumalaikara

               Bm
Cheiro de feijão e de pipoca
no ar.
C#m
Ninguém sem bater o pé no chão
   Bm
Ao som da música.
C#m
Ninguém é insensível 
              Bm
A pulsação da tua casa.

----------------- Acordes -----------------
A = X 0 2 2 2 0
Bm = X 2 4 4 3 2
C#m = X 4 6 6 5 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function Rua15Page() {
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
