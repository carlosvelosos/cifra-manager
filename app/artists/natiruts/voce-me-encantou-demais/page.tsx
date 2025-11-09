import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/natiruts/voce-me-encantou-demais/

const cifra = `Natiruts - Você Me Encantou Demais

<b>F#m</b>         <b>C#m7</b>     <b>D7M</b>
Você me encantou demais
<b>F#m</b>                <b>C#m7</b>            <b>D7M</b>
Mostrou seu coração do que ele é capaz
<b>F#m</b>     <b>C#m7</b>            <b>D7M</b>
Por isso eu quero te dizer
<b>F#m</b>                      <b>C#m7</b>          <b>D7M</b>
Que a flor dessa canção sempre será você
<b>F#m</b>          <b>C#m7</b>                <b>D7M</b>
Seu beijo despertou paixão
<b>F#m</b>                         <b>C#m7</b>         <b>D7M</b>
Desculpe se me apressei pois nada foi em vão
<b>F#m</b>   <b>C#m7</b>         <b>D7M</b>
O que eu desejo à você
<b>F#m</b>                 <b>C#m7</b>            <b>D7M</b>
É que os deuses do amor estejam a te proteger
       <b>D7M</b>                          <b>C#m7</b>
E que o verão no seu sorriso nunca acabe
                 <b>D7M</b>           <b>C#m7</b>
E aquele medo de viver um dia se torne um grande amor
             <b>D7M</b>                <b>C#m7</b>
Vou te falar mas acho que você já sabe
     <b>Bm7</b>         <b>C#m7</b>     <b>D7M</b>       <b>D6/E</b>        <b>F#m</b> <b>C#m7</b>   <b>D7M</b>
Você apaixonou alucinou descompassou meu coração
<b>F#m</b> <b>C#m7</b>   <b>D7M</b>
Meu coração
<b>F#m</b>       <b>C#m7</b>        <b>D7M</b>
Você me fez sonhar demais
<b>F#m</b>            <b>C#m7</b>        <b>D7M</b>
Chegou sorriu beijou mostrou como se faz
<b>F#m</b>        <b>C#m7</b>        <b>D7M</b>
Por isso eu quero te falar
<b>F#m</b>             <b>C#m7</b>                   <b>D7M</b>
Que os As dessa canção eu fiz só pra te dar
<b>F#m</b>    <b>C#m7</b>           <b>D7M</b>
Seu jeito lindo fez arder
<b>F#m</b>          <b>C#m7</b>               <b>D7M</b>
Fiquei feito vulcão fervendo por te ver
<b>F#m</b>     <b>C#m7</b>        <b>D7M</b>
E que eu desejo à você
<b>F#m</b>          <b>C#m7</b>                    <b>D7M</b>
É que os deuses do amor estejam a te proteger
       <b>D7M</b>                        <b>C#m7</b>
E que o verão no seu sorriso nunca acabe
          <b>D7M</b>                  <b>C#m7</b>
E aquele medo de viver um dia se torne um grande amor
       <b>D7M</b>                        <b>C#m7</b>
Vou te falar mas acho que você já sabe
     <b>Bm7</b>        <b>C#m7</b>      <b>D7M</b>       <b>D6/E</b>      <b>F#m</b> <b>C#m7</b>   <b>D7M</b>
Você apaixonou alucinou descompassou meu coração
<b>F#m</b> <b>C#m7</b>   <b>D7M</b>
Meu coração

----------------- Acordes -----------------
Bm7 = X 2 4 2 3 2
C#m7 = X 4 6 4 5 4
D6/E = X 7 7 7 7 7
D7M = X X 0 2 2 2
F#m = 2 4 4 2 2 2`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VoceMeEncantouDemaisPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/natiruts/voce-me-encantou-demais/"
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
