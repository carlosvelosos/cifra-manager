import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/revelacao/aventureiro-170078/

const cifra = `Revelacao - Aventureiro

[Intro] <b>Bb</b>  <b>Eb</b>  <b>F</b>  <b>F7</b>  
        <b>Bb</b>  <b>F7</b>  <b>Bb</b>  <b>C7</b>  <b>F7</b>  <b>F7(9)</b>

<b>Bb</b>                        <b>Ebm6</b>
  Eu sou aventureiro e você não merece isso
<b>Bb</b>                              <b>Gbº</b>
  Eu tô comprometido em me amarrar jamais
                 <b>Gm7</b>          <b>Gm/F</b>
Aliás, eu tenho medo de sofrer
                 <b>Cm7</b>                   <b>F7(4)</b>
Antes que seja tarde, então, vamos parar com isso
<b>Bb</b>                                    <b>Ebm6</b>
  Não, não tem outro jeito, já que está ficando sério
<b>Bb</b>                                 <b>Gbº</b>
É, quando um não quer, dois nunca formam um casal
       <b>Gm7</b>                       <b>Gm/F</b>
Eu tô mal só de pensar que vai doer
           <b>Cm7</b>                   <b>F7(4)</b>
Antes que seja tarde, então, vamos parar com isso

<b>Bb9</b>       <b>F</b>         <b>Gm7</b>        <b>Bb7(9)</b>   <b>C7</b>
Eu, nesse faz-de-conta, meu coração desmonta
                    <b>Ebm6</b>               <b>Bb9</b>
Teu coração padece, isso me entristece
         <b>F</b>         <b>Gm7</b>         <b>Bb7</b>
Teu corpo quer um ninho, eu só voar sozinho
     <b>C</b>              <b>Ebm6</b>                  <b>Bb9</b>
Sem metade de nada, sigo por essa estrada  é

                <b>Bb7</b>             <b>C7</b>
O destino é quem vai saber depois
              <b>Ebm6</b>                <b>Bb9</b>
Se vamos viver sós ou pra nós dois
                       <b>Bb7</b>         <b>C7</b>
Que o bom Deus lhe conceda amor e paz
                       <b>Ebm6</b>           
Quem sabe eu volte um dia, ou nunca mais`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AventureiroPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/revelacao/aventureiro-170078/"
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
