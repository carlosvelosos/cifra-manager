import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/almir-guineto/conselho/#

const cifra = `Almir Guineto - Conselho

          <b>G</b>
Deixe de lado esse baixo astral
         <b>Bm</b>
Erga a cabeça enfrente o mal
             <b>Dm</b>        <b>G7</b>              <b>C</b>
Que agindo assim será vital para o seu coração

          <b>Cm</b>                    <b>Bm</b>     <b>F7</b>   <b>E7</b>
É que em cada experiência se aprende uma lição
         <b>A7</b>
Eu já sofri por amar assim
        <b>Am</b>                  <b>D7</b>
Me dediquei mas foi tudo em vão

     <b>G</b>       <b>Bm</b>
Pra que se lamentar
           <b>Dm</b>   <b>G7</b>         <b>C</b>
Se em sua vida pode encontrar
        <b>Cm</b>            <b>Bm7</b>  <b>F7</b>     <b>E7</b>
Quem te ame com toda força e ardor
<b>A7</b>         <b>Cm6</b>   <b>D7</b>     <b>G</b>      <b>D7</b>
Assim sucumbirá a dor  (tem que lutar)

           <b>G</b>
Tem que lutar
          <b>Bm</b>
Não se abater
  <b>Dm</b>      <b>G7</b>
Só se entregar
           <b>C</b>
A quem te merecer

      <b>Cm</b>
Não estou dando nem vendendo
  <b>Bm</b>    <b>F7</b>     <b>E7</b>
É como o ditado diz
         <b>Am</b>              <b>D7</b>     <b>G</b>
O meu conselho é pra te ver feliz`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function ConselhoPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/almir-guineto/conselho/#"
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
