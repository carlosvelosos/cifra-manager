import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/almir-guineto/insensato-destino/#

const cifra = `Almir Guineto - Insensato Destino

[Intro] <b>G</b>  <b>F#m7(5-)</b>  <b>B7</b>  <b>Em</b>  <b>A7</b>  <b>Am7</b>  <b>D7</b>

<b>G</b>             <b>F#m7(5-)</b>       <b>B7</b>
Óh insensato destino pra que
<b>Em</b>                     <b>Dm</b>        <b>G7(9/13)</b>
    Tanta desilusão no meu viver
<b>C</b>           <b>D/C</b>          <b>Bm</b>
  Eu quero apenas ser feliz
             <b>E7</b>
Ao menos uma vez
   <b>A7(9)</b>         <b>Cm6</b>          <b>D7</b>  <b>G7</b>
E conseguir o acalanto da paixão
<b>C</b>            <b>D/C</b>       <b>Bm</b>
  Fui desprezado e magoado
        <b>E7</b>         <b>Am</b>  <b>D7</b>         <b>Dm</b>  <b>G7</b>
Por alguém que abordou    meu coração
<b>C</b>           <b>D/C</b>        <b>Bm</b>
  Fui desprezado e magoado
        <b>E7</b>         <b>Am</b>  <b>D7</b>          <b>G</b>  <b>D7</b>
Por alguém que abordou    meu coração
    <b>Gm</b>                 <b>Cm9</b>
Destino porque fazes assim
               <b>F7</b>
Tenha pena de mim
               <b>Bb7M</b>        <b>Bb6</b>
Veja bem não mereço sofrer
                 <b>Am</b>       <b>D7</b>
Quero apenas um dia poder
                  <b>Gm</b>        <b>Gm7/F</b>
Viver num mar de felicidade
                  <b>A7</b>  <b>D7</b>     <b>G</b>   <b>Em</b>  <b>Am</b>  <b>D7</b>
Com alguém que me ame de verdade`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function InsensatoDestinoPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/almir-guineto/insensato-destino/#"
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
