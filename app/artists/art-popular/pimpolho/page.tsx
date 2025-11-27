import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/art-popular/pimpolho

const cifra = `Art Popular - Pimpolho

<b>G</b>                           <b>D</b>
 O pimpolho é um cara bem legar
                         <b>Em</b>
Pena que não pode ver mulher
                           <b>Am</b>                   <b>D</b>
Na dança ele já pede pra baixar, já pede pra baixar
                        <b>Gm</b>
Ela quer parar ele não quer

                                   <b>D</b>
Ela tá dançando e o pimpolho tá de oio
                             <b>Gm</b>
Cuidado com a cabeça do pimpolho
                                    <b>D</b>
Ela tá dançando e o pimpolho tá de oio

Cuidado com o pimpolho

          <b>Gm</b>
Eu sou pimpolho

Sou o rei da mulherada

Beijo todas sem parar

Ve se para de me olhar

E abaixa logo devagar

Porque meu folego tá acabando

Não consigo mais falar

Vai caindo, vai caindo
                 <b>D</b>
Agora pode levantar`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PimpolhoPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/art-popular/pimpolho"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
        // Fallback to old format if needed
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
