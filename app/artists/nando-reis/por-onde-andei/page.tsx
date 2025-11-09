import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/nando-reis/por-onde-andei/

const cifra = `Nando Reis - Por Onde Andei

[Intro] <b>C</b>  <b>G</b>  <b>Dm</b>  <b>F</b>
        <b>C</b>  <b>G</b>  <b>Dm</b>  <b>F/C</b>  <b>C4</b>

<span class="tablatura">[Tab - Intro]

[Parte 1 de 5]
   <b>C</b>                         <b>G</b>
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|-------0----------------------------------|
D|---0h2---2------2------------------0------|
A|-3----------3-3---3-3-3--2-----0h2---2----|
E|----------------------------3-------------|</span></span>

<span class="tablatura">[Parte 2 de 5]
   <b>G</b>           <b>Dm</b>                    <b>F</b>
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|--------------------0--------0------------|
D|-----0---------0--3---3--0-0---0--------3-|
A|-------2-0-0-3--------------------0-3-3---|
E|-3-3--------------------------------------|</span></span>

<span class="tablatura">[Parte 3 de 5]
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|-----0------------------------------------|
D|---------------3---2----------------------|
A|-3-3---3-3-3-3---3------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">[Parte 4 de 5]
   <b>C</b>                         <b>G</b>
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|-------0----------------------------------|
D|---0h2---2------2------------------0------|
A|-3----------3-3---3-3-3--2-----0h2---2----|
E|----------------------------3-------------|</span></span>

<span class="tablatura">[Parte 5 de 5]
  <b>G</b>           <b>Dm</b>                     <b>F/C</b> <b>C4</b>
<span class="cnt">E|------------------------------------------|
B|------------------------------------1---1-|
G|--------------------0--------0------2---0-|
D|-----0---------0--3---3--0-0---0----3---3-|
A|-------2-0-0-3--------------------0-3---3-|
E|-3-3--------------------------------------|</span></span>

[Primeira Parte]

             <b>C</b>
Desculpe, estou um pouco atrasado
       <b>G</b>
Mas espero que ainda dê tempo
      <b>Dm</b>                           <b>F</b>
De dizer que andei errado, e eu entendo
          <b>C</b>
As suas queixas tão justificáveis
            <b>G</b>
E a falta que eu fiz nessa semana
 <b>Dm</b>
Coisas que pareceriam óbvias
  <b>F</b>
Até pra uma criança

[Refrão]

    <b>C</b>
Por onde andei
            <b>G</b>
Enquanto você me procurava?
   <b>Bb2</b>                   <b>F</b>
Será que eu sei que você é mesmo
                       <b>C</b>
Tudo aquilo que me faltava?

( <b>G</b>  <b>Dm</b>  <b>F</b> )

[Segunda Parte]

          <b>C</b>
Amor, eu sinto a sua falta
               <b>G</b>
E a falta é a morte da esperança
        <b>Dm</b>
Como o dia em que roubaram o seu carro
    <b>F</b>
Deixou uma lembrança
              <b>C</b>
Que a vida é mesmo coisa muito frágil
       <b>G</b>
Uma bobagem, uma irrelevância
  <b>Dm</b>                      <b>F</b>
Diante da eternidade do amor

De quem se ama

[Refrão]

    <b>C</b>
Por onde andei
            <b>G</b>
Enquanto você me procurava?
      <b>Bb2</b>
E o que eu te dei
           <b>F</b>
Foi muito pouco ou quase nada

      <b>C</b>
E o que eu deixei?
         <b>G</b>
Algumas roupas penduradas
   <b>Bb2</b>
Será que eu sei que
        <b>F</b>
Você é mesmo tudo
                  <b>C</b>
Aquilo que me faltava?

( <b>G</b>  <b>Dm</b>  <b>F</b> )
( <b>C</b>  <b>G</b>  <b>Dm</b>  <b>F</b> )

[Segunda Parte]

          <b>C</b>
Amor, eu sinto a sua falta
               <b>G</b>
E a falta é a morte da esperança
        <b>Dm</b>
Como o dia em que roubaram o seu carro
    <b>F</b>
Deixou uma lembrança
              <b>C</b>
Que a vida é mesmo coisa muito frágil
       <b>G</b>
Uma bobagem, uma irrelevância
  <b>Dm</b>                      <b>F</b>
Diante da eternidade do amor

De quem se ama

[Refrão]

    <b>C</b>
Por onde andei
            <b>G</b>
Enquanto você me procurava?
      <b>Bb2</b>
E o que eu te dei
           <b>F</b>
Foi muito pouco ou quase nada

      <b>C</b>
E o que eu deixei?
         <b>G</b>
Algumas roupas penduradas
   <b>Bb2</b>
Será que eu sei que
        <b>F</b>
Você é mesmo tudo
                  <b>C</b>
Aquilo que me faltava?

( <b>G</b>  <b>Dm</b>  <b>F</b> )
( <b>C</b>  <b>G</b>  <b>Dm</b>  <b>F</b> )

[Refrão]

    <b>C</b>
Por onde andei
            <b>G</b>
Enquanto você me procurava?
      <b>Bb2</b>
E o que eu te dei
           <b>F</b>
Foi muito pouco ou quase nada

      <b>C</b>
E o que eu deixei?
         <b>G</b>
Algumas roupas penduradas
   <b>Bb2</b>
Será que eu sei que
        <b>F</b>
Você é mesmo tudo
                  <b>C</b>
Aquilo que me faltava?

[Final] <b>G</b>  <b>Dm</b>  <b>F</b>
        <b>C</b>  <b>G</b>  <b>Dm</b>  <b>F</b>  <b>C</b>

----------------- Acordes -----------------
Bb2 = X 1 3 3 1 1
C = X 3 2 0 1 0
C4 = X 3 3 0 1 X
Dm = X X 0 2 3 1
F = 1 3 3 2 1 1
F/C = X 3 3 2 1 X
G = 3 2 0 0 3 3`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PorOndeAndeiPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/nando-reis/por-onde-andei/"
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
