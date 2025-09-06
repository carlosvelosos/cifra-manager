import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Murilo Huff - Cep Novo (part. Gusttavo Lima)

   E
Troquei de número
 G#m
Mas não esqueço o seu
 C#m
Um desvio, uns 5km pra

Não passar aí na frente, mas
 A
O meu coração faz uma rota diferente

                       E
Que passa pelo teu sorriso
                    G#m
Que acelera no seu corpo
                 C#m
Que caminho perigoso
                           A
O meu coração não topa ter um CEP novo

                     E
Eu só não mudo de cidade
                    G#m
Por que minha vida toda tá aqui
                           C#m
Como é que eu vou seguir viagem

Se a dona da minha saudade
                  A
Cancelou meu direito de ir e vir

                     E
Eu só não mudo de cidade
                    G#m
Por que minha vida toda tá aqui
                           C#m
Como é que eu vou seguir viagem

Se a dona da minha saudade
                  A
Cancelou meu direito de ir e vir

                       E
Que passa pelo teu sorriso
                    G#m
Que acelera no seu corpo
                 C#m
Que caminho perigoso
                           A
O meu coração não topa ter um CEP novo

                     E
Eu só não mudo de cidade
                    G#m
Por que minha vida toda tá aqui
                           C#m
Como é que eu vou seguir viagem

Se a dona da minha saudade
                  A
Cancelou meu direito de ir e vir

                     E
Eu só não mudo de cidade
                    G#m
Por que minha vida toda tá aqui
                           C#m
Como é que eu vou seguir viagem

Se a dona da minha saudade
                  A
Cancelou meu direito de ir e vir

 E
Troquei de número

----------------- Acordes -----------------
A = X 0 2 2 2 0
C#m = X 4 6 6 5 4
E = 0 2 2 1 0 0
G#m = 4 6 6 4 4 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CepNovoPartGusttavoLimaPage() {
  return (
    <>
      <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
