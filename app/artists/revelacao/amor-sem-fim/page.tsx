import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `

(intro solo) 10-20-32-32-10-20-30-10-22-20-10-22-20-32
 10-20-32-32-10-20-30-10-22-20-10-12-14-15-17

   <b>D</b>                     <b>Gm7</b>
O nosso amor é tão leve, que nem dá pra sentir
 <b>D</b>                                      <b>Gm7</b>                <b>F#7</b>
Mais forte que isso é paixão que nos une, não consigo resistir
  <b>Bm</b>        <b>F#m7</b>                    <b>Bm</b>          <b>F#m7</b>
Quando teu corpo me chama eu vou... Me entrego a tudo não to nem aí
 <b>Bm</b>      <b>F#m7</b>              <b>G7+</b>                <b>Em</b> <b>A7</b>
Se pede bis com certeza eu dou, não dá pra fugir...
  <b>D</b>                        <b>Gm7</b>                    <b>D</b>
Eu viajei no sabor do teu beijo... Até posso imaginar
                           <b>Gm7</b>          <b>F#7</b>        <b>Bm</b>
Nosso prazer aumentando o desejo... é gostoso te amar
          <b>F#m7</b>            <b>Bm</b>               <b>F#m7</b>                 <b>Bm</b>
Não tenha medo de se entregar, porque meu medo onde está eu não sei
        <b>F#m7</b>                   <b>G7+</b>               <b>Em</b> <b>A7</b>      <b>D</b>
Nosso segredo a paixão vai guardar, em algum lugar não sei...

 <b>D</b>                           <b>D7</b>                          <b>E/G#</b>
Pra sempre quero estar com você, e não quero deixar pra depois...
                          <b>Gm7</b>                              <b>D</b>
Eu sinto em meu peito acender... O fogo desse amor de nós dois...
 <b>D</b>                        <b>D7</b>                            <b>E/G#</b>
Me envolve todo no seu olhar, e dá todo o seu corpo pra mim
                         <b>Gm7</b>                     <b>D</b>
Eu quero pra você me entregar... Nesse amor sem fim...

(solo final) 10-20-32-32-10-20-30-10-22-20-10-12-14-15-17

----------------- Acordes -----------------
A7 = 2 0 2 2
Bm = 4 4 3 4
D = 4 2 3 4
D7 = 4 2 1 4
Em = 5 4 5 5
F#7 = 4 3 P2 2
F#m7 = 4 P2 2 2
G7+ = 5 4 3 4
Gm7 = 5 P3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AmorSemFimPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
