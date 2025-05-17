import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cifra = `
Zeca Pagodinho - Pago pra Ver

(intro) Dm  Bº  Em5-/7  Gm6  Dm  A5+7

      Dm               Dm5+           Dm
Pago pra ver.....você rogar a minha volta
E      A7      Dm                   A7      A/C#
...Minha revolta.....tá na sua ingratidão
      Em5-/7             Gm6           A7
Quem deu amor, que se entregou.....não merecia
    Em5-/7           A7       Dm
Uma partida.....sem deixar explicação

  E   A7      Bº        A7/9-           Dm
.....Quando você chegou pra mim.....foi tanta jura
       Am5-/7    D7         Gm
Tanta promessa desse amor jamais ter fim
   Em5-/7                Dm
Agora vejo...foi somente o desejo
             Em5-/7(A7)     Eb7         ( C7  B7 )
Simplesmente um ensejo......pra mais uma curtição

         Gm                       Dm
Enquanto eu, que apostei todas as cartas
           Em5-/7              A7        Dm       (Para tudo)
Nesse amor que me descarta.....só a dor, desilusão

    A7                            Dm      ( A7  Dm )
Vou refazer minha vida....mudar o meu telefone
    Eb7       D7          Gm
Cicatrizar a ferida.....tirar o seu sobrenome

    Gm6                                   Dm/F      Dm
O que restou de nós dois....vou apagar da lembrança
      Em5-/7      A5+7         Dm
E não vou mais me entregar.....feito criança

            A7                     Dm      ( A7  Dm )
Vou refazer minha vida....mudar o meu telefone
    Am5-/7         D7           Gm
Cicatrizar a ferida.....tirar o seu sobrenome

     Gm6                                  Dm/F     Dm
O que restou de nós dois....vou apagar da lembrança
      Em5-/7      A5+7       Dm
E não vou mais me entregar.....feito criança

----------------- Acordes -----------------
A/C# = 7 6 5 7
A5+7 = 5 2 2 3
A7 = 2 0 2 2
A7/9- = 7 6 8 8
Am5-/7 = 7 6 4 5
B7 = 1 2 0 1
Bº = 0 1 0 3
C7 = 2 3 1 2
D7 = 4 2 1 4
Dm = 3 2 3 3
Dm/F = 12 10 10 12
Dm5+ = P3 3 3 3
E = 2 1 0 2
Eb7 = 5 3 2 5
Em5-/7 = 2 3 3 2
Gm = 5 3 3 5
Gm6 = 0 0 0 2
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
