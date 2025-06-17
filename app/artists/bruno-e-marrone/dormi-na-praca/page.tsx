import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Bruno e Marrone - Dormi Na Praça

[Intro] E

[Primeira Parte]

    E          G#m        C#m
Eu caminhei sozinho pela rua
   A             G#            C#m
Falei com as estrelas e com a lua
    A                G#
Deitei no banco da praça
 C#m              A
Tentando te esquecer
  E         B            E  B
Adormeci e sonhei com você

[Pré-Refrão]

    E          G#m       C#m
No sonho você veio provocante
    A            G#            C#m
Me deu um beijo doce e me abraçou
   A           G#          C#m       A
E bem na hora "H" no ponto alto do amor
   E             B            E  B
Já era dia e o guarda me acordou

[Refrão]

      E
Seu guarda eu não sou vagabundo
                  B
Eu não sou delinquente

Sou um cara carente
              A             E   B
Eu dormi na praça pensando nela
      E
Seu guarda seja meu amigo
             B
Me bata me prenda faça tudo comigo
            A               E   B
Mas não me deixe, ficar sem ela

[Pré-Refrão]

    E          G#m       C#m
No sonho você veio provocante
    A            G#            C#m
Me deu um beijo doce e me abraçou
   A           G#          C#m       A
E bem na hora "H" no ponto alto do amor
   E             B            E  B
Já era dia e o guarda me acordou

[Refrão]

      E
Seu guarda eu não sou vagabundo
                  B
Eu não sou delinquente

Sou um cara carente
              A             E   B
Eu dormi na praça pensando nela
      E
Seu guarda seja meu amigo
             B
Me bata me prenda faça tudo comigo
            A               E   B
Mas não me deixe, ficar sem ela

      E
Seu guarda eu não sou vagabundo
                  B
Eu não sou delinquente

Sou um cara carente
              A             E   B
Eu dormi na praça pensando nela
      E
Seu guarda seja meu amigo
             B
Me bata me prenda faça tudo comigo
            A               E
Mas não me deixe, ficar sem ela


----------------- Acordes -----------------
A = X 0 2 2 2 0
B = X 2 4 4 4 2
C#m = X 4 6 6 5 4
E = 0 2 2 1 0 0
G# = 4 6 6 5 4 4
G#m = 4 6 6 4 4 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DormiNaPracaPage() {
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
