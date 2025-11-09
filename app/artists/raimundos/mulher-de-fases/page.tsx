import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/raimundos/mulher-de-fases/

const cifra = `Raimundos - Mulher de Fases

[Intro]

<span class="tablatura">[Tab - Intro]

Parte 1 de 6
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|-7--5-----5-7--5-----5--------------------|
E|-------7----------7-----------------------|</span></span>

<span class="tablatura">Parte 2 de 6
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|-7--5-----5-7--5--------------------------|
E|-------7----------7--5--------------------|
   P.M . . . . . . .</span></span>

<span class="tablatura">Parte 3 de 6
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|---------------------5---7----------------|
D|---------------------5---7----------------|
A|-5-5-5-5-5-5-5-5-5---3---5----------------|
E|-3-3-3-3-3-3-3-3-3------------------------|
   P.M . . . . . . .</span></span>

<span class="tablatura">Parte 4 de 6
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|---------------------5---7----------------|
D|---------------------5---7----------------|
A|-5-5-5-5-5-5-5-5-5---3---5----------------|
E|-3-3-3-3-3-3-3-3-3------------------------|</span></span>

<span class="tablatura">Parte 5 de 6
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|-7--5-----5-7--5-----5--------------------|
E|-------7----------7-----------------------|</span></span>

<span class="tablatura">Parte 6 de 6
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|-7--5-----5-7--5--------------------------|
E|-------7----------7--5--------------------|</span></span>

[Primeira Parte]

<b>G5</b>                 <b>D5</b>
   Que mulher ruim
              <b>C5</b>         <b>E5</b>
Jogou minhas coisas fora
                  <b>A5</b>
Disse que em sua cama
           <b>C5</b>         <b>G5</b>
Eu não deito mais não

               <b>D5</b>
A casa é minha
          <b>C5</b>       <b>E5</b>
Você que vá embora
                    <b>A5</b>
Já pra saia da sua mãe
                    <b>C5</b>
E deixa meu colchão

                <b>A5</b>
Ela é pró na arte
                  <b>E5</b>
De pentelhar e aziar
             <b>G5</b>
É campeã do mundo
<b>C5</b>
A raiva era tanta
        <b>G5</b>
Que eu nem reparei
       <b>D5</b>
Que a Lua diminuía

<b>G5</b>         <b>D5</b>           <b>C5</b>            <b>E5</b>
   A doida    tá me beijando há horas
                     <b>A5</b>
Disse que se for sem eu
            <b>C5</b>          <b>G5</b>
Não quer viver mais não
             
Me diz, Deus    
<b>D5</b>                 <b>C5</b>         <b>E5</b>
   O que é que eu faço agora?
                     <b>A5</b>
Se me olhando desse jeito
                  <b>C5</b>
Ela me tem na mão
             <b>G5</b>
Meu filho aguenta
               <b>D5</b>
Quem mandou você gostar

Dessa mulher de fases

[Refrão]

<b>G5</b>        <b>C5</b>           <b>G5</b>
   Complicada e perfeitinha
   <b>D5</b>         <b>E5</b>
Você me apareceu
     <b>A5</b>             <b>C5</b>
Era tudo que eu queria

Estrela da sorte

<b>G5</b>           <b>C5</b>           <b>G5</b>
   Quando a noite ela surgia
     <b>D5</b>           <b>E5</b>
Meu bem você cresceu
       <b>A5</b>           <b>C5</b>
Meu namoro é na folhinha

Mulher de fases

[Riff 1]

<span class="tablatura">   <b>G5</b>                 <b>C5</b>  <b>D5</b>
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|--------------------5---7-----------------| (4x)
D|-5--5-5-5-5-5-5-5-x-5---7-----------------|
A|-5--5-5-5-5-5-5-5-x-3---5-----------------|
E|-3--3-3-3-3-3-3-3-x-----------------------|</span></span>

[Segunda Parte]

 <b>E5</b>
Põe fermento, põe as bombas

Qualquer coisa que aumente
     <b>G5</b>
E a deixe bem maior que o Sol
 <b>E5</b>
Pouca gente sabe que na noite
                            <b>A5</b>
O frio é quente e arde e eu   acendi

<b>C5</b>              <b>A5</b>
   Até sem luz dá pra te enxergar
      <b>E5</b>                 <b>G5</b>
O lençol fazendo congo-blue
   <b>C5</b>                 <b>G5</b>
É pena, eu sei, a manhã já vai miar
      <b>D5</b>
Se aguente, que lá vem chumbo quente

[Segundo Refrão]

<b>G5</b>        <b>C5</b>           <b>G5</b>
   Complicada e perfeitinha
   <b>D5</b>         <b>E5</b>
Você me apareceu
     <b>A5</b>             <b>C5</b>
Era tudo que eu queria

Estrela da sorte

<b>G5</b>           <b>C5</b>           <b>G5</b>
   Quando a noite ela surgia
     <b>D5</b>           <b>E5</b>
Meu bem você cresceu
       <b>A5</b>           <b>C5</b>
Meu namoro é na folhinha

Mulher de fases

[Riff 2]

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|--------------------5--5-5-7--------------| (4x)
D|-5--5-5-5-5-5-5-5-x-5--5-5-7--------------|
A|-5--5-5-5-5-5-5-5-x-3--3-3-5--------------|
E|-3--3-3-3-3-3-3-3-x-----------------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|-7--5-----5-7--5-----5--------------------|
E|-------7----------7-----------------------|</span></span>

<span class="tablatura">                         <b>G5</b>
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|-----------------------5------------------|
A|-7--5-----5-7--5-------5------------------|
E|-------7----------7--5-3------------------|</span></span>

Complicada e perfeitinha

Você me apareceu

Era tudo que eu queria

Estrela da sorte

Quando a noite ela surgia

Meu bem você cresceu

Meu namoro é na folhinha

----------------- Acordes -----------------
A5 = X 0 2 2 X X
C5 = X 3 5 5 X X
D5 = X 5 7 7 X X
E5 = 0 2 2 X X X
G5 = 3 5 5 X X X`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MulherDeFasesPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/raimundos/mulher-de-fases/"
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
