import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Skank - Sutilmente

[Intro] D  D4  D  D9  
        D  D4  D  D9   
        A  A9  A  A9 
        D  D4  D  D9  
        D  D4  D  D9   
        A  A9  A  A9 

[Primeira Parte]

D                  D4   D  D9 
  E quando eu estiver triste
D         D4  D  D9   A   A9  A  A9 
  Simplesmen_te me abrace
D                D4  D  D9 
  Quando eu estiver louco
D        D4  D  D9  A    A9  A  A9 
  Subitamen_te se afaste

[Ponte]

G                        
  Quando eu estiver fogo 
                  D    D4  D  D9  A
 Suavemente se encaixe

( D  D4  D  D9 )  
( D  D4  D  D9 )  
( A  A9  A  A9 ) 

[Primeira Parte]

D                  D4   D  D9 
  E quando eu estiver triste
D         D4  D  D9   A   A9  A  A9 
  Simplesmen_te me abrace
D                D4  D  D9 
  Quando eu estiver louco
D        D4  D  D9  A    A9  A  A9 
  Subitamen_te se afaste

[Pré-Refrão]

G                         
  E quando eu estiver bobo 
                     Bm
Sutilmente disfarce, é
                            
Mas quando eu estiver morto 
                    G
Suplico que não me mate não

 G/F#      Em7
Dentro de ti
G  G/F#      Em7
  Dentro de ti

[Refrão]

 D           G    G/F#  Em7    A7/4
Mesmo que o mundo a____cabe enfim
 D         G     G/F#  Em7       A7/4
Dentro de tudo que    cabe em ti

 D           G    G/F#  Em7    A7/4
Mesmo que o mundo a____cabe enfim
 D         G     G/F#  Em7       A7/4
Dentro de tudo que    cabe em ti

( D  D4  D  D9 )  
( D  D4  D  D9 )  
( A  A9  A  A9 ) 
( D  D4  D  D9 )  
( D  D4  D  D9 )  
( A  A9  A  A9 ) 

[Primeira Parte]

D                  D4   D  D9 
  E quando eu estiver triste
D         D4  D  D9   A   A9  A  A9 
  Simplesmen_te me abrace
D                D4  D  D9 
  Quando eu estiver louco
D        D4  D  D9  A    A9  A  A9 
  Subitamen_te se afaste

[Pré-Refrão]

G                         
  E quando eu estiver bobo 
                     Bm
Sutilmente disfarce, é
                            
Mas quando eu estiver morto 
                    G
Suplico que não me mate não

 G/F#      Em7
Dentro de ti
G  G/F#      Em7
  Dentro de ti

[Refrão]

 D           G    G/F#  Em7    A7/4
Mesmo que o mundo a____cabe enfim
 D         G     G/F#  Em7       A7/4
Dentro de tudo que    cabe em ti

 D           G    G/F#  Em7    A7/4
Mesmo que o mundo a____cabe enfim
 D         G     G/F#  Em7       A7/4
Dentro de tudo que    cabe em ti

 D           G    G/F#  Em7    A7/4
Mesmo que o mundo a____cabe enfim
 D         G     G/F#  Em7       A7/4
Dentro de tudo que    cabe em ti

 D           G    G/F#  Em7    A7/4
Mesmo que o mundo a____cabe enfim
 D         G     G/F#  Em7       A7/4
Dentro de tudo que    cabe em ti

[Final] D  G  G/F#  Em7  A7/4 
        D  G  G/F#  Em7  A7/4 
        D  G  G/F#  Em7  A7/4

----------------- Acordes -----------------
Capotraste na 4ª casa
C#*  = X 0 2 2 2 0 - (*F na forma de C#)
C#7/4*  = X 0 2 0 3 3 - (*F7/4 na forma de C#7/4)
C#9*  = X 0 2 2 0 0 - (*F9 na forma de C#9)
D#m*  = X 2 4 4 3 2 - (*Gm na forma de D#m)
F#*  = X X 0 2 3 2 - (*A# na forma de F#)
F#4*  = X X 0 2 3 3 - (*A#4 na forma de F#4)
F#9*  = X X 0 2 3 0 - (*A#9 na forma de F#9)
G#m7*  = 0 2 0 0 3 3 - (*Cm7 na forma de G#m7)
B*  = 3 2 0 0 3 3 - (*D# na forma de B)
B/A#*  = 2 X 0 0 3 3 - (*D#/D na forma de B/A#)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SutilmentePage() {
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
