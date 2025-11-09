import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/zeca-pagodinho/agua-da-minha-sede/
const cifra = `

[Intro] <b>G6(9)</b>  <b>C</b>  <b>D7</b>

<b>G</b>            <b>C/E</b>     <b>G</b>                <b>C/E</b>
Eu preciso do seu amor  paixão forte me domina
<b>Bb</b>        <b>Eb</b>      <b>Bb</b>           <b>Eb</b>      <b>C/E</b>
Agora que começou   não sei como termina
           <b>C</b>              <b>D7</b>       <b>Bm7(5-)</b>
Água da minha sede  bebo na sua fonte
              <b>E7</b>      <b>A7(9)</b>                 <b>D7</b>     <b>G</b>
Sou peixe na sua rede   pôr-do-sol no seu horizonte
              <b>C/E</b>      <b>G</b>                    <b>C/E</b>     <b>G</b>
Quando você sambou na roda  quando você sambou na roda
                 <b>B7</b>     <b>Em7</b>                  <b>B7</b>     <b>Em7</b>
Fiquei a fim de te namorar  fiquei a fim de te namorar
             <b>A7</b>     <b>D7</b>                        <b>Bm</b>
O amor tem essa história  se bate já quer entrar
           <b>E7</b>       <b>A7(9)</b>            <b>D7</b>    <b>G</b>
Se entrar não quer sair  ninguém sabe explicar
               <b>C/E</b>      <b>G</b>                 <b>C/E</b>      <b>G</b>
O meu amor é passarinheiro  o meu amor é passarinheiro
              <b>B7</b>     <b>Em7</b>               <b>B7</b>     <b>Em7</b>
Ele só quer passarinhar ele só quer passarinhar
               <b>A7</b>    <b>D7</b>
Seu beijo é um alçapão  seu abraço é uma gaiola
<b>Bm7</b>              <b>E7</b>      <b>A7(9)</b>                  <b>D7</b>     <b>G</b>
Que prende meu coração    que nem moda de viola
                   <b>D7</b>
Na gandaia  na gandaia
              <b>G</b>
Fruto do seu amor me pegou
          <b>D7</b>    <b>Ebº</b>        <b>Em7</b>
Na gandaia   sua renda me rodou
     <b>D7</b>                        <b>Bm7</b>     <b>E7</b>
Foi a gira  foi canjira que me enfeitiçou
       <b>Am7</b>      <b>D7</b>            <b>G</b>
Apaixonado  preciso do seu amor

----------------- Acordes -----------------
A7 = 2 0 2 2
A7(9) = 7 6 8 9
Am7 = 7 P5 5 5
B7 = 1 2 0 1
Bb = P3 3 3 3
Bm = 4 4 3 4
Bm7 = 4 2 3 4
Bm7(5-) = 3 2 0 0
C = 2 0 1 2
D7 = 4 2 1 4
E7 = 2 1 0 0
Eb = 5 3 4 5
Ebº = 1 2 1 4
Em7 = 2 0 0 0
G = 5 4 3 5
G6(9) = 5 4 5 7`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    ""
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
