import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/martinho-da-vila/disritmia/#

const cifra = `Martinho Da Vila - Disritmia

[Intro] <b>Gm7</b>  <b>C7(9)</b>

[Primeira Parte]

<b>Gm7</b>       <b>C7(9)</b>  <b>Gm7</b>
Eu quero me esconder debaixo
<b>C7(9)</b>     <b>Gm7</b>       <b>C7(9)</b>     <b>Gm7</b>
Dessa tua saia prá fugir do mundo
<b>Dm7(b5)</b>            <b>G7</b>  <b>Dm7(b5)</b>
Pretendo também me embrenhar
<b>G7</b>        <b>Dm7(b5)</b>     <b>G7</b>    <b>Cm</b>
No emaranhado desses teus cabelos
   <b>Cm</b>         <b>Eb/Bb</b>     <b>Cm/A</b>  <b>Cm/G</b>
Preciso transfundir teu sangue
        <b>D/F#</b>                 <b>Gm</b>
Pro meu coração que é tão vagabundo

[Refrão]

     <b>Cm</b>      <b>F7/A</b>      <b>Bb6</b>
Me deixa te trazer um dengo
        <b>Eb7</b>     <b>Am7(b5)</b>   <b>D7</b>  <b>G7sus4</b>  <b>G7</b>
Prá num cafuné fazer os meus apelos
   <b>Cm</b>       <b>F7/A</b>      <b>Bb6</b>
Me deixa te trazer um dengo
         <b>Eb7</b>    <b>Am7(b5)</b>  <b>D7</b>    <b>Gm</b>
Prá num cafuné fazer os meus apelos

[Segunda Parte]

   <b>Gm7</b>     <b>C7(9)</b>    <b>Gm7</b>
Eu quero ser exorcizado
    <b>C7(9)</b>  <b>Gm7</b>         <b>C7(9)</b>   <b>Gm7</b>
Pela água benta desse olhar infindo
<b>Dm7(b5)</b>              <b>G7</b>
Que bom é ser fotografado
<b>Dm7(b5)</b>   <b>G7</b>     <b>Dm7(b5)</b>  <b>G7</b>    <b>Cm</b>
Mas pelas retinas desses olhos lindos
  <b>Cm</b>     <b>Eb/Bb</b>
Me deixe hipnotizado
<b>Cm/A</b>  <b>Cm/G</b>    <b>D7/F#</b>              <b>Gm</b>
Prá acabar de vez com essa disritmia

[Refrão]

    <b>Cm</b>        <b>F7/A</b>      <b>Bb6</b>
Vem logo, vem curar teu nego
       <b>Eb7</b>    <b>Am7(b5)</b>     <b>D7</b>  <b>G7sus4</b>  <b>G7</b>
Que chegou de porre lá da boêmia
    <b>Cm</b>        <b>F7/A</b>      <b>Bb6</b>
Vem logo, vem curar teu nêgo
      <b>Eb7</b>     <b>Am7(b5)</b>     <b>D7</b>  <b>Gm</b>
Que chegou de porre lá da boêmia`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function DisritmiaPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/martinho-da-vila/disritmia/#"
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
