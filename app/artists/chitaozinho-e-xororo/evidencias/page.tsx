import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/chitaozinho-e-xororo/evidencias/

const cifra = `Chitãozinho & Xororó - Evidências

[Intro] <b>E</b>  <b>E5+</b>  <b>A</b>  <b>F#m</b>  <b>A/B</b>
        <b>E</b>  <b>E5+</b>  <b>A</b>  <b>E/G#</b>  <b>F#m</b>  
        <b>A/B</b>  <b>E</b>  <b>A/B</b>

[Primeira Parte]

           <b>E</b>                  <b>B/D#</b>
Quando eu digo que deixei de te amar
         <b>C#m7</b>    <b>E7(9)</b>  <b>E6</b>  <b>E7</b>
É porque eu te amo
           <b>A</b>
Quando eu digo que não quero
      <b>C#7</b>
Mais você
   <b>F#m</b>
É porque eu te quero
          <b>B7</b>
Eu tenho medo de te dar meu
 <b>Cº</b>
Coração
         <b>C#m7</b>
E confessar que eu estou
         <b>C#m7/B</b>
Em tuas mãos
         <b>F#</b>         <b>E/G#</b>
Mas não posso imaginar
           <b>F#/A#</b>
O que vai ser de mim
             <b>B</b>      <b>A/C#</b>  <b>B/D#</b>
Se eu te perder um dia

[Segunda Parte]

        <b>E</b>
Eu me afasto e me defendo
    <b>B/D#</b>
De você
       <b>C#m</b>          <b>E7(9)</b>  <b>E6</b>  <b>E7</b>
Mas depois me entrego
      <b>A</b>
Faço tipo, falo coisas que
    <b>C#7</b>
Eu não sou
     <b>F#m</b>
Mas depois eu nego
          <b>B7</b>
Mas a verdade é que eu sou
       <b>Cº</b>
Louco por você
         <b>C#m</b>
E tenho medo de pensar
          <b>Am</b>
Em te perder
       <b>E</b>                       <b>A/B</b>
Eu preciso aceitar que não dá mais
                <b>E4</b>     <b>E</b>    <b>E4</b>  <b>E</b>  <b>A/B</b>
Pra separar as nossas vidas

[Refrão]

<b>E</b>
E nessa loucura de dizer

Que não te quero
       <b>G#</b>
Vou negando as aparências

Disfarçando as evidências
          <b>A</b>
Mas pra que viver fingindo
           <b>F#m</b>
Se eu não posso enganar
         <b>B7</b>
Meu coração
    <b>F#m</b>       <b>B7</b>
Eu sei que te amo

  <b>E</b>
Chega de mentiras

De negar o meu desejo
        <b>G#</b>
Eu te quero mais que tudo

Eu preciso do seu beijo
       <b>A</b>
Eu entrego a minha vida
       <b>F#m</b>
Pra você fazer o que quiser
    <b>B7</b>
De mim
     <b>F#m</b>          <b>B7</b>
Só quero ouvir você dizer
     <b>E</b>
Que sim
              <b>E5+</b>
Diz que é verdade que tem
    <b>A</b>   <b>E/G#</b>
Saudade
    <b>F#m</b>         <b>B7</b>
Que ainda você pensa muito
    <b>E</b>
Em mim
              <b>E5+</b>
Diz que é verdade que tem
    <b>A</b>   <b>E/G#</b>
Saudade
    <b>F#m</b>          <b>B7</b>
Que ainda você quer viver

Pra mim

[Solo] <b>C#m</b>  <b>C5+</b>  <b>E/B</b>  <b>F#/A#</b>  <b>Am</b>  <b>A/B</b>

<span class="tablatura">[Tab - Solo]

Parte 1 de 3
<span class="cnt">E|-16h17~-16~-12~-------------------------------------|
B|-----------------14~--14/19b20/21~------------------|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 3
<span class="cnt">E|-16h17~-16~12~----19b21r19---19~--------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 3
<span class="cnt">E|-15p12--------12p8--------8p5-----------------------|
B|-------13----------10---------5---------------------|
G|----------12-----------9--------5---7p5--4~---------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|</span></span>

[Segunda Parte]

        <b>E</b>
Eu me afasto e me defendo
    <b>B/D#</b>
De você
       <b>C#m</b>          <b>E7(9)</b>  <b>E6</b>  <b>E7</b>
Mas depois me entrego
      <b>A</b>
Faço tipo, falo coisas que
    <b>C#7</b>
Eu não sou
     <b>F#m</b>
Mas depois eu nego
          <b>B7</b>
Mas a verdade é que eu sou
       <b>Cº</b>
Louco por você
         <b>C#m</b>
E tenho medo de pensar
          <b>Am</b>
Em te perder
       <b>E</b>                       <b>A/B</b>
Eu preciso aceitar que não dá mais
                <b>E4</b>     <b>E</b>    <b>E4</b>  <b>E</b>  <b>A/B</b>
Pra separar as nossas vidas

[Refrão]

<b>E</b>
E nessa loucura de dizer

Que não te quero
       <b>G#</b>
Vou negando as aparências

Disfarçando as evidências
          <b>A</b>
Mas pra que viver fingindo
           <b>F#m</b>
Se eu não posso enganar
         <b>B7</b>
Meu coração
    <b>F#m</b>       <b>B7</b>
Eu sei que te amo

  <b>E</b>
Chega de mentiras

De negar o meu desejo
        <b>G#</b>
Eu te quero mais que tudo

Eu preciso do seu beijo
       <b>A</b>
Eu entrego a minha vida
       <b>F#m</b>
Pra você fazer o que quiser
    <b>B7</b>
De mim
     <b>F#m</b>          <b>B7</b>
Só quero ouvir você dizer
     <b>E</b>
Que sim
              <b>E5+</b>
Diz que é verdade que tem
    <b>A</b>   <b>E/G#</b>
Saudade
    <b>F#m</b>         <b>B7</b>
Que ainda você pensa muito
    <b>E</b>
Em mim
              <b>E5+</b>
Diz que é verdade que tem
    <b>A</b>   <b>E/G#</b>
Saudade
    <b>F#m</b>          <b>B7</b>
Que ainda você quer viver
     <b>E</b>
Pra mim
              <b>E5+</b>
Diz que é verdade que tem
    <b>A</b>   <b>E/G#</b>
Saudade
    <b>F#m</b>          <b>B7</b>
Que ainda você quer viver
     <b>E</b>
Pra mim

----------------- Acordes -----------------
A = X 0 2 2 2 0
A/B = X 2 2 2 2 X
A/C# = X 4 2 2 2 X
Am = X 0 2 2 1 0
B = X 2 4 4 4 2
B/D# = X 6 4 4 4 X
B7 = X 2 1 2 0 2
C#7 = X 4 3 4 2 X
C#m = X 4 6 6 5 4
C#m7 = X 4 6 4 5 4
C#m7/B = X 2 2 4 5 2
C5+ = X 3 6 5 5 3
Cº = X 3 4 2 4 X
E = 0 2 2 1 0 0
E/B = X 2 2 4 5 4
E/G# = 4 X 2 4 5 X
E4 = 0 2 2 2 0 0
E5+ = 0 2 2 1 1 0
E6 = X 7 6 6 5 X
E7 = 0 2 2 1 3 0
E7(9) = X 7 6 7 7 X
F# = 2 4 4 3 2 2
F#/A# = X P1 4 3 2 X
F#m = 2 4 4 2 2 2
G# = 4 6 6 5 4 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EvidenciasPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/chitaozinho-e-xororo/evidencias/"
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
