import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/benito-di-paula/retalhos-de-cetim/

const cifra = `Benito Di Paula - Retalhos De Cetim

[Intro] <b>Am</b>

<b>Am7</b>                   <b>Em7</b>
  Ensaiei meu samba o ano inteiro
<b>Am7</b>                     <b>Em7</b>
  Comprei surdo e tamborim
<b>Am7</b>                    <b>C7M</b>
  Gastei tudo em fantasia
                   <b>F7M</b>
Era só o que eu queria
      <b>F#º</b>        <b>E7</b>
E ela jurou desfilar pra mim

<b>Am7</b>                    <b>Em7</b>
  Minha escola estava tão bonita
<b>Am7</b>                     <b>Em7</b>
  Era tudo o que eu queria ver
<b>Am7</b>                 <b>C7M</b>
  Em retalhos de cetim
                 <b>F7M</b>
Eu dormi o ano inteiro
      <b>F#º</b>        <b>E7</b>
E ela jurou desfilar pra mim

[Refrão]

       <b>A7M</b>  <b>E/G#</b>      <b>Em/G</b>  <b>F#7</b>
Mas chegou... o carnaval
      <b>Bm7</b>   <b>F7</b>       <b>E7</b>
E ela não... desfilou
      <b>Am7</b>        <b>C/G</b>          <b>F7M</b>
Eu chorei na avenida, eu chorei
                 <b>Bm7(5-)</b>
Não pensei que mentia
    <b>E7</b>             <b>Am</b>         <b>E7</b>
A cabrocha, que eu tanto amei`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function RetalhosDeCetimPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/benito-di-paula/retalhos-de-cetim/"
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
