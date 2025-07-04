import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Chitãozinho & Xororó - Evidências

[Intro] E  E5+  A  F#m  A/B
        E  E5+  A  E/G#  F#m
        A/B  E  A/B

[Primeira Parte]

           E                  B/D#
Quando eu digo que deixei de te amar
         C#m7    E7(9)  E6  E7
É porque eu te amo
           A
Quando eu digo que não quero
      C#7
Mais você
   F#m
É porque eu te quero
          B7
Eu tenho medo de te dar meu
 Cº
Coração
         C#m7
E confessar que eu estou
         C#m7/B
Em tuas mãos
         F#         E/G#
Mas não posso imaginar
           F#/A#
O que vai ser de mim
             B      A/C#  B/D#
Se eu te perder um dia

[Segunda Parte]

        E
Eu me afasto e me defendo
    B/D#
De você
       C#m          E7(9)  E6  E7
Mas depois me entrego
      A
Faço tipo, falo coisas que
    C#7
Eu não sou
     F#m
Mas depois eu nego
          B7
Mas a verdade é que eu sou
       Cº
Louco por você
         C#m
E tenho medo de pensar
          Am
Em te perder
       E                       A/B
Eu preciso aceitar que não dá mais
                E4     E    E4  E  A/B
Pra separar as nossas vidas

[Refrão]

E
E nessa loucura de dizer

Que não te quero
       G#
Vou negando as aparências

Disfarçando as evidências
          A
Mas pra que viver fingindo
           F#m
Se eu não posso enganar
         B7
Meu coração
    F#m       B7
Eu sei que te amo

  E
Chega de mentiras

De negar o meu desejo
        G#
Eu te quero mais que tudo

Eu preciso do seu beijo
       A
Eu entrego a minha vida
       F#m
Pra você fazer o que quiser
    B7
De mim
     F#m          B7
Só quero ouvir você dizer
     E
Que sim
              E5+
Diz que é verdade que tem
    A   E/G#
Saudade
    F#m         B7
Que ainda você pensa muito
    E
Em mim
              E5+
Diz que é verdade que tem
    A   E/G#
Saudade
    F#m          B7
Que ainda você quer viver

Pra mim

[Solo] C#m  C5+  E/B  F#/A#  Am  A/B


[Tab - Solo]

Parte 1 de 3

E|-16h17~-16~-12~-------------------------------------|
B|-----------------14~--14/19b20/21~------------------|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|


Parte 2 de 3

E|-16h17~-16~12~----19b21r19---19~--------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|


Parte 3 de 3

E|-15p12--------12p8--------8p5-----------------------|
B|-------13----------10---------5---------------------|
G|----------12-----------9--------5---7p5--4~---------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Segunda Parte]

        E
Eu me afasto e me defendo
    B/D#
De você
       C#m          E7(9)  E6  E7
Mas depois me entrego
      A
Faço tipo, falo coisas que
    C#7
Eu não sou
     F#m
Mas depois eu nego
          B7
Mas a verdade é que eu sou
       Cº
Louco por você
         C#m
E tenho medo de pensar
          Am
Em te perder
       E                       A/B
Eu preciso aceitar que não dá mais
                E4     E    E4  E  A/B
Pra separar as nossas vidas

[Refrão]

E
E nessa loucura de dizer

Que não te quero
       G#
Vou negando as aparências

Disfarçando as evidências
          A
Mas pra que viver fingindo
           F#m
Se eu não posso enganar
         B7
Meu coração
    F#m       B7
Eu sei que te amo

  E
Chega de mentiras

De negar o meu desejo
        G#
Eu te quero mais que tudo

Eu preciso do seu beijo
       A
Eu entrego a minha vida
       F#m
Pra você fazer o que quiser
    B7
De mim
     F#m          B7
Só quero ouvir você dizer
     E
Que sim
              E5+
Diz que é verdade que tem
    A   E/G#
Saudade
    F#m         B7
Que ainda você pensa muito
    E
Em mim
              E5+
Diz que é verdade que tem
    A   E/G#
Saudade
    F#m          B7
Que ainda você quer viver
     E
Pra mim
              E5+
Diz que é verdade que tem
    A   E/G#
Saudade
    F#m          B7
Que ainda você quer viver
     E
Pra mim


----------------- Acordes -----------------
A = X 0 2 2 2 0
A/B = X 2 2 2 2 X
A/C# = X 4 2 2 2 X
Am = X 0 2 2 1 0
B = X 2 4 4 4 2
B/D# = X 6 4 4 4 X
B7 = X 2 1 2 0 2
C#7 = X 4 3 4 2 X
C#m = X 4 6 6 5 4
C#m7 = X 4 6 4 5 4
C#m7/B = X 2 2 4 5 2
C5+ = X 3 6 5 5 3
Cº = X 3 4 2 4 X
E = 0 2 2 1 0 0
E/B = X 2 2 4 5 4
E/G# = 4 X 2 4 5 X
E4 = 0 2 2 2 0 0
E5+ = 0 2 2 1 1 0
E6 = X 7 6 6 5 X
E7 = 0 2 2 1 3 0
E7(9) = X 7 6 7 7 X
F# = 2 4 4 3 2 2
F#/A# = X P1 4 3 2 X
F#m = 2 4 4 2 2 2
G# = 4 6 6 5 4 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EvidenciasPage() {
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
