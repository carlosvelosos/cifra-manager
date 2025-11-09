import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/tribalistas/velha-infancia/

const cifra = `Tribalistas - Velha Infância

[Intro] <b>F#m</b>  <b>Bm</b>  <b>E</b>  <b>F#m</b>
        <b>F#m</b>  <b>Bm</b>  <b>E</b>  <b>F#m</b>

[Primeira Parte]

<b>F#m</b>
    Você é assim
<b>Bm</b>
   Um sonho pra mim
<b>E</b>                     <b>F#m</b>
  E quando eu não te vejo

Eu penso em você
<b>Bm</b>
   Desde o amanhecer
<b>E</b>                   <b>F#m</b>
  Até quando eu me deito

[Refrão]

          <b>Bm</b>
Eu gosto de você
<b>E</b>          <b>F#m</b>
  E gosto de ficar com você
            <b>Bm</b>
Meu riso é tão feliz contigo
<b>E</b>                <b>F#m</b>
  O meu melhor amigo é o meu amor

E a gente canta
<b>Bm</b>
   E a gente dança
<b>E</b>                   <b>F#m</b>
  E a gente não se cansa

De ser criança
<b>Bm</b>
   Da gente brincar
<b>E</b>                   <b>F#m</b>
  Da nossa velha infância

[Refrão 2]

            <b>Bm</b>
Seus olhos meu clarão
<b>E</b>           <b>F#m</b>
  Me guiam dentro da escuridão
            <b>Bm</b>
Seus pés me abrem o caminho
<b>E</b>            <b>F#m</b>
  Eu sigo e nunca me sinto só

[Primeira Parte]

Você é assim
<b>Bm</b>
   Um sonho pra mim
<b>E</b>                     <b>F#m</b>
  Quero te encher de beijos

Eu penso em você
<b>Bm</b>
   Desde o amanhecer
<b>E</b>                   <b>F#m</b>
  Até quando eu me deito

[Refrão]

          <b>Bm</b>
Eu gosto de você
<b>E</b>          <b>F#m</b>
  E gosto de ficar com você
            <b>Bm</b>
Meu riso é tão feliz contigo
<b>E</b>                <b>F#m</b>
  O meu melhor amigo é o meu amor

A gente canta
<b>Bm</b>
   A gente dança
<b>E</b>                 <b>F#m</b>
  A gente não se cansa

De ser criança
<b>Bm</b>
   Da gente  brincar
<b>E</b>                   <b>F#m</b>
  Da nossa velha infância

[Refrão 2]

            <b>Bm</b>
Seus olhos meu clarão
<b>E</b>           <b>F#m</b>
  Me guiam dentro da escuridão
            <b>Bm</b>
Seus pés me abrem o caminho
<b>E</b>            <b>F#m</b>
  Eu sigo e nunca me sinto só

[Terceira Parte]

Você é assim
<b>Bm</b>                  <b>E</b>
   Um sonho pra mim
          <b>F#m</b>
Você é assim

Você é assim
<b>Bm</b>                  <b>E</b>
   Um sonho pra mim
          <b>F#m</b>
Você é assim

Você é assim
<b>Bm</b>                  <b>E</b>
   Um sonho pra mim
          <b>F#m</b>
Você é assim

[Final] <b>Bm</b>  <b>E</b>  <b>F#m</b>  <b>Bm</b>  <b>E</b>  <b>F#m</b>
        <b>Bm</b>  <b>E</b>  <b>F#m</b>  <b>Bm</b>  <b>E</b>  <b>F#m</b>
        <b>Bm</b>  <b>E</b>  <b>F#m</b>  <b>Bm</b>  <b>E</b>  <b>F#m</b>

----------------- Acordes -----------------
Bm = X 2 4 4 3 2
E = 0 2 2 1 0 0
F#m = 2 4 4 2 2 2`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VelhaInfanciaPage() {
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
