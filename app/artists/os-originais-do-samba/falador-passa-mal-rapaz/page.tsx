import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/os-originais-do-samba/falador-passa-mal-rapaz/#

const cifra = `Os Originais Do Samba - Falador Passa Mal Rapaz

Intro: <b>F#m7</b>   <b>A7</b>   <b>D7+(9)</b> <b>C#7(9+)</b> (2x)

<b>F#m7</b>      <b>A7</b>       <b>D7+(9)</b>
     Falador Passa Mal Rapaz!
<b>C#7(9+)</b>          <b>F#m</b>
   Falador Passa Mal!
   <b>A7</b>      <b>D7+(9)</b>    <b>C#7(9+)</b>
Falador Passa Mal Rapaz!...(2x)

<b>F#m7</b>       <b>A7</b>       <b>D7+(9)</b>
     Quem mandou você mentir?
  <b>C#7(9+)</b>       <b>F#m7</b>
Você vai se machucar!
   <b>A7</b>       <b>D7+(9)</b>
Novamente aqui estou
      <b>C#7(9+)</b>
Você vai ter que me aturar

<b>F#m7</b>         <b>A7</b>
     Eheheheheheheheheee!...
<b>D7+(9)</b>    <b>C#7(9+)</b>        <b>F#m7</b>
    Falador Passa Mal Rapaz!
<b>A7</b>                <b>D7+(9)</b>
    Falador Passa Mal!
  <b>C#7(9+)</b>    <b>F#m7</b>
Falador Passa Mal Rapaz!

<b>A7</b>
Ehehehehehahahahaaa!...
<b>D7+(9)</b>    <b>C#7(9+)</b>          <b>F#m7</b>
    Quem mandou você mentir?
   <b>A7</b>           <b>D7+(9)</b>
Você vai se machucar!
  <b>C#7(9+)</b>           <b>F#m7</b>
Novamente aqui estou
      <b>A7</b>                <b>D7+(9)</b> <b>C#7(9+)</b>
Você vai ter de me aturar!...

<b>F#m7</b>         <b>A7</b>            <b>D7+(9)</b>
       Que malandro é você?
    <b>C#7(9+)</b>          <b>F#m7</b>
Que não sabe o que diz!
  <b>A7</b>         <b>D7+(9)</b>
Cuidado que muita mentira
    <b>C#7(9+)</b>                 <b>F#m7</b>
Você pode perder o nariz!...
<b>A7</b>          <b>D7+(9)</b>   <b>C#7(9+)</b>
Olha, eu vou te dá um alô
           <b>F#m7</b>
Que é pra você se mancar
<b>A7</b>          <b>D7+(9)</b>   <b>C#7(9+)</b>
Olha, eu vou te dá um alô
           <b>F#m7</b>
Que é pra você se mancar...
<b>A7</b>      <b>D7+(9)</b>
Se você saiu por aí
 <b>C#7(9+)</b>
E não conseguiu
   <b>F#m7</b>
Arranjar alguém
<b>A7</b>              <b>D7+(9)</b>
Deixe que alguém
         <b>C#7(9+)</b>
Saia por aí
         <b>F#m7</b>
E consiga arranjar você!
    <b>A7</b>
Porque!...
  <b>D7+(9)</b>   <b>C#7(9+)</b>
Falador! Falador!
<b>F#m7</b>      <b>A7</b>
Ehehehehehahahaha!
  <b>D7+(9)</b>   <b>C#7(9+)</b>  <b>F#m7</b> <b>A7</b>
Falador! Falador!...

<b>D7+(9)</b>    <b>C#7(9+)</b>  <b>F#m7</b>
    Falador Passa Mal Rapaz!
<b>A7</b>               <b>D7+(9)</b>
    Falador Passa Mal!
   <b>C#7(9+)</b>  <b>F#m7</b>      <b>A7</b>
Falador Passa Mal Rapaz!
<b>D7+(9)</b>       <b>C#7(9+)</b>       <b>F#m7</b>
       Que malandro é você?
     <b>A7</b>        <b>D7+(9)</b>
Que não sabe o que diz!
 <b>C#7(9+)</b>       <b>F#m7</b>
Cuidado que muita mentira
      <b>A7</b>               <b>D7+(9)</b>
Você pode perder o nariz!...
<b>C#7(9+)</b>          <b>F#m7</b>
Olha, eu vou te dá um alô
<b>A7</b>          <b>D7+(9)</b>
Que é prá você se mancar
<b>C#7(9+)</b>        <b>F#m7</b>
Olha, eu vou te dá um alô
<b>A7</b>          <b>D7+(9)</b>
Que é prá você se mancar
<b>C#7(9+)</b>   <b>F#m7</b>
Se você saiu por aí
   <b>A7</b>
E não conseguiu
    <b>D7+(9)</b>
Arranjar alguém
<b>C#7(9+)</b>        <b>F#m7</b>
Deixe que alguém
        <b>A7</b>
Saia por aí
        <b>D7+(9)</b>
E consiga arranjar você!
     <b>C#7(9+)</b>
Porque!...

Ahahahahahahahaha!
Ahahahahahahahaha!
    <b>F#m7</b>      <b>A7</b>
Falador! Falador!
<b>D7+(9)</b>   <b>C#7(9+)</b>
Ahahahahahahahaha!
    <b>F#m7</b>      <b>A7</b> <b>D7+(9)</b> <b>C#7(9+)</b>
Falador! Falador!

( <b>F#m7</b>   <b>A7</b>    <b>D7+(9)</b> <b>C#7(9+)</b> )

Cala Boca! Cala Boca!
Ahahahahahahahah!
Cala Boca! Cala Boca!
    <b>F#m7</b>      <b>A7</b> <b>D7+(9)</b> <b>C#</b>
Falador! Falador!
Cala Boca! Cala Boca!...`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function FaladorPassaMalRapazPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/os-originais-do-samba/falador-passa-mal-rapaz/#"
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
