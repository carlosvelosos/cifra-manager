import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/nenhum-de-nos/o-astronauta-de-marmore/

const cifra = `Nenhum de Nós - O Astronauta de Mármore

[Intro] <b>Bb</b>  <b>F</b>

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|----------------------------------------------------|
B|------------8---------------------------------------|
G|---3-5-5/7----7~/--------3-3/2-2h3p2----------------|
D|-5-----------------3h5---------------3/5/3----------|
A|----------------------------------------------------|
E|----------------------------------------------------|</span></span>

[Primeira Parte] 

<b>Gm</b>
   A lua inteira agora é um manto negro
<b>F</b>
  O fim das vozes no meu rádio
<b>C</b>                       
  São quatro ciclos no 
      <b>C7</b>              <b>F</b>  <b>G#</b>  <b>Bb</b>
No escuro deserto do céu

<b>Gm</b>
   Quero um machado pra quebrar o gelo
<b>F</b>
  Quero acordar do sonho agora mesmo
<b>C</b>                  
  Quero uma chance 
       <b>C7</b>            <b>A</b>  <b>G</b>
De tentar viver sem dor

[Refrão] 

          <b>F</b>         <b>Dm</b>
Sempre estar lá, e ver ele voltar
    <b>Am</b>                
Não era mais o mesmo
       <b>C</b>
Mas estava em seu lugar
          <b>F</b>         <b>Dm</b>
Sempre estar lá, e ver ele voltar
   <b>Am</b>                
O tolo teme a noite
        <b>C</b>
Como a noite vai temer o fogo

<b>Bb</b>         <b>Bbm</b>
   Vou chorar sem medo
<b>F</b>          <b>Dm</b>
  Vou lembrar do tempo
<b>Gm</b>             <b>C</b>            <b>Bb</b>
   De onde eu via o mundo azul

[Solo] <b>Bb</b>  <b>F</b>  <b>C</b>  <b>F</b> 
       <b>Bb</b>  <b>F</b>  <b>C</b>

<span class="tablatura">[Tab - Solo]

Parte 1 de 2
<span class="cnt">E|----------------------------------------------------|
B|-3--3--1----------1-3/5--5-3--1---------------------|
G|---------3-2--2-3---------------2-------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
<span class="cnt">E|----------10-10--------------------10/12-12-10------|
B|-10-11-13-------13-11-10--10-11-13-------------13-10|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|</span></span>

[Segunda Parte] 

<b>Gm</b>
   A trajetória escapa o risco nú
<b>F</b>
  As nuvens queimam o céu, nariz azul
<b>C</b>                   
  Desculpe estranho
       <b>C7</b>               <b>F</b>   <b>G#</b>  <b>A#</b>
Eu voltei mais puro do céu

<b>Gm</b>
   Na lua o lado escuro é sempre igual
<b>F</b>
  No espaço a solidão é tão normal
<b>C</b>                  
  Desculpe estranho
       <b>C7</b>               <b>A</b>   <b>G</b>
Eu voltei mais puro do céu

[Refrão] 

          <b>F</b>         <b>Dm</b>
Sempre estar lá, e ver ele voltar
    <b>Am</b>                
Não era mais o mesmo
       <b>C</b>
Mas estava em seu lugar
          <b>F</b>         <b>Dm</b>
Sempre estar lá, e ver ele voltar
   <b>Am</b>                
O tolo teme a noite
        <b>C</b>
Como a noite vai temer o fogo

<b>Bb</b>         <b>Bbm</b>
   Vou chorar sem medo
<b>F</b>          <b>Dm</b>
  Vou lembrar do tempo
<b>Gm</b>             <b>C</b>            <b>Bb</b>
   De onde eu via o mundo azul

          <b>F</b>         <b>Dm</b>
Sempre estar lá, e ver ele voltar
    <b>Am</b>                
Não era mais o mesmo
       <b>C</b>
Mas estava em seu lugar
          <b>F</b>         <b>Dm</b>
Sempre estar lá, e ver ele voltar
   <b>Am</b>                
O tolo teme a noite
        <b>C</b>
Como a noite vai temer o fogo

<b>Bb</b>         <b>Bbm</b>
   Vou chorar sem medo
<b>F</b>          <b>Dm</b>
  Vou lembrar do tempo
<b>Gm</b>             <b>C</b>            <b>Bb</b>
   De onde eu via o mundo azul

[Final] <b>Bb</b>  <b>F</b>  <b>C</b>  <b>F</b> 
        <b>Bb</b>  <b>F</b>  <b>C</b>  <b>F</b> 

<span class="tablatura">[Tab - Solo Final]

Parte 1 de 2
<span class="cnt">E|----------------------------------------------------|
B|-3--3--1----------1-3/5--5-3--1---------------------|
G|---------3-2--2-3---------------2-------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
<span class="cnt">E|----------10-10--------------------10/12-12-10------|
B|-10-11-13-------13-11-10--10-11-13-------------13-10|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|</span></span>
E|----------------------------------------------------|

----------------- Acordes -----------------
A = X 0 2 2 2 0
A# = X 1 3 3 3 1
Am = X 0 2 2 1 0
Bb = X 1 3 3 3 1
Bbm = X 1 3 3 2 1
C = X 3 2 0 1 0
C7 = X 3 2 3 1 X
Dm = X X 0 2 3 1
F = 1 3 3 2 1 1
G = 3 2 0 0 0 3
G# = 4 3 1 1 1 4
Gm = 3 5 5 3 3 3`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OAstronautaDeMarmorePage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/nenhum-de-nos/o-astronauta-de-marmore/"
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
