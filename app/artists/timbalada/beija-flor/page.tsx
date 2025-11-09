import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/timbalada/beija-flor/

const cifra = `Timbalada - Beija-Flor

<b>G</b>                            <b>C</b>           <b>Eb</b>                  <b>G</b>
  Eu fui embora meu amor chorou, eu fui embora meu amor chorou
                           <b>C</b>           <b>Eb</b>                  <b>G</b>
Eu fui embora meu amor chorou, eu fui embora meu amor chorou, vou
    <b>F</b>
Voltar
<b>G</b>                             <b>C</b>                 <b>Eb</b>                   <b>G</b>
  Eu vou nas asas de um passarinho, eu vou nos beijos de um beija-Flor
                           <b>C</b>                  <b>Eb</b>                   <b>G</b>
Eu vou nas asas de um passarinho, eu vou nos beijos de um beija-
<b>G</b>
Flor
                           <b>C</b> <b>Eb</b>       <b>G</b>
No tic tic tac do meu coração renascerá
                           <b>C</b> <b>Eb</b>       <b>G</b>
No tic tic tac do meu coração renascerá
                                <b>C</b>                   <b>Eb</b>            <b>G</b>
Timbalada é semente de um novo dia, nordeste sofrimento povo lutador
                                     <b>C</b>
Entre mares e montanhas com você eu vou
                 <b>F7</b> <b>G7</b>     <b>C</b>                 <b>F7</b>      <b>G7</b>
Yo quero te namorar   amor, yo quero te namorar amor
<b>G</b>                                  <b>C</b>                   <b>Eb</b>                             <b>G</b>
Teu lábio é tão doce, doce feito mel, todo azul sua beleza feita
Cor do céu
                                 <b>C</b>                       <b>Eb</b>                   <b>G</b>
Quero me aquecer, sentir o seu calor, rolar pra lá na cama te
               <b>G</b>
Chamar de amor
                                <b>C</b>                   <b>Eb</b>
Fazer mil poesias pra te conquistar, deixá-la simplesmente
               <b>G</b>
Coberta de flor
                                  <b>C</b>      <b>Eb</b>            <b>F7</b> <b>G7</b>        <b>C</b>
Quero me aquecer sentir o seu calor, amor é só me chamar   que eu vou
                 <b>F7</b> <b>G7</b>         <b>G</b>
Amor é só me chamar   que eu vou
                             <b>C</b>                     <b>Eb</b>               <b>G</b>
Estou sentindo a falta de você, sonhando com seu beijo espero
<b>G</b>
Amanhecer
                                  <b>C</b>
Tu levas as palavras soltas pelo ar
                 <b>F7</b> <b>G7</b>    <b>C</b>                  <b>F7</b> <b>G7</b>     <b>C</b>
Yo quero te namorar    amor, yo quero te namorar   amor
                 <b>F7</b> <b>G7</b>    <b>G</b>
Yo quero te namorar   amor
                         <b>C</b>             <b>Eb</b>              <b>G</b>
Que te bande, que te bande, que te Bande, que te bande
                         <b>C</b>      <b>Eb</b>                   <b>F7</b> <b>G7</b>   <b>C</b>
Que te bande ,que te bande preta, yo quero te namorar   amor, yo
               <b>F7</b>  <b>G7</b>     <b>G</b>
Quero te namorar      amor

----------------- Acordes -----------------
C = X 3 2 0 1 0
Eb = X 6 5 3 4 3
F = 1 3 3 2 1 1
F7 = 1 3 1 2 1 1
G = 3 2 0 0 0 3
G7 = 3 5 3 4 3 3`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function BeijaFlorPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/timbalada/beija-flor/"
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
