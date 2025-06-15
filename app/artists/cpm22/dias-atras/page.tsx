import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `CPM 22 - Dias Atrás

[Intro] B5  F#5  E5  F#5
        B5  F#5  E5  F#5

[Primeira Parte]

( E5  G#m7  E5  G#m7 )

 E5    G#m7
Nunca mais
   E5            G#m7
Espero te encontrar
     E5  G#m7
Por tudo
       E5           G#m7  E5
Que você me fez passar
        G#m7          E5
Tantos dias sem entender
     G#m7        E5  G#m7
Esperando por você
                F#5  E5
Que não vai voltar

[Refrão]

B5         F#5
   Dias atrás
    E5
Pensava em você
    F#5         B5
Não era assim, mas
           F#5
Olho pra trás
     E5
Mas penso e sigo em frente
     F#5
Pra nunca mais

Viver assim

[Segunda Parte]

( E5  G#m7  E5  G#m7 )

 E5    G#m7
Tanto faz
E5           G#m7
O que vai rolar
     E5   G#m7
Mas nunca
   E5          G#m7  E5
Espero voltar lá
        G#m7          E5
Sempre tento me esconder
      G#m7         E5  G#m7
Para deixar de te ver
               F#5  E5
Acho que é melhor

[Refrão]

B5         F#5
   Dias atrás
    E5
Pensava em você
    F#5      B5
Não é assim mais
           F#5
Olho pra trás
     E5
Mas penso e sigo em frente
     F#5
Pra nunca mais

Viver assim

[Solo] G#5  E5  G#5  E5  
       G#5  E5  F#5  E5
       G#5  E5  G#5  E5  G#5
       F#5  E5  F#5  E5

[Refrão]

B5         F#5
   Dias atrás
    E5
Pensava em você
    F#5         B5
Não era assim, mas
           F#5
Olho pra trás
     E5
Mas penso e sigo em frente
     F#5
Pra nunca mais

[Final]

         B5
Viver assim (viver assim)
         F#5
Viver assim (viver assim)
         E5
Viver assim
     F#5
Pra nunca mais
         B5
Viver assim (viver assim)
         F#5
Viver assim (viver assim)
         E5
Viver assim
     F#5
Pra nunca mais viver assim

( E5  G#m7  E5  G#m7 )
( E5  G#m7  E5  G#m7 )
( E5 )

----------------- Acordes -----------------
B5 = X 2 4 4 X X
E5 = 0 P2 2 X X X
F#5 = 2 4 4 X X X
G = 3 2 0 0 0 3
G#5 = 4 6 6 X X X
G#m7 = 4 2 4 X X X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DiasAtrasPage() {
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
