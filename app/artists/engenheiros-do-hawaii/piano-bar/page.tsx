import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/engenheiros-do-hawaii/piano-bar/

const cifra = `Engenheiros do Hawaii - Piano Bar

[Intro]  <b>E</b>  <b>B</b>  <b>G#</b>  <b>C#m</b>  <b>E</b>  <b>A</b>  <b>G#m</b>  <b>C#m</b>  <b>F#m</b>  <b>B7</b>  <b>E</b>

<span class="tablatura">       <b>E</b>       <b>B</b>       <b>G#</b>
<span class="cnt">E|------------------------------------------|
B|-0---0---4---4----------------------------|
G|-1---1---4---4---6---5---5---5------------|
D|-2-2---2-4-4---4-6---6---6---6------------|
A|---------2-------6-6---6---6---6----------|
E|-0---------------4-------4----------------|</span></span>

<span class="tablatura">       <b>C#m</b>     <b>E</b>       <b>A</b>
<span class="cnt">E|------------------------------------------|
B|-5---5---0---0---2---2---2---2------------|
G|-6---6---1---1---2---2---2---2------------|
D|-6-6---6-2-2---2-2-2---2---2---2----------|
A|-4---------------0-------0----------------|
E|---------0--------------------------------|</span></span>

<span class="tablatura">       <b>G#m</b>     <b>C#m</b>     <b>F#m</b>     <b>B4(9)</b> <b>B</b>
<span class="cnt">E|------------------------------------------|
B|-4---4---5---5---2---2--------------------|
G|-4---4---6---6---2---2---9-----8----------|
D|-6-6---6-6-6---6-4-4---4-11----9----------|
A|---------4--------------------------------|
E|-4---------------2-------7----------------|</span></span>

[Primeira Parte]

<b>E</b>                 <b>B</b>                     <b>G#</b>
   O que você me pede e eu não posso fazer
<b>C#m</b>               <b>E</b>                  <b>A</b>
   Assim você me perde,e eu perco você
            <b>G#m</b>           <b>C#m</b>
   Como um barco perde o rumo
            <b>F#m</b>              <b>B4(9)</b> <b>B</b>   <b>E</b>
   Como uma árvore no outono      perde a cor

                   <b>B</b>                    <b>G#</b>
   O que você não pode eu não vou te pedir
<b>C#m</b>          <b>E</b>                            <b>A</b>
   O que você não quer eu não quero insistir
    <b>G#m</b>             <b>C#m</b>
   Diga a verdade, doa a quem doer
        <b>F#m</b>          <b>B4(9)</b>    <b>B</b>       <b>E</b>
   Doe sangue e me dê    seu telefone

                     <b>B</b>                <b>G#</b>
   Todos os dias eu venho ao mesmo lugar
<b>C#m</b>               <b>E</b>                          <b>A</b>
   Às vezes fica longe, impossível de encontrar
          <b>G#m</b>               <b>C#m</b>              <b>F#m</b> <b>B4(9)</b> <b>B</b>   <b>E</b>
   Mas, quando o bourbon é bom toda noite é noite  de luar

                    <b>B</b>                    <b>G#</b>
   No táxi que me trouxe até aqui Bob Marley me dava razão
<b>C#m</b>                 <b>E</b>                   <b>A</b>
   As últimas do esporte, hora certa, crime, religião
     <b>G#m</b>        <b>C#m</b>          <b>F#m</b>           <b>B</b>         <b>C#m</b>
    Na verdade nada é uma palavra esperando tradução

[Passagem]

<span class="tablatura">       <b>C#m</b>
<span class="cnt">E|------------------------------------------|
B|---------4---5--------4-5p4---------------|
G|-----6--------------6-------6-4-----------|
D|---6---6---6------6-----------------------|
A|-4--------------4-------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">       <b>F#m7</b>           <b>G#7</b>
<span class="cnt">E|------------------------4-----------------|
B|-----2---4---5--------4-------------------|
G|-2------------------5---------------------|
D|---2---2---2------4-----------------------|
A|------------------------------------------|
E|-2--------------4-------------------------|</span></span>

[Segunda Parte]

<b>E</b>              <b>B</b>            <b>G#</b>
   Toda vez que  falta luz
<b>C#m</b>            <b>E</b>                <b>A</b>
   Toda vez que  algo nos falta
          <b>G#m</b>                 <b>C#m</b>
   O invisível nos salta aos olhos
       <b>F#m</b>           <b>B</b>         <b>E</b>
   Um salto no escuro  da piscina

              <b>B</b>              <b>G#</b>
   O fogo ilumina muito por muito pouco tempo
<b>C#m</b>         <b>E</b>                                 <b>A</b>
   Em muito pouco tempo o fogo apaga tudo, e tudo um dia vira luz
         <b>G#m</b>           <b>C#m</b>
   Toda vez que falta luz
<b>F#m</b>       <b>B</b>         <b>Cº</b>       <b>C#m</b>
   O invisível nos salta aos olhos

[Terceira Parte]

           <b>F#m</b>  <b>G#</b>                   <b>C#m</b>
  Ontem à noite,   eu conheci uma guria
          <b>F#m</b>   <b>G#</b>           <b>C#m</b>
  Já era tarde,   era quase dia
             <b>F#m</b>  <b>G#</b>          <b>C#m</b>
  Era o princípio   num precipício
             <b>F#m</b>  <b>G#</b>      <b>C#m</b>
  Era o meu corpo   que caía

           <b>F#m</b>  <b>G#</b>                <b>C#m</b>
  Ontem à noite,   a noite tava fria
            <b>F#m</b>  <b>G#</b>              <b>C#m</b>
  Tudo queimava,   mas nada aquecia
            <b>F#m</b>      <b>G#</b>        <b>C#m</b>
  Ela apareceu, parecia tão sozinha
                   <b>F#m</b>         <b>G#</b>     <b>C#m</b>
  Parecia que era minha aquela   solidão

( <b>C#m7</b>   <b>C7M(5+)</b>  <b>E/B</b>  <b>Bbm7(5-)</b> )
( <b>C#m7</b>   <b>C7M(5+)</b>  <b>E/B</b>  <b>Bbm7(5-)</b> )

[Quarta Parte]

<b>F#m</b>                  <b>G#</b>                   <b>C#m</b>
   Eu conheci uma guria que eu já conhecia
                   <b>F#m</b>        <b>G#</b>              <b>C#m</b>
   De outros carnavais,   com outras fantasias
             <b>F#m</b>      <b>G#</b>            <b>C#m</b>
   Ela apareceu, parecia tão sozinha
                    <b>F#m</b>          <b>G#</b>  <b>C#m</b>
   Parecia que era minha aquela solidão

<b>F#m</b>                  <b>G#</b>                   <b>C#m</b>
   Eu conheci uma guria que eu já conhecia
                   <b>F#m</b>        <b>G#</b>              <b>C#m</b>
   De outros carnavais,   com outras fantasias
             <b>F#m</b>      <b>G#</b>            <b>C#m</b>
   Ela apareceu, parecia tão sozinha
                    <b>F#m</b>          <b>G#</b>  <b>E</b>
   Parecia que era minha aquela solidão

----------------- Acordes -----------------
A = X 0 2 2 2 0
B = X 2 4 4 4 2
B4(9) = X 2 4 6 5 2
B7 = X 2 1 2 0 2
Bbm7(5-) = X 1 2 1 2 X
C#m = X 4 6 6 5 4
C#m7 = X 4 6 4 5 4
C7M(5+) = X 3 2 1 0 0
Cº = X 3 4 2 4 2
E = 0 2 2 1 0 0
E/B = X 2 2 1 0 0
F#m = 2 4 4 2 2 2
F#m7 = 2 X 2 2 2 X
G# = 4 3 1 1 1 4
G#7 = 4 6 4 5 4 4
G#m = 4 6 6 4 4 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PianoBarPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/engenheiros-do-hawaii/piano-bar/"
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
