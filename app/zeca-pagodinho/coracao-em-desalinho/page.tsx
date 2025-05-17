import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cifra = `
Zeca Pagodinho - Coração em desalinho

[Intro] C  Dm7  Em7  A7  Dm7  G7  C  G7

 C           C5+   C6     C5+
Numa estrada dessa vida
C      A7          Dm  A7
Eu te conheci oh! flor
 Dm        A7  Dm    A7      Dm
Vinhas tão desiludida, mal sucedida
       G7     C       G7
Por um falso amor
 C     C5+ C6   C5+
Dei afeto e carinho
C      C7     F
Como retribuição
F#m7(5-)     B7    Em
Procuraste um outro ninho
         B/D#              Dm
Em desalinho ficou meu coração
A/C#                Dm G7  Em
Meu peito agora é só paixão
A7                Dm G7  C   Em  D#m
Meu peito agora é só paixão
Dm         G7
Tamanha desilusão
C
Me deste oh! flor
      Bm7(5-)  E7       A#6   A7
Me enganei..... redondamente
Dm         G7   G°      Am
Pensando em te fazer um bem
            D7
Eu me apaixonei
Dm7        G7         C    G7
Foi........meu........mal (e agora)

[Refrão]

C   F#m7(5-)         B7           Em
Agora, uma enorme paixão me devora
Em7(5-)         A7    A6  A7
Alegria partiu foi embora
Dm       G7  Em      A7
Não sei viver sem teu amor
D7               G7     C  G7
Sozinho, curto a minha dor

[Final]

D7               G7     C  G7 A7
Sozinho, curto a minha dor

----------------- Acordes -----------------
A#6 = P3 3 3 5
A/C# = 7 6 5 7
A6 = 2 2 2 4
A7 = 2 0 2 2
Am = 2 2 1 2
B7 = 1 2 0 1
Bm7(5-) = 3 2 0 0
C = 2 0 1 2
C5+ = 10 9 9 10
C6 = 2 2 1 2
C7 = 2 3 1 2
D#m = 4 3 4 4
D7 = 4 2 1 4
Dm = 3 2 3 3
Dm7 = 0 2 1 3
E7 = 2 1 0 0
Em = 5 4 5 5
Em7 = 2 0 0 0
Em7(5-) = 2 3 3 5
F = 3 2 1 3
F#m7(5-) = 4 5 5 7
G7 = P3 4 3 5
G° = 5 3 P2 2
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
