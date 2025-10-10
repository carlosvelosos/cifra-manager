import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Jorge & Mateus - Haverá Sinais

[Intro] F#  C#m7  E  B  F#

[Tab - Intro]

Parte 1 de 2
   F#         C#m7     E               B
E|-----------------------------------------|
B|-------------------4-5-5-5-5-5-7-7-5-4---|
G|-----/4--3--1---/6-----------------------|
D|-----------------------------------------|
A|-----------------------------------------|
E|-----------------------------------------|

Parte 2 de 2
           F#
E|-----------------------------------------|
B|-------4---------------------------------|
G|---4h6---6------3-4-6-4------------------|
D|-----------------------------------------|
A|-----------------------------------------|
E|-----------------------------------------|

[Primeira Parte]

     G#m7
Tá quase, viu?
         B
Ontem a noite eu beijei alguém
           F#
E o choro não caiu, só roupa que caiu

     G#m7            
Tá quase viu?
      B
Hoje mesmo olhei sua foto
         F#                  E5  D#5
E nem arrepiei, até assustei

[Pré-Refrão]
 
           C#m7                G#m7
Cada foto Minha que chega pra você
                           B
Só mostra o que “cê” pode ver
         D#m7
Cê acha mesmo que eu só sei
       E                         C#m7
Virar noite, virar copo? Mal cê sabe
                     F#
Que quem tá virando nada pra mim é você 

Pra mim é você

[Refrão]

 C#m7                             B
Ninguém vai saber que eu te esqueci
         F#   C#m7
Mas haverá sinais
 E                     G#m7
Tipo a minha boca por aí
             F#         E
Tipo eu não te ligando mais

                                  B
Ninguém vai saber que eu te esqueci
         F#   C#m7
Mas haverá sinais
 E                     G#m7
Tipo a minha boca por aí
             F#         E
Tipo eu não te ligando mais

[Interlúdio] F#  C#m7  
             F#  A#m7  G#

[Solo]

Parte 1 de 2
   F#   C#m7      F#              A#m7  
E|--------------------------------------|
B|--------------6-7-7-7-7-7-9-9-7-6-----|
G|-----------/8-------------------------|
D|--------------------------------------|
A|--------------------------------------|
E|--------------------------------------|

Parte 2 de 2
           G#
E|-------------------------------------|
B|-------6-----------------------------|
G|---6-8---8-----6-5-6---5-5h6p5-------|
D|-------------------------------6-8---|
A|-------------------------------------|
E|-------------------------------------|

[Segunda Parte]

    A#m7 
Tá quase viu? 
         C#
Ontem a noite eu beijei alguém
           G#
E o choro não caiu, só roupa que caiu

     A#m7
Tá quase viu? 
      C#
Hoje mesmo olhei sua foto
         G#                  F#5  F5
E nem arrepiei, até assustei

[Pré-Refrão]

      D#m7                       A#m7
Cada foto Minha que chega pra você
                           C#
Só mostra o que “cê” pode ver
         Fm7
Cê acha mesmo que eu só sei
       F#                        D#m7
Virar noite, virar copo? Mal cê sabe
                     G#
Que quem tá virando nada 

Pra mim é você

[Refrão Final]

 D#m7                             C#
Ninguém vai saber que eu te esqueci
         G#   D#m7
Mas haverá sinais
 F#                    A#m7
Tipo a minha boca por aí
             G#         F#
Tipo eu não te ligando mais

                                  C#
Ninguém vai saber que eu te esqueci
         G#   D#m7
Mas haverá sinais
 F#                    A#m7
Tipo a minha boca por aí
             G#         F#
Tipo eu não te ligando mais

                                  C#
Ninguém vai saber que eu te esqueci
         G#   D#m7
Mas haverá sinais
 F#                    A#m7
Tipo a minha boca por aí
             G#         F#
Tipo eu não te ligando mais

                                  C#  G#
Ninguém vai saber que eu te esqueci

[Tab - Riff Final]

Parte 1 de 2
                          C#
E|------------------------------|
B|------6-7-7-7-7-7-9-9-7-6-----|
G|---/8-------------------------|
D|------------------------------|
A|------------------------------|
E|------------------------------|

Parte 2 de 2
           G#
E|------------------------------|
B|-------6----------------------|
G|---6-8---8----5-6-8---6--5----|
D|---------------------------8--|
A|------------------------------|
E|------------------------------|

     A#m7
Tá quase viu?

----------------- Acordes -----------------
A#m7 = X 1 3 1 2 1
B = X 2 4 4 4 2
C# = X 4 6 6 6 4
C#m7 = X 4 6 4 5 4
D#5 = X 6 8 8 X X
D#m7 = X X 1 3 2 2
E = 0 2 2 1 0 0
E5 = 0 2 2 X X X
F# = 2 4 4 3 2 2
F#5 = 2 4 4 X X X
F5 = 1 3 3 X X X
Fm7 = 1 X 1 1 1 X
G# = 4 3 1 1 1 4
G#m7 = 4 X 4 4 4 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function HaveraSinaisPage() {
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
