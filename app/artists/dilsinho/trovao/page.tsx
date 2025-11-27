import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/dilsinho/trovao

const cifra = `Dilsinho - Trovao

[Intro] <b>D9</b>  <b>G9</b>  <b>Bm7</b>  <b>A9</b>  <b>G9</b>

<b>D9</b>
Louco pra te amar
<b>Bm7</b>             <b>G9</b>
Chego pro jantar
       <b>Gm6</b>
E a mesa pra um
<b>D9</b>
Ver você chorar
<b>Bm7</b>            <b>G9</b>
Roupas no sofá
         <b>Gm6</b>
Sem motivo algum
           <b>G9</b>           <b>A7(4)</b>         <b>A/G</b>
Quando eu perguntei: pra onde é que eu ia?
   <b>F#m7</b>       <b>F#m7(11)</b>
Desacreditei
         <b>D/C</b>
Foi tão fria
         <b>Bm7</b>
Nem me ouvia
<b>A9</b>    <b>G9</b>     <b>A7(4)</b>
Só dizia vai
                   <b>D</b>   <b>D/C</b> <b>Am7</b> <b>D7(4/9)</b>
E que já não dava mais
     <b>G9</b>
Como não!
Se é separação
               <b>A7(4)</b>                      <b>A/G</b>   <b>F#m7</b>
De onde é o trovão, que anuncia quando a chuva vem
                       <b>Am7</b>               <b>D7(4/9)</b>
Hoje eu saí sem me despedir só porque eu achei que estava tudo bem
<b>G7M</b>
  Não me leve a mal
          <b>A7(4)</b>                      <b>A/G</b>   <b>F#m7</b>
Brigas de casal, como as nossas todo mundo tem
                                  <b>Am7</b>
Se é pra te esquecer como eu vou viver
              <b>D7(4/9)</b>          <b>G7M</b>
Se eu só tenho você e mais ninguém
                       <b>Em7</b>
Não tenho nada além de amor pra te dar
    <b>Em7(9)</b>                     <b>D9</b> <b>C9</b> <b>Bb9</b> <b>A7(4)</b>
Mas trouxe flores se quiser ficar

 <b>G7M</b>    <b>A7(4)</b>
Mas trouxe flores se quiser ficar`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TrovaoPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/dilsinho/trovao"
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
