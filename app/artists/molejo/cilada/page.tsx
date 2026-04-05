import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/molejo/cilada/#

const cifra = `Molejo - Cilada

[Intro] <b>Am</b>  <b>G7</b>  <b>C</b>  
        <b>Am</b>  <b>Bm7(5-)</b>  <b>E7</b>

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|-5-5--5-5--7-8-7-5----7-7--7-7--8-10-8-7--|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-8-8--8-8--10-12-10-8---------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-13-12-10-13-12-10-12---------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

  <b>Am</b>
Quase morri do coração
  <b>G7(4)</b>        <b>G7</b>
Quando ela me convidou
  <b>C</b>             <b>Am</b>
Pra conhecer o seu ap
 <b>Bm7(5-)</b>     <b>E7</b>
Me amarrei, demorou
<b>Am</b>
Ela me usou o tempo inteiro
 <b>G7</b>
Com seu jeitinho sedutor
<b>C</b>               <b>Am</b>
Eu fiz serviço de pedreiro
 <b>Bm7(5-)</b>        <b>E7</b>
De bombeiro, encanador

[Pré-Refrão]

<b>A</b>     <b>A5+</b>  <b>A6</b>        <b>A7</b>
  Inocente,   apaixonado
<b>D</b>
  Eu tava crente crente
    <b>Bm</b>               <b>E7</b>
Que ia viver uma história de amor
<b>A</b>        <b>A5+</b>  <b>A6</b>      <b>A7</b>
  Que cilada,    desilusão
<b>D</b>
  Ela me machucou
<b>Bm</b>             <b>E7</b>
Ela abusou do meu coração

[Refrão]

<b>Am</b>           <b>F7</b>      <b>E7</b>
   Não era amor, ôh, ôh
    <b>Am</b>
Não era
          <b>F7</b>    <b>E7</b>
Não era amor, era
   <b>Am</b>
Cilada
          <b>F7</b>      <b>E7</b>
Não era amor, ôh, ôh
    <b>Am</b>
Não era
          <b>F7</b>    <b>E7</b>
Não era amor, era
   <b>Am</b>                         
Cilada, cilada
               <b>F7</b>  <b>E7</b> 
Cilada, cilada
   <b>Am</b>                         
Cilada, cilada
               <b>F7</b>  <b>E7</b> 
Cilada, cilada

[Segunda Parte]

  <b>Am</b>
Quase morrendo de cansaço
 <b>G7(4)</b>          <b>G7</b>
Pálido e me sentindo mal
 <b>C</b>                   <b>Am</b>
Me trouxe um whisky bem gelado
 <b>Bm7(5-)</b>          <b>E7</b>
Me fez um brinde sensual
<b>Am</b>
Aquele clima envolvente
<b>G7</b>
Acelerou meu coração
  <b>C</b>                <b>Am</b>
Chegou um gigante de repente
    <b>Bm7(5-)</b>            <b>E7</b>
Gritando sujou, te peguei Ricardão

[Pré-Refrão]

<b>A</b>     <b>A5+</b>  <b>A6</b>        <b>A7</b>
  Inocente,   apaixonado
<b>D</b>
  Eu tava crente crente
    <b>Bm</b>               <b>E7</b>
Que ia viver uma história de amor
<b>A</b>        <b>A5+</b>  <b>A6</b>      <b>A7</b>
  Que cilada,    desilusão
<b>D</b>
  Ela me machucou
<b>Bm</b>             <b>E7</b>
Ela abusou do meu coração

[Refrão]

<b>Am</b>           <b>F7</b>      <b>E7</b>
   Não era amor, ôh, ôh
    <b>Am</b>
Não era
          <b>F7</b>    <b>E7</b>
Não era amor, era
   <b>Am</b>
Cilada
          <b>F7</b>      <b>E7</b>
Não era amor, ôh, ôh
    <b>Am</b>
Não era
          <b>F7</b>    <b>E7</b>
Não era amor, era
   <b>Am</b>                         
Cilada, cilada
               <b>F7</b>  <b>E7</b> 
Cilada, cilada
   <b>Am</b>                         
Cilada, cilada
               <b>F7</b>  <b>E7</b> 
Cilada, cilada

[Primeira Parte]

  <b>Am</b>
Quase morri do coração
  <b>G7(4)</b>        <b>G7</b>
Quando ela me convidou
  <b>C</b>             <b>Am</b>
Pra conhecer o seu ap
 <b>Bm7(5-)</b>     <b>E7</b>
Me amarrei, demorou
<b>Am</b>
Ela me usou o tempo inteiro
 <b>G7</b>
Com seu jeitinho sedutor
<b>C</b>               <b>Am</b>
Eu fiz serviço de pedreiro
 <b>Bm7(5-)</b>        <b>E7</b>
De bombeiro, encanador

[Pré-Refrão]

<b>A</b>     <b>A5+</b>  <b>A6</b>        <b>A7</b>
  Inocente,   apaixonado
<b>D</b>
  Eu tava crente crente
    <b>Bm</b>               <b>E7</b>
Que ia viver uma história de amor
<b>A</b>        <b>A5+</b>  <b>A6</b>      <b>A7</b>
  Que cilada,    desilusão
<b>D</b>
  Ela me machucou
<b>Bm</b>             <b>E7</b>
Ela abusou do meu coração

[Refrão]

<b>Am</b>           <b>F7</b>      <b>E7</b>
   Não era amor, ôh, ôh
    <b>Am</b>
Não era
          <b>F7</b>    <b>E7</b>
Não era amor, era
   <b>Am</b>
Cilada
          <b>F7</b>      <b>E7</b>
Não era amor, ôh, ôh
    <b>Am</b>
Não era
          <b>F7</b>    <b>E7</b>
Não era amor, era
   <b>Am</b>                         
Cilada, cilada
               <b>F7</b>  <b>E7</b> 
Cilada, cilada
   <b>Am</b>                         
Cilada, cilada
               <b>F7</b>  <b>E7</b> 
Cilada, cilada

   <b>Am</b>                         
Cilada, cilada
               <b>F7</b>  <b>E7</b> 
Cilada, cilada
   <b>Am</b>                         
Cilada, cilada
               <b>F7</b>  <b>E7</b>  <b>Am</b>
Cilada, cilada`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function CiladaPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/molejo/cilada/#"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
      />
      <FloatingMenu />
    </>
  );
}
