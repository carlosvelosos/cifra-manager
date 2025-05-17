import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cifra = `
Zeca Pagodinho - Faixa Amarela

[Intro]

[Intro] D  B7  Em  A7  D  A7

                 D  B7                Em7
Eu quero presentear a minha linda donzela
                  A7                       D
Não é prata nem é ouro, é uma coisa bem singela
        A7               D            B7          Em7
Vou comprar uma faixa amarela bordada com o nome dela
                  A7                  D
E vou mandar pendurar na entrada da favela

                   B7                Em7
Eu quero presentear a minha linda donzela
                  A7                       D
Não é prata nem é ouro, é uma coisa bem singela
        A7               D            B7          Em7
Vou comprar uma faixa amarela bordada com o nome dela
                  A7                  D
E vou mandar pendurar na entrada da favela

A7                     D  B7             Em7
Vou dá-lhe um gato angorá um cão e uma cadela
               A7                    D
Uma cortina grená para enfeitar a janela
      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

 A7               D  B7                Em7
E para o nosso papar vai ter bife de panela
                 A7                     D
Salada de petit-pois jiló, chuchu e bringela
      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

A7               D    B7               Em7
Vou fazer dela rainha do desfile da Portela
                     A7                  D
Eu vou ser filho do rei e ela minha cinderela
      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

A7               D  B7               Em7
Eu quero presentear a minha linda donzela
                  A7                       D
Não é prata nem é ouro, é uma coisa bem singela
        A7               D            B7         Em7
Vou comprar uma faixa amarela bordada com o nome dela
                  A7                  D
E vou mandar pendurar na entrada da favela

A7               D   B7                Em7
E pra gente se casar vou construir a capela
                      A7                         D
Dentro de um lindo jardim com flores, lago e pinguela
      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

A7             D   B7                 Em7
Mas se ela vacilar vou dar um castigo nela
                          A7                                     D
Vou lhe dar uma banda de frente quebrar cinco dentes e quatro costelas
    A7                     D          B7         Em7
Vou pegar a tal faixa amarela gravada com o nome dela
               A7                  D
E mandar incendiar na entrada da favela

    A7                     D          B7         Em7
Vou pegar a tal faixa amarela gravada com o nome dela
               A7                  D
E mandar incendiar na entrada da favela

A7                       D     B7                  Em7
Vou comprar uma cana bem forte para esquentar sua goela
                A7                      D
E fazer um tira-gosto com galinha à cabidela
      A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

 A7                  D            B7         Em7
Sem falar na tal faixa amarela bordada com o nome dela
                       A7                  D
Que eu vou mandar pendurar na entrada da favela

A7               D  B7                Em7
Eu quero presentear a minha linda donzela
                  A7                       D
Não é prata nem é ouro, é uma coisa bem singela
        A7               D            B7         Em7
Vou comprar uma faixa amarela bordada com o nome dela
                  A7                  D
E vou mandar pendurar na entrada da favela

----------------- Acordes -----------------
A7 = 2 0 2 2
B7 = 1 2 0 1
D = 4 2 3 4
Em = 5 4 5 5
Em7 = 2 0 0 0
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
