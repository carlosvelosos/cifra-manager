import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/revelacao/so-me-da-prazer/

const cifra = `Revelacao - So Me Da Prazer

<b>A7M</b>        <b>C#m</b>             <b>D</b>              <b>E7(9)</b>
Tanto tempo a gente não ficava tão contente
<b>A7M</b>     <b>C#m</b>                <b>D</b>           <b>E7(9)</b>
A felicidade andou brigada com a gente
<b>D</b>                    <b>C#m</b>
Nada nesse mundo abalou nosso amor
<b>D</b>                         <b>C#m</b>     <b>C#7</b>
Só Deus sabe o que a gente passou
 <b>F#m</b>                       <b>C#m</b>
Por tantas maldades nós brigamos sem querer
 <b>F#m</b>                        <b>C#m</b>
Pra falar a verdade não foi briga pra valer
<b>D</b>    <b>C#m</b>                 <b>D</b>
Não tive coragem pra sofrer
   <b>C#m</b>                  <b>D</b>
Eu fiquei perdido sem você
               <b>C#m</b>            <b>D</b>               <b>E7(9)</b>
Quando me encontrei com a solidão reagiu meu coração

<b>A7M</b>   <b>Em</b>  <b>A7</b> <b>D</b>
Só me da prazer
           <b>E7(9)</b>                <b>A7M</b>
Ver tanto desejo em nosso olhar
<b>Em</b>  <b>A7</b>     <b>D</b>
Longe de você
    <b>Dm</b>       <b>G7</b>            <b>C</b>
Fico triste só de imaginar
<b>C7</b>                       <b>F7M</b>
Todo amor nasceu pra ser feliz
  <b>Bm7(5-)</b>               <b>E7(9)</b>
E a gente nasceu pra se amarr`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SoMeDaPrazerPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/revelacao/so-me-da-prazer/"
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
