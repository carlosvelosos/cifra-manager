import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/zeca-pagodinho/verdade/
const cifra = `

<b>F</b>               <b>Gm</b>      <b>Am</b>  <b>Gm</b>
Descobri que te amo demais
<b>F</b>               <b>Gm</b>      <b>Am</b>  <b>F7</b>
Descobri em você minha paz
<b>Bb</b>             <b>C</b>       <b>F</b>     <b>Dm</b>
Descobri sem querer a vida
   <b>C7</b>
Verdade

<b>F</b>               <b>Bb</b>          <b>F</b>   <b>Bb</b>
Pra ganhar seu amor fiz mandinga
<b>F</b>                 <b>Bb</b>        <b>F</b>
Fui a ginga de um bom capoeira
<b>C</b>                <b>Bb</b>     <b>F</b>
Dei rasteira na sua emoção
 <b>Dm</b>           <b>G7</b>         <b>C7</b>
Com o seu coração fiz zoeira

<b>F</b>                  <b>Bb</b>      <b>F</b>   <b>Bb</b>
Fui a beira de um rio por você
     <b>F</b>       <b>Bb</b>           <b>F</b>   <b>F7</b>
Uma ceia com pão vinho e flor
<b>Bb</b>           <b>C7</b>              <b>F</b>
Uma luz para guiar sua estrada
<b>Bb</b>             <b>C7</b>      <b>F</b>
A entrega perfeita do amor
     <b>C7</b>
Verdade

<b>F</b>               <b>Gm</b>      <b>Am</b> <b>Gm</b>
Descobri que te amo demais
<b>F</b>               <b>Gm</b>      <b>Am</b> <b>F7</b>
Descobri em você minha paz
<b>Bb</b>             <b>C</b>       <b>F</b>     <b>Dm</b>
Descobri sem querer a vida
   <b>C7</b>
Verdade

<b>F</b>               <b>Gm</b>      <b>Am</b>   <b>Gm</b>
Como negar essa linda emoção
<b>F</b>               <b>Gm</b>           <b>Am</b> <b>F7</b>
Que tanto bem fez pro meu coração
<b>Bb</b>             <b>C</b>       <b>F</b>    <b>Gm</b> <b>C7</b>
E a minha paixão adormecida

<b>F</b>               <b>Bb</b>      <b>F</b>   <b>Bb</b>
Teu amor meu amor incendeia
<b>F</b>               <b>Bb</b>      <b>F</b>
Nossa cama parece uma teia
<b>C</b>           <b>C/Bb</b>            <b>F</b>   <b>Dm</b>
Teu olhar uma luz que clareia
<b>G7</b>                        <b>C7</b>
Meu caminho tal qual lua cheia

<b>F</b>               <b>Bb</b>         <b>F</b>   <b>Bb</b>
Eu nem posso pensar te perder
<b>F</b>               <b>Bb</b>      <b>F</b>
Ai de mim esse amor terminar
<b>C</b>              <b>C/Bb</b>     <b>F</b>   <b>Dm</b>
Sem você minha felicidade
<b>G7</b>           <b>C7</b>       <b>F</b>
Morreria de tanto penar
     <b>C7</b>
Verdade

<b>F</b>               <b>Gm</b>      <b>Am</b> <b>Gm</b>
Descobri que te amo demais
<b>F</b>               <b>Gm</b>      <b>Am</b> <b>F7</b>
Descobri em você minha paz
<b>Bb</b>             <b>C</b>       <b>F</b>     <b>Dm</b>
Descobri sem querer a vida
   <b>C7</b>
Verdade

----------------- Acordes -----------------
Am7 = 7 P5 5 5
Bb = P3 3 3 3
C = 2 0 1 2
C7 = 2 3 1 2
Dm = 3 2 3 3
Dm7 = 0 2 1 3
F = 3 2 1 3
G7 = P3 4 3 5
G7(9) = 5 2 0 3
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
