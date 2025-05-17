import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cifra = `
Zeca Pagodinho - O Dono da Dor


 G           Bm
Queria a felicidade
C           Bm
Não pra me apaixonar
    E7               Am       D7     G    D7
Por medo desse amor bonito me fazer chorar
G             C           G  C
  Que fazer com meu coração
G        C                 Bm    G7
  Paixão chegou sem dizer nada
C                    Bm       G7
  E ensinou pro meu viver
C                D7              G
  Que o dono da dor sabe quanto dói
           Am           G
Tem jeito não, o peito rói
          D7          G
E só quem amou pode entender
          Am7      G
O poder de fogo da paixão
   D7
Porque
G             Bm
A realidade é dura
C                G
Mas é aí que se cura
   Em           Am7    D7         G   D7
Ninguém pode imaginar o que não viveu
   G         Bm
Queria felicidade
C             G
Não pra me apaixonar
    G#o               D7              G    Am7
Por medo desse amor bonito me fazer chorar
       G               Am
Eu não sabia, óh! Senhor
           Bm7           E7
Das artimanhas do amor
Am7           D7       G  Am
Caí nas garras da sedução
   G             Am
Tá doendo demais
        Bm7         E7
Mexendo com minha paz
   Am         D7     G     D7
Amarga e doce tentação

----------------- Acordes -----------------
Am = 2 2 1 2
Am7 = 7 P5 5 5
Bm = 4 4 3 4
Bm7 = 4 2 3 4
C = 2 0 1 2
D7 = 4 2 1 4
E7 = 2 1 0 0
Em = 5 4 5 5
G = 5 4 3 5
G7 = P3 4 3 5
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
