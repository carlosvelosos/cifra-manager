import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/pixote/meu-amor/

const cifra = `Grupo Pixote - Meu Amor

[Intro] <b>E7M(9)</b>  <b>B7M</b>  <b>G#m7</b>  <b>G7M</b> 
        <b>F#7(4)</b>  <b>B7M</b>  <b>F#7(4)</b>

     <b>B9</b>                   <b>E7M(9)</b>
Minha pele sente frio sem você
      <b>B9</b>              <b>G#m7</b>      <b>G7M</b>  <b>F#7(4)</b>
Teu cheiro ainda está em mim, no ar
 <b>G#m7</b>         <b>E7M</b>          <b>B7M</b>
E o que fa....zer então pra suportar
  <b>B7/13</b>                 <b>E7M</b>
Essa vontade sofre meu coração
         <b>C#m7</b>            <b>F#7(4)</b>        <b>B7M</b>
Volta pra mim meu corpo clama por você

[Refrão]

<b>F#7(4)</b>  <b>F#7</b>   <b>B7M</b>
Meu amor
  <b>F#/Bb</b>                <b>A7(13)</b>  <b>G#7</b>
Não consegui dormir direito
    <b>C#m7</b>
Por favor
               <b>C#m/B</b>  <b>F#7(4)</b>  <b>F#7(13)</b> 
Diz que vai voltar pra mim
   <b>B7M</b>            <b>F#/A#</b>      <b>A7(13)</b>       <b>G#7</b>                  
Telefona, nem se for pra dizer que acabou
       <b>C#m7</b>         <b>Ebm7</b>
Já não posso mais viver
       <b>E7M</b>         <b>F#7(4)</b>     <b>B7M</b>   <b>F#7(4)</b>  <b>F#7</b>
Não aguento mais sofrer de amor 

   <b>B9</b>                      <b>E7M</b>
Será que ainda lembro de nós dois
   <b>B9</b>           <b>G#m7</b>     <b>G7M</b>  <b>F#7(4)</b>
Você partiu sem me dizer adeus
<b>G#m7</b>      <b>E7M</b>       
E eu sofro de paixão
<b>B7M</b>               <b>B7(13)</b>
Sem esse amor na minha vida
<b>E7M</b>                 
Não dá pra te esquecer
<b>C#m7</b>                        <b>F#7(11)</b>  <b>B7M</b>        
Volta pra mim meu corpo clama por você

[Refrão] 

<b>G7(4)</b>  <b>G7</b>  <b>C7M</b>
  Meu amor
             <b>G/B</b>  <b>Gm/Bb</b>  <b>A7</b>
Não consegui dormir direito
    <b>Dm7</b> 
Por favor
       <b>Dm/C</b>      <b>F/G</b>  <b>G7(13)</b>  <b>G7</b>
Diz que vai voltar pra mim
   <b>C7M</b>           <b>G/B</b>  <b>Gm/Bb</b>      <b>A7</b>
Telefona, nem se for pra dizer que acabou
       <b>Dm7</b>         <b>Em7</b>
Já não posso mais viver
       <b>Dm7</b>         <b>G7</b>     <b>C7M</b>   <b>Fm6</b>  <b>C7M</b>
Não aguento mais sofrer de amor

<b>G7(4)</b>  <b>G7</b>  <b>C7M</b>
  Meu amor
             <b>G/B</b>  <b>Gm/Bb</b>  <b>A7</b>
Não consegui dormir direito
    <b>Dm7</b> 
Por favor
       <b>Dm/C</b>      <b>F/G</b>  <b>G7(13)</b>  <b>G7</b>
Diz que vai voltar pra mim
   <b>C7M</b>           <b>G/B</b>  <b>Gm/Bb</b>      <b>A7</b>
Telefona, nem se for pra dizer que acabou
       <b>Dm7</b>         <b>Em7</b>
Já não posso mais viver
       <b>Dm7</b>         <b>G7</b>     <b>C7M</b>   <b>Fm6</b>  <b>C7M</b>
Não aguento mais sofrer de amor

----------------- Acordes -----------------
A7 = 2 0 2 2
A7(13) = 5 9 7 7
B7(13) = 7 11 9 9
B7/13 = 7 11 9 9
B7M = 4 3 4 4
B9 = P4 6 4 4
C#m/B = P2 4 2 6
C#m7 = 6 4 5 6
C7M = 2 0 0 2
Dm/C = P3 5 3 7
Dm7 = 0 2 1 3
E7M = 2 1 0 1
E7M(9) = 2 5 5 5
Ebm7 = 1 3 2 4
Em7 = 2 0 0 0
F#7 = 4 3 P2 2
F#7(11) = 9 9 7 8
F#7(13) = 2 6 4 4
F#7(4) = 9 9 7 8
Fm6 = 3 1 1 0
G#7 = P4 5 4 6
G#m7 = 6 P4 4 4
G7 = P3 4 3 5
G7(13) = 3 7 5 5
G7(4) = 0 0 1 3
G7M = 5 4 3 4
Gm/Bb = 12 12 11 12`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MeuAmorPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/pixote/meu-amor/"
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
