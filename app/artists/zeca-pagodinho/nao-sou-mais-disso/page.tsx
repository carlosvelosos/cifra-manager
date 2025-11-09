import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/zeca-pagodinho/nao-sou-mais-disso/
const cifra = `

[Intro] <b>Bb</b>  <b>Gm7</b>  <b>C7/9</b>  <b>F7</b>
        <b>Bb</b>  <b>G7</b>  <b>C7/9</b>  <b>F7/9</b>  <b>Bb</b>

                  <b>G7</b>       <b>Cm7</b>
Eu não sei se ela fez feitiço
              <b>F7</b>       <b>Bb6</b>
Macumba ou coisa assim
                    <b>G7</b>         <b>Cm7</b>
Eu só sei que estou bem com ela
             <b>F7</b>       <b>Bb</b>
E a vida é melhor pra mim
                 <b>G7</b>      <b>C7/9</b>
Eu deixei de ser pé-de-cana
                 <b>F7</b>       <b>Bb</b>
Eu deixei de ser vagabundo
               <b>G7</b>        <b>C7/9</b>
Aumentei minha fé em Cristo
                     <b>F7</b>    <b>Bb</b>
Sou bem-quisto por todo mundo

         <b>Cm7</b>
Na hora de trabalhar
<b>F7</b>      <b>Bb</b>
Levanto sem reclamar
<b>Eb7M</b>            <b>Am7/5-</b>
E antes que o galo cantar
<b>D7(b9)</b>   <b>Gm</b>  <b>Gm7</b>
Já vou
        <b>Cm/Eb</b>
À noite volto pro lar
<b>F7</b>          <b>Bb</b>         <b>Eb7M</b>
Pra tomar banho e jantar
       <b>Am7/5-</b>
Só uma no bar
<b>D7(b13)</b>    <b>Gm</b> <b>Gm</b> <b>Gb7</b> <b>F7</b>
Bastou
   <b>Bb</b>                                 <b>C7/9</b>
Provei pra você que eu não sou mais disso
    <b>Cm7</b>              <b>F7</b>         <b>Bb</b>
Não perco mais o meu compromisso
    <b>Bb7M</b>      <b>Bb6</b>           <b>C7/9</b>
Não perco mais uma noite à toa
       <b>F7</b>                       <b>Bb</b>
Não traio e nem troco a minha patroa

----------------- Acordes -----------------
Am7/5- = 7 6 4 5
Bb = P3 3 3 3
Bb6 = P3 3 3 5
Bb7M = 3 2 3 3
C7/9 = 2 3 3 5
Cm/Eb = 1 0 1 1
Cm7 = 5 3 4 5
D7(b13) = 10 11 11 12
D7(b9) = 4 5 4 7
Eb7M = 1 3 3 5
F7 = 3 2 P1 1
F7/9 = 3 2 4 5
G7 = P3 4 3 5
Gb7 = 4 3 P2 2
Gm = 5 3 3 5
Gm7 = 5 P3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    ""
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
