import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/banda-eva/pequena-eva/

const cifra = `Banda Eva - Eva

[Intro] <b>D</b>  <b>A/C#</b>  <b>Bm</b>  <b>Bm/A</b>
        <b>G</b>  <b>G/F#</b>  <b>Em</b>  <b>A</b>

<span class="tablatura">[Tab - Intro]

Parte 1 de 2
<span class="cnt">E|--------------7---------------------------7----------|
B|-7-----7-8-10---10--8h10p8--7------7-8-10---7--------|
G|-----7---------------------------7-------------9--7--|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
<span class="cnt">E|-----------------------------------------------------|
B|-----------------------------------------------------|
G|---9/11--9-------------------------------------------|
D|-9---------9/11--9--7--------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

[Primeira Parte]

          <b>G</b>
Meu amor,   olha só
                     <b>A</b>
Hoje o Sol não apareceu
     <b>G</b>                         
É o fim da aventura
                <b>D</b>   
Humana na Terra
                    <b>G</b>                                
Meu planeta, adeus!   Fugiremos
                      <b>A</b>     
Nós dois na arca de Noé
                    <b>G</b>
Mas olha bem, meu amor
                            <b>D</b>
O final da odisséia terrestre
              <b>Em</b>
Sou Adão e você será

[Refrão]

              <b>D</b>
Minha pequena Eva (Eva)
                       
O nosso amor na  
       <b>A/C#</b>  <b>Bm</b>
Última astronave (Eva)
                     <b>Bm/A</b>  <b>G</b>  <b>G/F#</b>  <b>Em</b>
Além do infinito eu vou  voar
         <b>A</b>
Sozinho com você

             <b>D</b>     
E voando bem alto (Eva)
                         
Me abraça pelo espaço 
   <b>A/C#</b>   <b>Bm</b>
De um instante (Eva)
                       
Me cobre com teu corpo 
<b>Bm/A</b>  <b>G</b>  <b>G/F#</b>  <b>Em</b>
E me dá
          <b>A</b>
A força pra viver

[Primeira Parte]

          <b>G</b>
Meu amor,   olha só
                     <b>A</b>
Hoje o Sol não apareceu
     <b>G</b>                         
É o fim da aventura
              <b>D</b>    
Humana na Terra
                    <b>G</b>                                
Meu planeta, adeus!   Fugiremos
                      <b>A</b>      
Nós dois na arca de Noé
                    <b>G</b>
Mas olha bem, meu amor
                            <b>D</b>
O final da odisséia terrestre
              <b>Em</b>
Sou Adão e você será

[Refrão]

              <b>D</b>
Minha pequena Eva (Eva)
                       
O nosso amor na  
       <b>A/C#</b>  <b>Bm</b>
Última astronave (Eva)
                     <b>Bm/A</b>  <b>G</b>  <b>G/F#</b>  <b>Em</b>
Além do infinito eu vou  voar
         <b>A</b>
Sozinho com você

             <b>D</b>     
E voando bem alto (Eva)
                         
Me abraça pelo espaço 
   <b>A/C#</b>   <b>Bm</b>
De um instante (Eva)
                       
Me cobre com teu corpo 
<b>Bm/A</b>  <b>G</b>  <b>G/F#</b>  <b>Em</b>
E me dá
          <b>A</b>
A força pra viver

[Ponte]

                        <b>Bm</b>   <b>A</b>
E pelo espaço de um instante
                <b>G</b>
Afinal, não há nada mais
       <b>Em</b>                  
Que o céu azul pra gente voar

[Segunda Parte] 

<b>G</b> 
  Sobre o Rio, Beirute
           <b>A</b>
Ou Madagascar
             <b>G</b>                      
Toda a Terra   reduzida a nada
      <b>D</b>
Nada mais
                             <b>G</b>
E a minha vida é um flash (flash)
                               <b>A</b>     
De controles botões anti-atômicos
                   <b>G</b>
Mas olha bem meu amor
                             <b>D</b>
No final da odisséia terrestre
              <b>Em</b>
Sou Adão e você

Diz pra mim o que você será

[Refrão Final]

              <b>D</b>
Minha pequena Eva (Eva)
                       
O nosso amor na  
       <b>A/C#</b>  <b>Bm</b>
Última astronave (Eva)
                     <b>Bm/A</b>  <b>G</b>  <b>G/F#</b>  <b>Em</b>
Além do infinito eu vou  voar
         <b>A</b>
Sozinho com você

             <b>D</b>     
E voando bem alto (Eva)
                         
Me abraça pelo espaço 
   <b>A/C#</b>   <b>Bm</b>
De um instante (Eva)
                       
Me cobre com teu corpo 
<b>Bm/A</b>  <b>G</b>  <b>G/F#</b>  <b>Em</b>
E me dá
          <b>A</b>
A força pra viver

              <b>D</b>
Minha pequena Eva (Eva)
                       
O nosso amor na  
       <b>A/C#</b>  <b>Bm</b>
Última astronave (Eva)
                     <b>Bm/A</b>  <b>G</b>  <b>G/F#</b>  <b>Em</b>
Além do infinito eu vou  voar
         <b>A</b>
Sozinho com você

             <b>D</b>     
E voando bem alto (Eva)
                         
Me abraça pelo espaço 
   <b>A/C#</b>   <b>Bm</b>
De um instante (Eva)
                       
Me cobre com teu corpo 
<b>Bm/A</b>  <b>G</b>  <b>G/F#</b>  <b>Em</b>
E me dá
          <b>A</b>
A força pra viver
                <b>D</b>
Minha pequena Eva

----------------- Acordes -----------------
A = X 0 2 2 2 0
A/C# = X 4 2 2 2 X
Bm = X 2 4 4 3 2
Bm/A = X 0 4 4 3 2
D = X X 0 2 3 2
Em = 0 2 2 0 0 0
G = 3 2 0 0 3 3
G/F# = 2 X 0 0 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EvaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/banda-eva/pequena-eva/"
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
