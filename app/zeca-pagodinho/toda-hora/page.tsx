import CifraDisplay from "@/components/cifra-display";

const cifra = `
Zeca Pagodinho - Toda Hora

      A7
Toda hora
      Dm           A7            Dm    D7
Toda hora alguém me chama pra beber
     Gm              D/A         Bb6
Toda hora alguém me chama pra zoar
    C7                          F  Dm
Porque ninguém me chama pra benzer
      Bb           Bb/G#           A7
Porque ninguém me chama pra rezar

Dm              A7           Dm      D7
Só vou pra batizado quando é samba
           Gm    D/A      Bb6
Compadre meu precisa batucar
C7                           F    Dm
Eu sou da saideira que descamba
Bb              Bb/G#          A7
Aqui não tem hora pra acabar

Refrão
   Dm           A7          Dm
Amigo eu nunca fiz bebendo leite
  C           C7            F   D7
Amigo eu não criei bebendo chá
 Gm         G#º             Dm    F7
Eu sou da madrugada, me respeite
    Bb6        A7         Dm   A7
Eu sei a hora de ir trabalhar

           Dm        A7             Dm    D7
Não sou sujeito de ficar enchendo a cara
          Gm       D/A            Bb6
Quem escâncara não vê o mundo girar
           C7                  F   Dm
Pra ficar bom, é melhor tomar remédio
     Bb             Bb/G#           A7
O meu tédio é quando vem fechar o bar

            Dm    A7           Dm    D7
Também não vou ficar levando bronca
          Gm           D/A            Bb6
Feche a conta, hoje eu preciso pendurar
        C7                      F   Dm
Já calibrei, já tirei a minha onda
Bb            Bb/G#           A7
Ainda tenho casa pra cuidar

----------------- Acordes -----------------
A7 = 2 0 2 2
Bb = P3 3 3 3
Bb6 = P3 3 3 5
C = 2 0 1 2
C7 = 2 3 1 2
D7 = 4 2 1 4
Dm = 3 2 3 3
F = 3 2 1 3
F7 = 3 2 P1 1
G#º = 6 4 P3 3
Gm = 5 3 3 5
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
