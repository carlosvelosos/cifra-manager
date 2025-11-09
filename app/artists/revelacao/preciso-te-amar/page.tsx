import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/revelacao/preciso-te-amar/
const cifra = `

[Intro] <b>C</b>  <b>Em7</b>  <b>Am</b>  <b>Dm</b>  <b>G7</b>

<b>C</b>          <b>Em7</b>
Eu estou apaixonado
<b>Am</b>                  <b>Em</b>
  Deixa eu ser seu namorado
<b>F7M</b>            <b>D#º</b>
  Quero ficar do teu lado
       <b>F7M</b>
Pra ter seu abraço, seu beijo
   <b>G7(4)</b> <b>G7</b>
Pra mim
<b>C</b>                 <b>Em7</b>
 O teu olhar não me engana
<b>Am</b>              <b>Em</b>
  Eu sei que você me ama
<b>F7M</b>            <b>D#º</b>
  Teu coração diz que você me quer
<b>Am</b>
 Mas o medo não deixa
<b>Gm</b>              <b>C7</b>
  Você se entregar
<b>F7M</b>
  Vem pra mim
 <b>E7</b>
Não faz assim
<b>Am7</b>           <b>Gm7</b>       <b>C7</b>
  Dê logo um fim nessa tortura
<b>F7M</b>            <b>G7</b>       <b>C6(9)</b>
  Nosso romance tem que eternizar
 <b>Gm7</b>                 <b>C7</b>
Você tem que me aceitar
<b>F7M</b>
  Eu quero a paz
<b>E7</b>
  Do teu sorriso
<b>Am7</b>          <b>Gm7</b>       <b>C7</b>
   Pra enfeitar meu paraíso
<b>F7M</b>            <b>G7(4)</b>
   Dê uma chance
 <b>G7</b>                <b>C</b>
Não custa nada tentar

 <b>C7</b>         <b>F7M</b>
Meu bem querer
  <b>G7</b>         <b>C</b>
Preciso te amar
<b>C7</b>      <b>F7M</b>     <b>G7</b>   <b>E7(9)</b>  <b>C</b>  <b>C7</b>
O seu amor me faz sonhar
   <b>F7M</b>
Se eu te perder
 <b>G7</b>       <b>C</b>
Não sei onde encontrar
<b>C7</b>        <b>F7M</b>
Um novo amor
     <b>G7</b>   <b>C</b>
Pro seu lugar
 <b>C7</b>         <b>F7M</b>
Meu bem querer
  <b>G7</b>         <b>C</b>
Preciso te amar
<b>C7</b>      <b>F7M</b>    <b>G7</b>    <b>E7(9)</b>  <b>C</b>  <b>C7</b>
O seu amor me faz sonhar
   <b>F7M</b>
Se eu te perder
 <b>G7</b>      <b>C</b>
Não sei onde encontrar
<b>C7</b>        <b>F7M</b>
Um novo amor
     <b>G7</b>    <b>C</b>
Pro seu lugar

<b>C</b>                 <b>Em7</b>
 O teu olhar não me engana
<b>Am</b>              <b>Em</b>
  Eu sei que você me ama
<b>F7M</b>            <b>D#º</b>
  Teu coração diz que você me quer
<b>Am</b>
 Mas o medo não deixa
<b>Gm</b>              <b>C7</b>
  Você se entregar
<b>F7M</b>
  Vem pra mim
 <b>E7</b>
Não faz assim
<b>Am7</b>           <b>Gm7</b>       <b>C7</b>
  Dê logo um fim nessa tortura
<b>F7M</b>            <b>G7</b>       <b>C6(9)</b>
  Nosso romance tem que eternizar
 <b>Gm7</b>                 <b>C7</b>
Você tem que me aceitar
<b>F7M</b>
  Eu quero a paz
<b>E7</b>
  Do teu sorriso
<b>Am7</b>          <b>Gm7</b>       <b>C7</b>
   Pra enfeitar meu paraíso
<b>F7M</b>            <b>G7(4)</b>
   Dê uma chance
 <b>G7</b>                <b>C</b>
Não custa nada tentar

 <b>C7</b>         <b>F7M</b>
Meu bem querer
  <b>G7</b>         <b>C</b>
Preciso te amar
<b>C7</b>      <b>F7M</b>    <b>G7</b>    <b>E7(9)</b>  <b>C</b>  <b>C7</b>
O seu amor me faz sonhar
   <b>F7M</b>
Se eu te perder
 <b>G7</b>      <b>C</b>
Não sei onde encontrar
<b>C7</b>        <b>F7M</b>
Um novo amor
     <b>G7</b>   <b>C</b>
Pro seu lugar
 <b>C7</b>         <b>F7M</b>
Meu bem querer
  <b>G7</b>         <b>C</b>
Preciso te amar
<b>C7</b>      <b>F7M</b>   <b>G7</b>     <b>E7(9)</b>  <b>C</b>  <b>C7</b>
O seu amor me faz sonhar
   <b>F7M</b>
Se eu te perder
 <b>G7</b>      <b>C</b>
Não sei onde encontrar
<b>C7</b>        <b>F7M</b>
Um novo amor
     <b>G7</b>   <b>C</b>
Pro seu lugar

----------------- Acordes -----------------
Am = 2 2 1 2
Am7 = 7 P5 5 5
C = 2 0 1 2
C6(9) = 2 2 1 0
C7 = 2 3 1 2
D#º = 1 2 1 4
Dm = 3 2 3 3
E7 = 2 1 0 0
E7(9) = 2 1 3 4
Em = 5 4 5 5
Em7 = 2 0 0 0
F7M = 3 2 1 2
G7 = P3 4 3 5
G7(4) = 0 0 1 3
Gm = 5 3 3 5
Gm7 = 5 P3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PrecisoTeAmarPage() {

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
