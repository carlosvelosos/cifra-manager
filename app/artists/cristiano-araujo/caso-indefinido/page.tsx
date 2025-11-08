import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/cristiano-araujo/caso-indefinido/

const cifra = `Cristiano Araújo - Caso Indefinido

[Intro] <b>A</b>  <b>A2</b>  <b>B</b>
        <b>C#m</b>  <b>C#7(4/9)</b>  <b>C#m</b>
        <b>A</b>  <b>A2</b>  <b>B</b>
        <b>C#m</b>  <b>B2</b>   

[Tab - Intro]

Parte 1 de 4

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|-----5-4\-------2-----0-0-x-0-x---3/4-4-x-|
G|--------------2-------2-2-x-2-x---3/4-4-x-|
D|-4/6---4\---2-----x-2-2-2-x-2-x-x-3/4-4-x-|
A|----------0-------x---0-----------1/2-----|
E|------------------------------------------|</span></span>

Parte 2 de 4

<span class="tablatura">            <b>C#m</b>         <b>C#7(4/9)</b>    <b>C#m</b>
<span class="cnt">E|------------------------------------------|
B|-----5-4\-------5-----4-4-x-4-x---4h5-4-x-|
G|--------------6-------4-4-x-4-x---4h6-4-x-|
D|-4/6---4\---6-----x-6-4-4-x-4-x-x-4h6-4-x-|
A|----------4-------x---4-----------4-------|
E|------------------------------------------|</span></span>

Parte 3 de 4

<span class="tablatura">            <b>A</b>           <b>A2</b>            <b>B</b>
<span class="cnt">E|------------------------------------------|
B|-----5-4\-------2-----0-0-x-0-x---2/4-4-x-|
G|--------------2-------2-2-x-2-x---2/4-4-x-|
D|-4/6---4\---2-----x-2-2-2-x-2-x-x-2/4-4-x-|
A|----------0-------x---0-----------0/2-----|
E|------------------------------------------|</span></span>

Parte 4 de 4

<span class="tablatura">            <b>C#m</b>         <b>B2</b>   
<span class="cnt">E|------------------------------------------|
B|-----5-4\-------5-----------2-------------|
G|--------------6---6-------4---4-----------|
D|-4/6---4\---6-------6---4-------4------2--|
A|----------4-----------2------------2h4----|
E|------------------------------------------|</span></span>

<span class="tablatura">[Tab - Intro Variação 1]

            <b>C#m</b>
<span class="cnt">E|------------------------------------------|
B|-----5-4\-------5-----4-------------------|
G|--------------6-------4-------------------|
D|-4/6---4\---6-----x-6-4-------------------|
A|----------4-------x---4-------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|--------11----9--11----9------------------|
G|------9-11----9--11----9------------------|
D|------9----11-------11--------------------|
A|-9h11-------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">[Tab - Intro Variação 2]

            <b>C#m</b>
<span class="cnt">E|------------------------------------------|
B|-----5-4\-------5-----4-------------------|
G|--------------6-------4-------------------|
D|-4/6---4\---6-----x-6-4-------------------|
A|----------4-------x---4-------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-----7------------------------------------|
B|-7/9---9\7-5------------------------------|
G|--------------8\6-4-----------------------|
D|---------------------6\4-2----------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

<span class="tablatura">   <b>E</b>
<span class="cnt">E|------------------------------------------|
B|-------1-----1--1-x--1-x------------------|
G|-----2-------2--2-x--2-x------------------|
D|---2-----x-2-2--2-x--2-x--x---------------|
A|---------x---2----------------------------|
E|-0-------x--------------------------------|</span></span>

<span class="tablatura">   <b>F#m</b>        <b>E/G#</b> <b>A</b>
<span class="cnt">E|------------------------------------------|
B|---2-2-2-2--5\---2-2-2-2--5---------------|
G|---2-2-2-2--4\---2-2-2-2--4\--------------|
D|---4-4-4-4--2\---2-2-2-2--2\--------------|
A|---------------0-0-0-0-0------------------|
E|-2-2-2-2-2--4\------------4\--------------|</span></span>

<span class="tablatura">   <b>B2</b>   
<span class="cnt">E|------------------------------------------|
B|-------2----------------------------------|
G|-----4---x--------------------------------|
D|---4-----x-4-------------2----------------|
A|-2-------x----2-2-2--2h4------------------|
E|------------------------------------------|</span></span>

   <b>E</b>
Será que alguém 

Explica a nossa relação
    <b>C#m</b>
Um caso indefinido, mas rola paixão
  <b>F#m</b>           <b>E/G#</b> 
Adoro esse perigo   
   <b>A</b>             <b>E/G#</b>
Mexe demais comigo
     <b>F#m</b>                        <b>B2</b>   
Mas não te tenho em minhas mãos

               <b>E</b>
Se você quiser
   <b>C#m</b>
Podemos ser um caso indefinido 

Ou nada mais
  <b>G#m</b>               
Apenas bons amigos 
     <b>A</b>
Namorar, casar ter filhos
    <b>F#m</b>                <b>A</b>     <b>B2</b>   
Passar a vida inteira juntos

[Segunda Parte]

         <b>F#m</b>               <b>C#m</b>
E vai saber se um dia seremos nós
        <b>F#m</b>                     <b>C#m</b>
Nenhum beijo, para calar nossa voz
      <b>F#m</b>            
Um minuto, uma hora  
       <b>E/G#</b>
Não importa o tempo
   <b>A</b>        <b>B2</b>   
Se estamos sós

[Refrão]

               <b>A2</b>   
Se você quiser
   <b>B2</b>              <b>C#m</b>
A gente casa ou namora
                   <b>A2</b>   
A gente fica ou enrola
                <b>B2</b>                
O que eu mais quero 
                <b>C#m</b>
É que você me queira

               <b>A2</b>   
Se você quiser
   <b>B2</b>              <b>C#m</b>
A gente casa ou namora
                   <b>A2</b>   
A gente fica ou enrola
                <b>B2</b>                  
O que eu mais quero 
                <b>C#m</b>  <b>B2</b>  <b>A2</b>   
É que você me queira
          <b>B2</b>                  <b>C#m</b>
Por um momento ou pra vida inteira

[Tab - Intro]

[Segunda Parte]

         <b>F#m</b>               <b>C#m</b>
E vai saber se um dia seremos nós
        <b>F#m</b>                     <b>C#m</b>
Nenhum beijo, para calar nossa voz
      <b>F#m</b>            
Um minuto, uma hora  
       <b>E/G#</b>
Não importa o tempo
   <b>A</b>        <b>B2</b>   
Se estamos sós

[Refrão Final]

               <b>A2</b>   
Se você quiser
   <b>B2</b>              <b>C#m</b>
A gente casa ou namora
                   <b>A2</b>   
A gente fica ou enrola
                <b>B2</b>                
O que eu mais quero 
                <b>C#m</b>
É que você me queira

               <b>A2</b>   
Se você quiser
   <b>B2</b>              <b>C#m</b>
A gente casa ou namora
                   <b>A2</b>   
A gente fica ou enrola
                <b>B2</b>                  
O que eu mais quero 
                <b>C#m</b>
É que você me queira

               <b>A2</b>   
Se você quiser
   <b>B2</b>              <b>C#m</b>
A gente casa ou namora
                   <b>A2</b>   
A gente fica ou enrola
                <b>B2</b>                
O que eu mais quero 
                <b>C#m</b>
É que você me queira

               <b>A2</b>   
Se você quiser
   <b>B2</b>              <b>C#m</b>
A gente casa ou namora
                   <b>A2</b>   
A gente fica ou enrola
                <b>B2</b>                  
O que eu mais quero 
                <b>C#m</b>  <b>B2</b>  <b>A2</b>   
É que você me queira
          <b>B2</b>                  <b>C#m</b>
Por um momento ou pra vida inteira

----------------- Acordes -----------------
A = X 0 2 2 2 0
A5(9) = X 0 2 2 0 0
B = X 2 4 4 4 2
B5(9) = X 2 4 4 2 2
C#4(7/9) = X P4 4 4 4 4
C#m = X 4 6 6 5 4
E = 0 2 2 1 0 0
E/G# = 4 X 2 4 5 X
F#m = 2 4 4 2 2 2
G#m = 4 6 6 4 4 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CasoIndefinidoPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/cristiano-araujo/caso-indefinido/"
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
