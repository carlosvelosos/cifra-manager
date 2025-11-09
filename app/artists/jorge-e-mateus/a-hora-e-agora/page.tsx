import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/jorge-mateus/agora-e-a-hora/

const cifra = `Jorge & Mateus - A Hora É Agora

[Intro] <b>Am</b>  <b>C</b>  <b>G</b>  <b>D</b>

<b>Am</b>    <b>C</b>       <b>G</b>             <b>D</b>
Oh oh,  na na   na na na na   na na na
<b>Am</b>    <b>C</b>       <b>G</b>             <b>D</b>
Oh oh,  na na   na na na na   na na na
<b>Am</b>    <b>C</b>       <b>G</b>             <b>D</b>
Oh oh,  na na   na na na na   na na na

[Primeira Parte]

<b>Am</b>
   Aumente o som
<b>C</b>                        <b>G</b>    
  Pra ficar bom a nossa festa
                 <b>D</b>
Não tem hora pra acabar
<b>Am</b>                <b>C</b> 
   O teu sorriso
                     <b>G</b>
Abre as portas do paraíso
                   <b>D</b>
Vem comigo pra gente dançar
<b>Am</b>                <b>C</b>
   A melhor hora,   sempre é agora
        <b>G</b>                         <b>D</b>
E o melhor lugar é sempre onde você está
<b>Am</b>
   E a luz nunca se apaga
<b>C</b>
  Juízo sempre acaba
<b>Am</b>            <b>C</b>          <b>D</b>
   E a nossa música vai começar

[Refrão]

 <b>G</b>
Paz e amor
             <b>C</b>
É o que eu quero pra nós
       <b>Em</b>         <b>D</b>                  <b>C</b>
E que nada nesse mundo cale a nossa voz
 <b>G</b>              <b>C</b>
Céu e mar e alguém para amar
         <b>Em</b>          <b>D</b>  
E o arrepio toda vez
                      <b>C</b>
Que a gente se encontrar

         <b>Am</b>
E nunca vai passar
                <b>C</b>         <b>D</b>
Mesmo quando o sol chegar oh oh

 <b>Am</b>   <b>C</b>       <b>G</b>             <b>D</b>
Na na,  na na   na na na na   na nana
<b>Am</b>    <b>C</b>       <b>G</b>             <b>D</b>
Oh oh,  na na   na na na na   na nana

[Primeira Parte]

<b>Am</b>
   Aumente o som
<b>C</b>                        <b>G</b>    
  Pra ficar bom a nossa festa
                 <b>D</b>
Não tem hora pra acabar
<b>Am</b>                <b>C</b> 
   O teu sorriso
                     <b>G</b>
Abre as portas do paraíso
                   <b>D</b>
Vem comigo pra gente dançar
<b>Am</b>                <b>C</b>
   A melhor hora,   sempre é agora
        <b>G</b>                         <b>D</b>
E o melhor lugar é sempre onde você está
<b>Am</b>
   E a luz nunca se apaga
<b>C</b>
  Juízo sempre acaba
<b>Am</b>            <b>C</b>          <b>D</b>
   E a nossa música vai começar

[Refrão]

 <b>G</b>
Paz e amor
             <b>C</b>
É o que eu quero pra nós
       <b>Em</b>         <b>D</b>                  <b>C</b>
E que nada nesse mundo cale a nossa voz
 <b>G</b>              <b>C</b>
Céu e mar e alguém para amar
         <b>Em</b>          <b>D</b>  
E o arrepio toda vez
                      <b>C</b>
Que a gente se encontrar

 <b>G</b>
Paz e amor
             <b>C</b>
É o que eu quero pra nós
       <b>Em</b>         <b>D</b>                  <b>C</b>
E que nada nesse mundo cale a nossa voz
 <b>G</b>              <b>C</b>
Céu e mar e alguém para amar
         <b>Em</b>          <b>D</b>  
E o arrepio toda vez
                      <b>C</b>
Que a gente se encontrar

         <b>Am</b>
E nunca vai passar
                <b>C</b>         <b>D</b>
Mesmo quando o sol chegar oh oh

 <b>Am</b>   <b>C</b>       <b>G</b>             <b>D</b>
Na na,  na na   na na na na   na na na
 <b>Am</b>   <b>C</b>       <b>G</b>             <b>D</b>
Na na,  na na   na na na na   na na na
<b>Am</b>        <b>C</b>         <b>G</b>             <b>D</b>
Oh oh, oh oh  na na   na na na na   na na na
<b>Am</b>    <b>C</b>       <b>G</b>             <b>D</b>
Oh oh,  na na   na na na na   na na na
<b>Am</b>     <b>C</b>         <b>G</b>             <b>D</b>
Oh, oh oh  na na   na na na na   na nana

[Final] <b>Am</b>  <b>C</b>  <b>G</b>  <b>D</b> 
        <b>Am</b>  <b>C</b>  <b>G</b>  <b>D</b> 
        <b>Am</b>  <b>C</b>  <b>G</b>  <b>D</b> 
        <b>Am</b>

----------------- Acordes -----------------
Capotraste na 3ª casa
Cm*  = X 0 2 2 1 0 - (*D#m na forma de Cm)
D#*  = X 3 2 0 1 0 - (*F# na forma de D#)
F*  = X X 0 2 3 2 - (*G# na forma de F)
Gm*  = 0 2 2 0 0 0 - (*A#m na forma de Gm)
A#*  = 3 2 0 0 0 3 - (*C# na forma de A#)`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AHoraEAgoraPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jorge-mateus/agora-e-a-hora/"
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
