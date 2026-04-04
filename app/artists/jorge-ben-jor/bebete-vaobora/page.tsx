import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/jorge-ben-jor/bebete-vaobora/#

const cifra = `Jorge Ben Jor - Bebete Vaobora

[Intro] <b>F#m</b>  <b>A7</b>  <b>F#m/A</b>  <b>C#7</b>
        <b>F#m</b>  <b>A7</b>  <b>A6</b>  <b>C#7</b>

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|--------0-2-------------------|
B|------------------------------|
G|------------------------------|
D|------------------------------|
A|2-h3-h4-----------------------|
E|------------------------------|</span></span>

 <b>F#m</b>       <b>A7</b>    <b>F#m/A</b>              <b>C#7</b>
Bebete vãobora pois já está na hora
 <b>F#m</b>       <b>A7</b>    <b>F#m/A</b>              <b>C#7</b>
Bebete vãobora pois já está na hora
 <b>F#m</b>            <b>A7</b>                 <b>F#m/A</b>
Olha que o galo canto e sol vai raiar
              <b>C#7</b>
E você não parou de sambar
<b>F#m</b>                <b>A7</b>
Eu sei que você me é fiel
               <b>F#m/A</b>                 <b>C#7</b>
Mas é que os vizinhos já estão a olhar e falar
<b>F#m</b>       <b>A7</b>            <b>F#m/A</b>          <b>C#7</b>
Eu sou o seu homem e você minha mulher
    <b>F#m</b>                 <b>A7</b>
Mas quem não chora não mama
              <b>F#m/A</b>                  <b>C#7</b>
E o nosso nenê já tá chorando querendo mamar
<b>F#m</b>            <b>A7</b>               <b>F#m/A</b>
E você sabe muito bem que logo mais eu tenho que
      <b>C#7</b>
Trabalhar
       <b>F#m</b>                    <b>A7</b>     <b>F#m/A</b>
Já não posso mais chegar atrasado e nem pensar em
    <b>C#7</b>
Faltar
<b>F#m</b>          <b>A7</b>            <b>F#m/A</b>            <b>C#7</b>
Pois o novo gerente não é lá muito meu amigo
<b>F#m</b>                               <b>A7</b>              <b>F#m/A</b>
E depois como é que eu posso comprar estando a perigo
                 <b>C#7</b>          <b>F#m</b>
Novas Sandálias pra você sambar
 <b>A7</b>     <b>F#m/A</b>    <b>C#7</b>
Bebete oh Bebete
 <b>F#m</b>       <b>A7</b>   <b>F#m/A</b>             <b>C#7</b>
Bebete vãobora pois já está na hora
 <b>F#m</b>       <b>A7</b>   <b>F#m/A</b>             <b>C#7</b>
Bebete vãobora pois já está na hora`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------"),
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function BebeteVaoboraPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jorge-ben-jor/bebete-vaobora/#",
  );

  return (
    <>
      <CifraDisplay title={title || ""} cifraData={cifraStructure} />
      <FloatingMenu />
    </>
  );
}
