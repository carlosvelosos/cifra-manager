import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cifra = `
Zeca Pagodinho - Quem é Ela?

[Intro]  G  D7

      G                E7         Am
Quem é ela que vai todo dia na Capela
                     D7                            G  D7
Fazer oração acender vela, dizem que ela zela por mim
      G                   E7        Am
Me contaram que a menina moça é donzela
                          D7                            G G7
Mas quando ela está na janela, sempre joga beijos pra mim

        C#m7(5-)             F#7       Bm7(5-)
Me contaram que ela tem por mim um chamego
           E7          Am               D7       G  G7
Que todo lugar onde eu chego, depois ela chega também
     C#m7(5-)                 F#7        Bm7(5-)
E me olha com jeito de quem quer carinho
           E7      Am                D7           G
Eu fico pensando sozinho, será que ela quer ser meu bem

               E7        Am                D7            G
Se eu vou na Mangueira ela vai, se vou na Portela ela está
             E7          Am               D7        G
Ela vai no Cacique de Ramos, ela vai no Estácio de Sá
             E7          Am              D7         G
Ela vai no pagode em Xerém, ela vai no pagode em Irajá

          C#m7(5-)                 F#7 Bm7(5-)
Qualquer dia me invoco e tomo coragem
           E7         Am              D7     G  G7
E rezo em frente a imagem do bom Jesus de Nazaré
      C#m7(5b)                  F#7        Bm7(5-)
Meu Senhor por favor vem ouvir minha prece
             E7         Am           D7           G
Pois só tem a paz quem merece, só tem amor quem tem fé

      D7
Quem é ela

----------------- Acordes -----------------
Am = 2 2 1 2
Bm7(5-) = 3 2 0 0
C#m7(5-) = 5 4 P2 2
C#m7(5b) = 3 4 2 5
D7 = 4 2 1 4
E7 = 2 1 0 0
F#7 = 4 3 P2 2
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
