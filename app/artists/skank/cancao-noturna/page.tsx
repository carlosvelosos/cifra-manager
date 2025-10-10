import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Skank - Canção Noturna

[Intro] Am  G  Am  G
        Am  G  Am  G

[Solo 1]

Parte 1 De 3

E|------------------------------------------|
B|------------------------------------------|
G|-6h8-8-8-8-8--6-6h8-8-8-8-8--6h8-6-5------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 De 3

E|------------------------------------------|
B|------------------------------------------|
G|-6h8-8-8-8-8--6h8-8-8-8-8-8--8b10r8-6\\5---|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 De 3

E|------6-----------------4-----------------|
B|--------------------------1h2-1-----------|
G|-8b10---6-6/8\\6-6-6b8r6-------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

Am
   Misterioso luar de fronteira

Derramando no espinhaço quase um mar
G
  Clareando a aduana
      Am
Venezuela donde estás
                           C                  G
Não sei por que nessas esquinas vejo o seu olhar

         Am
Minha camisa estampada com o rosto de Elvis
G                             Am
  A minha guitarra é minha razão

Minha sorte anunciada misteriosamente
   G
A lua sobre nada

[Refrão]

              Am           C                  G
Não sei por que nessas esquinas vejo o seu olhar
              Am           C                  G
Não sei por que nessas esquinas vejo o seu olhar
   Dm                                C
Espalhe por aí boatos de que eu ficarei aqui
   Dm                                C
Espalhe por aí boatos de que eu ficarei aqui

[Solo 2] Am  G

  Am              G
E|---1-1------------------------------------|
B|-2-----4-4/6-6~----1-1-1-1-1h2-1----------|
G|-3---------------1---------------1--------|
D|-3---------------1------------------------|
A|-1---------------3------------------------|
E|-----------------4------------------------|

[Segunda Parte]

         Am
Vem mamacita doida e meiga
                    G
Sempre o âmago dos fatos
                             Am
Minha guerra e as flores do cactos
                     G
Poema, cinema, trincheira
              Am           C                  G
Não sei por que nessas esquinas vejo o seu olhar

    Am                             G
Um cego na fronteira, filósofo da zona
                        Am
Me disse que era um dervixe
                      G
Eu disse pra ele camarada
                                         Am   G
Eu acredito em tanta coisa que não vale nada

[Refrão]

              Am           C                  G
Não sei por que nessas esquinas vejo o seu olhar
              Am           C                  G
Não sei por que nessas esquinas vejo o seu olhar
   Dm                                C
Espalhe por aí boatos de que eu ficarei aqui
   Dm                                C
Espalhe por aí boatos de que eu ficarei aqui

[Solo 3] Am  G  Am  G  F7M  G

Parte 1 De 4

  Am                 G
E|----1-1-----------------------------------|
B|-2------4-4/6-6-6~----1-1-1-1-1h2-1-------|
G|-3------------------1---------------1-----|
D|-3------------------1---------------------|
A|-1------------------3---------------------|
E|--------------------4---------------------|

Parte 2 De 4

E|----1-1-----------------------------------|
B|-2------4-4/6-6-6~----1-1-1-1-1h2-1-------|
G|-3------------------1---------------1-----|
D|-3------------------1---------------------|
A|-1------------------3---------------------|
E|--------------------4---------------------|

Parte 3 De 4

E|---1-----4-----1-----1-----1--------------|
B|-----2-----2-----2-----2-----2------------|
G|-3-----3-----3-----3-----3-----3-3/5------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 4 De 4

E|-1-----1-----1-----1-----1----------------|
B|---4-----4-----4-----4-----4--------------|
G|-----5-----5-----5-----5-----5------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Refrão Final]

              Am           C                  G
Não sei por que nessas esquinas vejo o seu olhar
              Am           C                  G
Não sei por que nessas esquinas vejo o seu olhar

Velejando, viajando, sol quarando
        Am                    C
Meu querer, meu dever, meu devir
               G
E eu aqui a comer poeira

Que o sol deixará

              Am           C                  G
Não sei por que nessas esquinas vejo o seu olhar
              Am           C                  G
Não sei por que nessas esquinas vejo o seu olhar

[Final] Am  C  G  
        Am  C  G  
        Am  C  G

----------------- Acordes -----------------
Capotraste na 1ª casa
A#m*  = X 0 2 2 1 0 - (*Bm na forma de A#m)
C#*  = X 3 2 0 1 0 - (*D na forma de C#)
D#m*  = X X 0 2 3 1 - (*Em na forma de D#m)
F#7M*  = 1 X 2 2 1 X - (*G7M na forma de F#7M)
G#*  = 3 2 0 0 0 3 - (*A na forma de G#)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CancaoNoturnaPage() {
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
