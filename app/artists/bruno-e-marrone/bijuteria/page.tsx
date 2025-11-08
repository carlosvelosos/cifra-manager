import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/bruno-e-marrone/bijuteria/

const cifra = `Bruno e Marrone - Bijuteria

[Primeira Parte]

          <b>Am</b>
Quando a noite cai
<b>Am/G</b>
     É que eu sinto a falta
       <b>Dm</b>
Que você me faz
<b>Dm/C</b>
     Saudade em quem não passa
          <b>Bm7(5-)</b>
E nem me deixa em paz
<b>E7</b>
   A sombra de um amor
            <b>Am</b>
Que já brilhou demais

( <b>Bm7(5-)</b>  <b>D/F#</b>  <b>E/G#</b> )

<span class="tablatura">[Dedilhado - Primeira Parte]

Parte 1 de 4
   <b>Am</b>              <b>Am/G</b>        
<span class="cnt">E|-----------------------------------------|
B|-1---1---1---1----1---1---1---1----------|
G|-2---2---2---2----2---2---2---2----------|
D|---2---2---2---2----2---2---2---2--------|
A|-0---------------------------------------|
E|------------------3----------------------|</span></span>

<span class="tablatura">Parte 2 de 4
   <b>Dm</b>               <b>Dm/C</b>
<span class="cnt">E|-1---1---1---1----1---1---1---1----------|
B|-3---3---3---3----3---3---3---3----------|
G|---2---2---2---2----2---2---2---2--------|
D|-0---------------------------------------|
A|------------------3----------------------|
E|-----------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 4
   <b>Bm7(5-)</b>          <b>E7</b>
<span class="cnt">E|-----------------------------------------|
B|-3---3---3---3--------0---0---0----------|
G|-2---2---2---2--------1---1---1----------|
D|---3---3---3---3----0---0---0---0--------|
A|-2---------------------------------------|
E|------------------0----------------------|</span></span>

<span class="tablatura">Parte 4 de 4
  <b>Am</b>                <b>Bm7(5-)</b>     <b>D/F#</b>  <b>E/G#</b>
<span class="cnt">E|-----------------------------------------|
B|-----1---1---1----3---3------------------|
G|-----2---2---2----2---2------2-----4-----|
D|---2---2---2---2----3--------------------|
A|-0----------------2----------------------|
E|-------------------------0---2-----4-----|</span></span>

[Segunda Parte]

      <b>Am</b>
Você foi pra mim
<b>Am/G</b>
     A coisa mais bonita
         <b>Dm</b>
Que me aconteceu
<b>Dm/C</b>
     Não pode imaginar
           <b>Bm7(5-)</b>
Os sonhos que me deu
<b>E</b>
  E quanta insegurança
       <b>Am</b>          <b>A7</b>  <b>G/B</b>  <b>A7/C#</b>
Me deixou no adeus

[Pré-Refrão]

  <b>Dm</b>
Amei você
<b>G</b>
  Sem truque, sem maldade
       <b>C7M</b>
Fiz o meu papel
<b>F7M</b>
    Eu quis lhe oferecer
          <b>Bm7(5-)</b>
O que ninguém me deu
<b>E</b>
  Você não acredita
        <b>Am</b>      <b>A7</b>  <b>G/B</b>  <b>A7/C#</b>
Mas eu fui fiel

  <b>Dm</b>
Amei você
<b>G</b>
  Mas hoje posso ver
            <b>C7M</b>
Que foi melhor assim
<b>F7M</b>
    Preciso te esquecer
            <b>Bm7(5-)</b>
Pra me lembrar de mim
<b>E</b>              <b>Am</b>  <b>A7</b>  <b>G/B</b>  <b>A7/C#</b>
  A vida continua

[Refrão]

       <b>Dm</b>
E no brilho
              <b>G</b>
De uma pedra falsa
      <b>C7M</b>                <b>F7M</b>
Dei amor a quem não merecia
       <b>Bm7(5-)</b>              <b>E</b>
Eu pensei que era uma joia rara
        <b>Am</b>    <b>A7</b>
Era bijuteria

        <b>Dm</b>
Das mentiras
              <b>G</b>
Das palavras doces
      <b>C7M</b>                   <b>F7M</b>
Vi calor no teu olhar tão frio
      <b>Bm7(5-)</b>             <b>E</b>
Da beleza do teu rosto esconde
           <b>Am</b>
Um coração    vazio

[Solo] <b>Dm</b>  <b>G</b>  <b>C7M</b>  <b>F7M</b>  <b>Bm7(5-)</b>  
       <b>E</b>  <b>Am</b>  <b>A7</b>  <b>G/B</b>  <b>A7/C#</b>          

<span class="tablatura">[Tab - Solo]

Parte 1 de 5
<span class="cnt">E|-----------------------------------------|
B|-8/10-8-6-8/10-10~--1-1--0-0---0---------|
G|--------------------2-2--0-0-2-0---------|
D|-----------------------------3-----------|
A|-----------------------------------------|
E|-----------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 5
<span class="cnt">E|-----------------------10-10-------------|
B|-6/8-6-5-6/8-8~--10/12-------13-12-13-10-|
G|-----------------------------------------|
D|-----------------------------------------|
A|-----------------------------------------|
E|-----------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 5
<span class="cnt">E|--------------------7...-8...-10...------|
B|-8/10-8-6-8/10-10~-----------------------|
G|-----------------------------------------|
D|-----------------------------------------|
A|-----------------------------------------|
E|-----------------------------------------|</span></span>

<span class="tablatura">Parte 4 de 5
<span class="cnt">E|-------------------8---8-12--10-10-8-8---|
B|---------5---9---9---9-------------------|
G|-----5-----5---9-------------------------|
D|-6-----6---------------------------------|
A|---7-------------------------------------|
E|-----------------------------------------|</span></span>

<span class="tablatura">Parte 5 de 5
<span class="cnt">E|-----------------------------------------|
B|-2-3-5--3-2------------------------------|
G|-------------2-4-5-4-2-------------------|
D|-----------------------5-3-2-------------|
A|-----------------------------------------|
E|-----------------------------------------|</span></span>

[Pré-Refrão]

  <b>Dm</b>
Amei você
<b>G</b>
  Sem truque, sem maldade
       <b>C7M</b>
Fiz o meu papel
<b>F7M</b>
    Eu quis lhe oferecer
          <b>Bm7(5-)</b>
O que ninguém me deu
<b>E</b>
  Você não acredita
        <b>Am</b>      <b>A7</b>  <b>G/B</b>  <b>A7/C#</b>
Mas eu fui fiel

  <b>Dm</b>
Amei você
<b>G</b>
  Mas hoje posso ver
            <b>C7M</b>
Que foi melhor assim
<b>F7M</b>
    Preciso te esquecer
            <b>Bm7(5-)</b>
Pra me lembrar de mim
<b>E</b>              <b>Am</b>  <b>A7</b>  <b>G/B</b>  <b>A7/C#</b>
  A vida continua

[Refrão]

       <b>Dm</b>
E no brilho
              <b>G</b>
De uma pedra falsa
      <b>C7M</b>                <b>F7M</b>
Dei amor a quem não merecia
       <b>Bm7(5-)</b>              <b>E</b>
Eu pensei que era uma joia rara
        <b>Am</b>    <b>A7</b>
Era bijuteria

        <b>Dm</b>
Das mentiras
              <b>G</b>
Das palavras doces
      <b>C7M</b>                   <b>F7M</b>
Vi calor no teu olhar tão frio
      <b>Bm7(5-)</b>             <b>E</b>
Da beleza do teu rosto esconde
                 <b>Am</b>
Um coração vazio

[Final] <b>Bm7(5-)</b>  <b>E7(9+)</b>  <b>E7</b>  <b>Am7(9)</b>

<span class="tablatura">[Tab - Final]

   <b>Am</b>            <b>Bm7(5-)</b>  <b>E7(9+)</b> <b>E7</b>    <b>Am7(9)</b>
<span class="cnt">E|-------------------------------------7---|
B|-1-1-----1-----3-3-------8-----9-----8---|
G|-2---2-------2-2---2-----7-----7-----5---|
D|-2-----2---2---3---------6-----6-----5---|
A|-0-------------2-----2/7-------------0---|</span></span>
E|-------------------------0-----0---------|

----------------- Acordes -----------------
A7 = X 0 2 0 2 0
A7/C# = X 4 X 0 5 X
Am = X 0 2 2 1 0
Am/G = 3 X 2 2 1 X
Am7(9) = X 0 P5 5 8 7
Bm7(5-) = X 2 3 2 3 X
C7M = X 3 2 0 0 X
D/F# = 2 X X 2 X X
Dm = X X 0 2 3 1
Dm/C = X 3 X 2 3 1
E = 0 2 2 1 0 0
E/G# = 4 X X 4 X X
E7 = 0 X 6 7 9 X
E7(9+) = 0 X 6 7 8 X
F7M = 1 X 2 2 1 X
G = 3 2 0 0 3 3
G/B = X 2 0 0 3 X`;

const [title, ...restOfCifra] = cifra.split(/\r?\n\r?\n/);
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex !== -1
    ? restOfCifra.slice(0, chordsSectionIndex).join("\n\n")
    : restOfCifra.join("\n\n");
const chords =
  chordsSectionIndex !== -1
    ? restOfCifra.slice(chordsSectionIndex).join("\n\n")
    : "";

export default function BijuteriaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/bruno-e-marrone/bijuteria/"
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
