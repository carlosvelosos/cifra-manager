import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/zeca-pagodinho/camarao-que-dorme-onda-leva/
const cifra = `

<b>F</b>               <b>C7</b>           <b>F</b>
Não pense que meu coração é de papel
    <b>F7</b>                      <b>Bb</b>
Não brinque com o meu interior
  <b>Bb</b>           <b>C7</b>           <b>F</b>
Camarão que dorme a onda leva
    <b>D7</b>          <b>Gm</b>      <b>C7</b>          <b>F</b>    <b>F7</b>
Hoje é o dia da caça, amanhã do caçador

     <b>F</b>               <b>Gm</b>         <b>Am</b>    <b>F7</b>
Não quero que nosso amor acabe assim
       <b>Bb</b>                       <b>C7</b>    <b>F7</b>
Um coração quando ama é sempre amigo
        <b>Bb</b>           <b>C7</b>       <b>F</b>
Só não faça gato e sapato de mi__im
      <b>D7</b>           <b>Gm</b>         <b>C7</b>        <b>F</b>  <b>F5+</b>
Pois aquele que dá pão, também dá castigo
                    <b>C7</b>
Não pense que meu coração

<b>F</b>               <b>C7</b>           <b>F</b>
Não pense que meu coração é de papel
    <b>F7</b>                      <b>Bb</b>
Não brinque com o meu interior
<b>Bb</b>           <b>C7</b>           <b>F</b>
Camarão que dorme a onda leva
    <b>D7</b>          <b>Gm</b>      <b>C7</b>        <b>F</b>   <b>F7</b>
Hoje é dia da caça, amanhã do caçador

     <b>F</b>               <b>Gm</b>         <b>Am</b>    <b>F7</b>
Não veja meu sentimento com desde__ém
        <b>Bb</b>                      <b>C7</b>   <b>F7</b>
Enquanto o bem existir o mal tem cura
     <b>Bb</b>           <b>C7</b>               <b>F</b>        <b>D7</b>
A pedra é muito forte mas tem um porém, meu bem
      <b>Gm</b>          <b>C7</b>         <b>Eb6</b>  <b>D7</b>
A água tanto bate até que fura
    <b>F</b>                <b>C7</b>
Não pense que meu coração

<b>F</b>               <b>C7</b>              <b>F</b>
Não pense que meu coração é de papel
    <b>F7</b>                      <b>Bb</b>
Não brinque com o meu interior
<b>Bb</b>            <b>C7</b>           <b>F</b>
Camarão que dorme a onda leva
    <b>D7</b>          <b>Gm</b>      <b>C7</b>        <b>F</b>
Hoje é dia da caça, amanhã do caçador

    <b>D7</b>          <b>Gm</b>      <b>C7</b>        <b>F</b>
Hoje é dia da caça, amanhã do caçador
      <b>Gm</b>               <b>F/A</b>
Não pense que meu coração

----------------- Acordes -----------------
A7 = 2 0 2 2
Am = 2 2 1 2
B7 = 1 2 0 1
Bm = 4 4 3 4
D = 4 2 3 4
D7 = 4 2 1 4
Em = 5 4 5 5
F#m = 4 2 2 4
G = 5 4 3 5`;

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
