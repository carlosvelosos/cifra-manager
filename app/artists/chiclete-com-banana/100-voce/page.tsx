import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/chiclete-com-banana/100-voce/

const cifra = `Chiclete Com Banana - 100% Você

[Intro] <b>E</b>  <b>A</b>  <b>C#m</b>  <b>D</b>  <b>E</b>
        <b>A</b>  <b>C#m</b>  <b>D</b>  <b>E</b>

[Primeira Parte]

<b>A</b>
  Um céu sem estrelas
<b>C#m</b>
    Uma praia sem mar
<b>D</b>
  Amor sem carinho
<b>Dm</b>
   Romance sem par
<b>A</b>
  Carnaval sem festa
<b>C#m</b>
    Um jardim sem flor
<b>D</b>                     
  É assim que eu me sinto
<b>E</b>
  Longe do seu amor

[Pré-Refrão]

<b>F#m</b>                                      
    Como enganar um coração
                   <b>C#m</b>
Tão ligado nesse amor

Como viver a minha vida
                   <b>D</b>
Sem teu jeito sedutor
                    
Não da mais pra segurar
                 <b>E</b>
Tô viciado em você

[Refrão]

     <b>A</b>                 <b>C#m</b>
Não dá! Não dá! Pra ficar! Pra ficar!
        <b>D</b>         <b>E</b>
Sem te ver, já estou ficando louco
     <b>A</b>                 <b>C#m</b>
Não dá! Não dá! Pra ficar! Pra ficar!
        <b>D</b>        <b>E</b>               <b>A</b>  <b>E</b>
Sem te ver, sou cem por cento você

( <b>A</b>  <b>C#m</b>  <b>D</b>  <b>E</b> )
( <b>A</b>  <b>C#m</b>  <b>D</b>  <b>E</b> )

[Segunda Parte]

<b>A</b>
  Estrada sem rumo
<b>C#m</b>
    Saudade sem dor
<b>D</b>
  Tv sem novela
<b>Dm</b>
   Arco-íris sem cor
<b>A</b>
  Chiclete sem nana
<b>C#m</b>
    Verão sem calor
<b>D</b>                                     
  É assim que eu me sinto
<b>E</b>
  Longe do seu amor

[Pré-Refrão]

<b>F#m</b>                                      
    Como enganar um coração
                   <b>C#m</b>
Tão ligado nesse amor

Como viver a minha vida
                   <b>D</b>
Sem teu jeito sedutor
                    
Não da mais pra segurar
                 <b>E</b>
Tô viciado em você

[Refrão]

     <b>A</b>                 <b>C#m</b>
Não dá! Não dá! Pra ficar! Pra ficar!
        <b>D</b>         <b>E</b>
Sem te ver, já estou ficando louco
     <b>A</b>                 <b>C#m</b>
Não dá! Não dá! Pra ficar! Pra ficar!
        <b>D</b>        <b>E</b>               <b>A</b>  <b>E</b>
Sem te ver, sou cem por cento você

( <b>A</b>  <b>C#m</b>  <b>D</b>  <b>E</b> )
( <b>A</b>  <b>C#m</b>  <b>D</b>  <b>E</b> )

[Primeira Parte]

<b>A</b>
  Um céu sem estrelas
<b>C#m</b>
    Uma praia sem mar
<b>D</b>
  Amor sem carinho
<b>Dm</b>
   Romance sem par
<b>A</b>
  Carnaval sem festa
<b>C#m</b>
    Um jardim sem flor
<b>D</b>                     
  É assim que eu me sinto
<b>E</b>
  Longe do seu amor

[Pré-Refrão]

<b>F#m</b>                                      
    Como enganar um coração
                   <b>C#m</b>
Tão ligado nesse amor

Como viver a minha vida
                   <b>D</b>
Sem teu jeito sedutor
                   
Não da mais pra segurar
                 <b>E</b>
Tô viciado em você

[Refrão]

     <b>A</b>                 <b>C#m</b>
Não dá! Não dá! Pra ficar! Pra ficar!
        <b>D</b>         <b>E</b>
Sem te ver, já estou ficando louco
     <b>A</b>                 <b>C#m</b>
Não dá! Não dá! Pra ficar! Pra ficar!
        <b>D</b>        <b>E</b>               <b>A</b>  <b>E</b>
Sem te ver, sou cem por cento você

[Final] <b>A</b>  <b>C#m</b>  <b>D</b>  <b>E</b> 
        <b>A</b>  <b>C#m</b>  <b>D</b>  <b>E</b> 
        <b>A</b>  <b>C#m</b>  <b>D</b>  <b>E</b> 
        <b>A</b>  <b>C#m</b>  <b>D</b>  <b>E</b>  <b>A</b>

----------------- Acordes -----------------
A = X 0 2 2 2 0
C#m = X 4 6 6 5 4
D = X X 0 2 3 2
Dm = X X 0 2 3 1
E = 0 2 2 1 0 0
F#m = 2 4 4 2 2 2`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function Song00VocePage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/chiclete-com-banana/100-voce/"
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
