import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `

<b>G</b>
Deixe de lado esse baixo astral
          <b>Bm</b>
Erga a cabeça enfrente o mal
              <b>Dm</b>         <b>G7</b>             <b>C</b>
Que agindo assim será vital para o seu coração

          <b>Cm</b>                 <b>Bm</b>      <b>F7</b>     <b>E7</b>
É que em cada experiência se aprende uma lição
          <b>Am</b>            <b>A7</b>
Eu já sofri por amar assim
         <b>D7</b>                  <b>D</b>
Me dediquei mas foi tudo em vão

      <b>G</b>          <b>Bm</b>
Pra que se lamentar
           <b>Dm</b>  <b>G7</b>        <b>C</b>
Se em sua vida   pode encontrar
        <b>Cm</b>            <b>Bm</b>     <b>E7</b>
Quem te ame com toda força e ardor
   <b>Am</b>    <b>D#7</b> <b>D7</b>   <b>G</b>          <b>D7</b>
Assim sucumbirá a dor (tem que lutar)

           <b>G</b>
Tem que lutar
         <b>Bm</b>
Não se abater
          <b>Dm</b>   <b>G7</b>
Só se entregar
           <b>C</b>
A quem te merecer

           <b>Cm</b>
Não estou dando nem vendendo
   <b>Bm</b>     <b>F7</b>     <b>E7</b>
É como o ditado diz
          <b>Am</b>           <b>D</b>      <b>G</b>   <b>D7</b>
O meu conselho é pra te ver feliz

           <b>G</b>
Tem que lutar
         <b>Bm</b>
Não se abater
          <b>Dm</b>   <b>G7</b>
Só se entregar
           <b>C</b>
A quem te merecer

           <b>Cm</b>
Não estou dando nem vendendo
   <b>Bm</b>      <b>F7</b>     <b>E7</b>
É como o ditado diz
          <b>Am</b>            <b>D</b>      <b>G</b>  <b>D7</b>
O meu conselho é pra te ver feliz

 <b>G</b>
Deixe de lado esse baixo astral
          <b>Bm</b>
Erga a cabeça enfrente o mal
              <b>Dm</b>         <b>G7</b>             <b>C</b>
Que agindo assim será vital para o seu coração

          <b>Cm</b>                 <b>Bm</b>      <b>F7</b>     <b>E7</b>
É que em cada experiência se aprende uma lição
          <b>Am</b>            <b>Am</b>
Eu já sofri por amar assim
         <b>D7</b>                  <b>D</b>
Me dediquei mas foi tudo em vão

      <b>G</b>          <b>Bm</b>
Pra que se lamentar
           <b>Dm</b>  <b>G7</b>        <b>C</b>
Se em sua vida    pode encontrar
        <b>Cm</b>            <b>Bm</b>    <b>E7</b>
Quem te ame com toda força e ardor
   <b>Am</b>       <b>D7</b>   <b>G</b>  <b>D7</b>
Assim sucumbirá a dor

           <b>G</b>
Tem que lutar
         <b>Bm</b>
Não se abater
          <b>Dm</b>   <b>G7</b>
Só se entregar
           <b>C</b>
A quem te merecer

           <b>Cm</b>
Não estou dando nem vendendo
   <b>Bm</b>          <b>E7</b>
É como o ditado diz
          <b>Am</b>           <b>D7</b>      <b>G</b>   <b>D7</b>
O meu conselho é pra te ver feliz

           <b>G</b>
Tem que lutar
         <b>Bm</b>
Não se abater
          <b>Dm</b>   <b>G7</b>
Só se entregar
           <b>C</b>
A quem te merecer

           <b>Cm</b>
Não estou dando nem vendendo
   <b>Bm</b>      <b>F7</b>     <b>E7</b>
É como o ditado diz
          <b>Am</b>             <b>D</b>      <b>G</b>
O meu conselho é pra te ver feliz

[FInal] <b>E7</b>  <b>Am</b>  <b>D</b>  <b>G</b>

----------------- Acordes -----------------
A7 = 2 0 2 2
Am = 2 2 1 2
Bm = 4 4 3 4
C = 2 0 1 2
Cm = 1 0 1 1
D = 4 2 3 4
D#7 = 5 3 2 5
D7 = 4 2 1 4
Dm = 3 2 3 3
E7 = 2 1 0 0
F7 = 3 2 P1 1
G = 5 4 3 5
G7 = P3 4 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ConselhoPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}