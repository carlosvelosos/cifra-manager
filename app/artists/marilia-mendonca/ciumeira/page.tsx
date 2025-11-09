import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/marilia-mendonca/ciumeira/

const cifra = `Marília Mendonça - Ciumeira

[Intro] <b>Bm</b>  <b>F#m11</b>  <b>E9</b>
        <b>Bm</b>  <b>F#m11</b>  <b>E9</b>

<span class="tablatura">[Tab - Solo Guitarra]

<span class="cnt">E|-----------------------------------------------------|
B|-0h2-3-3-3-3-3-3-3-3\2------------5------------------|
G|-----------------------2--2-4/6-4--------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-----------------------------------------------------|
B|-0h2-3-3-3-3-3-3-3-3\2-------------------------------|
G|-----------------------2--2-4/6-4--------------------|
D|----------------------------------4/6----------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">[Tab - Solo Violão]

<span class="cnt">E|-----8/9--9--7-5-5-5--4-4-4--------------------------|
B|---9-9/10-10-9-7-7-7--5-5-5--7\5--5h7----------------|
G|-9---------------------------7\6--6/7----------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-----8/9--9--7-5/4-4---------------------------------|
B|---9-9/10-10-9-7/5-5---------------------------------|
G|-9---------------------------------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

[Primeira Parte]

 <b>Bm</b>                 <b>F#m11</b>
No começo, eu entendia
            <b>E9</b>
Mas era só cama, não tinha amor
 <b>Bm</b>                   <b>F#m11</b>
Lembro quando você dizia
          <b>E9</b>
Vou desligar porque ela chegou

[Pré-Refrão]

<b>Bm</b>                     <b>F#m11</b>
E a gente foi se envolvendo
            <b>E9</b>
Perdendo o medo
 <b>Bm</b>                    <b>F#m11</b>
Não tinha lugar e nem hora
            <b>E9</b> 
Pra dar um beijo
                         <b>D</b>
Coração não tá mais aceitando
    <b>Dm</b>               <b>A9</b>  <b>E</b>
Só metade do seu: Te amo

[Refrão]

          <b>A9</b>
É uma ciumeira atrás da outra
                     <b>E</b> 
Ter que dividir seu corpo e a sua boca
                   <b>Bm</b>
Tá bom que eu aceitei por um instante
                  <b>D</b>
A verdade é que amante 
                  <b>E</b>
Não quer ser amante

          <b>A9</b>
É uma ciumeira atrás da outra
                     <b>E</b> 
Ter que dividir seu corpo e a sua boca
                   <b>Bm</b>
Tá bom que eu aceitei por um instante
                  <b>D</b>
A verdade é que amante 
                  <b>E</b>
Não quer ser amante
          <b>A9</b>
É uma ciumeira atrás da outra

[Solo] <b>Bm</b>  <b>F#m11</b>  <b>E9</b>
       <b>Bm</b>  <b>F#m11</b>  <b>E9</b>

[Pré-Refrão]

<b>Bm</b>                     <b>F#m11</b>
E a gente foi se envolvendo
            <b>E9</b>
Perdendo o medo
 <b>Bm</b>                    <b>F#m11</b>
Não tinha lugar e nem hora
            <b>E9</b> 
Pra dar um beijo
                         <b>D</b>
Coração não tá mais aceitando
    <b>Dm</b>               <b>A9</b>  <b>E</b>
Só metade do seu: Te amo

[Refrão Final]

          <b>A9</b>
É uma ciumeira atrás da outra
                     <b>E</b> 
Ter que dividir seu corpo e a sua boca
                   <b>Bm</b>
Tá bom que eu aceitei por um instante
                  <b>D</b>
A verdade é que amante 
                  <b>E</b>
Não quer ser amante

          <b>A9</b>
É uma ciumeira atrás da outra
                     <b>E</b> 
Ter que dividir seu corpo e a sua boca
                   <b>Bm</b>
Tá bom que eu aceitei por um instante
                  <b>D</b>
A verdade é que amante 
                  <b>E</b>
Não quer ser amante

          <b>A9</b>
É uma ciumeira atrás da outra
                     <b>E</b> 
Ter que dividir seu corpo e a sua boca
                   <b>Bm</b>
Tá bom que eu aceitei por um instante
                  <b>D</b>
A verdade é que amante 
                  <b>E</b>
Não quer ser amante
          <b>A9</b>
É uma ciumeira atrás da outra

----------------- Acordes -----------------
A9 = P2 4 2 2
Bm = 4 4 3 4
D = 4 2 3 4
Dm = 3 2 3 3
E = 2 1 0 2
E9 = 2 1 0 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CiumeiraPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/marilia-mendonca/ciumeira/"
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
