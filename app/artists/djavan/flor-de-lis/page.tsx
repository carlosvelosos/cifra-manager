import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/djavan/flor-de-lis/#

const cifra = `Djavan - Flor De Lis

[Intro] <b>C7M(9)</b>  <b>Fm6</b>
        <b>C7M(9)</b>  <b>Fm6</b>

[Primeira Parte]

   <b>C7M(9)</b>
Valei-me, Deus!
            <b>Bm7(5-)</b>   <b>E7(13-)</b>
É o fim do nosso amor
         <b>Am7(9)</b>   <b>D7(13)</b>
Perdoa, por favor
             <b>Gm7</b>         <b>C7(9)</b>
Eu sei que o erro aconteceu
            <b>F#m7(5-)</b>  <b>B7(9-)</b>
Mas não sei o que fez
        <b>Bb7M</b>      <b>A7(13-)</b>
Tudo mudar de vez
             <b>F#m7(5-)</b>  <b>B7(9-)</b>
Onde foi que eu errei?
                <b>Em7(9)</b>    <b>A7(13-)</b>
Eu só sei que amei, que amei
      <b>D7(9)</b>     <b>G7(4/9)</b>  <b>G7(9-)</b>
Que amei, que amei

   <b>C7M(9)</b>              <b>Bm7(5-)</b>  <b>E7(13-)</b>
Será talvez, que minha ilusão
             <b>Am7(9)</b>  <b>D7(13)</b>
Foi dar meu coração
          <b>Gm7</b>
Com toda força
          <b>C7(9)</b>     <b>F#m7(5-)</b>  <b>B7(9-)</b>
Pra essa moça me fazer feliz
          <b>Bb7M</b>       <b>A7(13-)</b>
E o destino não quis
          <b>F#m7(5-)</b>  <b>B7(9-)</b>
Me ver como raiz
         <b>Em7(9)</b>    <b>A7(13-)</b>
De uma flor de lis

[Pré-Refrão]

                    <b>Am6</b>
E foi assim que eu vi
        <b>Fm6</b>     <b>C7M(9)</b>  <b>E7(9+)</b>
Nosso amor na poeira, poeira
 <b>Am7(9)</b>           <b>E/G#</b>     <b>Gm7</b>
Morto na beleza fria de Maria

[Refrão]

     <b>C7(9)</b>         <b>F7M</b>
E o meu jardim da vida
      <b>Bb7(9)</b>  <b>Em7(9)</b>
Ressecou, morreu
    <b>A7(13-)</b>         <b>D7(9)</b>
Do pé que brotou Maria
     <b>G7(4/9)</b>  <b>G7(9-)</b>  <b>Gm7</b>
Nem mar__garida   nasceu 

     <b>C7(9)</b>         <b>F7M</b>
E o meu jardim da vida
      <b>Bb7(9)</b>  <b>Em7(9)</b>
Ressecou, morreu
    <b>A7(13-)</b>         <b>D7(9)</b>
Do pé que brotou Maria
     <b>G7(4/9)</b>  <b>G7(9-)</b>  <b>C6(9)</b>  <b>G7(13-)</b>
Nem mar__garida   nasceu 

[Interlúdio] <b>C7M(9)</b>  <b>Fm6</b>
             <b>C7M(9)</b>  <b>Fm6</b>

[Primeira Parte]

   <b>C7M(9)</b>
Valei-me, Deus!
            <b>Bm7(5-)</b>   <b>E7(13-)</b>
É o fim do nosso amor
         <b>Am7(9)</b>   <b>D7(13)</b>
Perdoa, por favor
             <b>Gm7</b>         <b>C7(9)</b>
Eu sei que o erro aconteceu
            <b>F#m7(5-)</b>  <b>B7(9-)</b>
Mas não sei o que fez
        <b>Bb7M</b>      <b>A7(13-)</b>
Tudo mudar de vez
             <b>F#m7(5-)</b>  <b>B7(9-)</b>
Onde foi que eu errei?
                <b>Em7(9)</b>    <b>A7(13-)</b>
Eu só sei que amei, que amei
      <b>D7(9)</b>     <b>G7(4/9)</b>  <b>G7(9-)</b>
Que amei, que amei

   <b>C7M(9)</b>              <b>Bm7(5-)</b>  <b>E7(13-)</b>
Será talvez, que minha ilusão
             <b>Am7(9)</b>  <b>D7(13)</b>
Foi dar meu coração
          <b>Gm7</b>
Com toda força
          <b>C7(9)</b>     <b>F#m7(5-)</b>  <b>B7(9-)</b>
Pra essa moça me fazer feliz
          <b>Bb7M</b>       <b>A7(13-)</b>
E o destino não quis
          <b>F#m7(5-)</b>  <b>B7(9-)</b>
Me ver como raiz
         <b>Em7(9)</b>    <b>A7(13-)</b>
De uma flor de lis

[Pré-Refrão]

                    <b>Am6</b>
E foi assim que eu vi
        <b>Fm6</b>     <b>C7M(9)</b>  <b>E7(9+)</b>
Nosso amor na poeira, poeira
 <b>Am7(9)</b>           <b>E/G#</b>     <b>Gm7</b>
Morto na beleza fria de Maria

[Refrão]

     <b>C7(9)</b>         <b>F7M</b>
E o meu jardim da vida
      <b>Bb7(9)</b>  <b>Em7(9)</b>
Ressecou, morreu
    <b>A7(13-)</b>         <b>D7(9)</b>
Do pé que brotou Maria
     <b>G7(4/9)</b>  <b>G7(9-)</b>  <b>Gm7</b>
Nem mar__garida   nasceu 

     <b>C7(9)</b>         <b>F7M</b>
E o meu jardim da vida
      <b>Bb7(9)</b>  <b>Em7(9)</b>
Ressecou, morreu
    <b>A7(13-)</b>         <b>D7(9)</b>
Do pé que brotou Maria
     <b>G7(4/9)</b>  <b>G7(9-)</b>  <b>Gm7</b>
Nem mar__garida   nasceu 

     <b>C7(9)</b>         <b>F7M</b>
E o meu jardim da vida
      <b>Bb7(9)</b>  <b>Em7(9)</b>
Ressecou, morreu
    <b>A7(13-)</b>         <b>D7(9)</b>
Do pé que brotou Maria
     <b>G7(4/9)</b>  <b>G7(9-)</b>  <b>Gm7</b>
Nem mar__garida   nasceu 

     <b>C7(9)</b>         <b>F7M</b>
E o meu jardim da vida
      <b>Bb7(9)</b>  <b>Em7(9)</b>
Ressecou, morreu
    <b>A7(13-)</b>         <b>D7(9)</b>
Do pé que brotou Maria
     <b>G7(4/9)</b>  <b>G7(9-)</b>  <b>C7M(9)</b>
Nem mar__garida   nasceu

[Final] <b>C7M(9)</b>  <b>Fm6</b> 
        <b>C7M(9)</b>  <b>Fm6</b>  <b>C6(9)</b>`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function FlorDeLisPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/djavan/flor-de-lis/#"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
      />
      <FloatingMenu />
    </>
  );
}
