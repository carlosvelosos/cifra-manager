import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/bruno-e-marrone/boate-azul/

const cifra = `Bruno e Marrone - Boate Azul

[Intro] <b>Fm</b>  <b>Bb</b>  <b>Eb</b>  <b>Cm</b>
        <b>Fm</b>  <b>G</b>  <b>Cm</b>  <b>C7</b>
        <b>Fm</b>  <b>Bb</b>  <b>Eb</b>  <b>Ab</b>
        <b>Fm</b>  <b>G</b>  <b>Cm</b>

<span class="tablatura">[Tab - Solo Intro]

Parte 1 de 8
<span class="cnt">E|----3-4-3-4-3-4---------------------------|
B|-6---------------4-3h4p3~-----------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 8
<span class="cnt">E|---------3---3---3------------------------|
B|-3h4h6-----6---6--------------------------|
G|--------------------7-5h7p5~--------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 8
<span class="cnt">E|------------------------------------------|
B|---3h4h6--4-6-4-6-------------------------|
G|-5----------------5-4h5p4-----------------|
D|--------------------------6p5-------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 4 de 8
<span class="cnt">E|------------------------------------------|
B|------------------3h4-4-----3h4h5---6h7h8-|
G|-4-7-5h7p5----------------5---------------|
D|--------------5-5-------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 5 de 8
<span class="cnt">E|--------8------8------8-------------------|
B|-9--11--9--11--9--11--9---8-8-6-6-6-------|
G|-10-12-----12-----12------8-8-7-7-7-------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 6 de 8
<span class="cnt">E|------------------------------------------|
B|-8-9--11--9--11-9--11--6-6-4-4-4----------|
G|-8-10-12--10-12-10-12--7-7-5-5-5----------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 7 de 8 
<span class="cnt">E|------------------------------------------|
B|-6-8-9---8-9--8-9---4-3-1p0---------------|
G|-7-8-10--8-10-8-10--5-4-----0---4-7-5h7p5-|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 8 de 8
<span class="cnt">E|-----------3--------8---------------------|
B|---4--------------------------------------|
G|--------5-------/8------------------------|
D|-5----------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

            <b>Cm</b>
Doente de amor procurei remédio
           <b>Bb</b>
Na vida noturna
               <b>Ab</b>
Com a flor da noite
                           <b>G</b>
Em uma boate aqui na zona sul

           <b>Fm</b>
A dor do amor é com outro amor
             <b>Cm</b>
Que a gente cura
             <b>G</b>
Vim curar a dor desse mal de amor
           <b>Cm</b>  <b>C7</b>
Na boate azul
            <b>Fm</b>
E quando a noite vai se agonizando
                <b>Cm</b>
No clarão da aurora
      <b>G</b>
Os integrantes da vida noturna
             <b>Cm</b>  <b>C7</b>
Se foram dormir
             <b>Fm</b>
E a dama da noite que estava comigo
              <b>Cm</b>
Também foi embora
                <b>Ab</b>
Fecharam-se as portas
            <b>G</b>
Sozinho de novo
          <b>C</b>
Tive que sair

[Refrão]

<b>C</b>              <b>G</b>
  Sair de que jeito
              <b>F</b>              <b>C</b>
Se nem sei o rumo para onde vou
                                 <b>G</b>
Muito vagamente me lembro que estou
         <b>F</b>                 <b>C</b>
Em uma boate aqui na zona sul
           <b>G</b>
Eu bebi demais
          <b>F</b>                  <b>C</b>
E não consigo me lembrar sequer
                            <b>G</b>
Qual era o nome daquela mulher
           <b>F</b>        <b>G</b>      <b>C</b>  <b>C7</b>
A flor da noite na boate azul

[Solo] <b>Fm</b>  <b>Bb</b>  <b>Eb</b>  <b>Cm</b> 
       <b>Fm</b>  <b>G</b>  <b>Cm</b>  <b>C7</b> 

[Primeira Parte]

            <b>Fm</b>
E quando a noite vai se agonizando
                <b>Cm</b>
No clarão da aurora
      <b>G</b>
Os integrantes da vida noturna
             <b>Cm</b>  <b>C7</b>
Se foram dormir
             <b>Fm</b>
E a dama da noite que estava comigo
              <b>Cm</b>
Também foi embora
                <b>Ab</b>
Fecharam-se as portas
            <b>G</b>
Sozinho de novo
          <b>C</b>
Tive que sair

[Refrão Final]

<b>C</b>              <b>G</b>
  Sair de que jeito
              <b>F</b>              <b>C</b>
Se nem sei o rumo para onde vou
                                 <b>G</b>
Muito vagamente me lembro que estou
         <b>F</b>                 <b>C</b>
Em uma boate aqui na zona sul
           <b>G</b>
Eu bebi demais
          <b>F</b>                  <b>C</b>
E não consigo me lembrar sequer
                            <b>G</b>
Qual era o nome daquela mulher
           <b>F</b>        <b>G</b>      <b>C</b>  <b>C7</b>
A flor da noite na boate azul

             <b>G</b>
Sair de que jeito
              <b>F</b>              <b>C</b>
Se nem sei o rumo para onde vou
                                 <b>G</b>
Muito vagamente me lembro que estou
         <b>F</b>                 <b>C</b>
Em uma boate aqui na zona sul
           <b>G</b>
Eu bebi demais
          <b>F</b>                  <b>C</b>
E não consigo me lembrar sequer
                            <b>G</b>
Qual era o nome daquela mulher
           <b>F</b>        <b>G</b>      <b>C</b>
A flor da noite na boate azul

----------------- Acordes -----------------
Ab = 6 5 4 6
Bb = P3 3 3 3
C = 2 0 1 2
C7 = 2 3 1 2
Cm = 1 0 1 1
Eb = 5 3 4 5
F = 3 2 1 3
Fm = 3 1 1 3
G = 5 4 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function BoateAzulPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/bruno-e-marrone/boate-azul/"
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
