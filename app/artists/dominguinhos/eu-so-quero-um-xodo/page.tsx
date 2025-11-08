import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/dominguinhos/eu-so-quero-um-xodo/

const cifra = `Dominguinhos - Eu Só Quero Um Xodó

[Intro] <b>A</b>  <b>E</b>  <b>B7(9)</b>  <b>E</b>
        <b>A</b>  <b>E</b>  <b>B7(9)</b>  <b>E</b>
        <b>A</b>  <b>E</b>  <b>B7(9)</b>  <b>E</b>
        <b>A</b>  <b>E</b>  <b>B7(9)</b>  <b>E</b>  <b>B7</b>

[Primeira Parte] 

     <b>E</b>              <b>C#m7</b>  <b>G#m7</b>
Que falta eu sinto de um bem
     <b>F#m7</b>        <b>B7(9)</b>  <b>E</b>  <b>B7(9)</b>
Que falta me faz um  xodó
     <b>E</b>           <b>C#m7</b>      <b>G#m7</b>
Mas como eu não tenho ninguém
    <b>F#m7</b>          <b>B7(9)</b>   <b>E</b>
Eu levo a vida assim tão só

[Pré-Refrão] 

        <b>Bm</b>       <b>E7</b>
Eu só quero um amor
      <b>Bm</b>            <b>F#7</b>
Que acabe o meu sofrer

[Refrão] 

      <b>C#m7</b>   <b>F#7</b>        
Um xodó pra mim 
        <b>C#m7</b>    <b>F#7</b>
Do meu jeito assim
      <b>A</b>  <b>E/G#</b>  <b>F#m7</b>  <b>B7(9)</b>  <b>E</b>
Que alegre o  meu   vi_____ver 

( <b>A</b>  <b>E</b>  <b>B7(9)</b>  <b>E</b> )
( <b>A</b>  <b>E</b>  <b>B7(9)</b>  <b>E</b>  <b>B7</b> )

[Primeira Parte] 

     <b>E</b>              <b>C#m7</b>  <b>G#m7</b>
Que falta eu sinto de um bem
     <b>F#m7</b>        <b>B7(9)</b>  <b>E</b>  <b>B7(9)</b>
Que falta me faz um  xodó
     <b>E</b>           <b>C#m7</b>      <b>G#m7</b>
Mas como eu não tenho ninguém
    <b>F#m7</b>          <b>B7(9)</b>   <b>E</b>
Eu levo a vida assim tão só

[Pré-Refrão] 

        <b>Bm</b>       <b>E7</b>
Eu só quero um amor
      <b>Bm</b>            <b>F#7</b>
Que acabe o meu sofrer

[Refrão] 

      <b>C#m7</b>   <b>F#7</b>        
Um xodó pra mim 
        <b>C#m7</b>    <b>F#7</b>
Do meu jeito assim
      <b>A</b>  <b>E/G#</b>  <b>F#m7</b>  <b>B7(9)</b>  <b>E</b>
Que alegre o  meu   vi_____ver 

( <b>A</b>  <b>E</b>  <b>B7(9)</b>  <b>E</b> )
( <b>A</b>  <b>E</b>  <b>B7(9)</b>  <b>E</b>  <b>B7</b> )

[Solo] <b>E</b>  <b>C#m7</b>  <b>G#m7</b>
       <b>F#m7</b>  <b>B7(9)</b>  <b>E</b>  <b>B7(9)</b>
       <b>E</b>  <b>C#m7</b>  <b>G#m7</b>
       <b>F#m7</b>  <b>B7(9)</b>  <b>E</b>

[Pré-Refrão] 

        <b>Bm</b>       <b>E7</b>
Eu só quero um amor
      <b>Bm</b>            <b>F#7</b>
Que acabe o meu sofrer

[Refrão] 

      <b>C#m7</b>   <b>F#7</b>        
Um xodó pra mim 
        <b>C#m7</b>    <b>F#7</b>
Do meu jeito assim
      <b>A</b>  <b>E/G#</b>  <b>F#m7</b>  <b>B7(9)</b>  <b>E</b>
Que alegre o  meu   vi_____ver 

[Final] <b>A</b>  <b>E</b>  <b>B7(9)</b>  <b>E</b>
        <b>A</b>  <b>E</b>  <b>B7(9)</b>  <b>E</b>
        <b>A</b>  <b>E</b>  <b>B7(9)</b>  <b>E</b>
        <b>A</b>  <b>E</b>  <b>B7(9)</b>  <b>E</b>

----------------- Acordes -----------------
A = X 0 2 2 2 0
B7 = X 2 1 2 0 2
B7(9) = X 2 1 2 2 X
Bm = X 2 4 4 3 2
C#m7 = X 4 6 4 5 4
E = 0 2 2 1 0 0
E/G# = 4 X 2 4 5 X
E7 = 0 2 2 1 3 0
F#7 = 2 4 2 3 2 2
F#m7 = 2 4 2 2 2 2
G#m7 = 4 6 4 4 4 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EuSoQueroUmXodoPage() {
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
