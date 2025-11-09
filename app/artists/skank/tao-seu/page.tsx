import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/skank/tao-seu/

const cifra = `Skank - Tão Seu

[Intro] <b>A</b>  <b>Bm</b>  <b>D</b>  <b>Dm</b>  <b>A</b>

[Primeira Parte]

<b>A</b>
  Sinto sua falta
     <b>Bm</b>
Não posso esperar tanto tempo assim
   <b>D</b>
O nosso amor é novo
     <b>Dm</b>         <b>A</b>
É o velho amor ainda e sempre

<b>A</b>
  Não diga que não vem me ver
<b>Bm</b>
   De noite eu quero descansar
<b>D</b>
Ir ao cinema com você
    <b>Dm</b>                <b>A</b>
Um filme à toa no Pathé

<b>A</b>
  Que culpa a gente tem de ser feliz?
<b>Bm</b>
   Que culpa a gente tem, meu bem?
   <b>D</b>
O mundo bem diante do nariz
 <b>Dm</b>            <b>A</b>       <b>C#7</b>
Feliz agora e não além

[Refrão]

<b>F#</b>             <b>C#5(9)</b>        <b>D#m</b>         <b>B5(9)</b>
   Me sinto só,  me sinto só,  me sinto tão seu
<b>F#</b>             <b>C#5(9)</b>      <b>D#m</b>      <b>B5(9)</b>
   Me sinto tão, me sinto só e sou teu
<b>F#</b>            <b>C#5(9)</b>        <b>D#m</b>          <b>B5(9)</b>
   Me sinto só,  me sinto só,  me sinto tão seu
<b>F#</b>             <b>C#5(9)</b>      <b>D#m</b>      <b>B5(9)</b>  <b>Bm</b>
   Me sinto tão, me sinto só e sou teu

( <b>A</b>  <b>Bm</b>  <b>D</b>  <b>Dm</b>  <b>A</b> )

[Segunda Parte]

<b>A</b>
  Faço tanta coisa
    <b>Bm</b>
Pensando no momento de te ver
   <b>D</b>
A minha casa sem você é triste
       <b>Dm</b>            <b>A</b>
E a espera arde sem me aquecer

Não diga que você não volta
<b>Bm</b>
   Eu não vou conseguir dormir
   <b>D</b>
À noite eu quero descansar
  <b>Dm</b>            <b>A</b>
Sair à toa por aí
 <b>C#7</b>
Iê, ê, iô, ô

[Refrão]

<b>F#</b>             <b>C#5(9)</b>        <b>D#m</b>         <b>B5(9)</b>
   Me sinto só,  me sinto só,  me sinto tão seu
<b>F#</b>             <b>C#5(9)</b>      <b>D#m</b>      <b>B5(9)</b>
   Me sinto tão, me sinto só e sou teu
<b>F#</b>            <b>C#5(9)</b>        <b>D#m</b>          <b>B5(9)</b>
   Me sinto só,  me sinto só,  me sinto tão seu
<b>F#</b>             <b>C#5(9)</b>      <b>D#m</b>      <b>B5(9)</b>  <b>Bm</b>
   Me sinto tão, me sinto só e sou teu

( <b>A</b>  <b>Bm</b>  <b>D</b>  <b>Dm</b>  <b>A</b> )

[Primeira Parte]

<b>A</b>
  Sinto sua falta
     <b>Bm</b>
Não posso esperar tanto tempo assim
   <b>D</b>
O nosso amor é novo
     <b>Dm</b>         <b>A</b>
É o velho amor ainda e sempre

<b>A</b>
 Que culpa a gente tem de ser feliz?
<b>Bm</b>
  Eu digo eles ou nós dois
   <b>D</b>
O mundo bem diante do nariz
 <b>Dm</b>                <b>A</b>       <b>C#7</b> 
Feliz agora e não depooois   iê, iê!


[Refrão]

<b>F#</b>             <b>C#5(9)</b>        <b>D#m</b>         <b>B5(9)</b>
   Me sinto só,  me sinto só,  me sinto tão seu
<b>F#</b>             <b>C#5(9)</b>      <b>D#m</b>      <b>B5(9)</b>
   Me sinto tão, me sinto só e sou teu
<b>F#</b>            <b>C#5(9)</b>        <b>D#m</b>          <b>B5(9)</b>
   Me sinto só,  me sinto só,  me sinto tão seu
<b>F#</b>             <b>C#5(9)</b>      <b>D#m</b>      <b>B5(9)</b>  <b>Bm</b>
   Me sinto tão, me sinto só e sou teu

----------------- Acordes -----------------
A = X 0 2 2 2 0
B5(9) = X 2 4 6 X X
Bm = X 2 4 4 3 2
C#5(9) = X 4 6 8 X X
C#7 = X 4 3 4 2 X
D = X X 0 2 3 2
D#m = X X 1 3 4 2
Dm = X X 0 2 3 1
F# = 2 4 4 3 2 2`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TaoSeuPage() {
  return (
    <>
      <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
