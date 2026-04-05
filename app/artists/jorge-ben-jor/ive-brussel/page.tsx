import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/jorge-ben-jor/ive-brussel/#

const cifra = `Jorge Ben Jor - Ive Brussel

(intro 3x) <b>D7M</b> <b>C7M</b> <b>A#7M</b> <b>A7M</b>

(pode fazer os acordes do verso nas casas 5,3,1,2
respectivamente e os do refrão nas casas 7 e 9)

<b>D7M</b>             <b>C7M</b>  <b>A#7M</b> <b>A7M</b>   <b>D7M</b>  <b>C7M</b> <b>A#7M</b>  <b>A7M</b>
Você com essa mania sensual ....de sentir e me olhar
<b>D7M</b>              <b>C7M</b>    <b>A#7M</b>  <b>A7M</b>       <b>D7M</b>     <b>C7M</b>    <b>A#7M</b> <b>A7M</b>
Você com esse seu jeito contagiante.... fiel e sutil de lutar

         <b>Bm7</b>             <b>E7(9)</b>          <b>C#m7</b>  <b>F#7(9)</b>
Não sei não, assim você acaba me conquistando
       <b>Bm7</b>             <b>E7(9)</b>      <b>C#m7</b>    <b>F#7(9)</b>
Não sei não, assim eu acabo me entregando   (2x)

<b>D7M</b>         <b>C7M</b>      <b>A#7M</b>    <b>A7M</b>
Pois está fazendo uma ano e meio amor
<b>D7M</b>     <b>C7M</b>  <b>A#7M</b>  <b>A7M</b>
Que eu estive por aqui
<b>D7M</b>              <b>C7M</b>      <b>A#7M</b>   <b>A7M</b>
Desconfiado, sem jeito e quase calado
<b>D7M</b>                <b>C7M</b>      <b>A#7M</b>       <b>A7M</b>
Quando fui bem recebido e desejado por você
<b>D7M</b>              <b>C7M</b>    <b>A#7M</b>   <b>A7M</b>
Nunca como eu poderia esquecer amor

    <b>Bm7</b>         <b>E7(9)</b>          <b>C#m7</b>                  <b>F#7(9)</b>
Ai, ai se naquele dia você foi tudo, foi demais pra mim
    <b>Bm7</b>         <b>E7(9)</b>         <b>C#m7</b>                 <b>F#7(9)</b>
Ai, ai se naquele dia você foi tudo, fez de mim um anjo    (4x)

         <b>Bm7</b>             <b>E7(9)</b>          <b>C#m7</b>  <b>F#7(9)</b>
Não sei não, assim você acaba me conquistando
       <b>Bm7</b>             <b>E7(9)</b>      <b>C#m7</b>    <b>F#7(9)</b>
Não sei não, assim eu acabo me entregando   (2x)

     <b>Bm7</b>  <b>E7(9)</b>   <b>C#m7</b>     <b>F#7(9)</b>   <b>Bm7</b>   <b>E7(9)</b> <b>C#m7</b> <b>F#7(9)</b>
Ive, Ive  Ive Brussel, Brussel, Brussel, Brussel    (3x)`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function IveBrusselPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jorge-ben-jor/ive-brussel/#"
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
