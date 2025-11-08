import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/pixote/beijo-doce/

const cifra = `Grupo Pixote - Beijo Doce

[Intro] <b>F/G</b>  <b>G7/13</b>  <b>C7M</b>  <b>Bm7</b>  <b>Em</b>
        <b>Ebm</b>  <b>Dm</b>  <b>G7(13-)</b>  <b>C7M</b>  <b>D7(9)</b>

<b>G7M</b>        <b>G7(13-)</b>   <b>C7M</b>      <b>D7(9)</b>
   Namorar aonde o sol se esconde
<b>G7M</b>         <b>Dm</b> <b>G7(13-)</b> <b>C7M</b>    <b>D7(9)</b>
   E te dar um novo beijo doce
<b>Dm</b>             <b>G7(13-)</b>   <b>C7M</b>    <b>B7</b>
   Com sabor de mel fruta de conde
        <b>Em</b>     <b>A7</b>       <b>Am7</b>   <b>D7(9)</b>
Não ha nada melhor nessa vida
<b>G7M</b>               <b>G7(13-)</b>   <b>C7M</b>   <b>D7(9)</b>
   Entre o céu e o mar um horizonte
<b>G7M</b>         <b>Dm</b> <b>G7(13-)</b>  <b>C7M</b>   <b>D7(9)</b> 
  Pra você e eu nosso romance
<b>Dm</b>              <b>G7(13-)</b> <b>C7M</b>   <b>B7</b>
   Vejo o outro lado dessa ponte
    <b>Em</b>        <b>A7</b>       <b>Am7</b>  <b>D7(9)</b>
Teu olhar me seduz mais ainda
<b>Gm7</b>           <b>Eb7M</b>  <b>Am7(5-)</b>  <b>D7</b>
   Ando louco pra ficar contigo
<b>Gm7</b>           <b>Eb7M</b>  <b>Dm</b>  <b>Cm</b>   
   Eu prometo te ama.....r
          <b>F7</b>   <b>Bb7M</b>  <b>D7</b>
Te dar meu parais..o
              <b>G7M</b>
Poder te dizer
               <b>G7(13-)</b> 
Que tudo que eu mais sonhava nessa
  <b>C7M</b>         <b>D7(9)</b>
 Vida aconteceu
        <b>G7M</b>
Foi te conhecer
             <b>Dm</b>    <b>G7(13-)</b>        <b>C7M</b>
Agora que estamos juntos nem pensar
         <b>F7(4)</b>  
Em se perder
    <b>F7</b>    <b>Bb7M</b>        <b>Gm7</b>
Só quero saber se estar ao meu lado
<b>Am7(5-)</b>         <b>D7</b>
Irá te fazer feliz
            <b>Bm7</b>
Eu só sei dizer
           <b>E7</b>
Que estou apaixonado
     <b>Am7</b>                <b>D7(9)</b>
E é tudo que eu sempre quis

----------------- Acordes -----------------
A7 = 2 0 2 2
Am7 = 7 P5 5 5
Am7(5-) = P1 2 1 1
B7 = 1 2 0 1
Bb7M = 3 2 3 3
Bm7 = 4 2 3 4
C7M = 2 0 0 2
Cm = 1 0 1 1
D7 = 4 2 1 4
D7(9) = 4 5 5 7
Dm = 3 2 3 3
E7 = 2 1 0 0
Eb7M = 1 3 3 5
Ebm = 4 3 4 4
Em = 5 4 5 5
F7 = 3 2 P1 1
F7(4) = 8 8 6 7
G7(13-) = 3 0 0 1
G7/13 = 3 7 5 5
G7M = 5 4 3 4
Gm7 = 5 P3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function BeijoDocePage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/pixote/beijo-doce/"
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
