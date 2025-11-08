import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/charlie-brown-jr/dias-de-luta-dias-de-gloria/

const cifra = `Charlie Brown Jr. - Dias de Luta, Dias de Glória

[Intro]

<span class="tablatura">[Tab - Intro]

Parte 1 de 4
    <b>C7M</b>            <b>Am9</b>
<span class="cnt">E|----------------------------------|
B|-------0--------------1-----------|
G|---0-----0---0----4-----4----0----|
D|----------------------------------|
A|-3---3-----3----0---0------0------|
E|----------------------------------|</span></span>

Parte 2 de 4
   Em                     H.N......
<span class="tablatura"><span class="cnt">E|-------------------------12----12-|
B|---------0-------------7----12----|
G|---0--------0----0---0------------|
D|----------------------------------|
A|----------------------------------|
E|-0---0---------0---0--------------|</span></span>

<span class="tablatura">Parte 3 de 4
     <b>C7M</b>
<span class="cnt">E|----------------------------------|
B|--------0-------0-------1---------|
G|---0-------0--------4-----4---0---|
D|----------------------------------|
A|-3---3--------3---0---0-----0-----|
E|----------------------------------|</span></span>

<span class="tablatura">Parte 4 de 4
    <b>Em</b>              <b>G</b>
<span class="cnt">E|----------------------------------|
B|---------0------------------------|
G|-----0-----0---0---0---2---0------|
D|-0h2---2-----2--------------------|
A|----------------------------------|
E|-----------------3---3---3--------|</span></span>

<b>C7M</b>  <b>Am9</b>  <b>Em</b>
         Canto a minha vida com orgulho

[Primeira Parte]

<span class="tablatura">Parte 1 de 4
    <b>C7M</b>            <b>Am9</b>
<span class="cnt">E|--------------------------------|
B|-------0--------------1---------|
G|---0-----0---0----4-----4----0--|
D|--------------------------------|
A|-3---3-----3----0---0------0----|
E|--------------------------------|</span></span>

<span class="tablatura">Parte 2 de 4
    <b>Em</b>
<span class="cnt">E|--------------------------------|
B|--------0--------------0--------|
G|---0-------0---0---0-----0---0--|
D|--------------------------------|
A|--------------------------------|
E|-0---0-------0---0---0-----0----|</span></span>

<span class="tablatura">Parte 3 de 4 
    <b>C7M</b>
<span class="cnt">E|--------------------------------|
B|--------0-------0-------1-------|
G|---0-------0--------4-----4---0-|
D|--------------------------------|
A|-3---3--------3---0---0-----0---|
E|--------------------------------|</span></span>

<span class="tablatura">Parte 4 de 4
    <b>Em</b>              <b>G</b>
<span class="cnt">E|--------------------------------|
B|---------0----------------------|
G|-----0-----0---0---0---2---0----|
D|-0h2---2-----2------------------|
A|--------------------------------|
E|-----------------3---3---3------|</span></span>

          <b>C7M</b>           <b>Am9</b>
Na minha vida tudo acontece
                         <b>Em</b>                  
Mas quanto mais a gente rala

Mais a gente cresce
 <b>C7M</b>            
Hoje estou feliz
              <b>Am9</b>
Porque eu sonhei com você
       <b>Em</b>             
E amanhã posso chorar 
           <b>G</b>
Por não poder te ver

    <b>C7M</b>              
Mas    o seu sorriso 
      <b>Am9</b>
Vale mais que um diamante
      <b>Em</b>                    
Se você vier comigo aí nós vamos adiante

    <b>C7M</b>             
Com a cabeça erguida
      <b>Am9</b>
E mantendo a fé em Deus
       <b>Em</b>           
O seu dia mais feliz 
           <b>G</b>
Vai ser o mesmo que o meu

   <b>C7M</b>                     <b>Am9</b>
A vida me ensinou a nunca desistir
        <b>Em</b>
Nem ganhar, nem perder

Mas procurar evoluir

 <b>C7M</b>                       <b>Am9</b>
Podem me tirar tudo o que tenho
        <b>Em</b>                       <b>G</b>
Só não podem me tirar as coisas boas
                          <b>C7M</b>
Que eu já fiz pra quem eu amo
                <b>Am9</b>   
Eu sou feliz e canto
                       <b>Em</b>
E o universo é uma canção
              <b>G</b>
E eu vou que vou

[Refrão]

    <b>C7M</b>               <b>Am9</b>
Histórias, nossas histórias
         <b>Em</b>
Dias de luta, dias de glória

    <b>C7M</b>               <b>Am9</b>
Histórias, nossas histórias
         <b>Em</b>             <b>G</b>
Dias de luta, dias de glória 

    <b>C7M</b>               <b>Am9</b>
Histórias, nossas histórias
         <b>Em</b>             <b>G</b>
Dias de luta, dias de glória 

    <b>C7M</b>               <b>Am9</b>
Histórias, nossas histórias
         <b>Em</b>             <b>G</b>
Dias de luta, dias de glória 

[Segunda Parte]

          <b>C7M</b>                   <b>Am9</b>
Oh minha gata, morada dos meus sonhos
      <b>Em</b>
Todo dia, se pudesse eu ia estar com você

       <b>C7M</b>                      <b>Am9</b>
Já te via muito antes nos meus sonhos
         <b>Em</b>               
Eu procurei a vida inteira 
        <b>G</b>
Por alguém como você

             <b>C7M</b>                      <b>Am9</b>
Por isso eu canto a minha vida com orgulho
         <b>Em</b>
Com melodia, alegria e barulho

    <b>C7M</b>                   <b>Am9</b>
Eu sou feliz e rodo pelo mundo
          <b>Em</b>                     <b>G</b>
Sou correria mas também sou vagabundo

     <b>C7M</b>                  <b>Am9</b>
Mas hoje dou valor de verdade
            <b>Em</b>                   <b>G</b>
pra minha saúde, pra minha liberdade
     <b>C7M</b>                      <b>Am9</b>
Que bom te encontrar nessa cidade
       <b>Em</b>
Esse brilho intenso me lembra você

[Refrão]

    <b>C7M</b>               <b>Am9</b>
Histórias, nossas histórias
         <b>Em</b>             <b>G</b>
Dias de luta, dias de glória

    <b>C7M</b>               <b>Am9</b>
Histórias, nossas histórias
         <b>Em</b>
Dias de luta, dias de glória 

    <b>C7M</b>               <b>Am9</b>
Histórias, nossas histórias
         <b>Em</b>             <b>G</b>
Dias de luta, dias de glória

    <b>C7M</b>               <b>Am9</b>
Histórias, nossas histórias
         <b>Em</b>
Dias de luta, dias de glória 

[Final]

 <b>C7M</b>            
Hoje estou feliz
     <b>Am9</b>
Acordei com o pé direito
    <b>Em</b>              
Eu vou fazer de novo
       <b>G</b>                  <b>C7M</b>
Vou fazer muito bem feito
         <b>Am9</b>
Sintonia,    telepatia
 <b>Em</b>
Comunicação pelo cortéx
          
Bum baibai

( <b>C7M</b>  <b>Am9</b>  <b>Em</b>  <b>G</b> )
( <b>C7M</b>  <b>Am9</b>  <b>Em</b> )

----------------- Acordes -----------------
G#m9*  = X 0 2 4 1 0 - (*Gm9 na forma de G#m9)
B7M*  = X 3 2 0 0 X - (*A#7M na forma de B7M)
D#m*  = 0 2 2 0 0 0 - (*Dm na forma de D#m)
F#*  = 3 2 0 0 3 3 - (*F na forma de F#)`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DiasDeLutaDiasDeGloriaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/charlie-brown-jr/dias-de-luta-dias-de-gloria/"
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
