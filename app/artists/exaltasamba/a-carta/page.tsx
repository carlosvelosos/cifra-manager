import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Exaltasamba - A Carta

[Intro] B7(4)  A/E  B/E  A/E  B/E  Am7(9)  Am7(11)/G

F#m7(5-)      F7(5-)        Em7      G7(13)           F#m7(5-)
Não        existem mais palavras que eu possa escrever
           B7(9-/13-)  G7M  C7M          F#m7(5-)
Pra falar de tanto amor, entenda, por favor
         F7(5-)         Em7             Am7(9)
Que uma carta é muito pouco, para revelar
     B7(9-/13-)   E7M(9)   A/E               E7M(9)
O retrato da tristeza     e a cicatriz da saudade
    Am7         D/C     G7M
Que você deixou      no meu peito
  C7M(9)               G7M
Tatuagem de amor não tem jeito
Cm         Cm7M      G7M   B7(4)   B7(9)     B7(4)               B7
Nunca vai sair de    mim essa     dor

E7M           Cº           C#m7
Entenda o que eu vou te dizer
     G#7(5+)    Bm7(11)         E/D       A7M(9)
Dois pontos,   vem de volta pro meu coração
  E/G#
Exclamação!
F#m7          Ab/C     C#m7
Não posso viver sem você
            C#m7/B         F#/A#
Não tenho razão, nem porque
                       B7(4)  B7(9)
Me acostumar com a sauda___de

E7M           Cº      C#m7     G#7(5+)   Bm7(11)
Nem vírgula vai separar nessa ora____ção
           E/D        A7M(9)
Teu nome da minha paixão
     E/G#
Não leve a mal
F#m7               Ab/C
Eu sei que eu não sou escritor
C#m7       C#m7/B     F#/A#
É só uma carta de amor
                             B7(4)  B7(9)
De alguém que te quer de verda__de

----------------- Acordes -----------------
A/E = 0 X 2 2 2 0
A7M(9) = X 0 2 1 0 0
Ab/C = X 3 X 1 4 4
Am7 = X 0 2 0 1 0
Am7(11)/G = 3 0 0 0 1 0
Am7(9) = X X 7 5 8 7
B/E = X 7 9 8 7 7
B7 = X 2 1 2 0 2
B7(4) = X 2 4 2 5 2
B7(9) = X 2 1 2 2 X
B7(9-/13-) = X 2 1 2 1 3
Bm7(11) = X 2 0 2 3 0
C#m7 = X 4 6 4 5 4
C#m7/B = 7 4 6 4 5 4
C7M = X 3 2 0 0 X
C7M(9) = X 3 2 4 3 X
Cm = X 3 5 5 4 3
Cm7M = X 3 5 4 4 3
Cº = X 3 4 2 4 2
D/C = X 3 X 2 3 2
E/D = X 5 X 4 5 4
E/G# = 4 X 2 4 5 X
E7M = X X 2 4 4 4
E7M(9) = X 7 6 8 7 X
Em7 = 0 2 2 0 3 0
F#/A# = 6 X 4 6 7 X
F#m7 = 2 X 2 2 2 X
F#m7(5-) = 2 X 2 2 1 X
F7(5-) = 1 X 1 2 0 X
G#7(5+) = 4 X 4 5 5 4
G7(13) = 3 X 3 4 5 X
G7M = 3 X 4 4 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ACartaPage() {
  return (
    <>
      <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
