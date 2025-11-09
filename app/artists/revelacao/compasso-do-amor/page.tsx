import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `

[Intro] <b>C</b>  <b>C7</b>  <b>F</b>  <b>G7</b>  <b>Em</b>
        <b>Am</b>  <b>Dm</b>  <b>G7</b>  <b>C</b>  <b>G7</b>

<b>C</b>                     <b>G6(9)</b> <b>E7</b>    <b>Am</b>
  Quero sentir teu abraço  teu calor
                    <b>Dm</b>  <b>G7</b>     <b>C</b>
Dançar no mesmo compasso  do amor
                 <b>G6(9)E7</b>     <b>Am</b>
Viajar pelo teu corpo   sedutor
                 <b>Dm</b>   <b>G7</b>       <b>C</b>
Deliciar do seu beijo   seu sabor
 <b>C7</b>                 <b>F7M</b>        <b>G7</b>
Luz que meu céu ilumina  (lalaiá)
                <b>Em7</b>  <b>Am7</b> <b>G#m7</b> <b>Gm7</b>
Você é minha metade
<b>C7</b>                 <b>F7M</b>       <b>G7</b>
Essa paixão me fascina (lalaiá)
                    <b>C</b>
Tem gosto de felicidade

               <b>C7</b>                   <b>F7M</b>
Quando a gente ama não tem pra ninguém
                 <b>G7</b>                    <b>C</b>
Chego a me arrepiar só de lembrar meu bem
            <b>C7</b>                <b>F7M</b>
Viajo no balanço desse vai e vem
             <b>G7</b>                   <b>C</b>    <b>C7</b> ( (<b>G7</b>))
Na arte de amar igual a você não tem
               <b>C7</b>                   <b>F7M</b>
Quando a gente ama não tem pra ninguém
                 <b>G7</b>                    <b>C</b>
Chego a me arrepiar só de lembrar meu bem
            <b>C7</b>                <b>F7M</b>
Viajo no balanço desse vai e vem
             <b>G7</b>                   <b>C</b>    <b>C7</b> ( (<b>G7</b>))
Na arte de amar igual a você não tem

<b>C</b>                     <b>G6(9)</b> <b>E7</b>    <b>Am</b>
  Quero sentir teu abraço  teu calor
                    <b>Dm</b>  <b>G7</b>     <b>C</b>
Dançar no mesmo compasso  do amor
                 <b>G6(9)E7</b>     <b>Am</b>
Viajar pelo teu corpo   sedutor
                 <b>Dm</b>   <b>G7</b>       <b>C</b>
Deliciar do seu beijo   seu sabor
 <b>C7</b>                 <b>F7M</b>        <b>G7</b>
Luz que meu céu ilumina  (lalaiá)
                <b>Em7</b>  <b>Am7</b> <b>G#m7</b> <b>Gm7</b>
Você é minha metade
<b>C7</b>                 <b>F7M</b>       <b>G7</b>
Essa paixão me fascina (lalaiá)
                    <b>C</b>
Tem gosto de felicidade

               <b>C7</b>                   <b>F7M</b>
Quando a gente ama não tem pra ninguém
                 <b>G7</b>                    <b>C</b>
Chego a me arrepiar só de lembrar meu bem
            <b>C7</b>                <b>F7M</b>
Viajo no balanço desse vai e vem
             <b>G7</b>                   <b>C</b>  <b>C7</b>  <b>G7</b>
Na arte de amar igual a você não tem
               <b>C7</b>                   <b>F7M</b>
Quando a gente ama não tem pra ninguém
                 <b>G7</b>                    <b>C</b>
Chego a me arrepiar só de lembrar meu bem
            <b>C7</b>                <b>F7M</b>
Viajo no balanço desse vai e vem
             <b>G7</b>                   <b>C</b>  <b>C7</b>  <b>G7</b>
Na arte de amar igual a você não tem

----------------- Acordes -----------------
Am = 2 2 1 2
Am7 = 7 P5 5 5
C = 2 0 1 2
C7 = 2 3 1 2
Dm = 3 2 3 3
E7 = 2 1 0 0
Em = 5 4 5 5
Em7 = 2 0 0 0
F = 3 2 1 3
F7M = 3 2 1 2
G#m7 = 6 P4 4 4
G6(9) = 5 4 5 7
G7 = P3 4 3 5
Gm7 = 5 P3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CompassoDoAmorPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}