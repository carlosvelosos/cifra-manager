import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/harmonia-do-samba/o-rodo/

const cifra = `Harmonia Do Samba - O Rodo

(intro) <b>G</b> <b>G#m7/5-</b> <b>C#7/9</b> <b>F#</b> <b>F#m</b> <b>B7</b> <b>E</b>  <b>Em7/9</b> <b>A7</b> <b>D</b> <b>Am</b> <b>D7</b>

         <b>G</b>
Sou da muvucaca
<b>Am</b>          <b>D7</b>
Eu sou da Bahia
        <b>G</b>
sou do rodo papa
    <b>Am</b>             <b>D7</b>
Swingueira do Harmonia
     <b>G</b>
Da muvucaca
<b>Am</b>          <b>D7</b>
Eu sou da galera
        <b>G</b>
Sou do rodo papa
           <b>Am</b>           <b>D7</b> <b>G</b>   <b>D7</b>
Ninguém se dá ninguém tolera
        <b>G</b>               <b>F</b>                     <b>G</b>
O meu swing te atrai ninguém se dá ninguém tolera
    <b>C</b>             <b>G</b>       <b>Am</b>          <b>Eb</b>    <b>D7</b>
A energia tão sincera me deixa todo arrepiado
        <b>G</b>             <b>F</b>                 <b>G</b>         <b>C</b>     <b>D</b>     <b>Em</b>
Começou em Salvador o Harmonia assim surgiu  arrastando multidões
  <b>Am</b>               <b>F</b>  <b>D7</b>
O rodo ganhou o Brasil

<b>G</b>       <b>Am</b>   <b>D7</b>     <b>G</b>
 papa papa  pode parar
         <b>Am</b>   <b>D7</b>     <b>G</b>
porque o rodo vai passar
<b>G</b>              <b>D7</b>            <b>G</b>
Mas quando eu mandar é pra jogar
      <b>D7</b>         <b>G</b>
a mãozinha e chacoalhar
             <b>Am</b>     <b>D7</b>     <b>G</b>
eu vou eu vou eu vou eu vou
             <b>Am</b>        <b>D7</b>          <b>G</b>
eu vou eu vou eu vou atrás de meu amor

(versão 2)

(intro) <b>G</b> <b>Am</b> <b>D7</b> <b>Gb</b> <b>Ebm</b> <b>Abm</b> <b>Db7</b> <b>E</b>

        <b>A</b>
Sou da muvuca caca
      <b>D</b>
Eu sou da Bahia
        <b>A</b>
sou do rodo papa
       <b>D</b>
Swingueira do Harmonia
        <b>A</b>
Sou da muvuca caca
     <b>D</b>       ( <b>G</b> <b>Em</b> <b>Am</b> <b>D7</b> )
E ninguém tolera
             <b>G</b>          <b>F</b>                    <b>G</b>         <b>D</b>
O meu swing te atrai ninguém se da niguém tolera  arrazando essa
   <b>G</b>       <b>D</b>     <b>B7</b>   <b>Em</b> <b>D7/9</b>
galera me deixa todo arrepiado
 <b>G</b>                   <b>F</b>                  <b>G</b>          <b>D</b>      <b>B7</b>  <b>Em</b>
Surgiu em Salvadaor o Harmonia assim surgiu  arrastando multidões com o
<b>F</b>        <b>D</b>
rodo pelo Brasil

(refrão)
(  <b>G</b>  <b>Em</b>  <b>Am</b>  <b>D7</b> )
papa papa é pra parar porque o rodo vai passar  quando eu mandar é pra
jogar as mãozinhas para o ar  eu vou eu vou eu vou eu vou eu vou eu
vouatras de meu amor`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ORodoPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/harmonia-do-samba/o-rodo/"
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
