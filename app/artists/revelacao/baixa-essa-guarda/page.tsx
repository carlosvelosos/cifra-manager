import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `

[Intro] <b>Bb7M</b>  <b>C/Bb</b>  <b>Am7</b>  <b>Dm</b>
        <b>Gm</b>  <b>A#/C</b>  <b>F7M</b>  <b>F7(13)</b>

              <b>Bb7M</b>               <b>C/Bb</b>
Num beijo molhado ninguém se conhece
      <b>Am7</b>           <b>F7(13)</b>
No momento é só prazer
               <b>Bb7M</b>                  <b>C/Bb</b>
Depois de um Adeus quando o dia amanhece
             <b>Dm7</b>  <b>C#m7</b>  <b>Cm7</b>  <b>F7(13)</b>
Eu começo a sofrer
             <b>Bb7M</b>                  <b>C/Bb</b>
E aí que desperta a paixão no meu peito
      <b>Am7</b>            <b>F7(13)</b>
E acelera o meu coração
               <b>Bb7M</b>                <b>C/Bb</b>
Então não tem jeito, descubro pra nós
              <b>F7M</b>  <b>F7(13)</b>
A melhor solução

 <b>Bb7M</b>                <b>C/Bb</b>
Baixa essa guarda encurta a distância
      <b>Am7</b>                <b>D7</b>
Que existe entre eu e você
 <b>Bb7M</b>              <b>C/Bb</b>               <b>Am7(5-)</b>
Vou te falar a verdade que o meu coração
                   <b>D7</b>
Te escolheu pra viver
      <b>Bb7M</b>        <b>C/Bb</b>
Procurei , não encontrei
     <b>Am7(5-)</b>       <b>D7</b>
Mas todo amor tem seu lugar
         <b>Gm7</b>           <b>A#/C</b>   <b>C7</b> <b>F</b>  <b>F7</b>
Achei o meu, só quero me entregar

----------------- Acordes -----------------
Am7 = 7 P5 5 5
Am7(5-) = P1 2 1 1
Bb7M = 3 2 3 3
C#m7 = 6 4 5 6
C7 = 2 3 1 2
Cm7 = 5 3 4 5
D7 = 4 2 1 4
Dm = 3 2 3 3
Dm7 = 0 2 1 3
F = 3 2 1 3
F7 = 3 2 P1 1
F7(13) = 1 5 3 3
F7M = 3 2 1 2
Gm = 5 3 3 5
Gm7 = 5 P3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function BaixaEssaGuardaPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}