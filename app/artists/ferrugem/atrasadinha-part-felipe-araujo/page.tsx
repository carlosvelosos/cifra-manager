import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/ferrugem/atrasadinha-part-felipe-araujo/#

const cifra = `Ferrugem - Atrasadinha Part Felipe Araujo

[Intro]

<span class="tablatura">   C9                      D9(11)  H.N.
<span class="cnt">E|----------x-----------x-------------------|
B|-------3--x--------3--x--------3--7-------|
G|-----0----x------0----x------0----7-------|
D|---2------x----2------x----4------7-------|
A|-3--------x--3--------x--5----------------|
E|------------------------------------------|</span></span>

<span class="tablatura">            <b>Em7</b>
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|----------2-5-4-5/7-----------------------|
A|-0h2--5p2---------------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

<span class="tablatura">   <b>C9</b>                      <b>D9(11)</b>
<span class="cnt">E|---------x----------x----------x---------x|
B|-------3-x--------3-x--------3-x-------3-x|
G|-----0---x------0---x------0---x-----0---x|
D|---2-----x----2-----x----4-----x---4-----x|
A|-3-------x--3-------x--5-------x-5-------x|
E|------------------------------------------|</span></span>

<span class="tablatura">   <b>Bm7</b>                   <b>Em7</b>
<span class="cnt">E|-------2-x--------2-x--0------------------|
B|-----3---x------3---x--3------------------|
G|---4-----x----4-----x--0------------------|
D|---------x----------x--2------------------|
A|-2-------x--2-------x--2------------------|
E|-----------------------0------------------|</span></span>

   <b>C9</b>
Botei a melhor roupa
Pra esconder os meus defeitos
<b>D9(11)</b>
      Exagerei no perfume, pra te impressionar
<b>Bm7</b>                                 <b>Em7</b>
   Cheguei mais cedo pra te ver chegar

[Pré-Refrão]

           <b>C9</b>
E você chegou
Atrasadinha
          <b>D9</b>
Mas tava linda
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
Deixa comigo
                         <b>Em7</b>
Que pra isso eu tenho o dom

         <b>C9</b>
Vamos pular
                                     <b>D9</b>
A parte que eu peço aquele vinho do bom
                               <b>Bm7</b>
A taça não merece tirar seu batom
Deixa comigo
                         <b>Em7</b>
Que pra isso eu tenho o dom

    <b>Am</b>
E daí que é o nosso primeiro encontro?
 <b>C9</b>
Hoje eu te beijo e pronto

( <b>G</b>  <b>C9</b>  <b>G</b>  <b>C9</b> )


[Pré-Refrão]

           <b>C9</b>
E você chegou
Atrasadinha
          <b>D9</b>
Mas tava linda
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
Deixa comigo
                         <b>Em7</b>
Que pra isso eu tenho o dom

         <b>C9</b>
Vamos pular
                                     <b>D9</b>
A parte que eu peço aquele vinho do bom
                               <b>Bm7</b>
A taça não merece tirar seu batom
Deixa comigo
                         <b>Em7</b>
Que pra isso eu tenho o dom

    <b>Am</b>
E daí que é o nosso primeiro encontro?
 <b>C9</b>
Hoje eu te beijo e pronto

( <b>G</b>  <b>C9</b>  <b>G</b> )

 <b>C9</b>
Hoje eu te beijo e pronto

( <b>G</b>  <b>C9</b>  <b>G</b> )

 <b>C9</b>                      <b>G</b>
Hoje eu te beijo e pronto`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AtrasadinhaPartFelipeAraujoPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/ferrugem/atrasadinha-part-felipe-araujo/#"
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
