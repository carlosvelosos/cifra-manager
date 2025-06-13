import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Grupo Revelação - Tá Escrito

[Intro] F

[Primeira Parte]

F
  Quem cultiva a semente do amor
C                      Bb
  Segue em frente não se apavora
F                   Dm
  Se na vida encontrar dissabor
Gm                C7
   Vai saber esperar sua hora
F
  Quem cultiva a semente do amor
C                      Bb
  Segue em frente não se apavora
F                   Dm
  Se na vida encontrar dissabor
Gm                C7      F   F7
   Vai saber esperar sua hora

[Segunda Parte]

    Bb
Às vezes a felicidade demora a chegar
 F
Aí é que a gente
     C              Am7
Não pode deixar de sonhar
     Gm
Guerreiro não foge da luta
             C7
Não pode correr
     F                 Am7
Ninguém vai poder atrasar
         Cm         F7
Quem nasceu pra vencer

[Pré-Refrão]

   Bb
É dia de sol mas o tempo pode fechar
    F                  C         Am    D7
A chuva só vem quando tem que molhar
    Gm                  C7
Na vida é preciso aprender
    F                   D7
Se colhe o bem que plantar
   Gm                    C7
É Deus quem aponta a estrela
                 F  F7
Que tem que brilhar

[Refrão]

              Bb
Ergue essa cabeça, mete o pé e vai na fé
                       F
Manda essa tristeza embora
            Dm               C         Bb
Basta acreditar que um novo dia vai raiar
     C           F                F7
Sua hora vai chegar, erga essa cabeça
              Bb
Ergue essa cabeça, mete o pé e vai na fé
                       F
Manda essa tristeza embora
            Dm               C        Bb
Basta acreditar que um novo dia vai raiar
     C           F
Sua hora vai chegar

[Primeira Parte]

F
  Quem cultiva a semente do amor
C                      Bb
  Segue em frente não se apavora
F                   Dm
  Se na vida encontrar dissabor
Gm                C7
   Vai saber esperar sua hora
F
  Quem cultiva a semente do amor
C                      Bb
  Segue em frente não se apavora
F                   Dm
  Se na vida encontrar dissabor
Gm                C7        F   F7
   Vai saber esperar sua hora

[Segunda Parte]

    Bb
Às vezes a felicidade demora a chegar
 F
Aí é que a gente
     C              Am7
Não pode deixar de sonhar
     Gm
Guerreiro não foge da luta
             C7
Não pode correr
     F                 Am7
Ninguém vai poder atrasar
         Cm         F7
Quem nasceu pra vencer

[Pré-Refrão]

   Bb
É dia de sol mas o tempo pode fechar
    F                  C         Am   D7
A chuva só vem quando tem que molhar
    Gm                  C7
Na vida é preciso aprender
    F                   D7
Se colhe o bem que plantar
   Gm                    C7
É Deus quem aponta a estrela
                 F  F7
Que tem que brilhar

[Refrão Final]

              Bb
Ergue essa cabeça, mete o pé e vai na fé
                       F
Manda essa tristeza embora
Dm           C                         Bb
Basta acreditar que um novo dia vai raiar
     C           F                F7
Sua hora vai chegar, erga essa cabeça
              Bb
Ergue essa cabeça, mete o pé e vai na fé
                       F
Manda essa tristeza embora
            Dm               C         Bb
Basta acreditar que um novo dia vai raiar
     C           F    F7
Sua hora vai chegar

              Bb
Ergue essa cabeça, mete o pé e vai na fé
                       F
Manda essa tristeza embora
            Dm               C         Bb
Basta acreditar que um novo dia vai raiar
     C           F                F7
Sua hora vai chegar, erga essa cabeça
              Bb
Ergue essa cabeça, mete o pé e vai na fé
                       F
Manda essa tristeza embora
            Dm               C         Bb
Basta acreditar que um novo dia vai raiar
     C           F                F7
Sua hora vai chegar, erga essa cabeça

              Bb
Ergue essa cabeça, mete o pé e vai na fé
                       F
Manda essa tristeza embora, manda essa tristeza embora
             Dm              C         Bb
Basta acreditar que um novo dia vai raiar
     C         F
Sua hora vai chegar

----------------- Acordes -----------------
Am = 2 2 1 2
Am7 = 7 P5 5 5
Bb = P3 3 3 3
C = 2 0 1 2
C7 = 2 3 1 2
Cm = 1 0 1 1
D7 = 4 2 1 4
Dm = 3 2 3 3
F = 3 2 1 3
F7 = 3 2 P1 1
Gm = 5 3 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TaEscritoPage() {
  return (
    <>
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}