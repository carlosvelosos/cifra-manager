import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/chitaozinho-e-xororo/fio-de-cabelo/

const cifra = `Chitãozinho & Xororó - Fio de Cabelo

[Intro] <b>C7</b>  <b>F</b>  <b>C7</b>  <b>F</b>

<span class="tablatura">[Tab - Solo Intro]

Parte 1 de 2
<span class="cnt">E|--------------6---------------5-----------|
B|------------------------------------------|
G|-7-5--5h7-5h7----7-5--5h7-5h7-------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
<span class="cnt">E|----8-8-8-8--6-6--5-5--3-5-6--3-1---------|
B|------------------------------------------|
G|-5--9-9-9-9--7-7--5-5--3-5-7--3-2---------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

               <b>F</b>
Quando a gente ama
                <b>C7</b>           <b>F</b>
Qualquer coisa serve para relembrar
                             <b>F7</b>
Um vestido velho da mulher amada
             <b>Bb</b>
Tem muito valor

                            <b>C7</b>
Aquele restinho do perfume dela
               <b>F</b>
Que ficou no frasco

Sobre a penteadeira
                  <b>C7</b>
Mostrando que o quarto
                              <b>F</b>    <b>C/E</b>
Já foi o cenário de um grande amor

[Refrão]

<b>Dm</b>  <b>C7</b>
E  hoje o que encontrei
                 <b>F</b>
Me deixou mais triste
                        <b>C7</b>
Um pedacinho dela que existe
             <b>Bb</b>              <b>F</b>  <b>C/E</b>
Um fio de cabelo no meu paletó

 <b>Dm</b>  <b>C7</b>
Lembrei de tudo entre nós
           <b>F</b>
Do amor vivido
                          <b>C7</b>
Aquele fio de cabelo comprido
              <b>Bb</b>      <b>C7</b>    <b>F</b>   <b>C/E</b>  <b>Dm</b>
Já esteve grudado em nosso suor

( <b>C7</b>  <b>F</b>  <b>C7</b>  <b>F</b> )

[Segunda Parte]

               <b>F</b>
Quando a gente ama
            <b>C7</b>               <b>F</b>
E não vive junto da mulher amada

Uma coisa à toa
            <b>F7</b>                <b>Bb</b>
É um bom motivo pra gente chorar
                                <b>C7</b>
Apagam-se as luzes ao chegar a hora
              <b>F</b>
De ir para a cama
                                  <b>C7</b>
A gente começa a esperar por quem ama
                            
Na impressão que ela 
          <b>F</b>     <b>C/E</b>
Venha se deitar

[Refrão]

<b>Dm</b>  <b>C7</b>
E  hoje o que encontrei
                 <b>F</b>
Me deixou mais triste
                        <b>C7</b>
Um pedacinho dela que existe
             <b>Bb</b>              <b>F</b>  <b>C/E</b>
Um fio de cabelo no meu paletó

 <b>Dm</b>  <b>C7</b>
Lembrei de tudo entre nós
           <b>F</b>
Do amor vivido
                          <b>C7</b>
Aquele fio de cabelo comprido
              <b>Bb</b>      <b>C7</b>    <b>F</b>
Já esteve grudado em nosso suor

----------------- Acordes -----------------
Bb = X 1 3 3 3 1
C/E = 0 3 2 0 1 0
C7 = X 3 2 3 1 X
Dm = X X 0 2 3 1
F = 1 3 3 2 1 1
F7 = 1 3 1 2 1 1`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FioDeCabeloPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/chitaozinho-e-xororo/fio-de-cabelo/"
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
