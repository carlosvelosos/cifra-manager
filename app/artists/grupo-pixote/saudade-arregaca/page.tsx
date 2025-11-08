import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/pixote/saudade-arregaca/

const cifra = `Grupo Pixote - Saudade Arregaça

<b>Bb</b>      <b>F</b>
Lê-lê-lê-lê
    <b>Cm</b>   <b>Eb</b>
Lê-lê-lê-lê
<b>Gm</b>     <b>F</b>
Fica a pergunta no ar
<b>Cm</b>         <b>Eb</b>
Será que dessa vez a gente vai dar certo
<b>Gm</b>  <b>F</b>          <b>Cm</b>               <b>Eb</b>
Tão perto e o nosso futuro tão incerto
 <b>Gm</b>    <b>F</b>
E se a gente parar
<b>Cm</b>         <b>Eb</b>
Será que o nosso coração aguenta
<b>Gm</b>   <b>F</b>           <b>Eb</b>        <b>E</b>  <b>F</b>
Nem tenta se não quiser ficar
<b>F</b>                           <b>Cm</b>
Daqui pra frente é tudo ou nada
                         <b>Gm</b>
Não há espaço pra meias palavras
                       <b>F</b>
Se for pra ser metade deixa como está
<b>Bb</b>
Tudo ou nada
      <b>F</b>                     <b>Cm</b>
Se for amor cê vem que tudo passa
<b>Cm</b>
Se for embora tá na cara
<b>Eb</b>              <b>Bb</b>
Saudade arregaça
                             <b>F</b>
Tá na sua mão agora é tudo ou nada
                        <b>Cm</b>
Se for amor cê vem que tudo passa
<b>Cm</b>
Se for embora tá na cara
 <b>Eb</b>             <b>Bb</b>
Saudade arregaça
<b>Gm</b>                 <b>F</b>
Fica a pergunta no ar
<b>Cm</b>        <b>Eb</b>
Será que dessa vez a gente vai dar certo
<b>Gm</b>    <b>F</b>           <b>Cm</b>           <b>Eb</b>
Tão perto e o nosso futuro tão incerto
 <b>Gm</b>      <b>F</b>
E se a gente parar
<b>Cm</b>          <b>Eb</b>
Será que o nosso coração aguenta
<b>Gm</b>       <b>F</b>         <b>Eb</b>       <b>E</b>  <b>F</b>
Nem tenta se não quiser ficar
<b>F</b>                          <b>Cm</b>
Daqui pra frente é tudo ou nada
                        <b>Gm</b>
Não a espaço pra meias palavras
                       <b>F</b>
Se for pra ser metade deixa como está
<b>Bb</b>
Tudo ou nada
      <b>F</b>                      <b>Cm</b>
Se for amor cê vem que tudo passa
 <b>Cm</b>
Se for embora tá na cara
<b>Eb</b>             <b>Bb</b>
Saudade arregaça
                             <b>F</b>
Tá na sua mão agora é tudo ou nada
                         <b>Cm</b>
Se for amor cê vem que tudo passa
<b>Cm</b>
Se for embora tá na cara
<b>Eb</b>             <b>Bb</b>
Saudade arregaça
                             <b>F</b>
Tá na sua mão agora é tudo ou nada
                        <b>Cm</b>
Se for amor cê vem que tudo passa
<b>Cm</b>
Se for embora tá na cara
<b>Eb</b>             <b>Bb</b>
Saudade arregaça
                             <b>F</b>
Tá na sua mão agora é tudo ou nada
                         <b>Cm</b>
Se for amor cê vem que tudo passa
<b>Cm</b>
Se for embora tá na cara
<b>Eb</b>             <b>Bb</b>
Saudade arregaça
<b>Bb</b>        <b>F</b>
Lê-lê-lê-lê
      <b>Gm</b>  <b>Eb</b>
Lê-lê-lê-lê
<b>Eb</b>            <b>Bb</b>
Saudade arregaça
<b>Bb</b>       <b>F</b>
Lê-lê-lê-lê
      <b>Gm</b>  <b>Eb</b>
Lê-lê-lê-lê
<b>Eb</b>            <b>Bb</b>
Saudade arregaça

----------------- Acordes -----------------
Bb = P3 3 3 3
Cm = 1 0 1 1
E = 2 1 0 2
Eb = 5 3 4 5
F = 3 2 1 3
Gm = 5 3 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SaudadeArregacaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/pixote/saudade-arregaca/"
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
