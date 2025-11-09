import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/legiao-urbana/pais-filhos/

const cifra = `Legião Urbana - Pais e Filhos

<span class="tablatura">[Tab - Dedilhado Intro]

<span class="cnt">E|------------8---5---7-----7--------------|
B|-1-3--5----------------------------------|
G|--------0-----0---0-----0---0------------|
D|----------0-----4-----0------------------|
A|-0-2--3----------------------------------|
E|-----------------------------------------|</span></span>

<span class="tablatura">[Tab - Dedilhado Primeira Parte]

<span class="cnt">E|------------8---5---7-----7--------------|
B|-1-3--5----------------------------------|
G|--------0-----0---0-----0---0------------| (4x)
D|----------0-----4-----0------------------|
A|-0-2--3----------------------------------|
E|-----------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------8---5------------------------|
B|-1-3--5----------------------------------|
G|--------0-----0--------------------------|
D|----------0-----4------------------------|
A|-0-2--3----------------------------------|
E|-----------------------------------------|</span></span>

[Primeira Parte] 

Estátuas e cofres

E paredes pintadas

Ninguém sabe

O que aconteceu

Ela se jogou da janela

Do quinto andar

Nada é fácil de entender

[Segunda Parte]

<span class="tablatura">[Tab - Dedilhado - Segunda Parte]

   <b>F9</b>           <b>Em</b>            <b>C</b>          
<span class="cnt">E|-3----3---3---3----3---3----0--0--0-------|
B|-1--1---1---1-0--0---0---0--1-1--1--1-----|
G|-2------------0-------------0-------------|
D|-3------------2-------------2-------------|
A|----------------------------3-------------|
E|------------------------------------------|</span></span>

<span class="tablatura">   <b>Bm</b>         <b>Am7</b>         <b>Am7</b>
<span class="cnt">E|-2---2---2---3---3---3---3---3---3--------|
B|-3-3---3---3-1-1---1---1-1-1---1---1------|
G|-4-----------0-----------0----------------|
D|-4-----------2-----------2----------------|
A|-2-----------0-----------0----------------|
E|------------------------------------------|</span></span>
 
<span class="tablatura">   <b>D</b>           <b>D</b>
<span class="cnt">E|-5---5---5---5---5---5--------------------|
B|-3-3---3---3-3-3---3---3------------------|
G|-2-----------2----------------------------|
D|-0-----------0----------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<b>F9</b>         <b>Em</b>  <b>C</b>
   Dorme agora
<b>Bm</b>       <b>Am7</b>
Uhmhumm!
                 <b>D</b>
É só o vento lá fora

[Terceira Parte] 
 
<b>C</b>        <b>D</b>     <b>G</b>
  Quero colo, vou fugir de casa
 <b>C</b>        <b>D</b>        <b>G</b>
Posso dormir aqui com vocês
<b>C</b>        <b>D</b>        <b>G</b>
  Estou com medo tive um pesadelo
<b>C</b>         <b>D</b>        <b>G</b>
  Só vou voltar depois das três

( <b>C</b>  <b>D</b> )

[Quarta Parte]

<span class="tablatura">[Tab - Dedilhado - Segunda Parte]

   <b>F9</b>           <b>Em</b>            <b>C</b>          
<span class="cnt">E|-3----3---3---3----3---3----0--0--0-------|
B|-1--1---1---1-0--0---0---0--1-1--1--1-----|
G|-2------------0-------------0-------------|
D|-3------------2-------------2-------------|
A|----------------------------3-------------|
E|------------------------------------------|</span></span>

<span class="tablatura">   <b>Bm</b>         <b>Am7</b>         <b>Am7</b>
<span class="cnt">E|-2---2---2---3---3---3---3---3---3--------|
B|-3-3---3---3-1-1---1---1-1-1---1---1------|
G|-4-----------0-----------0----------------|
D|-4-----------2-----------2----------------|
A|-2-----------0-----------0----------------|
E|------------------------------------------|</span></span>
 
<span class="tablatura">   <b>D</b>           <b>D</b>
<span class="cnt">E|-5---5---5---5---5---5--------------------|
B|-3-3---3---3-3-3---3---3------------------|
G|-2-----------2----------------------------|
D|-0-----------0----------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<b>F9</b>      <b>Em</b>        <b>C</b>
   Meu filho vai ter
         <b>Bm</b>
Nome de santo
<b>Am7</b>
Uhhmm
              <b>D</b>
Quero o nome mais bonito

[Refrão] 

      <b>G</b>     <b>C</b>
É preciso amar as pessoas
      <b>Em</b>                  <b>C</b>
Como se não houvesse amanhã
           <b>G</b>      <b>C</b>          <b>Em</b>
Porque se você parar pra pensar
                <b>C</b>  <b>G</b>
Na verdade não há

[Quinta Parte]

    <b>G</b>
Me diz, por que que o céu é azul

Explica a grande fúria do mundo

São meus filhos que tomam conta de mim

Eu moro com a minha mãe mas meu pai vem me visitar

Eu moro na rua não tenho ninguém

Eu moro em qualquer lugar

Já morei em tanta casa que nem me lembro mais
                <b>C</b>
Eu moro com os meus pais

[Refrão Final] 

<span class="tablatura">[Tab - Refrão Final]

<span class="cnt">E|-------8---------10-------------7-7/-10--12-10-----|
B|---------8----------10--------8---7/-10------------|
G|-7-7/9-----9-9/11------11\\7-7-----7/-10------------| (8x)
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|</span></span>
      <b>G</b>     <b>C</b>
É preciso amar as pessoas
      <b>Em</b>                  <b>C</b>
Como se não houvesse amanhã
           <b>G</b>      <b>C</b>            <b>Em</b>
Porque se você parar pra pensar
                <b>C</b>  
Na verdade não há

 <b>G</b>                  <b>C</b>
Sou uma gota d'água
 <b>Em</b>                <b>C</b>
Sou um grão de areia
         <b>G</b>
Você me diz que seus pais
       <b>C</b>
Não entendem
       <b>Em</b>                  <b>C</b>
Mas você não entende seus pais

      <b>G</b>
Você culpa seus pais por tudo

Isso é absurdo

São crianças como você

O que você vai ser

Quando você crescer?

----------------- Acordes -----------------
Am7 = X 0 2 0 1 0
Bm = X 2 4 4 3 2
C = X 3 2 0 1 0
D = X X 0 2 3 2
Em = 0 2 2 0 0 0
F9 = X X 3 2 1 3
G = 3 2 0 0 0 3`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PaisEFilhosPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/legiao-urbana/pais-filhos/"
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
