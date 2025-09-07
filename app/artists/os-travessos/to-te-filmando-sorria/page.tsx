import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Os Travessos - Tô Te Filmando (Sorria)

[Intro] D7M  Bm7  G7M  G/A

D7M                       F#m7  Bm7
    Toda vez que eu vejo você
                      G/A  F/G  G/A  Eb7M
Sinto uma coisa diferente

D7M                           F#m7  G7M
    Toda vez que eu penso em você
                              G/A   A#°
Te vejo nos meus sonhos tão carente

Bm7                              F#m7
    Por que você não cola do meu lado
                              G7M
Esquece os grilos todos do passado
       Em       Em/D         C  G/A  B7
Vem comigo e tenta ser feliz

Em7                          F#m7
    Pare de dizer: tá tudo errado
                          G7M
Deixe eu logo ser teu namorado
             G/A          D7M  D7
O resto o destino é quem diz

G7M                            F#m7
    Sorria que eu estou te filmando
              B7       Em7
Sorria, o coração tá gravando
             G/A           D7M
O seu nome aqui dentro de mim
  Em7  F#m7  G7M
Ô ôooooooôoooô
                            F#m7
Sorria que o prazer já vem vindo
                B7       Em7
Sorria, nosso amor tá tão lindo
              G/A                D7M  Em7  F#m7
Não quero ver você tão triste assim

----------------- Acordes -----------------
A#° = X 1 2 0 2 0
B7 = X 2 1 2 0 2
Bm7 = X 2 4 2 3 2
C = X 3 2 0 1 0
D7 = X X 0 2 1 2
D7M = X X 0 2 2 2
Eb7M = X X 1 3 3 3
Em = 0 2 2 0 0 0
Em/D = X X 0 4 5 3
Em7 = 0 2 2 0 3 0
F#m7 = 2 X 2 2 2 X
F/G = 3 X 3 2 1 X
G/A = 5 X 5 4 3 X
G7M = 3 X 4 4 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ToTeFilmandoSorriaPage() {
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
