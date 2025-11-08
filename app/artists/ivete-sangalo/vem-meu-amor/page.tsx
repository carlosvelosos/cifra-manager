import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/ivete-sangalo/vem-meu-amor/

const cifra = `Ivete Sangalo - Vem Meu Amor

<b>E</b>                     <b>A</b>
Quando eu te vejo paro logo em seu olhar
        <b>F#m</b>             <b>Cº</b>        <b>C#m</b>
O meu desejo é que eu possa te beijar
                                     <b>A</b>
Sentir seu corpo me abrigar em seu calor
               <b>B7</b>                   <b>E</b>
Hoje o que eu quero é ganhar o seu amor

                              <b>A</b>
E fico assim querendo o seu prazer
         <b>F#m</b>                   <b>C#m</b>
Eu não consigo um minuto sem te ver
                            <b>A</b>
Sua presença alegra meu coração
          <b>B7</b>                     <b>E</b>
E é pra você que eu canto essa canção

         <b>E</b>                  <b>A</b>
Vem meu amor me tirar da solidão
         <b>F#m</b>       <b>Cº</b>       <b>C#m</b> 
Vem meu amor me tirar da solidão
            
Vem para o Olodum
            <b>A</b>
Vem dançar no Pelô
         <b>B7</b>
Vem meu amor

Chega pra cá me dá a mão

          <b>E</b>                 <b>A</b>    
Vem meu amor me tirar da solidão
         <b>F#m</b>       <b>Cº</b>       <b>C#m</b> 
Vem meu amor me tirar da solidão

Vem para o Olodum
            <b>A</b>
Vem dançar no Pelô
          <b>B7</b>
Vem meu amor

Chega pra cá me dá a mão

  <b>E</b>
E fico assim querendo o seu prazer
         <b>F#m</b>        <b>Cº</b>           <b>C#m</b>
Eu não consigo um minuto sem te ver
                            <b>A</b>
Sua presença alegra meu coração
          <b>B7</b>                     <b>E</b>
E é pra você que eu canto essa canção

         <b>E</b>                  <b>A</b>
Vem meu amor me tirar da solidão
         <b>F#m</b>       <b>Cº</b>       <b>C#m</b> 
Vem meu amor me tirar da solidão
            
Vem para o Olodum
            <b>A</b>
Vem dançar no Pelô
         <b>B7</b>
E só assim conquistarei o seu 
   <b>E</b>
Coração

----------------- Acordes -----------------
A = X 0 2 2 2 0
B7 = X 2 1 2 0 2
C#m = X 4 6 6 5 4
Cº = X 3 4 2 4 2
E = 0 2 2 1 0 0
F#m = 2 4 4 2 2 2`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VemMeuAmorPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/ivete-sangalo/vem-meu-amor/"
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
