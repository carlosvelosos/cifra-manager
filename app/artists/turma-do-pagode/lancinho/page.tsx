import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/turma-do-pagode/lancinho/#

const cifra = `Turma Do Pagode - Lancinho

Intro 2x:
<b>Bb/C</b>        <b>C/D</b>             <b>Bb/C</b>            <b>C/D</b>    <b>D7(b9)</b>
Uh uh uh uh uuuuuh uh uh uh uuuuuh uh uh uh uuuuuh

[Primeira Parte] 
<b>Gm7/11</b>
  Você sempre quis
              <b>Am7/11</b>          <b>D7(b9)</b>
Alguém que pudesse te fazer feliz
                <b>Bb7M</b>   <b>Am7/11</b>
Esse alguém sou eu
          <b>Gm7/11</b>   <b>Bb/C</b>  
Precisa saber

<b>Gm7/11</b>
Pra te completar
<b>Am7/11</b>       <b>D7(b9)</b>
 Estar com você
           <b>Bb7M</b>              <b>Am7/11</b>
Se ele não liga nem pra desejar
         <b>Gm7/11</b>                <b>D7(b9)</b>
 Uma boa noite ou saber como está

[Pré-Refrão] 
            <b>Gm7/11</b>                
Por isso me liga, querendo me ver
           <b>Am7/11</b>               <b>D7(b9)</b>
 E eu paro tudo pra estar com você
              <b>Gm7/11</b>    
 Preciso te dizer
  <b>C7/9</b>   <b>C/D</b>   <b>F#°</b>  
Quero você 

[Refrão] 
  <b>Gm7/11</b>
Namora, mas adora um proibido
                 <b>Am7/11</b>               <b>D7(b9)</b>
 E eu que sou culpado e eu que sou bandido
     <b>Gm7/11</b>
 Prefere um romance escondido
             <b>Am7/11</b>                  <b>D7(b9)</b>
 Sai na madrugada pra dar lancinho comigo

 <b>Gm7/11</b>
Namora, mas adora um proibido
                 <b>Am7/11</b>               <b>D7(b9)</b>
 E eu que sou culpado e eu que sou bandido
    <b>Gm7/11</b>
 Prefere um romance escondido
             <b>Am7/11</b>                  <b>D7(b9)</b>
 Sai na madrugada pra dar lancinho comigo

[Pós-Refrão]
<b>Bb/C</b>        <b>C/D</b>             <b>Bb/C</b>            <b>C/D</b>    <b>D7(b9)</b>
Uh uh uh uh uuuuuh uh uh uh uuuuuh uh uh uh uuuuuh

[Primeira Parte] 
<b>Gm7/11</b>
  Você sempre quis
              <b>Am7/11</b>          <b>D7(b9)</b>
Alguém que pudesse te fazer feliz
                <b>Bb7M</b>   <b>Am7/11</b>
Esse alguém sou eu
          <b>Gm7/11</b>   <b>Bb/C</b>  
Precisa saber

<b>Gm7/11</b>
Pra te completar
<b>Am7/11</b>       <b>D7(b9)</b>
 Estar com você
           <b>Bb7M</b>              <b>Am7/11</b>
Se ele não liga nem pra desejar
         <b>Gm7/11</b>                <b>D7(b9)</b>
 Uma boa noite ou saber como está

[Pré-Refrão] 
            <b>Gm7/11</b>                
Por isso me liga, querendo me ver
           <b>Am7/11</b>               <b>D7(b9)</b>
 E eu paro tudo pra estar com você
              <b>Gm7/11</b>    
 Preciso te dizer
  <b>C7/9</b>   <b>C/D</b>   <b>F#°</b>  
Quero você 

[Refrão] 
  <b>Gm7/11</b>
Namora, mas adora um proibido
                 <b>Am7/11</b>               <b>D7(b9)</b>
 E eu que sou culpado e eu que sou bandido
     <b>Gm7/11</b>
 Prefere um romance escondido
             <b>Am7/11</b>                  <b>D7(b9)</b>
 Sai na madrugada pra dar lancinho comigo

 <b>Gm7/11</b>
Namora, mas adora um proibido
                 <b>Am7/11</b>               <b>D7(b9)</b>
 E eu que sou culpado e eu que sou bandido
    <b>Gm7/11</b>
 Prefere um romance escondido
             <b>Am7/11</b>                  <b>D7(b9)</b>
 Sai na madrugada pra dar lancinho comigo

 <b>Gm7/11</b>
Namora, mas adora um proibido
                 <b>Am7/11</b>               <b>D7(b9)</b>
 E eu que sou culpado e eu que sou bandido
    <b>Gm7/11</b>
 Prefere um romance escondido
             <b>Am7/11</b>                  <b>D7(b9)</b>
 Sai na madrugada pra dar lancinho comigo

 <b>Gm7/11</b>
Namora, mas adora um proibido
                 <b>Am7/11</b>               <b>D7(b9)</b>
 E eu que sou culpado e eu que sou bandido
    <b>Gm7/11</b>
 Prefere um romance escondido
             <b>Am7/11</b>                  <b>D7(b9)</b>
 Sai na madrugada pra dar lancinho comigo

[Pós-Refrão]
<b>Bb/C</b>        <b>C/D</b>             <b>Bb/C</b>            <b>C/D</b>    <b>D7(b9)</b>
Uh uh uh uh uuuuuh uh uh uh uuuuuh uh uh uh uuuuuh

<b>Bb/C</b>        <b>C/D</b>             <b>Bb/C</b>            <b>C/D</b>    <b>D7(b9)</b>
Uh uh uh uh uuuuuh uh uh uh uuuuuh uh uh uh uuuuuh

<b>Gm7/11</b>         <b>Gm7/11</b>
  Você sempre quis`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function LancinhoPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/turma-do-pagode/lancinho/#"
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
