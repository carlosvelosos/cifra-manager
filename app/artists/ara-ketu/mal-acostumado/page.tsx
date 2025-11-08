import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/araketu/mal-acostumado/

const cifra = `Ara Ketu - Mal Acostumado

[Intro] <b>Cm</b>  <b>Fm</b>  <b>Bb</b>  <b>Eb7M</b>  <b>Dm7(5-)</b>  <b>G7</b>
        <b>Cm</b>  <b>Fm</b>  <b>Bb</b>  <b>G7(4)</b>  <b>G7</b>

<span class="tablatura">[Tab - Solo Intro]

<span class="cnt">E|------------------------------------------|
B|-----3-4-3-------------3-4-3--------------|
G|---5-------5-----------------5------------|
D|-5-----------5-6~--------------6-8--------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|-----------6---6/8~--11-11-11-9-8-8~------|
G|-----5-7-8---8----------------------------|
D|---8--------------------------------------|
A|-8----------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|-----3-4-3-------------3-4-3--------------|
G|---5-------5-----------------5------------|
D|-5-----------5-6~--------------6-8--------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|-----------6---6/8~--8h9p8-6-8-6----------|
G|-----5-7-8---8----------------------------|
D|---8--------------------------------------|
A|-8----------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|-6-6-6------------------------------------|
G|-------8-7-5~-----------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

<b>Cm</b>                        <b>Fm</b>  <b>Bb</b>
Amor de verdade eu só senti
           <b>Eb7M</b>      <b>Dm7(5-)</b>  <b>G7</b>
Foi com você meu bem
   <b>Cm</b>                      <b>Fm</b>     <b>Bb</b>
E todas as loucuras desse nosso amor
         <b>Eb7M</b>      <b>Dm7(5-)</b>  <b>G7</b>
Você me deu também

[Pré-Refrão]

   <b>Cm</b>                       <b>Fm</b>
Você já faz parte da minha vida
   <b>Bb</b>                   <b>Eb7M</b>        <b>G7</b>
E fica tão difícil dividir você de mim
    <b>Cm</b>                     <b>Fm</b>
E quando faz carinho me abraça
                <b>Ab</b>
Aí eu fico de graça
                     <b>G7</b>  <b>G7(4)</b>  <b>G7</b>
Te chamando pra me amar

[Refrão]

           <b>Fm</b>
Mal acostumado
            <b>Bb</b>
Você me deixou
           <b>Eb7M</b>
Mal acostumado
            <b>Cm</b>
Com o seu amor
       <b>Ab</b>
Então volta
                        <b>Fm</b>
Traz de volta o meu sorriso
                    <b>G7(4)</b>    <b>G7</b>  <b>G7(4)</b>  <b>G7</b>
Sem você não posso ser feliz

           <b>Fm</b>
Mal acostumado
            <b>Bb</b>
Você me deixou
           <b>Eb7M</b>
Mal acostumado
            <b>Cm</b>
Com o seu amor
       <b>Ab</b>
Então volta
                        <b>Fm</b>
Traz de volta o meu sorriso
                    <b>G7(4)</b>  <b>G7</b>  <b>Cm</b>
Sem você não posso ser  feliz

( <b>Fm</b>  <b>Bb</b>  <b>Eb7M</b>  <b>Dm7(5-)</b>  <b>G7</b> )
( <b>Cm</b>  <b>Fm</b>  <b>Bb</b>  <b>G7(4)</b>  <b>G7</b> )

[Primeira Parte]

<b>Cm</b>                        <b>Fm</b>  <b>Bb</b>
Amor de verdade eu só senti
           <b>Eb7M</b>      <b>Dm7(5-)</b>  <b>G7</b>
Foi com você meu bem
   <b>Cm</b>                      <b>Fm</b>     <b>Bb</b>
E todas as loucuras desse nosso amor
         <b>Eb7M</b>      <b>Dm7(5-)</b>  <b>G7</b>
Você me deu também

[Pré-Refrão]

   <b>Cm</b>                       <b>Fm</b>
Você já faz parte da minha vida
   <b>Bb</b>                   <b>Eb7M</b>        <b>G7</b>
E fica tão difícil dividir você de mim
    <b>Cm</b>                     <b>Fm</b>
E quando faz carinho me abraça
                <b>Ab</b>
Aí eu fico de graça
                     <b>G7</b>
Te chamando pra me amar

[Refrão]

           <b>Fm</b>
Mal acostumado
            <b>Bb</b>
Você me deixou
           <b>Eb7M</b>
Mal acostumado
            <b>Cm</b>
Com o seu amor
       <b>Ab</b>
Então volta
                        <b>Fm</b>
Traz de volta o meu sorriso
                    <b>G7(4)</b>    <b>G7</b>  <b>G7(4)</b>  <b>G7</b>
Sem você não posso ser feliz

           <b>Fm</b>
Mal acostumado
            <b>Bb</b>
Você me deixou
           <b>Eb7M</b>
Mal acostumado
            <b>Cm</b>
Com o seu amor
       <b>Ab</b>
Então volta
                        <b>Fm</b>
Traz de volta o meu sorriso
                    <b>G7(4)</b>    <b>G7</b>  <b>G7(4)</b>  <b>G7</b>
Sem você não posso ser feliz

           <b>Fm</b>
Mal acostumado
            <b>Bb</b>
Você me deixou
           <b>Eb7M</b>
Mal acostumado
            <b>Cm</b>
Com o seu amor
       <b>Ab</b>
Então volta
                        <b>Fm</b>
Traz de volta o meu sorriso
                    <b>G7(4)</b>  <b>G7</b>
Sem você não posso ser  feliz

[Final] <b>Cm</b>  <b>Fm</b>  <b>Bb</b>  <b>Eb7M</b>  <b>Dm7(5-)</b>  <b>G7</b>
        <b>Cm</b>  <b>Fm</b>  <b>Bb</b>  <b>G7(4)</b>  <b>G7</b>  <b>Cm7(9)</b>

<span class="tablatura">[Tab - Solo Final]

<span class="cnt">E|------------------------------------------|
B|-----3-4-3-------------3-4-3--------------|
G|---5-------5-----------------5------------|
D|-5-----------5-6~--------------6-8--------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|-----------6---6/8~--11-11-11-9-8-8~------|
G|-----5-7-8---8----------------------------|
D|---8--------------------------------------|
A|-8----------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|-----3-4-3-------------3-4-3--------------|
G|---5-------5-----------------5------------|
D|-5-----------5-6~--------------6-8--------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|-----------6---6/8~--8h9p8-6-8-6----------|
G|-----5-7-8---8----------------------------|
D|---8--------------------------------------|
A|-8----------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|------------------------------------------|
B|-6-6-6------------------------------------|
G|-------8-7-5~-----------------------------|
D|------------------------------------------|
A|------------------------------------------|</span></span>
E|------------------------------------------|

----------------- Acordes -----------------
Ab = 4 3 1 1 1 4
Bb = X 1 3 3 3 1
Cm = X 3 5 5 4 3
Cm7(9) = X 3 1 3 3 X
Dm7(5-) = X X 0 1 1 1
Eb7M = X X 1 3 3 3
Fm = 1 3 3 1 1 1
G7 = 3 5 3 4 3 3
G7(4) = 3 5 3 5 3 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MalAcostumadoPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/araketu/mal-acostumado/"
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
