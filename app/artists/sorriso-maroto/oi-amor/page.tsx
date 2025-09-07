import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Sorriso Maroto - Oi Amor

Intro:
G7/4 A7/4 G#7/4 G7/4
G7/4 A7/4 G#7/4 G7/4 A7/4
A7/4 G#7/4 G7/4
G7/4 G#7/4 A7/4


A7/4
Oi amor, sou eu
G7/4                                    A7/4            
... Tô ligando a essa hora porque a lua    Que apareceu,
          G#7/4 ^ G7/4

G7/4                                                   
... Trouxe um brilho de felicidade     E se escondeu
A7/4

G7/4                                   A7/4             
...Me dizendo que eu pertenço a você        Pode 
              A7/4 G#7/4 G7/4
acreditar
G7/4                                               
...Dessa vez, vou me entregar de corpo inteiro    Me 
                                  A7/4           G#7/4 ^ 
apaixonar
G7/4

G7/4                                                   
...E viver um sentimento verdadeiro        Eu quero 
A7/4
amar
G7/4                                  A7/4     C/Bb
...E ficar eternamente ao lado seu...
               Fm7/9   Bb7/13     Eb7+   Cm7
Até de madruga...da,    pen.....so
Dm5-/7    G7/4    A7/4   C/Bb
em...      vo....cê
                  Fm7/9   Bb7/13
E sem hora marca....da
Eb7+  Cm7   Dm5-/7  G7/4  A7/4   C/Bb
Li...go,...   pra    di.....zer.    2x.

Final, mesmo da introdução!


----------------- Acordes -----------------
A7/4 = X 0 2 0 3 0
Bb7/13 = 6 X 6 7 8 X
C/Bb = X 1 2 0 1 X
Cm7 = X 3 5 3 4 3
Dm5-/7 = X X 0 1 1 1
Eb7+ = X X 1 3 3 3
Fm7/9 = X X 3 1 4 3
G#7/4 = 4 6 4 6 4 X
G7/4 = 3 5 3 5 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OiAmorPage() {
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
