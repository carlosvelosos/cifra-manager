import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/grupo-menos-e-mais/vai-me-dando-corda/

const cifra = `Grupo Menos É Mais - Vai Me Dando Corda

[Intro] <b>Bb7M(9)</b>  <b>Bb7M</b>  <b>Ab7M(9)</b>  <b>Ab7M</b> 
        <b>Gb7M(9)</b>  <b>Gb7M</b>  <b>Bb6(9)</b>

[Primeira Parte] 

<b>Bb6(9)</b>
       Eu tinha tudo pra não ir
<b>Bb/Ab</b>                               <b>Eb7M(9)</b>                                     
      Foi pura sorte te conheci nesse domingo
                <b>Ebm6</b> 
E esse domingo foi tão lindo
<b>Bb6(9)</b> 
       Tantos amigos em comum
           <b>Bb/Ab</b>             
Mas nunca vi você sambando em lugar algum
         <b>Eb7M(9)</b>              <b>Ebm6</b> 
Só no domingo e esse domingo foi tão lindo
        <b>Bb6(9)</b>                          
Puro calor e eu ligado em você
        <b>Bb/Ab</b>                  
Até segui no instagram pra saber qual vai ser
            <b>Eb7M(9)</b>  
Antes de me envolver já deixei tudo claro
     <b>Ebm6</b>                                  
Sou complicado, apegado 
   <b>Bb9</b> 
E ainda

Tenho a porcentagem de safado
   <b>Bb/Ab</b> 
É só ligar os fatos
    <b>Gº</b>             <b>Ebm6</b>  <b>Ab6(9)</b>
Melhor tomar cuidado

[Refrão]

 <b>Bb6(9)</b>
Vai me dando corda
                       <b>Bb/Ab</b> 
Que rapidinho eu tô batendo na sua porta
                       <b>Eb7M(9)</b>  
A gente brinca de se apega e não se solta

Depois não tem volta
<b>Gb7M</b>                   <b>Ab6(9)</b>
     Pensa na proposta

 <b>Bb6(9)</b>
Vai me dando corda
                       <b>Bb/Ab</b> 
Que rapidinho eu tô batendo na sua porta
                       <b>Eb7M(9)</b>  
A gente brinca de se apega e não se solta

Depois não tem volta
<b>Gb7M</b>                   <b>Ab6(9)</b>
     Pensa na proposta

 <b>Bb6(9)</b>
Vai me dando corda
                       <b>Bb/Ab</b> 
Que rapidinho eu tô batendo na sua porta
                       <b>Eb7M(9)</b>  
A gente brinca de se apega e não se solta

Depois não tem volta
<b>Gb7M</b>                   <b>Ab6(9)</b>
     Pensa na proposta

 <b>Bb6(9)</b>
Vai me dando corda
                       <b>Bb/Ab</b> 
Que rapidinho eu tô batendo na sua porta
                       <b>Eb7M(9)</b>  
A gente brinca de se apega e não se solta

Depois não tem volta
<b>Gb7M</b>                        
     Pensa na proposta  
        <b>Ab6(9)</b> 
Que eu fecho com você

( <b>Bb6(9)</b>  <b>Ab6(9)</b>  <b>Gb7(5-)</b> <b>F7(4/9)</b> )

[Primeira Parte] 

<b>Bb6(9)</b>
       Eu tinha tudo pra não ir
          <b>Bb/Ab</b>                    <b>Eb7M(9)</b>                                     
Foi pura sorte te conheci nesse domingo
                <b>Ebm6</b> 
E esse domingo foi tão lindo
<b>Bb6(9)</b> 
       Tantos amigos em comum
           <b>Bb/Ab</b>             
Mas nunca vi você sambando em lugar algum
         <b>Eb7M(9)</b>              <b>Ebm6</b> 
Só no domingo e esse domingo foi tão lindo
        <b>Bb6(9)</b>                          
Puro calor e eu ligado em você
        <b>Bb/Ab</b>                  
Até segui no instagram pra saber qual vai ser
            <b>Eb7M(9)</b>  
Antes de me envolver já deixei tudo claro
     <b>Ebm6</b>                                  
Sou complicado, apegado 
   <b>Bb9</b> 
E ainda

Tenho a porcentagem de safado
   <b>Bb/Ab</b> 
É só ligar os fatos
    <b>Gº</b>             <b>Ebm6</b>  <b>Ab6(9)</b>
Melhor tomar cuidado

[Refrão Final]

 <b>Bb6(9)</b>
Vai me dando corda
                       <b>Bb/Ab</b> 
Que rapidinho eu tô batendo na sua porta
                       <b>Eb7M(9)</b>  
A gente brinca de se apega e não se solta

Depois não tem volta
<b>Gb7M</b>                   <b>Ab6(9)</b>
     Pensa na proposta

 <b>Bb6(9)</b>
Vai me dando corda
                       <b>Bb/Ab</b> 
Que rapidinho eu tô batendo na sua porta
                       <b>Eb7M(9)</b>  
A gente brinca de se apega e não se solta

Depois não tem volta
<b>Gb7M</b>                   <b>Ab6(9)</b>
     Pensa na proposta

 <b>Bb6(9)</b>
Vai me dando corda
                       <b>Bb/Ab</b> 
Que rapidinho eu tô batendo na sua porta
                       <b>Eb7M(9)</b>  
A gente brinca de se apega e não se solta

Depois não tem volta
<b>Gb7M</b>                  
     Pensa na proposta
  <b>Ab6(9)</b>
Pra não se perder

 <b>Bb6(9)</b>
Vai me dando corda
                       <b>Bb/Ab</b> 
Que rapidinho eu tô batendo na sua porta
                       <b>Eb7M(9)</b>  
A gente brinca de se apega e não se solta

Depois não tem volta
<b>Gb7M</b>                   <b>Ab6(9)</b>       
     Pensa na proposta  

[Final] <b>Bb6(9)</b>  <b>Ab6(9)</b>  <b>Gm7(11)</b> <b>F7(4/9)</b> 
        <b>Bb6(9)</b>  <b>Ab6(9)</b>  <b>Ebm6</b> 
        <b>Bb6(9)</b>  <b>Ab6(9)</b>  <b>Gb7(5-)</b> <b>F7(4/9)</b> 
        <b>Bb6(9)</b>  <b>Ab6(9)</b>  <b>Ebm6</b>  <b>B7M</b>  <b>Bb7M</b>

----------------- Acordes -----------------
Ab6(9) = 4 3 3 3 X X
Ab7M = 4 X 5 5 4 X
Ab7M(9) = 4 3 5 3 X X
B7M = X 2 4 3 4 2
Bb/Ab = 4 X 3 3 3 X
Bb6(9) = 6 5 5 5 X X
Bb7M = X 1 3 2 3 1
Bb7M(9) = X 1 0 2 1 X
Bb9 = X 1 3 3 1 1
Eb7M(9) = X 6 5 7 6 X
Ebm6 = X X 1 3 1 2
F7(4/9) = X X 3 3 4 3
Gb7(5-) = 2 X 2 3 1 X
Gb7M = 2 X 3 3 2 X
Gb7M(9) = 2 1 3 1 X X
Gm7(11) = 3 X 3 3 1 X
Gº = 3 X 2 3 2 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VaiMeDandoCordaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/grupo-menos-e-mais/vai-me-dando-corda/"
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
