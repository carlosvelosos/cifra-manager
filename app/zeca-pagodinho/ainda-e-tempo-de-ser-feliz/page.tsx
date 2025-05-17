import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cifra = `Zeca Pagodinho - Ainda é tempo de ser feliz

[Intro] C7M  D/C  Bm9  E7(9-)
        Am7  D4(9)  G7M  Db7

[Solo]

C7M                   Cm6        Bm7    Dm6/F     E7(4)   E7
  Me cansei de ficar mudo sem tentar,       sem falar
C7M                    Cm6      B7(13)   B7(13-)   E7(9-)   E7
Mas não posso deixar tudo como está  Como está você?
                C7M                    Cm6
Tô vivendo por viver, tô cansada de chorar
                Bm7               E7(4)          E7
Não sei mais o que fazer, você tem que me ajudar
        C7M            Bm7    C7M     B7(13-)   Em7(9)
Tá difícil esquecer, impossível não lembrar vocêêê
    Dm7           G7(13)
E você como está?
               C#m7(5-)                   D/F#
Com o fim do nosso amor, eu também tô por aí
               Bm7              Bm7(5-)        E9-
Eu não sei pra onde vou, tantas noites sem dormir
     Am7      Bm7      C7M        D7(13)      G7M
Alivia minha dor, e me faça por favor   sorrir

[Refrão]

Dm7           G13      C7M    D/C            G7M  G9
Vem pros meus braços meu amor, meu acalanto
            C7M        D/C          Bm7(5-)  G7(9)
Leva esse pranto pra bem longe de nós dois
           C7M        D/C        Bm7(5-)       E7
Não deixe nada pra depois, é a saudade que me diz
            Am7       D7(9)     G7M       D9-
Que ainda é tempo pra viver feliz

----------------- Acordes -----------------
Am7 = 7 P5 5 5
B7(13) = 7 11 9 9
B7(13-) = 7 4 4 5
Bm7 = 4 2 3 4
Bm7(5-) = 3 2 0 0
Bm9 = 4 4 2 0
C#m7(5-) = 5 4 P2 2
C7M = 2 0 0 2
Cm6 = P2 2 4 5
D7(13) = 10 14 12 12
D7(9) = 4 5 5 7
Db7 = 3 4 2 3
Dm6/F = 0 2 0 3
Dm7 = 0 2 1 3
E7 = 2 1 0 0
E7(4) = 7 7 5 6
E7(9-) = 2 1 3 3
Em7(9) = 0 0 5 4
G13 = 5 4 3 2
G7(13) = 3 7 5 5
G7(9) = 5 2 0 3
G7M = 5 4 3 4
G9 = 0 2 0 0
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

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
