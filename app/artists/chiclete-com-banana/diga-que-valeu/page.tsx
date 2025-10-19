import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Chiclete Com Banana - Diga Que Valeu

[Intro] D  A  Bm  A  A5+

[Primeira Parte]

    D
Um beijo em você eu quero dar
                          A
Saudade presa no meu coração
         G
Eu ando louco alucinado
       Bm
Muito doido e apaixonado 
       Em  A  G#
Por você

[Pré-Refrão]

   G
É pena que esse amor
     Bm
Não possa mais ficar
   Em
É pena que esse amor
G                         A
  Não vai poder se eternizar

[Refrão]

       D
Então diga que valeu
                A
O nosso amor valeu demais
     G                 A
Foi lindo, ficou pra trás

       D
Então diga que valeu
                A
O nosso amor valeu demais
     G                A
Que pena, ficou pra trás

[Segunda Parte]

D                               A
  Faz tanto tempo que eu te conheço

Mas você mudou 
D                               A
  Faz tanto tempo que eu te conheço

Mas você mudou 
D                 A                G  A
  Minha flor bonita, minha linda flor
D                 A                G  A
  Minha flor bonita, minha linda flor

[Primeira Parte]

    D
Um beijo em você eu quero dar
                          A
Saudade presa no meu coração
         G
Eu ando louco alucinado
       Bm
Muito doido e apaixonado 
       Em  A  G#
Por você

[Pré-Refrão]

   G
É pena que esse amor
     Bm
Não possa mais ficar
   Em
É pena que esse amor
G                         A
  Não vai poder se eternizar

[Refrão]

       D
Então diga que valeu
                A
O nosso amor valeu demais
     G                 A
Foi lindo, ficou pra trás

       D
Então diga que valeu
                A
O nosso amor valeu demais
     G                A
Que pena, ficou pra trás

[Final] D  A  Bm  A  A5+  D

----------------- Acordes -----------------
A = X 0 2 2 2 0
A5+ = X 0 3 2 2 0
Bm = X 2 4 4 3 2
D = X X 0 2 3 2
Em = 0 2 2 0 0 0
G = 3 2 0 0 0 3
G# = 4 3 1 1 1 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DigaQueValeuPage() {
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
