import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/revelacao/so-depois/
const cifra = `

[Intro] <b>Gm7</b>  <b>Dm7</b>  <b>Gm7</b>  <b>D7</b>

[Primeira Parte]

<b>Gm7</b>     <b>Dm7</b>             <b>Gm7</b>
    Só depois que tudo terminou
<b>Dm7</b>     <b>Bb7</b>            <b>Eb7M</b>
Entendi         que não era amor
              <b>Ab7M</b>          <b>Am7(5-)</b>
E tudo que fizemos um só momento
    <b>D7(13-)</b>       <b>Gm7</b>
Deixou de existir
   <b>Dm7</b>
Entendi que o fim foi
<b>Gm7</b>
O melhor pra mim
   <b>Dm7</b>   <b>Bb7</b>         <b>Eb7M</b>
Só assim    pude enxergar
              <b>Ab7M</b>
O que estava tão perto
<b>Am7(5-)</b>           <b>D7(13-)</b>  <b>G7</b>
Eu feito um tolo nem percebi

[Refrão]

<b>Cm7</b>                  <b>Bbm7</b>
   Que na vida o hoje
           <b>Eb7</b>  <b>Ab7M</b>
Tem que aproveitar por que
    <b>Dm7(5-)</b>          <b>G7</b>          <b>Cm7</b>
Eu não sei se o amanhã há de chegar
                           <b>Bbm7</b>
Se me desse ao menos um sinal
           <b>Eb7</b>
Um piscar de olhos
       <b>Ab7M</b>
Um sorriso, eu posso garantir
       <b>Dm7(5-)</b>   <b>G7</b>        <b>Cm</b>
Que o nosso caso ia ser fatal

                 <b>Bbm7</b>
Que na vida o hoje
           <b>Eb7</b>  <b>Ab7M</b>
Tem que aproveitar por que
    <b>Dm7(5-)</b>          <b>G7</b>          <b>Cm7</b>
Eu não sei se o amanhã há de chegar
                           <b>Bbm7</b>
Se me desse ao menos um sinal
           <b>Eb7</b>
Um piscar de olhos
       <b>Ab7M</b>
Um sorriso, eu posso garantir
       <b>Dm7(5-)</b>   <b>G7</b>      <b>Cm7</b>   <b>D7</b>
Que o nosso caso ia ser fatal

[Primeira Parte]

<b>Gm7</b>     <b>Dm7</b>        <b>Gm7</b>
    Só depois que tudo terminou
<b>Dm7</b>     <b>Bb7</b>             <b>Eb7M</b>
Entendi         que não era amor
         <b>Ab7M</b>       <b>Am7(5-)</b>
E tudo que fizemos num só momento
 <b>D7(13-)</b>
Deixou de existir
<b>Gm7</b>    <b>Dm7</b>
    Entendi que o fim foi
<b>Gm7</b>
O melhor pra mim
   <b>Dm7</b>   <b>Bb7</b>         <b>Eb7M</b>
Só assim    pude enxergar
              <b>Ab7M</b>
O que estava tão perto
<b>Am7(5-)</b>           <b>D7(13-)</b>  <b>G7</b>
Eu feito um tolo nem percebi

[Refrão Final]

<b>Cm7</b>                  <b>Bbm7</b>
   Que na vida o hoje
           <b>Eb7</b>  <b>Ab7M</b>
Tem que aproveitar por que
    <b>Dm7(5-)</b>          <b>G7</b>          <b>Cm7</b>
Eu não sei se o amanhã há de chegar
                           <b>Bbm7</b>
Se me desse ao menos um sinal
           <b>Eb7</b>
Um piscar de olhos
       <b>Ab7M</b>
Um sorriso, eu posso garantir
       <b>Dm7(5-)</b>   <b>G7</b>      <b>Cm7</b>
Que o nosso caso ia ser fatal

                 <b>Bbm7</b>
Que na vida o hoje
           <b>Eb7</b>  <b>Ab7M</b>
Tem que aproveitar por que
    <b>Dm7(5-)</b>          <b>G7</b>          <b>Cm7</b>
Eu não sei se o amanhã há de chegar
                           <b>Bbm7</b>
Se me desse ao menos um sinal
           <b>Eb7</b>
Um piscar de olhos
       <b>Ab7M</b>
Um sorriso, eu posso garantir
       <b>Dm7(5-)</b>   <b>G7</b>      <b>Cm</b>
Que o nosso caso ia ser fatal

                 <b>Bbm7</b>
Que na vida o hoje
           <b>Eb7</b>  <b>Ab7M</b>
Tem que aproveitar por que
    <b>Dm7(5-)</b>          <b>G7</b>          <b>Cm7</b>
Eu não sei se o amanhã há de chegar
                           <b>Bbm7</b>
Se me desse ao menos um sinal
           <b>Eb7</b>
Um piscar de olhos
       <b>Ab7M</b>
Um sorriso, eu posso garantir
       <b>Dm7(5-)</b>   <b>G7</b>      <b>Cm7</b>
Que o nosso caso ia ser fatal

[Final] <b>Cm7/Bb</b>  <b>Am7(5-)</b>  <b>Ab7(11+)</b>  <b>Gm7(11)</b>

----------------- Acordes -----------------
Ab7(11+) = 6 5 3 4
Ab7M = 1 0 1 1
Am7(5-) = P1 2 1 1
Bb7 = 3 1 3 3
Bbm7 = 3 1 2 3
Cm = 1 0 1 1
Cm7 = 5 3 4 5
Cm7/Bb = 10 12 11 13
D7 = 4 2 1 4
D7(13-) = 10 11 11 12
Dm7 = 0 2 1 3
Dm7(5-) = 0 P1 1 3
Eb7 = 5 3 2 5
Eb7M = 1 3 3 5
G7 = P3 4 3 5
Gm7 = 5 P3 3 3
Gm7(11) = 0 0 1 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SoDepoisPage() {

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
