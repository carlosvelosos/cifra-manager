import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/alceu-valenca/flor-de-tangerina/

const cifra = `Alceu Valença - Flor de Tangerina

[Intro] <b>F#m7</b>  <b>B7</b>  <b>C#m7</b>  <b>D#m7(5-)</b>  <b>G#7</b>  <b>C#m7</b>
        <b>F#m7</b>  <b>B7</b>  <b>C#m7</b>  <b>D#m7(5-)</b>
        <b>G#7</b>  <b>C#m7</b>  <b>G#7</b>  <b>C#m7</b>

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|-19h20h21----------19-21-------------------------------------|
B|----------21-22--19-----22-21--21-22-21-19h21p19-------------|
G|-------------------------------------------------21-20-18-17-|
D|-------------------------------------------------------------|
A|-------------------------------------------------------------|
E|-------------------------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-----------------7h8h9--------7-9----------------------------|
B|-22-21-19-22-21--------9-10--7---10-9--9-10-9-7h9p7----------|
G|---------------------------------------------------9-8-------|
D|------------------------------------------------------11-10--|
A|-------------------------------------------------------------|
E|-------------------------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-------------------------------------------------------------|
B|-------------------------------------------------------------|
G|-11-9-8--6---6-----------------------------------------------|
D|-----------6-------------------------------------------------|
A|-------------------------------------------------------------|
E|-------------------------------------------------------------|</span></span>

[Primeira Parte]

                        <b>F#m7</b>
Hoje eu sonhei que ela voltava
  <b>G#7</b>                         <b>C#m7</b>
       E vinha muito mais que linda
                <b>F#m7</b>
À meia luz me acordava
   <b>G#7</b>                        <b>C#m7</b>
       Cheirando a flor de tangerina

[Refrão]

<b>C#7</b>                      <b>F#m7</b>
   Eu lhe amava e mergulhava
<b>B7</b>                         <b>E7M</b>
   No seu olhar de onça menina
<b>A7M</b>                   <b>D7M</b>
   E docemente me afogava
<b>G#7</b>                     <b>C#m7</b>
   Em suas águas cristalinas
<b>C#7</b>                      <b>F#m7</b>
   Eu lhe amava e mergulhava
<b>B7</b>                         <b>E7M</b>
   No seu olhar de onça menina
<b>A7M</b>                    <b>D7M</b>
   E docemente me afogava
<b>G#7</b>                     <b>C#m7</b>
   Em suas águas cristalinas
<b>G#7</b>
   Em suas águas

[Segunda Parte]

                          <b>F#m7</b>
Depois sonhei que ela voltava
   <b>G#7</b>                         <b>C#m7</b>
       E dessa vez bem mais que linda
                  <b>F#m7</b>
À meia luz me afagava
   <b>G#7</b>                    <b>C#m7</b>
       E sua pele era tão fina

[Refrão]

<b>C#7</b>                           <b>F#m7</b>
   Quando acordei meu bem chegava
<b>B7</b>                  <b>E7M</b>
   Seria onça ou menina
<b>A7M</b>                      <b>D7M</b>
   Chegar assim de madrugada
<b>G#7</b>                          <b>C#m7</b>
   Cheirando a flor de tangerina
<b>G#7</b>
   Cheirando a flor

( <b>F#m7</b>  <b>B7</b>  <b>C#m7</b>  <b>D#m7(5-)</b>  <b>G#7</b>  <b>C#m7</b> )
( <b>F#m7</b>  <b>B7</b>  <b>C#m7</b>  <b>D#m7(5-)</b>  <b>G#7</b> )

[Segunda Parte]

                          <b>F#m7</b>
Depois sonhei que ela voltava
   <b>G#7</b>                         <b>C#m7</b>
       E dessa vez bem mais que linda
                  <b>F#m7</b>
À meia luz me afagava
  <b>G#7</b>                    <b>C#m7</b>
       E sua pele era tão fina

[Refrão]

<b>C#7</b>                           <b>F#m7</b>
   Quando acordei meu bem chegava
<b>B7</b>                  <b>E7M</b>
   Seria onça ou menina
<b>A7M</b>                      <b>D7M</b>
   Chegar assim de madrugada
<b>G#7</b>                          <b>C#m7</b>
   Cheirando a flor de tangerina

<b>C#7</b>                           <b>F#m7</b>
   Quando acordei meu bem chegava
<b>B7</b>                  <b>E7M</b>
   Seria onça ou menina
<b>A7M</b>                      <b>D7M</b>
   Chegar assim de madrugada
<b>G#7</b>                          <b>C#m7</b>
   Cheirando a flor de tangerina
<b>G#7</b>
   Cheirando a flor

[Final] <b>F#m7</b>  <b>B7</b>  <b>C#m7</b>  <b>D#m7(5-)</b>  <b>G#7</b>  <b>C#m7</b>
        <b>F#m7</b>  <b>B7</b>  <b>C#m7</b>  <b>D#m7(5-)</b>  <b>G#7</b>  <b>C#m7</b>

----------------- Acordes -----------------
A7M = X 0 2 1 2 0
B7 = X 2 1 2 0 2
C#7 = X 4 3 4 2 X
C#m7 = X 4 6 4 5 4
D#m7(5-) = X X 1 2 2 2
D7M = X X 0 2 2 2
E7M = X X 2 4 4 4
F#m7 = 2 X 2 2 2 X
G#7 = 4 6 4 5 4 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FlorDeTangerinaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/alceu-valenca/flor-de-tangerina/"
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
