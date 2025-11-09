import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

// URL: https://www.cifraclub.com.br/natiruts/natiruts-reggae-power/

const cifra = `Natiruts - Natiruts Reggae Power

[Intro] <b>F#m</b>  <b>C#m7</b>  <b>Bm7</b>  <b>E</b>
        <b>F#m</b>  <b>C#m7</b>  <b>Bm7</b>  <b>E</b>

<span class="tablatura"><span class="cnt">E|----------------------------------------------------|
B|----------------------------------------------------|
G|-4-4--2---------------------------------------------|
D|---------4-4--2---2h4-4--2--------------------------|
A|----------------------------4p2-2-4-----------------|
E|-------------------------------------2--------------|</span></span>

[Primeira Parte]

<b>F#m</b>                  <b>C#m7</b>
    Quando a noite cair e o som
<b>Bm7</b>                   <b>E</b>
    Te trazer algum sonho bom
<b>F#m</b>                <b>C#m7</b>
    E fazer tudo transcender
     <b>Bm7</b>                      <b>E</b>
Tristeza vai sumir e ninguém vai sofrer

<b>F#m</b>                <b>C#m7</b>
    Sintonize sua vibração
<b>Bm7</b>                     <b>E</b>
    Não há tempo pra viver em vão
<b>F#m</b>                      <b>C#m7</b>
    E não pense mais em desistir
  <b>Bm7</b>
Existe um mundo que
            <b>E</b>
Só quer te ver sorrir

[Ponte]

      <b>F#m</b>     <b>C#m7</b>
Não chora, a nossa vida
               <b>Bm7</b>          <b>E</b>
É feita mesmo para se aprender
    <b>F#m</b>     <b>C#m7</b>
E agora, é hora de tentar 
         <b>Bm7</b>          <b>E</b>
Se libertar não vai doer

<b>F#m</b>                   <b>C#m7</b>
  Deixa e energia do som te levar
   <b>Bm7</b>                   <b>E</b>
A vibe positiva solta pelo ar
      <b>F#m</b>                  <b>C#m7</b>
Quem sente com a alma é capaz de amar
 <b>Bm7</b>                 <b>E</b>
Sempre livre pra cantar

[Refrão]

<b>F#m</b>  <b>C#m7</b>
O, o o
     <b>Bm7</b>                  <b>E</b>
Natiruts reggae power chegou
<b>F#m</b>  <b>C#m7</b>
O, o o
         <b>Bm7</b>                  <b>E</b>
Transformando toda noite em amor

<b>F#m</b>  <b>C#m7</b>
O, o o
     <b>Bm7</b>                  <b>E</b>
Natiruts reggae power chegou
<b>F#m</b>  <b>C#m7</b>
O, o o
         <b>Bm7</b>                  <b>E</b>
Transformando toda noite em amor   

[Segunda Parte]

<b>F#m</b>                <b>C#m7</b>
    Sintonize sua vibração
<b>Bm7</b>                     <b>E</b>
    Não há tempo pra viver em vão
<b>F#m</b>                      <b>C#m7</b>
    E não pense mais em desistir
  <b>Bm7</b>
Existe um mundo que
            <b>E</b>
Só quer te ver sorrir

[Ponte]

      <b>F#m</b>     <b>C#m7</b>
Não chora, a nossa vida
               <b>Bm7</b>          <b>E</b>
É feita mesmo para se aprender
    <b>F#m</b>     <b>C#m7</b>
E agora, é hora de tentar 
         <b>Bm7</b>          <b>E</b>
Se libertar não vai doer

<b>F#m</b>                   <b>C#m7</b>
  Deixa e energia do som te levar
   <b>Bm7</b>                   <b>E</b>
A vibe positiva solta pelo ar
      <b>F#m</b>                  <b>C#m7</b>
Quem sente com a alma é capaz de amar
 <b>Bm7</b>                 <b>E</b>
Sempre livre pra cantar

[Refrão]

<b>F#m</b>  <b>C#m7</b>
O, o o
     <b>Bm7</b>                  <b>E</b>
Natiruts reggae power chegou
<b>F#m</b>  <b>C#m7</b>
O, o o
         <b>Bm7</b>                  <b>E</b>
Transformando toda noite em amor

Bum Bum!!

<b>F#m</b>  <b>C#m7</b>
O, o o
     <b>Bm7</b>                  <b>E</b>
Natiruts reggae power chegou
<b>F#m</b>  <b>C#m7</b>
O, o o
         <b>Bm7</b>                  <b>E</b>
Transformando toda noite em amor   

<b>F#m</b>  <b>C#m7</b>
O, o o
     <b>Bm7</b>                  <b>E</b>
Natiruts reggae power chegou
<b>F#m</b>  <b>C#m7</b>
O, o o
         <b>Bm7</b>                  <b>E</b>
Transformando toda noite em amor

Bum Bum!

<b>F#m</b>  <b>C#m7</b>
O, o o
     <b>Bm7</b>                  <b>E</b>
Natiruts reggae power chegou
<b>F#m</b>  <b>C#m7</b>
O, o o
         <b>Bm7</b>                  <b>E</b>
Transformando toda noite em amor   

Bum!

----------------- Acordes -----------------
Bm7 = X 2 4 2 3 2
C#m7 = X 4 6 4 5 4
E = 0 2 2 1 0 0
F#m = 2 4 4 2 2 2`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function NatirutsReggaePowerPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
