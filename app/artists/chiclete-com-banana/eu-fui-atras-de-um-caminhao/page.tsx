import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/chiclete-com-banana/eu-fui-atras-de-um-caminhao/

const cifra = `Chiclete Com Banana - Eu fui atrás de um caminhão

<b>G</b>                   <b>Bm</b>
 Eu fui atrás de um caminhão
                    <b>C</b>                     <b>D</b>
 Fazer meu carnaval, e o carnaval é feito no coração
      <b>G</b>                <b>Bm</b>
 Gostei, Chiclete é emoção,
                  <b>C</b>                    <b>D</b>
 Meu bem naquele ano eu me tornei Camaleão

<span class="tablatura">(solo)
<span class="cnt">E|----------------|--------------|----------------|
B|----------------|--------------|----------------|
G|----------------|-----------5~-|--8--7--8--7-5-7|
D|--5-7-8--7--5---|-5-7-8-7-5----|----------------|
A|----------------|--------------|----------------|
E|----------------|--------------|----------------|</span></span>

<span class="tablatura"><span class="cnt">E|----------------|--------------|--------------------|
B|----------------|--------------|--------8--7-10-8~~~|
G|----------------|-----------5~-|--8--7--------------|
D|--5-7-8--7--5---|-5-7-8-7-5----|--------------------|
A|----------------|--------------|--------------------|
E|----------------|--------------|--------------------|</span></span>

<b>Gm</b>
 Encontrei o meu amor,

 Na cidade de salvador
        <b>F</b>               <b>D#</b>
 Tão romântica, tão histórica
               <b>D</b>
 E o Bomfim abençoou

<b>Gm</b>
 No farol de Itapuã,
                           <b>F</b>               <b>D#</b>
 O baiano fez o seu trio elétrico, trouxe luz e som
                  <b>D</b>
 E pelo mundo se espalhou

<b>Cm</b>                           <b>Gm</b>
 Só pra lhe dizer que é Liberdade, morena
<b>Cm</b>                                <b>Gm</b>
 Praça Castro Alves para o nosso amor é pequena
<b>Cm</b>                                 <b>Gm</b>
 Quero lhe encontrar na praia da Ribeira é verão
<b>Cm</b>                               <b>D</b>
 Esse chão é meu e eu não vou parar

     <b>G</b>                   <b>Bm</b>
 Eu fui atrás de um caminhão
                    <b>C</b>                     <b>D</b>
 Fazer meu carnaval, e o carnaval é feito no coração
      <b>G</b>                <b>Bm</b>
 Gostei, Chiclete é emoção,
                  <b>C</b>                    <b>D</b>
 Meu bem naquele ano eu me tornei Camaleão

----------------- Acordes -----------------
Bm = X 2 4 4 3 2
C = X 3 2 0 1 0
Cm = X 3 5 5 4 3
D = X X 0 2 3 2
D# = X 6 5 3 4 3
F = 1 3 3 2 1 1
G = 3 2 0 0 0 3
Gm = 3 5 5 3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EuFuiAtrasDeUmCaminhaoPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/chiclete-com-banana/eu-fui-atras-de-um-caminhao/"
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
