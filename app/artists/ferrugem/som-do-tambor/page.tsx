import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/ferrugem/som-do-tambor

const cifra = `Ferrugem - Som Do Tambor

<b>F7M</b>           <b>Bb7M</b>
Ôoooo.....   laialaia  Ihh 
<b>F7M</b>           <b>Bb7M</b>
Ôoooo.....   laialaia  Ihh 

<b>F7M</b>
 Saí pra pra curtir um som

Por isso eu estou aqui
<b>Bb7M</b>
E papai do céu é bom e cuida de mim

<b>F7M</b>
 Saí pra curtir um som

Nao deu pra curtir só um
<b>Bb7M</b>
  E junto com meus irmaos já estou a bangu


<b>F7M</b>           <b>Bb7M</b>
Ôoooo.....   laialaia  Ihh 
<b>F7M</b>           <b>Bb7M</b>
Ôoooo.....   laialaia  Ihh 

<b>Gm7</b>
 É nessa viagem que eu fico a vontade
                         <b>Am7</b>
E com a minha bagagem eu vou

Tô junto com o tempo, eu sou positivo, nao vai ter perigo
     <b>Gm7</b>
Eu vou ... Na minha, na linha
                    <b>C7</b>
Tirando uma onda, Sabendo chegar
       <b>F7M</b>            <b>F7</b>
Eu vou que vou... eu vou... eu vou

                  <b>Bb7M</b>
Quer saber onde o sol vai se por
                <b>Am7</b>         <b>D7</b> 
Quer saber onde mora o amor

                 <b>Bb7M</b>
Fecha comigo me faz um favor
<b>C7</b>                 <b>Am</b>
Sente a energia do nosso calor
<b>D7</b>                  <b>Gm7</b>
Sabe que a gente se enquadra
             <b>C7</b>     <b>F7M</b>
E a nossa oração é o som do tambor
<b>F7</b>              <b>Bb7M</b>
Fecha comigo me faz um favor
<b>C7</b>                 <b>Am</b>
Sente a energia do nosso calor
<b>D7</b>                 <b>Gm7</b>
Sabe que a gente se enquadra
             <b>C7</b>          <b>F</b>
E a nossa oração é o som do tambor

<b>F7M</b>           <b>Bb7M</b>
Ôoooo.....   laialaia  Ihh 
<b>F7M</b>           <b>Bb7M</b>
Ôoooo.....   laialaia  Ihh 


<b>Gm7</b>
 É nessa viagem que eu fico a vontade
                         <b>Am7</b>
E com a minha bagagem eu vou

Tô junto com o tempo, eu sou positivo, nao vai ter perigo
     <b>Gm7</b>
Eu vou ... Na minha, na linha
                              <b>C7</b>
Tirando uma onda, Sabendo chegar
       <b>F7M</b>            <b>F7</b>
Eu vou que vou... eu vou... eu vou

                  <b>Bb7M</b>
Quer saber onde o sol vai se por
                <b>Am7</b>         <b>D7</b>     
Quer saber onde mora o amor

                <b>Bb7M</b>
Fecha comigo me faz um favor
<b>C7</b>                 <b>Am</b>
Sente a energia do nosso calor
<b>D7</b>                  <b>Gm7</b>
Sabe que a gente se enquadra
             <b>C7</b>       <b>F7M</b>
E a nossa oração é o som do tambor
<b>F7</b>               <b>Bb7M</b>
Fecha comigo me faz um favor
<b>C7</b>                 <b>Am</b>
Sente a energia do nosso calor
<b>D7</b>                 <b>Gm7</b>
Sabe que a gente se enquadra
             <b>C7</b>          <b>F</b>
E a nossa oração é o som do tambor

<b>F7M</b>           <b>Bb7M</b>
Ôoooo.....   laialaia  Ihh 
<b>F7M</b>           <b>Bb7M</b>
Ôoooo.....   laialaia  Ihh`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SomDoTamborPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/ferrugem/som-do-tambor"
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
