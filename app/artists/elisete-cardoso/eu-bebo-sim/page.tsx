import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/elisete-cardoso/eu-bebo-sim/#

const cifra = `Elisete Cardoso - Eu Bebo Sim

[Intro] <b>E</b>  <b>E7</b>  <b>A</b>  <b>B7</b>  <b>E</b>  <b>B7</b>

  <b>E</b>
Eu bebo sim
 <b>E7</b>       <b>A</b>
Estou vivendo
      <b>B7</b>
Tem gente que nao bebe
       <b>E</b>                  <b>B7</b>
Esta morrendo    ( eu bebo sim )

 <b>E7</b>                              <b>A</b>
Tem gente que já tá de pé na cova
                    <b>B7</b>
Não bebeu e isso prova
                       <b>E</b>
Que a bebida não faz mal
          <b>E7</b>
Uma pro santo
                       <b>A</b>
Boto o choro e a saideira
                   <b>B7</b>
Desce toda a prateleira
                     <b>E</b>              <b>B7</b>
Diz que a vida tá legal   ( eu bebo sim )

 <b>E</b>
Eu bebo sim
   <b>E7</b>                         <b>A</b>
Tem gente que condena o pileque
                       <b>B7</b>
Diz que e coisa de moleque
                        <b>E</b>
Cafajeste ou coisa assim
           <b>E7</b>                         <b>A</b>
Mas essa gente quando tá de cuca cheia
                 <b>B7</b>
Vira chave de cadeia
             <b>E</b>           <b>B7</b>
Esvazia o botequim ( eu bebo sim  )`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function EuBeboSimPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/elisete-cardoso/eu-bebo-sim/#"
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
