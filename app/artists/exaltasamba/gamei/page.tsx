import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/exaltasamba-musicas/gamei/

const cifra = `Exaltasamba - Gamei

<b>Cm7</b>      <b>F7(9)</b>
Quando eu vi
        <b>Bb7(9)</b>  <b>Bb7(9-)</b>
Me amarrei
                <b>Eb7M</b>
No teu sorriso sonhei
<b>Dm7(5-)</b>            <b>G7(13-)</b>
Eu sonhava que o sol
 <b>Cm7</b>         <b>Cm7/Bb</b>
Namorava o luar
 <b>Aº</b>
Que as nuvens do céu

 <b>Dm7(5-)</b>             <b>G7(13-)</b>
Beijavam o azul do mar

 <b>Cm7</b>  <b>F7(9)</b>
Meu amor
         <b>Bb7(9)</b>  <b>Bb7(9-)</b>
Meu prazer
                <b>Eb7M</b>
Minha paixão é você
 <b>Dm7(5-)</b>          <b>G7(13-)</b>
Deusa linda do amor
 <b>Cm7</b>           <b>Cm7/Bb</b>
Toma conta de mim
<b>Aº</b>
O destino traçou
  <b>Dm7(5-)</b>           <b>G7(13-)</b>
Pra nunca mais ter fim

 <b>Fm7(9)</b>            <b>Bb7(9)</b>
Te amo e não tem jeito
 <b>Fm7(9)</b>        <b>Bb7(9)</b>
Você é minha sina
 <b>Fm7(9)</b>            <b>Bb7(9)</b>  <b>Cm7</b>  <b>C7</b>
Te amo meu amor, menina

 <b>Fm7(9)</b>            <b>Bb7(9)</b>
Te amo e não tem jeito
 <b>Fm7(9)</b>        <b>Bb7(9)</b>
Você me alucina
 <b>Fm7(9)</b>           <b>Bb7(9)</b>     <b>Cm7</b>  <b>C7</b>
Te amar é bom demais, menina

 <b>F7M</b>              <b>F6</b>
Gamei, no corpo bronzeado
 <b>Bbm7</b>
Ganhei, um beijo assanhado
 <b>Am7</b>            <b>D7(9-)</b>
Fiquei, todinho arrepiado
 <b>Gm7</b>            <b>C7(9)</b>
Parei, surpreso e acanhado
 <b>F7M</b>              <b>F6</b>
Dancei, de rostinho colado
<b>Bbm7</b>
Olhei, bumbum arrebitado
 <b>Am7</b>            <b>D7(9-)</b>
Gostei, perfume importado
<b>Gm7</b>               <b>C7(9)</b>
Amei, já sou teu namorado
 <b>F7M</b>  <b>Dm7(5-)</b>  <b>G7(13-)</b>  <b>Cm7</b>
Gamei

----------------- Acordes -----------------
Am7 = X 0 2 0 1 0
Aº = 5 X 4 5 4 X
Bb7(9) = X 1 0 1 1 X
Bb7(9-) = 6 X 6 4 3 X
Bbm7 = X 1 3 1 2 1
C7 = X 3 2 3 1 X
C7(9) = X 3 2 3 3 X
Cm7 = X 3 5 3 4 3
Cm7/Bb = 6 3 5 3 4 3
D7(9-) = X 5 4 5 4 X
Dm7(5-) = X X 0 1 1 1
Eb7M = X X 1 3 3 3
F6 = 1 X 0 2 1 X
F7(9) = X X 3 2 4 3
F7M = 1 X 2 2 1 X
Fm7(9) = X X 3 1 4 3
G7(13-) = 3 X 3 4 4 3
Gm7 = 3 X 3 3 3 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function GameiPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/exaltasamba-musicas/gamei/"
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
