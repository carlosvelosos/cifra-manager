import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/so-pra-contrariar/meu-jeito-de-ser/#

const cifra = `So Pra Contrariar - Meu Jeito De Ser

<b>G7M</b>     <b>Bm7</b>
Era só dizer pra mim
<b>Em7</b>           <b>Bm7</b>
  Que não sentia mais
<b>C7M</b>            <b>G/B</b>
 Que tudo se acabou
 <b>A7</b>                  <b>D7(9/11)</b>
Como um vento forte que passou

<b>G7M</b>         <b>Bm7</b>
Eu te amei e hoje eu sofro
<b>Em7</b>             <b>Bm7</b>
  Mas eu sei o meu lugar
<b>C7M</b>           <b>G/B</b>
 Me perdoa coração
 <b>A7</b>                   <b>D7(9/11)</b>
Por tão fácil assim me entregar
<b>G7M</b>             <b>Bm7</b>
Você levou o meu amor
<b>C7M</b>        <b>Cm6</b>         <b>G7M</b>
 E de você nada restou
         <b>Bm7</b>     <b>C7M</b>
Eu posso te dizer
           <b>Cm6</b>
Que neste mundo

       <b>G7M</b>
O meu jeito de ser
<b>Bm7</b>
Era você
 <b>C7M</b>
Era te amar
    <b>D7(9/11)</b>
Não era sofrer`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function MeuJeitoDeSerPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/so-pra-contrariar/meu-jeito-de-ser/#"
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
