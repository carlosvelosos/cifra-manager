import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/martinho-da-vila/ex-amor/#

const cifra = `Martinho Da Vila - Ex Amor

[Intro] <b>Am</b>  <b>Am/G</b>  <b>F6</b>  <b>E</b>
        <b>E/D</b>  <b>C6</b>  <b>E7(9+)</b>  <b>E7(9-)</b>

[Primeira Parte]

<b>Am</b>  <b>A7</b>  <b>Dm</b>  <b>Dm/C</b>              <b>Bm7(5-)</b>  <b>E7</b>  <b>Am</b>    <b>Am/G</b>
Ex amor,     gostaria que tu    soubesses
             <b>Am</b>   <b>Am/G</b>  <b>F6</b>
O quanto que eu   sofri
                  <b>E7</b>  <b>E/D</b>  <b>C6</b>  <b>Bm7(5-)</b>  <b>E7(9-)</b>
Ao ter que me afastar de ti

<b>Am</b>   <b>A7</b>  <b>Dm</b>        <b>Dm/C</b>      <b>Bm7(5-)</b>  <b>E7</b>  <b>Am</b>  <b>Am/G</b>
Não chorei, como louco eu até    sorri
             <b>Am</b>  <b>Am/G</b>  <b>F6</b>
Mas, no fundo, só eu   sei
               <b>E7</b>  <b>E/D</b>.  <b>E7(9+)</b>  <b>E7(9-)</b>
Das angústias que senti (Ex Amor)

<b>Am</b>  <b>A7</b>  <b>Dm</b>  <b>Dm/C</b>              <b>Bm7(5-)</b>  <b>E7</b>  <b>Am</b>    <b>Am/G</b>
Ex amor,     gostaria que tu    soubesses
             <b>Am</b>   <b>Am/G</b>  <b>F6</b>
O quanto que eu   sofri
                  <b>E7</b>  <b>E/D</b>  <b>C6</b>  <b>Bm7(5-)</b>  <b>E7(9-)</b>
Ao ter que me afastar de ti

<b>Am</b>   <b>A7</b>  <b>Dm</b>        <b>Dm/C</b>      <b>Bm7(5-)</b>  <b>E7</b>  <b>Am</b>  <b>Am/G</b>
Não chorei, como louco eu até    sorri
             <b>Am</b>  <b>Am/G</b>  <b>F6</b>
Mas, no fundo, só eu   sei
               <b>E7</b>  <b>E/D</b>.  <b>Am</b> <b>A7</b>
Das angústias que senti

[Refrão]

          <b>Dm</b>           <b>Dm/C</b>        <b>Bm7(5-)</b>  <b>E7(9-)</b>
Sempre sonhamos com o mais eterno amor
       <b>Am</b>          <b>E7(9-)</b>         <b>Am</b>  <b>A7(9-/11+)</b>
Infelizmente eu lamento, mas não deu
          <b>Dm</b>            <b>Dm/C</b>          <b>Bm7(5-)</b>  <b>E7(9-)</b>
Nos desgastamos transformando tudo em dor
            <b>Am</b>         <b>E7(9-)</b>       <b>Am</b>  <b>A7(5+)</b>
Mas mesmo assim eu acredito que valeu

            <b>Dm</b>        <b>Dm/C</b>           <b>Bm7(5-)</b>
Quando a saudade bate forte, é envolvente
         <b>E7(9-)</b>      <b>E/D</b>      <b>Am</b>
Eu me possuo e é na sua intenção
       <b>A7</b>   <b>Dm</b>         <b>E7</b>           <b>Am</b>     <b>Am/G</b>
Com a minha cuca naqueles momentos quentes
            <b>F6</b>            <b>E7</b>   <b>Am</b>        <b>E7(9+)</b>  <b>E7(9-)</b>
Em que se acelerava o meu coração, ex amor!

[Primeira Parte]

<b>Am</b>  <b>A7</b>  <b>Dm</b>  <b>Dm/C</b>              <b>Bm7(5-)</b>  <b>E7</b>  <b>Am</b>    <b>Am/G</b>
Ex amor,     gostaria que tu    soubesses
             <b>Am</b>   <b>Am/G</b>  <b>F6</b>
O quanto que eu   sofri
                  <b>E7</b>  <b>E/D</b>  <b>C6</b>  <b>Bm7(5-)</b>  <b>E7(9-)</b>
Ao ter que me afastar de ti

<b>Am</b>   <b>A7</b>  <b>Dm</b>        <b>Dm/C</b>      <b>Bm7(5-)</b>  <b>E7</b>  <b>Am</b>  <b>Am/G</b>
Não chorei, como louco eu até    sorri
             <b>Am</b>  <b>Am/G</b>  <b>F6</b>
Mas, no fundo, só eu   sei
               <b>E7</b>  <b>E/D</b>.  <b>Am</b> <b>A7</b>
Das angústias que senti

[Refrão]

          <b>Dm</b>           <b>Dm/C</b>        <b>Bm7(5-)</b>  <b>E7(9-)</b>
Sempre sonhamos com o mais eterno amor
       <b>Am</b>          <b>E7(9-)</b>         <b>Am</b>  <b>A7(9-/11+)</b>
Infelizmente eu lamento, mas não deu
          <b>Dm</b>            <b>Dm/C</b>          <b>Bm7(5-)</b>  <b>E7(9-)</b>
Nos desgastamos transformando tudo em dor
            <b>Am</b>         <b>E7(9-)</b>       <b>Am</b>  <b>A7(5+)</b>
Mas mesmo assim eu acredito que valeu

            <b>Dm</b>        <b>Dm/C</b>           <b>Bm7(5-)</b>
Quando a saudade bate forte, é envolvente
         <b>E7(9-)</b>      <b>E/D</b>      <b>Am</b>
Eu me possuo e é na sua intenção
       <b>A7</b>   <b>Dm</b>         <b>E7</b>           <b>Am</b>     <b>Am/G</b>
Com a minha cuca naqueles momentos quentes
            <b>F6</b>            <b>E7</b>   <b>Am</b>        <b>E7(9+)</b>  <b>E7(9-)</b>
Em que se acelerava o meu coração, ex amor!`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function ExAmorPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/martinho-da-vila/ex-amor/#"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
      />
      <FloatingMenu />
    </>
  );
}
