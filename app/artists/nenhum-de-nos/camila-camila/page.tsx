import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/nenhum-de-nos/camila/

const cifra = `Nenhum de Nós - Camila, Camila

[Intro] <b>D</b>

<span class="tablatura">  <b>D</b>
<span class="cnt">E|---------0----------------------------|
B|----3------3--------------------------|
G|------2------2------------------------|
D|--0-------------4---------------------|
A|--------------------------------------|
E|--------------------------------------|</span></span>

<span class="tablatura">  <b>Em</b>
<span class="cnt">E|-------2---0------0------2---0--------|
B|---3-----3---3------3------3---3------|
G|-----0----------------0---------------|
D|-2--------------2---------------------|
A|--------------------------------------|
E|--------------------------------------|</span></span>

<span class="tablatura">  <b>G</b>
<span class="cnt">E|-------0------------------------------|
B|---3-----3----------------------------|
G|-----0--------------------------------|
D|--------------------------------------|
A|--------------------------------------|
E|-3------------------------------------|</span></span>

[Primeira Parte]

   <b>D9</b>
Depois da última noite de festa
    <b>Em</b>                      <b>G</b>          <b>D9</b>
Chorando e esperando amanhecer, amanhecer

As coisas aconteciam
       <b>Em</b>                     <b>G</b>           <b>D9</b>
Com alguma explicação, com alguma explicação

Depois da última noite de chuva
    <b>Em</b>                      <b>G</b>          <b>D</b>
Chorando e esperando amanhecer, amanhecer

Às vezes peço a ele
          <b>Em</b>             <b>G</b>    <b>D9</b>
Que vá embora, que vá embora, oh

[Refrão]

   <b>C</b>       <b>Bm</b>      <b>Am7</b>
Camila, Camila, Camila

  <b>G</b>
E eu que tenho medo até de suas mãos
 <b>F7M</b>
Mas o ódio cega e você não percebe
 <b>Bm</b>              <b>C</b>
Mas o ódio cega, ah
  <b>G</b>
E eu que tenho medo até do seu olhar
 <b>F7M</b>
Mas o ódio cega e você não percebe
 <b>Bm</b>              <b>C</b>
Mas o ódio cega, ah

[Segunda Parte]

( <b>D9</b>  <b>Em</b>  <b>G</b>  <b>D9</b> )

<b>D9</b>
As lembranças do silêncio
          <b>Em</b>               <b>G</b>     <b>D9</b>
Daquelas tardes, daquelas tar...des

Na vergonha  do espelho
          <b>Em</b>          <b>G</b>   <b>D9</b>
Naquelas marcas daquelas marcas

Havia algo de insano
         <b>Em</b>              <b>G6</b>   <b>D9</b>
Naqueles olhos, olhos insanos

Os olhos que passavam o dia
        <b>Em</b>           <b>G</b>    <b>D9</b>
A me vigiar, a me vigiar, oh

[Refrão]

   <b>C</b>      <b>Bm</b>      <b>Am7</b>
Camila, Camila, Camila
   <b>C</b>      <b>Bm</b>      <b>Am7</b>
Camila, Camila, Camila

  <b>C</b>
E eu que tinha apenas dezessete anos
    <b>Bm</b>
Baixava minha cabeça pra tudo
         <b>Am7</b>
E era assim que as coisas aconteciam

E era assim que eu via tudo acontecer

  <b>C</b>
E eu que tinha apenas dezessete anos
    <b>Bm</b>
Baixava minha cabeça pra tudo
         <b>Am7</b>
E era assim que as coisas aconteciam

E era assim que eu via tudo acontecer

[Refrão]

   <b>C</b>       <b>Bm</b>  <b>Am7</b>
Camila, Camila
   <b>C</b>       <b>Bm</b>      <b>Am7</b>
Camila, Camila, Camila

[Final] <b>D9</b>  <b>Em</b>  <b>G</b>
        <b>D9</b>  <b>Em</b>  <b>G</b>  <b>D9</b>

----------------- Acordes -----------------
Am7 = X 0 2 0 1 0
Bm = X 2 4 4 3 2
C = X 3 2 0 1 0
D = X X 0 2 3 2
D9 = X X 0 2 3 0
Em = 0 2 2 0 0 0
F7M = 1 X 2 2 1 X
G = 3 2 0 0 0 3
G6 = 3 X 2 4 3 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CamilaCamilaPage() {
  return (
    <>
      <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
