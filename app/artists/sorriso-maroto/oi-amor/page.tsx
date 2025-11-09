import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/sorriso-maroto/oi-amor/

const cifra = `Sorriso Maroto - Oi Amor

Intro: 
<b>G7/4</b> <b>A7/4</b> <b>G#7/4</b> <b>G7/4</b>
<b>G7/4</b> <b>A7/4</b> <b>G#7/4</b> <b>G7/4</b> <b>A7/4</b>
<b>A7/4</b> <b>G#7/4</b> <b>G7/4</b>
<b>G7/4</b> <b>G#7/4</b> <b>A7/4</b>


<b>A7/4</b>
Oi amor, sou eu
<b>G7/4</b>                                    <b>A7/4</b>                      <b>G#7/4</b> ^ <b>G7/4</b>
... Tô ligando a essa hora porque a lua    Que apareceu,
<b>G7/4</b>                                                   <b>A7/4</b>
... Trouxe um brilho de felicidade     E se escondeu
<b>G7/4</b>                                   <b>A7/4</b>                           <b>A7/4</b> <b>G#7/4</b> <b>G7/4</b>
...Me dizendo que eu pertenço a você        Pode acreditar
<b>G7/4</b>                                                                                 <b>A7/4</b>           <b>G#7/4</b> ^ <b>G7/4</b>
...Dessa vez, vou me entregar de corpo inteiro    Me apaixonar
<b>G7/4</b>                                                   <b>A7/4</b>
...E viver um sentimento verdadeiro        Eu quero amar
<b>G7/4</b>                                  <b>A7/4</b>     <b>C/Bb</b>
...E ficar eternamente ao lado seu...
               <b>Fm7/9</b>   <b>Bb7/13</b>     <b>Eb7+</b>   <b>Cm7</b>
Até de madruga...da,    pen.....so
<b>Dm5-/7</b>    <b>G7/4</b>    <b>A7/4</b>   <b>C/Bb</b>
em...      vo....cê     
                  <b>Fm7/9</b>   <b>Bb7/13</b>
E sem hora marca....da
<b>Eb7+</b>  <b>Cm7</b>   <b>Dm5-/7</b>  <b>G7/4</b>  <b>A7/4</b>   <b>C/Bb</b>
Li...go,...   pra    di.....zer.    2x.

Final, mesmo da introdução!

----------------- Acordes -----------------
A7/4 = X 0 2 0 3 0
Bb7/13 = 6 X 6 7 8 X
C/Bb = X 1 2 0 1 X
Cm7 = X 3 5 3 4 3
Dm5-/7 = X X 0 1 1 1
Eb7+ = X X 1 3 3 3
Fm7/9 = X X 3 1 4 3
G#7/4 = 4 6 4 6 4 X
G7/4 = 3 5 3 5 3 X`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OiAmorPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/sorriso-maroto/oi-amor/"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
        // Fallback to old format if needed
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
