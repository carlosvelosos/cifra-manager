import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/jorge-mateus/duas-metades/

const cifra = `Jorge & Mateus - Duas Metades

[Intro] <b>Am7</b>  <b>G/B</b>  <b>D</b>
        <b>G/B</b>  <b>Am</b>  <b>G</b>  <b>G5/F#</b>  <b>C9</b>  <b>D</b>

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|--------------------------------------10-10h12------|
B|-10/12---13--12--10--8h10--12--10--8--7--------10---|
G|-------------12--11--------12--11--9--7--12----7----|
D|---------14--12--12----------------------10----7----|
A|----------------------------------------------------|
E|----------------------------------------------------|</span></span>

[Primeira Parte]

<span class="tablatura">[Tab - Primeira Parte]

Parte 1 de 3
   <b>G</b>        <b>C9</b>         <b>G</b>         <b>C9</b>   <b>G/B</b>  <b>Am</b>
<span class="cnt">E|-7--10---------------7-10--------10------8---8------|
B|-8-----10-8---8--10--8-----10--8-----10--8---8------|
G|-7--------9---9------7---------9---------9---9------|
D|----------------------------------------------------|
A|-----------------------------------------0-0---0----|
E|----------8--------------------8--------------------|</span></span>

<span class="tablatura">Parte 2 de 3
   <b>C9</b>       <b>G/B</b>  <b>Am</b>     <b>G/B</b>  <b>C9</b>  <b>G</b>     
<span class="cnt">E|-----------------3-------------7--7--5--------------|
B|--------------------3------5---8--8--5-5---8-----7--|
G|-9--9--9--7----5-------4---5---7--7--5---5---5------|
D|-------------------------------------0---------0----|
A|---------------------------3------------------------|
E|-8--8--8--7----5------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 3
   <b>D2</b>
<span class="cnt">E|------------5/7-------------------------------------|
B|-----5----------------------------------------------|
G|-5-----5----5/7-------------------------------------|
D|---0-----0------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|</span></span>

  <b>G</b>                      <b>C9</b>
Pra falar do amor de verdade
     <b>G</b>                     <b>C9</b>  
Vou começar pela melhor metade
 <b>Am</b>                 <b>G/B</b>     <b>C9</b>   <b>G/B</b>
Te mostrar tudo de bom que tenho
<b>Am</b>                   <b>G/B</b>  <b>C9</b>
E se for preciso eu de___senho
         <b>G</b>
Que eu amo você
         <b>D2</b>
Que eu quero você

<b>G</b>                   <b>C9</b>
A outra metade é defeito
 <b>G</b>                          <b>C9</b>
Você vai saber de qualquer jeito
        <b>G</b>             <b>D</b>
Anjo ou animal, suave ou fatal

[Segunda Parte]

[Tab - Segunda Parte]

Parte 1 de 4

<span class="tablatura">    <b>Am</b>                    <b>C9</b>  <b>G/B</b>  <b>Am</b>  <b>G/B</b>  <b>C9</b>
<span class="cnt">E|--0----8-8-8--7-5----------------------------------|
B|--1---------------8-5--3---3---1--1--3---5-5--5-5--|
G|--2-----------------5--0---0---2--2--0---5-5--5-5--|
D|--2-----------------5--0---0---2--2--0-------------|
A|--0--------------------3---2---0--0--2---3-3--3-3--|
E|---------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 4
   <b>D2</b>
<span class="cnt">E|---------------------------------------------------|
B|-5-7--7-7------------------------------------------|
G|-5-7--7-7------------------------------------------|
D|-3-5--5-5------------------------------------------|
A|---------------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 4
   <b>G</b>             <b>D</b>         <b>Em</b>       <b>C</b>     <b>G/B</b>
<span class="cnt">E|-10-10-10-10---8-8-8-8---7-7-7-7--8--7--8--7-------|
B|-8--8--8--8----8-8-8-8---8-8-8-8--8--8--8--8-------|
G|-7--7--7--7----7-7-7-7---7-7-7-7--7--7--7--7-------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|</span></span>

<span class="tablatura">Parte 4 de 4
   <b>Am</b>  <b>G/B</b>   <b>C9</b>        <b>D2</b>
<span class="cnt">E|-----------3--3-3-3--0--0-0-0----------------------|
B|-1---3-----3--3-3-3--3--3-3-3----------------------|
G|-2---0-----0--0-0-0--0--0-0-0----------------------|
D|-2---0-----2--2-2-2--4--4-4-4----------------------|
A|-0---2-----3--3-3-3--5--5-5-5----------------------|
E|---------------------------------------------------|</span></span>

<b>Am</b>                   <b>G/B</b>      <b>C9</b>
O que de um grande amor se espera
                 <b>G/B</b>  
É que tenha fogo
  <b>Am</b>               <b>G/B</b>
Que domine o pensamento
<b>C9</b>          <b>D2</b>     <b>D</b>  <b>D4</b>  <b>D</b>
E traga sentido novo

  <b>G</b>           <b>D</b>
Que tenha paixão, desejo
  <b>Em</b>         <b>C9</b>     <b>G/B</b>
Que tenha abraço e beijo
<b>Am</b>                  <b>G/B</b>  <b>C9</b>  
E seja a melhor sensa___ção

( <b>D2</b>  <b>D</b>  <b>D4</b>  <b>D</b> )

      <b>G</b>           <b>D</b>
Que preencha a vida vazia
 <b>Em</b>            <b>C9</b>     <b>G/B</b>
Mande embora a agonia
<b>Am</b>                   <b>G/B</b>  <b>C9</b>
E que traga paz pro cora_ção

[Refrão]

<span class="tablatura">[Tab - Refrão]

Parte 1 de 2
   <b>G</b>         <b>D</b>    <b>Em</b>  <b>C9</b>  <b>G/B</b>     <b>Am</b>          
<span class="cnt">E|-3--3-3-3--2---------------------------------------|
B|-3--3-3-3--3--3/5--3--1-0--------------------------|
G|-0--0-0-0--2---------------2--2/4------------------|
D|-0--0-0-0--0---------------------------------------|
A|-2--2-2-2------------------------------------------|
E|-3--3-3-3------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
   <b>C9</b>        <b>D2</b>   
<span class="cnt">E|---------------------------------------------------|
B|---------------------------------------------------|
G|-----7---7h9~--------------------------------------|
D|--7h9---9------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|</span></span>


<b>D2</b>  <b>D</b>  <b>D4</b>  <b>D</b>   <b>G</b>  <b>G7M</b>  <b>G5(6)</b>  <b>G7M</b>
        É vo__cê
     <b>G</b>  <b>G7M</b>  <b>C9</b>
É você
      <b>G</b>           <b>D</b>
Que preenche a vida vazia
 <b>Em</b>            <b>C9</b>     <b>G/B</b>
Manda embora a agonia
<b>Am</b>                    <b>G/B</b>  <b>C9</b>  
E que trouxe paz pro cora_ção

( <b>D2</b>  <b>D</b>  <b>D4</b>  <b>D</b> )

      <b>G</b>           <b>D</b>
Que preenche a vida vazia
 <b>Em</b>            <b>C9</b>     <b>G/B</b>
Manda embora a agonia
<b>Am</b>                   <b>G/B</b>  <b>C9</b> 
E que é dona do meu cora_ção

<b>D2</b>  <b>D</b>  <b>D4</b>  <b>D</b>   <b>G</b>  <b>G7M</b>  <b>G5(6)</b>  <b>G7M</b>
        É vo__cê
     <b>G</b>  <b>G7M</b>  <b>C9</b>
É você

[Terceira Parte]

  <b>G</b>                      <b>C9</b>
Pra falar do amor de verdade
     <b>G</b>                     <b>C9</b>  
Vou começar pela melhor metade
 <b>Am</b>                 <b>G/B</b>     <b>C9</b>   <b>G/B</b>
Te mostrar tudo de bom que tenho
<b>Am</b>                   <b>G/B</b>  <b>C9</b>   <b>D</b>
E se for preciso eu de___senho
         <b>G</b>
Que eu amo você
           <b>D2</b>
Que eu quero você

<b>G</b>                   <b>C9</b>
A outra metade é defeito
 <b>G</b>                          <b>C9</b>
Você vai saber de qualquer jeito
        <b>G</b>             <b>D</b>
Anjo ou animal, suave ou fatal

[Segunda Parte]

<b>Am</b>                   <b>G/B</b>      <b>C9</b>
O que de um grande amor se espera
                 <b>G/B</b>  
É que tenha fogo
  <b>Am</b>               <b>G/B</b>
Que domine o pensamento
<b>C9</b>          <b>D2</b>     <b>D</b>  <b>D4</b>  <b>D</b>
E traga sentido novo

  <b>G</b>           <b>D</b>
Que tenha paixão, desejo
  <b>Em</b>         <b>C9</b>     <b>G/B</b>
Que tenha abraço e beijo
<b>Am</b>                  <b>G/B</b>  <b>C9</b>  
E seja a melhor sensa___ção

( <b>D2</b>  <b>D</b>  <b>D4</b>  <b>D</b> )

      <b>G</b>           <b>D</b>
Que preencha a vida vazia
 <b>Em</b>            <b>C9</b>  <b>G/B</b>
Mande embora a agonia
<b>Am</b>                   <b>G/B</b>  <b>C9</b>
E que traga paz pro cora_ção

[Refrão]

<b>D2</b>  <b>D</b>  <b>D4</b>  <b>D</b>   <b>G</b>  <b>G7M</b>  <b>G5(6)</b>  <b>G7M</b>
        É vo__cê
     <b>G</b>  <b>G7M</b>  <b>C9</b>
É você

      <b>G</b>           <b>D</b>
Que preenche a vida vazia
 <b>Em</b>            <b>C9</b>   <b>G/B</b>
Manda embora a agonia
<b>Am</b>                    <b>G/B</b>  <b>C9</b>  
E que trouxe paz pro cora_ção

( <b>D2</b>  <b>D</b>  <b>D4</b>  <b>D</b> )

      <b>G</b>           <b>D</b>
Que preenche a vida vazia
 <b>Em</b>            <b>C9</b>    <b>G/B</b>
Manda embora a agonia
<b>Am</b>                   <b>G/B</b> <b>C9</b> <b>D</b>
E que é dona do meu coração

     <b>G</b>  <b>G7M</b>  <b>G5(6)</b>  <b>G7M</b>
É você
     <b>G</b>  <b>G7M</b>  <b>C9</b>
É você

[Final]

  <b>G</b>                      <b>C9</b>
Pra falar do amor de verdade
     <b>G</b>                     <b>C9</b>  
Vou começar pela melhor metade

[Solo]  <b>Am7</b>  <b>G/B</b>  <b>D</b>  
        <b>G/B</b>  <b>G/A</b>  <b>G</b>  <b>G5/F#</b>  <b>C9</b>
        <b>D</b>  <b>G</b> 

<span class="tablatura">[Tab - Solo]

Parte 1 de 2
           <b>Am7</b>   <b>G/B</b>  <b>D</b>       <b>G/B</b>  <b>G/A</b>  <b>G</b>  <b>G5/F#</b>  
<span class="cnt">E|-----------------------------------------10--------|
B|-10/12---13----12--10--8h10--12--10--8---7---------|
G|---------------12--11--------12--11--9---7---------|
D|---------14----12--12------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
    <b>C9</b>   <b>D</b>              <b>G</b>
<span class="cnt">E|-10h12--------------5-5/7--------------------------|
B|------10----------8---8----------------------------|
G|-12----7--------7-----7----------------------------|
D|-10----7------0-------0----------------------------|
A|---------------------------------------------------|</span></span>
E|---------------------------------------------------|

----------------- Acordes -----------------
A = X 0 2 2 2 0
Am = X 0 2 2 1 0
Am7 = X 0 2 0 1 0
C9 = X 3 5 5 3 3
D = X X 0 2 3 2
D4 = X X 0 2 3 3
D5(9) = X 5 7 9 X X
Em = 0 2 2 0 0 0
G = 3 2 0 0 0 3
G/B = X 2 0 0 3 3
G/F# = X X 4 4 3 3
G5(6) = 3 X 2 0 3 X
G5(7M) = 3 X 4 0 3 X
G5/F# = 2 5 5 X X X`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DuasMetadesPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jorge-mateus/duas-metades/"
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
