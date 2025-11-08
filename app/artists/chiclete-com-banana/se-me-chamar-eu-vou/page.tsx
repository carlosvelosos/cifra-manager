import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/chiclete-com-banana/se-me-chamar-eu-vou/

const cifra = `Chiclete Com Banana - Se me chamar eu vou

(Tonho Matéria/Buzziga)

e Bb

    <b>Gm</b>
Se quer me levar amor
    <b>Eb</b>            <b>F</b>
me leva pro horizonte
      <b>Eb</b>
do caminho bem distante
        <b>Cm</b>            <b>F</b>
aonde exista só nós dois


  <b>Gm</b>
estou feliz
    <b>Eb</b>               <b>F</b>
com o coração palpitando
   <b>Gm</b>
você me tem
  <b>Bb</b>                      <b>D</b>
sempre em todos os seus planos


<b>Eb</b>                   <b>Cm</b>
penso contente em você
 <b>Eb</b>                <b>Cm</b>
quando preciso te ver
 <b>Eb</b>           <b>Cm</b>
vou à rua, fico na lua
<b>Eb</b>             <b>Cm</b>      <b>F</b>
à procura do teu sinal



| <b>Bb</b>        <b>Gm</b>       <b>Eb</b>
| se me chamar eu vou
|     <b>F</b>             <b>Gm</b>
| ao som que furta cor
|                <b>Eb</b>
| que furta coração
|     <b>F</b>        <b>Bb</b>      <b>Eb</b>      <b>Cm</b>  <b>F</b>
| que leva emoção, eu vou, eu vou     (bis)


        <b>Gm</b>
se teu beijo cair lá do céu
      <b>Eb</b>              <b>F</b>
que caia por cima de mim
    <b>Gm</b>
e todo lampejo de mel
      <b>Eb</b>               <b>F</b>    <b>Gm</b>  (<b>F</b>)
que caia por cima de mim, amor.

----------------- Acordes -----------------
Bb = X 1 3 3 3 1
Cm = X 3 5 5 4 3
D = X X 0 2 3 2
Eb = X 6 5 3 4 3
F = 1 3 3 2 1 1
Gm = 3 5 5 3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SeMeChamarEuVouPage() {
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
