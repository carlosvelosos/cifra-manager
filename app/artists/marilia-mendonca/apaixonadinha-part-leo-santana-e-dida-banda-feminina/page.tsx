import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/marilia-mendonca/apaixonadinha-part-leo-santana-e-dida-banda-feminina/

const cifra = `Marília Mendonça - Apaixonadinha (part. Léo Santana e Didá Banda Feminina)

[Intro] <b>F</b> 

[Primeira Parte]       

           <b>F</b>                            <b>G</b>
Sabe por que fico mandando mensagem querendo te ver?
           <b>Em</b>       
Sabe por quê? Você me faz bem
           <b>Am</b>
Eu não consigo pensar em ninguém

[Pré-Refrão]

<b>F</b>            <b>G</b>    
Ó que coisa boa!
               <b>Em</b>
Tô sorrindo à toa
            <b>Am</b>
Tô 100% de boa, de boa, de boa

[Refrão]

         <b>F</b>
Apaixonadinha você me deixou
         <b>G</b>
Apaixonadinha você me deixou
         <b>Em</b>
Apaixonadinha você me deixou
           <b>Am</b>
Vem ficar perto da sua menina

         <b>F</b>
Apaixonadinho você me deixou
         <b>G</b>
Apaixonadinho você me deixou
         <b>Em</b>
Apaixonadinho você me deixou
           <b>Am</b>
Vem ficar perto aqui do seu pretinho

[Segunda Parte]

<b>F</b>
Ô meu neném, eu preciso do seu corpo
 <b>G</b>
Você me faz tão bem
 <b>Em</b>
Tá tudo certo, tamo junto e misturado
 <b>Am</b>
Vem, vem, vem

[Refrão]

         <b>F</b>
Apaixonadinha você me deixou
         <b>G</b>
Apaixonadinha você me deixou
         <b>Em</b>
Apaixonadinha você me deixou
           <b>Am</b>
Vem ficar perto da sua menina

( <b>F</b>  <b>G</b>  <b>Em</b>  <b>Am</b> )

[Pré-Refrão]

<b>F</b>            <b>G</b>    
Ó que coisa boa!
               <b>Em</b>
Tô sorrindo à toa
            <b>Am</b>
Tô 100% de boa, de boa, de boa

[Refrão]

         <b>F</b>
Apaixonadinha você me deixou
         <b>G</b>
Apaixonadinha você me deixou
         <b>Em</b>
Apaixonadinha você me deixou
           <b>Am</b>
Vem ficar perto da sua menina

         <b>F</b>
Apaixonadinho você me deixou
         <b>G</b>
Apaixonadinho você me deixou
         <b>Em</b>
Apaixonadinho você me deixou
           <b>Am</b>
Vem ficar perto aqui do seu pretinho

[Segunda Parte]

<b>F</b>
Ô meu neném, eu preciso do seu corpo
 <b>G</b>
Você me faz tão bem
 <b>Em</b>
Tá tudo certo, tamo junto e misturado
 <b>Am</b>
Vem, vem, vem

[Refrão]

         <b>F</b>
Apaixonadinha você me deixou
         <b>G</b>
Apaixonadinha você me deixou
         <b>Em</b>
Apaixonadinha você me deixou
           <b>Am</b>
Vem ficar perto da sua menina

         <b>F</b>
Apaixonadinho você me deixou
         <b>G</b>
Apaixonadinho você me deixou
         <b>Em</b>
Apaixonadinho você me deixou
           <b>Am</b>
Vem ficar perto aqui do seu pretinho

(  <b>F</b>  )

----------------- Acordes -----------------
F#m = 4 2 2 4
C#m = 2 1 2 2
D = 4 2 3 4
E = 2 1 0 2`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ApaixonadinhaPartLeoSantanaEDidaBandaFemininaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/marilia-mendonca/apaixonadinha-part-leo-santana-e-dida-banda-feminina/"
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
