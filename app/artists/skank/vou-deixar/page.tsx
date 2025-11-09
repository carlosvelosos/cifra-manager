import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/skank/vou-deixar/

const cifra = `Skank - Vou Deixar

[Intro]

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0---------------------|
B|-5-5-3-3-2-2-3-3-5-5-3-3-2-2-3-3---------------------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0---------------------|
B|-5-5-3-3-2-2-3-3-5-5-3-3-2-2-0-0---------------------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

[Primeira Parte]

        <b>D</b>  <b>F#</b>
Vou deixar
        <b>G</b>       <b>Gm</b>
A vida me levar
                 <b>D</b>  <b>F#</b>
Pra onde ela quiser
          <b>G</b>        <b>Gm</b>
Estou no meu lugar

Você já sabe onde é

[Segunda Parte]

<b>D</b>  <b>Bm</b>   <b>G</b>           <b>A</b>            <b>D</b>
       Não conte o tempo por nós   dois
 <b>Bm</b>  <b>G</b>           <b>A</b>
Pois a qualquer hora
         <b>D</b>      <b>Bm</b>
Posso estar de volta
 <b>G</b>            <b>A</b>
Depois que a noite terminar

[Terceira Parte]

        <b>D</b>  <b>F#</b>
Vou deixar
        <b>G</b>       <b>Gm</b>
A vida me levar
                 <b>D</b>  <b>F#</b>
Pra onde ela quiser
          <b>G</b>     <b>Gm</b>
Seguir a direção

De uma estrela qualquer

[Quarta Parte]

<b>D</b>  <b>Bm</b>  <b>G</b>         <b>A</b>        <b>D</b>       <b>Bm</b>
      Não quero hora pra voltar, não
 <b>G</b>       <b>A</b>         <b>D</b>       <b>Bm</b>
Conheço bem a solidão, me solta

<b>G</b>          <b>A</b>
E deixa a sorte me buscar

[Quinta Parte]

<b>Em</b>                        <b>A</b>   <b>Em</b>
   Eu já estou na sua estrada
                     <b>A</b>
Sozinho não enxergo nada

[Sexta Parte]

<b>Em</b>            <b>F#m</b>
   Mas vou ficar aqui
  <b>G</b>                <b>F#m</b>  <b>Em</b>
Até que o dia amanheça
          <b>F#m</b>
Vou esquecer de mim
     <b>A</b>
E você se puder não me esqueça

[Sétima Parte]

        <b>D</b>  <b>F#</b>
Vou deixar
       <b>G</b>        <b>Gm</b>
O coração bater
                  <b>D</b>  <b>F#</b>
Na madrugada sem fim
          <b>G</b>         <b>Gm</b>
Deixar o sol te ver

Ajoelhada por mim, sim

[Oitava Parte]

<b>D</b>  <b>Bm</b>  <b>G</b>         <b>A</b>        <b>D</b>       <b>Bm</b>
      Não tenho hora pra voltar, não
<b>G</b>       <b>A</b>            <b>D</b>     <b>Bm</b>
Eu agradeço tanto a sua escolta
 <b>G</b>           <b>A</b>
Mas deixa a noite terminar

[Nona Parte]

<b>Em</b>                        <b>A</b>   <b>Em</b>
   Eu já estou na sua estrada
                     <b>A</b>
Sozinho não enxergo nada

[Décima Parte]

<b>Em</b>            <b>F#m</b>
   Mas vou ficar aqui
  <b>G</b>                <b>F#m</b>  <b>Em</b>
Até que o dia amanheça
          <b>F#m</b>
Vou esquecer de mim
     <b>A</b>
E você se puder não me esqueça

[Solo] <b>D</b>  <b>F#</b>  <b>G</b>  <b>Gm</b>
       <b>D</b>  <b>F#</b>  <b>G</b>  <b>Gm</b>

<span class="tablatura">[Tab - Solo]

Parte 1 de 2
              <b>D</b>      <b>F#</b>            <b>G</b>      <b>Gm</b>         <b>D</b>
<span class="cnt">E|-----------------------------------------------------|
B|-3--5--3--5b7rb7r------5--5--5/7\\5---3~--------------|
G|-----------------------------------------3---3/5\\3\\2-|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
        <b>F#</b>            <b>G</b>         <b>Gm</b>
<span class="cnt">E|-----------------------------------------------------|
B|-5/7\-----5--5--5/7\\5---3~---------------------------|
G|------------------------------3---3/5-3-2------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

[Final] <b>D</b>  <b>Bm</b>  <b>G</b>  <b>A</b>        

<span class="tablatura">[Tab - Final]

   <b>D</b>     <b>Bm</b>   <b>G</b>    <b>A</b>
<span class="cnt">E|-----------------------------------------------------|
B|-----3-0-------0-------------------------------------|
G|-2---------------2-0---0-----------------------------| (4x)
D|---------------------4-------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

 <b>D</b>    <b>Bm</b>   <b>G</b>         <b>A</b>
Não, não, não quero hora
     <b>D</b>       <b>Bm</b>
Pra voltar, não
 <b>G</b>       <b>A</b>         <b>D</b>       <b>Bm</b>
Conheço bem a solidão, me solta
<b>G</b>          <b>A</b>
E deixa a sorte me buscar

 <b>D</b>    <b>Bm</b>   <b>G</b>         <b>A</b>
Não, não, não tenho hora
     <b>D</b>       <b>Bm</b>
Pra voltar, não
<b>G</b>       <b>A</b>            <b>D</b>     <b>Bm</b>
Eu agradeço tanto a sua escolta
 <b>G</b>           <b>A</b>
Mas deixa a noite terminar

[Instrumental] <b>D</b>  <b>Bm</b>  <b>G</b>  <b>A</b>

<span class="tablatura">[Tab - Instrumental]

   <b>D</b>     <b>Bm</b>   <b>G</b>    <b>A</b>
<span class="cnt">E|-----------------------------------------------------|
B|-----3-0-------0-------------------------------------|
G|-2---------------2-0---0-----------------------------| (8x)
D|---------------------4-------------------------------|
A|-----------------------------------------------------|</span></span>
E|-----------------------------------------------------|

----------------- Acordes -----------------
A = X 0 2 2 2 0
Bm = X 2 4 4 3 2
D = X X 0 2 3 2
Em = 0 2 2 0 0 0
F# = 2 4 4 3 2 2
F#m = 2 4 4 2 2 2
G = 3 5 5 4 3 3
Gm = 3 5 5 3 3 3`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VouDeixarPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/skank/vou-deixar/"
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
