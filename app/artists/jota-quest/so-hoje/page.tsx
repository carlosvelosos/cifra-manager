import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/jota-quest/so-hoje/

const cifra = `Jota Quest - Só Hoje

[Primeira Parte]

 <b>E</b>                           
Hoje eu preciso te encontrar 
             <b>B5(9)</b>
De qualquer jeito
                             
Nem que seja só pra te levar 
     <b>C#m</b>
Pra casa
                     <b>A</b>
Depois de um dia normal
   <b>E</b>
Olhar teus olhos 

De promessas fáceis
         <b>B5(9)</b>     
E te beijar a boca
                         <b>C#m</b>
De um jeito que te faça rir
             <b>A</b>
Que te faça rir

 <b>F#m</b>
Hoje eu preciso te abraçar
    <b>B5(9)</b>
Sentir teu cheiro de roupa limpa
          <b>F#m</b>                
Pra esquecer os meus anseios 
      <b>B5(9)</b>
E dormir em paz

[Segunda Parte]

 <b>E</b>                    
Hoje eu preciso ouvir
                     <b>B5(9)</b>
Qualquer palavra tua
                         
Qualquer frase exagerada 
                   <b>C#m</b>     
Que me faça sentir alegria
          <b>A</b>
Em estar vivo

 <b>F#m</b>                          
Hoje eu preciso tomar um café 
   <b>B5(9)</b>
Ouvindo você suspirar
                   <b>F#m</b>
Me dizendo que eu sou 

O causador da tua insônia
        <b>B5(9)</b>                  <b>B7(4/9)</b>
Que eu faço tudo errado sempre

Sempre

[Refrão]

 <b>E</b>                 <b>F#m</b> 
Hoje preciso de você 
                <b>B5(9)</b>
Com qualquer humor
                 <b>E</b>
Com qualquer sorriso
                <b>F#m</b>  
Hoje só tua presença 
                 <b>B5(9)</b>   <b>Am</b>
Vai me deixar feliz, só hoje

( <b>D</b>  <b>Am</b>  <b>D</b>  <b>Am</b>  <b>D</b> )

[Segunda Parte]

 <b>G</b>                    
Hoje eu preciso ouvir 
                     <b>D</b>
Qualquer palavra tua
                         
Qualquer frase exagerada 
                   <b>Em</b>      
Que me faça sentir alegria 
          <b>C</b>
Em estar vivo

 <b>Am</b>                           
Hoje eu preciso tomar um café
   <b>D</b>
Ouvindo você suspirar
                   <b>Am</b>
Me dizendo que eu sou 

O causador da tua insônia
        <b>D</b>                      <b>D7(4/9)</b>
Que eu faço tudo errado sempre

Sempre

[Refrão Final]

 <b>G</b>                 <b>Am</b> 
Hoje preciso de você 
                <b>D</b>
com qualquer humor
                 <b>G</b>
Com qualquer sorriso
                <b>Am</b>   
Hoje só tua presença 
                 <b>D</b>       <b>G</b>
Vai me deixar feliz, só hoje

 <b>G</b>                 <b>Am</b> 
Hoje preciso de você 
                <b>D</b>
com qualquer humor
                 <b>G</b>
Com qualquer sorriso
                <b>Am</b>   
Hoje só tua presença 
                 <b>D</b>
Vai me deixar feliz, feliz
    <b>Cm</b>  <b>G</b>
Só hoje

----------------- Acordes -----------------
A = X 0 2 2 2 0
Am = X 0 2 2 1 0
B5(9) = X 2 4 4 2 2
B7(4/9) = X 2 2 2 2 2
C = X 3 2 0 1 0
C#m = X 4 6 6 5 4
Cm = X 3 5 5 4 3
D = X X 0 2 3 2
D7(4/9) = X 5 5 5 5 5
E = 0 2 2 1 0 0
Em = 0 2 2 0 0 0
F#m = 2 4 4 2 2 2
G = 3 2 0 0 3 3`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SoHojePage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jota-quest/so-hoje/"
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
