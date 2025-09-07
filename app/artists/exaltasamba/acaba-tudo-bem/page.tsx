import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Exaltasamba - Acaba Tudo Bem

Am7/9  Em7    F7+         E7/9-   
La    laia   laia        laia    laia 
Am     Em7    F7+         E7/9-  
La    laia   laia        laia    laia 
Am7/9                C7/13        F7+       E7/9+ 
É esse amor da gente que provoca tanta confusão 
Am7/9           C7/13          Bm7/5-           E7 
As vezes causa medo que sufoco não é brinquedo não 
Am7/9               C7/13             F7+        E7/9+    
Amor de adolescente inconseqüente que age sem pensar 
Am7/9                 C7/13          Bm7/5-     E7 
E assim tão de repente, olha e a gente que paixão 
Am7/9               C7/13                       F7+        E7/9+ 
Me amarro nesse amor, e esse amor quando é assim, só alegria 
Am7/9                     C7/13        Bm7/5-    E7/9-  
Adoro teu calor quem dera fosse assim todo diaaa 
Refrão 
Am7/9        Gm7       C7/9                 Bm7/5-         
Eu tô legal, até me acostumei com seu humor 
                 E7/9-                   Am7/9 
Tô baixo astral, estar longe dessa onda de caô 
        Gm7      C7/9                   Bm7/5- 
Tá na moral, a gente vive nesse vai e vem 
              E7/9-
Lá no final, acaba tudo bem 

La laia laia laia....... (volta ao inicio)

----------------- Acordes -----------------
Am = X 0 2 2 1 0
Am7/9 = X X 7 5 8 7
Bm7/5- = X 2 3 2 3 X
C7/13 = X 3 X 3 5 5
C7/9 = X 3 2 3 3 X
E7 = 0 2 2 1 3 0
E7/9+ = X 6 5 6 7 X
E7/9- = X X 2 1 3 1
Em7 = 0 2 2 0 3 0
F7+ = 1 X 2 2 1 X
Gm7 = 3 X 3 3 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AcabaTudoBemPage() {
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
