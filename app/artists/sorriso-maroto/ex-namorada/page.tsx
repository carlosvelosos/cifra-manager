import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/sorriso-maroto/ex-namorada/

const cifra = `Sorriso Maroto - Ex-Namorada

Intro: <b>D7M</b>  <b>A7/4</b>  <b>D7M/A</b>  <b>Bb7M</b>  <b>A7/4</b>

<b>D7M</b>              <b>D7M/9</b>          <b>C#m7</b>          <b>Cº</b>
Eu te falei que era melhor telefonar antes de vir
<b>Bm7</b>                         <b>D/E</b>       <b>A7M</b>    <b>A7/4</b>
Me procurar pra não sofrer,     pra não chorar
<b>D7M</b>              <b>D7M/9</b>          <b>C#m7</b>          <b>Cº</b>           <b>Bm7</b>
Ainda bem que o meu amor já percebeu que o culpado não fui eu
            <b>D/E</b>                   <b>C#m7</b>            <b>F#7/4</b> <b>F#7</b>
Ex namorada é mesmo assim, você já quer voltar pra mim

<b>Bm7</b>
Ai, ai, ai, ai  mas como eu sou honesto
                <b>D/E</b>
Te confesso que no fundo eu bambeei
<b>C#m7</b>
Ai, ai, ai, ai,  botei a mão no fogo
                         <b>F#7/4</b>          <b>F#7</b>
Mas com medo de queimar eu recuei
    <b>Bm7</b>    <b>C#m7</b>      <b>D7M</b>    <b>D/E</b>   <b>A7M</b>    <b>F#7</b> ( <b>A7/4</b> )
Ai, ai, ai  eu vou deixar você na vontade

        <b>DM7</b>                               <b>D/E</b>
Não adianta voltar com esse papo de amar
                  <b>C#m7</b>               <b>Em7</b>    <b>A7</b>
Cheia de amor pra dar         Não dá, não dá
       <b>DM7</b>                               <b>D/E</b>
Não adianta voltar com esse papo de amar
                  <b>F#7/4</b>               <b>A7/4</b>  <b>A7</b>
Cheia de amor pra dar         Não dá, não dá
       <b>DM7</b>               <b>E7/9</b>  <b>A7/4</b>
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
F#7/4 = 2 4 2 4 2 X`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ExNamoradaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/sorriso-maroto/ex-namorada/"
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
