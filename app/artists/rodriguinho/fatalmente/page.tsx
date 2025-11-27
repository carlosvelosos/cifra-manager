import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/rodriguinho/fatalmente/#tabs=false&instrument=cavaco

const cifra = `Rodriguinho - Fatalmente

[Intro] <b>C7M</b> <b>Am7</b> <b>Fm</b>  <b>Bb7M</b>
        <b>C7M</b> <b>Am7</b> <b>G#7M</b>  <b>G7(4/9)</b>

<b>C7M</b>      <b>G#7M</b>          <b>Fm</b>           <b>G7(4/9)</b>       <b>C7M</b>
Passei a vida inteira procurando alguém como você
         <b>G#7M</b>          <b>Fm</b>           <b>G7(4/9)</b>       <b>C7M</b>
Nunca imaginei que um dia eu fosse me arrepender
          <b>G#7M</b>               <b>Fm</b>          <b>G7(4/9)</b>       <b>C7M</b>
Você tão linda assim não passava essa imagem para mim
           <b>G#7M</b>            <b>Fm</b>        <b>G7(4/9)</b>         <b>C7M</b>
Achei que nossa história nunca podesse chegar ao fim

        <b>Dm7</b>     <b>Em7</b>         <b>Gm7</b>  <b>C7</b>   <b>F7M</b>
Mas chegou, acabou, é hora de dizer adeus
              <b>Fm6</b>         <b>G7(4/9)</b>        <b>C/G</b>
Vacilou terminou, e o culpado não foi eu
       <b>F/A</b>     <b>G/B</b>          <b>Gm/Bb</b>     <b>F#m7(5-)</b>
Mas chegou, acabou, é hora de dizer adeus
               <b>Fm6</b>        <b>G7(4/9)</b>       <b>C7M</b>
vacilou, terminou, por que isso aconteceu

                 <b>C7</b>              <b>F7M</b>           <b>Bb7M</b>            <b>C7M</b>
Me entreguei de corpo inteiro e mesmo assim você quis outro alguém
             <b>C/Bb</b>      <b>F/A</b>         <b>Fm/Ab</b>          <b>C7M</b>
O que aconteceu comigo eu não desejo pra mais ninguém
               <b>C7(9)</b>     <b>F7M</b>          <b>Bb7M</b>         <b>C7M</b>
Eu sei que um dia você vai chegar pedindo pra voltar
               <b>C/Bb</b>        <b>F/A</b>       <b>Fm/Ab</b>           <b>C7M</b>
Sinto muito é tarde, fatalmente terá outra em seu lugar`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FatalmentePage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/rodriguinho/fatalmente/#tabs=false&instrument=cavaco"
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
