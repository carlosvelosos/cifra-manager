import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/seu-jorge/burguesinha/#

const cifra = `Seu Jorge - Burguesinha

[Intro] <b>A7M</b>  <b>D7M</b>  <b>A7M</b>  <b>D7M</b> 
        <b>A7M</b>  <b>D7M</b>  <b>A7M</b>  <b>D7M</b> 
        <b>A7M</b>  <b>D7M</b>  <b>A7M</b>  <b>D7M</b> 
        <b>A7M</b>  <b>D7M</b>  <b>A7M</b>  <b>D7M</b> 
        <b>A7M</b>  <b>D7M</b> 

[Primeira Parte]

              <b>A7M</b>
Vai no cabelereiro
          <b>D7M</b>
No esteticista
               <b>A7M</b>
Malha o dia inteiro
           <b>D7M</b>
Vida de artista

[Segunda Parte]

         <b>C#m7</b>
Saca dinheiro

Vai de motorista
                 <b>Bm7</b>
Com seu carro esporte
             <b>E7(9)</b>
Vai zoar na pista

[Primeira Parte]

            <b>A7M</b>
Final de semana
             <b>D7M</b>
Na casa de praia
              <b>A7M</b>
Só gastando grana
              <b>D7M</b>
Na maior gandaia

[Segunda Parte]

           <b>C#m7</b>
Vai pra balada

Dança bate estaca
            <b>Bm7</b>
Com a sua tribo
             <b>E7(9)</b>
Até de madrugada

[Refrão]

       <b>A7M</b>          
Burguesinha, burguesinha, burguesinha
                    <b>D7M</b>
Burguesinha, burguesinha

Só no filé
       <b>A7M</b>     
Burguesinha, burguesinha, burguesinha
                    <b>D7M</b>
Burguesinha, burguesinha

Tem o que quer

       <b>A7M</b>              
Burguesinha, burguesinha, burguesinha
                    <b>D7M</b>
Burguesinha, burguesinha

Um croassaint
       <b>A7M</b>            
Burguesinha, burguesinha, burguesinha
                    <b>D7M</b>
Burguesinha, burguesinha

Suquinho de maçã
       <b>A7M</b>                  
Burguesinha, burguesinha, burguesinha
                    <b>D7M</b>
Burguesinha, burguesinha

[Primeira Parte]

              <b>A7M</b>
Vai no cabelereiro
          <b>D7M</b>
No esteticista
               <b>A7M</b>
Malha o dia inteiro
           <b>D7M</b>
Vida de artista

[Segunda Parte]

         <b>C#m7</b>
Saca dinheiro

Vai de motorista
                 <b>Bm7</b>
Com seu carro esporte
             <b>E7(9)</b>
Vai zoar na pista

[Primeira Parte]

            <b>A7M</b>
Final de semana
             <b>D7M</b>
Na casa de praia
              <b>A7M</b>
Só gastando grana
              <b>D7M</b>
Na maior gandaia

[Segunda Parte]

           <b>C#m7</b>
Vai pra balada

Dança bate estaca
            <b>Bm7</b>
Com a sua tribo
             <b>E7(9)</b>
Até de madrugada

[Refrão]

       <b>A7M</b>          
Burguesinha, burguesinha, burguesinha
                    <b>D7M</b>
Burguesinha, burguesinha

Só no filé
       <b>A7M</b>                               
Burguesinha, burguesinha, burguesinha
                    <b>D7M</b>
Burguesinha, burguesinha

Tem o que quer

       <b>A7M</b>                               
Burguesinha, burguesinha, burguesinha
                    <b>D7M</b>
Burguesinha, burguesinha

Um croassaint

       <b>A7M</b>       
Burguesinha, burguesinha, burguesinha
                    <b>D7M</b>
Burguesinha, burguesinha

Suquinho de maçã
       <b>A7M</b>        
Burguesinha, burguesinha, burguesinha
                    <b>D7M</b>
Burguesinha, burguesinha

Só no filé

       <b>A7M</b> 
Burguesinha, burguesinha, burguesinha
                    <b>D7M</b>
Burguesinha, burguesinha

Tem o que quer

       <b>A7M</b>       
Burguesinha, burguesinha, burguesinha
                    <b>D7M</b>
Burguesinha, burguesinha

Um croassaint

       <b>A7M</b>          
Burguesinha, burguesinha, burguesinha
                    <b>D7M</b>
Burguesinha, burguesinha

Suquinho de maçã

       <b>A7M</b>                           <b>D7M</b>
Burguesinha, é burguesinha, é burguesinha
       <b>A7M</b>          
Burguesinha, burguesinha, burguesinha
                    <b>D7M</b>
Burguesinha, burguesinha
         <b>A7M</b>                       <b>D7M</b>
É burguesinha, é burguesinha, burguesa, burguesa
       <b>A7M</b>          
Burguesinha, burguesinha, burguesinha
                    <b>D7M</b>
Burguesinha, burguesinha

[Final] <b>A7M</b>  <b>D7M</b>  <b>A7M</b>  <b>D7M</b> 
        <b>A7M</b>  <b>D7M</b>  <b>A7M</b>  <b>D7M</b>
        <b>A7M</b>  <b>D7M</b>  <b>A7M</b>  <b>D7M</b>
        <b>A7M</b>  <b>D7M</b>  <b>A7M</b>  <b>D7M</b>`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function BurguesinhaPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/seu-jorge/burguesinha/#"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
      />
      <FloatingMenu />
    </>
  );
}
