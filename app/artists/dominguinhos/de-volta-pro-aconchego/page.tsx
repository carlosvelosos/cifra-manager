import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Dominguinhos - De Volta Pro Aconchego

[Intro] Bm7  E7(9-)  G/A  D7(9/11)  D/C
        G/B  Cm7  F7(9/11)  Bm7  E7(9-)
        A/C#  F7/C  G/B  Eb7/Bb  Am7  D7(4/9)  D

    G              Am7     Bm7   Am7  D7(4/9)
Estou de volta pro meu aconchego
 G                   E7(9-)     Am7  E7(9-)
Trazendo na mala bastante  saudade
 Am9                   E7(9-)
Querendo um sorriso sincero
   Am9              E7(9-)       Am9
Um abraço para aliviar meu cansaço
              D/C     Bm7  Am7  D7(4/9)
E toda essa minha vontade
    G            Am7         Bm7  D7(9/11)
Que bom poder tá contigo de novo
   G6                F/G   G7(9-)  C7M  E7(9-)
Roçando teu corpo beijando   você
    Am7            D/C        Bm7
Pra mim, tu és a estrela mais linda
               Em7         Am7
Seus olhos me prendem e fascinam
             D7(9/11)  G6  G#º
A paz que eu gosto de ter
  Am9              D/C         Bm7  E7(9-)
É duro ficar sem você vez em quando
   Am7                B7(9-)   Em7  E7(9-)
Parece que falta um pedaço de mim
   Am7            D7(9/11)  G6
Me alegro na hora de regressar
           G7        C7M
Parece que vou mergulhar
     E7(9-)       A7(13)  A7(13-)  A7  D7(9-)
Na felicidade sem fim

           Bm7  E7(9-)      G/A  D7(9/11)
Tchu ru ru ru... tchu... ru ru
           D/C  G/B    Cm7  F7(9/11)
Tchu ru ru ru   tchu  tchu
           Bm7  E7(9-)
Tchu ru ru ru
             A/C#  F7/C            G/B  Eb7/Bb
Tchu-ru ru ru ru...      tchu ru ru ru
           Am7   D7(4/9)  D ( G6  G#º )
Tchu ru ru ru    ru      ru

Am9              D/C         Bm7    E7(9-)
É duro ficar sem você vez em quando
   Am7                B7(9-)   Em7 E7(9-)
Parece que falta um pedaço de mim
   Am7            D7(9/11)  G6
Me alegro na hora de regressar
           G7        C7M
Parece que vou mergulhar
     E7(9-)       A7(13)  A7(13-)  A7  D7(9-)
Na felicidade sem fim

           Bm7  E7(9-)      G/A  D7(9/11)
Tchu ru ru ru... tchu... ru ru
           D/C  G/B    Cm7  F7(9/11)
Tchu ru ru ru   tchu  tchu
           Bm7  E7(9-)
Tchu ru ru ru
             A/C#  F7/C            G/B  Eb7/Bb
Tchu-ru ru ru ru...      tchu ru ru ru
           Am7   D7(4/9)  D
Tchu ru ru ru    ru      ru

----------------- Acordes -----------------
A/C# = X 4 X 2 5 5
A7 = X 0 2 0 2 0
A7(13) = X 0 X 0 2 2
A7(13-) = X 0 X 0 2 1
Am7 = X 0 2 0 1 0
Am9 = X 0 2 4 1 0
B7(9-) = X 2 1 2 1 X
Bm7 = X 2 4 2 3 2
C7M = X 3 2 0 0 X
Cm7 = X 3 5 3 4 3
D = X X 0 2 3 2
D/C = X 3 X 2 3 2
D7(4/9) = X 5 5 5 5 5
D7(9-) = X 5 4 5 4 X
D7(9/11) = X 5 5 5 5 5
E7(9-) = X X 2 1 3 1
Eb7/Bb = 6 X 5 6 4 X
Em7 = 0 2 2 0 3 0
F/G = 3 X 3 2 1 X
F7(9/11) = X X 3 3 4 3
F7/C = X 3 3 2 4 X
G = 3 2 0 0 0 3
G#º = 4 X 3 4 3 X
G/A = 5 X 5 4 3 X
G/B = X 2 0 0 3 3
G6 = 3 X 2 4 3 X
G7 = 3 5 3 4 3 3
G7(9-) = 3 X 3 1 0 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DeVoltaProAconchegoPage() {
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
