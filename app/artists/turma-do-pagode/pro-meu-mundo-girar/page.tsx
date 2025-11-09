import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/turma-do-pagode/pro-meu-mundo-girar/

const cifra = `Turma do Pagode - Pro Meu Mundo Girar

<b>D7+</b>
Eu preciso te ver
        <b>G7+</b>        <b>G6</b>
Pro meu fogo acender
      <b>D7+</b>
Eu préciso te amar
       <b>G7+</b>       <b>A7</b>    <b>F#7</b>
Pro meu mundo girar
( <b>Bm</b>    <b>F#m7</b> ) (4x)      <b>Bm</b>    <b>A7</b>
Lêlêlêlêlêlêlê lêlêlêlêlêlêlê

<b>D7+</b>                     <b>Gm9</b>
E foi a saudade quem me avisou
<b>D7+</b>                <b>Gm9</b>
E descobriu, sem você nada sou
<b>F7+</b>       <b>F6</b>      <b>Bb7+</b>
Sinto sua falta e vivo chorando
<b>F7+</b>          <b>F6</b>           <b>Em7/5-</b>     <b>A7</b>
Você está gravado em meu pei ........to
      <b>D7+</b>
Eu preciso te ver
         <b>G7+</b>      <b>G6</b>
Pro meu fogo acender

      <b>D7+</b>
Eu preciso te amar
        <b>G7+</b>     <b>F#7</b>
Pro meu mundo girar

<b>Bm</b>             <b>Am7</b>             <b>D79</b>       <b>G7+</b>
Pra me enlouquecer basta eu te       tocar
<b>G6</b>               <b>C#m7/5-</b>     <b>F#7</b>         <b>Bm</b>
Me dá mais prazer, como é bom te amar
             <b>Am7</b>       <b>D79</b>    <b>G7+</b>
Num simples olhar já me dominou
<b>G6</b>            <b>C#m7/5-</b>     <b>F#7</b>     <b>Bm</b>   (<b>A7</b>)
Só você não vê que me enfeitiçou

----------------- Acordes -----------------
A7 = X 0 2 0 2 0
Am7 = X 0 2 0 1 0
Bb7+ = X 1 3 2 3 1
Bm = X 2 4 4 3 2
C#m7/5- = X 4 5 4 5 X
D7+ = X X 0 2 2 2
D79 = X 5 4 5 5 X
Em7/5- = X X 2 3 3 3
F#7 = 2 4 2 3 2 2
F#m7 = 2 X 2 2 2 X
F6 = 1 X 0 2 1 X
F7+ = 1 X 2 2 1 X
G6 = 3 X 2 4 3 X
G7+ = 3 X 4 4 3 X
Gm9 = 3 5 7 3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ProMeuMundoGirarPage() {
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
