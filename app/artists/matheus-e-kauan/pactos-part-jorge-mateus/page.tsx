import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/matheus-kauan/pactos-part-jorge-mateus/

const cifra = `Matheus & Kauan - Pactos (part. Jorge & Mateus)

[Intro] <b>Am</b>  <b>F</b>  <b>C</b>  <b>G</b>

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|--------------------------------------------|
B|-----5/6~5---5/6-5~3-3/5~~-3/5\3---5-3-3/5--|
G|-0/2-------2--------------------------------|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|</span></span>

<b>Am</b>
Eu nem dormi
   <b>F</b>                       <b>C</b>         <b>G</b>
Pensando em tudo que aconteceu, iê, iê
<b>Am</b>
Guardei em mim
  <b>F</b>                        <b>C</b>         <b>G</b>
Cada detalhe que a gente viveu, iê, iê

<b>Am</b>                 <b>F</b>               <b>C</b>
O combinado era da gente se reencontrar
               <b>G</b>
Quem sentir saudade primeiro, ligar
<b>Am</b>         <b>F</b>             <b>C</b>
Me enlouqueceu e desapareceu
                <b>G</b>                        <b>F</b>   <b>G</b>
Plantou amor no peito e não voltou pra regar

<b>Am</b>                   <b>F</b>
Promessas não são contratos
                      <b>C</b>           <b>G</b>
Beijos nem sempre são pactos, iê, iê

Eu deveria saber
<b>Am</b>                <b>F</b> 
Que sentimentos vazios
                   <b>C</b>
Não preenchem os espaços
        <b>G</b>
Cê nem aí e eu amando você

<b>Am</b>                   <b>F</b>
Promessas não são contratos
                      <b>C</b>           <b>G</b>
Beijos nem sempre são pactos, iê, iê

Eu deveria saber
<b>Am</b>                <b>F</b> 
Que sentimentos vazios
                   <b>C</b>
Não preenchem os espaços
        <b>G</b>
Cê nem aí e eu amando você

[Solo] <b>Am</b>  <b>F</b>  <b>C</b>  <b>G</b>

<span class="tablatura">[Tab - Solo]

<span class="cnt">E|--------------------------------------------|
B|-----5/6~5---5/6-5~3-3/5~~-3/5\3------------|
G|-0/2-------2--------------------------------|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-----3--------------------------------------|
B|-3/5---5/3----------------------------------|
G|------------5-------------------------------|
D|--------------5/7---------------------------|
A|--------------------------------------------|
E|--------------------------------------------|</span></span>

<b>Am</b>
Eu nem dormi
   <b>F</b>                       <b>C</b>         <b>G</b>
Pensando em tudo que aconteceu, iê, iê
<b>Am</b>
Guardei em mim
  <b>F</b>                        <b>C</b>         <b>G</b>
Cada detalhe que a gente viveu, iê, iê

<b>Am</b>                 <b>F</b>               <b>C</b>
O combinado era da gente se reencontrar
               <b>G</b>
Quem sentir saudade primeiro, ligar
<b>Am</b>         <b>F</b>             <b>C</b>
Me enlouqueceu e desapareceu
                <b>G</b>                        <b>F</b>     <b>G</b>
Plantou amor no peito e não voltou pra regar

<b>Am</b>                   <b>F</b>
Promessas não são contratos
                      <b>C</b>           <b>G</b>
Beijos nem sempre são pactos, iê, iê

Eu deveria saber
<b>Am</b>                <b>F</b> 
Que sentimentos vazios
                   <b>C</b>
Não preenchem os espaços
        <b>G</b>
Cê nem aí e eu amando você

<b>Am</b>                   <b>F</b>
Promessas não são contratos
                      <b>C</b>           <b>G</b>
Beijos nem sempre são pactos, iê, iê

Eu deveria saber
<b>Am</b>                <b>F</b> 
Que sentimentos vazios
                   <b>C</b>
Não preenchem os espaços
        <b>G</b>
Cê nem aí e eu amando você

<b>Am</b>                   <b>F</b>
Promessas não são contratos
                      <b>C</b>           <b>G</b>
Beijos nem sempre são pactos, iê, iê

Eu deveria saber
<b>Am</b>                <b>F</b> 
Que sentimentos vazios
                   <b>C</b>
Não preenchem os espaços
        <b>G</b>
Cê nem aí e eu amando você

[Final] <b>Am</b>  <b>F</b>  <b>C</b>  <b>G</b>

<span class="tablatura">[Tab - Final]

<span class="cnt">E|--------------------------------------------|
B|-----5/6~5---5/6-5~3-3/5~~-3/5\3------------|
G|-0/2-------2--------------------------------|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|</span></span>

----------------- Acordes -----------------
Capotraste na 1ª casa
A#m*  = X 0 2 2 1 0 - (*Bm na forma de A#m)
C#*  = X 3 2 0 1 0 - (*D na forma de C#)
F#*  = 1 3 3 2 1 1 - (*G na forma de F#)
G#*  = 3 2 0 0 0 3 - (*A na forma de G#)`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PactosPartJorgeMateusPage() {
  return (
    <>
      <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
