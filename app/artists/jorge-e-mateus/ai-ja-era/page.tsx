import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/jorge-mateus/ai-ja-era/

const cifra = `Jorge & Mateus - Aí Já Era

[Intro] <b>C</b>  <b>D</b>  <b>Am7</b>  
        <b>C</b>  <b>D</b>  <b>Em7(9)</b>  
        <b>C</b>  <b>D</b>  <b>Am7</b>  
        <b>C</b>  <b>D</b>  <b>Em7(9)/F#</b>  <b>C9/E</b>

<span class="tablatura">[Tab - Intro]

Parte 1 de 2
            <b>C</b>   <b>D</b>        <b>Am7</b>        <b>C</b>   <b>D</b>     
<span class="cnt">E|----------7-----------------------7------10-----|
B|---7-8-10---10-8-7-7h8-----7-8-10---10----------|
G|-9---------------------9-9-------------7--------|
D|------------------------------------------------|
A|------------------------------------------------|
E|------------------------------------------------|</span></span>

<span class="tablatura">   <b>Em7(9)</b>
<span class="cnt">E|-7----------------------------------------------|
B|---7--------------------------------------------|
G|-----7------------------------------------------|
D|-------7----------------------------------------|
A|------------------------------------------------|
E|------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
            <b>C</b>   <b>D</b>        <b>Am7</b>        <b>C</b>   <b>D</b>
<span class="cnt">E|----------7-----------------------7-------------|
B|---7-8-10---10-8-7-7h8-----7-8-10---10-8-7------|
G|-9---------------------9-9----------------------|
D|------------------------------------------------|
A|------------------------------------------------|
E|------------------------------------------------|</span></span>

<span class="tablatura">   <b>Em7(9)/F#</b> <b>C9/E</b>
<span class="cnt">E|------------------------------------------------|
B|-7----------------------------------------------|
G|---7--------------------------------------------|
D|-----7-5p4--------------------------------------|
A|-----------5/7----------------------------------|
E|------------------------------------------------|</span></span>

[Primeira Parte]

 <b>G</b>               
Para pra pensar
       <b>C9</b>
Porque eu já me toquei  
<b>G</b>                       <b>C9</b>
Eu te escolhi e você me escolheu

Eu sei 
 <b>G7M</b>           
Tá escancarado
       <b>C9</b>
Vai negar pro coração? 
          <b>G</b>         <b>D</b>           <b>C9</b>
Que você tá com sintomas de paixão!

            <b>Em7(9)</b>         
É quando os olhos se caçam
        <b>D</b>
Em meio à multidão 
          <b>C9</b>              
Quando a gente se esbarra
             <b>D</b>
Andando em qualquer direção 
       <b>G</b>               
Quando indiscretamente
         <b>D</b>                  
A gente vai perdendo o chão  
               <b>C9</b>
E vai ficando bobo
             
Vai ficando bobo

[Refrão]

   <b>D</b>    <b>G</b>           <b>D</b>          <b>C9</b>
E aí já era é hora de se entregar
    <b>D</b>         <b>G</b>   
O amor não espera
            <b>D</b>        <b>C9</b>
Só deixa o tempo passar 
         <b>D</b>      <b>Bm</b>       <b>B7</b>        <b>Em</b>
E fica pro coração a missão de avisar
            <b>D</b>       <b>C9</b> 
E o meu tá dando sinal
         <b>D</b>
E tá querendo te amar! 

[Solo] <b>C</b>  <b>D</b>  <b>Am7</b> 
       <b>C</b>  <b>D</b>  <b>Em7(9)</b>
       <b>C</b>  <b>D</b>  <b>Am7</b>
       <b>C</b>  <b>D</b>  <b>Em7(9)/F#</b>  <b>C9/E</b>

<span class="tablatura">[Tab - Solo]

Parte 1 de 4
            <b>C</b>   <b>D</b>        <b>Am7</b>
<span class="cnt">E|----------7-------------------------------------|
B|---7-8-10---10-8-7-7h8---10b12-10-8-------------|
G|-9---------------------9------------------------|
D|------------------------------------------------|
A|------------------------------------------------|
E|------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 4
            <b>C</b>   <b>D</b>     <b>Em7(9)</b>
<span class="cnt">E|----------7------10-7---------------------------|
B|---7-8-10---10----------------------------------|
G|-9-------------7----------7-7-------------------|
D|----------------------7h9-----9-----------------|
A|------------------------------------------------|
E|------------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 4
            <b>C</b>   <b>D</b>        <b>Am7</b>
<span class="cnt">E|----------7-------------------------------------|
B|---7-8-10---10-8-7-7h8---10b12-10-8-------------|
G|-9---------------------9------------------------|
D|------------------------------------------------|
A|------------------------------------------------|
E|------------------------------------------------|</span></span>

Parte 4 de 4
<span class="tablatura">                                        H.N
             <b>C</b>   <b>D</b>    <b>Em7(9)/F#</b> <b>C9/E</b>                                           
<span class="cnt">E|-----------7--------------------------12--------|
B|----7-8-10---10-8-7-7-----------------12--------|
G|--9-------------------7-------------------------|
D|------------------------7-5p4-------------------|
A|------------------------------5/7---------------|
E|------------------------------------------------|</span></span>

[Primeira Parte]

 <b>G</b>               
Para pra pensar
       <b>C9</b>
Porque eu já me toquei  
<b>G</b>                       <b>C9</b>
Eu te escolhi e você me escolheu

Eu sei 
 <b>G7M</b>           
Tá escancarado
       <b>C9</b>
Vai negar pro coração? 
          <b>G</b>         <b>D</b>           <b>C9</b>
Que você tá com sintomas de paixão!

            <b>Em7(9)</b>         
É quando os olhos se caçam
        <b>D</b>
Em meio à multidão 
          <b>C9</b>              
Quando a gente se esbarra
             <b>D</b>
Andando em qualquer direção 
       <b>G</b>               
Quando indiscretamente
         <b>D</b>                  
A gente vai perdendo o chão  
               <b>C9</b>
E vai ficando bobo
             
Vai ficando bobo

[Refrão]

   <b>D</b>    <b>G</b>           <b>D</b>          <b>C9</b>
E aí já era é hora de se entregar
    <b>D</b>         <b>G</b>   
O amor não espera
            <b>D</b>        <b>C9</b>
Só deixa o tempo passar 
         <b>D</b>      <b>Bm</b>       <b>B7</b>        <b>Em</b>
E fica pro coração a missão de avisar
            <b>D</b>       <b>C9</b> 
E o meu tá dando sinal
         <b>D</b>
E tá querendo te amar! 

   <b>D</b>    <b>G</b>           <b>D</b>          <b>C9</b>
E aí já era é hora de se entregar
    <b>D</b>         <b>G</b>   
O amor não espera
            <b>D</b>        <b>C9</b>
Só deixa o tempo passar 
         <b>D</b>      <b>Bm</b>       <b>B7</b>        <b>Em</b>
E fica pro coração a missão de avisar
            <b>D</b>       <b>C9</b> 
E o meu tá dando sinal
         <b>D</b>
E tá querendo te amar! 

            <b>D</b>       <b>C9</b> 
E o meu tá dando sinal
         <b>D</b>
E tá querendo te amar! 

[Final] <b>C</b>  <b>D</b>  <b>Am7</b>
        <b>C</b>  <b>D</b>  <b>Em7(9)</b>
        <b>C</b>  <b>D</b>  <b>Am7</b>
        <b>C</b>  <b>D</b>  <b>Em7(9)</b>  <b>C9/E</b>
        <b>G</b>

<span class="tablatura">[Tab - Final]

Parte 1 de 4 
            <b>C</b>   <b>D</b>        <b>Am7</b>
<span class="cnt">E|----------7-------------------------------------|
B|---7-8-10---10-8-7-7h8---10b12-10-8-------------|
G|-9---------------------9------------------------|
D|------------------------------------------------|
A|------------------------------------------------|
E|------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 4
            <b>C</b>   <b>D</b>     <b>Em7(9)</b>
<span class="cnt">E|----------7------10-7---------------------------|
B|---7-8-10---10----------------------------------|
G|-9-------------7----------7-7-------------------|
D|----------------------7h9-----9-----------------|
A|------------------------------------------------|
E|------------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 4
            <b>C</b>   <b>D</b>        <b>Am7</b>
<span class="cnt">E|----------7-------------------------------------|
B|---7-8-10---10-8-7-7h8---10b12-10-8-------------|
G|-9---------------------9------------------------|
D|------------------------------------------------|
A|------------------------------------------------|
E|------------------------------------------------|</span></span>

Parte 4 de 4
<span class="tablatura">                                      H.N 
             <b>C</b>   <b>D</b>    <b>Em7(9)/F#</b>              <b>G</b>                                    
<span class="cnt">B|-----------7------------------------12-----3----|
G|----7-8-10---10-8---7-7-------------12-----3----|
D|--9---------------------7------------------0----|
A|--------------------------7-5p4------------0----|
E|-------------------------------------------2----|</span></span>
E|-------------------------------------------3----|

----------------- Acordes -----------------
Am7 = 7 P5 5 5
B7 = 1 2 0 1
Bm = 4 4 3 4
C = 2 0 1 2
C9 = 2 0 1 0
D = 4 2 3 4
Em = 5 4 5 5
Em7(9) = 0 0 5 4
G = 5 4 3 5
G7M = 5 4 3 4`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AiJaEraPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jorge-mateus/ai-ja-era/"
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
