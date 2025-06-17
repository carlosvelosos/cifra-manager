import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Marília Mendonça - Estranho

[Intro] D5  G7M  D/A  F#m
        Bm7  A/C#  D  D/F#

Parte 1 de 2

Parte 2 de 2

[Primeira Parte]

 G9
Deixa eu perguntar uma coisa
     A4
Não tá dando certo entre a gente?
               Bm7
Quem cala, consente
                             A
Eu acho que deu pra entender

       G9
Minha mão já não tá mais na sua
   A4                      F#m7
A gente anda pela rua separados
                   Bm7  A
Nem parecemos namorados

     G9
A aliança virou enfeite do dedo
       A4
Nossa cama agora é só pra dormir mesmo
       F#m7
E, no carro, parece que eu tô levando 
                 Bm7  A/C#  D  D/F#
Um simples passageiro

[Primeira Parte]

Parte 1 de 3

Parte 2 de 3

Parte 3 de 3

[Refrão]

    G
Estranho
                               A9
Você me beija e minha boca estranha
                            F#m7(11)
O seu carinho parece que arranha

O seu abraço é tão solto
        Bm7
Não consegue me prender

    G
Estranho
                               A9
Você me beija e minha boca estranha
                            F#m7(11)
O seu carinho parece que arranha

O seu abraço é tão solto
       (passagem)
Não consegue me prender

Onde eu desconheci você?

G  A9  F#m7(11)  (passagem)

[Passagem]

[Primeira Parte]

       G
Minha mão já não tá mais na sua
   A9                      F#m7(11)
A gente anda pela rua separados
                   Bm7
Nem parecemos namorados

     G
A aliança virou enfeite do dedo
       A9
Nossa cama agora é só pra dormir mesmo
       F#m7(11)
E, no carro, parece que eu tô levando
                 (passagem)
Um simples passageiro

[Refrão]

    G
Estranho
                               A9
Você me beija e minha boca estranha
                            F#m7(11)
O seu carinho parece que arranha

O seu abraço é tão solto
        Bm7
Não consegue me prender

    G
Estranho
                               A9
Você me beija e minha boca estranha
                            F#m7(11)
O seu carinho parece que arranha

O seu abraço é tão solto
       (passagem)
Não consegue me prender
                      G
Onde eu desconheci você?
                      A9  F#m7(11)
Onde eu desconheci você?
(passagem)     G
           Estranho

----------------- Acordes -----------------
A = P2 2 2 2
A/C# = 7 6 5 7
A4 = 2 2 3 0
A9 = P2 4 2 2
Bm7 = 4 2 3 4
D = 4 2 3 4
F#m = 4 2 2 4
F#m7 = 4 P2 2 2
F#m7(11) = 11 11 12 14
G = 5 4 3 5
G7M = 5 4 3 4
G9 = 0 2 0 0
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EstranhoPage() {
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
