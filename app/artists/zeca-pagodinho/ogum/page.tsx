import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/zeca-pagodinho/ogum/
const cifra = `

[Intro] <b>A7M</b>  <b>D7M</b>  <b>B7(9)</b>  <b>Bm7</b>
        <b>A7M</b>  <b>D7M</b>  <b>B7(9)</b>  <b>Bm7</b>

<b>A7M</b> <b>F#m7</b>                 <b>Bm7M</b>               <b>Bm7</b>
Eu sou descendente zulu, sou um soldado de ogum
                     <b>E7(9)</b>
Devoto nessa imensa legião de jorge
<b>A7M</b> <b>F#m7</b>              <b>Bm7M</b>             <b>Bm7</b>
Eu sincretizado na fé sou carregado de axé
                     <b>E7(9)</b>
E protegido por um cavaleiro nobre

<b>Em7</b>        <b>A7(9)</b>                   <b>Eb7(5-)</b>
Se vou na igreja festejar meu protetor
                                  <b>Ebm7(5-)</b>
E agradecer por eu ser mais um vencedor
    <b>Dm6</b>
Nas lutas nas batalhas
<b>Em7</b>         <b>A7(9)</b>                     <b>Eb7(5-)</b>
Se vou no terreiro pra bater o meu tambor
                              <b>Ebm7(5-)</b>
Bato cabeça firmo ponto sim senhor
    <b>Dm6</b>       <b>D/E</b>
Eu canto pra ogum

 <b>Bm7</b>
Ogum
Um guerreiro valente que cuida da gente que sofre demais
<b>E7(9)</b>
Ogum
 <b>A7M</b>
Ele vem de aruanda ele vence demanda de gente que faz
 <b>Bm7</b>
Ogum
                                                   <b>A7M</b>
Cavaleiro do céu escudeiro fiel mensageiro da paz, ogum
 <b>Bm7</b>
Ogum
Ele nunca balança ele pega na lança ele mata o dragão
 <b>A7M</b>
Ogum
É quem da confiança pra uma criança virar um leão
 <b>Bm7</b>
Ogum
É um mar de esperança que traz a bonança pro meu coração
 <b>A7M</b>
Ogum

----------------- Acordes -----------------
A7(9) = 7 6 8 9
A7M = 2 1 2 2
B7(9) = 1 2 2 1
Bm7 = 4 2 3 4
Bm7M = 4 3 0 0
D7M = 0 P2 2 4
Dm6 = 0 2 0 3
E7(9) = 2 1 3 4
Eb7(5-) = 1 2 2 1
Ebm7(5-) = 1 2 2 4
Em7 = 2 0 0 0
F#m7 = 4 P2 2 2`;

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
