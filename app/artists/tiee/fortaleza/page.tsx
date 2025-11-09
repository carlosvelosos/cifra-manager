import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/tiee/fortaleza/

const cifra = `Tiee - Fortaleza

<b>A7M</b>      <b>A/G</b>                 <b>D/F#</b>
A nossa fortaleza vence qualquer ciúme
          <b>Dm/F</b>           <b>D7M</b>
Então por gentileza meu bebe
             <b>A/G</b>          <b>D/F#</b>
Deita com a luz aceza põe aquele perfume
            <b>Dm/F</b>          <b>D7M</b>
Que hoje a sobremesa é você
<b>A7M</b>              <b>A/G</b>          <b>D/F#</b>
Se o negócio é brigar discutir relação
             <b>Dm/F</b>         <b>D7M</b>
Sobe de patamar muda seu coração
             <b>A/G</b>         <b>D/F#</b>
Eu não vou aceitar sua provocação
                           <b>Dm/F</b>
É melhor evitar pelo sim pelo não
           <b>A7M</b>                         <b>A7(9/11)</b>          
Só pra me enganar bota o feijão no fogo e para de ferver
                <b>D7M(9)</b>
Tira esse brilho genioso do olhar
                          <b>Dm6</b>
Que eu cheguei tarde mais o coro vai comer
<b>A7M</b>      <b>A/G</b>                 <b>D/F#</b>
A nossa fortaleza vence qualquer ciúme
          <b>Dm/F</b>          <b>D7M</b>
Então por gentileza meu bebe
              <b>A/G</b>          <b>D/F#</b>
Deita com a luz aceza põe aquele perfume
            <b>Dm/F</b>
Que hoje a sobremesa é você

----------------- Acordes -----------------
A/G = 3 X 2 2 2 X
A7(9/11) = 5 X 5 4 3 X
A7M = X 0 2 1 2 0
D/F# = 2 X 0 2 3 2
D7M = X X 0 2 2 2
D7M(9) = X 5 4 6 5 X
Dm/F = X X 3 2 3 1
Dm6 = X 5 X 4 6 5`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FortalezaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/tiee/fortaleza/"
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
