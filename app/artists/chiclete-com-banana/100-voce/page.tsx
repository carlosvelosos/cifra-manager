import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Chiclete Com Banana - 100% Você

[Intro] E  A  C#m  D  E
        A  C#m  D  E

[Primeira Parte]

A
  Um céu sem estrelas
C#m
    Uma praia sem mar
D
  Amor sem carinho
Dm
   Romance sem par
A
  Carnaval sem festa
C#m
    Um jardim sem flor
D                     
  É assim que eu me sinto
E
  Longe do seu amor

[Pré-Refrão]

F#m                                      
    Como enganar um coração
                   C#m
Tão ligado nesse amor

Como viver a minha vida
                   D
Sem teu jeito sedutor
                    
Não da mais pra segurar
                 E
Tô viciado em você

[Refrão]

     A                 C#m
Não dá! Não dá! Pra ficar! Pra ficar!
        D         E
Sem te ver, já estou ficando louco
     A                 C#m
Não dá! Não dá! Pra ficar! Pra ficar!
        D        E               A  E
Sem te ver, sou cem por cento você

( A  C#m  D  E )
( A  C#m  D  E )

[Segunda Parte]

A
  Estrada sem rumo
C#m
    Saudade sem dor
D
  Tv sem novela
Dm
   Arco-íris sem cor
A
  Chiclete sem nana
C#m
    Verão sem calor
D                                     
  É assim que eu me sinto
E
  Longe do seu amor

[Pré-Refrão]

F#m                                      
    Como enganar um coração
                   C#m
Tão ligado nesse amor

Como viver a minha vida
                   D
Sem teu jeito sedutor
                    
Não da mais pra segurar
                 E
Tô viciado em você

[Refrão]

     A                 C#m
Não dá! Não dá! Pra ficar! Pra ficar!
        D         E
Sem te ver, já estou ficando louco
     A                 C#m
Não dá! Não dá! Pra ficar! Pra ficar!
        D        E               A  E
Sem te ver, sou cem por cento você

( A  C#m  D  E )
( A  C#m  D  E )

[Primeira Parte]

A
  Um céu sem estrelas
C#m
    Uma praia sem mar
D
  Amor sem carinho
Dm
   Romance sem par
A
  Carnaval sem festa
C#m
    Um jardim sem flor
D                     
  É assim que eu me sinto
E
  Longe do seu amor

[Pré-Refrão]

F#m                                      
    Como enganar um coração
                   C#m
Tão ligado nesse amor

Como viver a minha vida
                   D
Sem teu jeito sedutor
                   
Não da mais pra segurar
                 E
Tô viciado em você

[Refrão]

     A                 C#m
Não dá! Não dá! Pra ficar! Pra ficar!
        D         E
Sem te ver, já estou ficando louco
     A                 C#m
Não dá! Não dá! Pra ficar! Pra ficar!
        D        E               A  E
Sem te ver, sou cem por cento você

[Final] A  C#m  D  E 
        A  C#m  D  E 
        A  C#m  D  E 
        A  C#m  D  E  A

----------------- Acordes -----------------
A = X 0 2 2 2 0
C#m = X 4 6 6 5 4
D = X X 0 2 3 2
Dm = X X 0 2 3 1
E = 0 2 2 1 0 0
F#m = 2 4 4 2 2 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function Song00VocePage() {
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
