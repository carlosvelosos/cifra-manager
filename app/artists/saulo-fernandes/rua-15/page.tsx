import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/saulo-fernandes/rua-15/

const cifra = `Saulo Fernandes - Rua 15

Intro: <b>A</b> <b>Bm</b>

<b>A</b>
Ô zuzum bá zumbaiôba
        <b>Bm</b>
Oba oba oba... (Ô erereiom)
<b>A</b>
Domingo rua 15
             <b>Bm</b>
Festa da quizumba

lá na casa de mãe
<b>A</b>
Ô zumalaikara  ô zumalaikara

               <b>Bm</b>
Cheiro de feijão e de pipoca
no ar.
<b>C#m</b>
Ninguém sem bater o pé no chão
   <b>Bm</b>
Ao som da música.
<b>C#m</b>
Ninguém é insensível 
              <b>Bm</b>
A pulsação da tua casa.

----------------- Acordes -----------------
A = X 0 2 2 2 0
Bm = X 2 4 4 3 2
C#m = X 4 6 6 5 4`;

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
