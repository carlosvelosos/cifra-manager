import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/charlie-brown-jr/ceu-azul/

const cifra = `Charlie Brown Jr. - Céu Azul

[Intro] <b>Em7(9)</b>  <b>D</b>  <b>Bm</b>  <b>A11</b>

<span class="tablatura">[Dedilhado - Intro]

Parte 1 de 2
   <b>Em7(9)</b>          <b>D</b>
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|----12---12---------12-------12-12--------|
D|----13---13---------13-------13-13--------|
A|------------------------------------------|
E|--0----0----0----11----11-11-------0------|
    ↓  ↑  ↓ ↑  ↓    ↓  ↑   ↓  ↓  ↑  ↑  ↓</span></span>

<span class="tablatura">Parte 2 de 2
   <b>Bm</b>           <b>A11</b>
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|----8---8--------7-----8-7----------------|
D|----0---0--------0---------0--------------|
A|------------------------------------------|
E|--8---8---0----6---6-6-------0------------|
    ↓ ↑  ↓ ↑ ↓    ↓ ↑ ↓ ↓  ↑ ↑ ↑ ↓</span></span>

[Primeira Parte] 

         <b>Em7(9)</b>               <b>D</b>
Tão natural quanto a luz do dia
             <b>Bm</b>      
Mas que preguiça boa 
         <b>A11</b>
Me deixa aqui a toa
          <b>Em7(9)</b>                <b>D</b>
Hoje ninguém vai estragar meu dia
           <b>Bm</b>         
Só vou gastar energia 
        <b>A11</b>
Pra beijar sua boca
<b>Em7(9)</b>                   
       Fica comigo então   
<b>D</b>
  Não me abandona não
<b>Bm</b>  <b>A11</b>                  <b>Em7(9)</b>
        Alguém te perguntou 
                     <b>D</b>
Como é que foi seu dia
       <b>Bm</b>         
Uma palavra amiga
     <b>A11</b>
Uma notícia boa
          <b>Em7(9)</b>          <b>D</b>
Isso faz falta no dia a dia
               <b>Bm</b>  
A gente nunca sabe 
                   <b>A11</b>
Quem são essas pessoas

[Pré-Refrão] 

<b>Em</b>                      <b>Bm11</b>
   Eu só queria te lembrar
            <b>A9</b>
Que aquele tempo 

Eu não podia fazer mais por nós
             <b>G</b>   
Eu estava errado 
                              <b>A9</b>
E você não tem que me perdoar
<b>Em</b>                          <b>Bm11</b>
   Mas também quero te mostrar
               <b>A9</b>
Que existe um lado bom nessa história
 <b>G</b>                                  <b>A9</b>
Tudo que ainda temos a compartilhar

[Refrão] 

     <b>Em7(9)</b>    <b>D</b>
E viver, e cantar
       <b>Bm</b>                <b>A11</b>
Não importa qual seja o dia
         <b>Em7(9)</b>  <b>D</b>
Vamos viver, vadiar
         <b>Bm</b>                 <b>A11</b>
O que importa é nossa alegria
         <b>Em7(9)</b>    <b>D</b>
Vamos viver, e cantar
       <b>Bm</b>                <b>A11</b>
Não importa qual seja o dia
         <b>Em7(9)</b>  <b>D</b>
Vamos viver, vadiar
         <b>Bm</b>                 <b>A11</b>
O que importa é nossa alegria

[Primeira Parte] 

         <b>Em7(9)</b>               <b>D</b>
Tão natural quanto a luz do dia
             <b>Bm</b>               <b>A11</b>
Mas que preguiça boa me deixa aqui a toa
          <b>Em7(9)</b>                <b>D</b>
Hoje ninguém vai estragar meu dia
           <b>Bm</b>                 <b>A11</b>
Só vou gastar energia pra beijar sua boca

[Pré-Refrão] 

<b>Em</b>                      <b>Bm11</b>
   Eu só queria te lembrar
            <b>A9</b>
Que aquele tempo 

Eu não podia fazer mais por nós
             <b>G</b>   
Eu estava errado 
                              <b>A9</b>
E você não tem que me perdoar
<b>Em</b>                          <b>Bm11</b>
   Mas também quero te mostrar
               <b>A9</b>
Que existe um lado bom nessa história
 <b>G</b>                                  <b>A9</b>
Tudo que ainda temos a compartilhar

[Refrão] 

     <b>Em7(9)</b>    <b>D</b>
E viver, e cantar
       <b>Bm</b>                <b>A11</b>
Não importa qual seja o dia
         <b>Em7(9)</b>  <b>D</b>
Vamos viver, vadiar
         <b>Bm</b>                 <b>A11</b>
O que importa é nossa alegria
         <b>Em7(9)</b>    <b>D</b>
Vamos viver, e cantar
       <b>Bm</b>                <b>A11</b>
Não importa qual seja o dia
         <b>Em7(9)</b>  <b>D</b>
Vamos viver, vadiar
         <b>Bm</b>                 <b>A11</b>
O que importa é nossa alegria

[Final] 

         <b>Em7(9)</b>
Tão natural quanto a luz do dia

----------------- Acordes -----------------
Capotraste na 1ª casa
A#11*  = 5 X 0 6 X X - (*B11 na forma de A#11)
A#9*  = 5 7 7 6 0 0 - (*B9 na forma de A#9)
Cm*  = X 2 4 4 3 2 - (*C#m na forma de Cm)
Cm11*  = X 2 4 4 3 0 - (*C#m11 na forma de Cm11)
D#*  = 10 X 12 11 X X - (*E na forma de D#)
Fm*  = 0 2 2 0 0 0 - (*F#m na forma de Fm)
Fm7(9)*  = 0 X 12 11 X X - (*F#m7(9) na forma de Fm7(9))
G#*  = 3 5 5 4 0 X - (*A na forma de G#)`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CeuAzulPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/charlie-brown-jr/ceu-azul/"
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
