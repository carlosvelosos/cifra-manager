import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Sorriso Maroto - É Diferente

Intro: Am7 / Cm7 / Bm7/5- / E7 / Bm7/5- / E7 

Am7                             D7/9 
É diferente de todas que eu já conquisteiAm7                      G7 
É diferente de todas que beijei 
    G7             %
É diferente no jeito de tocar. 
      F7                        E7 
É diferente no jeito de amar. 
  Am7                        D7/9
É diferente, e deixa quem quiser falar, 
Am7                      G7           
Meu coração achou o seu lugar 
         G7           %
Não tem porque você se preocupar 
             F7            E7
Se o meu lugar é no seu coração 
Am7               D7/9      Am7
Eu sempre apostei na relação a dois 
                D7/9          F7+ 
Pra muita gente o amor chega depois 
               F6  G7               G#º 
E com nós dois foi diferente... Diferente. 
Am7              D7/9          Am7 
A gente foi ao infinito num olhar 
                  D7/9      F7+ 
Eu achei graça quando veio me falar 
                        F6    G7   G#º
O que você falou foi tudo que eu pensei 
Am  Am7+        Gm7       C7/9 
Eu quero provar pro mundo 
F7+               F6                     Bm7/5-        E7 
Quem tem duas vidas e um só querer, meu amor. 
Am  Am7+            Gm7       C7/9 
Eu quero gritar pro mundo 
             F7+    F6    Bm7/5-    E7/9- E7/9+ 
O amor é lindo, eu amo você.

SOLO FINAL: Am7 Cm7 Bm7/5- E7 Bm7/5- E7/9- E7/G# A7/9+

----------------- Acordes -----------------
A7/9+ = X X 7 6 8 8
Am = X 0 2 2 1 0
Am7 = X 0 2 0 1 0
Am7+ = X 0 2 1 1 0
Bm7/5- = X 2 3 2 3 X
C7/9 = X 3 2 3 3 X
Cm7 = X 3 5 3 4 3
D7/9 = X 5 4 5 5 X
E7 = 0 2 2 1 3 0
E7/9+ = X 6 5 6 7 X
E7/9- = X X 2 1 3 1
E7/G# = 4 X 2 4 3 X
F6 = 1 X 0 2 1 X
F7 = 1 3 1 2 1 1
F7+ = 1 X 2 2 1 X
G#º = 4 X 3 4 3 X
G7 = 3 5 3 4 3 3
Gm7 = 3 X 3 3 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EDiferentePage() {
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
