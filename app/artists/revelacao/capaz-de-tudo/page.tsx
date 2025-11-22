import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/revelacao/capaz-de-tudo/

const cifra = `Revelacao - Capaz De Tudo

[Intro] <b>F</b>  <b>Bb</b>  <b>C7</b>

                 <b>F7+</b>                 <b>Cm6</b>
Pra ganhar teu beijo, sou capaz de tudo
<b>F7/13</b>     <b>Bb7+</b>  <b>A#/C</b>           <b>F7+</b>
De modificar até meu jeito de ser
<b>A#/C</b>        <b>F7+</b>                     <b>Cm6</b>
Matar meu desejo, que eu te dou meu mundo
<b>F7/13</b>          <b>Bb7+</b>   <b>A#/C</b>              <b>Cm6</b>     <b>F7/13</b>
Deixa o amor entrar,....deixa eu ser seu bem querer

  <b>Bb7+</b>                <b>C/Bb</b>  <b>Am7</b>                <b>Dm7</b>
Eu quero uma ida sem volta, eu e você lado a lado
 <b>Gm7</b>            <b>A#/C</b>     <b>Cm6</b>                   <b>F7/13</b>
Vamos viver o presente sem se importar com o passado
 <b>Bb7+</b>              <b>C/Bb</b>    <b>Am7</b>                  <b>Dm7</b>
Essa paixão no meu peito, nunca senti por ninguém
  <b>Gm7</b>               <b>A#/C</b>         <b>F7+</b>      <b>F4/7</b>  <b>F7</b>
Guardo esse amor perfeito pra você meu bem
   <b>Bb7+</b>            <b>A#/C</b>               <b>F7+</b>   <b>F4/7/9</b>  <b>F7/9/11+</b>
Me aceita que eu te aceito do teu jeito
     <b>Bb7+</b>        <b>A#/C</b>            <b>F7+</b>   <b>F4/7</b>  <b>F7</b>
Me ama, vou te amar pra toda vida
  <b>Bb7+</b>            <b>C/Bb</b>   <b>Am</b>        <b>Dm</b>
Eu vejo eu teu olhar com medo de dizer
  <b>Gm7</b>             <b>A#/C</b>           <b>F7+</b>
Que quer ser a mulher da minha vida`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CapazDeTudoPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/revelacao/capaz-de-tudo/"
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
