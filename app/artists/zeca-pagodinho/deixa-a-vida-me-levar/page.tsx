import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

// URL: https://www.cifraclub.com.br/zeca-pagodinho/deixa-vida-me-levar/

const cifra = `

[Intro] <b>A</b>  <b>B7</b>  <b>C#m7</b>  <b>C#7</b>
        ( <b>F#m</b>  <b>G#m</b>  <b>A</b>  <b>B7</b> )
        <b>E</b>  <b>B7</b>

[Primeira Parte]

<span class="tablatura">[Tab - Primeira Parte]

Parte 1 de 4
   <b>E</b>         <b>B7</b>           <b>E</b>          <b>C#7</b>
<span class="cnt">E|-0--0---0--2--2-----2-2---0-0---0-------------------|
B|-0--0---0--0--------0-0---0-0---0--2--2---2---------|
G|-1--1---1--2----2---2-2---1-1---1--4--4---4---------|
D|-----------------------------------3--3---3---------|
A|------2----2------2-----------2----4----4-----------|
E|-0----------------------0---------------------------|</span></span>

<span class="tablatura">Parte 2 de 4
   <b>F#m</b>           <b>B7</b>         <b>E</b>        <b>B7</b>          
<span class="cnt">E|----------------------------0--0---0--2--2-----2-2--|
B|-2---2--2---2--4--4---4-4---0--0---0--0--------0-0--|
G|-2---2--2---2--2--2---2-2---1--1---1--2----2---2-2--|
D|-4---4--4---4--4--4---4-4---------------------------|
A|----------4----2----2------------2----2------2------|
E|---2----------------------0-------------------------|</span></span>

<span class="tablatura">Parte 3 de 4
   <b>E</b>         <b>B7</b>           <b>E</b>          <b>C#7</b>
<span class="cnt">E|-0--0---0--2--2-----2-2---0-0---0-------------------|
B|-0--0---0--0--------0-0---0-0---0--2--2---2---------|
G|-1--1---1--2----2---2-2---1-1---1--4--4---4---------|
D|-----------------------------------3--3---3---------|
A|------2----2------2-----------2----4----4-----------|
E|-0----------------------0---------------------------|</span></span>

<span class="tablatura">Parte 4 de 4
   <b>F#m</b>           <b>B7</b>         <b>E</b>      
<span class="cnt">E|----------------------------0--0--------------------|
B|-2---2--2---2--4--4---4-4---0--0--------------------|
G|-2---2--2---2--2--2---2-2---1--1--------------------|
D|-4---4--4---4--4--4---4-4---------------------------|
A|----------4----2----2-------------------------------|
E|---2----------------------0-------------------------|</span></span>

    <b>E</b>                   <b>B7</b>         <b>E</b>
Eu já passei por quase tudo nessa vida
      <b>C#7</b>         <b>F#m</b>                      
Em matéria de guarida
        <b>B7</b>            <b>E</b>  <b>B7</b> 
Espero ainda a minha vez
    <b>E</b>                 <b>B7</b>       <b>E</b>
Confesso que sou de origem pobre
 <b>C#7</b>               <b>F#m</b>             
Mas meu coração é nobre
       <b>B7</b>              <b>E</b>    
Foi assim que Deus me fez

[Refrão]

<span class="tablatura">[Tab - Refrão]

Parte 1 de 4
   <b>B7</b>  <b>E</b>         <b>G°</b>      <b>F#m</b>
<span class="cnt">E|-2-----0----0---------------------------------------|
B|-0-----0----0----2---2-2---2-2---2-2---2--2---2-----|
G|-2-----1----1----3---3-2---2-2---2-2---2--2---2-----|
D|-----------------2-2-2-4---4-4---4-4---4--4---4-----|
A|-2--------2--------------------4------------4-------|
E|-----0---------3---------2-----------2--------------|</span></span>

<span class="tablatura">Parte 2 de 4
   <b>B7</b>         <b>E</b>
<span class="cnt">E|--------------0--0---0---0--0---0-------------------|
B|-4--4---4-4---0--0---0---0--0---0-------------------|
G|-2--2---2-2---1--1---1---1--1---1-------------------|
D|-4--4---4-4-----------------------------------------|
A|-2----2------------2----------2---------------------|
E|------------0----------0----------------------------|</span></span>

<span class="tablatura">Parte 3 de 4
   <b>B7</b>         <b>E</b>          <b>E7</b>           <b>A</b>
<span class="cnt">E|--------------0--0---0---0--0---0-------------------|
B|-4--4---4-4---0--0---0---3--3---3---2-2---2---------|
G|-2--2---2-2---1--1---1---1--1---1---2-2---2---------|
D|-4--4---4-4-------------------------2-2---2---------|
A|-2----2------------2----------2---------0-----------|
E|------------0----------0----------------------------|</span></span>

<span class="tablatura">Parte 4 de 4
   <b>A#°</b>        <b>E</b>   <b>C#7</b>  <b>F#m</b>  <b>B7</b>  <b>E</b>   <b>B7</b>
<span class="cnt">E|------------0-----------------0---2-----------------|
B|---2---2-2--0---2----2----4---0---0-----------------|
G|---0---0-0--1---4----2----2---1---2-----------------|
D|---2---2-2--2---3----4----4-------1-----------------|
A|-1---1----------4---------2-------2-----------------|
E|------------0--------2--------0---------------------|</span></span>

         <b>B7</b>        <b>E</b>          <b>G°</b>  <b>F#m</b>
Deixa a vida me levar (vida, leva eu)
                              <b>B7</b>  <b>E</b>                
Deixa a vida me levar (vida, leva eu)
         <b>B7</b>        <b>E</b>          <b>E7</b>  <b>A</b>
Deixa a vida me levar (vida, leva eu)
       <b>A#°</b>       <b>E</b>   
Sou feliz e agradeço
 <b>C#7</b>   <b>F#m</b>    <b>B7</b>      <b>E</b>  <b>B7</b>  
Por tudo que Deus me deu

[Segunda Parte]

<span class="tablatura">[Tab - Segunda Parte]

Parte 1 de 4
   <b>E</b>         <b>B7</b>           <b>E</b>          <b>B7</b>
<span class="cnt">E|-0--0---0--2--2-----2-2---0-0---0----2--2---2-------|
B|-0--0---0--0--------0-0---0-0---0----0--0---0-------|
G|-1--1---1--2----2---2-2---1-1---1----2--2---2-------|
D|----------------------------------------------------|
A|------2----2------2-----------2----2------2---------|
E|-0----------------------0---------------------------|</span></span>

<span class="tablatura">Parte 2 de 4
   <b>E</b>         <b>G#m7</b>  <b>G°</b>  <b>F#m7</b>      <b>B7</b>
<span class="cnt">E|-0--0---0--4---------2--2---2-----------------------|
B|-0--0---0--4-----2---2--2---2----4-4---4------------|
G|-1--1---1--4-----3---2--2---2----2-2---2------------|
D|-----------------2---------------4-4---4------------|
A|------2-------------------4----2-----2--------------|
E|-0---------4-----3---2------------------------------|</span></span>

<span class="tablatura">Parte 3 de 4
   <b>F#m</b>        <b>F#m7M</b>      <b>F#m7</b>       <b>F#m6</b>
<span class="cnt">E|----------------------------------------------------|
B|---2--2---2---2--2---2---2--2---2---2--2---2--------|
G|---2--2---2---2--2---2---2--2---2---2--2---2--------|
D|---4--4---4---3--3---3---2--2---2---1--1---1--------|
A|----------------------------------------------------|
E|-2------2---2------2---2------2---2------2----------|</span></span>

<span class="tablatura">Parte 4 de 4
   <b>B7</b>         <b>B7(13-)</b>        <b>E</b>          <b>B7</b>
<span class="cnt">E|-----------------------------0--0---0---2--2---2----|
B|---4-4---4--8-8-------8-8----0--0---0---0--0---0----|
G|---2-2---2--8---8-----8-8----1--1---1---2--2---2----|
D|---4-4---4--7-----7---7-7---------------------------|
A|-2-----2--------------------------2---2------2------|
E|------------7-------7------0------------------------|</span></span>

    <b>E</b>                 <b>B7</b>       <b>E</b>
Só posso levantar as mãos pro céu
       <b>B7</b>         <b>E</b> 
Agradecer e ser fiel
                <b>G#m</b>  <b>G°</b>  <b>F#m7</b>  <b>B7</b>
Ao destino que Deus me  deu
    <b>F#m</b>             <b>F#m7M</b>     <b>F#m7</b>
Se não tenho tudo que preciso
           <b>F#m6</b>     <b>B7</b>
Com o que tenho, vivo
    <b>B7(13-)</b>        <b>E</b>  <b>B7</b>
De mansinho lá vou eu

[Terceira Parte]

<span class="tablatura">[Tab - Terceira Parte]

Parte 1 de 4
   <b>E</b>         <b>B7</b>           <b>E</b>          <b>B7</b>
<span class="cnt">E|-0--0---0--2--2-----2-2---0-0---0----2--2---2-------|
B|-0--0---0--0--------0-0---0-0---0----0--0---0-------|
G|-1--1---1--2----2---2-2---1-1---1----2--2---2-------|
D|----------------------------------------------------|
A|------2----2------2-----------2----2------2---------|
E|-0----------------------0---------------------------|</span></span>

<span class="tablatura">Parte 2 de 4
   <b>E</b>         <b>E7</b>         <b>A</b>           <b>C#7/G#</b>
<span class="cnt">E|-0--0---0----0--0---0-------------------------------|
B|-0--0---0----3--3---3---2-2---2---6--6---6----------|
G|-1--1---1----1--1---1---2-2---2---4--4---4----------|
D|------------------------2-2---2---6--6---6----------|
A|------2-----------2---0-----0----------4------------|
E|-0---------0----------------------4-----------------|</span></span>

<span class="tablatura">Parte 3 de 4
   <b>F#m7</b>       <b>D7(9)</b>          <b>G#m7</b>       <b>C#7</b>
<span class="cnt">E|-2-2---2-2-------------------4-4---4----------------|
B|-2-2---2-2--5-5-------5-5----4-4---4--2-2-------2-2-|
G|-2-2---2-2--5---5-----5-5----4-4---4--4---4-----4-4-|
D|------------4-----4---4-4-------------3-----3---3-3-|
A|-----4------5-------5-----------------4-------4-----|
E|-2-------------------------4-----4------------------|</span></span>

<span class="tablatura">Parte 4 de 4
   <b>F#m</b>  <b>B7</b>   <b>E</b>
<span class="cnt">E|-----------0--0---0---------------------------------|
B|-2----4----0--0---0---------------------------------|
G|-2----2----1--1---1---------------------------------|
D|-4----4---------------------------------------------|
A|------2---------2-----------------------------------|
E|-2---------0----------------------------------------|</span></span>

      <b>E</b>                <b>B7</b>            <b>E</b>
Se a coisa não sai do jeito que eu quero
            <b>B7</b>        <b>E</b> 
Também não me desespero
                <b>E7</b>    <b>A</b>  <b>C#7/G#</b>
O negócio é deixar rolar
      <b>F#m7</b>          <b>D7(9)</b>        <b>G#m7</b>
E aos trancos e barrancos lá vou eu
      <b>C#7</b>       <b>F#m7</b>        <b>B7</b>             <b>E</b>              
Sou feliz e agradeço por tudo que Deus me deu

[Refrão]

         <b>B7</b>        <b>E</b>          <b>G°</b>  <b>F#m</b>
Deixa a vida me levar (vida, leva eu)
                              <b>B7</b>  <b>E</b>                
Deixa a vida me levar (vida, leva eu)
         <b>B7</b>        <b>E</b>          <b>E7</b>  <b>A</b>
Deixa a vida me levar (vida, leva eu)
       <b>A#°</b>       <b>E</b>   
Sou feliz e agradeço
 <b>C#7</b>   <b>F#m</b>    <b>B7</b>      <b>E</b>  <b>B7</b>  
Por tudo que Deus me deu

[Primeira Parte]

    <b>E</b>                   <b>B7</b>         <b>E</b>
Eu já passei por quase tudo nessa vida
      <b>C#7</b>         <b>F#m</b>                      
Em matéria de guarida
        <b>B7</b>            <b>E</b>  <b>B7</b> 
Espero ainda a minha vez
    <b>E</b>                 <b>B7</b>       <b>E</b>
Confesso que sou de origem pobre
 <b>C#7</b>               <b>F#m</b>             
Mas meu coração é nobre
       <b>B7</b>              <b>E</b>    
Foi assim que Deus me fez

[Refrão Final]

         <b>B7</b>        <b>E</b>          <b>G°</b>  <b>F#m</b>
Deixa a vida me levar (vida, leva eu)
                              <b>B7</b>  <b>E</b>                
Deixa a vida me levar (vida, leva eu)
         <b>B7</b>        <b>E</b>          <b>E7</b>  <b>A</b>
Deixa a vida me levar (vida, leva eu)
       <b>A#°</b>       <b>E</b>   
Sou feliz e agradeço
 <b>C#7</b>   <b>F#m</b>    <b>B7</b>      <b>E</b>  
Por tudo que Deus me deu

         <b>B7</b>        <b>E</b>          <b>G°</b>  <b>F#m</b>
Deixa a vida me levar (vida, leva eu)
                              <b>B7</b>  <b>E</b>                
Deixa a vida me levar (vida, leva eu)
         <b>B7</b>        <b>E</b>          <b>E7</b>  <b>A</b>
Deixa a vida me levar (vida, leva eu)
       <b>A#°</b>       <b>E</b>   
Sou feliz e agradeço
 <b>C#7</b>   <b>F#m</b>    <b>B7</b>      <b>E</b>  
Por tudo que Deus me deu

         <b>B7</b>        <b>E</b>          <b>G°</b>  <b>F#m</b>
Deixa a vida me levar (vida, leva eu)
                              <b>B7</b>  <b>E</b>                
Deixa a vida me levar (vida, leva eu)
         <b>B7</b>        <b>E</b>          <b>E7</b>  <b>A</b>
Deixa a vida me levar (vida, leva eu)
       <b>A#°</b>       <b>E</b>   
Sou feliz e agradeço
 <b>C#7</b>   <b>F#m</b>    <b>B7</b>      <b>E</b>  
Por tudo que Deus me deu

         <b>B7</b>        <b>E</b>          <b>G°</b>  <b>F#m</b>
Deixa a vida me levar (vida, leva eu)
                              <b>B7</b>  <b>E</b>                
Deixa a vida me levar (vida, leva eu)
         <b>B7</b>        <b>E</b>          <b>E7</b>  <b>A</b>
Deixa a vida me levar (vida, leva eu)
       <b>A#°</b>       <b>E</b>   
Sou feliz e agradeço
 <b>C#7</b>   <b>F#m</b>    <b>B7</b>      <b>E</b>  
Por tudo que Deus me deu

----------------- Acordes -----------------
A = P2 2 2 2
A#° = 8 6 P5 5
B7 = 1 2 0 1
B7(13-) = 7 4 4 5
C#7 = 3 4 2 3
C#7/G# = 11 13 12 15
C#m7 = 6 4 5 6
D7(9) = 4 5 5 7
E = 2 1 0 2
E7 = 2 1 0 0
F#m = 4 2 2 4
F#m6 = 4 2 4 4
F#m7 = 4 P2 2 2
F#m7M = 4 P2 2 3
G#m = 6 4 4 6
G#m7 = 6 P4 4 4
G° = 5 3 P2 2`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
