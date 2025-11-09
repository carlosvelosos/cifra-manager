import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/bruno-e-marrone/vida-vazia/

const cifra = `Bruno e Marrone - Vida Vazia

[Intro] <b>G</b>  <b>G7M</b>  <b>G6</b>  <b>G7M</b>  
        <b>G</b>  <b>G7M</b>  <b>G6</b>  <b>G7M</b>  
        <b>Am7</b>  <b>D</b>  <b>G</b>  <b>G7M</b>  <b>G6</b>  <b>G7M</b>  

<span class="tablatura">[Tab - Solo Intro]

Parte 1 de 4
<span class="cnt">E|-----x-x-------------x-x-----x-x-------------x-x-----|
B|-8-8-x-x-7--7-7-7-7--x-x-5-5-x-x-7--7-7-7-7--x-x-----|
G|-----x-x-------------x-x-----x-x-------------x-x-----|
D|-9-9-x-x-7--7-7-7-7--x-x-5-5-x-x-7--7-7-7-7--x-x-----|
A|-----------------------------------------------------|
E|-----------------------------------------------------|
   ↓ ↑ ↓ ↑ ↓  ↓ ↑ ↓ ↓  ↓ ↑ ↓ ↑ ↓ ↑ ↓  ↓ ↑ ↓ ↓  ↓ ↑</span></span>

<span class="tablatura">Parte 2 de 4
<span class="cnt">E|-----x-x-------------x-x------x-x--------------------|
B|-8-8-x-x-7--7-7-7-7--x-x--5-5-x-x--7-----------------|
G|-----x-x-------------x-x------x-x--------------------|
D|-9-9-x-x-7--7-7-7-7--x-x--5-5-x-x--7-----------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|
   ↓ ↑ ↓ ↑ ↓  ↓ ↑ ↓ ↓  ↓ ↑  ↓ ↑ ↓ ↑  ↓</span></span>

<span class="tablatura">Parte 3 de 4
<span class="cnt">E|-3-5/7--5--5-x-x-5--5-x-x-5-5-x-x-5--5/7-3-----------|
B|-------------------------------------------5---------|
G|-4-5/7--5--5-x-x-5--5-x-x-5-5-x-x-5--5/7-4-----------|
D|-------------------------------------------5---------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|
   ↓ ↓    ↓  ↑ ↓ ↑ ↓  ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓  ↓   ↓ ↓</span></span>

<span class="tablatura">Parte 4 de 4
<span class="cnt">E|-----x-x-------------x-x-----x-x-------------x-x-----|
B|-8-8-x-x-7--7-7-7-7--x-x-5-5-x-x-7--7-7-7-7--x-x-----|
G|-----x-x-------------x-x-----x-x-------------x-x-----|
D|-9-9-x-x-7--7-7-7-7--x-x-5-5-x-x-7--7-7-7-7--x-x-----|
A|-----------------------------------------------------|
E|-----------------------------------------------------|
   ↓ ↑ ↓ ↑ ↓  ↓ ↑ ↓ ↓  ↓ ↑ ↓ ↑ ↓ ↑ ↓  ↓ ↑ ↓ ↓  ↓ ↑        </span></span>

[Primeira Parte]

   <b>G</b>             <b>G7M</b>
Depois que você foi embora
              <b>G6</b>             <b>G7M</b>
A solidão entrou, trancou a porta
          <b>Am7</b>
E não me deixa mais
<b>D</b>
  Eu já tentei sair
          <b>Am7</b>            <b>D</b>
Tentei fugir, não consegui
                 <b>G</b>  <b>G7M</b>  <b>G6</b>  <b>G7M</b>
Eu já não tenho paz

[Pré-Refrão]

  <b>Em</b>
Até o meu sorriso é tão sem graça

Não há nada que desfaça
                        <b>Bm</b>
Essa tristeza em meu olhar

<b>C</b>
  O que é que eu vou fazer 
             <b>Am7</b>
Pra te esquecer?
<b>D</b>
  O que é que eu vou fazer 
             
Pra não sofrer?
<b>Am7</b>                               <b>D/F#</b>
    O que é que eu faço pra você voltar
<b>G</b>            <b>G7M</b>  <b>G</b>
  Pra minha vida?

[Refrão]

        <b>Am7</b>  <b>D/F#</b>          <b>G</b>  <b>Em</b>
Vida vazia,       saudade sua
        <b>D</b>             <b>C</b>
Dia nublado, vento gelado
           <b>G</b>  <b>G7M</b>  <b>G6</b>  <b>G7M</b>
Noite sem lua

        <b>Am7</b>  <b>D/F#</b>          <b>G</b>    <b>Em</b>
Vida vazia        de sentimento
           <b>D</b>            <b>C</b>
Noite sem sono, no abandono
          <b>G</b>  <b>G7M</b>  <b>G6</b>  <b>G7M</b>    
Eu não aguento

[Solo] <b>G</b>  <b>G7M</b>  <b>G6</b>  <b>G7M</b>  
       <b>G</b>  <b>G7M</b>  <b>G6</b>  <b>G7M</b>  
       <b>Am7</b>  <b>D</b>  <b>G</b>  <b>G7M</b>  <b>G6</b>  <b>G7M</b>

[Tab - Solo] 

<span class="tablatura">Parte 1 de 4
<span class="cnt">E|-----x-x-------------x-x-----x-x-------------x-x-----|
B|-8-8-x-x-7--7-7-7-7--x-x-5-5-x-x-7--7-7-7-7--x-x-----|
G|-----x-x-------------x-x-----x-x-------------x-x-----|
D|-9-9-x-x-7--7-7-7-7--x-x-5-5-x-x-7--7-7-7-7--x-x-----|
A|-----------------------------------------------------|
E|-----------------------------------------------------|
   ↓ ↑ ↓ ↑ ↓  ↓ ↑ ↓ ↓  ↓ ↑ ↓ ↑ ↓ ↑ ↓  ↓ ↑ ↓ ↓  ↓ ↑</span></span>

<span class="tablatura">Parte 2 de 4
<span class="cnt">E|-----x-x-------------x-x------x-x--------------------|
B|-8-8-x-x-7--7-7-7-7--x-x--5-5-x-x--7-----------------|
G|-----x-x-------------x-x------x-x--------------------|
D|-9-9-x-x-7--7-7-7-7--x-x--5-5-x-x--7-----------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|
   ↓ ↑ ↓ ↑ ↓  ↓ ↑ ↓ ↓  ↓ ↑  ↓ ↑ ↓ ↑  ↓</span></span>

<span class="tablatura">Parte 3 de 4
<span class="cnt">E|-3-5/7--5--5-x-x-5--5-x-x-5-5-x-x-5--5/7-3-----------|
B|-------------------------------------------5---------|
G|-4-5/7--5--5-x-x-5--5-x-x-5-5-x-x-5--5/7-4-----------|
D|-------------------------------------------5---------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|
   ↓ ↓    ↓  ↑ ↓ ↑ ↓  ↑ ↓ ↑ ↓ ↑ ↓ ↑ ↓  ↓   ↓ ↓</span></span>

<span class="tablatura">Parte 4 de 4
<span class="cnt">E|-----x-x-------------x-x-3---3-----------------------|
B|-8-8-x-x-7--7-7-7-7--x-x-3h5-3-----------------------|
G|-----x-x-------------x-x-------4-2-------------------|
D|-9-9-x-x-7--7-7-7-7--x-x-----------5-4-2---2---------|
A|-----------------------------------------5-----------|
E|-----------------------------------------------------|
   ↓ ↑ ↓ ↑ ↓  ↓ ↑ ↓ ↓  ↓ ↑</span></span>

[Pré-Refrão]

  <b>Em</b>
Até o meu sorriso é tão sem graça

Não há nada que desfaça
                        <b>Bm</b>
Essa tristeza em meu olhar

<b>C</b>
  O que é que eu vou fazer 
             <b>Am7</b>
Pra te esquecer?
<b>D</b>
  O que é que eu vou fazer 
             
Pra não sofrer?
<b>Am7</b>                               <b>D/F#</b>
    O que é que eu faço pra você voltar
<b>G</b>            <b>G7M</b>  <b>G</b>
  Pra minha vida?

[Refrão Final]

        <b>Am7</b>  <b>D/F#</b>          <b>G</b>  <b>Em</b>
Vida vazia,       saudade sua
        <b>D</b>             <b>C</b>
Dia nublado, vento gelado
           <b>G</b>  <b>G7M</b>  <b>G6</b>  <b>G7M</b>
Noite sem lua

        <b>Am7</b>  <b>D/F#</b>          <b>G</b>    <b>Em</b>
Vida vazia        de sentimento
           <b>D</b>            <b>C</b>
Noite sem sono, no abandono
          <b>G</b>  <b>G7M</b>  <b>G6</b>  <b>G7M</b>    
Eu não aguento

        <b>Am7</b>  <b>D/F#</b>       <b>G</b>  <b>Em</b>
Vida vazi____a,   oh oh oh
        <b>D</b>             <b>C</b>
Dia nublado, vento gelado
           <b>G</b>  <b>G7M</b>  <b>G6</b>  <b>G7M</b>
Noite sem lua

        <b>Am7</b>  <b>D/F#</b>          <b>G</b>    <b>Em</b>
Vida vazia        de sentimento
           <b>D</b>            <b>C</b>
Noite sem sono, no abandono
          <b>G</b>  <b>G7M</b>  <b>G6</b>  <b>G7M</b>  <b>G</b>  
Eu não aguento

----------------- Acordes -----------------
Am7 = X 0 2 0 1 0
Bm = X 2 4 4 3 2
C = X 3 2 0 1 0
D = X X 0 2 3 2
D/F# = 2 0 0 2 3 X
Em = 0 2 2 0 0 0
G = 3 2 0 0 3 3
G6 = 3 X 0 0 3 0
G7M = 3 X 0 0 3 2`;

const [title, ...restOfCifra] = cifra.split(/\r?\n\r?\n/);
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex !== -1
    ? restOfCifra.slice(0, chordsSectionIndex).join("\n\n")
    : restOfCifra.join("\n\n");
const chords =
  chordsSectionIndex !== -1
    ? restOfCifra.slice(chordsSectionIndex).join("\n\n")
    : "";

export default function VidaVaziaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/bruno-e-marrone/vida-vazia/"
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
