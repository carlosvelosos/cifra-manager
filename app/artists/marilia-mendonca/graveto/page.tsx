import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Marília Mendonça - Graveto

[Intro] Em7  D6  C9  Em7  D6  C9

[Primeira Parte]

Em7             D6         C9
    Vou ser sincero com você
                     Em7
Acho que pra mim já deu
           D6                C9
Faz um tempinho que não sou seu
                 Em7
Até a cama percebeu
         D6        Am7
Que esfriou demais
          C9
E seu toque não traz

Em7                     D6
    Não adianta por graveto
                     C9
Na fogueira que não pega mais
                    D
Não pega mais, não pega mais

[Refrão]

               C9
Você virou saudade
                  G
Aqui dentro de casa
                        C9
Se eu te chamo pro colchão
                 G
Você foge pra sala
                  A7
E nem se importa mais saber
           C7M
Do que eu sinto
                   D
Poucos metros quadrados
       C   G
Virou labirinto

               C
Você virou saudade
                  G
Aqui dentro de casa
                        C
Se eu te chamo pro colchão
                 G
Você foge pra sala
                  A7
E nem se importa mais saber
           C
Do que eu sinto
                   D
Poucos metros quadrados
       C   G
Virou labirinto

( C  G  C )

[Primeira Parte]

Em7             D6         C9
    Vou ser sincero com você
                     Em7
Acho que pra mim já deu
           D6                C9
Faz um tempinho que não sou seu
                 Em7
Até a cama percebeu
         D6        Am7
Que esfriou demais
          C9
E seu toque não traz

Em7                     D6
    Não adianta por graveto
                       C9
Numa fogueira que não pega mais
                    D
Não pega mais, não pega mais

[Refrão]

               C
Você virou saudade
                  G
Aqui dentro de casa
                        C
Se eu te chamo pro colchão
                 G
Você foge pra sala
                  A7
E nem se importa mais saber
           C
Do que eu sinto
                   D
Poucos metros quadrados
       C   G
Virou labirinto

               C
Você virou saudade
                  G
Aqui dentro de casa
                        C
Se eu te chamo pro colchão
                 G
Você foge pra sala
                  A7
E nem se importa mais saber
           C
Do que eu sinto
                   D
Poucos metros quadrados
       C   G
Virou labirinto

[Final] C  G  C  G


----------------- Acordes -----------------
A7 = 2 0 2 2
Am7 = 7 P5 5 5
C = 2 0 1 2
C7M = 2 0 0 2
C9 = 2 0 1 0
D = 4 2 3 4
D6 = 3 2 0 0
Em7 = 2 0 0 0
G = 5 4 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function GravetoPage() {
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
