import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/zeca-pagodinho/coracao-em-desalinho/
const cifra = `

[Intro] <b>F</b>  <b>Gm7</b>  <b>Am7</b>  <b>D7</b>  <b>Gm7</b>  <b>C7</b>  <b>F</b>  <b>C7</b>

 <b>F</b>           <b>F5+</b>   <b>F6</b>     <b>F5+</b>
Numa estrada dessa vida
<b>F</b>      <b>D7</b>          <b>Gm</b>  <b>D7</b>
Eu te conheci oh! flor
 <b>Gm</b>        <b>D7</b>  <b>Gm</b>    <b>D7</b>      <b>Gm</b>
Vinhas tão desiludida, mal sucedida
       <b>C7</b>     <b>F</b>^^<b>Dm</b>^^<b>Gm</b>^^<b>C7</b>
Por um falso amor
 <b>F</b>     <b>F5+</b> <b>F6</b>   <b>F5+</b>
Dei afeto e carinho
<b>F</b>      <b>F7</b>     <b>A#</b>
Como retribuição
<b>Bm7(5-)</b>     <b>E7</b>    <b>Am</b>
Procuraste um outro ninho
         <b>E/G#</b>              <b>Gm</b>
Em desalinho ficou meu coração
<b>D/F#</b>                <b>Gm</b> <b>C7</b>  <b>Am</b>
Meu peito agora é só paixão
<b>D7</b>                <b>Gm</b> <b>C7</b>  <b>F</b>   <b>Am</b>  <b>G#m</b>
Meu peito agora é só paixão
<b>Gm</b>         <b>C7</b>
Tamanha desilusão
<b>F</b>
Me deste oh! flor
      <b>Em7(5-)</b>  <b>A7</b>       <b>D#6</b>   <b>D7</b>
Me enganei..... redondamente
<b>Gm</b>         <b>C7</b>   <b>C°</b>      <b>Dm</b>
Pensando em te fazer um bem
            <b>G7</b>
Eu me apaixonei
<b>Gm7</b>        <b>C7</b>         <b>F</b>    <b>C7</b>
Foi........meu........mal (e agora)

[Refrão]

<b>F</b>   <b>Bm7(5-)</b>         <b>E7</b>           <b>Am</b>
Agora, uma enorme paixão me devora
<b>Am7(5-)</b>         <b>D7</b>    <b>Gm</b>  <b>D7</b>
Alegria partiu foi embora
<b>Gm</b>       <b>C7</b>   <b>Am7(5-)</b>      <b>D7</b>
Não sei viver sem teu amor
<b>G7</b>               <b>C7</b>     <b>F</b>  <b>C7</b>
Sozinho, curto a minha dor

[Final]

<b>G7</b>               <b>C7</b>     <b>F</b>  <b>C7</b> <b>D7</b>
Sozinho, curto a minha dor

----------------- Acordes -----------------
A#6 = P3 3 3 5
A/C# = 7 6 5 7
A6 = 2 2 2 4
A7 = 2 0 2 2
Am = 2 2 1 2
B7 = 1 2 0 1
Bm7(5-) = 3 2 0 0
C = 2 0 1 2
C5+ = 10 9 9 10
C6 = 2 2 1 2
C7 = 2 3 1 2
D#m = 4 3 4 4
D7 = 4 2 1 4
Dm = 3 2 3 3
Dm7 = 0 2 1 3
E7 = 2 1 0 0
Em = 5 4 5 5
Em7 = 2 0 0 0
Em7(5-) = 2 3 3 5
F = 3 2 1 3
F#m7(5-) = 4 5 5 7
G7 = P3 4 3 5
G° = 5 3 P2 2`;

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
