import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/alceu-valenca/morena-tropicana/

const cifra = `Alceu Valença - Tropicana (Morena Tropicana)

[Intro] <b>Bm</b>  <b>F#m</b>  <b>Em</b>  <b>F#7</b>
        <b>Bm</b>  <b>F#m</b>  <b>Em</b>  <b>F#7</b>  <b>Bm</b>

[Primeira Parte]

<span class="tablatura">[Tab - Primeira Parte]

Parte 1 de 4
       <b>F#m</b>          <b>C#m7(5-)</b>  <b>F#7</b>
<span class="cnt">E|--------2-2-------------------------------|
B|--------2-2----------5-5------------------|
G|--------2-2----------4-4-------3----------|
D|---------------------5-5-------2----------|
A|---2---------4----4------------4----------|
E|-2---2---------2------------2-------------|</span></span>

<span class="tablatura">Parte 2 de 4
   <b>Bm</b>
<span class="cnt">E|---2-2-------2-2--------------------------|
B|---3-3-------3-3--------------------------|
G|---4-4-------4-4--------------------------|
D|------------------------------------------|
A|-2-------2-2------------------------------|
E|-------2----------------------------------|</span></span>

<span class="tablatura">Parte 3 de 4
       <b>F#m</b>          <b>C#m7(5-)</b>  <b>F#7</b>
<span class="cnt">E|--------2-2-------------------------------|
B|--------2-2----------5-5------------------|
G|--------2-2----------4-4-------3----------|
D|---------------------5-5-------2----------|
A|---2---------4----4------------4----------|
E|-2---2---------2------------2-------------|</span></span>

<span class="tablatura">Parte 4 de 4
   <b>Bm</b>
<span class="cnt">E|---2-2------------------------------------|
B|---3-3------------------------------------|
G|---4-4------------------------------------|
D|------------------------------------------|
A|-2-------2--------------------------------|
E|-------2----------------------------------|</span></span>

<b>Bm</b>      
   Da manga rosa 
                   <b>F#m</b>
Quero o gosto e o sumo
         <b>C#m7(5-)</b>  <b>F#7</b>  <b>Bm</b>
Melão maduro, sapoti, juá
                         <b>F#m</b>
Jaboticaba, teu olhar noturno
          <b>C#m7(5-)</b>  <b>F#7</b>  <b>Bm</b>
Beijo travoso de umbú cajá

[Pré-Refrão]

        <b>A</b>     <b>G</b>          <b>D</b>
Pele macia é carne de caju
        <b>A</b>          <b>G</b>              <b>D</b>
Saliva doce, doce mel, mel de uruçú

         <b>C#m7(5-)</b>    <b>F#7</b>         <b>Bm</b>
Linda morena, fruta de vez temporana
                 <b>C#m7(5-)</b>
Caldo de cana caiana
 <b>F#7</b>          <b>Bm</b>
Vou te desfrutar
         <b>C#m7(5-)</b>    <b>F#7</b>         <b>Bm</b>
Linda morena, fruta de vez temporana
                 <b>C#m7(5-)</b>
Caldo de cana caiana
 <b>F#7</b>          <b>Bm</b>
Vou te desfrutar

[Refrão]

             <b>Bm</b>     
Morena tropicana
                  <b>F#m</b>
Eu quero o teu sabor
<b>Em</b>  <b>F#7</b>     <b>Bm</b>
Oi, oi, oi, oi
             <b>Bm</b>     
Morena tropicana
                  <b>F#m</b>
Eu quero o teu sabor
<b>Em</b>  <b>F#7</b>     <b>Bm</b>
Ai, ai, ai, ai

[Primeira Parte]

<span class="tablatura">[Tab - Primeira Parte (Repetição)]

Parte 1 de 4
   <b>Bm</b>         <b>F#m</b>          <b>C#m7(5-)</b>  <b>F#7</b>
<span class="cnt">E|---2-2---------2-2------------------------|
B|---3-3---------2-2----------5-5-----------|
G|---4-4---------2-2----------4-4-------3---|
D|---4-4----------------------5-5-------2---|
A|-2--------2---------4----4------------4---|
E|--------2---2---------2------------2------|</span></span>

<span class="tablatura">Parte 2 de 4
   <b>Bm</b>
<span class="cnt">E|---2-2-------2-2--------------------------|
B|---3-3-------3-3--------------------------|
G|---4-4-------4-4--------------------------|
D|------------------------------------------|
A|-2-------2-2------------------------------|
E|-------2----------------------------------|</span></span>

<span class="tablatura">Parte 3 de 4
       <b>F#m</b>          <b>C#m7(5-)</b>  <b>F#7</b>
<span class="cnt">E|--------2-2-------------------------------|
B|--------2-2----------5-5------------------|
G|--------2-2----------4-4-------3----------|
D|---------------------5-5-------2----------|
A|---2---------4----4------------4----------|
E|-2---2---------2------------2-------------|</span></span>

<span class="tablatura">Parte 4 de 4
   <b>Bm</b>
<span class="cnt">E|---2-2------------------------------------|
B|---3-3------------------------------------|
G|---4-4------------------------------------|
D|------------------------------------------|
A|-2-------2--------------------------------|
E|-------2----------------------------------|</span></span>

<b>Bm</b>      
   Da manga rosa 
                   <b>F#m</b>
Quero o gosto e o sumo
         <b>C#m7(5-)</b>  <b>F#7</b>  <b>Bm</b>
Melão maduro, sapoti, juá
                         <b>F#m</b>
Jaboticaba, teu olhar noturno
          <b>C#m7(5-)</b>  <b>F#7</b>  <b>Bm</b>
Beijo travoso de umbú cajá

[Pré-Refrão]

        <b>A</b>     <b>G</b>          <b>D</b>
Pele macia é carne de caju
        <b>A</b>          <b>G</b>              <b>D</b>
Saliva doce, doce mel, mel de uruçú

         <b>C#m7(5-)</b>    <b>F#7</b>         <b>Bm</b>
Linda morena, fruta de vez temporana
                 <b>C#m7(5-)</b>
Caldo de cana caiana
 <b>F#7</b>          <b>Bm</b>
Vou te desfrutar
         <b>C#m7(5-)</b>    <b>F#7</b>         <b>Bm</b>
Linda morena, fruta de vez temporana
                 <b>C#m7(5-)</b>
Caldo de cana caiana
 <b>F#7</b>          <b>Bm</b>
Vou te desfrutar

[Refrão]

             <b>Bm</b>     
Morena tropicana
                  <b>F#m</b>
Eu quero o teu sabor
<b>Em</b>  <b>F#7</b>     <b>Bm</b>
Oi, oi, oi, oi
                 
Morena tropicana
                  <b>F#m</b>
Eu quero o teu sabor
<b>Em</b>  <b>F#7</b>     <b>Bm</b>
Ai, ai, ai, ai

[Solo] <b>Bm</b>  <b>F#m</b>  <b>Em</b>  <b>F#7</b>
       <b>Bm</b>  <b>F#m</b>  <b>Em</b>  <b>F#7</b>  <b>Bm</b>
       <b>A</b>  <b>G</b>  <b>D</b>  <b>A</b>  <b>G</b>  <b>D</b>
       <b>C#m7(5-)</b>  <b>F#7</b>  <b>Bm</b>  
       <b>C#m7(5-)</b>  <b>F#7</b>  <b>Bm</b>  
       <b>C#m7(5-)</b>  <b>F#7</b>  <b>Bm</b>  
       <b>C#m7(5-)</b>  <b>F#7</b>  <b>Bm</b>

[Refrão]

             <b>Bm</b>     
Morena tropicana
                  <b>F#m</b>
Eu quero o teu sabor
<b>Em</b>  <b>F#7</b>     <b>Bm</b>
Oi, oi, oi, oi
                  
Morena tropicana
                  <b>F#m</b>
Eu quero o teu sabor
<b>Em</b>  <b>F#7</b>     <b>Bm</b>
Ai, ai, ai, ai

[Primeira Parte]

<b>Bm</b>      
   Da manga rosa 
                   <b>F#m</b>
Quero o gosto e o sumo
         <b>C#m7(5-)</b>  <b>F#7</b>  <b>Bm</b>
Melão maduro, sapoti, juá
                         <b>F#m</b>
Jaboticaba, teu olhar noturno
          <b>C#m7(5-)</b>  <b>F#7</b>  <b>Bm</b>
Beijo travoso de umbú cajá

[Pré-Refrão]

        <b>A</b>     <b>G</b>          <b>D</b>
Pele macia é carne de caju
        <b>A</b>          <b>G</b>              <b>D</b>
Saliva doce, doce mel, mel de uruçú

         <b>C#m7(5-)</b>    <b>F#7</b>         <b>Bm</b>
Linda morena, fruta de vez temporana
                 <b>C#m7(5-)</b>
Caldo de cana caiana
 <b>F#7</b>          <b>Bm</b>
Vou te desfrutar

         <b>C#m7(5-)</b>    <b>F#7</b>         <b>Bm</b>
Linda morena, fruta de vez temporana
                 <b>C#m7(5-)</b>
Caldo de cana caiana
 <b>F#7</b>          <b>Bm</b>
Vou te desfrutar

[Refrão]

             <b>Bm</b>     
Morena tropicana
                  <b>F#m</b>
Eu quero o teu sabor
<b>Em</b>  <b>F#7</b>     <b>Bm</b>
Oi, oi, oi, oi

             
Morena tropicana
                  <b>F#m</b>
Eu quero o teu sabor
<b>Em</b>  <b>F#7</b>     <b>Bm</b>
Oi, oi, oi, oi

               
Morena tropicana
                  <b>F#m</b>
Eu quero o teu sabor
<b>Em</b>  <b>F#7</b>     <b>Bm</b>
Oi, oi, oi, oi
                <b>F#m</b>                        
Morena tropicana

----------------- Acordes -----------------
A = X 0 2 2 2 0
Bm = X 2 4 4 3 2
C#m7(5-) = X 4 5 4 5 X
D = X X 0 2 3 2
Em = 0 2 2 0 0 0
F#7 = 2 4 2 3 2 2
F#m = 2 4 4 2 2 2
G = 3 2 0 0 0 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TropicanaMorenaTropicanaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/alceu-valenca/morena-tropicana/"
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
