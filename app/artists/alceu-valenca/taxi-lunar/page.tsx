import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/alceu-valenca/taxi-lunar/

const cifra = `Alceu Valença - Táxi Lunar

[Intro] <b>Am7</b>  <b>Bm7</b>  <b>C7M</b>  <b>Bm7</b>  <b>Am7</b>
        <b>Am7</b>  <b>Bm7</b>  <b>C7M</b>  <b>Bm7</b>  <b>Am7</b>

[Primeira Parte]

 <b>Dm</b>   <b>C</b>   <b>Bm</b>  <b>Am7</b>
Pela sua cabeleira vermelha
       <b>G</b>     <b>F</b>     <b>Em</b>
Pelos raios desse sol lilás
 <b>Dm</b>   <b>C</b>    <b>Bm</b>     <b>Am7</b>
Pelo fogo do seu corpo centelha
       <b>G</b>     <b>F</b>     <b>Em</b>
Pelos raios desse sol

[Refrão]

  <b>Am7</b>              <b>Bm7</b>
Apenas apanhei na beira mar
<b>C7M</b>           <b>Bm7</b>          <b>Am7</b>
    Um táxi pra estação lunar
  <b>Am7</b>              <b>Bm7</b>
Apenas apanhei na beira mar
<b>C7M</b>           <b>Bm7</b>          <b>Am7</b>
    Um táxi pra estação lunar

[Segunda Parte]

 <b>Dm</b>   <b>C</b>      <b>Bm</b> <b>Am7</b>
Bela linda criatura bonita
       <b>G</b>     <b>F</b>      <b>Em</b>
Nem menina, nem mulher
 <b>Dm</b>       <b>C</b>     <b>Bm</b>     <b>Am7</b>
Tem um espelho no seu rosto de neve
       <b>G</b>     <b>F</b>     <b>Em</b>
Nem menina, nem mulher

[Refrão]

  <b>Am7</b>              <b>Bm7</b>
Apenas apanhei na beira mar
<b>C7M</b>           <b>Bm7</b>          <b>Am7</b>
    Um táxi pra estação lunar
  <b>Am7</b>              <b>Bm7</b>
Apenas apanhei na beira mar
<b>C7M</b>           <b>Bm7</b>          <b>Am7</b>
    Um táxi pra estação lunar

( <b>Am7</b>  <b>Bm7</b>  <b>C7M</b>  <b>Bm7</b>  <b>Am7</b> )
( <b>Am7</b>  <b>Bm7</b>  <b>C7M</b>  <b>Bm7</b>  <b>Am7</b> )

[Terceira Parte]

  <b>Dm</b>    <b>C</b>     <b>Bm</b>   <b>Am7</b>
Ela me deu o seu amor eu tomei
        <b>G</b>    <b>F</b>       <b>Em</b>
No dia dezesseis de maio viajei
   <b>Dm</b>  <b>C</b>      <b>Bm</b>  <b>Am7</b>
Espaçonave atropelado procurei
      <b>G</b>    <b>F</b>   <b>Em</b>
Seu amor aperreado

[Refrão]

  <b>Am7</b>              <b>Bm7</b>
Apenas apanhei na beira mar
<b>C7M</b>           <b>Bm7</b>          <b>Am7</b>
    Um táxi pra estação lunar
  <b>Am7</b>              <b>Bm7</b>
Apenas apanhei na beira mar
<b>C7M</b>           <b>Bm7</b>          <b>Am7</b>
    Um táxi pra estação lunar

[Primeira Parte]

 <b>Dm</b>   <b>C</b>   <b>Bm</b>  <b>Am7</b>
Pela sua cabeleira vermelha
       <b>G</b>     <b>F</b>     <b>Em</b>
Pelos raios desse sol lilás
 <b>Dm</b>   <b>C</b>    <b>Bm</b>     <b>Am7</b>
Pelo fogo do seu corpo centelha
       <b>G</b>     <b>F</b>     <b>Em</b>
Pelos raios desse sol

[Refrão]

  <b>Am7</b>              <b>Bm7</b>
Apenas apanhei na beira mar
<b>C7M</b>           <b>Bm7</b>          <b>Am7</b>
    Um táxi pra estação lunar
  <b>Am7</b>              <b>Bm7</b>
Apenas apanhei na beira mar
<b>C7M</b>           <b>Bm7</b>          <b>Am7</b>
    Um táxi pra estação lunar

[Segunda Parte]

 <b>Dm</b>   <b>C</b>      <b>Bm</b> <b>Am7</b>
Bela linda criatura bonita
       <b>G</b>     <b>F</b>      <b>Em</b>
Nem menina, nem mulher
 <b>Dm</b>       <b>C</b>     <b>Bm</b>     <b>Am7</b>
Tem um espelho no seu rosto de neve
       <b>G</b>     <b>F</b>     <b>Em</b>
Nem menina, nem mulher

[Refrão]

  <b>Am7</b>              <b>Bm7</b>
Apenas apanhei na beira mar
<b>C7M</b>           <b>Bm7</b>          <b>Am7</b>
    Um táxi pra estação lunar
  <b>Am7</b>              <b>Bm7</b>
Apenas apanhei na beira mar
<b>C7M</b>           <b>Bm7</b>          <b>Am7</b>
    Um táxi pra estação lunar

[Final] <b>Am7</b>  <b>Bm7</b>  <b>C7M</b>  <b>Bm7</b>  <b>Am7</b>
        <b>Am7</b>  <b>Bm7</b>  <b>C7M</b>  <b>Bm7</b>  <b>Am7</b>

----------------- Acordes -----------------
Am7 = X 0 2 0 1 0
Bm = X 2 4 4 3 2
Bm7 = X 2 4 2 3 2
C = X 3 2 0 1 0
C7M = X 3 2 0 0 X
Dm = X X 0 2 3 1
Em = 0 2 2 0 0 0
F = 1 3 3 2 1 1
G = 3 2 0 0 0 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TaxiLunarPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/alceu-valenca/taxi-lunar/"
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
