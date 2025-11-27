import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/diogo-nogueira/pe-na-areia

const cifra = `Diogo Nogueira - Pe Na Areia

[Intro] <b>G7M</b>  <b>D7M(2)</b>  <b>G7M</b> 

<span class="tablatura">[Tab - Intro]

Parte 1 de 4
   <b>G7M</b>
<span class="cnt">E|-2-2-2-2-0--2------------2-2-2-2-0--2-----|
B|-3-3-3-3-3--3--3------3--3-3-3-3-3--3-----|
G|-4-4-4-4-4--4--4----4----4-4-4-4-4--4-----|
D|-5-----------------------5-----5----5-----|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 4
   <b>D7M</b>
<span class="cnt">E|-3--2--0----------------------------------|
B|----------2-2-2-2----2-----2-2-2-2----2---|
G|----------2-2-2-2-4-----2--2-2-2-2-4----2-|
D|----------0----------------0--------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 4
   <b>G7M</b>
<span class="cnt">E|-2-2-2-2-0--2------------2-2-2-2-0--2-----|
B|-3-3-3-3-3--3--3------3--3-3-3-3-3--3-----|
G|-4-4-4-4-4--4--4----4----4-4-4-4-4--4-----|
D|-5-----------------------5-----5----5-----|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 4 de 4
   <b>D7M</b>
<span class="cnt">E|-3--2--0--2-------------------------------|
B|----------2-------------------------------|
G|----------2-------------------------------|
D|----------0-------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

<b>D7M(2)</b>
       Vamos amor, vamos curtir 
          <b>Am7</b>         
Bora pra beira do mar
        <b>D7(9)</b>        <b>G7M</b>         
Vamos pra onde tá fazendo mais calor
   <b>G6</b>                 <b>Gm7</b>
E ninguém pode nos achar

<b>D7M(2)</b>
       Bora viver
                 <b>Am7</b>       <b>D7(9)</b>
Você e eu agora, eu e você
                     <b>G7M</b>           <b>G6</b>
Vamos pra onde tudo pode acontecer
           <b>Eb7M</b>
Inclusive nada

[Pré-Refrão]

<b>Em7(9)</b>                     
       Nada pode ser melhor 
                <b>D7M(2)</b>         <b>Em7(9)</b>
Do que a gente junto, nós dois
                                   
Mil ideias e uma história de amor
  <b>D7M(2)</b>               <b>Em7(9)</b>
E o assunto é nós dois
                      
Dois amantes namorando 
              <b>D7M(2)</b>     
Na beira da praia, iá iá iá
<b>Em7(9)</b>                
       Nada pode ser melhor 
               <b>F#7(4)</b>  (frase)
Pra gente se amar

<span class="tablatura">[Tab - Frase]

<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|----2--4-4-4-4-4--------------------------|
A|-4----------------------------------------|
E|------------------------------------------|</span></span>

[Refrão]

        <b>Em7(9)</b>       <b>G7M</b>  
Pé na areia, a caipirinha
         <b>D7M(2)</b>       <b>B7</b>
Água de coco, a cervejinha
        <b>Em7(9)</b>        <b>G7M</b> 
Pé na areia, água de coco
          <b>D7M(2)</b>  <b>B7</b>
Beira do mar

        <b>Em7(9)</b>       <b>G7M</b>  
Pé na areia, a caipirinha
         <b>D7M(2)</b>       <b>B7</b>
Água de coco, a cervejinha
        <b>Em7(9)</b>        <b>G7M</b> 
Pé na areia, água de coco
          <b>D7M(2)</b>
Beira do mar

[Primeira Parte]

<b>D7M(2)</b>
       Vamos amor, vamos curtir 
          <b>Am7</b>         
Bora pra beira do mar
        <b>D7(9)</b>        <b>G7M</b>         
Vamos pra onde tá fazendo mais calor
   <b>G6</b>                 <b>Gm7</b>
E ninguém pode nos achar

<b>D7M(2)</b>
       Bora viver
                 <b>Am7</b>       
Você e eu agora, eu e você
        <b>D7(9)</b>        <b>G7M</b>           <b>G6</b>
Vamos pra onde tudo pode acontecer
           <b>Eb7M</b>
Inclusive nada

[Pré-Refrão]

<b>Em7(9)</b>                     
       Nada pode ser melhor 
                <b>D7M(2)</b>         <b>Em7(9)</b>
Do que a gente junto, nós dois
                                   
Mil ideias e uma história de amor
       <b>D7M(2)</b>          <b>Em7(9)</b>
E o assunto é nós dois
                      
Dois amantes namorando 
              <b>D7M(2)</b>     
Na beira da praia, iá iá iá
<b>Em7(9)</b>                
       Nada pode ser melhor 
               <b>F#7(4)</b>  (frase)
Pra gente se amar

[Refrão Final]

        <b>Em7(9)</b>       <b>G7M</b>  
Pé na areia, a caipirinha
         <b>D7M(2)</b>       <b>B7</b>
Água de coco, a cervejinha
        <b>Em7(9)</b>        <b>G7M</b> 
Pé na areia, água de coco
          <b>D7M(2)</b>  <b>B7</b>
Beira do mar

        <b>Em7(9)</b>       <b>G7M</b>  
Pé na areia, a caipirinha
         <b>D7M(2)</b>       <b>B7</b>
Água de coco, a cervejinha
        <b>Em7(9)</b>        <b>G7M</b> 
Pé na areia, água de coco
          <b>A6/B</b>
Beira do mar

        <b>Em7(9)</b>       <b>G7M</b>  
Pé na areia, a caipirinha
         <b>D7M(2)</b>       <b>B7</b>
Água de coco, a cervejinha
        <b>Em7(9)</b>        <b>G7M</b> 
Pé na areia, água de coco
          <b>D7M(2)</b>  <b>B7</b>
Beira do mar

        <b>Em7(9)</b>       <b>G7M</b>  
Pé na areia, a caipirinha
         <b>D7M(2)</b>       <b>B7</b>
Água de coco, a cervejinha
        <b>Em7(9)</b>        <b>G7M</b> 
Pé na areia, água de coco
          <b>D7M(2)</b>  
Beira do mar

[Final] <b>G7M</b>  <b>D7M(2)</b>  <b>G7M</b>  <b>D7M(2)</b>`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PeNaAreiaPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/diogo-nogueira/pe-na-areia"
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
