import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Marília Mendonça - Amante Não Tem Lar

[Intro] A9  E

[Primeira Parte]

Parte 1 de 2

Parte 2 de 2

                 F#m7
Só vim me desculpar
                D9
Eu não vou demorar
                         A
Não vou tentar ser sua amiga
                  E/G#
Pois sei que não dá

               F#m7
Você vai me odiar
                  D9
Mas eu vim te contar

Que faz um tempo
         A                 E
Eu me meti no meio do seu lar

[Pré-Refrão]

                     Bm
Sua família é tão bonita
          D
Eu nunca tive isso na vida
            A9
E se eu continuar assim
            E
Eu sei que não vou ter

            Bm
Ele te ama de verdade
        D
E a culpa foi minha
          A9                     E
Minha responsabilidade eu vou resolver
     Bm                 D
Não quero atrapalhar você

[Refrão]

                  A9
E o preço que eu pago
                             E
É nunca ser amada de verdade

Ninguém me respeita nessa cidade
  Bm
Amante não tem lar
  D
Amante nunca vai casar

                  A9
E o preço que eu pago
                             E
É nunca ser amada de verdade

Ninguém me respeita nessa cidade
  Bm
Amante não vai ser fiel
  D
Amante não usa aliança e véu

[Base Solo] A9  E  Bm  D

[Solo]

[Pré-Refrão]

                     Bm
Sua família é tão bonita
          D
Eu nunca tive isso na vida
            A9
E se eu continuar assim
            E
Eu sei que não vou ter

            Bm
Ele te ama de verdade
        D
E a culpa foi minha
          A9                     E
Minha responsabilidade eu vou resolver
     Bm                 D
Não quero atrapalhar você

[Refrão]

                  A9
E o preço que eu pago
                             E
É nunca ser amada de verdade

Ninguém me respeita nessa cidade
  Bm
Amante não tem lar
  D
Amante nunca vai casar

                  A9
E o preço que eu pago
                             E
É nunca ser amada de verdade

Ninguém me respeita nessa cidade
  Bm
Amante não vai ser fiel
  D
Amante não usa aliança

                  A9
E o preço que eu pago
                             E
É nunca ser amada de verdade

Ninguém me respeita nessa cidade
  Bm
Amante não tem lar
  D
Amante nunca vai casar

                  A9
E o preço que eu pago
                             E
É nunca ser amada de verdade

Ninguém me respeita nessa cidade
  Bm
Amante não vai ser fiel
  D                       A
Amante não usa aliança e véu

----------------- Acordes -----------------
F#m7 = 4 P2 2 2
A = P2 2 2 2
A9 = P2 4 2 2
Bm = 4 4 3 4
D = 4 2 3 4
D9 = 0 2 3 2
E = 2 1 0 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AmanteNaoTemLarPage() {
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
