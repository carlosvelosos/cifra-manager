import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Zeca Pagodinho - Mais Feliz

[Intro] G  G7  C  
        Cm6  G  G7
        C  Cm6  G  D7

           G                         A7
Nós fomos feitos um pro outro de encomenda
                 Cm            D7       G     D7
Como a chave e a fenda, como a luva e a mão
          G                      A7
O nosso amor é kamasutra, é juventude
                     Cm            D7         G4(7)   G7
É demais, parece um grude, corpo e alma e coração

       C
Sinceramente amor
         D/C                         Bm
Eu tenho que me beliscar de vez em quando
          E7                    Am      Bm
Pra ver se é verdade ou estou sonhando
      C                     D7
Se a gente assim sempre se quis
     Dm                     G7
Quem pode então ser mais feliz

  C                 D/C                       Bm
Eu me confesso, literalmente em suas mãos apaixonado
       E7                        Am   Bm
Noutro planeta eu já fui seu namorado
        C              D7       G4(7)       G7
Esta paixão entre nós dois: é coisa lá de Deus

   C                 D/C                           Bm
Cuida de mim, porque você é o mais real dos sonhos meus
     E7                           Am   Bm
No temporal você é o meu farol de milha
     C                   D7             G4(7)   G7
Meu sol não brilha sem a luz dos olhos teus

   C                 D/C                           Bm
Cuida de mim, porque você é o mais real dos sonhos meus
      E7                          Am   Bm
No temporal você é o meu farol de milha
          C              D7              G   G4(7)  G7
Meu sol não brilha sem a luz dos olhos teus

----------------- Acordes -----------------
A7 = 2 0 2 2
Am = 2 2 1 2
Bm = 4 4 3 4
C = 2 0 1 2
Cm = 1 0 1 1
Cm6 = P2 2 4 5
D7 = 4 2 1 4
Dm = 3 2 3 3
E7 = 2 1 0 0
G = 5 4 3 5
G4(7) = 0 0 1 3
G7 = P3 4 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {
  return (
    <>
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}
