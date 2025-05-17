import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cifra = `
Zeca Pagodinho - Água da minha sede

[Intro] G6(9)  C  D7

G            C/E     G                C/E
Eu preciso do seu amor  paixão forte me domina
Bb        Eb      Bb           Eb      C/E
Agora que começou   não sei como termina
           C              D7       Bm7(5-)
Água da minha sede  bebo na sua fonte
              E7      A7(9)                 D7     G
Sou peixe na sua rede   pôr-do-sol no seu horizonte
              C/E      G                    C/E     G
Quando você sambou na roda  quando você sambou na roda
                 B7     Em7                  B7     Em7
Fiquei a fim de te namorar  fiquei a fim de te namorar
             A7     D7                        Bm
O amor tem essa história  se bate já quer entrar
           E7       A7(9)            D7    G
Se entrar não quer sair  ninguém sabe explicar
               C/E      G                 C/E      G
O meu amor é passarinheiro  o meu amor é passarinheiro
              B7     Em7               B7     Em7
Ele só quer passarinhar ele só quer passarinhar
               A7    D7
Seu beijo é um alçapão  seu abraço é uma gaiola
Bm7              E7      A7(9)                  D7     G
Que prende meu coração    que nem moda de viola
                   D7
Na gandaia  na gandaia
              G
Fruto do seu amor me pegou
          D7    Ebº        Em7
Na gandaia   sua renda me rodou
     D7                        Bm7     E7
Foi a gira  foi canjira que me enfeitiçou
       Am7      D7            G
Apaixonado  preciso do seu amor

----------------- Acordes -----------------
A7 = 2 0 2 2
A7(9) = 7 6 8 9
Am7 = 7 P5 5 5
B7 = 1 2 0 1
Bb = P3 3 3 3
Bm = 4 4 3 4
Bm7 = 4 2 3 4
Bm7(5-) = 3 2 0 0
C = 2 0 1 2
D7 = 4 2 1 4
E7 = 2 1 0 0
Eb = 5 3 4 5
Ebº = 1 2 1 4
Em7 = 2 0 0 0
G = 5 4 3 5
G6(9) = 5 4 5 7
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

// Helper function to split text into columns
const splitTextIntoColumns = (
  text: string,
  maxLinesPerColumn: number
): string[] => {
  const lines = text.split("\n");
  // Only split if the content is significantly longer than maxLinesPerColumn
  // and would benefit from a two-column layout.
  if (lines.length <= maxLinesPerColumn * 1.2) {
    // e.g., don't split if only slightly over
    return [text];
  }
  // Simple split into two columns
  const midpoint = Math.ceil(lines.length / 2);
  const col1 = lines.slice(0, midpoint).join("\n");
  const col2 = lines.slice(midpoint).join("\n");
  return [col1, col2];
};

export default function CifraPage() {
  const MAX_LINES_PER_COLUMN = 30; // Adjust this based on desired column length

  const mainCifraColumns = splitTextIntoColumns(
    mainCifra,
    MAX_LINES_PER_COLUMN
  );
  const chordsColumns = splitTextIntoColumns(chords, MAX_LINES_PER_COLUMN);

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col">
      <Card className="flex-grow flex flex-col overflow-hidden">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col overflow-auto">
          {/* Main Cifra Section */}
          <div className="flex-shrink-0 basis-3/4 overflow-auto pb-4">
            <div
              className={`grid ${
                mainCifraColumns.length > 1 ? "md:grid-cols-2" : "grid-cols-1"
              } gap-x-8`}
            >
              {mainCifraColumns.map((columnText, index) => (
                <pre
                  key={`main-${index}`}
                  className="whitespace-pre-wrap font-mono text-sm mb-4"
                >
                  {columnText}
                </pre>
              ))}
            </div>
          </div>

          <hr className="my-4 flex-shrink-0" />

          {/* Chords Section */}
          <div className="flex-shrink-0 basis-1/4 overflow-auto pt-4">
            <div
              className={`grid ${
                chordsColumns.length > 1 ? "md:grid-cols-2" : "grid-cols-1"
              } gap-x-8`}
            >
              {chordsColumns.map((columnText, index) => (
                <pre
                  key={`chords-${index}`}
                  className="whitespace-pre-wrap font-mono text-sm"
                >
                  {columnText}
                </pre>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
