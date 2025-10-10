import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Grupo Pixote - Brilho de Cristal

Intro: D6(9) E7(9) D6(9) Em7 F#m7

G7M     G/A      D6(9)    D(#5)
   É o brilho do seu  olhar
         E7(9)
Que me leva a loucura pode ser
   G7M  G/A           D7M  Am7
Minha cura   essa febre de amar
      D7(9) G#m7(b5)      Gm6
Faz o que quer de mim     faz um
  D7M    A/C# Bm7      Bm7/A
Bem faz um mal  nosso amor será
Em7    F#m7   G/A       D6(9)
Sempre assim um brilho de cristal

G/A  D6(9)
Quem me dera, ao menos uma vez poder
    E/D
Te abraçar e te beijar de pertinho
   Em7       G/A    D6(9) G/A
Desvendar o brilho desse olhar

   D6(9)
Que ilumina minha vida, triste vida
   E/D
Sem você não sou ninguém vem cá me
Em7    G/A       D6(9) Am7 D7(9)
Dar, me dar você meu bem

    G7M      C7(9)    F#m7
Porque ando tão sozinho precisando
  Bm7     Em7        G/A
De carinho juro por Deus jamais amei
 D7M  Bm7     C#m7(b5)   F#7(b13)
Assim    é desejo    demais    vem
  Bm7(9)      Bm7/A  E/G#
Pra ser   minha paz  abra o seu
  E7      G/A
Coração vem pra mim

         D6(9)
É o brilho do seu  olhar...

 G/A        D6(9)  Bb7M C7M D7M
Um brilho de cristal

----------------- Acordes -----------------
A/C# = 7 6 5 7
Am7 = 7 P5 5 5
Bb7M = 3 2 3 3
Bm7 = 4 2 3 4
Bm7(9) = 7 6 0 0
Bm7/A = 12 11 10 9
C#m7(b5) = 5 4 P2 2
C7(9) = 2 3 3 5
C7M = 2 0 0 2
D(#5) = 12 11 11 12
D6(9) = 4 2 0 2
D7(9) = 4 5 5 7
D7M = 0 P2 2 4
E7 = 2 1 0 0
E7(9) = 2 1 3 4
Em7 = 2 0 0 0
F#7(b13) = 14 11 11 12
F#m7 = 4 P2 2 2
G#m7(b5) = 0 1 0 0
G7M = 5 4 3 4
Gm6 = 0 0 0 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function BrilhoDeCristalPage() {
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
