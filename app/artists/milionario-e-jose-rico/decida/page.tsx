import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Milionário e José Rico - Decida

[Intro]

Dm
   No amor, há momentos

Que temos que dizer um para o outro: Decida

[Primeira Parte]

Sente aqui comigo no sofá

E vamos conversar
        Bb         A   A/E
É hora de abrir o jogo
 A            A/E           A
Nosso amor está indo água abaixo
       A/E        A
Se deixar vira relaxo
      A/E       Dm  D7
Temporal apaga fogo

[Segunda Parte]

      Gm         Gm/D          Gm     Gm/D
Por que você não olha nos meus olhos?
     Dm        Dm/A          Dm  Dm/A
Seu beijo não tem o mesmo sabor
   A           A/E        A     A/E
O seu carinho não me faz dormir
     Dm           Dm/A       D7
Nem sua quando a gente faz amor

   Gm          Gm/D        Gm   Gm/D
Você só vai tomar banho sozinha
    Dm         Dm/A           Dm      Dm/A
Na hora do jantar me diz que já comeu
     A7        A7/E          A7
Não vê novelas e nem liga o som
         A7/E         A7
Diz que não tem nada bom
          A7/E    Dm    Dm/A  D7
Que satisfaça o ego seu

[Pré-Refrão]

              Gm  Gm/D
Você se esqueceu
     Gm           Gm/D     Dm   Dm/A
Que dentro desta casa eu existo
    Dm  Dm/A       A7  A7/E
Que em 82 casou comigo
    A7         A7/E        Dm  Dm/A  D7/F#
Por isso exijo uma explicação

                      Gm  Gm/D
Se sou eu que te incomoda
     Gm         Gm/D          Dm  Dm/A
Pra te fazer feliz fiz o que pude
    Dm           Dm/A      Bb
Mas o incomodado é que se mude
   A7          A7/E      Riff
Você quem vai tomar a decisão

[Tab - Riff]


E|---------------5----------------------| 
B|---------5--7-----8-------------------| 
G|------7--------------7--4--2--4--5--6-| 
D|-0-7----------------------------------| 
A|---------------------------0--2--3--4-| 
E|--------------------------------------| 

[Refrão]

   D   D/A
Decida
    D         D/A         F#  F#/C#
Se vai embora ou ficar comigo
    G            G/D        D   D/A
Se vai me respeitar como marido
      A            A/E            Riff
Pois desse jeito, não estou aguentando

   D   D/A
Decida
    D           D/A            F#   F#/C#
Ou pare de uma vez com esse delírio
    G         G/D         D      D/A
Talvez você precisa usar colírio
    Em           A7            D   D/A
Pra enxergar o quanto ainda te amo

( Bb  A7  Dm  D7 )

[Pré-Refrão]

              Gm  Gm/D
Você se esqueceu
     Gm           Gm/D     Dm   Dm/A
Que dentro desta casa eu existo
    Dm  Dm/A       A7  A7/E
Que em 82 casou comigo
    A7         A7/E        Dm  Dm/A  D7/F#
Por isso exijo uma explicação

                      Gm  Gm/D
Se sou eu que te incomoda
     Gm         Gm/D          Dm  Dm/A
Pra te fazer feliz fiz o que pude
    Dm           Dm/A      Bb
Mas o incomodado é que se mude
   A7          A7/E      Riff
Você quem vai tomar a decisão

[Refrão Final]

   D   D/A
Decida
    D         D/A         F#  F#/C#
Se vai embora ou ficar comigo
    G            G/D        D   D/A
Se vai me respeitar como marido
      A            A/E            Riff
Pois desse jeito, não estou aguentando

   D   D/A
Decida
    D           D/A            F#   F#/C#
Ou pare de uma vez com esse delírio
    G         G/D         D      D/A
Talvez você precisa usar colírio
    Em           A7            Riff
Pra enxergar o quanto ainda te amo

   D   D/A
Decida
    D         D/A         F#  F#/C#
Se vai embora ou ficar comigo
    G            G/D        D   D/A
Se vai me respeitar como marido
      A            A/E            Riff
Pois desse jeito, não estou aguentando

   D   D/A
Decida
    D           D/A            F#   F#/C#
Ou pare de uma vez com esse delírio
    G         G/D         D      D/A
Talvez você precisa usar colírio
    Em           A7          D  D/A
Pra enxergar o quanto ainda te  amo

[Final] Bb  A7  Dm


----------------- Acordes -----------------
A = X 0 2 2 2 0
A/E = 0 X 2 2 2 0
A7 = X 0 2 0 2 0
A7/E = 0 X 2 2 2 3
Bb = X 1 3 3 3 1
D = X X 0 2 3 2
D/A = X 0 X 2 3 2
D7 = X X 0 2 1 2
D7/F# = X X 4 5 3 5
Dm = X X 0 2 3 1
Dm/A = X 0 X 2 3 1
Em = 0 2 2 0 0 0
F# = 2 4 4 3 2 2
F#/C# = X 4 4 3 2 2
G = 3 2 0 0 0 3
G/D = X 5 5 4 3 X
Gm = 3 5 5 3 3 3
Gm/D = X 5 5 3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DecidaPage() {
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
