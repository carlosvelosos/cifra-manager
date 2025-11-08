import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/exaltasamba-musicas/a-carta/

const cifra = `Exaltasamba - A Carta

[Intro] <b>B7(4)</b>  <b>A/E</b>  <b>B/E</b>  <b>A/E</b>  <b>B/E</b>  <b>Am7(9)</b>  <b>Am7(11)/G</b>

<b>F#m7(5-)</b>      <b>F7(5-)</b>        <b>Em7</b>      <b>G7(13)</b>           <b>F#m7(5-)</b>
Não        existem mais palavras que eu possa escrever
           <b>B7(9-/13-)</b>  <b>G7M</b>  <b>C7M</b>          <b>F#m7(5-)</b>
Pra falar de tanto amor, entenda, por favor
         <b>F7(5-)</b>         <b>Em7</b>             <b>Am7(9)</b>
Que uma carta é muito pouco, para revelar
     <b>B7(9-/13-)</b>   <b>E7M(9)</b>   <b>A/E</b>               <b>E7M(9)</b>
O retrato da tristeza     e a cicatriz da saudade
    <b>Am7</b>         <b>D/C</b>     <b>G7M</b>
Que você deixou      no meu peito
  <b>C7M(9)</b>               <b>G7M</b>
Tatuagem de amor não tem jeito
<b>Cm</b>         <b>Cm7M</b>      <b>G7M</b>   <b>B7(4)</b>   <b>B7(9)</b>     <b>B7(4)</b>               <b>B7</b>
Nunca vai sair de    mim essa     dor

<b>E7M</b>           <b>Cº</b>           <b>C#m7</b>
Entenda o que eu vou te dizer
     <b>G#7(5+)</b>    <b>Bm7(11)</b>         <b>E/D</b>       <b>A7M(9)</b>
Dois pontos,   vem de volta pro meu coração
  <b>E/G#</b>
Exclamação!
<b>F#m7</b>          <b>Ab/C</b>     <b>C#m7</b>
Não posso viver sem você
            <b>C#m7/B</b>         <b>F#/A#</b>
Não tenho razão, nem porque
                       <b>B7(4)</b>  <b>B7(9)</b>
Me acostumar com a sauda___de

<b>E7M</b>           <b>Cº</b>      <b>C#m7</b>     <b>G#7(5+)</b>   <b>Bm7(11)</b>
Nem vírgula vai separar nessa ora____ção
           <b>E/D</b>        <b>A7M(9)</b>
Teu nome da minha paixão
     <b>E/G#</b>
Não leve a mal
<b>F#m7</b>               <b>Ab/C</b>
Eu sei que eu não sou escritor
<b>C#m7</b>       <b>C#m7/B</b>     <b>F#/A#</b>
É só uma carta de amor
                             <b>B7(4)</b>  <b>B7(9)</b>
De alguém que te quer de verda__de

----------------- Acordes -----------------
A/E = 0 X 2 2 2 0
A7M(9) = X 0 2 1 0 0
Ab/C = X 3 X 1 4 4
Am7 = X 0 2 0 1 0
Am7(11)/G = 3 0 0 0 1 0
Am7(9) = X X 7 5 8 7
B/E = X 7 9 8 7 7
B7 = X 2 1 2 0 2
B7(4) = X 2 4 2 5 2
B7(9) = X 2 1 2 2 X
B7(9-/13-) = X 2 1 2 1 3
Bm7(11) = X 2 0 2 3 0
C#m7 = X 4 6 4 5 4
C#m7/B = 7 4 6 4 5 4
C7M = X 3 2 0 0 X
C7M(9) = X 3 2 4 3 X
Cm = X 3 5 5 4 3
Cm7M = X 3 5 4 4 3
Cº = X 3 4 2 4 2
D/C = X 3 X 2 3 2
E/D = X 5 X 4 5 4
E/G# = 4 X 2 4 5 X
E7M = X X 2 4 4 4
E7M(9) = X 7 6 8 7 X
Em7 = 0 2 2 0 3 0
F#/A# = 6 X 4 6 7 X
F#m7 = 2 X 2 2 2 X
F#m7(5-) = 2 X 2 2 1 X
F7(5-) = 1 X 1 2 0 X
G#7(5+) = 4 X 4 5 5 4
G7(13) = 3 X 3 4 5 X
G7M = 3 X 4 4 3 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ACartaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/exaltasamba-musicas/a-carta/"
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
