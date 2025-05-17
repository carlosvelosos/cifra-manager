import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cifra = `
Zeca Pagodinho - Não sou mais disso

[Intro] Bb  Gm7  C7/9  F7
        Bb  G7  C7/9  F7/9  Bb

                  G7       Cm7
Eu não sei se ela fez feitiço
              F7       Bb6
Macumba ou coisa assim
                    G7         Cm7
Eu só sei que estou bem com ela
             F7       Bb
E a vida é melhor pra mim
                 G7      C7/9
Eu deixei de ser pé-de-cana
                 F7       Bb
Eu deixei de ser vagabundo
               G7        C7/9
Aumentei minha fé em Cristo
                     F7    Bb
Sou bem-quisto por todo mundo

         Cm7
Na hora de trabalhar
F7      Bb
Levanto sem reclamar
Eb7M            Am7/5-
E antes que o galo cantar
D7(b9)   Gm  Gm7
Já vou
        Cm/Eb
À noite volto pro lar
F7          Bb         Eb7M
Pra tomar banho e jantar
       Am7/5-
Só uma no bar
D7(b13)    Gm Gm Gb7 F7
Bastou
   Bb                                 C7/9
Provei pra você que eu não sou mais disso
    Cm7              F7         Bb
Não perco mais o meu compromisso
    Bb7M      Bb6           C7/9
Não perco mais uma noite à toa
       F7                       Bb
Não traio e nem troco a minha patroa

----------------- Acordes -----------------
Am7/5- = 7 6 4 5
Bb = P3 3 3 3
Bb6 = P3 3 3 5
Bb7M = 3 2 3 3
C7/9 = 2 3 3 5
Cm/Eb = 1 0 1 1
Cm7 = 5 3 4 5
D7(b13) = 10 11 11 12
D7(b9) = 4 5 4 7
Eb7M = 1 3 3 5
F7 = 3 2 P1 1
F7/9 = 3 2 4 5
G7 = P3 4 3 5
Gb7 = 4 3 P2 2
Gm = 5 3 3 5
Gm7 = 5 P3 3 3
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
  const numberOfLines = lines.length;

  if (numberOfLines <= maxLinesPerColumn * 1.2) {
    return [text];
  } else if (numberOfLines <= maxLinesPerColumn * 2.2) {
    const midpoint = Math.ceil(numberOfLines / 2);
    const col1 = lines.slice(0, midpoint).join("\n");
    const col2 = lines.slice(midpoint).join("\n");
    return [col1, col2];
  } else {
    const linesPerCol = Math.ceil(numberOfLines / 3);
    const col1 = lines.slice(0, linesPerCol).join("\n");
    const col2 = lines.slice(linesPerCol, 2 * linesPerCol).join("\n");
    const col3 = lines.slice(2 * linesPerCol).join("\n");
    return [col1, col2, col3];
  }
};

export default function CifraPage() {
  const MAX_LINES_PER_COLUMN = 30; // Adjust this based on desired column length

  const mainCifraColumns = splitTextIntoColumns(
    mainCifra,
    MAX_LINES_PER_COLUMN
  );
  const chordsColumns = splitTextIntoColumns(chords, MAX_LINES_PER_COLUMN);

  const getGridColsClass = (columnsLength: number): string => {
    if (columnsLength === 3) {
      return "md:grid-cols-3";
    }
    if (columnsLength === 2) {
      return "md:grid-cols-2";
    }
    return "grid-cols-1";
  };

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
              className={`grid ${getGridColsClass(
                mainCifraColumns.length
              )} gap-x-8`}
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
              className={`grid ${getGridColsClass(
                chordsColumns.length
              )} gap-x-8`}
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
