import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/revelacao/deixa-alagar/

const cifra = `

[Intro] <b>Gm7</b>  <b>F#º</b>  <b>Fm7</b>  <b>Bb7(9)</b> 
 <b>Em7(5-)</b>  <b>Am7(5-)</b>  <b>D7(9-)</b>

[Primeira Parte]

<b>Gm7</b>
   Tô sofrendo de amor
<b>Fm7</b>       <b>Bb7(9)</b>
   Mas dizendo a verdade
<b>Eb7M</b>    <b>Cm7(9)</b>
    E agora que eu sou
 <b>Am7(5-)</b>    <b>D7(9-)</b>
Merecedor da tua fidelidade

<b>Gm7</b>
   Mas pra ser a mulher
<b>Fm7</b>        <b>Bb7(9)</b>
   Mais feliz desse mundo
<b>Eb7M</b>      <b>Cm7(9)</b>
    Basta acreditar
 <b>Am7(5-)</b>             <b>D7(9-)</b>
Meu sentimento é profundo

[Pré-Refrão]

<b>Gm7</b>                          <b>Fm7</b>
   Vai ver que a razão de viver
<b>Bb7(9)</b>                <b>Em7(5-)</b>
      Tá focada em você
<b>Am7(5-)</b>                    <b>D7(9-)</b>
       Meu coração é todo seu

            <b>Gm7</b>
E quando a gente quer
         <b>Fm7</b>
Basta dizer sim
<b>Bb7(9)</b>                 <b>Eb7M</b>
      Então volta pra mim
              <b>Am7(5-)</b>
Que eu tô querendo
                <b>D7(9-)</b>
Saciar essa vontade louca

[Refrão]

<b>Gm7</b>
    Lembro da gente
                         <b>Fm7</b>
Se amando embaixo do chuveiro
            <b>Bb7(9)</b>
Vendo o banheiro inundar
<b>Eb7M</b>
     Deixa alagar, deixa alagar
          <b>Am7(5-)</b>         <b>D7(9-)</b>
Deixa alagar,     deixa alagar
<b>Gm7</b>
    E namorando na cozinha
                 <b>Fm7</b>
Com o feijão no fogo
               <b>Bb7(9)</b>
A ponto de nos incendiar
<b>Eb7M</b>
     Deixa queimar, deixa queimar
          <b>Am7(5-)</b>         <b>D7(9-)</b>
Deixa queimar,     deixa queimar

<b>Gm7</b>
    Lembro da gente
                         <b>Fm7</b>
Se amando embaixo do chuveiro
            <b>Bb7(9)</b>
Vendo o banheiro inundar
<b>Eb7M</b>
     Deixa alagar, deixa alagar
          <b>Am7(5-)</b>         <b>D7(9-)</b>
Deixa alagar,     deixa alagar
<b>Gm7</b>
    E namorando na cozinha
                 <b>Fm7</b>
Com o feijão no fogo
               <b>Bb7(9)</b>
A ponto de nos incendiar
<b>Eb7M</b>
     Deixa queimar, deixa queimar
          <b>Am7(5-)</b>         <b>D7(9-)</b>
Deixa queimar,     deixa queimar

( <b>Em7(5-)</b>  <b>Am7(5-)</b>  <b>D7(9-)</b> )

[Primeira Parte]

<b>Gm7</b>
   Tô sofrendo de amor
<b>Fm7</b>       <b>Bb7(9)</b>
   Mas dizendo a verdade
<b>Eb7M</b>    <b>Cm7(9)</b>
    E agora que eu sou
 <b>Am7(5-)</b>    <b>D7(9-)</b>
Merecedor da tua fidelidade

<b>Gm7</b>
   Mas pra ser a mulher
<b>Fm7</b>        <b>Bb7(9)</b>
   Mais feliz desse mundo
<b>Eb7M</b>      <b>Cm7(9)</b>
    Basta acreditar
 <b>Am7(5-)</b>             <b>D7(9-)</b>
Meu sentimento é profundo

[Pré-Refrão]

<b>Gm7</b>                          <b>Fm7</b>
   Vai ver que a razão de viver
<b>Bb7(9)</b>                <b>Em7(5-)</b>
      Tá focada em você
<b>Am7(5-)</b>                    <b>D7(9-)</b>
       Meu coração é todo seu

            <b>Gm7</b>
E quando a gente quer
         <b>Fm7</b>
Basta dizer sim
<b>Bb7(9)</b>                 <b>Eb7M</b>
      Então volta pra mim
              <b>Am7(5-)</b>
Que eu tô querendo
                <b>D7(9-)</b>
Saciar essa vontade louca

[Refrão]

<b>Gm7</b>
    Lembro da gente
                         <b>Fm7</b>
Se amando embaixo do chuveiro
            <b>Bb7(9)</b>
Vendo o banheiro inundar
<b>Eb7M</b>
     Deixa alagar, deixa alagar
          <b>Am7(5-)</b>         <b>D7(9-)</b>
Deixa alagar,     deixa alagar
<b>Gm7</b>
    E namorando na cozinha
                 <b>Fm7</b>
Com o feijão no fogo
               <b>Bb7(9)</b>
A ponto de nos incendiar
<b>Eb7M</b>
     Deixa queimar, deixa queimar
          <b>Am7(5-)</b>         <b>D7(9-)</b>
Deixa queimar,     deixa queimar

<b>Gm7</b>
    Lembro da gente
                         <b>Fm7</b>
Se amando embaixo do chuveiro
            <b>Bb7(9)</b>
Vendo o banheiro inundar
<b>Eb7M</b>
     Deixa alagar, deixa alagar
          <b>Am7(5-)</b>         <b>D7(9-)</b>
Deixa alagar,     deixa alagar
<b>Gm7</b>
    E namorando na cozinha
                 <b>Fm7</b>
Com o feijão no fogo
               <b>Bb7(9)</b>
A ponto de nos incendiar
<b>Eb7M</b>
     Deixa queimar, deixa queimar
          <b>Am7(5-)</b>         <b>D7(9-)</b>
Deixa queimar,     deixa queimar

<b>Gm7</b>
    Lembro da gente
                         <b>Fm7</b>
Se amando embaixo do chuveiro
            <b>Bb7(9)</b>
Vendo o banheiro inundar
<b>Eb7M</b>
     Deixa alagar, deixa alagar
          <b>Am7(5-)</b>         <b>D7(9-)</b>
Deixa alagar,     deixa alagar
<b>Gm7</b>
    E namorando na cozinha
                 <b>Fm7</b>
Com o feijão no fogo
               <b>Bb7(9)</b>
A ponto de nos incendiar
<b>Eb7M</b>
     Deixa queimar, deixa queimar
          <b>Am7(5-)</b>         <b>D7(9-)</b>
Deixa queimar,     deixa queimar

[Final] <b>Em7(5-)</b>  <b>Am7(5-)</b>  <b>D7(9-)</b>

----------------- Acordes -----------------
Am7(5-) = P1 2 1 1
Bb7(9) = 0 1 1 0
Cm7(9) = 0 3 1 1
D7(9-) = 4 5 4 7
Eb7M = 1 3 3 5
Em7(5-) = 2 3 3 5
F#º = 4 2 1 4
Fm7 = 3 5 4 6
Gm7 = 5 P3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DeixaAlagarPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/revelacao/deixa-alagar/"
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
