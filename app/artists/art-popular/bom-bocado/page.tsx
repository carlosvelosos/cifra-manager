import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/art-popular/bom-bocado/

const cifra = `Art Popular - Bom Bocado

De:leandro Lehart


[Intro] ( <b>Gm</b>  <b>D7</b> )

 ( <b>Gm</b>  <b>D7</b> )
Ai ai ai ai, ai ai ai ai, Ôh, ôh, ôh ôh
Ai ai ai ai, ai ai ai ai, ai, ai, ai ai

<b>Gm</b>                            <b>Cm</b>
Como um bom-bocado pra te devorar
     <b>D7</b>
Dim dim dim dim, dim, dim, dim
<b>Gm</b>                            <b>Cm</b>
Como um brigadeiro pra te lambuzar
     <b>D7</b>                <b>Gm</b>
Dim dim dim dim, dim, dim, dim

                             <b>Cm</b>
Boto a mão no bolo pra comemorar
            <b>D7</b>                   <b>Gm</b>
Pra te comemorar, pra te comemorar
                               <b>Cm</b>
Danço o miudinho pra te conquistar
            <b>D7</b>              <b>Gm</b>
Dim dim dim dim, dim, dim, dim

                      <b>D7</b>
O violeiro, toca e se toca
                       <b>Gm</b>
De olho no xibiu da morena
                              <b>D7</b>
Ai que zueira, que festa de arromba
                         <b>Gm</b>
Põe essa galera pra sambar

                           <b>Cm</b>
É de baixo da saia que eu vou
                <b>D7</b>         <b>Gm</b>
É de baixo da saia que eu tô
                       <b>D7</b>
É de baixo que eu vou ficar
                           <b>Gm</b>
Dim dim dim dim, dim, dim, dim

<b>Gm</b>                          <b>Cm</b>
É de baixo da saia que eu vou
                <b>D7</b>         <b>Gm</b>
É de baixo da saia que eu tô
                       <b>D7</b>
É de baixo que eu vou ficar
<b>D7</b>            <b>Gm</b>
Só pra te olhar`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function BomBocadoPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/art-popular/bom-bocado/"
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
