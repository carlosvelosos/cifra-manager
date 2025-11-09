import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/skank/saideira/

const cifra = `Skank - Saideira

[Intro] <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b> 
        <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b> 
        <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b> 
        <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b> 
        <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b> 
        <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b> 
        <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b> 
        <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b> 

[Primeira Parte]

          <b>Am7</b>     <b>C</b>    <b>Bm7/5-</b>
Tem um lugar diferente
      <b>E7</b>         <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
Lá depois da saideira
     <b>Am7</b>   <b>C</b>      <b>Bm7/5-</b>
Quem é de beijo, beija
           <b>E7</b>       <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
Quem é de luta, capoeira
          <b>Am7</b>     <b>C</b>    <b>Bm7/5-</b>
Tem um lugar diferente
      <b>E7</b>         <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
Lá depois da saideira
     <b>Am7</b>       <b>C</b>      <b>Bm7/5-</b>
Tem homem que vira macaco
      <b>E7</b>            <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
E mulher que vira freira

[Refrão]

      <b>Am7</b>        <b>C</b>
Comandante! Capitão
       <b>Bm7/5-</b>      <b>E7</b>
Tio! Brother! Camarada
    <b>Am7</b>     <b>C</b>
Chefia! Amigão
       <b>Bm7/5-</b>     <b>E7</b>
Desce mais uma rodada

      <b>Am7</b>        <b>C</b>
Comandante! Capitão
       <b>Bm7/5-</b>      <b>E7</b>
Tio! Brother! Camarada
    <b>Am7</b>     <b>C</b>
Chefia! Amigão
       <b>Bm7/5-</b>     <b>E7</b>
Desce mais uma rodada

       <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
Desce mais   
       <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>   <b>E7</b>
Desce mais,           ê ê

( <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>  )
( <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b> )

[Primeira Parte]

          <b>Am7</b>     <b>C</b>    <b>Bm7/5-</b>
Tem um lugar diferente
      <b>E7</b>         <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
Lá depois da saideira
        <b>Am7</b>    <b>C</b>    <b>Bm7/5-</b>
Tem bandeira que recolhe
        <b>E7</b>           <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
Tem bandeira que hasteia
          <b>Am7</b>     <b>C</b>    <b>Bm7/5-</b>
Tem um lugar diferente
      <b>E7</b>         <b>Am7</b>   <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
Lá depois da saideira
     <b>Am7</b>    <b>C</b>    <b>Bm7/5-</b>
É tomando uma gelada
        <b>E7</b>        <b>Am7</b>   
Que se cura bebedeira  
<b>C</b>       <b>Bm7/5-</b>   <b>E7</b>
  Uu... ê      ê

[Refrão]

      <b>Am7</b>        <b>C</b>
Comandante! Capitão
       <b>Bm7/5-</b>      <b>E7</b>
Tio! Brother! Camarada
    <b>Am7</b>     <b>C</b>
Chefia! Amigão
       <b>Bm7/5-</b>     <b>E7</b>
Desce mais uma rodada

      <b>Am7</b>        <b>C</b>
Comandante! Capitão
       <b>Bm7/5-</b>      <b>E7</b>
Tio! Brother! Camarada
    <b>Am7</b>     <b>C</b>
Chefia! Amigão
       <b>Bm7/5-</b>     <b>E7</b>
Desce mais uma rodada

( <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b> )
( <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b> )
( <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b> )
( <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b> )

[Primeira Parte]

          <b>Am7</b>     <b>C</b>    <b>Bm7/5-</b>
Tem um lugar diferente
      <b>E7</b>         <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
Lá depois da saideira
     <b>Am7</b>   <b>C</b>      <b>Bm7/5-</b>
Quem é de beijo, beija
           <b>E7</b>       <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
Quem é de luta, capoeira
          <b>Am7</b>     <b>C</b>    <b>Bm7/5-</b>
Tem um lugar diferente
      <b>E7</b>         <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
Lá depois da saideira
     <b>Am7</b>       <b>C</b>      <b>Bm7/5-</b>
Tem homem que vira macaco
      <b>E7</b>            <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
E mulher que vira freira

[Refrão]

      <b>Am7</b>        <b>C</b>
Comandante! Capitão
       <b>Bm7/5-</b>      <b>E7</b>
Tio! Brother! Camarada
    <b>Am7</b>     <b>C</b>
Chefia! Amigão
       <b>Bm7/5-</b>     <b>E7</b>
Desce mais uma rodada

      <b>Am7</b>        <b>C</b>
Comandante! Capitão
       <b>Bm7/5-</b>      <b>E7</b>
Tio! Brother! Camarada
    <b>Am7</b>     <b>C</b>
Chefia! Amigão
       <b>Bm7/5-</b>     <b>E7</b>
Desce mais uma rodada

       <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
Desce mais   
       <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>   <b>E7</b>
Desce mais,           ê ê

      <b>Am7</b>        <b>C</b>
Comandante! Capitão
       <b>Bm7/5-</b>      <b>E7</b>
Tio! Brother! Camarada
    <b>Am7</b>     <b>C</b>
Chefia! Amigão
       <b>Bm7/5-</b>     <b>E7</b>
Desce mais uma rodada


[Final] <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
        <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
        <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>
        <b>Am7</b>  <b>C</b>  <b>Bm7/5-</b>  <b>E7</b>  <b>Am7</b>

----------------- Acordes -----------------
Am7 = X 0 2 0 1 0
Bm7/5- = X 2 3 2 3 X
C = X 3 2 0 1 0
E7 = 0 2 2 1 3 0`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SaideiraPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/skank/saideira/"
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
