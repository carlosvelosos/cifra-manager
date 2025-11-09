import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/jorge-mateus/ta-faltando-eu-part-gusttavo-lima/

const cifra = `Jorge & Mateus - Tá Faltando Eu (part. Gusttavo Lima)

[Intro]  <b>E</b>  <b>B9</b>  <b>C#m</b>  <b>A9</b>  <b>E</b>  <b>B9</b>  <b>C#m</b>  <b>A9</b>  <b>G#</b>  <b>F#</b>  <b>E</b>

<span class="tablatura"><span class="cnt">E|--------------------------------------------|
G|-----9-7-------12--9---------10--9-7-5--9---|
B|--------------------------------------------|
D|-7/9---7--7/12-12--9---7/11--11--9-7-6--9---|
A|--------------------------------------------|
E|--------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|--------------------------------------------|
G|-----9-7-------12--9---------10--9-7-5------|
B|--------------------------------------------|
D|-7/9---7--7/12-12--9---7/11--11--9-7-6------|
A|--------------------------------------------|
E|--------------------------------------------|</span></span>

 <b>E</b>          <b>B9</b>        <b>C#m</b>
Tá faltando eu em mim
            <b>A</b>            <b>E</b>
Pergunto, mais não sei quem sou
         <b>B9</b>               <b>C#m</b>
Não sei se é bom ou se é ruim
              <b>A</b>
Quero ficar, não sei se vou

 <b>E</b>           <b>B9</b>             <b>C#m</b>
Sou doce e amargo ao mesmo tempo
            <b>A</b>
Me policio sem razão
 <b>E</b>               <b>B9</b>      <b>C#m</b>
Razão é o tipo que invento
                 <b>A</b>  <b>G#</b>  <b>F#m</b>     <b>E</b>
Pra não cair na palma da mão

 <b>E</b>        <b>B9</b>        <b>C#m</b>
Tá faltando mais ação
         <b>A</b>
Pra encarar e não fugir
<b>E</b>        <b>B9</b>          <b>C#m</b>
A lava que já foi vulcão
         <b>A</b>              <b>E</b>
É um iceberg dentro de mim

 <b>E</b>        <b>B9</b>           <b>C#m</b>
Pegadas que se tornam areia
          <b>A</b>               <b>E</b>
Castelos de areia sempre caem
           <b>B9</b>              <b>C#m</b>
Se olham pra mim de cara feia
            <b>A</b>  <b>G#</b>  <b>F#m</b>     <b>E</b>
Meu coração desaba num ai

  <b>E</b>      <b>B9</b>            <b>C#m</b>
Preciso me curtir bem mais
        <b>A</b>                <b>E</b>
É pena que só olho pros lados
               <b>B9</b>            <b>C#m</b>
Se a alma quer um banho de sais
              <b>A</b>            <b>E</b>
O corpo quer me ver apaixonado

         <b>B9</b>       <b>C#m</b>
O medo aguça atração
           <b>A</b>      <b>E</b>
A solidão na pele arde
             <b>B9</b>            <b>C#m</b>
Espero que quando eu me ver
       <b>A</b>
E acordar não seja tarde

( <b>E</b>  <b>B9</b>  <b>C#m</b>  <b>A</b> )

<b>E</b>          <b>B9</b>        <b>C#m</b>
Tá faltando eu em mim
            <b>A</b>            <b>E</b>
Pergunto, mais não sei quem sou
         <b>B9</b>               <b>C#m</b>
Não sei se é bom ou se é ruim
              <b>A</b>
Quero ficar, não sei se vou

 <b>E</b>           <b>B9</b>             <b>C#m</b>
Sou doce e amargo ao mesmo tempo
            <b>A</b>
Me policio sem razão
 <b>E</b>               <b>B9</b>      <b>C#m</b>
Razão é o tipo que invento
                 <b>A</b>  <b>G#</b>  <b>F#m</b>     <b>E</b>
Pra não cair na palma da mão

 <b>E</b>        <b>B9</b>        <b>C#m</b>
Tá faltando mais ação
         <b>A</b>
Pra encarar e não fugir
<b>E</b>        <b>B9</b>          <b>C#m</b>
A lava que já foi vulcão
         <b>A</b>              <b>E</b>
É um iceberg dentro de mim

 <b>E</b>        <b>B9</b>           <b>C#m</b>
Pegadas que se tornam areia
          <b>A</b>               <b>E</b>
Castelos de areia sempre caem
           <b>B9</b>              <b>C#m</b>
Se olham pra mim de cara feia
            <b>A</b>  <b>G#</b>  <b>F#m</b>     <b>E</b>
Meu coração desaba num ai

  <b>E</b>      <b>B9</b>            <b>C#m</b>
Preciso me curtir bem mais
        <b>A</b>                <b>E</b>
É pena que só olho pros lados
               <b>B9</b>            <b>C#m</b>
Se a alma quer um banho de sais
              <b>A</b>            <b>E</b>
O corpo quer me ver apaixonado

         <b>B9</b>       <b>C#m</b>
O medo aguça atração
           <b>A</b>      <b>E</b>
A solidão na pele arde
             <b>B9</b>            <b>C#m</b>
Espero que quando eu me ver
       <b>A</b>
E acordar não seja tarde

----------------- Acordes -----------------
A = X 0 2 2 2 0
A9 = X 0 2 2 0 0
B9 = X 2 4 4 2 2
C#m = X 4 6 6 5 4
E = 0 2 2 1 0 0
F# = 2 4 4 3 2 2
F#m = 2 4 4 2 2 2
G# = 4 3 1 1 1 4`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TaFaltandoEuPartGusttavoLimaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jorge-mateus/ta-faltando-eu-part-gusttavo-lima/"
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
