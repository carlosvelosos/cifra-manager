import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/alceu-valenca/girassol/

const cifra = `Alceu Valença - Girassol

[Intro 2x] <b>C</b>  <b>Em</b>  <b>C</b>  <b>Em</b>

<span class="tablatura">Parte 1 de 2
   <b>C</b>
<span class="cnt">E|-------0----------------0-----------------|
B|---1-1-----1---1----1-1-----1---0---------|
G|-----0----------------0-------------------|
D|-------------2----------------0-----------|
A|-3-------3--------3-------3---------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
   <b>Em</b>
<span class="cnt">E|-------3----------------3-----------------|
B|---0-0-----0---0----0-0-----0---0---------|
G|-----0----------------0-------------------|
D|-2-------2---0----2-------2---0-----------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Solo Intro]

<span class="tablatura">Parte 1 de 2
<span class="cnt">E|----------------------------------------------------|
B|----------------------------------------------------|
G|-5p4-5p4-5p4-5p4-5p4-5p4-5p4-5p4--7/9---------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
<span class="cnt">E|----------------------------------------------------|
B|----------------------------------------------------|
G|-5p4-5p4-5p4-5p4-5p4-5p4--7/9-7-5-4-----------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|</span></span>


[Refrão]

 <b>C</b>     <b>Em</b>
Mar e Sol
 <b>C</b>
Gira, gira, gira
                              <b>Em</b>
Gira, gira, gira, gira, girassol

 <b>C</b>     <b>Em</b>
Mar e Sol
 <b>C</b>
Gira, gira, gira
                              <b>Em</b>
Gira, gira, gira, gira, girassol

[Primeira Parte]

<span class="tablatura">Parte 1 de 4
   <b>C</b>
<span class="cnt">E|-------0----------------0-----------------|
B|---1-1-----1---1----1-1-----1---0---------|
G|-----0----------------0-------------------|
D|-------------2----------------0-----------|
A|-3-------3--------3-------3---------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 4
   <b>Em</b>
<span class="cnt">E|-------3----------------3-----------------|
B|---0-0-----0---0----0-0-----0---0---------|
G|-----0----------------0-------------------|
D|-2-------2---0----2-------2---0-----------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Repete Parte 1 de 4   
   <b>C</b>
<span class="cnt">E|-------0----------------0-----------------|
B|---1-1-----1---1----1-1-----1---0---------|
G|-----0----------------0-------------------|
D|-------------2----------------0-----------|
A|-3-------3--------3-------3---------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Repete Parte 2 de 4
   <b>Em</b>
<span class="cnt">E|-------3----------------3-----------------|
B|---0-0-----0---0----0-0-----0---0---------|
G|-----0----------------0-------------------|
D|-2-------2---0----2-------2---0-----------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 4
   <b>F</b>
<span class="cnt">E|-------1----------------1-----------------|
B|---1-1-----1---1----1-1-----1---1---------|
G|-----2----------------2-------------------|
D|---------3---3------------3---3-----------|
A|------------------------------------------|
E|-1----------------1-----------------------|</span></span>

<span class="tablatura">Parte 4 de 4
   <b>Em</b>                                 <b>F</b>  <b>G</b>
<span class="cnt">E|-------0----------------0-----------1--3--|
B|---0-0-----0---0----0-0-----0---0---1--3--|
G|-----0----------------0-------------2--4--|
D|-------------2----2-------2---0-----------|
A|------------------------------------------|
E|-0-------3--------------------------1--3--|</span></span>

<b>C</b>                           <b>Em</b>
  Um girassol nos teus cabelos
<b>C</b>                       <b>Em</b>
  Batom vermelho, girassol
   <b>F</b>              <b>Em</b>
Morena flor do desejo
<b>F</b>         <b>G</b>              (<b>C</b>  <b>Em</b>  <b>C</b>  <b>Em</b>)
Ah, teu cheiro em meu lençol

<b>C</b>                           <b>Em</b>
  Um girassol nos teus cabelos
<b>C</b>                       <b>Em</b>
  Batom vermelho, girassol
   <b>F</b>              <b>Em</b>
Morena flor do desejo
<b>F</b>         <b>G</b>               <b>C</b>
Ah, teu cheiro em meu lençol


[Segunda Parte]

<span class="tablatura">Parte 1 de 4
   <b>Am</b>
<span class="cnt">E|-------0----------------0-----------------|
B|---1-1-----1---1----1-1-----1---1---------|
G|-----2----------------0-------------------|
D|-------------2----------------2-----------|
A|-0-------3--------0-------3---------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 4
   <b>Em</b>
<span class="cnt">E|-------0----------------0-----------------|
B|---0-0-----0---0----0-0-----0---0---------|
G|-----0----------------0-------------------|
D|------------------------------------------|
A|-------------2----------------2-----------|
E|-0-------3--------0-------3---------------|</span></span>

<span class="tablatura">Repete Parte 3 de 4
   <b>F</b>
<span class="cnt">E|-------1----------------1-----------------|
B|---1-1-----1---1----1-1-----1---1---------|
G|-----2----------------2-------------------|
D|---------3---3------------3---3-----------|
A|------------------------------------------|
E|-1----------------1-----------------------|</span></span>

<span class="tablatura">Repete Parte 3 de 4
  <b>Em</b>                                  <b>F</b>  <b>G</b>
<span class="cnt">E|-------0----------------0-----------1--3--|
B|---0-0-----0---0----0-0-----0---0---1--3--|
G|-----0----------------0-------------2--4--|
D|-------------2----2-------2---0-----------|
A|------------------------------------------|
E|-0-------3--------------------------1--3--|</span></span>

 <b>Am</b>             <b>Em</b>
Desço pra rua, sinto saudade
 <b>Am</b>             <b>Em</b>
Gata selvagem, sou caçador
   <b>F</b>              <b>Em</b>
Morena flor do desejo
<b>F</b>         <b>G</b>        (<b>C</b>  <b>Em</b>  <b>C</b>  <b>Em</b>) (2x)
Ah, teu cheiro matador


[Segunda Parte]

 <b>Am</b>             <b>Em</b>
Desço pra rua, sinto saudade
 <b>Am</b>             <b>Em</b>
Gata selvagem, sou caçador
   <b>F</b>              <b>Em</b>
Morena flor do desejo
<b>F</b>         <b>G</b>        (<b>C</b>  <b>Em</b>  <b>C</b>  <b>Em</b>)
Ah, teu cheiro matador


[Refrão]

 <b>C</b>     <b>Em</b>
Mar e Sol
 <b>C</b>
Gira, gira, gira
                              <b>Em</b>
Gira, gira, gira, gira, girassol

 <b>C</b>     <b>Em</b>
Mar e Sol
 <b>C</b>
Gira, gira, gira
                              <b>Em</b>
Gira, gira, gira, gira, girassol

----------------- Acordes -----------------
Am = X 0 2 2 1 0
C = X 3 2 0 1 0
Em = X X 2 0 0 3
F = 1 3 3 2 1 1
G = 3 5 5 4 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function GirassolPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/alceu-valenca/girassol/"
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
