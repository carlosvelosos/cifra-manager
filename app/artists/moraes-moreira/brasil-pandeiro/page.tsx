import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/moraes-moreira/brasil-pandeiro/#

const cifra = `Moraes Moreira - Brasil Pandeiro

[Intro] <b>G7</b>  <b>C7M</b>  <b>C#°</b>  <b>Dm7</b>  <b>G/B</b>
        <b>Em7(5-)</b>  <b>A7</b>  <b>Dm7</b>  <b>G7</b>

         <b>C7M</b>        <b>C#°</b>         <b>Dm7</b>         <b>G7</b>    <b>C7M(9)</b>
Chegou a hora dessa gente bronzeada mostrar seu valor
          <b>Gm7</b>                 <b>C7(9)</b>                <b>F7M</b>
Eu fui à Penha, fui pedir a padroeira para me ajudar
        <b>G#°</b>         <b>G7</b>             <b>Dm7</b>           <b>G7</b>
Salve o Morro do Vintém, pendura a saia, eu quero ver
         <b>Dm7</b>       <b>G7</b>           <b>Dm7</b>          <b>G7</b>       <b>C7M</b>  <b>G7</b>
Eu quero ver o Tio Sam tocar pandeiro para o mundo sambar

       <b>C7M</b>        <b>C#°</b>         <b>Dm7</b>         <b>G7</b>    <b>C7M(9)</b>
O Tio Sam está querendo conhecer a nossa batucada
       <b>Gm7</b>                   <b>C7(9)</b>              <b>F7M</b>
Anda dizendo que o molho da baiana melhorou seu prato
      <b>G#°</b>        <b>G7</b>        <b>Dm7</b>     <b>G7</b>
Vai entrar no cuscuz, acarajé e abará
        <b>Dm7</b>          <b>G7</b>        <b>Dm7</b>       <b>G7</b>     <b>C7M</b>  <b>C#°</b>
Na Casa Branca já dançou a batucada de ioiô, iaiá

   <b>Dm7</b>        <b>G/B</b>           <b>Em7(5-)</b>      <b>A7</b>        <b>Dm7</b>
Brasil, esquentai vossos pandeiros  iluminai os terreiros
        <b>G7</b>          <b>C7M</b>  <b>C#°</b>  <b>Dm7</b>        <b>G/B</b>       <b>Em7(5-)</b>
Que nós queremos sambar          há quem sambe diferente
        <b>A7</b>             <b>Dm7</b>         <b>G7</b>         <b>C7M</b>  <b>C#°</b>
Noutras terras, outra gente num batuque de matar
    <b>Dm7</b>     <b>G7</b>           <b>G/B</b>       <b>Em7(5-)</b>
Batucada, reuni nossos valores  pastorinhas
<b>A7</b>     <b>Dm7</b>         <b>G7</b>              <b>C7M</b>           <b>C#°</b>
E cantores de expressão que não tem par, oh meu Brasil

    <b>Dm7</b>        <b>G/B</b>          <b>Em7(5-)</b>    <b>A7</b>
Brasil,  esquentai vossos pandeiros  iluminai
      <b>Dm7</b>            <b>G7</b>          <b>Gm7</b>  <b>C7(9)</b>
Os terreiros que nós queremos sambar
   <b>F7M</b>    <b>Bb7(9)</b>             <b>Em7(5-)</b>    <b>A7</b>
Brasil,  esquentai vossos pandeiros  iluminai
      <b>Dm7</b>            <b>G7</b>          <b>C7M</b>
Os terreiros que nós queremos sambar

   <b>Bb7M</b>    <b>C7M</b>     <b>Bb7M</b>    <b>C7M</b>
Ô, ô,   sambar, iêiê,   sambar
            <b>Bb7M</b>    <b>C7M</b>             <b>Bb7M</b>    <b>C7M</b>
Queremos sambar, ioiô,  queremos sambar, iaiá`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function BrasilPandeiroPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/moraes-moreira/brasil-pandeiro/#"
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
