import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Zeca Pagodinho - Coração em desalinho

[Intro] F  Gm7  Am7  D7  Gm7  C7  F  C7

 F           F5+   F6     F5+
Numa estrada dessa vida
F      D7          Gm  D7
Eu te conheci oh! flor
 Gm        D7  Gm    D7      Gm
Vinhas tão desiludida, mal sucedida
       C7     F       C7
Por um falso amor
 F     F5+ F6   F5+
Dei afeto e carinho
F      F7     A#
Como retribuição
Bm7(5-)     E7    Am
Procuraste um outro ninho
         E/G#              Gm
Em desalinho ficou meu coração
D/F#                Gm C7  Am
Meu peito agora é só paixão
D7                Gm C7  F   Am  G#m
Meu peito agora é só paixão
Gm         C7
Tamanha desilusão
F
Me deste oh! flor
      Em7(5-)  A7       D#6   D7
Me enganei..... redondamente
Gm         C7   C°      Dm
Pensando em te fazer um bem
            G7
Eu me apaixonei
Gm7        C7         F    C7
Foi........meu........mal (e agora)

[Refrão]

F   Bm7(5-)         E7           Am
Agora, uma enorme paixão me devora
Am7(5-)         D7    D6  D7
Alegria partiu foi embora
Gm       C7  Am      D7
Não sei viver sem teu amor
G7               C7     F  C7
Sozinho, curto a minha dor

[Final]

G7               C7     F  C7 D7
Sozinho, curto a minha dor

----------------- Acordes -----------------
D#6 = 4 3 P1 1
D6 = 3 2 0 0
D7 = 4 2 1 4
Dm = 3 2 3 3
E7 = 2 1 0 0
Em7(5-) = 2 3 3 5
F = 3 2 1 3
F5+ = 3 2 2 3
F6 = 3 2 1 0
F7 = 3 2 P1 1
G#m = 6 4 4 6
G7 = P3 4 3 5
Gm = 5 3 3 5
Gm7 = 5 P3 3 3
A7 = 2 0 2 2
Am = 2 2 1 2
Am7 = 7 P5 5 5
Am7(5-) = P1 2 1 1
A# = P3 3 3 3
Bm7(5-) = 3 2 0 0
C7 = 2 3 1 2
C° = 4 2 P1 1
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
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}
