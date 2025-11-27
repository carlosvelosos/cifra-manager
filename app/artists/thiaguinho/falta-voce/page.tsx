import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/thiaguinho/falta-voce/

const cifra = `Thiaguinho - Falta Voce

[Intro] <b>E7M(9)</b>  <b>E7(4/9)</b>  <b>A7M</b>  <b>C7M</b>  <b>D7</b>

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|-9----------------------------------------|
A|------------------------------------------|
E|---7-9-7----------------------------------|</span></span>

[Primeira Parte]

<span class="tablatura">[Tab - Primeira Parte]

Parte 1 de 6
   <b>E7M(9)</b>        <b>Bm7(9/11)</b>
<span class="cnt">E|-----------0--------------0---------------|
B|---------7----------2---------------------|
G|-------8----------2---2-------------------|
D|-----6----------0-------0-----------------|
A|---7----------2---------------------------|
E|-0----------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 6
   <b>A7M</b>     <b>D7(4/9)</b>
<span class="cnt">E|---------5--------------------------------|
B|-5-6-7---5--------------------------------|
G|-6-6-6---5--------------------------------|
D|-6-6-6---5--------------------------------|
A|-0-------5--------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 6
   <b>E7M(9)</b>
<span class="cnt">E|----0-----------0-------------------------|
B|-7--7--7--7--7--7-----7-------------------|
G|-8--8--8--8--8----8---8-------------------|
D|-6-----6--6--6----------------------------|
A|------------------------------------------|
E|-0-----7-----0------7---------------------|</span></span>

<span class="tablatura">Parte 4 de 6
   <b>Bm7</b>
<span class="cnt">E|-----7------------7-----------------------|
B|-7---7---7--7--7--7-----7-----------------|
G|-7---7---7--7--7--------7-----------------|
D|-7-------7--7--7----7---------------------|
A|------------------------------------------|
E|---7-----7-----7------7-------------------|</span></span>

<span class="tablatura">Parte 5 de 6
   <b>A7M</b>
<span class="cnt">E|-----0------------0-----------------------|
B|-5---5---5--5--5--5-----5-----------------|
G|-6---6---6--6--6--6-----6-----------------|
D|-6-------6--6--6----6---------------------|
A|---0-----------0--------------------------|
E|---------0------------0-------------------|</span></span>

<span class="tablatura">Parte 6 de 6
   <b>D7(13)</b>       <b>D7(4/9)</b>  
<span class="cnt">E|-7---7--7--7--5--5-----5------------------|
B|-7---7--7--7--5--5-----5------------------|
G|-5---5--5--5--5----5---5------------------|
D|------------------------------------------|
A|---5----5-----5------5--------------------|
E|------------------------------------------|</span></span>

 <b>E7M(9)</b>                            
Juro que eu não sei mais 
                <b>Bm7(9/11)</b>
O que eu vou falar
                <b>A7M</b>
Quando você me perguntar
  <b>D7(4/9)</b>                  <b>E7M(9)</b>
"Tudo bem, como vai a sua vida?"
                                 <b>Bm7</b>
Como fosse uma questão já respondida
                                 <b>A7M</b>
Uma história que ficou mal resolvida
                      
Feito uma mensagem 
               <b>D7(13)</b>  <b>D7(4/9)</b>
Que nunca foi lida

[Pré-Refrão]

<span class="tablatura">[Tab - Pré-Refrão]

   <b>E7M(9)</b>      <b>Bm7</b>         <b>A7M</b>      <b>D7(4/9)</b>
<span class="cnt">E|----------------------------------5-------|
B|-7---7---7---7---7---7---5--------5-------|
G|-8---8---8---7---7---7---6--------5-------|
D|-6---6---6---7---7---7---6--------5-------|
A|-------------------------0--------5-------|
E|-0---0---0---7---7---7--------------------|</span></span>

          <b>E7M(9)</b>          
Posso te responder 
         <b>Bm7</b>         <b>A7M</b>
O que você quiser ouvir
          <b>D7(4/9)</b>
Mas a verdade é essa aqui

[Refrão]

          <b>E7M</b>
Falta de tudo, não sei de nada
         <b>E7(4/9)</b>
É só trabalho, volto pra casa
         <b>A7M</b>
Não tem você
 <b>D7(4/9)</b>
Falta você!
              <b>E7M</b>
Não tem seu cheiro no travesseiro
             <b>E7(4/9)</b>
Quando me espalho na nossa cama
         <b>A7M</b>
Não tem você
 <b>C7M</b>     <b>D7(4/9)</b>
Falta você!

          <b>E7M</b>
Falta de tudo, não sei de nada
         <b>E7(4/9)</b>
É só trabalho, volto pra casa
         <b>A7M</b>
Não tem você
 <b>D7(4/9)</b>
Falta você!
              <b>E7M</b>
Não tem seu cheiro no travesseiro
             <b>E7(4/9)</b>
Quando me espalho na nossa cama
         <b>A7M</b>
Não tem você
 <b>C7M</b>     <b>D7(4/9)</b>
Falta você!
 <b>E7M</b>    <b>E7(4/9)</b>  <b>A7M</b>  <b>C7M</b>  <b>D7</b>
La   laiá, laiá

[Primeira Parte]

 <b>E7M(9)</b>                            
Juro que eu não sei mais 
                <b>Bm7</b>
O que eu vou falar
                <b>A7M</b>
Quando você me perguntar
  <b>D7(4/9)</b>                  <b>E7M(9)</b>
"Tudo bem, como vai a sua vida?"
                                 <b>Bm7</b>
Como fosse uma questão já respondida
                                 <b>A7M</b>
Uma história que ficou mal resolvida
                      
Feito uma mensagem 
               <b>D7(4/9)</b>
Que nunca foi lida

[Pré-Refrão]

          <b>E7M(9)</b>          
Posso te responder 
         <b>Bm7</b>         <b>A7M</b>
O que você quiser ouvir
          <b>D7(4/9)</b>
Mas a verdade é essa aqui

[Refrão]

          <b>E7M</b>
Falta de tudo, não sei de nada
         <b>E7(4/9)</b>
É só trabalho, volto pra casa
         <b>A7M</b>
Não tem você
 <b>D7(4/9)</b>
Falta você!
              <b>E7M</b>
Não tem seu cheiro no travesseiro
             <b>E7(4/9)</b>
Quando me espalho na nossa cama
         <b>A7M</b>
Não tem você
 <b>C7M</b>     <b>D7(4/9)</b>
Falta você!

 <b>E7M</b>
Falta de tudo, não sei de nada
         <b>E7(4/9)</b>
É só trabalho, volto pra casa
         <b>A7M</b>
Não tem você
 <b>D7(4/9)</b>
Falta você!
              <b>E7M</b>
Não tem seu cheiro no travesseiro
             <b>E7(4/9)</b>
Quando me espalho na nossa cama
         <b>A7M</b>
Não tem você
 <b>C7M</b>     <b>D7(4/9)</b>
Falta você!
 <b>E7M</b>    <b>E7(4/9)</b>  <b>A7M</b>  <b>C7M</b>  <b>D7</b>
La   laiá, laiá

[Primeira Parte]

<span class="tablatura">[Tab - Final]

Parte 1 de 2
   <b>E7M(9)</b>        <b>Bm7(9/11)</b>
<span class="cnt">E|-----------0--------------0---------------|
B|---------7----------2---------------------|
G|-------8----------2---2-------------------|
D|-----6----------0-------0-----------------|
A|---7----------2---------------------------|
E|-0----------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
   <b>A7M</b>     <b>D7(13)</b>  <b>D7(4/9)</b>  <b>E7M(9)</b>
<span class="cnt">E|---------7-------5--------0--------------|
B|-5-------7-------5--------7--------------|
G|-6-------5-------5--------8--------------|
D|-6------------------------6--------------|
A|-0-------5-------5--------7--------------|
E|--------------------------0--------------|
                            ↓</span></span>

 <b>E7M(9)</b>                            
Juro que eu não sei mais 
                <b>Bm7(9/11)</b>
O que eu vou falar
                <b>A7M</b>
Quando você me perguntar
  <b>D7(13)</b>         <b>D7(4/9)</b>   <b>E7M(9)</b>
"Tudo bem, como vai a sua vida?"`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FaltaVocePage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/thiaguinho/falta-voce/"
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
