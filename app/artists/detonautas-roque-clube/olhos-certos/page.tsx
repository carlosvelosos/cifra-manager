import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/detonautas/olhos-certos/

const cifra = `Detonautas Roque Clube - Olhos Certos

[Intro] <b>C#m</b>  <b>A7M</b>  <b>C#m</b>  <b>A7M</b>

<span class="tablatura">[Tab - Intro]

  <b>C#m</b>              <b>A7M</b>  <b>C#m</b>              <b>A7M</b>
<span class="cnt">E|----4-5-5h7-5--4----------4-5-5h7-5-4-------|
B|-----------------5~--------------------2/5~-|
G|--------------------------------------------|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|</span></span>

[Primeira Parte]

 <b>C#m</b>            <b>A7M</b>
Tento te encontrar
 <b>C#m</b>         <b>F#7(11)</b>
Tanto pra dizer
 <b>C#m</b>      <b>A7M</b>       <b>C#m</b>  <b>A7M</b>
Meu amor,     tudo bem

 <b>C#m</b>          <b>A7M</b>
Sorte de nós dois
       <b>C#m</b>        <b>F#7(11)</b>
Quero te fazer feliz
 <b>C#m</b>      <b>A7M</b>          <b>C#m</b>  <b>A7M</b>
Meu amor,     sempre quis

[Refrão]

 <b>C#m</b>                       <b>A7M</b>
Seus olhos certos mas não sei o que dizer
<b>F#7(11)</b>           <b>A7M</b>
Eu não vou mas o tempo vem
 <b>C#m</b>                   <b>A7M</b>
Ta tudo certo mas não sei o que dizer
<b>F#7(11)</b>           <b>A7M</b>         <b>C#m</b>  <b>A7M</b>
Eu não vou mas o tempo vem aqui

[Primeira Parte]

 <b>C#m</b>            <b>A7M</b>
Tento te encontrar
 <b>C#m</b>         <b>F#7(11)</b>
Tanto pra dizer
 <b>C#m</b>      <b>A7M</b>       <b>C#m</b>  <b>A7M</b>
Meu amor,     tudo bem

 <b>C#m</b>          <b>A7M</b>
Mesmo sem te ver
 <b>C#m</b>           <b>F#7(11)</b>
Não chegou ao fim
 <b>C#m</b>      <b>A7M</b>          <b>C#m</b>  <b>A7M</b>
Seu amor,     tudo em mim

[Segunda Parte]

<b>E</b>         <b>B4</b>  <b>C#m</b>         <b>A2</b>   
  Se não for mais do que tento ser
<b>E</b>         <b>B4</b>  <b>A2</b>   
  Se não for mais

<b>E</b>         <b>B4</b>  <b>C#m</b>         <b>A2</b>   
  Se não for mais do que tento ser
<b>E</b>         <b>B4</b>  <b>A2</b>   
  Se não for

( <b>C#m</b>  <b>B4</b>  <b>A2</b> )
( <b>C#m</b>  <b>B4</b>  <b>A2</b> )
( <b>C#m</b>  <b>B4</b>  <b>A2</b> )
( <b>C#m</b>  <b>B4</b>  <b>A2</b> )

[Refrão]

 <b>C#m</b>                       <b>A7M</b>
Seus olhos certos mas não sei o que dizer
<b>F#7(11)</b>           <b>A7M</b>
Eu não vou mas o tempo vem
 <b>C#m</b>                    <b>A7M</b>
Ta tudo certo, mas não sei o que dizer
<b>F#7(11)</b>           <b>A7M</b>           
Eu não vou mas o tempo vem aqui

[Final] <b>C#m</b>  <b>B4</b>  <b>A2</b>   
        <b>C#m</b>  <b>B4</b>  <b>A2</b>

----------------- Acordes -----------------
A2 = X 0 2 2 0 0
A7M = X 0 6 6 5 X
B4 = X 2 4 4 0 0
C#m = X 4 6 6 5 0
E = 0 2 2 1 0 0
F#7(11) = 2 4 4 3 0 0`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OlhosCertosPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/detonautas/olhos-certos/"
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
