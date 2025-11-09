import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/jorge-mateus/havera-sinais/

const cifra = `Jorge & Mateus - Haverá Sinais

[Intro] <b>F#</b>  <b>C#m7</b>  <b>E</b>  <b>B</b>  <b>F#</b>

<span class="tablatura">[Tab - Intro]

Parte 1 de 2
   <b>F#</b>         <b>C#m7</b>     <b>E</b>               <b>B</b>
<span class="cnt">E|-----------------------------------------|
B|-------------------4-5-5-5-5-5-7-7-5-4---|
G|-----/4--3--1---/6-----------------------|
D|-----------------------------------------|
A|-----------------------------------------|
E|-----------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
           <b>F#</b>
<span class="cnt">E|-----------------------------------------|
B|-------4---------------------------------|
G|---4h6---6------3-4-6-4------------------|
D|-----------------------------------------|
A|-----------------------------------------|
E|-----------------------------------------|</span></span>

[Primeira Parte]

     <b>G#m7</b>
Tá quase, viu?
         <b>B</b>
Ontem a noite eu beijei alguém
           <b>F#</b>
E o choro não caiu, só roupa que caiu

     <b>G#m7</b>            
Tá quase viu?
      <b>B</b>
Hoje mesmo olhei sua foto
         <b>F#</b>                  <b>E5</b>  <b>D#5</b>
E nem arrepiei, até assustei

[Pré-Refrão]
 
           <b>C#m7</b>                <b>G#m7</b>
Cada foto Minha que chega pra você
                           <b>B</b>
Só mostra o que “cê” pode ver
         <b>D#m7</b>
Cê acha mesmo que eu só sei
       <b>E</b>                         <b>C#m7</b>
Virar noite, virar copo? Mal cê sabe
                     <b>F#</b>
Que quem tá virando nada pra mim é você 

Pra mim é você

[Refrão]

 <b>C#m7</b>                             <b>B</b>
Ninguém vai saber que eu te esqueci
         <b>F#</b>   <b>C#m7</b>
Mas haverá sinais
 <b>E</b>                     <b>G#m7</b>
Tipo a minha boca por aí
             <b>F#</b>         <b>E</b>
Tipo eu não te ligando mais

                                  <b>B</b>
Ninguém vai saber que eu te esqueci
         <b>F#</b>   <b>C#m7</b>
Mas haverá sinais
 <b>E</b>                     <b>G#m7</b>
Tipo a minha boca por aí
             <b>F#</b>         <b>E</b>
Tipo eu não te ligando mais

[Interlúdio] <b>F#</b>  <b>C#m7</b>  
             <b>F#</b>  <b>A#m7</b>  <b>G#</b>

[Solo]

<span class="tablatura">Parte 1 de 2
   <b>F#</b>   <b>C#m7</b>      <b>F#</b>              <b>A#m7</b>  
<span class="cnt">E|--------------------------------------|
B|--------------6-7-7-7-7-7-9-9-7-6-----|
G|-----------/8-------------------------|
D|--------------------------------------|
A|--------------------------------------|
E|--------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
           <b>G#</b>
<span class="cnt">E|-------------------------------------|
B|-------6-----------------------------|
G|---6-8---8-----6-5-6---5-5h6p5-------|
D|-------------------------------6-8---|
A|-------------------------------------|
E|-------------------------------------|</span></span>

[Segunda Parte]

    <b>A#m7</b> 
Tá quase viu? 
         <b>C#</b>
Ontem a noite eu beijei alguém
           <b>G#</b>
E o choro não caiu, só roupa que caiu

     <b>A#m7</b>
Tá quase viu? 
      <b>C#</b>
Hoje mesmo olhei sua foto
         <b>G#</b>                  <b>F#5</b>  <b>F5</b>
E nem arrepiei, até assustei

[Pré-Refrão]

      <b>D#m7</b>                       <b>A#m7</b>
Cada foto Minha que chega pra você
                           <b>C#</b>
Só mostra o que “cê” pode ver
         <b>Fm7</b>
Cê acha mesmo que eu só sei
       <b>F#</b>                        <b>D#m7</b>
Virar noite, virar copo? Mal cê sabe
                     <b>G#</b>
Que quem tá virando nada 

Pra mim é você

[Refrão Final]

 <b>D#m7</b>                             <b>C#</b>
Ninguém vai saber que eu te esqueci
         <b>G#</b>   <b>D#m7</b>
Mas haverá sinais
 <b>F#</b>                    <b>A#m7</b>
Tipo a minha boca por aí
             <b>G#</b>         <b>F#</b>
Tipo eu não te ligando mais

                                  <b>C#</b>
Ninguém vai saber que eu te esqueci
         <b>G#</b>   <b>D#m7</b>
Mas haverá sinais
 <b>F#</b>                    <b>A#m7</b>
Tipo a minha boca por aí
             <b>G#</b>         <b>F#</b>
Tipo eu não te ligando mais

                                  <b>C#</b>
Ninguém vai saber que eu te esqueci
         <b>G#</b>   <b>D#m7</b>
Mas haverá sinais
 <b>F#</b>                    <b>A#m7</b>
Tipo a minha boca por aí
             <b>G#</b>         <b>F#</b>
Tipo eu não te ligando mais

                                  <b>C#</b>  <b>G#</b>
Ninguém vai saber que eu te esqueci

<span class="tablatura">[Tab - Riff Final]

Parte 1 de 2
                          <b>C#</b>
<span class="cnt">E|------------------------------|
B|------6-7-7-7-7-7-9-9-7-6-----|
G|---/8-------------------------|
D|------------------------------|
A|------------------------------|
E|------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
           <b>G#</b>
<span class="cnt">E|------------------------------|
B|-------6----------------------|
G|---6-8---8----5-6-8---6--5----|
D|---------------------------8--|
A|------------------------------|
E|------------------------------|</span></span>

     <b>A#m7</b>
Tá quase viu?

----------------- Acordes -----------------
A#m7 = X 1 3 1 2 1
B = X 2 4 4 4 2
C# = X 4 6 6 6 4
C#m7 = X 4 6 4 5 4
D#5 = X 6 8 8 X X
D#m7 = X X 1 3 2 2
E = 0 2 2 1 0 0
E5 = 0 2 2 X X X
F# = 2 4 4 3 2 2
F#5 = 2 4 4 X X X
F5 = 1 3 3 X X X
Fm7 = 1 X 1 1 1 X
G# = 4 3 1 1 1 4
G#m7 = 4 X 4 4 4 X`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function HaveraSinaisPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jorge-mateus/havera-sinais/"
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
