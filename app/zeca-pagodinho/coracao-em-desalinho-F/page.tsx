import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cifra = `
Zeca Pagodinho - Coração em desalinho

[Intro] F  Gm7  Am7  D7  Gm7  C7  F  C7

 F           F5+   F6     F5+
Numa estrada dessa vida
F      D7          Gm  D7
Eu te conheci oh! flor
 Gm        D7  Gm    D7      Gm
Vinhas tão desiludida, mal sucedida
       C7     F       C7
Por um falso amor
 F     F5+ F6   F5+
Dei afeto e carinho
F      F7     A#
Como retribuição
Bm7(5-)     E7    Am
Procuraste um outro ninho
         E/G#              Gm
Em desalinho ficou meu coração
D/F#                Gm C7  Am
Meu peito agora é só paixão
D7                Gm C7  F   Am  G#m
Meu peito agora é só paixão
Gm         C7
Tamanha desilusão
F
Me deste oh! flor
      Em7(5-)  A7       D#6   D7
Me enganei..... redondamente
Gm         C7   C°      Dm
Pensando em te fazer um bem
            G7
Eu me apaixonei
Gm7        C7         F    C7
Foi........meu........mal (e agora)

[Refrão]

F   Bm7(5-)         E7           Am
Agora, uma enorme paixão me devora
Am7(5-)         D7    D6  D7
Alegria partiu foi embora
Gm       C7  Am      D7
Não sei viver sem teu amor
G7               C7     F  C7
Sozinho, curto a minha dor

[Final]

G7               C7     F  C7 D7
Sozinho, curto a minha dor

----------------- Acordes -----------------
D#6 = 4 3 P1 1
D6 = 3 2 0 0
D7 = 4 2 1 4
Dm = 3 2 3 3
E7 = 2 1 0 0
Em7(5-) = 2 3 3 5
F = 3 2 1 3
F5+ = 3 2 2 3
F6 = 3 2 1 0
F7 = 3 2 P1 1
G#m = 6 4 4 6
G7 = P3 4 3 5
Gm = 5 3 3 5
Gm7 = 5 P3 3 3
A7 = 2 0 2 2
Am = 2 2 1 2
Am7 = 7 P5 5 5
Am7(5-) = P1 2 1 1
A# = P3 3 3 3
Bm7(5-) = 3 2 0 0
C7 = 2 3 1 2
C° = 4 2 P1 1
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
