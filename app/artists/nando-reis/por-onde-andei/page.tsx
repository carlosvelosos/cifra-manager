import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Nando Reis - Por Onde Andei

[Intro] C  G  Dm  F
        C  G  Dm  F/C  C4

[Tab - Intro]

[Parte 1 de 5]
   C                         G
E|------------------------------------------|
B|------------------------------------------|
G|-------0----------------------------------|
D|---0h2---2------2------------------0------|
A|-3----------3-3---3-3-3--2-----0h2---2----|
E|----------------------------3-------------|

[Parte 2 de 5]
   G           Dm                    F
E|------------------------------------------|
B|------------------------------------------|
G|--------------------0--------0------------|
D|-----0---------0--3---3--0-0---0--------3-|
A|-------2-0-0-3--------------------0-3-3---|
E|-3-3--------------------------------------|

[Parte 3 de 5]
E|------------------------------------------|
B|------------------------------------------|
G|-----0------------------------------------|
D|---------------3---2----------------------|
A|-3-3---3-3-3-3---3------------------------|
E|------------------------------------------|

[Parte 4 de 5]
   C                         G
E|------------------------------------------|
B|------------------------------------------|
G|-------0----------------------------------|
D|---0h2---2------2------------------0------|
A|-3----------3-3---3-3-3--2-----0h2---2----|
E|----------------------------3-------------|

[Parte 5 de 5]
  G           Dm                     F/C C4
E|------------------------------------------|
B|------------------------------------1---1-|
G|--------------------0--------0------2---0-|
D|-----0---------0--3---3--0-0---0----3---3-|
A|-------2-0-0-3--------------------0-3---3-|
E|-3-3--------------------------------------|

[Primeira Parte]

             C
Desculpe, estou um pouco atrasado
       G
Mas espero que ainda dê tempo
      Dm                           F
De dizer que andei errado, e eu entendo
          C
As suas queixas tão justificáveis
            G
E a falta que eu fiz nessa semana
 Dm
Coisas que pareceriam óbvias
  F
Até pra uma criança

[Refrão]

    C
Por onde andei
            G
Enquanto você me procurava?
   Bb2                   F
Será que eu sei que você é mesmo
                       C
Tudo aquilo que me faltava?

( G  Dm  F )

[Segunda Parte]

          C
Amor, eu sinto a sua falta
               G
E a falta é a morte da esperança
        Dm
Como o dia em que roubaram o seu carro
    F
Deixou uma lembrança
              C
Que a vida é mesmo coisa muito frágil
       G
Uma bobagem, uma irrelevância
  Dm                      F
Diante da eternidade do amor

De quem se ama

[Refrão]

    C
Por onde andei
            G
Enquanto você me procurava?
      Bb2
E o que eu te dei
           F
Foi muito pouco ou quase nada

      C
E o que eu deixei?
         G
Algumas roupas penduradas
   Bb2
Será que eu sei que
        F
Você é mesmo tudo
                  C
Aquilo que me faltava?

( G  Dm  F )
( C  G  Dm  F )

[Segunda Parte]

          C
Amor, eu sinto a sua falta
               G
E a falta é a morte da esperança
        Dm
Como o dia em que roubaram o seu carro
    F
Deixou uma lembrança
              C
Que a vida é mesmo coisa muito frágil
       G
Uma bobagem, uma irrelevância
  Dm                      F
Diante da eternidade do amor

De quem se ama

[Refrão]

    C
Por onde andei
            G
Enquanto você me procurava?
      Bb2
E o que eu te dei
           F
Foi muito pouco ou quase nada

      C
E o que eu deixei?
         G
Algumas roupas penduradas
   Bb2
Será que eu sei que
        F
Você é mesmo tudo
                  C
Aquilo que me faltava?

( G  Dm  F )
( C  G  Dm  F )

[Refrão]

    C
Por onde andei
            G
Enquanto você me procurava?
      Bb2
E o que eu te dei
           F
Foi muito pouco ou quase nada

      C
E o que eu deixei?
         G
Algumas roupas penduradas
   Bb2
Será que eu sei que
        F
Você é mesmo tudo
                  C
Aquilo que me faltava?

[Final] G  Dm  F
        C  G  Dm  F  C

----------------- Acordes -----------------
Bb2 = X 1 3 3 1 1
C = X 3 2 0 1 0
C4 = X 3 3 0 1 X
Dm = X X 0 2 3 1
F = 1 3 3 2 1 1
F/C = X 3 3 2 1 X
G = 3 2 0 0 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PorOndeAndeiPage() {
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
