import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/chitaozinho-e-xororo/pagina-de-amigos/

const cifra = `Chitãozinho & Xororó - Página de Amigos

[Intro] <b>C</b>  <b>G/B</b>  <b>F/A</b>  <b>C</b>  <b>G/B</b>
        <b>C</b>  <b>G/B</b>  <b>F/A</b>  <b>C</b>  <b>G/B</b>

<span class="tablatura">[Dedilhado - Intro - 2x]

   <b>C</b>                  <b>G/B</b>  
<span class="cnt">E|------0---1---0---------3---3---3---------|
B|------1---3---1---------3---1---0---------|
G|----0---0---0---0-----0---0---0---0-------|
D|------------------------------------------|
A|-3------------------2---------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">   <b>F/A</b>              <b>C</b>           <b>G/B</b> 
<span class="cnt">E|----------------------------------3-------|
B|-----1---0---1--------------------3-------|
G|-----2---2---2------0-----0-----0---0-----|
D|---3---3---3---3------0h2-----------------|
A|-0----------------3---------3-2-----------|
E|------------------------------------------|</span></span>

<span class="tablatura">[Tab - Solo Intro]

Parte 1 de 3
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|-/12~----0-/12p10\9--7b9--7~--------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 3
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|--7b9--7b9--7b9r7p5~----------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 3
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|--------5--7--5--7/9~-9b10r9p7~-----------|
D|--5--7------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

<b>C</b>
Ela ligou terminando
 <b>G</b>
Tudo entre eu e ela
   <b>F</b>
E disse que encontrou
          <b>C</b>  
Outra pessoa

Ela jogou os meus sonhos
 <b>G</b>
Todos pela janela
   <b>F</b>
E me pediu pra entender
              <b>C</b>  
Encarar numa boa

[Pré-Refrão]

 <b>C</b>
Como se o meu coração
               <b>G</b>
Fosse feito de aço

Pediu pra esquecer os beijos
       <b>F</b>
E abraços e pra machucar
                 <b>C</b>   
Ainda brincou comigo
 
Disse em poucas palavras
              <b>G</b>
Por favor, entenda

O seu nome vai ficar na
        <b>F</b>
Minha agenda
    <b>G</b>          <b>C</b>    <b>G</b>
Na página de amigos

[Refrão]

[Riff - Refrão]

<span class="tablatura">   <b>C7</b>
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|--3--2--1~--------------------------------|
E|--------------1---------------------------|</span></span>

     <b>C</b>
Como é que eu posso ser
             <b>G</b>
Amigo de alguém que eu tanto amei
    <b>F</b>
Se ainda existe aqui comigo
      <b>C</b>             <b>G</b>
Tudo dela e eu não sei
     <b>C</b>
Não sei o que vou eu fazer
        Riff                  <b>F</b> 
Pra continuar a minha vida assim
       <b>C</b>
Se o amor que morreu dentro
 <b>G</b>              <b>C</b>
Dela ainda vive em mim

[Solo] <b>C</b>  <b>G</b>  <b>F</b>  <b>C</b>  <b>G</b>

<span class="tablatura">[Tab - Solo]

Parte 1 de 3
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|-/12~----0-/12p10\9--7b9--7~--------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 3
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|--7b9--7b9--7b9r7p5~----------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 3
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|--------5--7--5--7/9~-9b10r9p7~-----------|
D|--5--7------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

<b>C</b>
Ela jogou os meus sonhos
 <b>G</b>
Todos pela janela
   <b>F</b>
E me pediu pra entender
              <b>C</b>  
Encarar numa boa

[Pré-Refrão]

 <b>C</b>
Como se o meu coração
               <b>G</b>
Fosse feito de aço

Pediu pra esquecer os beijos
       <b>F</b>
E abraços e pra machucar
                 <b>C</b>   
Ainda brincou comigo
 
Disse em poucas palavras
              <b>G</b>
Por favor, entenda

O seu nome vai ficar na
        <b>F</b>
Minha agenda
    <b>G</b>          <b>C</b>    <b>G</b>
Na página de amigos

[Refrão]

[Riff - Refrão]

<span class="tablatura">   <b>C7</b>
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|--3--2--1~--------------------------------|
E|--------------1---------------------------|</span></span>

     <b>C</b>
Como é que eu posso ser
             <b>G</b>
Amigo de alguém que eu tanto amei
    <b>F</b>
Se ainda existe aqui comigo
      <b>C</b>             <b>G</b>
Tudo dela e eu não sei
     <b>C</b>
Não sei o que vou eu fazer
        Riff                  <b>F</b> 
Pra continuar a minha vida assim
       <b>C</b>
Se o amor que morreu dentro
 <b>G</b>              <b>C</b>
Dela ainda vive em mim

       <b>C</b>
Se o amor que morreu dentro
 <b>G</b>              <b>F</b>      
Dela ainda vive em mim

[Final] <b>Fm</b>  <b>C</b>

<span class="tablatura">[Tab - Final]
                 <b>Fm</b>                      <b>C</b> 
<span class="cnt">E|------------------------------------------|
B|--9b11--9b11r9-7~--10-9b10--9b10r9--7--9~-|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|</span></span>
E|------------------------------------------|

----------------- Acordes -----------------
Capotraste na 1ª casa
C#*  = X 3 2 0 1 0 - (*D na forma de C#)
C#7*  = X 3 2 3 1 X - (*D7 na forma de C#7)
F#*  = 1 3 3 2 1 1 - (*G na forma de F#)
F#m*  = 1 3 3 1 1 1 - (*Gm na forma de F#m)
G#*  = 3 2 0 0 0 3 - (*A na forma de G#)`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PaginaDeAmigosPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/chitaozinho-e-xororo/pagina-de-amigos/"
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
