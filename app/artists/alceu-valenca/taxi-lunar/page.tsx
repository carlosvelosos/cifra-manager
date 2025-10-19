import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Alceu Valença - Táxi Lunar

[Intro] Am7  Bm7  C7M  Bm7  Am7
        Am7  Bm7  C7M  Bm7  Am7

[Primeira Parte]

 Dm   C   Bm  Am7
Pela sua cabeleira vermelha
       G     F     Em
Pelos raios desse sol lilás
 Dm   C    Bm     Am7
Pelo fogo do seu corpo centelha
       G     F     Em
Pelos raios desse sol

[Refrão]

  Am7              Bm7
Apenas apanhei na beira mar
C7M           Bm7          Am7
    Um táxi pra estação lunar
  Am7              Bm7
Apenas apanhei na beira mar
C7M           Bm7          Am7
    Um táxi pra estação lunar

[Segunda Parte]

 Dm   C      Bm Am7
Bela linda criatura bonita
       G     F      Em
Nem menina, nem mulher
 Dm       C     Bm     Am7
Tem um espelho no seu rosto de neve
       G     F     Em
Nem menina, nem mulher

[Refrão]

  Am7              Bm7
Apenas apanhei na beira mar
C7M           Bm7          Am7
    Um táxi pra estação lunar
  Am7              Bm7
Apenas apanhei na beira mar
C7M           Bm7          Am7
    Um táxi pra estação lunar

( Am7  Bm7  C7M  Bm7  Am7 )
( Am7  Bm7  C7M  Bm7  Am7 )

[Terceira Parte]

  Dm    C     Bm   Am7
Ela me deu o seu amor eu tomei
        G    F       Em
No dia dezesseis de maio viajei
   Dm  C      Bm  Am7
Espaçonave atropelado procurei
      G    F   Em
Seu amor aperreado

[Refrão]

  Am7              Bm7
Apenas apanhei na beira mar
C7M           Bm7          Am7
    Um táxi pra estação lunar
  Am7              Bm7
Apenas apanhei na beira mar
C7M           Bm7          Am7
    Um táxi pra estação lunar

[Primeira Parte]

 Dm   C   Bm  Am7
Pela sua cabeleira vermelha
       G     F     Em
Pelos raios desse sol lilás
 Dm   C    Bm     Am7
Pelo fogo do seu corpo centelha
       G     F     Em
Pelos raios desse sol

[Refrão]

  Am7              Bm7
Apenas apanhei na beira mar
C7M           Bm7          Am7
    Um táxi pra estação lunar
  Am7              Bm7
Apenas apanhei na beira mar
C7M           Bm7          Am7
    Um táxi pra estação lunar

[Segunda Parte]

 Dm   C      Bm Am7
Bela linda criatura bonita
       G     F      Em
Nem menina, nem mulher
 Dm       C     Bm     Am7
Tem um espelho no seu rosto de neve
       G     F     Em
Nem menina, nem mulher

[Refrão]

  Am7              Bm7
Apenas apanhei na beira mar
C7M           Bm7          Am7
    Um táxi pra estação lunar
  Am7              Bm7
Apenas apanhei na beira mar
C7M           Bm7          Am7
    Um táxi pra estação lunar

[Final] Am7  Bm7  C7M  Bm7  Am7
        Am7  Bm7  C7M  Bm7  Am7

----------------- Acordes -----------------
Am7 = X 0 2 0 1 0
Bm = X 2 4 4 3 2
Bm7 = X 2 4 2 3 2
C = X 3 2 0 1 0
C7M = X 3 2 0 0 X
Dm = X X 0 2 3 1
Em = 0 2 2 0 0 0
F = 1 3 3 2 1 1
G = 3 2 0 0 0 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TaxiLunarPage() {
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
