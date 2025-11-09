import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/revelacao/coracao-radiante/
const cifra = `

[Intro] <b>C</b>  <b>F</b>  <b>C</b>  <b>F</b>  <b>G</b>

<b>C</b>                      <b>G</b>
  Meu coração está radiante
           <b>G#º</b>          <b>Am</b>
Bate feliz acho que é amor
                           <b>G</b>  <b>G7</b>
Quando te vejo chego a sonhar
<b>C</b>                                <b>G</b>
  Penso em você quase a todo instante
           <b>G#º</b>            <b>Am</b>
Seu jeito meigo me apaixonou
                           <b>G</b>  <b>G7</b>
O que fazer pra te conquistar

<b>C</b>                                  <b>G</b>
  O que mais quero é te dar um beijo
         <b>G#º</b>         <b>Am</b>
E o seu corpo acariciar
                           <b>F</b>
Você bem sabe que eu te desejo
         <b>G7</b>            <b>C</b>
Está escrito no meu olhar
<b>C</b>                       <b>G</b>
  O seu sorriso é o paraíso
         <b>G#º</b>              <b>Am</b>
Onde contigo eu queria estar
                               <b>F</b>
Ah quem me dera se eu fosse o céu
      <b>G7</b>           <b>C</b>
Você seria o meu luar

<b>C</b>       <b>C</b>    <b>C7</b>     <b>F</b>
Eu te quero só pra mim
           <b>G7</b>         <b>C</b>
Como as ondas são do mar
         <b>Gm</b>   <b>C7</b>    <b>F</b>
Não dá pra viver assim
            <b>G7</b>        <b>C</b>
Querer sem poder te tocar
<b>C</b>       <b>C</b>    <b>C7</b>     <b>F</b>
Eu te quero só pra mim
           <b>G7</b>         <b>C</b>
Como as ondas são do mar
         <b>Gm</b>   <b>C7</b>    <b>F</b>
Não dá pra viver assim
            <b>G7</b>        <b>C</b>
Querer sem poder te tocar

<b>C</b>                      <b>G</b>
  Meu coração está radiante
           <b>G#º</b>          <b>Am</b>
Bate feliz acho que é amor
                           <b>G</b>  <b>G7</b>
Quando te vejo chego a sonhar
<b>C</b>                                <b>G</b>
  Penso em você quase a todo instante
           <b>G#º</b>            <b>Am</b>
Seu jeito meigo me apaixonou
                           <b>G</b>  <b>G7</b>
O que fazer pra te conquistar

<b>C</b>                                  <b>G</b>
  O que mais quero é te dar um beijo
         <b>G#º</b>         <b>Am</b>
E o seu corpo acariciar
                           <b>F</b>
Você bem sabe que eu te desejo
         <b>G7</b>            <b>C</b>
Está escrito no meu olhar
<b>C</b>                       <b>G</b>
  O seu sorriso é o paraíso
         <b>G#º</b>              <b>Am</b>
Onde contigo eu queria estar
                               <b>F</b>
Ah quem me dera se eu fosse o céu
      <b>G7</b>           <b>C</b>
Você seria o meu luar

<b>C</b>       <b>C</b>    <b>C7</b>     <b>F</b>
Eu te quero só pra mim
           <b>G7</b>         <b>C</b>
Como as ondas são do mar
         <b>Gm</b>   <b>C7</b>    <b>F</b>
Não dá pra viver assim
            <b>G7</b>         <b>C</b>
Querer sem poder te tocar
<b>C</b>       <b>C</b>    <b>C7</b>     <b>F</b>
Eu te quero só pra mim
           <b>G7</b>         <b>C</b>
Como as ondas são do mar
         <b>Gm</b>   <b>C7</b>    <b>F</b>
Não dá pra viver assim
            <b>G7</b>         <b>C</b>
Querer sem poder te tocar

( <b>C</b>  <b>F</b>  <b>C</b>  <b>F</b>  <b>G#7</b> )

<b>C#</b>      <b>C#</b>   <b>C#7/F</b>
Eu te quero só pra mim
<b>F#</b>          <b>G#7</b>        <b>C#</b>
 Como as ondas são do mar
         <b>G#m</b>  <b>C#7</b>    <b>F#</b>
Não dá pra viver assim
            <b>G#7</b>        <b>C#</b>
Querer sem poder te tocar
<b>C#</b>      <b>C#</b>   <b>C#7/F</b>
Eu te quero só pra mim
<b>F#</b>          <b>G#7</b>        <b>C#</b>
 Como as ondas são do mar
         <b>G#m</b>  <b>C#7</b>    <b>F#</b>
Não dá pra viver assim
            <b>G#7</b>        <b>C#</b>
Querer sem poder te tocar

----------------- Acordes -----------------
Am = 2 2 1 2
C = 2 0 1 2
C# = P6 6 6 6
C#7 = 3 4 2 3
C#7/F = 3 4 2 6
C7 = 2 3 1 2
F = 3 2 1 3
F# = 4 3 2 4
G = 5 4 3 5
G#7 = P4 5 4 6
G#m = 6 4 4 6
G#º = 6 4 P3 3
G7 = P3 4 3 5
Gm = 5 3 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CoracaoRadiantePage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    ""
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
