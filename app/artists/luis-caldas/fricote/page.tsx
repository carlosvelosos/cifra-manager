import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/luis-caldas/fricote/#

const cifra = `Luis Caldas - Fricote

[Intro] <b>Cm</b>  <b>Bb</b>

<b>Cm</b>                <b>Bb</b>
Nega do cabelo duro
                     <b>Cm</b>
Que não gosta de pentear
 <b>D#</b>                      <b>Bb</b>
Quando passa na baixa do tubo
                     <b>Cm</b>
O negão começa a gritar 2x
<b>D#</b>
Pega ela aí
           <b>Bb</b>
Pega ela aí
      <b>Gm</b>
Pra que ?
                <b>Cm</b>
Pra passar batom
<b>D#</b>
De que cor?
          <b>Bb</b>
De violeta
   <b>Gm</b>                <b>Cm</b>
Na boca e na bochecha
<b>D#</b>
Pega ela aí
          <b>Bb</b>
Pega ela aí

Pra que?
               <b>Cm</b>
Pra passar batom
<b>D#</b>
De que cor?
          <b>Bb</b>
De cor azul
  <b>Gm</b>                     <b>Cm</b>
Na boca e na porta do céu`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function FricotePage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/luis-caldas/fricote/#"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
      />
      <FloatingMenu />
    </>
  );
}
