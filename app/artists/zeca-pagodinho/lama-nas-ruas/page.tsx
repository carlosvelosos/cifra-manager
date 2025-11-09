import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/zeca-pagodinho/lama-nas-ruas/
const cifra = `

[Intro] <b>D7M</b>  <b>E7(9)</b>  <b>A7M</b>  <b>F#m</b>
        <b>G#m7(5-)</b>  <b>C#7</b>  <b>G7</b>
        <b>Bm</b>  <b>F#7</b>

<b>Bm</b>
Deixa
<b>E7(9)</b> <b>Bm</b>     <b>F#7</b>
Desaguar tempestade
          <b>F#m7(5-)</b>  <b>B7(5+)</b> <b>B7</b>
Inundar a cidade
               <b>Em7</b>
Porque arde um sol dentro de nós
<b>C#m7(5-)</b>
Queixas
<b>F#7</b>               <b>C#m7(5-)</b>
Sabes bem que não temos
<b>F#7</b>         <b>C#m7(5-)</b>  <b>F#7(5+)</b>
E seremos serenos
              <b>Bm</b>            <b>Em</b>    <b>F#7</b>
Sentiremos prazer no tom da nossa voz
<b>Bm</b>
Veja
<b>E7(9)</b>       <b>Bm</b>      <b>F#7</b>
O olhar de quem ama
                  <b>F#m7(5-)</b>  <b>B7</b>
Não reflete um drama não
                      <b>Em</b>   <b>Em7</b>
É a expressão mais sincera sim
<b>C#m7(5-)</b>               <b>F#7</b>
Vem pra provar que o amor quando é puro
   <b>Bm</b>                 <b>D7</b>
Desperta e alerta o mortal
<b>C#m7(5-)</b>                <b>F#7</b>
Aí é que o bem vence o mal
<b>F#m7(5-)</b>                                <b>B7</b>
Deixa a chuva cair que bom tempo há de vir
<b>Em7</b>               <b>F#7</b>             <b>Bm</b>
Quando o amor decidir mudar o visual
      <b>Am</b>          <b>D7</b>
Trazendo a paz no sol
<b>G7M</b>                     <b>Em</b>          <b>F#7</b>
Que importa se o tempo lá fora vai mal
      <b>B</b>  <b>G#m</b>  <b>C#m</b>  <b>F#7</b>
Que importa
   <b>B</b>
Se há
<b>F#7</b>             <b>D#m7(5-)</b>  <b>G#7</b>
Tanta lama nas ruas
    <b>C#m</b>
E o céu
<b>G#7</b>              <b>C#m</b>     <b>B7</b>
É deserto e sem brilho de lua
<b>E</b>                <b>F#7</b>
Se o clarão da luz
       <b>D#m7(5-)</b>      <b>G#7</b>
Do teu olhar vem me guiar
   <b>C#m</b>      <b>F#7(4)</b>
Conduz meus passos
   <b>F#7</b>  <b>B</b>             <b>F#7</b>
Por onde quer que eu vá

----------------- Acordes -----------------
A7M = 2 1 2 2
Am = 2 2 1 2
B = P4 4 4 4
B7 = 1 2 0 1
B7(5+) = 7 4 4 5
Bm = 4 4 3 4
C#7 = 3 4 2 3
C#m = 2 1 2 2
C#m7(5-) = 5 4 P2 2
D#m7(5-) = 1 2 2 4
D7 = 4 2 1 4
D7M = 0 P2 2 4
E = 2 1 0 2
E7(9) = 2 1 3 4
Em = 5 4 5 5
Em7 = 2 0 0 0
F#7 = 4 3 P2 2
F#7(4) = 9 9 7 8
F#7(5+) = 14 11 11 12
F#m = 4 2 2 4
F#m7(5-) = 4 5 5 7
G#7 = P4 5 4 6
G#m = 6 4 4 6
G#m7(5-) = 0 1 0 0
G7 = P3 4 3 5
G7M = 5 4 3 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    ""
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
