import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/charlie-brown-jr/ela-vai-voltar/

const cifra = `Charlie Brown Jr. - Ela Vai Voltar (Todos Os Defeitos de Uma Mulher Perfeita)

Afinação: Db Ab Db Gb Bb Eb

[Intro] <b>D9</b>  <b>C9</b>  <b>G/B</b>  <b>Gm/Bb</b>
        <b>D9</b>  <b>C9</b>  <b>G/B</b>  <b>Gm/Bb</b>

[Tab - Intro] 

<span class="tablatura">Parte 1 de 2
   <b>D9</b>            <b>C9</b>
<span class="cnt">E|---0-------x-------------x--------------------------|
B|-----3---3-x-----3-----3-x--------------------------|
G|-------2---x-0-----0-----x--------------------------|
D|-0---------x---------0---x--------------------------|
A|-0---------x---3---------x--------------------------|
E|-0---------x-------------x--------------------------|</span></span>

<span class="tablatura">Parte 1 de 2  
    <b>G/B</b>            <b>Gm/Bb</b>
<span class="cnt">E|--------------x-------------------------------------|
B|-----3------3-x-----3-----3-------------------------|
G|-0-----0------x-0-----0-----------------------------|
D|---------0----x---------0---------------------------|
A|---2----------x---1---------------------------------|
E|----------------------------------------------------|</span></span>

[Refrão] 

<b>D9</b>
   Minha mente
         <b>C9</b>
Nem sempre tão lúcida
      <b>G/B</b>            <b>Gm/Bb</b>
É fértil e me deu a voz
<b>D9</b>
   Minha mente
         <b>C9</b>
Nem sempre tão lúcida
    <b>G/B</b>
Fez ela se afastar
 <b>Gm/Bb</b>   <b>D9</b>     <b>C9</b>  <b>G/B</b>  <b>Gm/Bb</b>
Mas ela vai voltar
         <b>D9</b>     <b>C9</b>  <b>G/B</b>  <b>Gm/Bb</b>
Mas ela vai voltar

[Primeira Parte] 

        <b>D9</b>
Ela não é

Do tipo de mulher
     <b>C9</b>
Que se entrega na primeira
 <b>G/B</b>
Mas melhora na segunda
     <b>Gm/Bb</b>
E o paraíso é na terceira
  <b>D9</b>
Ela tem força
              <b>C9</b>
Ela tem sensibilidade

Ela é guerreira
    <b>G/B</b>
Ela é uma deusa
              <b>Gm/Bb</b>
Ela é mulher de verdade

<b>D9</b>
   Ela é daquelas
              <b>C9</b>
Que tu gosta na primeira
             <b>G/B</b>
Se apaixona na segunda
                 <b>Gm/Bb</b>
E perde a linha na terceira
<b>D9</b>
   Ela é discreta
          <b>C9</b>
E cultua bons livros
         <b>G/B</b>
E ama os animais
               <b>Gm/Bb</b>
Tá ligado, eu sou o bicho

[Refrão] 

<b>D9</b>
   Minha mente
         <b>C9</b>
Nem sempre tão lúcida
      <b>G/B</b>            <b>Gm/Bb</b>
É fértil e me deu a voz
<b>D9</b>
   Minha mente
         <b>C9</b>
Nem sempre tão lúcida
    <b>G/B</b>
Fez ela se afastar
 <b>Gm/Bb</b>   <b>D9</b>     <b>C9</b>  <b>G/B</b>  <b>Gm/Bb</b>
Mas ela vai voltar
         <b>D9</b>     <b>C9</b>  <b>G/B</b>  <b>Gm/Bb</b>
Mas ela vai voltar

( <b>D9</b>  <b>C9</b>  <b>G/B</b>  <b>Gm/Bb</b> )
( <b>D9</b>  <b>C9</b>  <b>G/B</b>  <b>Gm/Bb</b> ) 

[Segunda Parte] 

 <b>D9</b>
Deixa eu te levar
  <b>C9</b>       <b>G/B</b>      <b>Gm/Bb</b>
Pra ver o mundo, baby
 <b>D9</b>              <b>C9</b>
Deixa eu te mostrar
             <b>G/B</b>       <b>Gm/Bb</b>
O melhor que eu posso ser

 <b>D9</b>
Deixa eu te levar
  <b>C9</b>       <b>G/B</b>      <b>Gm/Bb</b>
Pra ver o mundo, baby
 <b>D9</b>              <b>C9</b>
Deixa eu te mostrar
             <b>G/B</b>       <b>Gm/Bb</b>
O melhor que eu posso ser

[Primeira Parte] 

        <b>D9</b>
Ela não é

Do tipo de mulher
     <b>C9</b>
Que se entrega na primeira
 <b>G/B</b>
Mas melhora na segunda
     <b>Gm/Bb</b>
E o paraíso é na terceira
  <b>D9</b>
Ela tem força
              <b>C9</b>
Ela tem sensibilidade

Ela é guerreira
    <b>G/B</b>
Ela é uma deusa
              <b>Gm/Bb</b>
Ela é mulher de verdade

<b>D9</b>
   Ela é daquelas
              <b>C9</b>
Que tu gosta na primeira
             <b>G/B</b>
Se apaixona na segunda
                 <b>Gm/Bb</b>
E perde a linha na terceira
<b>D9</b>
   Ela é discreta
          <b>C9</b>
E cultua bons livros
         <b>G/B</b>
E ama os animais
               <b>Gm/Bb</b>
Tá ligado, eu sou o bicho

[Refrão] 

<b>D9</b>
   Minha mente
         <b>C9</b>
Nem sempre tão lúcida
      <b>G/B</b>            <b>Gm/Bb</b>
É fértil e me deu a voz
<b>D9</b>
   Minha mente
         <b>C9</b>
Nem sempre tão lúcida
    <b>G/B</b>
Fez ela se afastar
 <b>Gm/Bb</b>   <b>D9</b>     <b>C9</b>  <b>G/B</b>  <b>Gm/Bb</b>
Mas ela vai voltar
         <b>D9</b>     <b>C9</b>  <b>G/B</b>  <b>Gm/Bb</b>
Mas ela vai voltar

[Terceira Parte] 

<span class="tablatura">[Tab - Terceira Parte]

Parte 1 de 3
   <b>D11</b>            <b>C4+(9)</b>
<span class="cnt">E|-------------x--------------x-----------------------|
B|-------3-----x------7-----7-x-----------------------|
G|-----0-----0-x-x------0-----x-x---------------------|
D|---------4---x----------0---x-----------------------|
A|-------------x--------------x-----------------------|
E|-0-0---------x---10---------x-----------------------|</span></span>

<span class="tablatura">Parte 2 de 3
  <b>Bb5</b>              <b>C5</b>
<span class="cnt">E|-------------x--------------------------------------|
B|-------------x--------------------------------------|
G|---10-----10-x------12-------12---------------------|
D|------8------x-x-------10---------------------------|
A|--------8----x------------10------------------------|
E|-8-----------x---10---------------------------------|</span></span>

<span class="tablatura">Parte 3 de 3
   <b>D11</b>            <b>C4+(9)</b>
<span class="cnt">E|-------------x--------------------------------------|
B|-------3-----x------7-------------------------------|
G|-----0-----0-x-x------0-----------------------------|
D|---------4---x----------0---------------------------|
A|-------------x--------------------------------------|
E|-0-0---------x---10---------------------------------|</span></span>

<b>D11</b>             <b>C4+(9)</b>
    Fazer da vida
          <b>Bb5</b>       <b>C5</b>
O que melhor possa ser
<b>D11</b>              <b>C4+(9)</b>
    Traçar um rumo novo
      <b>Bb5</b>         <b>C5</b>
Em direção ao sol
    <b>D11</b>         <b>C4+(9)</b>
Me sinto muito bem
        <b>G5</b>               <b>Bb5</b>
Quando vejo o pôr-do-sol
                       
Só pra fazer nascer a lua

( <b>D9</b>  <b>C9</b>  <b>G/B</b>  <b>Gm/Bb</b> )

[Refrão] 

<b>D9</b>
   Minha mente
         <b>C9</b>
Nem sempre tão lúcida
      <b>G/B</b>            <b>Gm/Bb</b>
É fértil e me deu a voz

<b>D9</b>
   Minha mente
         <b>C9</b>
Nem sempre tão lúcida
    <b>G/B</b>
Fez ela se afastar

 <b>Gm/Bb</b>   <b>D9</b>     <b>C9</b>  <b>G/B</b>  <b>Gm/Bb</b>
Mas ela vai voltar
         <b>D9</b>     <b>C9</b>  <b>G/B</b>  <b>Gm/Bb</b>
Mas ela vai voltar
         <b>D9</b>     <b>C9</b>  <b>G/B</b>  <b>Gm/Bb</b>
Mas ela vai voltar
         <b>D9</b>     <b>C9</b>  <b>G/B</b>  <b>Gm/Bb</b>  <b>D9</b>
Mas ela vai voltar

----------------- Acordes -----------------
Bb5 = P8 P8 P8 10 X X
C4+(9) = 10 X 0 0 7 X
C5 = P10 10 10 12 X X
C9 = X 3 0 0 3 0
D11 = 0 X 4 0 3 X
D9 = 0 0 0 2 3 0
G/B = X 2 0 0 3 X
G5 = P5 5 5 7 X X
Gm/Bb = X 1 0 0 3 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ElaVaiVoltarTodosOsDefeitosDeUmaMulherPerfeitaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/charlie-brown-jr/ela-vai-voltar/"
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
