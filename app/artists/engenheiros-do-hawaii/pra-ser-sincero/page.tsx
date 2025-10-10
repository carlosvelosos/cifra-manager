import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Engenheiros do Hawaii - Pra Ser Sincero

[Intro] D  G  A
        Bm  G  A
        D  G  A
        Bm  G  A

[Tab - Intro]

Parte 1 de 2
   D               G       A
E|-------0-2-0------------------------------|
B|-----3-------3---0---0-3-2----------------|
G|---2-----------2---0----------------------|
D|-0----------------------------------------|
A|-------------------------0----------------|
E|-----------------3------------------------|

Parte 2 de 2
   Bm              G         A
E|------------------------------------------|
B|-------2-3-2-----0------------------------|
G|-----4-------4-2---2-0--------------------|
D|---4--------------------4--2-4------------|
A|-2-------------------------0--------------|
E|-----------------3------------------------|

[Primeira Parte]

            D          G         A
Pra ser sincero não espero de você
              Bm
Mais do que educação
 G             A     G            A
Beijos sem paixão, crimes sem castigo
  Bm              G           A
Aperto de mãos, apenas bons amigos

[Tab - Riff]

Parte 1 de 2
   D               G       A
E|-------0-2-0------------------------------|
B|-----3-------3---0---0-3-2----------------|
G|---2-----------2---0----------------------|
D|-0----------------------------------------|
A|-------------------------0----------------|
E|-----------------3------------------------|

Parte 2 de 2
   Bm              G         A
E|------------------------------------------|
B|-------2-3-2-----0------------------------|
G|-----4-------4-2---2-0--------------------|
D|---4--------------------4--2-4------------|
A|-2-------------------------0--------------|
E|-----------------3------------------------|

            D
Pra ser sincero
       G          A  Bm
Não espero que você minta
        G       A          Bm
Não se sinta capaz de enganar
            G         A    D
Quem não engana a si mesmo

[Refrão]

          Bm       A        Bm
Nós dois temos os mesmos defeitos
                A        Bm
Sabemos tudo a nosso respeito
                        A       G
Somos suspeitos de um crime perfeito
      F#m      Em         F#        E
Mas crimes perfeitos não deixam suspeitos

[Primeira Parte]

            D          G         A
Pra ser sincero não espero de você
              Bm
Mais do que educação
 G             A     G            A
Beijos sem paixão, crimes sem castigo
  Bm             G           A
Aperto de mãos, ainda bons amigos

[Tab - Riff]

Parte 1 de 2
   D               G       A
E|-------0-2-0------------------------------|
B|-----3-------3---0---0-3-2----------------|
G|---2-----------2---0----------------------|
D|-0----------------------------------------|
A|-------------------------0----------------|
E|-----------------3------------------------|

Parte 2 de 2
   Bm              G         A
E|------------------------------------------|
B|-------2-3-2-----0------------------------|
G|-----4-------4-2---2-0--------------------|
D|---4--------------------4--2-4------------|
A|-2-------------------------0--------------|
E|-----------------3------------------------|

[Segunda Parte]

            D
Pra ser sincero
       G          A        Bm
Não espero que você me perdoe
     G             A    Bm
Por ter perdido a calma
            G              A    D
Por ter vendido a alma ao diabo

[Ponte]

        Bm
Um dia desses
                         G
Num desses encontros casuais
          Bm
Talvez a gente se encontre
                                G
Talvez a gente encontre explicação

        Bm
Um dia desses
                         G
Num desses encontros casuais
           Bm
Talvez eu diga, minha amiga
            G
Pra ser sincero, prazer em vê-la
     A
Até mais

[Refrão]

          Bm       A        Bm
Nós dois temos os mesmos defeitos
                A        Bm
Sabemos tudo a nosso respeito
                        A       G
Somos suspeitos de um crime perfeito
      F#m      Em         F#        E
Mas crimes perfeitos não deixam suspeitos

[Tab - Final]

E|-----0-2-0---5-4~-------------------------|
B|---3-------3------------------------------|
G|-2----------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

----------------- Acordes -----------------
A = X 0 P2 2 2 X
Bm = X 2 4 4 3 2
D = X X 0 2 3 2
E = 0 2 2 1 0 0
Em = 0 2 2 0 0 0
F# = 2 4 4 3 2 2
F#m = 2 4 4 2 2 2
G = 3 2 0 0 0 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PraSerSinceroPage() {
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
