import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `
Grupo Revelação - Só Depois

[Intro] Gm7  Dm7  Gm7  D7

[Primeira Parte]

Gm7     Dm7             Gm7
    Só depois que tudo terminou
Dm7     Bb7            Eb7M
Entendi         que não era amor
              Ab7M          Am7(5-)
E tudo que fizemos um só momento
    D7(13-)       Gm7
Deixou de existir
   Dm7
Entendi que o fim foi
Gm7
O melhor pra mim
   Dm7   Bb7         Eb7M
Só assim    pude enxergar
              Ab7M
O que estava tão perto
Am7(5-)           D7(13-)  G7
Eu feito um tolo nem percebi

[Refrão]

Cm7                  Bbm7
   Que na vida o hoje
           Eb7  Ab7M
Tem que aproveitar por que
    Dm7(5-)          G7          Cm7
Eu não sei se o amanhã há de chegar
                           Bbm7
Se me desse ao menos um sinal
           Eb7
Um piscar de olhos
       Ab7M
Um sorriso, eu posso garantir
       Dm7(5-)   G7        Cm
Que o nosso caso ia ser fatal

                 Bbm7
Que na vida o hoje
           Eb7  Ab7M
Tem que aproveitar por que
    Dm7(5-)          G7          Cm7
Eu não sei se o amanhã há de chegar
                           Bbm7
Se me desse ao menos um sinal
           Eb7
Um piscar de olhos
       Ab7M
Um sorriso, eu posso garantir
       Dm7(5-)   G7      Cm7   D7
Que o nosso caso ia ser fatal

[Primeira Parte]

Gm7     Dm7        Gm7
    Só depois que tudo terminou
Dm7     Bb7             Eb7M
Entendi         que não era amor
         Ab7M       Am7(5-)
E tudo que fizemos num só momento
 D7(13-)
Deixou de existir
Gm7    Dm7
    Entendi que o fim foi
Gm7
O melhor pra mim
   Dm7   Bb7         Eb7M
Só assim    pude enxergar
              Ab7M
O que estava tão perto
Am7(5-)           D7(13-)  G7
Eu feito um tolo nem percebi

[Refrão Final]

Cm7                  Bbm7
   Que na vida o hoje
           Eb7  Ab7M
Tem que aproveitar por que
    Dm7(5-)          G7          Cm7
Eu não sei se o amanhã há de chegar
                           Bbm7
Se me desse ao menos um sinal
           Eb7
Um piscar de olhos
       Ab7M
Um sorriso, eu posso garantir
       Dm7(5-)   G7      Cm7
Que o nosso caso ia ser fatal

                 Bbm7
Que na vida o hoje
           Eb7  Ab7M
Tem que aproveitar por que
    Dm7(5-)          G7          Cm7
Eu não sei se o amanhã há de chegar
                           Bbm7
Se me desse ao menos um sinal
           Eb7
Um piscar de olhos
       Ab7M
Um sorriso, eu posso garantir
       Dm7(5-)   G7      Cm
Que o nosso caso ia ser fatal

                 Bbm7
Que na vida o hoje
           Eb7  Ab7M
Tem que aproveitar por que
    Dm7(5-)          G7          Cm7
Eu não sei se o amanhã há de chegar
                           Bbm7
Se me desse ao menos um sinal
           Eb7
Um piscar de olhos
       Ab7M
Um sorriso, eu posso garantir
       Dm7(5-)   G7      Cm7
Que o nosso caso ia ser fatal

[Final] Cm7/Bb  Am7(5-)  Ab7(11+)  Gm7(11)

----------------- Acordes -----------------
Ab7(11+) = 6 5 3 4
Ab7M = 1 0 1 1
Am7(5-) = P1 2 1 1
Bb7 = 3 1 3 3
Bbm7 = 3 1 2 3
Cm = 1 0 1 1
Cm7 = 5 3 4 5
Cm7/Bb = 10 12 11 13
D7 = 4 2 1 4
D7(13-) = 10 11 11 12
Dm7 = 0 2 1 3
Dm7(5-) = 0 P1 1 3
Eb7 = 5 3 2 5
Eb7M = 1 3 3 5
G7 = P3 4 3 5
Gm7 = 5 P3 3 3
Gm7(11) = 0 0 1 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SoDepoisPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}