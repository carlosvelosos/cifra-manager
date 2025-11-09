import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/jorge-mateus/xonei/

const cifra = `Jorge & Mateus - Xonei

[Intro]

                     <b>F#m</b>
Ai, ai, ai, meu coração
<b>D</b>                        
  Não, não, não, de novo não

[Primeira Parte]

                      <b>A</b>
Eu tô com frio na barriga

E a mão que tá suando
                    <b>E</b>
Eu tô secando na camisa

Tá me desconcertando
      <b>Bm</b>
Cada vez que ela me olha, cada
   <b>D</b>
Jogada de cabelo mata três
<b>A</b>
  Eu, meu coração
           <b>E</b>                           <b>A</b>
E o plano de não me envolver mais uma vez

[Refrão]

                            <b>E</b>
Eu tô com medo de me apaixonei

Xonei, xonei
                            <b>F#m</b>
Eu tô com medo de me entreguei

Me entreguei, me entreguei
                           <b>D</b>
Tava com medo de deixar rolar
            <b>E</b>
Deixei, deixei
                      <b>A</b>
Foi só pegar, me apeguei

                            <b>E</b>
Eu tô com medo de me apaixonei

Xonei, xonei
                            <b>F#m</b>
Eu tô com medo de me entreguei

Me entreguei, me entreguei
                           <b>D</b>
Tava com medo de deixar rolar
            <b>E</b>
Deixei, deixei
                      <b>A</b>
Foi só pegar, me apeguei

( <b>E</b>  <b>D</b> )

[Primeira Parte]

                      <b>A</b>
Eu tô com frio na barriga

E a mão que tá suando
                    <b>E</b>
Eu tô secando na camisa

Tá me desconcertando
      <b>Bm</b>
Cada vez que ela me olha, cada
   <b>D</b>
Jogada de cabelo mata três
<b>A</b>
  Eu, meu coração
           <b>E</b>                           <b>A</b>
E o plano de não me envolver mais uma vez

[Refrão]

                            <b>E</b>
Eu tô com medo de me apaixonei

Xonei, xonei
                            <b>F#m</b>
Eu tô com medo de me entreguei

Me entreguei, me entreguei
                           <b>D</b>
Tava com medo de deixar rolar
            <b>E</b>
Deixei, deixei
                      <b>A</b>
Foi só pegar, me apeguei

                            <b>E</b>
Eu tô com medo de me apaixonei

Xonei, xonei
                            <b>F#m</b>
Eu tô com medo de me entreguei

Me entreguei, me entreguei
                           <b>D</b>
Tava com medo de deixar rolar
            <b>E</b>
Deixei, deixei
                      <b>A</b>
Foi só pegar, me apeguei
                            <b>E</b>
Eu tô com medo de me apaixonei
            
E aí, xonou?
                  <b>A</b>
Como é que não xona!

----------------- Acordes -----------------
A = X 0 2 2 2 0
Bm = X 2 4 4 3 2
D = X X 0 2 3 2
E = 0 2 2 1 0 0
F#m = 2 4 4 2 2 2`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function XoneiPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jorge-mateus/xonei/"
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
