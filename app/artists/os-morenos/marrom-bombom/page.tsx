import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/os-morenos/marrom-bombom/#

const cifra = `Os Morenos - Marrom Bombom

[Intro] <b>G7M</b>  <b>Bm7</b>  <b>Am7</b>  <b>D7</b>  
        <b>G7M</b>  <b>Bm7</b>  <b>Am7</b>  <b>D7</b>

 <b>G7M</b>           <b>Bm7</b>               <b>Am7</b>
   A gente tem tudo pra dar certo
<b>D7</b>
Fica comigo
<b>G7M</b>             <b>Bm7</b>               <b>Am7</b>
   Com você por perto tudo é tão bonito
<b>D7</b>
Fica comigo

<b>G7M</b>            <b>Bm7</b>                   <b>Am7</b>
   Na beira da praia de frente pro mar
<b>D7</b>
Fica comigo
<b>G7M</b>           <b>Bm7</b>                <b>Am7</b>
   Menina é gostoso demais te amar
<b>D7(9)</b>
Eu te preciso

<b>G7M</b>                        <b>Bm7</b>
Tira a calça jeans, bota o fio dental
  <b>Am7</b>         <b>D7</b>
Morena você é tão sensual
<b>G7M</b>                        <b>Bm7</b>
Tira a calça jeans, bota o fio dental
  <b>Am7</b>         <b>D7</b>       <b>Eb°</b>
Morena você é tão sensual

<b>Em</b>    <b>Bm7</b>        <b>Am7</b>
   Na areia nosso amor
    <b>D7</b>      <b>Eb°</b>    <b>Em</b>
No rádio o nosso som
      <b>Bm7</b>      <b>C7M</b> <b>Bm7</b>
Tem magia nossa cor
<b>Am7</b>   <b>D7</b>      <b>G7M</b>
Nossa cor marrom

          <b>Bm7</b>           <b>Am7</b>
Marrom bombom, marrom bombom
<b>D7</b>           <b>G7M</b>
Nossa cor marrom`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function MarromBombomPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/os-morenos/marrom-bombom/#"
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
