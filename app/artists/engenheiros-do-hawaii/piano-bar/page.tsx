import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Engenheiros do Hawaii - Piano Bar

[Intro]  E  B  G#  C#m  E  A  G#m  C#m  F#m  B7  E

       E       B       G#
E|------------------------------------------|
B|-0---0---4---4----------------------------|
G|-1---1---4---4---6---5---5---5------------|
D|-2-2---2-4-4---4-6---6---6---6------------|
A|---------2-------6-6---6---6---6----------|
E|-0---------------4-------4----------------|

       C#m     E       A
E|------------------------------------------|
B|-5---5---0---0---2---2---2---2------------|
G|-6---6---1---1---2---2---2---2------------|
D|-6-6---6-2-2---2-2-2---2---2---2----------|
A|-4---------------0-------0----------------|
E|---------0--------------------------------|

       G#m     C#m     F#m     B4(9) B
E|------------------------------------------|
B|-4---4---5---5---2---2--------------------|
G|-4---4---6---6---2---2---9-----8----------|
D|-6-6---6-6-6---6-4-4---4-11----9----------|
A|---------4--------------------------------|
E|-4---------------2-------7----------------|

[Primeira Parte]

E                 B                     G#
   O que você me pede e eu não posso fazer
C#m               E                  A
   Assim você me perde,e eu perco você
            G#m           C#m
   Como um barco perde o rumo
            F#m              B4(9) B   E
   Como uma árvore no outono      perde a cor

                   B                    G#
   O que você não pode eu não vou te pedir
C#m          E                            A
   O que você não quer eu não quero insistir
    G#m             C#m
   Diga a verdade, doa a quem doer
        F#m          B4(9)    B       E
   Doe sangue e me dê    seu telefone

                     B                G#
   Todos os dias eu venho ao mesmo lugar
C#m               E                          A
   Às vezes fica longe, impossível de encontrar
          G#m               C#m              F#m B4(9) B   E
   Mas, quando o bourbon é bom toda noite é noite  de luar

                    B                    G#
   No táxi que me trouxe até aqui Bob Marley me dava razão
C#m                 E                   A
   As últimas do esporte, hora certa, crime, religião
     G#m        C#m          F#m           B         C#m
    Na verdade nada é uma palavra esperando tradução

[Passagem]

       C#m
E|------------------------------------------|
B|---------4---5--------4-5p4---------------|
G|-----6--------------6-------6-4-----------|
D|---6---6---6------6-----------------------|
A|-4--------------4-------------------------|
E|------------------------------------------|

       F#m7           G#7
E|------------------------4-----------------|
B|-----2---4---5--------4-------------------|
G|-2------------------5---------------------|
D|---2---2---2------4-----------------------|
A|------------------------------------------|
E|-2--------------4-------------------------|

[Segunda Parte]

E              B            G#
   Toda vez que  falta luz
C#m            E                A
   Toda vez que  algo nos falta
          G#m                 C#m
   O invisível nos salta aos olhos
       F#m           B         E
   Um salto no escuro  da piscina

              B              G#
   O fogo ilumina muito por muito pouco tempo
C#m         E                                 A
   Em muito pouco tempo o fogo apaga tudo, e tudo um dia vira luz
         G#m           C#m
   Toda vez que falta luz
F#m       B         Cº       C#m
   O invisível nos salta aos olhos

[Terceira Parte]

           F#m  G#                   C#m
  Ontem à noite,   eu conheci uma guria
          F#m   G#           C#m
  Já era tarde,   era quase dia
             F#m  G#          C#m
  Era o princípio   num precipício
             F#m  G#      C#m
  Era o meu corpo   que caía

           F#m  G#                C#m
  Ontem à noite,   a noite tava fria
            F#m  G#              C#m
  Tudo queimava,   mas nada aquecia
            F#m      G#        C#m
  Ela apareceu, parecia tão sozinha
                   F#m         G#     C#m
  Parecia que era minha aquela   solidão

( C#m7   C7M(5+)  E/B  Bbm7(5-) )
( C#m7   C7M(5+)  E/B  Bbm7(5-) )

[Quarta Parte]

F#m                  G#                   C#m
   Eu conheci uma guria que eu já conhecia
                   F#m        G#              C#m
   De outros carnavais,   com outras fantasias
             F#m      G#            C#m
   Ela apareceu, parecia tão sozinha
                    F#m          G#  C#m
   Parecia que era minha aquela solidão

F#m                  G#                   C#m
   Eu conheci uma guria que eu já conhecia
                   F#m        G#              C#m
   De outros carnavais,   com outras fantasias
             F#m      G#            C#m
   Ela apareceu, parecia tão sozinha
                    F#m          G#  E
   Parecia que era minha aquela solidão

----------------- Acordes -----------------
A = X 0 2 2 2 0
B = X 2 4 4 4 2
B4(9) = X 2 4 6 5 2
B7 = X 2 1 2 0 2
Bbm7(5-) = X 1 2 1 2 X
C#m = X 4 6 6 5 4
C#m7 = X 4 6 4 5 4
C7M(5+) = X 3 2 1 0 0
Cº = X 3 4 2 4 2
E = 0 2 2 1 0 0
E/B = X 2 2 1 0 0
F#m = 2 4 4 2 2 2
F#m7 = 2 X 2 2 2 X
G# = 4 3 1 1 1 4
G#7 = 4 6 4 5 4 4
G#m = 4 6 6 4 4 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PianoBarPage() {
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
