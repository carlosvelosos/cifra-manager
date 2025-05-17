import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cifra = `
Zeca Pagodinho - Maneiras

[Intro] Am  F#m7  Em  F  Em  A7

[Primeira Parte]

 Em7                        B7
Se eu quiser fumar eu fumo      se eu quiser beber eu bebo
 Bm7(5-)          E7          Am     Am/G
Pago tudo que consumo com o suor do meu emprego
 F#m7(5-)          B7(9-)       Em7            Em/D
Confusão eu não arrumo, mas também não peço arrego
F#7                   B7
Eu um dia me aprumo, tenho fé no meu apego

Em7                       B7
Eu só posso ter chamego, com quem me faz cafuné
 Bm7(5-)               E7       Am     Am/G
Como o vampiro e o morcego é o homem e a mulher
F#m7(5-)           B7(9-)         Em           Em/D
O meu linguajar é nato, eu não estou falando grego
          F#7                     F#m7(5-)          B7
Eu tenho amores e amigos de fato, nos lugares onde chego

Em7                     B7
Eu estou descontraído,     não que eu tivesse bebido
 Bm7(5-)              E7         Am            Am/G
Nem que eu tivesse fumado pra falar da vida alheia
 F#m7(5-)        B7(9-)    Em                 Em/D
Mas digo sinceramente, na vida, a coisa mais feia
   F#m7(5-)          B7                Em  E7
É gente que vive chorando de barriga cheia

[Refrão]

    Am                                 Em  Em/D
É gente que vive chorando de barriga cheia
    F#m7(5-)         B7                Em
É gente que vive chorando de barriga cheia

----------------- Acordes -----------------
A7 = 2 0 2 2
Am = 2 2 1 2
Am/G = P5 5 5 7
B7 = 1 2 0 1
B7(9-) = 1 2 1 4
Bm7(5-) = 3 2 0 0
E7 = 2 1 0 0
Em = 5 4 5 5
Em/D = 0 0 0 2
Em7 = 2 0 0 0
F = 3 2 1 3
F#7 = 4 3 P2 2
F#m7 = 4 P2 2 2
F#m7(5-) = 4 5 5 7
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
