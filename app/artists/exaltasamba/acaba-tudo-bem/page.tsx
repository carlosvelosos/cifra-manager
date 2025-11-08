import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/exaltasamba-musicas/acaba-tudo-bem/

const cifra = `Exaltasamba - Acaba Tudo Bem

<b>Am7/9</b>  <b>Em7</b>    <b>F7+</b>         <b>E7/9-</b>   
La    laia   laia        laia    laia 
<b>Am</b>     <b>Em7</b>    <b>F7+</b>         <b>E7/9-</b>  
La    laia   laia        laia    laia 
<b>Am7/9</b>                <b>C7/13</b>        <b>F7+</b>       <b>E7/9+</b> 
É esse amor da gente que provoca tanta confusão 
<b>Am7/9</b>           <b>C7/13</b>          <b>Bm7/5-</b>           <b>E7</b> 
As vezes causa medo que sufoco não é brinquedo não 
<b>Am7/9</b>               <b>C7/13</b>             <b>F7+</b>        <b>E7/9+</b>    
Amor de adolescente inconseqüente que age sem pensar 
<b>Am7/9</b>                 <b>C7/13</b>          <b>Bm7/5-</b>     <b>E7</b> 
E assim tão de repente, olha e a gente que paixão 
<b>Am7/9</b>               <b>C7/13</b>                       <b>F7+</b>        <b>E7/9+</b> 
Me amarro nesse amor, e esse amor quando é assim, só alegria 
<b>Am7/9</b>                     <b>C7/13</b>        <b>Bm7/5-</b>    <b>E7/9-</b>  
Adoro teu calor quem dera fosse assim todo diaaa 
Refrão 
<b>Am7/9</b>        <b>Gm7</b>       <b>C7/9</b>                 <b>Bm7/5-</b>         
Eu tô legal, até me acostumei com seu humor 
                 <b>E7/9-</b>                   <b>Am7/9</b> 
Tô baixo astral, estar longe dessa onda de caô 
        <b>Gm7</b>      <b>C7/9</b>                   <b>Bm7/5-</b> 
Tá na moral, a gente vive nesse vai e vem 
              <b>E7/9-</b>
Lá no final, acaba tudo bem 

La laia laia laia....... (volta ao inicio)

----------------- Acordes -----------------
Am = X 0 2 2 1 0
Am7/9 = X X 7 5 8 7
Bm7/5- = X 2 3 2 3 X
C7/13 = X 3 X 3 5 5
C7/9 = X 3 2 3 3 X
E7 = 0 2 2 1 3 0
E7/9+ = X 6 5 6 7 X
E7/9- = X X 2 1 3 1
Em7 = 0 2 2 0 3 0
F7+ = 1 X 2 2 1 X
Gm7 = 3 X 3 3 3 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AcabaTudoBemPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/exaltasamba-musicas/acaba-tudo-bem/"
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
