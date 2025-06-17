import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Marília Mendonça - Ciumeira

[Intro] Bm  F#m11  E9
        Bm  F#m11  E9

[Primeira Parte]

 Bm                 F#m11
No começo, eu entendia
            E9
Mas era só cama, não tinha amor
 Bm                   F#m11
Lembro quando você dizia
          E9
Vou desligar porque ela chegou

[Pré-Refrão]

Bm                     F#m11
E a gente foi se envolvendo
            E9
Perdendo o medo
 Bm                    F#m11
Não tinha lugar e nem hora
            E9 
Pra dar um beijo
                         D
Coração não tá mais aceitando
    Dm               A9  E
Só metade do seu: Te amo

[Refrão]

          A9
É uma ciumeira atrás da outra
                     E 
Ter que dividir seu corpo e a sua boca
                   Bm
Tá bom que eu aceitei por um instante
                  D
A verdade é que amante 
                  E
Não quer ser amante

          A9
É uma ciumeira atrás da outra
                     E 
Ter que dividir seu corpo e a sua boca
                   Bm
Tá bom que eu aceitei por um instante
                  D
A verdade é que amante 
                  E
Não quer ser amante
          A9
É uma ciumeira atrás da outra

[Solo] Bm  F#m11  E9
       Bm  F#m11  E9

[Pré-Refrão]

Bm                     F#m11
E a gente foi se envolvendo
            E9
Perdendo o medo
 Bm                    F#m11
Não tinha lugar e nem hora
            E9 
Pra dar um beijo
                         D
Coração não tá mais aceitando
    Dm               A9  E
Só metade do seu: Te amo

[Refrão Final]

          A9
É uma ciumeira atrás da outra
                     E 
Ter que dividir seu corpo e a sua boca
                   Bm
Tá bom que eu aceitei por um instante
                  D
A verdade é que amante 
                  E
Não quer ser amante

          A9
É uma ciumeira atrás da outra
                     E 
Ter que dividir seu corpo e a sua boca
                   Bm
Tá bom que eu aceitei por um instante
                  D
A verdade é que amante 
                  E
Não quer ser amante

          A9
É uma ciumeira atrás da outra
                     E 
Ter que dividir seu corpo e a sua boca
                   Bm
Tá bom que eu aceitei por um instante
                  D
A verdade é que amante 
                  E
Não quer ser amante
          A9
É uma ciumeira atrás da outra

----------------- Acordes -----------------
A9 = P2 4 2 2
Bm = 4 4 3 4
D = 4 2 3 4
Dm = 3 2 3 3
E = 2 1 0 2
E9 = 2 1 0 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CiumeiraPage() {
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
