import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Natiruts - Natiruts Reggae Power

[Intro] F#m  C#m7  Bm7  E
        F#m  C#m7  Bm7  E

[Primeira Parte]

F#m                  C#m7
    Quando a noite cair e o som
Bm7                   E
    Te lembrar algum sonho bom
F#m                C#m7
    E fazer tudo transcender
     Bm7                      E
Tristeza vai sumir e ninguém vai sofrer

F#m                C#m7
    Sintonize sua vibração
Bm7                     E
    Não há tempo pra viver em vão
F#m                      C#m7
    E não pense mais em desistir
  Bm7
Existe um mundo que
            E
Só quer te ver sorrir

[Ponte]

      F#m     C#m7
Não chora, a nossa vida
               Bm7          E
É feita mesmo para se aprender
    F#m     C#m7
E agora, é hora de tentar 
         Bm7          E
Se libertar não vai doer

F#m                   C#m7
  Deixa e energia do som te levar
   Bm7                   E
A vibe positiva solta pelo ar
      F#m                  C#m7
Quem sente com a alma é capaz de amar
 Bm7                 E
Sempre livre pra cantar

[Refrão]

F#m  C#m7
O, o o
     Bm7                  E
Natiruts reggae power chegou
F#m  C#m7
O, o o
         Bm7                  E
Transformando toda noite em amor

F#m  C#m7
O, o o
     Bm7                  E
Natiruts reggae power chegou
F#m  C#m7
O, o o
         Bm7                  E
Transformando toda noite em amor   

[Segunda Parte]

F#m                C#m7
    Sintonize sua vibração
Bm7                     E
    Não há tempo pra viver em vão
F#m                      C#m7
    E não pense mais em desistir
  Bm7
Existe um mundo que
            E
Só quer te ver sorrir

[Ponte]

      F#m     C#m7
Não chora, a nossa vida
               Bm7          E
É feita mesmo para se aprender
    F#m     C#m7
E agora, é hora de tentar 
         Bm7          E
Se libertar não vai doer

F#m                   C#m7
  Deixa e energia do som te levar
   Bm7                   E
A vibe positiva solta pelo ar
      F#m                  C#m7
Quem sente com a alma é capaz de amar
 Bm7                 E
Sempre livre pra cantar

[Refrão]

F#m  C#m7
O, o o
     Bm7                  E
Natiruts reggae power chegou
F#m  C#m7
O, o o
         Bm7                  E
Transformando toda noite em amor

Bum Bum!!

F#m  C#m7
O, o o
     Bm7                  E
Natiruts reggae power chegou
F#m  C#m7
O, o o
         Bm7                  E
Transformando toda noite em amor   

F#m  C#m7
O, o o
     Bm7                  E
Natiruts reggae power chegou
F#m  C#m7
O, o o
         Bm7                  E
Transformando toda noite em amor

Bum Bum!

F#m  C#m7
O, o o
     Bm7                  E
Natiruts reggae power chegou
F#m  C#m7
O, o o
         Bm7                  E
Transformando toda noite em amor   

Bum!

----------------- Acordes -----------------
Bm7 = X 2 4 2 3 2
C#m7 = X 4 6 4 5 4
E = 0 2 2 1 0 0
F#m = 2 4 4 2 2 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function NatirutsReggaePowerPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
