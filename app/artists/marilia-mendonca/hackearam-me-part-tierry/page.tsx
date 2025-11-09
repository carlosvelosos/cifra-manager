import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

// URL: https://www.cifraclub.com.br/marilia-mendonca/hackearam-me-part-tierry/

const cifra = `Marília Mendonça - Hackearam-me (part. Tierry)

[Intro] <b>Bb</b>  <b>Gm7</b>  <b>Dm7</b>  <b>Bb</b>

[Primeira Parte]

    <b>Gm7</b>
Joguei as nossas fotos na lixeira
    <b>C</b>
Pergunta se depois esvaziei
     <b>Am7</b>
Não tive coragem
    <b>Dm7</b>
Tô vendo sempre que me bate saudade

[Pré-Refrão]

<b>Gm7</b>
    Tô evitando os lugares pra não te ver
<b>C</b>
  Tô rejeitando os convites pra beber
<b>Am7</b>
    Me dói falar em bebê
   <b>Dm7</b>
Bebê era como eu chamava você

<b>Gm7</b>
    Meu coração clonou meu chip
   <b>C</b>
E só para te avisar
   <b>Am7</b>
Se essa noite eu te ligar
 <b>Dm7</b>
Não atenda

[Refrão]

                   <b>Gm7</b>
Se acaso, de madrugada
    <b>C</b>
Chegar algum: "volta para mim"
 <b>Am7</b>               <b>Dm7</b>
Hackearam-me, hackearam-me

                   <b>Gm7</b>
Dizendo: "ainda te amo"
      <b>C</b>
É alguém que sabe que eu te perdi
 <b>Am7</b>               <b>Dm7</b>
Hackearam-me, hackearam-me

[Solo] <b>Gm7</b>  <b>C</b>  <b>Am7</b>  <b>Dm7</b>

[Pré-Refrão]

<b>Gm7</b>
    Tô evitando os lugares pra não te ver
<b>C</b>
  Tô rejeitando os convites pra beber
<b>Am7</b>
    Me dói falar em bebê
   <b>Dm7</b>
Bebê era como eu chamava você

<b>Gm7</b>
    Meu coração clonou meu chip
   <b>C</b>
E só para te avisar
   <b>Am7</b>
Se essa noite eu te ligar
 <b>Dm7</b>
Não atenda

[Refrão]

                   <b>Gm7</b>
Se acaso, de madrugada
    <b>C</b>
Chegar algum: "volta para mim"
 <b>Am7</b>           <b>Dm7</b>
Hackearam-me, hackearam-me

                   <b>Gm7</b>
Dizendo: "ainda te amo"
      <b>C</b>
É alguém que sabe que eu te perdi
 <b>Am7</b>           <b>Dm7</b>
Hackearam-me, hackearam-me

                   <b>Gm7</b>
Se acaso, de madrugada
    <b>C</b>
Chegar algum: "volta para mim"
 <b>Am7</b>           <b>Dm7</b>
Hackearam-me, hackearam-me

                   <b>Gm7</b>
Dizendo: "ainda te amo"
      <b>C</b>
É alguém que sabe que eu te perdi
 <b>Am7</b>           <b>Dm7</b>
Hackearam-me, hackearam-me

    <b>Gm7</b> 
Joguei as nossas fotos na lixeira

----------------- Acordes -----------------
Am7 = 7 P5 5 5
Bb = P3 3 3 3
C = 2 0 1 2
Dm7 = 0 2 1 3
Gm7 = 5 P3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function HackearamMePartTierryPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
