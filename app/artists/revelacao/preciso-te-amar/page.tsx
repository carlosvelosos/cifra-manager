import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `
Grupo Revelação - Preciso Te Amar

[Intro] C  Em7  Am  Dm  G7

C          Em7
Eu estou apaixonado
Am                  Em
  Deixa eu ser seu namorado
F7M            D#º
  Quero ficar do teu lado
       F7M
Pra ter seu abraço, seu beijo
   G7(4) G7
Pra mim
C                 Em7
 O teu olhar não me engana
Am              Em
  Eu sei que você me ama
F7M            D#º
  Teu coração diz que você me quer
Am
 Mas o medo não deixa
Gm              C7
  Você se entregar
F7M
  Vem pra mim
 E7
Não faz assim
Am7           Gm7       C7
  Dê logo um fim nessa tortura
F7M            G7       C6(9)
  Nosso romance tem que eternizar
 Gm7                 C7
Você tem que me aceitar
F7M
  Eu quero a paz
E7
  Do teu sorriso
Am7          Gm7       C7
   Pra enfeitar meu paraíso
F7M            G7(4)
   Dê uma chance
 G7                C
Não custa nada tentar

 C7         F7M
Meu bem querer
  G7         C
Preciso te amar
C7      F7M     G7   E7(9)  C  C7
O seu amor me faz sonhar
   F7M
Se eu te perder
 G7       C
Não sei onde encontrar
C7        F7M
Um novo amor
     G7   C
Pro seu lugar
 C7         F7M
Meu bem querer
  G7         C
Preciso te amar
C7      F7M    G7    E7(9)  C  C7
O seu amor me faz sonhar
   F7M
Se eu te perder
 G7      C
Não sei onde encontrar
C7        F7M
Um novo amor
     G7    C
Pro seu lugar

C                 Em7
 O teu olhar não me engana
Am              Em
  Eu sei que você me ama
F7M            D#º
  Teu coração diz que você me quer
Am
 Mas o medo não deixa
Gm              C7
  Você se entregar
F7M
  Vem pra mim
 E7
Não faz assim
Am7           Gm7       C7
  Dê logo um fim nessa tortura
F7M            G7       C6(9)
  Nosso romance tem que eternizar
 Gm7                 C7
Você tem que me aceitar
F7M
  Eu quero a paz
E7
  Do teu sorriso
Am7          Gm7       C7
   Pra enfeitar meu paraíso
F7M            G7(4)
   Dê uma chance
 G7                C
Não custa nada tentar

 C7         F7M
Meu bem querer
  G7         C
Preciso te amar
C7      F7M    G7    E7(9)  C  C7
O seu amor me faz sonhar
   F7M
Se eu te perder
 G7      C
Não sei onde encontrar
C7        F7M
Um novo amor
     G7   C
Pro seu lugar
 C7         F7M
Meu bem querer
  G7         C
Preciso te amar
C7      F7M   G7     E7(9)  C  C7
O seu amor me faz sonhar
   F7M
Se eu te perder
 G7      C
Não sei onde encontrar
C7        F7M
Um novo amor
     G7   C
Pro seu lugar

----------------- Acordes -----------------
Am = 2 2 1 2
Am7 = 7 P5 5 5
C = 2 0 1 2
C6(9) = 2 2 1 0
C7 = 2 3 1 2
D#º = 1 2 1 4
Dm = 3 2 3 3
E7 = 2 1 0 0
E7(9) = 2 1 3 4
Em = 5 4 5 5
Em7 = 2 0 0 0
F7M = 3 2 1 2
G7 = P3 4 3 5
G7(4) = 0 0 1 3
Gm = 5 3 3 5
Gm7 = 5 P3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PrecisoTeAmarPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}