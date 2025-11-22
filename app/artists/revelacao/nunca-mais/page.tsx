import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/revelacao/nunca-mais/

const cifra = `Revelacao - Nunca Mais

[Intro] <b>F7M</b>  <b>Bb7M</b>  <b>F7M</b>  <b>A#/C</b>
        <b>F7M</b>  <b>Bb7M</b>  <b>F7M</b>
        <b>Gm7</b>  <b>A#/C</b>  <b>F7M</b>

 <b>F7M</b>   <b>Bb</b>           <b>F7M</b>
Nunca mais quero ver você triste assim
<b>C</b>             <b>Bb</b>       <b>F7M</b>   <b>A#/C</b>
Quando a gente briga é ruim
<b>F7M</b>    <b>Bb</b>            <b>F7M</b>
É melhor a gente tentar se entender
<b>C</b>                   <b>Bb</b>           <b>F7M</b>
Que é para o nosso amor não se perder

<b>A7</b>              <b>Dm</b>
Magoei sem motivo o seu coração
<b>E7/B</b>               <b>Am7</b>
Fui além da maldade peço perdão
<b>G7</b>               <b>C</b>
Estou aqui na esperança de recomeçar
<b>G7</b>                <b>Gm7</b>      <b>Cm6</b>         <b>F7(13)</b>
Cheio de amor, louco pra te beijar te abraçar

<b>Bb7M</b>                   <b>F7M</b>
Quando a saudade bate no peito é assim
       <b>C</b>            <b>C7</b>         <b>F7M</b>           <b>F7(13)</b>
Dói demais, tira a paz deixa a gente incapaz de viver
<b>Bb7M</b>                           <b>F7M</b>
Errar é humano e ninguém é perfeito meu bem
           <b>C</b>                <b>Bb</b>        <b>F7M</b>
E não tem jeito eu não posso viver sem você`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function NuncaMaisPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/revelacao/nunca-mais/"
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
