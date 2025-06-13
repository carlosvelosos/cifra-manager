import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Grupo Revelação - Deixa Acontecer

[Intro] G7M  F#7  Bm7  D7(13)
        G7M  F#7  Bm7  D7(4/9)

[Refrão] 

             G7M   F#7  Bm7
Deixa acontecer naturalmente
D7(9)         G7M   F#7   Bm7  Bbm7
Eu não quero ver você chorar
 Am7    D7(9)  G7M   F#7      Bm7
Deixa que  o amor encontre a gente
 D7(9)      C#m7(5-)  F#7(13-)  Bm7  
Nosso caso vai      etern_____izar

 D7(4/9)     G7M   F#7  Bm7
Deixa acontecer naturalmente
D7(9)         G7M   F#7   Bm7  Bbm7
Eu não quero ver você chorar
 Am7    D7(9)  G7M   F#7      Bm7
Deixa que  o amor encontre a gente
 D7(9)      C#m7(5-)  F#7(13-)  Bm7  A7(4/9)
Nosso caso vai      etern_____izar 

[Primeira Parte] 

D7M
    Você já disse que me quer
F#m7
     Pra toda a vida, eternidade
                Em7      A7
Quando está distante de mim
            Em7  F#m7  G7M  A7(4/9)
Fica louca de   sau___da___de
D6                             F#m7
   Que é a razão do seu viver sou eu
                  Em7      Em7/D
Está tudo bem, eu acredito
               C#m7(5-)   F#7
Eu não tô duvidando disso

[Segunda Parte] 

Bm7
    Só que eu tenho muito medo
           F#m7
De me apaixonar
G7M                   F#7          Bm7
    Esse filme já passou na minha vida
A7(4)            A7      D7M
E você tá me ajudando a superar
C#m7(5-)                      F#7  
         Eu não quero ser um mal 
        Bm7  
Na sua vida

[Refrão] 

 D7(4/9)     G7M   F#7  Bm7
Deixa acontecer naturalmente
D7(9)         G7M   F#7   Bm7  Bbm7
Eu não quero ver você chorar
 Am7    D7(9)  G7M   F#7      Bm7
Deixa que  o amor encontre a gente
 D7(9)      C#m7(5-)  F#7(13-)  Bm7  
Nosso caso vai      etern_____izar

 D7(4/9)     G7M   F#7  Bm7
Deixa acontecer naturalmente
D7(9)         G7M   F#7   Bm7  Bbm7
Eu não quero ver você chorar
 Am7    D7(9)  G7M   F#7      Bm7
Deixa que  o amor encontre a gente
 D7(9)      C#m7(5-)  F#7(13-)  Bm7  A7(4/9)
Nosso caso vai      etern_____izar

[Final] G7M  F#7  B7(4/9)

E|-3---3----2-------------------------------|

----------------- Acordes -----------------
A7 = 2 0 2 2
A7(4) = 0 0 5 7
Am7 = 7 P5 5 5
Bbm7 = 3 1 2 3
Bm7 = 4 2 3 4
C#m7(5-) = 5 4 P2 2
D6 = 3 2 0 0
D7(13) = 10 14 12 12
D7(9) = 4 5 5 7
D7M = 0 P2 2 4
Em7 = 2 0 0 0
Em7/D = 2 4 3 5
F#7 = 4 3 P2 2
F#7(13-) = 14 11 11 12
F#m7 = 4 P2 2 2
G7M = 5 4 3 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DeixaAcontecerPage() {
  return (
    <>
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}
