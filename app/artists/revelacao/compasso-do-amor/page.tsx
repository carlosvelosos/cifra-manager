import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `
Grupo Revelação - Compasso do Amor

[Intro] C  C7  F  G7  Em
        Am  Dm  G7  C  G7

C                     G6(9) E7    Am
  Quero sentir teu abraço  teu calor
                    Dm  G7     C
Dançar no mesmo compasso  do amor
                 G6(9)E7     Am
Viajar pelo teu corpo   sedutor
                 Dm   G7       C
Deliciar do seu beijo   seu sabor
 C7                 F7M        G7
Luz que meu céu ilumina  (lalaiá)
                Em7  Am7 G#m7 Gm7
Você é minha metade
C7                 F7M       G7
Essa paixão me fascina (lalaiá)
                    C
Tem gosto de felicidade

               C7                   F7M
Quando a gente ama não tem pra ninguém
                 G7                    C
Chego a me arrepiar só de lembrar meu bem
            C7                F7M
Viajo no balanço desse vai e vem
             G7                   C    C7 ( (G7))
Na arte de amar igual a você não tem
               C7                   F7M
Quando a gente ama não tem pra ninguém
                 G7                    C
Chego a me arrepiar só de lembrar meu bem
            C7                F7M
Viajo no balanço desse vai e vem
             G7                   C    C7 ( (G7))
Na arte de amar igual a você não tem

C                     G6(9) E7    Am
  Quero sentir teu abraço  teu calor
                    Dm  G7     C
Dançar no mesmo compasso  do amor
                 G6(9)E7     Am
Viajar pelo teu corpo   sedutor
                 Dm   G7       C
Deliciar do seu beijo   seu sabor
 C7                 F7M        G7
Luz que meu céu ilumina  (lalaiá)
                Em7  Am7 G#m7 Gm7
Você é minha metade
C7                 F7M       G7
Essa paixão me fascina (lalaiá)
                    C
Tem gosto de felicidade

               C7                   F7M
Quando a gente ama não tem pra ninguém
                 G7                    C
Chego a me arrepiar só de lembrar meu bem
            C7                F7M
Viajo no balanço desse vai e vem
             G7                   C  C7  G7
Na arte de amar igual a você não tem
               C7                   F7M
Quando a gente ama não tem pra ninguém
                 G7                    C
Chego a me arrepiar só de lembrar meu bem
            C7                F7M
Viajo no balanço desse vai e vem
             G7                   C  C7  G7
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
Gm7 = 5 P3 3 3
`;

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