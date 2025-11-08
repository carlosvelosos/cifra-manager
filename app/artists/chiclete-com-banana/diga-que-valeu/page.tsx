import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/chiclete-com-banana/diga-que-valeu/

const cifra = `Chiclete Com Banana - Diga Que Valeu

[Intro] <b>D</b>  <b>A</b>  <b>Bm</b>  <b>A</b>  <b>A5+</b>

[Primeira Parte]

    <b>D</b>
Um beijo em você eu quero dar
                          <b>A</b>
Saudade presa no meu coração
         <b>G</b>
Eu ando louco alucinado
       <b>Bm</b>
Muito doido e apaixonado 
       <b>Em</b>  <b>A</b>  <b>G#</b>
Por você

[Pré-Refrão]

   <b>G</b>
É pena que esse amor
     <b>Bm</b>
Não possa mais ficar
   <b>Em</b>
É pena que esse amor
<b>G</b>                         <b>A</b>
  Não vai poder se eternizar

[Refrão]

       <b>D</b>
Então diga que valeu
                <b>A</b>
O nosso amor valeu demais
     <b>G</b>                 <b>A</b>
Foi lindo, ficou pra trás

       <b>D</b>
Então diga que valeu
                <b>A</b>
O nosso amor valeu demais
     <b>G</b>                <b>A</b>
Que pena, ficou pra trás

[Segunda Parte]

<b>D</b>                               <b>A</b>
  Faz tanto tempo que eu te conheço

Mas você mudou 
<b>D</b>                               <b>A</b>
  Faz tanto tempo que eu te conheço

Mas você mudou 
<b>D</b>                 <b>A</b>                <b>G</b>  <b>A</b>
  Minha flor bonita, minha linda flor
<b>D</b>                 <b>A</b>                <b>G</b>  <b>A</b>
  Minha flor bonita, minha linda flor

[Primeira Parte]

    <b>D</b>
Um beijo em você eu quero dar
                          <b>A</b>
Saudade presa no meu coração
         <b>G</b>
Eu ando louco alucinado
       <b>Bm</b>
Muito doido e apaixonado 
       <b>Em</b>  <b>A</b>  <b>G#</b>
Por você

[Pré-Refrão]

   <b>G</b>
É pena que esse amor
     <b>Bm</b>
Não possa mais ficar
   <b>Em</b>
É pena que esse amor
<b>G</b>                         <b>A</b>
  Não vai poder se eternizar

[Refrão]

       <b>D</b>
Então diga que valeu
                <b>A</b>
O nosso amor valeu demais
     <b>G</b>                 <b>A</b>
Foi lindo, ficou pra trás

       <b>D</b>
Então diga que valeu
                <b>A</b>
O nosso amor valeu demais
     <b>G</b>                <b>A</b>
Que pena, ficou pra trás

[Final] <b>D</b>  <b>A</b>  <b>Bm</b>  <b>A</b>  <b>A5+</b>  <b>D</b>

----------------- Acordes -----------------
A = X 0 2 2 2 0
A5+ = X 0 3 2 2 0
Bm = X 2 4 4 3 2
D = X X 0 2 3 2
Em = 0 2 2 0 0 0
G = 3 2 0 0 0 3
G# = 4 3 1 1 1 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DigaQueValeuPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/chiclete-com-banana/diga-que-valeu/"
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
