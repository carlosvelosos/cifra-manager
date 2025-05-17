import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cifra = `
Zeca Pagodinho - Camarão que dorme a onda Leva

D               A7           D
Não pense que meu coração é de papel
    D7                      G
Não brinque com o meu interior
G             A7           D           
Camarão que dorme a onda leva                  
    B7          Em      A7        D    D7
Hoje é o dia da caça, amanhã do caçador       

     D               Em         F#m
Não quero que nosso amor acabe assim
       Em                       A7    Am  D7
Um coração quando ama é sempre amigo
        G           A7       D
Só não faça gato e sapato de mi__im            
      Bm           Em         A7         D7
Pois aquele que dá pão, também dá castigo      
    D                A7
Não pense que meu coração

D               A7           D
Não pense que meu coração é de papel
    D7                      G
Não brinque com o meu interior
G           A7           D   
Camarão que dorme a onda leva                    
    B7          Em      A7        D   D7
Hoje é dia da caça, amanhã do caçador            

     D               Em         F#m
Não veja meu sentimento com desde__ém
       Em                       A7   Am  D7
Enquanto o bem existir o mal tem cura
        G           A7       D
A pedra é muito forte mas tem um porém, meu bem   
      Bm           Em         A7  D7
A água tanto bate até que fura                   
    D                A7
Não pense que meu coração

D               A7           D
Não pense que meu coração é de papel
    D7                      G
Não brinque com o meu interior
G            A7           D
Camarão que dorme a onda leva                    
    B7          Em      A7        D   D7
Hoje é dia da caça, amanhã do caçador             

    B7          Em      A7        D   
Hoje é dia da caça, amanhã do caçador                   
    D                A7
Não pense que meu coração

----------------- Acordes -----------------
A7 = 2 0 2 2
Am = 2 2 1 2
B7 = 1 2 0 1
Bm = 4 4 3 4
D = 4 2 3 4
D7 = 4 2 1 4
Em = 5 4 5 5
F#m = 4 2 2 4
G = 5 4 3 5
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
