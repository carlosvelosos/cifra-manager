import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Dominguinhos - Eu Só Quero Um Xodó

[Intro] A  E  B7(9)  E
        A  E  B7(9)  E
        A  E  B7(9)  E
        A  E  B7(9)  E  B7

[Primeira Parte] 

     E              C#m7  G#m7
Que falta eu sinto de um bem
     F#m7        B7(9)  E  B7(9)
Que falta me faz um  xodó
     E           C#m7      G#m7
Mas como eu não tenho ninguém
    F#m7          B7(9)   E
Eu levo a vida assim tão só

[Pré-Refrão] 

        Bm       E7
Eu só quero um amor
      Bm            F#7
Que acabe o meu sofrer

[Refrão] 

      C#m7   F#7        
Um xodó pra mim 
        C#m7    F#7
Do meu jeito assim
      A  E/G#  F#m7  B7(9)  E
Que alegre o  meu   vi_____ver 

( A  E  B7(9)  E )
( A  E  B7(9)  E  B7 )

[Primeira Parte] 

     E              C#m7  G#m7
Que falta eu sinto de um bem
     F#m7        B7(9)  E  B7(9)
Que falta me faz um  xodó
     E           C#m7      G#m7
Mas como eu não tenho ninguém
    F#m7          B7(9)   E
Eu levo a vida assim tão só

[Pré-Refrão] 

        Bm       E7
Eu só quero um amor
      Bm            F#7
Que acabe o meu sofrer

[Refrão] 

      C#m7   F#7        
Um xodó pra mim 
        C#m7    F#7
Do meu jeito assim
      A  E/G#  F#m7  B7(9)  E
Que alegre o  meu   vi_____ver 

( A  E  B7(9)  E )
( A  E  B7(9)  E  B7 )

[Solo] E  C#m7  G#m7
       F#m7  B7(9)  E  B7(9)
       E  C#m7  G#m7
       F#m7  B7(9)  E

[Pré-Refrão] 

        Bm       E7
Eu só quero um amor
      Bm            F#7
Que acabe o meu sofrer

[Refrão] 

      C#m7   F#7        
Um xodó pra mim 
        C#m7    F#7
Do meu jeito assim
      A  E/G#  F#m7  B7(9)  E
Que alegre o  meu   vi_____ver 

[Final] A  E  B7(9)  E
        A  E  B7(9)  E
        A  E  B7(9)  E
        A  E  B7(9)  E

----------------- Acordes -----------------
A = X 0 2 2 2 0
B7 = X 2 1 2 0 2
B7(9) = X 2 1 2 2 X
Bm = X 2 4 4 3 2
C#m7 = X 4 6 4 5 4
E = 0 2 2 1 0 0
E/G# = 4 X 2 4 5 X
E7 = 0 2 2 1 3 0
F#7 = 2 4 2 3 2 2
F#m7 = 2 4 2 2 2 2
G#m7 = 4 6 4 4 4 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EuSoQueroUmXodoPage() {
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
