import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Luan Santana - Clone

[Intro] G  D/F#  Em7  C9

[Tab - Intro]
   G                   D/F#                Em7
E|----------------------------------------------------|
B|----------3-------------------3-------------------3-|
G|-------4-----2h4--2--------2-----0h2--0--------0----|
D|-5------------------------------------------2-------|
A|------------------------4---------------------------|
E|----3----------------2-------------------0----------|

                 C9          
E|----------------------------------------------------|
B|----------------------------------------------------|
G|--2/4--4\2--0--0------------------------------------|
D|---------------0h2----------------------------------|
A|--------------------2/3--2--0h2--0------------------|
E|------------------------------------3---------------|

[Primeira Parte]

  G      D/F#
Pra começar
                     Em7       C9
Sua mãe vai se encantar comigo

 G             D/F#
Se eu contar piada pro seu pai
          Em7        C9
Ele vai cair no riso

[Pré-Refrão]

 G
Sua amiga mais chata
                D/F#
Vai falar que agora acertou
Em7
    Churrasquinho em família
               C9
Vai perder a graça se eu não for

  Em7
Agarra o amor

E não deixa escapar
     D
Só pra garantir

Vou passando aqui
C9               D
Até você me agarrar

[Refrão]

G          D/F#
Ahh ah-ah,      pensa nos fi' bonito
    Em7 
Que a   gente vai dar
C9
   Eu vou soltar foguete
 G
Se sair seu clone
D/F#
     Cê entra com a beleza
  Em7              C9
E eu com sobrenome

G          D/F#
Ahh ah-ah,      pensa nos fi' bonito
    Em7 
Que a   gente vai dar
C9
   Eu vou soltar foguete
 G
Se sair seu clone
D/F#
     Cê entra com a beleza
  C                    G
E eu entro com o sobrenome

( G  D/F# Em7  C9 )

[Pré-Refrão]

 G
Sua amiga mais chata
                D/F#
Vai falar que agora acertou
Em7
    Churrasquinho em família
               C9
Vai perder a graça se eu não for

  Em7
Agarra o amor

E não deixa escapar
     D
Só pra garantir

Vou passando aqui
C9               D
Até você me agarrar

[Refrão]

G          D/F#
Ahh ah-ah,      pensa nos fi' bonito
    Em7 
Que a   gente vai dar
C9
   Eu vou soltar foguete
 G
Se sair seu clone
D/F#
     Cê entra com a beleza
  Em7              C9
E eu com sobrenome

G          D/F#
Ahh ah-ah,      pensa nos fi' bonito
    Em7 
Que a   gente vai dar
C9
   Eu vou soltar foguete
 G
Se sair seu clone
D/F#
     Cê entra com a beleza
  C                    G
E eu entro com o sobrenome

( G  D/F# Em7  C )

                       G 
Eu vou soltar foguete se sair seu clone
D/F#                         C9
     Cê entra com a beleza e eu
                  G
Entro com o sobrenome

----------------- Acordes -----------------
B*  = X 3 2 0 1 0 - (*A# na forma de B)
B9*  = X 3 5 5 3 3 - (*A#9 na forma de B9)
C#*  = X X 0 2 3 2 - (*C na forma de C#)
C#/F*  = 2 X 0 2 3 2 - (*C/E na forma de C#/F)
D#m7*  = 0 2 2 0 3 0 - (*Dm7 na forma de D#m7)
F#*  = 3 2 0 0 0 3 - (*F na forma de F#)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ClonePage() {
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
