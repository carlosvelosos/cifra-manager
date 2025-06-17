import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `
Zeca Pagodinho - Maneiras

[Intro] Am  F#m7  Em  F  Em  A7

[Primeira Parte]

 Em7                        B7
Se eu quiser fumar eu fumo      se eu quiser beber eu bebo
 Bm7(5-)          E7          Am     Am/G
Pago tudo que consumo com o suor do meu emprego
 F#m7(5-)          B7(9-)       Em7            Em/D
Confusão eu não arrumo, mas também não peço arrego
F#7                   B7
Eu um dia me aprumo, tenho fé no meu apego

Em7                       B7
Eu só posso ter chamego, com quem me faz cafuné
 Bm7(5-)               E7       Am     Am/G
Como o vampiro e o morcego é o homem e a mulher
F#m7(5-)           B7(9-)         Em           Em/D
O meu linguajar é nato, eu não estou falando grego
          F#7                     F#m7(5-)          B7
Eu tenho amores e amigos de fato, nos lugares onde chego

Em7                     B7
Eu estou descontraído,     não que eu tivesse bebido
 Bm7(5-)              E7         Am            Am/G
Nem que eu tivesse fumado pra falar da vida alheia
 F#m7(5-)        B7(9-)    Em                 Em/D
Mas digo sinceramente, na vida, a coisa mais feia
   F#m7(5-)          B7                Em  E7
É gente que vive chorando de barriga cheia

[Refrão]

    Am                                 Em  Em/D
É gente que vive chorando de barriga cheia
    F#m7(5-)         B7                Em
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
F#m7(5-) = 4 5 5 7
`;

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
