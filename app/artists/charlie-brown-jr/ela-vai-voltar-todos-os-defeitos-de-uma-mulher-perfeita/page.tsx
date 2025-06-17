import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Charlie Brown Jr. - Ela Vai Voltar (Todos Os Defeitos de Uma Mulher Perfeita)

Afinação: Db Ab Db Gb Bb Eb

[Intro] D9  C9  G/B  Gm/Bb
        D9  C9  G/B  Gm/Bb

[Tab - Intro] 

[Refrão] 

D9
   Minha mente
         C9
Nem sempre tão lúcida
      G/B            Gm/Bb
É fértil e me deu a voz
D9
   Minha mente
         C9
Nem sempre tão lúcida
    G/B
Fez ela se afastar
 Gm/Bb   D9     C9  G/B  Gm/Bb
Mas ela vai voltar
         D9     C9  G/B  Gm/Bb
Mas ela vai voltar

[Primeira Parte] 

        D9
Ela não é

Do tipo de mulher
     C9
Que se entrega na primeira
 G/B
Mas melhora na segunda
     Gm/Bb
E o paraíso é na terceira
  D9
Ela tem força
              C9
Ela tem sensibilidade

Ela é guerreira
    G/B
Ela é uma deusa
              Gm/Bb
Ela é mulher de verdade

D9
   Ela é daquelas
              C9
Que tu gosta na primeira
             G/B
Se apaixona na segunda
                 Gm/Bb
E perde a linha na terceira
D9
   Ela é discreta
          C9
E cultua bons livros
         G/B
E ama os animais
               Gm/Bb
Tá ligado, eu sou o bicho

[Refrão] 

D9
   Minha mente
         C9
Nem sempre tão lúcida
      G/B            Gm/Bb
É fértil e me deu a voz
D9
   Minha mente
         C9
Nem sempre tão lúcida
    G/B
Fez ela se afastar
 Gm/Bb   D9     C9  G/B  Gm/Bb
Mas ela vai voltar
         D9     C9  G/B  Gm/Bb
Mas ela vai voltar

( D9  C9  G/B  Gm/Bb )
( D9  C9  G/B  Gm/Bb ) 

[Segunda Parte] 

 D9
Deixa eu te levar
  C9       G/B      Gm/Bb
Pra ver o mundo, baby
 D9              C9
Deixa eu te mostrar
             G/B       Gm/Bb
O melhor que eu posso ser

 D9
Deixa eu te levar
  C9       G/B      Gm/Bb
Pra ver o mundo, baby
 D9              C9
Deixa eu te mostrar
             G/B       Gm/Bb
O melhor que eu posso ser

[Primeira Parte] 

        D9
Ela não é

Do tipo de mulher
     C9
Que se entrega na primeira
 G/B
Mas melhora na segunda
     Gm/Bb
E o paraíso é na terceira
  D9
Ela tem força
              C9
Ela tem sensibilidade

Ela é guerreira
    G/B
Ela é uma deusa
              Gm/Bb
Ela é mulher de verdade

D9
   Ela é daquelas
              C9
Que tu gosta na primeira
             G/B
Se apaixona na segunda
                 Gm/Bb
E perde a linha na terceira
D9
   Ela é discreta
          C9
E cultua bons livros
         G/B
E ama os animais
               Gm/Bb
Tá ligado, eu sou o bicho

[Refrão] 

D9
   Minha mente
         C9
Nem sempre tão lúcida
      G/B            Gm/Bb
É fértil e me deu a voz
D9
   Minha mente
         C9
Nem sempre tão lúcida
    G/B
Fez ela se afastar
 Gm/Bb   D9     C9  G/B  Gm/Bb
Mas ela vai voltar
         D9     C9  G/B  Gm/Bb
Mas ela vai voltar

[Terceira Parte] 

D11             C4+(9)
    Fazer da vida
          Bb5       C5
O que melhor possa ser
D11              C4+(9)
    Traçar um rumo novo
      Bb5         C5
Em direção ao sol
    D11         C4+(9)
Me sinto muito bem
        G5               Bb5
Quando vejo o pôr-do-sol

Só pra fazer nascer a lua

( D9  C9  G/B  Gm/Bb )

[Refrão] 

D9
   Minha mente
         C9
Nem sempre tão lúcida
      G/B            Gm/Bb
É fértil e me deu a voz

D9
   Minha mente
         C9
Nem sempre tão lúcida
    G/B
Fez ela se afastar

 Gm/Bb   D9     C9  G/B  Gm/Bb
Mas ela vai voltar
         D9     C9  G/B  Gm/Bb
Mas ela vai voltar
         D9     C9  G/B  Gm/Bb
Mas ela vai voltar
         D9     C9  G/B  Gm/Bb  D9
Mas ela vai voltar

----------------- Acordes -----------------
Bb5 = P8 P8 P8 10 X X
C4+(9) = 10 X 0 0 7 X
C5 = P10 10 10 12 X X
C9 = X 3 0 0 3 0
D11 = 0 X 4 0 3 X
D9 = 0 0 0 2 3 0
G/B = X 2 0 0 3 X
G5 = P5 5 5 7 X X
Gm/Bb = X 1 0 0 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ElaVaiVoltarTodosOsDefeitosDeUmaMulherPerfeitaPage() {
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
