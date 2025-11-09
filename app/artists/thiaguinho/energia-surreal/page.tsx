import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/thiaguinho/energia-surreal/

const cifra = `Thiaguinho - Energia Surreal

[Intro] <b>D7M</b>  <b>G7M</b>  <b>D7M</b>  <b>F#m7(5-)</b>  <b>Bm7</b>  <b>G7M</b>  <b>G/A</b>

<b>D7M</b>    <b>G7M</b>             <b>D7M</b>
Olha a chuva caindo lá fora
     <b>C#m7(5-)</b>  <b>F#7</b>       <b>Bm</b>
E a casa inteira só pra gente
<b>F#m7</b>               <b>G7M</b>
Será que pode melhorar?
  <b>A7</b>
Que tal um chocolate quente?

 <b>D7M</b>     <b>G7M</b>               <b>D7M</b>
Olha, tá tarde pro'cê ir embora
<b>C#m7(5-)</b>    <b>F#7</b>       <b>Bm7</b>
Não é melhor você ficar?
<b>F#m7</b>                  <b>G7M</b>
Te empresto uma roupa minha
<b>A7</b>                      <b>D7M</b>
Se bem que nem vai precisar

<b>D7M</b>               <b>D7</b>               <b>G7M</b>
   Olha nos meus olhos lê a minha mente
      <b>G7M</b> <b>D/F</b> <b>C7M</b>              <b>A7</b>           <b>D7M</b>
Vai que, de repente, a gente tá pensando igual
          <b>D7</b>             <b>G7M</b>
No sofá da sala energia surreal
<b>G7M</b> <b>D/F#</b>     <b>C7M</b>         <b>A7</b>     <b>D7M</b>
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
G7M = 3 X 4 4 3 X`;

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
