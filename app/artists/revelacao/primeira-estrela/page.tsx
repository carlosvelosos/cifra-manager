import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Grupo Revelação - Primeira Estrela

[Intro] A  B  Dm  A
        F  G  A

A                    B7
  Um dia sai, pus o pé nessa estrada 
F#m                     C#m
   Teu coração foi meu guia 
Em                         Bm
   Enquanto ensinava, aprendia 
D                      A   F   G    A
  Todas as formas de ama...a...a....ar 
                    B7
Vivi de aventura perdi tanto tempo 
F#m                       C#m
   Todas pensei que eu podia 
Em                    Bm
   Se era paixão não sabia 
D                      A  D7
  Quando cansei fui morar 
C#7                         D
   Na primeira estrela do céu 
F          G                      A   D7
  Só então....foi que eu fui enxergar 
C#7                           D
   Que a primeira estrale do céu 
F           G                A
  Estava em casa, eu podia tocar 
                B7          D                   A
Ah!...se te magoei amor....ah!....perdoa meu amor 
                B7          D                   A  F  G
Ah!...se te magoei amor....ah!....perdoa meu amor

----------------- Acordes -----------------
A = P2 2 2 2
B = P4 4 4 4
B7 = 1 2 0 1
Bm = 4 4 3 4
C#7 = 3 4 2 3
C#m = 2 1 2 2
D = 4 2 3 4
D7 = 4 2 1 4
Dm = 3 2 3 3
Em = 5 4 5 5
F = 3 2 1 3
F#m = 4 2 2 4
G = 5 4 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PrimeiraEstrelaPage() {
  return (
    <>
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}