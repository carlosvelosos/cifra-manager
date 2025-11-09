import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/revelacao/ta-escrito/
const cifra = `

[Intro] <b>F</b>

[Primeira Parte]

<b>F</b>
  Quem cultiva a semente do amor
<b>C</b>                     <b>Bb</b>
  Segue em frente não se apavora
<b>F</b>                   <b>Dm</b>
  Se na vida encontrar dissabor
<b>Gm</b>                <b>C7</b>
   Vai saber esperar sua hora
<b>F</b>
  Quem cultiva a semente do amor
<b>C</b>                     <b>Bb</b>
  Segue em frente não se apavora
<b>F</b>                   <b>Dm</b>
  Se na vida encontrar dissabor
<b>Gm</b>                <b>C7</b>      <b>F</b>   <b>F7</b>
   Vai saber esperar sua hora

[Segunda Parte]

    <b>Bb</b>
Às vezes a felicidade demora a chegar
 <b>F</b>
Aí é que a gente
    <b>F/C</b>               <b>Am</b>
Não pode deixar de sonhar
     <b>Gm</b>
Guerreiro não foge da luta
             <b>C7</b>
Não pode correr
     <b>F</b>                 <b>F7M</b>
Ninguém vai poder atrasar
         <b>Cm</b>         <b>F7</b>
Quem nasceu pra vencer

[Pré-Refrão]

   <b>Bb</b>
É dia de sol mas o tempo pode fechar
    <b>F</b>                 <b>F/C</b>         <b>Am</b>   <b>D7(9-)</b>
A chuva só vem quando tem que molhar
    <b>Gm</b>                  <b>C7</b>
Na vida é preciso aprender
    <b>F</b>                   <b>D7</b>
Se colhe o bem que plantar
   <b>Gm</b>                    <b>C7</b>
É Deus quem aponta a estrela
                 <b>F</b>  <b>F7</b>
Que tem que brilhar

[Refrão]

              <b>Bb</b>
Ergue essa cabeça, mete o pé e vai na fé
        <b>C7</b>             <b>F</b>   <b>F7M</b>  <b>F6</b>
Manda essa tristeza embora
            <b>C</b>                          <b>Bb</b>
Basta acreditar que um novo dia vai raiar
     <b>C</b>           <b>F</b>                <b>F7</b>
Sua hora vai chegar, erga essa cabeça
              <b>Bb</b>
Ergue essa cabeça, mete o pé e vai na fé
        <b>C7</b>            <b>F</b>  <b>F7M</b>  <b>F6</b>
Manda essa tristeza embora
            <b>C</b>                         <b>Bb</b>
Basta acreditar que um novo dia vai raiar
     <b>C</b>           <b>F</b>
Sua hora vai chegar

[Primeira Parte]

<b>F</b>
  Quem cultiva a semente do amor
<b>C</b>                     <b>Bb</b>
  Segue em frente não se apavora
<b>F</b>                   <b>Dm</b>
  Se na vida encontrar dissabor
<b>Gm</b>                <b>C7</b>
   Vai saber esperar sua hora
<b>F</b>
  Quem cultiva a semente do amor
<b>C</b>                     <b>Bb</b>
  Segue em frente não se apavora
<b>F</b>                   <b>Dm</b>
  Se na vida encontrar dissabor
<b>Gm</b>                <b>C7</b>        <b>F</b>   <b>F7</b>
   Vai saber esperar sua hora

[Segunda Parte]

    <b>Bb</b>
Às vezes a felicidade demora a chegar
 <b>F</b>
Aí é que a gente
    <b>F/C</b>               <b>Am</b>
Não pode deixar de sonhar
     <b>Gm</b>
Guerreiro não foge da luta
             <b>C7</b>
Não pode correr
     <b>F</b>                 <b>F7M</b>
Ninguém vai poder atrasar
         <b>Cm</b>         <b>F7</b>
Quem nasceu pra vencer

[Pré-Refrão]

   <b>Bb</b>
É dia de sol mas o tempo pode fechar
    <b>F</b>                 <b>F/C</b>         <b>Am</b>   <b>D7(9-)</b>
A chuva só vem quando tem que molhar
    <b>Gm</b>                  <b>C7</b>
Na vida é preciso aprender
    <b>F</b>                   <b>D7</b>
Se colhe o bem que plantar
   <b>Gm</b>                    <b>C7</b>
É Deus quem aponta a estrela
                 <b>F</b>  <b>F7</b>
Que tem que brilhar

[Refrão Final]

              <b>Bb</b>
Ergue essa cabeça, mete o pé e vai na fé
        <b>C7</b>            <b>F</b>   <b>F7M</b>  <b>F6</b>
Manda essa tristeza embora
            <b>C</b>                          <b>Bb</b>
Basta acreditar que um novo dia vai raiar
     <b>C</b>           <b>F</b>                <b>F7</b>
Sua hora vai chegar, erga essa cabeça
              <b>Bb</b>
Ergue essa cabeça, mete o pé e vai na fé
        <b>C7</b>            <b>F</b>  <b>F7M</b>  <b>F6</b>
Manda essa tristeza embora
            <b>C</b>                         <b>Bb</b>
Basta acreditar que um novo dia vai raiar
     <b>C</b>           <b>F</b>   <b>F7</b>
Sua hora vai chegar

              <b>Bb</b>
Ergue essa cabeça, mete o pé e vai na fé
         <b>C7</b>           <b>F</b>   <b>F7M</b>  <b>F6</b>
Manda essa tristeza embora
            <b>C</b>                          <b>Bb</b>
Basta acreditar que um novo dia vai raiar
     <b>C</b>           <b>F</b>                <b>F7</b>
Sua hora vai chegar, erga essa cabeça
              <b>Bb</b>
Ergue essa cabeça, mete o pé e vai na fé
        <b>C7</b>           <b>F</b>  <b>F7M</b>  <b>F6</b>
Manda essa tristeza embora
            <b>C</b>                         <b>Bb</b>
Basta acreditar que um novo dia vai raiar
     <b>C</b>           <b>F</b>  <b>F7</b>
Sua hora vai chegar

              <b>Bb</b>
Ergue essa cabeça, mete o pé e vai na fé
        <b>C7</b>            <b>F</b>   <b>F7M</b>  <b>F6</b>
Manda essa tristeza embora
            <b>C</b>                          <b>Bb</b>
Basta acreditar que um novo dia vai raiar
     <b>C</b>           <b>F</b>
Sua hora vai chegar

----------------- Acordes -----------------
Am = 2 2 1 2
Am7 = 7 P5 5 5
Bb = P3 3 3 3
C = 2 0 1 2
C7 = 2 3 1 2
Cm = 1 0 1 1
D7 = 4 2 1 4
Dm = 3 2 3 3
F = 3 2 1 3
F7 = 3 2 P1 1
Gm = 5 3 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TaEscritoPage() {

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
