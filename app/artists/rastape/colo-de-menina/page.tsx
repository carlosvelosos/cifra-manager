import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/rastape/colo-de-menina/

const cifra = `Rastapé - Colo de menina

[Intro] <b>D</b>  <b>A</b>  <b>Bm</b>
        <b>G</b>  <b>A</b>  <b>D</b>  <b>A</b>
        <b>Bm</b>  <b>G</b>  <b>A</b>  <b>D</b>

  <b>D</b>            <b>A</b>                 <b>Bm</b> ( <b>G</b>  <b>A</b> )
 A lua quando brilh eu falo de amor
 <b>D</b>                <b>A</b>               <b>Bm</b> ( <b>G</b>  <b>A</b> )
No gingado desse xote sinto teu calor
 <b>D</b>          <b>A</b>               <b>Bm</b>     ( <b>G</b>  <b>A</b> )
A noite acordado sonho com você  Iê iê Iê
        <b>D</b>               <b>A</b>                 <b>Bm</b>  ( <b>G</b>  <b>A</b> )
O som ligado e fico perturbado sem ter o que fazer

<b>D</b>              <b>A</b>           <b>Bm</b>           <b>G</b>       <b>A</b>    <b>D</b>
  E tento sair dessa rotina não quero não colo de mamãe
           <b>A</b>            <b>Bm</b>
  Só quero colo de menina
                    <b>G</b>                 <b>A</b>   <b>D</b>
  E pouco a pouco conquistar o teu coração  (2x)

   <b>F#7</b>                 <b>Bm</b>
Um outro dia a gente se vê
          <b>G</b>                 <b>A</b>       <b>D</b>
Vou "prum" lugar que lembre do sertão
 <b>F#7</b>                         <b>Bm</b>
E canto um xote pra te convencer
        <b>G</b>                 <b>A</b>    <b>D</b>
Vou te ensinar como viver é bom

        <b>A</b>          <b>Bm</b>
E amar até,e amar até
   <b>G</b>         <b>A</b>       <b>D</b>
 Até quando Deus quiser

( <b>D</b>  <b>A</b>  <b>Bm</b> )
( <b>G</b>  <b>A</b>  <b>D</b>  <b>A</b> )
( <b>Bm</b>  <b>G</b>  <b>A</b>  <b>D</b> )

  <b>D</b>               <b>A</b>
A lua quando brilha eu falo de amor
   <b>Bm</b>                  (<b>G</b> <b>A</b>)
No gingado desse xote sinto teu calor
  <b>D</b>        <b>A</b>               <b>Bm</b>       <b>G</b> <b>A</b>
A noite acordado sonho com você  Iê iê Iê
      <b>D</b>                   <b>A</b>                <b>Bm</b>    <b>G</b> <b>A</b>
O som ligado e fico perturbado sem ter o que fazer

----------------- Acordes -----------------
A = X 0 2 2 2 0
Bm = X 2 4 4 3 2
D = X X 0 2 3 2
F#7 = 2 4 2 3 2 2
G = 3 2 0 0 0 3`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ColoDeMeninaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/rastape/colo-de-menina/"
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
