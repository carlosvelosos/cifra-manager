import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/zeca-pagodinho/o-dono-da-dor/
const cifra = `

<b>G</b>           <b>Bm</b>
Queria a felicidade
<b>C</b>           <b>Bm</b>
Não pra me apaixonar
    <b>E7</b>               <b>Am</b>       <b>D7</b>     <b>G</b>    <b>D7</b>
Por medo desse amor bonito me fazer chorar
<b>G</b>             <b>C</b>           <b>G</b>  <b>C</b>
  Que fazer com meu coração
<b>G</b>        <b>C</b>                 <b>Bm</b>    <b>G7</b>
  Paixão chegou sem dizer nada
<b>C</b>                    <b>Bm</b>       <b>G7</b>
  E ensinou pro meu viver
<b>C</b>                <b>D7</b>              <b>G</b>
  Que o dono da dor sabe quanto dói
           <b>Am</b>           <b>G</b>
Tem jeito não, o peito rói
          <b>D7</b>          <b>G</b>
E só quem amou pode entender
          <b>Am7</b>      <b>G</b>
O poder de fogo da paixão
   <b>D7</b>
Porque
<b>G</b>             <b>Bm</b>
A realidade é dura
<b>C</b>                <b>G</b>
Mas é aí que se cura
   <b>Em</b>           <b>Am7</b>    <b>D7</b>         <b>G</b>   <b>D7</b>
Ninguém pode imaginar o que não viveu
   <b>G</b>         <b>Bm</b>
Queria felicidade
<b>C</b>             <b>G</b>
Não pra me apaixonar
    G#o               D7              G    Am7
Por medo desse amor bonito me fazer chorar
       <b>G</b>               <b>Am</b>
Eu não sabia, óh! Senhor
           <b>Bm7</b>           <b>E7</b>
Das artimanhas do amor
<b>Am7</b>           <b>D7</b>       <b>G</b>  <b>Am</b>
Caí nas garras da sedução
   <b>G</b>             <b>Am</b>
Tá doendo demais
        <b>Bm7</b>         <b>E7</b>
Mexendo com minha paz
   <b>Am</b>         <b>D7</b>     <b>G</b>     <b>D7</b>
Amarga e doce tentação

----------------- Acordes -----------------
Am = 2 2 1 2
Am7 = 7 P5 5 5
Bm = 4 4 3 4
Bm7 = 4 2 3 4
C = 2 0 1 2
D7 = 4 2 1 4
E7 = 2 1 0 0
Em = 5 4 5 5
G = 5 4 3 5
G7 = P3 4 3 5`;

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
