import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Skank - Vou Deixar

[Intro]

[Tab - Intro]

E|-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0---------------------|
B|-5-5-3-3-2-2-3-3-5-5-3-3-2-2-3-3---------------------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

E|-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0---------------------|
B|-5-5-3-3-2-2-3-3-5-5-3-3-2-2-0-0---------------------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

[Primeira Parte]

        D  F#
Vou deixar
        G       Gm
A vida me levar
                 D  F#
Pra onde ela quiser
          G        Gm
Estou no meu lugar

Você já sabe onde é

[Segunda Parte]

D  Bm   G           A            D
       Não conte o tempo por nós   dois
 Bm  G           A
Pois a qualquer hora
         D      Bm
Posso estar de volta
 G            A
Depois que a noite terminar

[Terceira Parte]

        D  F#
Vou deixar
        G       Gm
A vida me levar
                 D  F#
Pra onde ela quiser
          G     Gm
Seguir a direção

De uma estrela qualquer

[Quarta Parte]

D  Bm  G         A        D       Bm
      Não quero hora pra voltar, não
 G       A         D       Bm
Conheço bem a solidão, me solta

G          A
E deixa a sorte me buscar

[Quinta Parte]

Em                        A   Em
   Eu já estou na sua estrada
                     A
Sozinho não enxergo nada

[Sexta Parte]

Em            F#m
   Mas vou ficar aqui
  G                F#m  Em
Até que o dia amanheça
          F#m
Vou esquecer de mim
     A
E você se puder não me esqueça

[Sétima Parte]

        D  F#
Vou deixar
       G        Gm
O coração bater
                  D  F#
Na madrugada sem fim
          G         Gm
Deixar o sol te ver

Ajoelhada por mim, sim

[Oitava Parte]

D  Bm  G         A        D       Bm
      Não tenho hora pra voltar, não
G       A            D     Bm
Eu agradeço tanto a sua escolta
 G           A
Mas deixa a noite terminar

[Nona Parte]

Em                        A   Em
   Eu já estou na sua estrada
                     A
Sozinho não enxergo nada

[Décima Parte]

Em            F#m
   Mas vou ficar aqui
  G                F#m  Em
Até que o dia amanheça
          F#m
Vou esquecer de mim
     A
E você se puder não me esqueça

[Solo] D  F#  G  Gm
       D  F#  G  Gm

[Tab - Solo]

Parte 1 de 2
              D      F#            G      Gm         D
E|-----------------------------------------------------|
B|-3--5--3--5b7rb7r------5--5--5/7\\5---3~--------------|
G|-----------------------------------------3---3/5\\3\\2-|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

Parte 2 de 2
        F#            G         Gm
E|-----------------------------------------------------|
B|-5/7\\-----5--5--5/7\\5---3~---------------------------|
G|------------------------------3---3/5-3-2------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

[Final] D  Bm  G  A        

[Tab - Final]

   D     Bm   G    A
E|-----------------------------------------------------|
B|-----3-0-------0-------------------------------------|
G|-2---------------2-0---0-----------------------------| (4x)
D|---------------------4-------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

 D    Bm   G         A
Não, não, não quero hora
     D       Bm
Pra voltar, não
 G       A         D       Bm
Conheço bem a solidão, me solta
G          A
E deixa a sorte me buscar

 D    Bm   G         A
Não, não, não tenho hora
     D       Bm
Pra voltar, não
G       A            D     Bm
Eu agradeço tanto a sua escolta
 G           A
Mas deixa a noite terminar

[Instrumental] D  Bm  G  A

[Tab - Instrumental]

   D     Bm   G    A
E|-----------------------------------------------------|
B|-----3-0-------0-------------------------------------|
G|-2---------------2-0---0-----------------------------| (8x)
D|---------------------4-------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

----------------- Acordes -----------------
A = X 0 2 2 2 0
Bm = X 2 4 4 3 2
D = X X 0 2 3 2
Em = 0 2 2 0 0 0
F# = 2 4 4 3 2 2
F#m = 2 4 4 2 2 2
G = 3 5 5 4 3 3
Gm = 3 5 5 3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VouDeixarPage() {
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
