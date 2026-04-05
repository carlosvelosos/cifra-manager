import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/gustavo-lins/deixa-eu-te-querer/#

const cifra = `Gustavo Lins - Deixa Eu Te Querer

<b>E</b>

Introdução:  <b>A7+</b> / % / <b>G#m7</b> / <b>C#m7</b> / <b>F#m7</b> / <b>C7+/G</b> , <b>F#m7(b5)</b> / <b>E9</b> / <b>A/B</b> /

<b>E9</b>             <b>F#m7/B</b>     <b>C#m7</b>
Hoje eu acordei pensando em você
<b>A/B</b>         <b>G#m7</b>
Nem sei porque
<b>C#m7</b>        <b>F#m7/9</b>
Talvez seja besteira
<b>F#m7/B</b>                  <b>E7+</b>
Uma momento de fraqueza
<b>D#m7(b5)</b>  <b>G#7(9-)</b> <b>C#m7</b>
Não vou mais chorar 
   <b>F#m7(11)</b>     <b>G#m7</b>
Você quiz assim
  <b>C#m7</b>          <b>F#m7/9</b>
Cada um foi pro seu lado
     <b>F#m7/B</b>           <b>E9</b>       <b>Bm7/E</b>
E deu de cara com a tristeza
<b>A7+</b>     <b>C°</b>              <b>C#m7</b>
Você, já tinha me avisado
  <b>E79</b>          <b>A7/9+</b>
Que tem um compromisso
     <b>G7(9-)</b>   <b>C#m7</b>
Eu sei que eu to errado
   <b>C#m7</b>       <b>D7+</b>
Mas o que vou fazer
 <b>D7+</b>           <b>F#m7/B</b>   <b>B7/4</b>   <b>B7</b>
Perdoa eu não consigo te esquecer
<b>E9</b>    <b>A7+</b>  <b>G#m7</b>
Amor... Será
 <b>C#m7</b>                      <b>F#m7</b>
que vai ser sempre assim com você
            <b>G#m7</b>               <b>A7+</b>
Tenho tanto aqui pra te oferecer
               <b>B7-4</b>
Pelo menos deixa eu te querer
<b>E9</b>    <b>A7+</b>        <b>G#m7</b>
Amor... Não me diz
 <b>C#m7</b>  ---- <b>G#m</b>         <b>F#m7</b>
Que essa nova paixão sem porque
           <b>G#m7</b>               <b>A9</b>
Te faz tão feliz como eu Já  fiz
              <b>B7-4</b>
Impossível isso acontecer    SEGUNDA PARTE /  E7/4  / E7



OBS: FINAL E9    / A7+ / A7+ / E7+ /`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function DeixaEuTeQuererPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/gustavo-lins/deixa-eu-te-querer/#"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
      />
      <FloatingMenu />
    </>
  );
}
