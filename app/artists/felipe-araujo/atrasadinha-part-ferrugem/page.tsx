import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/felipe-araujo/atrasadinha-part-ferrugem

const cifra = `Felipe Araujo - Atrasadinha Part Ferrugem

[Intro] <b>C9</b>  <b>D9</b>

[Tab - Intro]

Parte 1 de 2
   C9                    D9        H.N.         
<span class="tablatura"><span class="cnt">E|-------3-x--------3-x--------5-x----------|
B|-------3-x--------3-x--------5-x--7-------|
G|-----5---x------5---x------7---x--7-------|
D|---5-----x----5-----x----7-----x--7-------|
A|-3-------x--3-------x--5-------x----------|
E|---------x----------x----------x----------|</span></span>

<span class="tablatura">Parte 2 de 2
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|-------------5--4--4/7--------------------|
A|-----5----2--2--2-------------------------|
E|-5h7---7--0-------------------------------|</span></span>

[Primeira Parte] 

   <b>C9</b>
Botei a melhor roupa 

Pra esconder os meus defeitos
<b>D9</b>
   Exagerei no perfume 

Pra te impressionar
<b>Bm7</b>                                  <b>Em7</b>
    Cheguei mais cedo pra te ver chegar

<span class="tablatura">[Dedilhado - Primeira parte]

Parte 1 de 2
   <b>C9</b>                    <b>D9</b>                     
<span class="cnt">E|-------3-x-------3-x-------5-x-------5-x--|
B|-------3-x-------3-x-------5-x-------5-x--|
G|-----5---x-----5---x-----7---x-----7---x--|
D|---5-----x---5-----x---7-----x---7-----x--|
A|-3-------x-3-------x-5-------x-5-------x--|
E|---------x---------x---------x---------x--|</span></span>

<span class="tablatura">Parte 2 de 2
   <b>Bm7</b>                  <b>Em7</b>                    
<span class="cnt">E|-------2-x-------2-x---3------------------|
B|-------3-x-------3-x---3------------------|
G|-----2---x-----2---x---0------------------|
D|---4-----x---4-----x---2------------------|
A|-2-------x-2-------x---2------------------|
E|---------x---------x---0------------------|</span></span>

[Pré-Refrão] 

           <b>C9</b>
E você chegou
                       <b>D9</b>
Atrasadinha, mas tava linda
            <b>Bm7</b>
E a boca calou
                            <b>Em7</b>
Mas meu coração gritou por cima
 <b>C9</b>
Vai na fé, aposta nela
                     <b>D9</b>
Que ela é uma boa menina

[Refrão] 

            <b>C9</b>
Vamos pular
                                     <b>D9</b>
A parte que eu peço aquele vinho do bom
                               <b>Bm7</b>
A taça não merece tirar seu batom
                                      <b>Em7</b>
Deixa comigo que pra isso eu tenho o dom 

            <b>C9</b>
Vamos pular
                                     <b>D9</b>
A parte que eu peço aquele vinho do bom
                               <b>Bm7</b>
A taça não merece tirar seu batom
                                      <b>Em7</b>
Deixa comigo que pra isso eu tenho o dom 
    <b>Am7</b>
E daí que é nosso primeiro encontro?
 <b>Cm</b>                       <b>G9</b>  <b>C9</b>  <b>G9</b>  <b>C9</b>
Hoje eu te beijo e pronto

<span class="tablatura">[Dedilhado do Final do Refrão]

Parte 1 de 2
   <b>G9</b>                  <b>C9</b>                    
<span class="cnt">E|-------5-x-------5-x-------3-x-------3-x--|
B|-------3-x-------3-x-------3-x-------3-x--|
G|-----4---x-----4---x-----5---x-----5---x--|
D|---5-----x---5-----x---5-----x---5-----x--|
A|---------x-3-------x-3-------x-3-------x--|
E|-3-------x---------x---------x---------x--|</span></span>

<span class="tablatura">Parte 1 de 2
   <b>G9</b>                  <b>C9</b>                    
<span class="cnt">E|-------5-x-------5-x-------3-x-------3-x--|
B|-------3-x-------3-x-------3-x-------3-x--|
G|-----4---x-----4---x-----5---x-----5---x--|
D|---5-----x---5-----x---5-----x---5-----x--|
A|---------x-3-------x-3-------x-3-------x--|
E|-3-------x---------x---------x---------x--|</span></span>

[Pré-Refrão] 

           <b>C9</b>
E você chegou
                       <b>D9</b>
Atrasadinha, mas tava linda
            <b>Bm7</b>
E a boca calou

                            <b>Em7</b>
Mas meu coração gritou por cima
 <b>C9</b>
Vai na fé, aposta nela
                     <b>D9</b>
Que ela é uma boa menina

[Refrão] 

            <b>C9</b>
Vamos pular
                                     <b>D9</b>
A parte que eu peço aquele vinho do bom
                               <b>Bm7</b>
A taça não merece tirar seu batom
                                      <b>Em7</b>
Deixa comigo que pra isso eu tenho o dom 

            <b>C9</b>
Vamos pular
                                     <b>D9</b>
A parte que eu peço aquele vinho do bom
                               <b>Bm7</b>
A taça não merece tirar seu batom
                                      <b>Em7</b>
Deixa comigo que pra isso eu tenho o dom 

            <b>C9</b>
Vamos pular
                                     <b>D9</b>
A parte que eu peço aquele vinho do bom
                               <b>Bm7</b>
A taça não merece tirar seu batom
                                      <b>Em7</b>
Deixa comigo que pra isso eu tenho o dom 
    <b>Am7</b>
E daí que é nosso primeiro encontro?
 <b>Cm</b>                       <b>G</b>  <b>C9</b>  <b>G</b> 
Hoje eu te beijo e pronto
 <b>C9</b>                     <b>G</b>  <b>C9</b>  <b>G</b>
Hoje eu te beijo e pronto
 <b>C9</b>                       (frase final)
Hoje eu te beijo e pronto

<span class="tablatura">[Tab - Frase Final]

<span class="cnt">E|-8p7-------------------------------------------------|
B|-----8-----------------------------------------------|
G|-------7---------------------------------------------|
D|---------10-9-9--------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AtrasadinhaPartFerrugemPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/felipe-araujo/atrasadinha-part-ferrugem"
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
