import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Bruno e Marrone - Por Um Minuto

[Intro] G  D/F#  C9  G  D/F#  C9

[Primeira Parte]

G              D               C9
  E todos os amantes já adormeceram
G               D              C9
  E todas as palavras já se calaram
G                D
  Já não vive o mundo
              C9
Em que se perderam

G              D                C9
  Nem as madrugadas em que se amaram
          G  D  C9
Quero sentir
         G  D  C9
Quero ouvir

[Segunda Parte]

G                 D             C9
  Seus passos de volta a minha porta
G                    D
  Pra dizer que me amava
               C9
Quando estava longe
G                   D
  E deixar que amanhã
              C9
Juntos nos encontre
G                    D
  E que passe a ser vida
                 C9
O que hoje é só sonho

[Pré-Refrão]

C            Am7        D
  E que se acabe os segredos
C             Am7        D
  E que se aumente os desejos

[Refrão]

G           Bm          Em
E assim enquanto eu te beijo
     Bm        Am            D
Que mude o destino por um minuto
  Am             Am7M         Am7  D
Que meu corpo encontre o seu corpo
C            D    G   C9
  Num prazer absoluto

G           Bm            Em
E assim enquanto eu te abraço
     Bm             Am
Me aperte em seus braços
          D
Por um minuto

C                  Bm      Em
  De um jeito que só você sabe
C               D        G
  De um jeito que só eu sei

( G  D/F#  C9  G  D/F#  C9)

[Terceira Parte]

G              D
  Já não há razão
                 C9
Pra não ser pra sempre
G                  D
  Dessa vez há de ser
                 C9
Tem que ser diferente
G                 D
  Não me deixe sozinho
              C9
Nem mesmo um pouco
G                    D
  Que esse pouco me deixa
               C9
Cada vez mais louco

[Pré-Refrão]

C            Am7        D
  E que se acabe os segredos
C             Am7        D
  E que se aumente os desejos

[Refrão final]

G           Bm          Em
E assim enquanto eu te beijo
     Bm        Am            D
Que mude o destino por um minuto
  Am             Am7M         Am7  D
Que meu corpo encontre o seu corpo
C            D    G   C9
  Num prazer absoluto

G           Bm            Em
E assim enquanto eu te abraço
     Bm             Am
Me aperte em seus braços
          D
Por um minuto

C                  Bm      Em
  De um jeito que só você sabe
C               D        G
  De um jeito que só eu sei

( A  C#m  F#m  C#m  Bm  E )

  Bm             Bm7M         Bm7  E
Que meu corpo encontre o seu corpo
 D         E    A   D
Num prazer absoluto

A           C#m           F#m
E assim enquanto eu te abraço
     C#m            Bm             E
Me aperte em seus braços por um minuto

D                  C#m     F#m
  De um jeito que só você sabe
D               E       A
  De um jeito que só eu   sei

[Final] A  E  D  A  E  D


----------------- Acordes -----------------
A = X 0 2 2 2 0
Am = X 0 2 2 1 0
Am7 = X 0 2 0 1 0
Am7M = X 0 2 1 1 0
Bm = X 2 4 4 3 2
Bm7 = X 2 4 2 3 2
Bm7M = X 2 4 3 3 2
C = X 3 2 0 1 0
C#m = X 4 6 6 5 4
C9 = X 3 2 0 3 3
D = X X 0 2 3 2
D/F# = 2 X 0 2 3 X
E = 0 2 2 1 0 0
Em = 0 2 2 0 0 0
F#m = 2 4 4 2 2 2
G = 3 2 0 0 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PorUmMinutoPage() {
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
