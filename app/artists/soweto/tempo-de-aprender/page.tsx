import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/soweto/tempo-de-aprender/

const cifra = `Soweto - Tempo de Aprender

[Intro] <b>A</b>  <b>A7</b>

<b>D</b>                   <b>F#m</b>
  Dei tanto amor pra você
<b>G7M</b>    <b>F#m</b>    <b>Em</b>       <b>F#m</b>  <b>G7M</b>
  Mas você não entendeu
         <b>F#m</b>   <b>Em</b>         <b>F#m</b>   <b>G7M</b>
  Nem me olhou, nem me viu
         <b>F#m</b>   <b>Em</b>         <b>A7</b>
  Nem me tocou, nem sentiu
            <b>D</b>     <b>A7</b>
  O amor nascer

<b>D</b>                   <b>F#m</b>
E foi o fim pra nós dois
<b>G7M</b>    <b>F#m</b>    <b>Em</b>       <b>F#m</b>  <b>G7M</b>
Nada restou pra depois
         <b>F#m</b>   <b>Em</b>       <b>F#m</b>  <b>G</b>
Foi bom enquanto durou
         <b>F#m</b>   <b>Em</b>         <b>A7</b>
Esse romance, esse amor
            <b>D</b>     <b>F#m7</b>
Pena que acabou

          <b>Bm</b>     <b>F#m</b>        <b>G</b>   <b>F#m</b>
Mas vou viver de novo uma paixão
        <b>Bm</b>    <b>F#m7</b>   <b>G</b>      <b>A7</b>         <b>D</b>
E dessa vez vou acertar    bem no coração

           <b>F#m</b>      <b>G</b>
  E nunca mais vou errar
       <b>A7</b>       <b>D</b>
  Como errei com você
             <b>F#m</b>     <b>G</b>
  Quero o prazer de amar
      <b>A7</b>        <b>D</b>    ( <b>A7</b> )
  É tempo de aprender

----------------- Acordes -----------------
A = X 0 2 2 2 0
A7 = X 0 2 0 2 0
Bm = X 2 4 4 3 2
D = X X 0 2 3 2
Em = 0 2 2 0 0 0
F#m = 2 4 4 2 2 2
F#m7 = 2 X 2 2 2 X
G = 3 2 0 0 0 3
G7M = 3 X 4 4 3 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TempoDeAprenderPage() {
  return (
    <>
      <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
