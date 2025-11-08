import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/pixote/brilho-de-cristal/

const cifra = `Grupo Pixote - Brilho de Cristal

Intro: <b>D6(9)</b> <b>E7(9)</b> <b>D6(9)</b> <b>Em7</b> <b>F#m7</b>

<b>G7M</b>     <b>G/A</b>      <b>D6(9)</b>    <b>D(#5)</b>
   É o brilho do seu  olhar
         <b>E7(9)</b>
Que me leva a loucura pode ser
   <b>G7M</b>  <b>G/A</b>           <b>D7M</b>  <b>Am7</b>
Minha cura   essa febre de amar
      <b>D7(9)</b> <b>G#m7(b5)</b>      <b>Gm6</b>
Faz o que quer de mim     faz um
  <b>D7M</b>    <b>A/C#</b> <b>Bm7</b>      <b>Bm7/A</b>
Bem faz um mal  nosso amor será
<b>Em7</b>    <b>F#m7</b>   <b>G/A</b>       <b>D6(9)</b>
Sempre assim um brilho de cristal

<b>G/A</b>  <b>D6(9)</b>
Quem me dera, ao menos uma vez poder
    <b>E/D</b>
Te abraçar e te beijar de pertinho
   <b>Em7</b>       <b>G/A</b>    <b>D6(9)</b> <b>G/A</b>
Desvendar o brilho desse olhar

   <b>D6(9)</b>
Que ilumina minha vida, triste vida
   <b>E/D</b>
Sem você não sou ninguém vem cá me
<b>Em7</b>    <b>G/A</b>       <b>D6(9)</b> <b>Am7</b> <b>D7(9)</b>
Dar, me dar você meu bem

    <b>G7M</b>      <b>C7(9)</b>    <b>F#m7</b>
Porque ando tão sozinho precisando
  <b>Bm7</b>     <b>Em7</b>        <b>G/A</b>
De carinho juro por Deus jamais amei
 <b>D7M</b>  <b>Bm7</b>     <b>C#m7(b5)</b>   <b>F#7(b13)</b>
Assim    é desejo    demais    vem
  <b>Bm7(9)</b>      <b>Bm7/A</b>  <b>E/G#</b>
Pra ser   minha paz  abra o seu
  <b>E7</b>      <b>G/A</b>
Coração vem pra mim

         <b>D6(9)</b>
É o brilho do seu  olhar...

 <b>G/A</b>        <b>D6(9)</b>  <b>Bb7M</b> <b>C7M</b> <b>D7M</b>
Um brilho de cristal

----------------- Acordes -----------------
A/C# = 7 6 5 7
Am7 = 7 P5 5 5
Bb7M = 3 2 3 3
Bm7 = 4 2 3 4
Bm7(9) = 7 6 0 0
Bm7/A = 12 11 10 9
C#m7(b5) = 5 4 P2 2
C7(9) = 2 3 3 5
C7M = 2 0 0 2
D(#5) = 12 11 11 12
D6(9) = 4 2 0 2
D7(9) = 4 5 5 7
D7M = 0 P2 2 4
E7 = 2 1 0 0
E7(9) = 2 1 3 4
Em7 = 2 0 0 0
F#7(b13) = 14 11 11 12
F#m7 = 4 P2 2 2
G#m7(b5) = 0 1 0 0
G7M = 5 4 3 4
Gm6 = 0 0 0 2`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function BrilhoDeCristalPage() {
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
