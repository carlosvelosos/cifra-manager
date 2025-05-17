import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cifra = `
Zeca Pagodinho - Camarão que dorme a onda Leva

F               C7           F
Não pense que meu coração é de papel
    F7                      A#
Não brinque com o meu interior
A#            C7           F           
Camarão que dorme a onda leva                  
    D7          Gm      C7        F    F7
Hoje é o dia da caça, amanhã do caçador       

     F               Gm         Am
Não quero que nosso amor acabe assim
       Gm                       C7    Cm  F7
Um coração quando ama é sempre amigo
        A#          C7       F
Só não faça gato e sapato de mi__im            
      Dm           Gm         C7         F7
Pois aquele que dá pão, também dá castigo      
    F                C7
Não pense que meu coração

F               C7           F
Não pense que meu coração é de papel
    F7                      A#
Não brinque com o meu interior
A#          C7           F   
Camarão que dorme a onda leva                    
    D7          Gm      C7        F   F7
Hoje é dia da caça, amanhã do caçador            

     F               Gm         Am
Não veja meu sentimento com desde__ém
       Gm                       C7   Cm  F7
Enquanto o bem existir o mal tem cura
        A#          C7       F
A pedra é muito forte mas tem um porém, meu bem   
      Dm           Gm         C7  F7
A água tanto bate até que fura                   
    F                C7
Não pense que meu coração

F               C7           F
Não pense que meu coração é de papel
    F7                      A#
Não brinque com o meu interior
A#           C7           F
Camarão que dorme a onda leva                    
    D7          Gm      C7        F   F7
Hoje é dia da caça, amanhã do caçador             

    D7          Gm      C7        F   
Hoje é dia da caça, amanhã do caçador                   
    F                C7
Não pense que meu coração

----------------- Acordes -----------------
C7 = 2 3 1 2
Cm = 1 0 1 1
D7 = 4 2 1 4
Dm = 3 2 3 3
F = 3 2 1 3
F7 = 3 2 P1 1
Gm = 5 3 3 5
Am = 2 2 1 2
A# = P3 3 3 3
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
