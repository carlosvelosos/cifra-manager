import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Zeca Pagodinho - Coração em desalinho

[Intro] C  Dm7  Em7  A7  Dm7  G7  C  G7

 C           C5+   C6     C5+
Numa estrada dessa vida
C      A7          Dm  A7
Eu te conheci oh! flor
 Dm        A7  Dm    A7      Dm
Vinhas tão desiludida, mal sucedida
       G7     C       G7
Por um falso amor
 C     C5+ C6   C5+
Dei afeto e carinho
C      C7     F
Como retribuição
F#m7(5-)     B7    Em
Procuraste um outro ninho
         B/D#              Dm
Em desalinho ficou meu coração
A/C#                Dm G7  Em
Meu peito agora é só paixão
A7                Dm G7  C   Em  D#m
Meu peito agora é só paixão
Dm         G7
Tamanha desilusão
C
Me deste oh! flor
      Bm7(5-)  E7       A#6   A7
Me enganei..... redondamente
Dm         G7   G°      Am
Pensando em te fazer um bem
            D7
Eu me apaixonei
Dm7        G7         C    G7
Foi........meu........mal (e agora)

[Refrão]

C   F#m7(5-)         B7           Em
Agora, uma enorme paixão me devora
Em7(5-)         A7    A6  A7
Alegria partiu foi embora
Dm       G7  Em      A7
Não sei viver sem teu amor
D7               G7     C  G7
Sozinho, curto a minha dor

[Final]

D7               G7     C  G7 A7
Sozinho, curto a minha dor

----------------- Acordes -----------------
A#6 = P3 3 3 5
A/C# = 7 6 5 7
A6 = 2 2 2 4
A7 = 2 0 2 2
Am = 2 2 1 2
B7 = 1 2 0 1
Bm7(5-) = 3 2 0 0
C = 2 0 1 2
C5+ = 10 9 9 10
C6 = 2 2 1 2
C7 = 2 3 1 2
D#m = 4 3 4 4
D7 = 4 2 1 4
Dm = 3 2 3 3
Dm7 = 0 2 1 3
E7 = 2 1 0 0
Em = 5 4 5 5
Em7 = 2 0 0 0
Em7(5-) = 2 3 3 5
F = 3 2 1 3
F#m7(5-) = 4 5 5 7
G7 = P3 4 3 5
G° = 5 3 P2 2
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
