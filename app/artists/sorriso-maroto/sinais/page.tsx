import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/sorriso-maroto/sinais/

const cifra = `Sorriso Maroto - Sinais

[Intro] <b>E7M</b>  <b>Am6</b>  <b>E7M</b>  <b>Am6</b>

<b>E</b>                 <b>E4</b>        <b>E</b>
Se é pra viver um grande amor
        <b>E4</b>             <b>C#m7</b>
Sei que é preciso cultivar
                        <b>F#m7(11)</b>
Hoje aprendi com o que passou
               <b>B7(4/9)</b>
Que cada detalhe vai somar
<b>E</b>         <b>E4</b>          <b>E</b>
Fui desatento meu amor
       <b>E4</b>             <b>C#m7</b>
Quem ama tem que reparar
                      <b>F#m7(11)</b>
Ver em você o que mudou
              <b>B7(4/9)</b>      <b>A9</b>
E se é preciso eu mudar
                          <b>F#m7</b>
Ouvir seu silêncio de mulher
                         <b>C#m7</b>
Ver os sinais que você dá
                         <b>B/D#</b>
Discretamente bate o pé
<b>B/C#</b>  <b>C#m/B</b>         <b>A9</b>
Mexe os cabelos sem parar
                          <b>Bm7(9)</b>
Pintou as unhas de café
                 <b>E7(9)</b>
Vive olhando pro nada

[Refrão]

   <b>A9</b>
Perdão amor se levei tempo demais
<b>F#m7(11)</b>
Deixei uma porção de coisas pra trás
<b>E9</b>                        <b>B/D#</b>
Errei em só olhar pra mim
<b>E/D</b>                      <b>D/E</b>
Meu bem nunca te vi assim
<b>F#m7(11)</b>
Nem só de amor se vive uma relação
<b>Am6</b>
Cada detalhe que perdi foi um grão
<b>E9</b>                     <b>B/D#</b>
E quantos grãos deixei cair
<b>E/D</b>                      <b>D/E</b>
Será que já chegou ao fim?
<b>F#m7(11)</b>                 <b>Am9</b>
Pior de tudo é perceber

Que você vinha dando sinais
          <b>E7M</b>  <b>Am6</b>  <b>E7M</b>  <b>Am6</b>
E eu não vi

----------------- Acordes -----------------
A9 = X 0 2 2 0 0
Am6 = 5 X 4 5 5 X
Am9 = X 0 2 4 1 0
B/C# = X 6 X 4 7 7
B/D# = X 6 X 4 7 7
B7(4/9) = X 2 2 2 2 2
Bm7(9) = X 2 0 2 2 X
C#m/B = 7 X 6 6 5 X
C#m7 = X 4 6 4 5 4
D/E = X X 2 2 3 2
E = 0 2 2 1 0 0
E/D = X 5 X 4 5 4
E4 = 0 2 2 2 0 0
E7(9) = X X 2 1 3 2
E7M = X X 2 4 4 4
E9 = 0 2 4 1 0 0
F#m7 = 2 X 2 2 2 X
F#m7(11) = 2 X 2 2 0 X`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SinaisPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/sorriso-maroto/sinais/"
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
