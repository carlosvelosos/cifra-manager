import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/murilo-huff/cep-novo-part-gusttavo-lima/

const cifra = `Murilo Huff - Cep Novo (part. Gusttavo Lima)

<b>E</b>
Troquei de número
 <b>G#m</b>
Mas não esqueço o seu
 <b>C#m</b>
Um desvio, uns 5km pra

Não passar aí na frente, mas
 <b>A</b>
O meu coração faz uma rota diferente

                       <b>E</b>
Que passa pelo teu sorriso
                    <b>G#m</b>
Que acelera no seu corpo
                 <b>C#m</b>
Que caminho perigoso
                           <b>A</b>
O meu coração não topa ter um CEP novo

                     <b>E</b>
Eu só não mudo de cidade
                    <b>G#m</b>
Por que minha vida toda tá aqui
                           <b>C#m</b>
Como é que eu vou seguir viagem

Se a dona da minha saudade
                  <b>A</b>
Cancelou meu direito de ir e vir

                     <b>E</b>
Eu só não mudo de cidade
                    <b>G#m</b>
Por que minha vida toda tá aqui
                           <b>C#m</b>
Como é que eu vou seguir viagem

Se a dona da minha saudade
                  <b>A</b>
Cancelou meu direito de ir e vir

                       <b>E</b>
Que passa pelo teu sorriso
                    <b>G#m</b>
Que acelera no seu corpo
                 <b>C#m</b>
Que caminho perigoso
                           <b>A</b>
O meu coração não topa ter um CEP novo

                     <b>E</b>
Eu só não mudo de cidade
                    <b>G#m</b>
Por que minha vida toda tá aqui
                           <b>C#m</b>
Como é que eu vou seguir viagem

Se a dona da minha saudade
                  <b>A</b>
Cancelou meu direito de ir e vir

                     <b>E</b>
Eu só não mudo de cidade
                    <b>G#m</b>
Por que minha vida toda tá aqui
                           <b>C#m</b>
Como é que eu vou seguir viagem

Se a dona da minha saudade
                  <b>A</b>
Cancelou meu direito de ir e vir

 <b>E</b>
Troquei de número

----------------- Acordes -----------------
A = X 0 2 2 2 0
C#m = X 4 6 6 5 4
E = 0 2 2 1 0 0
G#m = 4 6 6 4 4 4`;

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
