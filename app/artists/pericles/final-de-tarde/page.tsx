import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/pericles/final-de-tarde/

const cifra = `Péricles - Final de Tarde

[Intro] <b>Cm7</b>  <b>Eb7</b>  <b>G#7M</b>  <b>G7</b>  
        <b>C7M</b>  <b>F#7(5-)</b>  <b>F7M</b>  <b>F/G</b>

<b>C9</b>
Eu não tô legal
<b>C7/Bb</b>            <b>F/A</b>
Essa noite quase não dormi
<b>F</b>      <b>C4</b>           <b>Dm7</b>
Tá custando pra ficha cair
                 <b>C7M</b>            <b>F/G</b>
Que você não vai voltar pra mim
<b>C7M</b>
Luto pra esquecer
<b>C7/Bb</b>             <b>F/A</b>
Mas é impossível não pensar
<b>F</b>         <b>C4</b>    <b>Dm7</b>
Toda hora pego o celular
                    <b>C7M</b>
Na esperança de nem sei o quê
<b>F</b>
Tento disfarçar
                <b>Am7</b>
Me engano e vou tentando acreditar
 <b>Am7(11)</b>               <b>Dm7</b>
Meu semblante não esconde
                   <b>G7(4)</b>
O olhar fica distante
     <b>G7</b>               <b>F</b>
Perco a fome, chego até ouvir tua voz
<b>F</b>          <b>C4</b>     <b>Dm7</b>
Na cabeça passa um filme sobre nós
                  <b>F</b>
A garganta dá um nó
                  <b>F/G</b>
Dá vontade de gritar
                     <b>F</b>   <b>F/G</b>
Te implorando pra voltar
<b>C7M</b>
No final de tarde

      <b>C7/Bb</b>
Tudo se mistura
    <b>F/A</b>
A saudade invade
       <b>Fm/Ab</b>     <b>F/G</b>
Chama por você
<b>C7M</b>
Mas que uma vontade
        <b>C7/Bb</b>
Chega a ser loucura
       <b>F/A</b>                  <b>Fm/Ab</b>      <b>F/G</b>      <b>C7M</b>   <b>Dm7</b>  <b>Em7</b>
O meu corpo arde em chamas por você... Por você iê
<b>F</b>
Tento disfarçar
                <b>Am7</b>
Me engano e vou tentando acreditar
 <b>Am7(11)</b>               <b>Dm7</b>
Meu semblante não esconde
                   <b>G7(4)</b>
O olhar fica distante
    <b>G7</b>                <b>F</b>
Perco a fome, chego até ouvir tua voz
<b>F</b>         <b>C/E</b>      <b>Dm7</b>
Na cabeça passa um filme sobre nós
                  <b>F</b>
A garganta dá um nó
                  <b>F/G</b>
Dá vontade de gritar
                     <b>C7M</b>  <b>F/G</b>
Te implorando pra voltar

<b>C7M</b>
No final de tarde

      <b>C7/Bb</b>
Tudo se mistura
    <b>F/A</b>
A saudade invade
       <b>Fm/Ab</b>     <b>F/G</b>
Chama por você
<b>C7M</b>
Mas que uma vontade
        <b>C7/Bb</b>
Chega a ser loucura
       <b>F/A</b>                  <b>Fm/Ab</b>      <b>F/G</b>      <b>C7M</b>
O meu corpo arde em chamas por você

----------------- Acordes -----------------
Am7 = X 0 2 0 1 0
Am7(11) = 5 X 5 5 3 X
C/E = 0 3 2 0 1 0
C4 = X 3 3 0 1 X
C7/Bb = X 1 2 0 1 X
C7M = X 3 2 0 0 X
C9 = X 3 5 5 3 3
Cm7 = X 3 5 3 4 3
Dm7 = X 5 7 5 6 5
Eb7 = X 6 5 6 4 X
Em7 = 0 2 2 0 3 0
F = 1 3 3 2 1 1
F#7(5-) = 2 X 2 3 1 X
F/A = 5 X 3 5 6 X
F/G = 3 X 3 2 1 X
F7M = 1 X 2 2 1 X
Fm/Ab = 4 3 3 1 X X
G#7M = 4 X 5 5 4 X
G7 = 3 5 3 4 3 3
G7(4) = 3 5 3 5 3 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FinalDeTardePage() {
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
