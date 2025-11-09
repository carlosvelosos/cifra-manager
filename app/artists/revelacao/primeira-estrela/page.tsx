import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/revelacao/primeria-estrela/

const cifra = `

[Intro] <b>A</b>  <b>B</b>  <b>Dm</b>  <b>A</b>
        <b>F</b>  <b>G</b>  <b>A</b>

<b>A</b>                    <b>B7</b>
  Um dia sai, pus o pé nessa estrada 
<b>F#m</b>                     <b>C#m</b>
   Teu coração foi meu guia 
<b>Em</b>                         <b>Bm</b>
   Enquanto ensinava, aprendia 
<b>D</b>                      <b>A</b>   <b>F</b>   <b>G</b>    <b>A</b>
  Todas as formas de ama...a...a....ar 
                    <b>B7</b>
Vivi de aventura perdi tanto tempo 
<b>F#m</b>                       <b>C#m</b>
   Todas pensei que eu podia 
<b>Em</b>                    <b>Bm</b>
   Se era paixão não sabia 
<b>D</b>                      <b>A</b>  <b>D7</b>
  Quando cansei fui morar 
<b>C#7</b>                         <b>D</b>
   Na primeira estrela do céu 
<b>F</b>          <b>G</b>                      <b>A</b>   <b>D7</b>
  Só então....foi que eu fui enxergar 
<b>C#7</b>                           <b>D</b>
   Que a primeira estrale do céu 
<b>F</b>           <b>G</b>                <b>A</b>
  Estava em casa, eu podia tocar 
                <b>B7</b>          <b>D</b>                   <b>A</b>
Ah!...se te magoei amor....ah!....perdoa meu amor 
                <b>B7</b>          <b>D</b>                   <b>A</b>  <b>F</b>  <b>G</b>
Ah!...se te magoei amor....ah!....perdoa meu amor

----------------- Acordes -----------------
A = P2 2 2 2
B = P4 4 4 4
B7 = 1 2 0 1
Bm = 4 4 3 4
C#7 = 3 4 2 3
C#m = 2 1 2 2
D = 4 2 3 4
D7 = 4 2 1 4
Dm = 3 2 3 3
Em = 5 4 5 5
F = 3 2 1 3
F#m = 4 2 2 4
G = 5 4 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PrimeiraEstrelaPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(mainCifra || "", title || "", "");

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
