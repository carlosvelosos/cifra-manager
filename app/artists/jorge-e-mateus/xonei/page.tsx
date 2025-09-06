import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Jorge & Mateus - Xonei

[Intro]

                     F#m
Ai, ai, ai, meu coração
D                        
  Não, não, não, de novo não

[Primeira Parte]

                      A
Eu tô com frio na barriga

E a mão que tá suando
                    E
Eu tô secando na camisa

Tá me desconcertando
      Bm
Cada vez que ela me olha, cada
   D
Jogada de cabelo mata três
A
  Eu, meu coração
           E                           A
E o plano de não me envolver mais uma vez

[Refrão]

                            E
Eu tô com medo de me apaixonei

Xonei, xonei
                            F#m
Eu tô com medo de me entreguei

Me entreguei, me entreguei
                           D
Tava com medo de deixar rolar
            E
Deixei, deixei
                      A
Foi só pegar, me apeguei

                            E
Eu tô com medo de me apaixonei

Xonei, xonei
                            F#m
Eu tô com medo de me entreguei

Me entreguei, me entreguei
                           D
Tava com medo de deixar rolar
            E
Deixei, deixei
                      A
Foi só pegar, me apeguei

( E  D )

[Primeira Parte]

                      A
Eu tô com frio na barriga

E a mão que tá suando
                    E
Eu tô secando na camisa

Tá me desconcertando
      Bm
Cada vez que ela me olha, cada
   D
Jogada de cabelo mata três
A
  Eu, meu coração
           E                           A
E o plano de não me envolver mais uma vez

[Refrão]

                            E
Eu tô com medo de me apaixonei

Xonei, xonei
                            F#m
Eu tô com medo de me entreguei

Me entreguei, me entreguei
                           D
Tava com medo de deixar rolar
            E
Deixei, deixei
                      A
Foi só pegar, me apeguei

                            E
Eu tô com medo de me apaixonei

Xonei, xonei
                            F#m
Eu tô com medo de me entreguei

Me entreguei, me entreguei
                           D
Tava com medo de deixar rolar
            E
Deixei, deixei
                      A
Foi só pegar, me apeguei
                            E
Eu tô com medo de me apaixonei
            
E aí, xonou?
                  A
Como é que não xona!

----------------- Acordes -----------------
A = X 0 2 2 2 0
Bm = X 2 4 4 3 2
D = X X 0 2 3 2
E = 0 2 2 1 0 0
F#m = 2 4 4 2 2 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function XoneiPage() {
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
