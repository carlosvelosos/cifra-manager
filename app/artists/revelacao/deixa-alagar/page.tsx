import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Grupo Revelação - Deixa Alagar

[Intro] Gm7  F#º  Fm7  Bb7(9) 
 Em7(5-)  Am7(5-)  D7(9-)

[Primeira Parte]

Gm7
   Tô sofrendo de amor
Fm7       Bb7(9)
   Mas dizendo a verdade
Eb7M    Cm7(9)
    E agora que eu sou
 Am7(5-)    D7(9-)
Merecedor da tua fidelidade

Gm7
   Mas pra ser a mulher
Fm7        Bb7(9)
   Mais feliz desse mundo
Eb7M      Cm7(9)
    Basta acreditar
 Am7(5-)             D7(9-)
Meu sentimento é profundo

[Pré-Refrão]

Gm7                          Fm7
   Vai ver que a razão de viver
Bb7(9)                Em7(5-)
      Tá focada em você
Am7(5-)                    D7(9-)
       Meu coração é todo seu

            Gm7
E quando a gente quer
         Fm7
Basta dizer sim
Bb7(9)                 Eb7M
      Então volta pra mim
              Am7(5-)
Que eu tô querendo
                D7(9-)
Saciar essa vontade louca

[Refrão]

Gm7
    Lembro da gente
                         Fm7
Se amando embaixo do chuveiro
            Bb7(9)
Vendo o banheiro inundar
Eb7M
     Deixa alagar, deixa alagar
          Am7(5-)         D7(9-)
Deixa alagar,     deixa alagar
Gm7
    E namorando na cozinha
                 Fm7
Com o feijão no fogo
               Bb7(9)
A ponto de nos incendiar
Eb7M
     Deixa queimar, deixa queimar
          Am7(5-)         D7(9-)
Deixa queimar,     deixa queimar

Gm7
    Lembro da gente
                         Fm7
Se amando embaixo do chuveiro
            Bb7(9)
Vendo o banheiro inundar
Eb7M
     Deixa alagar, deixa alagar
          Am7(5-)         D7(9-)
Deixa alagar,     deixa alagar
Gm7
    E namorando na cozinha
                 Fm7
Com o feijão no fogo
               Bb7(9)
A ponto de nos incendiar
Eb7M
     Deixa queimar, deixa queimar
          Am7(5-)         D7(9-)
Deixa queimar,     deixa queimar

( Em7(5-)  Am7(5-)  D7(9-) )

[Primeira Parte]

Gm7
   Tô sofrendo de amor
Fm7       Bb7(9)
   Mas dizendo a verdade
Eb7M    Cm7(9)
    E agora que eu sou
 Am7(5-)    D7(9-)
Merecedor da tua fidelidade

Gm7
   Mas pra ser a mulher
Fm7        Bb7(9)
   Mais feliz desse mundo
Eb7M      Cm7(9)
    Basta acreditar
 Am7(5-)             D7(9-)
Meu sentimento é profundo

[Pré-Refrão]

Gm7                          Fm7
   Vai ver que a razão de viver
Bb7(9)                Em7(5-)
      Tá focada em você
Am7(5-)                    D7(9-)
       Meu coração é todo seu

            Gm7
E quando a gente quer
         Fm7
Basta dizer sim
Bb7(9)                 Eb7M
      Então volta pra mim
              Am7(5-)
Que eu tô querendo
                D7(9-)
Saciar essa vontade louca

[Refrão]

Gm7
    Lembro da gente
                         Fm7
Se amando embaixo do chuveiro
            Bb7(9)
Vendo o banheiro inundar
Eb7M
     Deixa alagar, deixa alagar
          Am7(5-)         D7(9-)
Deixa alagar,     deixa alagar
Gm7
    E namorando na cozinha
                 Fm7
Com o feijão no fogo
               Bb7(9)
A ponto de nos incendiar
Eb7M
     Deixa queimar, deixa queimar
          Am7(5-)         D7(9-)
Deixa queimar,     deixa queimar

Gm7
    Lembro da gente
                         Fm7
Se amando embaixo do chuveiro
            Bb7(9)
Vendo o banheiro inundar
Eb7M
     Deixa alagar, deixa alagar
          Am7(5-)         D7(9-)
Deixa alagar,     deixa alagar
Gm7
    E namorando na cozinha
                 Fm7
Com o feijão no fogo
               Bb7(9)
A ponto de nos incendiar
Eb7M
     Deixa queimar, deixa queimar
          Am7(5-)         D7(9-)
Deixa queimar,     deixa queimar

Gm7
    Lembro da gente
                         Fm7
Se amando embaixo do chuveiro
            Bb7(9)
Vendo o banheiro inundar
Eb7M
     Deixa alagar, deixa alagar
          Am7(5-)         D7(9-)
Deixa alagar,     deixa alagar
Gm7
    E namorando na cozinha
                 Fm7
Com o feijão no fogo
               Bb7(9)
A ponto de nos incendiar
Eb7M
     Deixa queimar, deixa queimar
          Am7(5-)         D7(9-)
Deixa queimar,     deixa queimar

[Final] Em7(5-)  Am7(5-)  D7(9-)

----------------- Acordes -----------------
Am7(5-) = P1 2 1 1
Bb7(9) = 0 1 1 0
Cm7(9) = 0 3 1 1
D7(9-) = 4 5 4 7
Eb7M = 1 3 3 5
Em7(5-) = 2 3 3 5
F#º = 4 2 1 4
Fm7 = 3 5 4 6
Gm7 = 5 P3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DeixaAlagarPage() {
  return (
    <>
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}