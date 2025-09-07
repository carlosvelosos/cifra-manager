import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Turma do Pagode - Pro Meu Mundo Girar

D7+
Eu preciso te ver
        G7+        G6
Pro meu fogo acender
      D7+
Eu préciso te amar
       G7+       A7    F#7
Pro meu mundo girar
( Bm    F#m7 ) (4x)      Bm    A7
Lêlêlêlêlêlêlê lêlêlêlêlêlêlê

D7+                     Gm9
E foi a saudade quem me avisou
D7+                Gm9
E descobriu, sem você nada sou
F7+       F6      Bb7+
Sinto sua falta e vivo chorando
F7+          F6           Em7/5-     A7
Você está gravado em meu pei ........to
      D7+
Eu preciso te ver
         G7+      G6
Pro meu fogo acender

      D7+
Eu preciso te amar
        G7+     F#7
Pro meu mundo girar

Bm             Am7             D79       G7+
Pra me enlouquecer basta eu te       tocar
G6               C#m7/5-     F#7         Bm
Me dá mais prazer, como é bom te amar
             Am7       D79    G7+
Num simples olhar já me dominou
G6            C#m7/5-     F#7     Bm   (A7)
Só você não vê que me enfeitiçou

----------------- Acordes -----------------
A7 = X 0 2 0 2 0
Am7 = X 0 2 0 1 0
Bb7+ = X 1 3 2 3 1
Bm = X 2 4 4 3 2
C#m7/5- = X 4 5 4 5 X
D7+ = X X 0 2 2 2
D79 = X 5 4 5 5 X
Em7/5- = X X 2 3 3 3
F#7 = 2 4 2 3 2 2
F#m7 = 2 X 2 2 2 X
F6 = 1 X 0 2 1 X
F7+ = 1 X 2 2 1 X
G6 = 3 X 2 4 3 X
G7+ = 3 X 4 4 3 X
Gm9 = 3 5 7 3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ProMeuMundoGirarPage() {
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
