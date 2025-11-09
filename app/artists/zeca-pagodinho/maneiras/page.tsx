import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `

[Intro] <b>Am</b>  <b>F#m7</b>  <b>Em</b>  <b>F</b>  <b>Em</b>  <b>A7</b>

[Primeira Parte]

 <b>Em7</b>                        <b>B7</b>
Se eu quiser fumar eu fumo      se eu quiser beber eu bebo
 <b>Bm7(5-)</b>          <b>E7</b>          <b>Am</b>     <b>Am/G</b>
Pago tudo que consumo com o suor do meu emprego
 <b>F#m7(5-)</b>          <b>B7(9-)</b>       <b>Em7</b>            <b>Em/D</b>
Confusão eu não arrumo, mas também não peço arrego
<b>F#7</b>                   <b>B7</b>
Eu um dia me aprumo, tenho fé no meu apego

<b>Em7</b>                       <b>B7</b>
Eu só posso ter chamego, com quem me faz cafuné
 <b>Bm7(5-)</b>               <b>E7</b>       <b>Am</b>     <b>Am/G</b>
Como o vampiro e o morcego é o homem e a mulher
<b>F#m7(5-)</b>           <b>B7(9-)</b>         <b>Em</b>           <b>Em/D</b>
O meu linguajar é nato, eu não estou falando grego
          <b>F#7</b>                     <b>F#m7(5-)</b>          <b>B7</b>
Eu tenho amores e amigos de fato, nos lugares onde chego

<b>Em7</b>                     <b>B7</b>
Eu estou descontraído,     não que eu tivesse bebido
 <b>Bm7(5-)</b>              <b>E7</b>         <b>Am</b>            <b>Am/G</b>
Nem que eu tivesse fumado pra falar da vida alheia
 <b>F#m7(5-)</b>        <b>B7(9-)</b>    <b>Em</b>                 <b>Em/D</b>
Mas digo sinceramente, na vida, a coisa mais feia
   <b>F#m7(5-)</b>          <b>B7</b>                <b>Em</b>  <b>E7</b>
É gente que vive chorando de barriga cheia

[Refrão]

    <b>Am</b>                                 <b>Em</b>  <b>Em/D</b>
É gente que vive chorando de barriga cheia
    <b>F#m7(5-)</b>         <b>B7</b>                <b>Em</b>
É gente que vive chorando de barriga cheia

----------------- Acordes -----------------
A7 = 2 0 2 2
Am = 2 2 1 2
Am/G = P5 5 5 7
B7 = 1 2 0 1
B7(9-) = 1 2 1 4
Bm7(5-) = 3 2 0 0
E7 = 2 1 0 0
Em = 5 4 5 5
Em/D = 0 0 0 2
Em7 = 2 0 0 0
F = 3 2 1 3
F#7 = 4 3 P2 2
F#m7 = 4 P2 2 2
F#m7(5-) = 4 5 5 7`;

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
