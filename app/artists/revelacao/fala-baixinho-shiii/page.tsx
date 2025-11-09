import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `

[Intro] <b>Fm</b>  <b>Fm5+</b>  <b>Fm6</b>  <b>Fm5+</b>  <b>Fm</b>  <b>Fm5+</b>  <b>Fm6</b>  <b>Fm5+</b>

(Parte 1)

<span class="tablatura"><span class="cnt">E|-7/0-----------------------------------------|
B|---------------------------------------------|
G|---------------------------------------------|
D|-------------------------------------------0-|
A|--------------------9---------------11-9-8---|
E|------8p7-8--9/10-9---10--12/13-9\8----------|</span></span>

(Parte 2)

<span class="tablatura"><span class="cnt">E|--------------------------------|
B|--------------------------------|
G|----------------10---------8-10-|
D|----------10-8-----8-10-8-------|
A|-9h11-9-8-----------------------|
E|--------------------------------|</span></span>

         <b>Fm</b>                             <b>Fm5+</b>                  <b>Fm6</b>  <b>Fm5+</b>
Xiii... fala baixinho que ninguém pode saber que a gente tá aqui
          <b>Fm</b>                          <b>Fm5+</b>            <b>Fm6</b>   <b>Bbm</b>  <b>Bm</b>
Xiii... vamos com calma, devagar, que desse jeito ninguém vai dormir
 <b>Cm7(5-)</b>                                      <b>F7</b>
Sabe que a gente não escolhe a hora e nem lugar

Junta a fome com a vontade de comer
 <b>Bbm</b>                     <b>Bbm/Ab</b>            <b>Gm5(b5)</b>
Você me olha e morde os lábios pra me seduzir
                  <b>C7</b>               <b>Fm</b> <b>Fm5+</b>
Acende a luz pra ver desejo em minha cara
                  <b>Fm6</b>                    <b>Fm5+</b>             <b>Fm</b> <b>Fm5+</b>
Xiii... segura a fera tem que ser devagarinho pra ninguém ouvir
                   <b>Fm6</b>                   <b>Fm5+</b>           <b>Fm</b>
Xiii... vou pôr a mão na tua boca pro rugido não escapulir
               <b>Eb7</b>      <b>Ab</b>              <b>C7</b>        <b>F7</b>
Se alguém nos pega é sacanagem, quebrar o clima dessa viagem
         <b>G#7</b>                <b>C#</b>
O nosso filme não pode queimar você
            <b>Cm</b>                      <b>Bbm</b>                      <b>C7</b>
Mas quando bate a tentação a gente fica sem noção e perde a linha
              <b>Fm</b>
Sem querer saber
<b>Db6(9)</b>                  <b>Cm</b>         <b>Bbm</b>  <b>Bbm/Ab</b>  <b>Gm5(b5)</b>  <b>C7</b>
Aí é outra dimensão, quatro paredes e nós dois... e nada fica pra depois

<b>Fm</b>                       <b>Ab7(4)</b>     <b>Db6(9)</b>                <b>C7</b>
  Cara na cara, pele na pele,...... suor pingando, o corpo em febre
 <b>Gm5(b5)</b>               <b>C7</b>          <b>Fm</b>     <b>C7</b>
Você em transe, sussurrando, segurando a voz
       <b>Fm</b>   <b>Ab7(4)</b>    <b>Db6(9)</b>                <b>C7</b>       <b>Fm</b>
Eu viajando no céu da boca,você rasgando a minha roupa de baixo dos lençóis

----------------- Acordes -----------------
Ab = 6 5 4 6
Ab7(4) = P1 1 2 4
Bbm = 3 3 2 3
Bbm/Ab = P6 6 6 8
Bm = 4 4 3 4
C# = P6 6 6 6
C7 = 2 3 1 2
Cm = 1 0 1 1
Cm7(5-) = 4 3 P1 1
Db6(9) = 3 3 2 1
Eb7 = 5 3 2 5
F7 = 3 2 P1 1
Fm = 3 1 1 3
Fm5+ = 3 1 2 3
Fm6 = 3 1 1 0
G#7 = P4 5 4 6`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FalaBaixinhoShiiiPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}