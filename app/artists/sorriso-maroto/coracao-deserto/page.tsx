import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/sorriso-maroto/coracao-deserto/

const cifra = `Sorriso Maroto - Coracao Deserto

[Intro] <b>Am7</b>  <b>Bm7</b>  <b>Cm7</b>  <b>C/D</b>  <b>C/D</b>  <b>C/D</b>  <b>Db7(9/11)</b>  <b>C7M</b>
                           <b>G7M</b>
O meu coração está deserto
 <b>C7M</b>                  <b>G7M</b>     <b>D/F#</b>
Sem o seu amor aqui bem perto
<b>Em7</b>             <b>Bm7</b>
Eu não nego que você marcou
<b>Em7</b>                  <b>Bm7</b>
    E me apego ao que você deixou
<b>C7M</b>                <b>D7#4</b>
 Eu odeio me sentir sozinho
<b>Bm7(5-)</b>            <b>E7(9-)</b>
E queria te pedir carinho
<b>Am7(9)</b>        <b>Bm7</b>           <b>C7M</b>
Quando a boca sente a falta do teu beijo
<b>Am7(9)</b>      <b>Bm7</b>         <b>C7M</b>    <b>D7#4</b>
E o corpo incendeia de desejo

      <b>G7M</b>  <b>Bm7</b>       <b>C7M</b>                         <b>D7(4)</b>          <b>G7M</b>
É a saudade           que bate machucando aqui no fundo do meu peito
<b>Bm7</b>     <b>C7M</b>                       <b>D7(4)</b>              <b>G7M</b>    <b>Bm7</b>
       Eu tento te expulsar da minha vida e não tem jeito
    <b>C7M</b>                  <b>D7(4)</b>         <b>G6(9)</b>   <b>Bm7</b>  <b>C7M</b>  <b>D7(4)</b> ( <b>C7M</b> )
Jamais vou conseguir tirar você do coração
Final
    <b>C7M</b>                    <b>D7(4)</b>       <b>G6(9)</b>
Jamais vou conseguir tirar você do coração
 <b>Bm7</b>  <b>C7M</b>  <b>D7(4)</b> <b>Am7</b>  <b>Bm7</b>  <b>Cm7</b>  <b>C/D</b> <b>C/D</b> <b>C/D</b> <b>Db7(9/11)</b> <b>C7M</b>
Eu não, eu não
                   <b>G7M</b>
O meu coração está deserto`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CoracaoDesertoPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/sorriso-maroto/coracao-deserto/"
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
