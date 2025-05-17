import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cifra = `
Zeca Pagodinho - Verdade

F               Gm7      Am7 Gm7
Descobri que te amo demais
 F            Gm7        Am7   F/D#
Descobri em você minha paz
Bb/D            C/E       F  
Descobri sem querer a vida
   Dm   C7
Verdade
F               Bb          F     
Pra ganhar seu amor fiz mandinga
F                  Bb       F   
Fui a ginga de um bom capoeira
C/E               Bb/D     F
Dei rasteira na sua emoção
 Dm7           G7         C7
Com o seu coração fiz zoeira
F                  Bb      F   
Fui a beira de um rio e você
F              Bb            F 
Uma ceia com pão vinho e flor
 C            Bb           F 
Uma luz para guiar sua estrada
G7(9)         C7           F
A entrega perfeita do amor
     C7
Verdade
F               Gm7      Am7 Gm7
Descobri que te amo demais
 F            Gm7        Am7   F/D#
Descobri em você minha paz
Bb/D            C7       F  
Descobri sem querer a vida
   Dm   C7
Verdade
 F            Gm7     Am7     Gm7
Como negar essa linda emoção
 F           Gm7             Am7  F/D#
Que tanto bem fez pro meu coração
     Bb      Bb/C       F/A  Gm7  C7
E a minha paixão adormecida
F             Bb        F       
Teu amor meu amor incendeia
F            Bb       F    
Nossa cama parece uma teia
C            Bb            F    Dm
Teu olhar uma luz que clareia
G7                         C7
Meu caminho tal qual lua cheia
F             Bb           F   
Eu nem posso pensar te perder
F              Bb          F   
Ai de mim esse amor terminar
 C              Bb      F  
Sem você minha felicidade
  G7(9)       C7        F
Morreria de tanto penar
     C7
Verdade
F               Gm7      Am7 Gm7
Descobri que te amo demais
 F            Gm7        Am7   F/D#
Descobri em você minha paz
Bb/D            C7        F  
Descobri sem querer a vida
   Dm   C7
Verdade

----------------- Acordes -----------------
Am7 = 7 P5 5 5
Bb = P3 3 3 3
C = 2 0 1 2
C7 = 2 3 1 2
Dm = 3 2 3 3
Dm7 = 0 2 1 3
F = 3 2 1 3
G7 = P3 4 3 5
G7(9) = 5 2 0 3
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
