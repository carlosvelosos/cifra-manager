import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/jorge-mateus/o-seu-astral/

const cifra = `Jorge & Mateus - Seu Astral

[Intro] <b>G</b>  <b>A2</b>  <b>Bm</b>  <b>A2</b>
        <b>G</b>  <b>A2</b>  <b>Bm</b>  <b>A2</b>

[Primeira Parte] 

 <b>G</b>               <b>D</b>
Fico sozinho pensando em você
 <b>G</b>                <b>Bm</b>           
Vejo imagens, retratos de nós
<b>G</b>                          <b>D</b>
Olho pro espelho, sinto o meu coração
<b>G</b>                <b>Bm</b>            
Ouço baixinho o som da sua voz

   <b>G</b>
Dizendo pra mim que é sobrenatural
       <b>Bm</b>               
Esse amor fora do normal
   <b>G</b>
Dizendo pra mim que sou o seu astral
           <b>A2</b>
Que esse amor que está em mim é tão real

[Refrão] 

<b>G</b>                        
  Eu viajei no seu olhar 
          <b>A2</b>  <b>Bm</b>
No teu sor_riso
             <b>A2</b>
Nos teus segredos
<b>G</b>
  Eu descobri o que é amar
 <b>G</b>  <b>A2</b>  <b>Bm</b>             <b>A2</b>
Pe lo  toque dos seus beijos

<b>G</b>                        
  Eu viajei no seu olhar 
          <b>A2</b>  <b>Bm</b>
No teu sor_riso
             <b>A2</b>
Nos teus segredos
<b>G</b>
  Eu descobri o que é amar
 <b>G</b>  <b>A2</b>  <b>Bm</b>             <b>A2</b>
Pe lo  toque dos seus beijos

( <b>G</b>  <b>A2</b>  <b>Bm</b>  <b>A2</b> )
( <b>G</b>  <b>A2</b>  <b>Bm</b>  <b>A2</b> )

[Primeira Parte]

 <b>G</b>               <b>D</b>
Fico sozinho pensando em você
 <b>G</b>                <b>A2</b>       <b>Bm</b>           
Vejo imagens, retratos de nós
<b>G</b>                          <b>D</b>
Olho pro espelho, sinto o meu coração
<b>G</b>                <b>Bm</b>            
Ouço baixinho o som da sua voz

   <b>G</b>
Dizendo pra mim que é sobrenatural
       <b>Bm</b>               
Esse amor fora do normal
   <b>G</b>
Dizendo pra mim que sou o seu astral
           <b>A2</b>
Que esse amor que está em mim é tão real

[Refrão] 

<b>G</b>                        
  Eu viajei no seu olhar 
          <b>A2</b>  <b>Bm</b>
No teu sor_riso
             <b>A2</b>
Nos teus segredos
<b>G</b>
  Eu descobri o que é amar
 <b>G</b>  <b>A2</b>  <b>Bm</b>             <b>A2</b>
Pe lo  toque dos seus beijos

<b>G</b>                        
  Eu viajei no seu olhar 
          <b>A2</b>  <b>Bm</b>
No teu sor_riso
             <b>A2</b>
Nos teus segredos
<b>G</b>
  Eu descobri o que é amar
 <b>G</b>  <b>A2</b>  <b>Bm</b>             <b>A2</b>
Pe lo  toque dos seus beijos

[Final] <b>G</b>  <b>A2</b>  <b>Bm</b>

----------------- Acordes -----------------
A2 = X 0 2 2 0 0
Bm = X 2 4 4 3 2
D = X X 0 2 3 2
G = 3 2 0 0 0 3`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SeuAstralPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jorge-mateus/o-seu-astral/"
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
