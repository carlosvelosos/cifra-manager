import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/fundo-de-quintal/lucidez/#

const cifra = `Fundo De Quintal - Lucidez

<b>E</b>     <b>F#/E</b>
...     Ueraia
 <b>Am/E</b>           <b>E</b>
Ueraraue... ueraia
 <b>E</b>
Por favor
             <b>F#/E</b>
Não me olhe assim
  <b>Am/E</b>
Se não for
           <b>E</b>
Vou viver só para mim

Aliás
            <b>F#/E</b>
Se isto aconteceu
<b>Am/E</b>
Tanto faz
            <b>E</b>
Já me fiz por merecer
               <b>F#/E</b>
Mas cuidado não vá se entregar
              <b>Am/E</b>           <b>B7</b>
Nosso caso não pode vazar
                 <b>E</b>
É tão bom se querer
     <b>G#7</b>        <b>A</b>           <b>Am7</b>  <b>D7(9)</b>
Sem saber como vai ter..mi..nar
<b>G#m7</b>     <b>C#7</b> <b>F#m</b>
Onde a lucidez se aninhar
<b>Am7</b>        <b>D7(9)</b>
Pode deixar
<b>G#m7</b>      <b>C#7</b>  <b>F#m</b>
Quando a solidão apertar
<b>Am7</b>          <b>D7(9)</b>
Olhe pro lado
<b>G#m7</b>       <b>C#7</b>   <b>C7</b>
Olhe pro lado
 <b>B7</b>
Que eu estarei por
   <b>E</b>                      <b>F#/E</b>
Láláiááááááá láláiáláááiáááááá
 <b>Am/E</b>                  <b>E</b>
Láláiááááááá  Láláiáláláláiáááááááá`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function LucidezPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/fundo-de-quintal/lucidez/#"
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
