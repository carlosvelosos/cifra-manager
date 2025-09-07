import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Grupo Pixote - Coisas do amor "Fã de carteirinha"

Introdução: A/B / D/A / G7+ / F#m7 / Em7 / G7+ / F#m7 / Em7 / D7+ / 

C7+ / D7+ /

D7+                     Em7
Eu não sei se você sabe
        F#m7                A/B ^ D/A
Mas preciso tanto lhe dizer
 G7+                    D/F#
Tô parado aqui pensando
     Em7           A7/9
Onde é que anda você
  D7+                    Em7
Será que você tá na minha
        F#m7             A/B ^ D/A
Eu sei lá o que você quer
 G7+                     D/F#
Sou teu fã de carteirinha
      Em7                       C#m5-/7 ^ F#7/9-
Tudo bem, seja o que Deus quiser
     Bm7                            F#m7
Mas tanto que eu te falei, falei e nada
        G7+                E/G#        Em7/A
Tantas vezes que eu te pedi....pedi e nada
C#m5-/7 ^ F#7     Bm7                              F#m7
.......E se pensa....que é dona da verdade, não é nada
    G7+                 E/G#         Em7/A
E agora acha que é feliz....mas tá errada
                       G7+           F#m7
Pois quando a gente se ama é um show
         B7           Em7           Em7 ^ Fm7  F#m7
Parece que o amor da gente recomeçou
        B7        Em7
A cada dia ele aumenta
                   Em7/A
E o coração não aguenta
           A7/9      D7+  D/F#  Am7
De tanto que te esperou
          C/D     G7+           F#m7
Mas de repente você me deixa só
     B7       Em7          Em7 ^ Fm7  F#m7
Aí então a cabeça dá um nó
           B7        Em7
Assim não muda de assunto
                       Em7/A
Porque a gente não tá junto
           A7/9
Sei lá são coisas do amor..

D9 / Em7 / F#m7 / A/B ^ B7 / G7+ / F#m7 / Em7 / G/A /

VOLTA AO INÍCIO


----------------- Acordes -----------------
A/B = X 2 2 2 2 X
A7/9 = 5 X 5 4 2 X
Am7 = X 0 2 0 1 0
B7 = X 2 1 2 0 2
Bm7 = X 2 4 2 3 2
C#m5-/7 = X 4 5 4 5 X
C/D = X X 0 0 1 0
C7+ = X 3 2 0 0 X
D/A = X 0 X 2 3 2
D/F# = 2 X 0 2 3 2
D7+ = X X 0 2 2 2
D9 = X X 0 2 3 0
E/G# = 4 X 2 4 5 X
Em7 = 0 2 2 0 3 0
Em7/A = X 0 0 0 0 0
F#7 = 2 4 2 3 2 2
F#7/9- = X X 4 3 5 3
F#m7 = 2 X 2 2 2 X
Fm7 = 1 X 1 1 1 X
G/A = 5 X 5 4 3 X
G7+ = 3 X 4 4 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CoisasDoAmorFaDeCarteirinha1Page() {
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
