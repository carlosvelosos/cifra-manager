import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/turma-do-pagode/deixa-em-off/

const cifra = `Turma Do Pagode - Deixa Em Off

[Intro] <b>Bm7</b>  <b>G</b>  <b>Em7</b>  <b>A</b>  <b>F#7</b>

   <b>Bm7</b>                                 <b>G7M</b>
Eu sei, Que não era pra gente se envolver, Que não era pra gente se
      <b>Em7</b>
Encontrar
           <b>A7</b>          <b>F#7</b>
Mas esse amor bandido não posso evitar

<b>Bm7</b>                                       <b>G7M</b>
É coisa de pele, um lance criminoso, Um frio na barriga, arrepio no corpo
<b>Em7</b>                       <b>F#7</b>
  Longe do mundo inteiro, Amor do nosso jeito

<b>Bm7</b>                                       <b>G7M</b>
É coisa de pele, um lance criminoso, Um frio na barriga, arrepio no corpo
<b>Em7</b>                  <b>C#m7(5-)</b>         <b>F#7</b>
   Longe do mundo inteiro, Amor do nosso jeito

         <b>Bm7</b>                                       <b>G7M</b>
Deixa em off, Off, o nosso amor é mais gostoso em off
                       <b>Em7</b>             <b>A7</b>             <b>F#7</b>          <b>Bm7</b>
Proibido, escondido em off. Só eu e você perdido em Love deixa em off
                                     <b>G7M</b>
Off, o nosso amor é mais gostoso em off
                        <b>Em7</b>           <b>A7</b>              <b>F#7</b>
Proibido, escondido em off. Só eu e você perdido em Love deixa em off

<b>Bm7</b>                    <b>G7M</b>                            <b>Em7</b>
Aquele beijo, deixa em off, Aquele toque, deixa em off
         <b>Em7/D</b>               <b>A7</b>          <b>F#7</b>         <b>Bm7</b>
Aquela sensação, aquela atração, Eu e você é tudo off`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function DeixaEmOffPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/turma-do-pagode/deixa-em-off/"
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
