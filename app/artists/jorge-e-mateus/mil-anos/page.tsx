import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/jorge-mateus/mil-anos/

const cifra = `Jorge & Mateus - Mil Anos

[Intro] <b>Am</b>  <b>F</b>  <b>C</b>  <b>G</b>  <b>Am</b>  <b>F</b>

[Tab - Solo Intro] 

<span class="tablatura">Parte 1 de 2
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|--5---------5---5-7-5---------------------|
D|----7-7-------7-------7-7---5-5h7~--------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|---5-5------------------5-----------------|
A|-3----------5-5-----5/7---7-5-0-----------|
E|----------3-------------------------------|</span></span>

[Primeira Parte]

      <b>Am</b>                              
Você fala demais
               <b>F</b>
Diz muitas besteiras da boca pra fora
     <b>C</b>                  
Mas sei que se arrepende 
       <b>G</b>                      <b>Am</b>  <b>F</b>
Por jogar o que não era lixo fora

       <b>C</b>                <b>G</b>          
Você briga, me ignora, pisa na bola
 <b>Am</b>              <b>F</b>
Sente saudades chora
 <b>Dm</b>                        <b>F</b>                <b>G</b>
Diz que é de raiva pra não assumir que me adora
    <b>C</b>                    
Eu sei que um grande amor
         <b>G</b>
Não é fácil de se encontrar
 <b>Am</b>                          <b>F</b>
Mais difícil ainda é deixar de gostar
       <b>Dm</b>                  <b>Bb</b>         
Se o clima ta pesado não existe pecado 
            <b>G</b>
Que não se possa perdoar
     <b>C</b>                      <b>G</b>
Vai ver a gente não conhece o amor direito
    <b>Am</b>                       <b>F</b>         
Prazer eu sou um cara cheio de defeitos 
<b>Dm</b>            <b>Bb</b>                  <b>G</b>
Igualzinho aquele, que você aprendeu a amar

[Refrão]

             <b>F</b>            
Mesmo que o Sol se apague 
       <b>G</b>                          <b>Am</b>        (Riff 1)
Vem a Lua te trazer de volta aos sonhos meus
         <b>F</b>               
Pode passar mil anos você 
 <b>G</b>                            <b>Am</b>       (Riff 2)
Vai me amar e eu vou ser pra sempre seu
             <b>F</b>           
Mesmo que o Sol se apague 
       <b>G</b>                          <b>Am</b>        (Riff 3)
Vem a Lua te trazer de volta aos sonhos meus
         <b>F</b>          
Pode passar mil anos 
      <b>G</b>                            <b>Am</b>
Você vai me amar e eu vou ser pra sempre seu

[Riff 1]

<span class="tablatura"><span class="cnt">E|--7/8-8-8-7-7-7-5-5-5~-------------------------|
B|-----------------------------------------------|
G|-----------------------------------------------|
D|-----------------------------------------------|
A|-----------------------------------------------|
E|-----------------------------------------------|</span></span>

[Riff 2]

<span class="tablatura"><span class="cnt">E|-----------------------------------------------|
B|-8/10-10-10-12-12-12-13-13-13~-----------------|
G|-----------------------------------------------|
D|-----------------------------------------------|
A|-----------------------------------------------|
E|-----------------------------------------------|</span></span>

[Riff 3]

<span class="tablatura"><span class="cnt">E|--10/12-12-12-10-10-10-8-8-8~------------------|
B|-----------------------------------------------|
G|-----------------------------------------------|
D|-----------------------------------------------|
A|-----------------------------------------------|
E|-----------------------------------------------|</span></span>

[Solo] <b>Am</b>  <b>F</b>  <b>C</b>  <b>G</b>  <b>Am</b>  <b>F</b>

<span class="tablatura"><span class="cnt">E|--8---------8----8----8-10--12r10-8-15-12~-----|
B|----10-10~----10---10--------------------------|
G|-----------------------------------------------|
D|-----------------------------------------------|
A|-----------------------------------------------|
E|-----------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-----------------------------------------------|
B|---------------------------------------------8-|
G|-----------------------------5---5-7-5-7-7/9---|
D|-----------------5---5-7-5-7---7---------------|
A|-----5---5-7-5-7---7---------------------------|
E|-5-8---8---------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-----------------------------------------------|
B|-----------------------------------------------|
G|-9\7-5-------5---------------------------------|
D|-------7-5-7---7-7-----------------------------|
A|-----------------------------------------------|
E|-----------------------------------------------|</span></span>


       <b>C</b>                <b>G</b>          
Você briga, me ignora, pisa na bola
 <b>Am</b>              <b>F</b>
Sente saudades chora
 <b>Dm</b>                        <b>F</b>                <b>G</b>
Diz que é de raiva pra não assumir que me adora
    <b>C</b>                    
Eu sei que um grande amor
         <b>G</b>
Não é fácil de se encontrar
 <b>Am</b>                          <b>F</b>
Mais difícil ainda é deixar de gostar
       <b>Dm</b>                  <b>Bb</b>         
Se o clima ta pesado não existe pecado 
            <b>G</b>
Que não se possa perdoar
     <b>C</b>                      <b>G</b>
Vai ver a gente não conhece o amor direito
    <b>Am</b>                       <b>F</b>         
Prazer eu sou um cara cheio de defeitos 
<b>Dm</b>            <b>Bb</b>                  <b>G</b>
Igualzinho aquele, que você aprendeu a amar

[Refrão]

             <b>F</b>            
Mesmo que o Sol se apague 
       <b>G</b>                          <b>Am</b>        (Riff 1)
Vem a Lua te trazer de volta aos sonhos meus
         <b>F</b>               
Pode passar mil anos você 
 <b>G</b>                            <b>Am</b>       (Riff 2)
Vai me amar e eu vou ser pra sempre seu
             <b>F</b>           
Mesmo que o Sol se apague 
       <b>G</b>                          <b>Am</b>        (Riff 3)
Vem a Lua te trazer de volta aos sonhos meus
         <b>F</b>          
Pode passar mil anos 
      <b>G</b>                            <b>Am</b>
Você vai me amar e eu vou ser pra sempre seu

<span class="tablatura">[Tab - Solo Final]

<span class="cnt">E|-------12--------10--5-------------------------|
B|----13--------12-----5-------------------------|
G|-14--------12--------5-------------------------|
D|-----------------------------------------------|
A|-----------------------------------------------|
E|-----------------------------------------------|</span></span>

----------------- Acordes -----------------
Am = X 0 2 2 1 0
Bb = X 1 3 3 3 1
C = X 3 2 0 1 0
Dm = X X 0 2 3 1
F = 1 3 3 2 1 1
G = 3 2 0 0 0 3`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MilAnosPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jorge-mateus/mil-anos/"
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
