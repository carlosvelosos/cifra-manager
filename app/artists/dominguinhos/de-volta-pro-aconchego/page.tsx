import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/dominguinhos/de-volta-pro-aconchego/

const cifra = `Dominguinhos - De Volta Pro Aconchego

[Intro] <b>Bm7</b>  <b>E7(9-)</b>  <b>G/A</b>  <b>D7(9/11)</b>  <b>D/C</b>
        <b>G/B</b>  <b>Cm7</b>  <b>F7(9/11)</b>  <b>Bm7</b>  <b>E7(9-)</b>
        <b>A/C#</b>  <b>F7/C</b>  <b>G/B</b>  <b>Eb7/Bb</b>  <b>Am7</b>  <b>D7(4/9)</b>  <b>D</b>

    <b>G</b>              <b>Am7</b>     <b>Bm7</b>   <b>Am7</b>  <b>D7(4/9)</b>
Estou de volta pro meu aconchego
 <b>G</b>                   <b>E7(9-)</b>     <b>Am7</b>  <b>E7(9-)</b>
Trazendo na mala bastante  saudade
 <b>Am9</b>                   <b>E7(9-)</b>
Querendo um sorriso sincero
   <b>Am9</b>              <b>E7(9-)</b>       <b>Am9</b>
Um abraço para aliviar meu cansaço
              <b>D/C</b>     <b>Bm7</b>  <b>Am7</b>  <b>D7(4/9)</b>
E toda essa minha vontade
    <b>G</b>            <b>Am7</b>         <b>Bm7</b>  <b>D7(9/11)</b>
Que bom poder tá contigo de novo
   <b>G6</b>                <b>F/G</b>   <b>G7(9-)</b>  <b>C7M</b>  <b>E7(9-)</b>
Roçando teu corpo beijando   você
    <b>Am7</b>            <b>D/C</b>        <b>Bm7</b>
Pra mim, tu és a estrela mais linda
               <b>Em7</b>         <b>Am7</b>
Seus olhos me prendem e fascinam
             <b>D7(9/11)</b>  <b>G6</b>  <b>G#º</b>
A paz que eu gosto de ter
  <b>Am9</b>              <b>D/C</b>         <b>Bm7</b>  <b>E7(9-)</b>
É duro ficar sem você vez em quando
   <b>Am7</b>                <b>B7(9-)</b>   <b>Em7</b>  <b>E7(9-)</b>
Parece que falta um pedaço de mim
   <b>Am7</b>            <b>D7(9/11)</b>  <b>G6</b>
Me alegro na hora de regressar
           <b>G7</b>        <b>C7M</b>
Parece que vou mergulhar
     <b>E7(9-)</b>       <b>A7(13)</b>  <b>A7(13-)</b>  <b>A7</b>  <b>D7(9-)</b>
Na felicidade sem fim

           <b>Bm7</b>  <b>E7(9-)</b>      <b>G/A</b>  <b>D7(9/11)</b>
Tchu ru ru ru... tchu... ru ru
           <b>D/C</b>  <b>G/B</b>    <b>Cm7</b>  <b>F7(9/11)</b>
Tchu ru ru ru   tchu  tchu
           <b>Bm7</b>  <b>E7(9-)</b>
Tchu ru ru ru
             <b>A/C#</b>  <b>F7/C</b>            <b>G/B</b>  <b>Eb7/Bb</b>
Tchu-ru ru ru ru...      tchu ru ru ru
           <b>Am7</b>   <b>D7(4/9)</b>  <b>D</b> ( <b>G6</b>  <b>G#º</b> )
Tchu ru ru ru    ru      ru

<b>Am9</b>              <b>D/C</b>         <b>Bm7</b>    <b>E7(9-)</b>
É duro ficar sem você vez em quando
   <b>Am7</b>                <b>B7(9-)</b>   <b>Em7</b> <b>E7(9-)</b>
Parece que falta um pedaço de mim
   <b>Am7</b>            <b>D7(9/11)</b>  <b>G6</b>
Me alegro na hora de regressar
           <b>G7</b>        <b>C7M</b>
Parece que vou mergulhar
     <b>E7(9-)</b>       <b>A7(13)</b>  <b>A7(13-)</b>  <b>A7</b>  <b>D7(9-)</b>
Na felicidade sem fim

           <b>Bm7</b>  <b>E7(9-)</b>      <b>G/A</b>  <b>D7(9/11)</b>
Tchu ru ru ru... tchu... ru ru
           <b>D/C</b>  <b>G/B</b>    <b>Cm7</b>  <b>F7(9/11)</b>
Tchu ru ru ru   tchu  tchu
           <b>Bm7</b>  <b>E7(9-)</b>
Tchu ru ru ru
             <b>A/C#</b>  <b>F7/C</b>            <b>G/B</b>  <b>Eb7/Bb</b>
Tchu-ru ru ru ru...      tchu ru ru ru
           <b>Am7</b>   <b>D7(4/9)</b>  <b>D</b>
Tchu ru ru ru    ru      ru

----------------- Acordes -----------------
A/C# = X 4 X 2 5 5
A7 = X 0 2 0 2 0
A7(13) = X 0 X 0 2 2
A7(13-) = X 0 X 0 2 1
Am7 = X 0 2 0 1 0
Am9 = X 0 2 4 1 0
B7(9-) = X 2 1 2 1 X
Bm7 = X 2 4 2 3 2
C7M = X 3 2 0 0 X
Cm7 = X 3 5 3 4 3
D = X X 0 2 3 2
D/C = X 3 X 2 3 2
D7(4/9) = X 5 5 5 5 5
D7(9-) = X 5 4 5 4 X
D7(9/11) = X 5 5 5 5 5
E7(9-) = X X 2 1 3 1
Eb7/Bb = 6 X 5 6 4 X
Em7 = 0 2 2 0 3 0
F/G = 3 X 3 2 1 X
F7(9/11) = X X 3 3 4 3
F7/C = X 3 3 2 4 X
G = 3 2 0 0 0 3
G#º = 4 X 3 4 3 X
G/A = 5 X 5 4 3 X
G/B = X 2 0 0 3 3
G6 = 3 X 2 4 3 X
G7 = 3 5 3 4 3 3
G7(9-) = 3 X 3 1 0 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DeVoltaProAconchegoPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/dominguinhos/de-volta-pro-aconchego/"
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
