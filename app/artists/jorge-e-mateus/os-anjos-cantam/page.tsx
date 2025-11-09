import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/jorge-mateus/os-anjos-cantam/

const cifra = `Jorge & Mateus - Os Anjos Cantam

[Primeira Parte]

 <b>C#m</b>
No primeiro instante 
       <b>E</b>
Vi que era amor
 <b>B</b>
No momento em que 
         <b>F#</b>
A gente se encontrou

 <b>C#m</b>
No segundo instante
       <b>E</b>
Vi que era você
    <b>B</b>
Eu já te amo tanto 
        <b>F#</b>
Sem te conhecer

[Segunda Parte]

<b>C#m</b>
    É que nos meus sonhos você era linda
<b>E</b>
  Pessoalmente é mais linda ainda
<b>B</b>
  Nosso amor veio de outras vidas
    <b>F#</b>
Eu vou te amar 

Nas outras vidas que virão

<b>C#m</b>
    É que você nasceu pra ser minha
<b>E</b>
  Vamos dividir uma casinha
<b>B</b>
  Uma cama, dormir de conchinha
 <b>F#</b>
Deus abençoou a nossa união

[Refrão]

                          <b>C#m</b>
E os anjos cantam nosso amor
       <b>E</b>        <b>B</b>     <b>F#</b>
Oh uoh   oh uoh   oh uoh
                          <b>C#m</b>
E os anjos cantam nosso amor
       <b>E</b>        <b>B</b>     <b>F#</b>
Oh uoh   oh uoh   oh uoh

( <b>C#m</b>  <b>E</b>  <b>B</b>  <b>F#</b> )

[Primeira Parte]

 <b>C#m</b>
No primeiro instante 
       <b>E</b>
Vi que era amor
 <b>B</b>
No momento em que 
         <b>F#</b>
A gente se encontrou
 <b>C#m</b>
No segundo instante
       <b>E</b>
Vi que era você
    <b>B</b>
Eu já te amo tanto 
        <b>F#</b>
Sem te conhecer

[Segunda Parte]

<b>C#m</b>
    É que nos meus sonhos você era linda
<b>E</b>
  Pessoalmente é mais linda ainda
<b>B</b>
  Nosso amor veio de outras vidas
    <b>F#</b>
Eu vou te amar 

Nas outras vidas que virão

<b>C#m</b>
    É que você nasceu pra ser minha
<b>E</b>
  Vamos dividir uma casinha
<b>B</b>
  Uma cama, dormir de conchinha
 <b>F#</b>
Deus abençoou a nossa união

[Refrão]

                          <b>C#m</b>
E os anjos cantam nosso amor
       <b>E</b>        <b>B</b>     <b>F#</b>
Oh uoh   oh uoh   oh uoh
                          <b>C#m</b>
E os anjos cantam nosso amor
       <b>E</b>        <b>B</b>     <b>F#</b>
Oh uoh   oh uoh   oh uoh

                          <b>C#m</b>
E os anjos cantam nosso amor
       <b>E</b>        <b>B</b>     <b>F#</b>
Oh uoh   oh uoh   oh uoh
                          <b>C#m</b>
E os anjos cantam nosso amor
       <b>E</b>        <b>B</b>     <b>F#</b>
Oh uoh   oh uoh   oh uoh

                          <b>G#m</b>
E os anjos cantam nosso amor

----------------- Acordes -----------------
B = P4 4 4 4
C#m = 2 1 2 2
E = 2 1 0 2
F# = 4 3 2 4
G#m = 6 4 4 6`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OsAnjosCantamPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jorge-mateus/os-anjos-cantam/"
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
