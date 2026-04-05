import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/pericles/melhor-eu-ir/#

const cifra = `Pericles - Melhor Eu Ir

[Intro] <b>E</b>  <b>E6</b>  <b>E7M</b>  <b>E6</b>  <b>E</b>
        <b>E</b>  <b>E6</b>  <b>E7M</b>  <b>E6</b>  <b>E</b>
        <b>C</b>  <b>C6</b>  <b>C7M</b>  <b>C6</b>  <b>C</b>
        <b>C</b>  <b>C6</b>  <b>C7M(11+)</b>

<span class="tablatura">[Tab - Intro]

Parte 1 De 2
   <b>E</b>     <b>E6</b>   <b>E7M</b>   <b>E6</b>     <b>E</b>
<span class="cnt">E|-----------------------------------------------------|
B|-------------4-------------0-------------------------|
G|-------6-----------6-----4---------------------------|
D|-4h6-6---6-6---6-6---6-6-----------------------------|
A|-----------------------------------------------------|
E|-0-----0-----0-----0-----0---------------------------|</span></span>

<span class="tablatura">Parte 2 De 2
   <b>C</b>     <b>C6</b>    <b>C7M</b>   <b>C6</b>   <b>C</b>    <b>C7M(11+)</b>
<span class="cnt">E|-0-------------------------2-2---0-2---0-2-----------|
B|-------------0---------------0-----0-----0-----------|
G|-------2-----------2-----0---0-0---0-0---0-----------|
D|---2-2---2-2---2-2---2-2-----------------------------|
A|-3-----3-----3-----3-----3---3-----3-----3-----------|
E|-----------------------------------------------------|</span></span>

[Primeira Parte]

<span class="tablatura">[Tab - Primeira Parte]

Parte 1 De 3
   <b>E7M(9)</b> <b>A7M</b> <b>G#m7</b>  <b>A7M</b> <b>E7M(9)</b> <b>A7M</b> <b>D7(13)</b>
<span class="cnt">E|--------4---2-----4----------4---7-6-5-4--|
B|-7------5---4-----5---7------5---7--------|
G|-8------6---4-----6---8------6---5--------|
D|-6--------------------6----------0--------|
A|------------------------------------------|
E|-0------5---4-----5---0------5------------|</span></span>

<span class="tablatura">Parte 2 De 3
   <b>E7M(9)</b> <b>A7M</b> <b>G#m7</b>  <b>A7M</b>  
<span class="cnt">E|--------4---2-----4-----------------------|
B|-7------5---4-----5-----------------------|
G|-8------6---4-----6-----------------------|
D|-6----------------------------------------|
A|------------------------------------------|
E|-0------5---4-----5-----------------------|</span></span>

<span class="tablatura">Parte 3 De 3
   <b>C#m7(4)</b>  <b>B/D#</b>  <b>E6</b>     <b>E/A</b>
<span class="cnt">E|------------------------------------------|
B|-5-5-5---4-4-4--5-5-5--0-0-0--0-----------|
G|-4-4-4---4-4-4--6-6-6--1-1-1--1-----------|
D|-4-4-4---4-4-4--6-6-6--2-2-2--2-----------|
A|-4---4---6---6--7---7--0---0--0-----------|
E|------------------------------------------|</span></span>

          <b>E7M(9)</b>
Melhor eu ir
                         <b>A7M</b>  <b>G#m7</b>  <b>A7M</b>
Tudo bem vai ser melhor só
                   <b>E7M(9)</b>
Se teve que ser assim

É que pensando bem
               <b>A7M(9)</b>  <b>D7(13)</b>
Nunca existiu nós

                     <b>E7M(9)</b>
Só eu que pensei na gente

Ainda que demorei
              <b>A7M</b>  <b>G#m7</b>  <b>A7M</b>
Pra terminar,dói
              <b>C#m7(11)</b>        <b>B/D#</b>
Não era só comigo que você ficava
 <b>E6</b>                   <b>E/A</b>      
Foi tão difícil ter que enxergar

[Segunda Parte]

<span class="tablatura">[Tab - Segunda Parte]

Parte 1 De 5
   <b>G#m7</b>               <b>F#m7(11)</b>
<span class="cnt">E|------------------------0-----------------|
B|-4-4-4-4-4-4-----4--0---0-0-0-0-0-----0---|
G|-4-4-4-4-4-4-----4--2---2-2-2-2-2-----2---|
D|-4-4-4-4-4---4------2-----2-2-2---2---2---|
A|------------------------------------------|
E|-4---4---4-----4------2---2---2-----2-----|</span></span>

<span class="tablatura">Parte 2 De 5
   <b>G#m7</b>                 <b>Am6</b> <b>Am6/B</b> <b>Am6/C</b> <b>A7M</b>
<span class="cnt">E|------------------------------------------|
B|-4---4-4-4-4-4-----4--5-5-5-5--5-5----5---|
G|-4---4-4-4-4-4-----4--5-5-5-5--5-4----6---|
D|-4---4-4-4-4---4------4-4-4-4--4-4----6---|
A|----------------------0---2----3------0---|
E|---4---4---4-----4------------------------|</span></span>

<span class="tablatura">Parte 3 De 5
   <b>E</b>     <b>E6</b>    <b>E7M</b>    <b>E6</b>     <b>F#m7(11)</b>
<span class="cnt">E|----------------------------0--------------|
B|-0-0---2-2---4-4-----2--0---0-0-0-0-0-----0|
G|-1-1---1-1---1-1-----1--2---2-2-2-2-2-----2|
D|-2---2-----2-----2------2-----2-2-2---2----|
A|-------------------------------------------|
E|-0-----0-----0-----0------2---2---2-----2--|</span></span>

<span class="tablatura">Parte 4 De 5
   <b>G#m7</b>                 <b>D7</b>          <b>Db7</b> <b>C7</b> <b>B7</b>
<span class="cnt">E|--------------------------5----------------|
B|-4---4-4-4-4-4-----4--7---7-7-7-7-6---5--4-|
G|-4---4-4-4-4-4-----4--5---5-5-5-5-4---3--2-|
D|-4---4-4-4-4---4------7-----7-7-7-6---5--4-|
A|------------------------5---5---5--------2-|
E|---4---4---4-----4-------------------------|</span></span>

<span class="tablatura">Parte 5 De 5
   <b>E</b>
<span class="cnt">E|---0---------------------------------------|
B|-0-0-0-0-----------------------------------|
G|-1-1-1-1-----------------------------------|
D|-2---2-2-----------------------------------|
A|-------------------------------------------|
E|-0---0-------------------------------------|</span></span>

<b>G#m7</b>                      <b>F#m7(11)</b>
    Que tudo isso foi ilusão
                             <b>G#m7</b>
Todo esse tempo eu perdi em vão
     <b>Am6</b>   <b>Am6/B</b>  <b>Am6/C</b>  <b>A7M</b>  <b>E</b>  <b>E6</b>
É difícil ter que a_____cei__tar
         <b>E7M</b>          <b>E6</b>    <b>F#m7(11)</b>
Meu coração, ele não deixa não
                               <b>G#m7</b>
Se faz de bobo, não tem jeito não
      <b>D7</b>           <b>Db7</b>  <b>C7</b>  <b>B7</b> <b>E</b>
Só a vida pode ex_________plicar

[Pré-Refrão]

<span class="tablatura">[Tab - Pré-Refrão]

Parte 1 De 2
   <b>E7M(2)</b>     <b>Am6/E</b>
<span class="cnt">E|------------------------------------------|
B|-4-4-----4--5---5-5-5-5-5-----5-----------|
G|-4-4-----4--5---5-5-5-5-5-----5-----------|
D|-4---4------4---4-4-4-4---4---------------|
A|------------------------------------------|
E|-0-----0------0---0---0-----0-------------|</span></span>

<span class="tablatura">Parte 2 De 2
   <b>E7M(2)</b>               <b>Am6/E</b>
<span class="cnt">E|-----4-------------------------------------|
B|-4---4-4-4-4-4-----4--5---5-5-5-5-5-----5--|
G|-4---4-4-4-4-4-----4--5---5-5-5-5-5-----5--|
D|-4-----4-4-4---4------4---4-4-4-4---4------|
A|-------------------------------------------|
E|---0---0---0-----0------0---0---0-----0----|</span></span>

              <b>E7M(2)</b>                
Que talvez a gente se encontrou
           <b>Am6/E</b>
Na hora errada

Eu pensando em amor
                       <b>E7M(2)</b>
Você pensando em madrugada

E agora a gente não consegue
       <b>Am6/E</b>            <b>E7M(2)</b>
Dizer nada, vim dizer adeus
                                 <b>Am6/E</b>
Talvez a gente se perdeu pelo caminho

Mesmo do seu lado
                   <b>E7M(2)</b>
Eu me sinto tão sozinho

E agora a gente não consegue
       <b>Am6/E</b>   
Dizer nada

Além do que adeus

[Refrão]

<span class="tablatura">[Tab - Refrão]

Parte 1 De 3
   <b>E7M(9)</b>                   
<span class="cnt">E|-------------------------------------------|
B|-7---7---7-7---7-7-----7-------------------|
G|-8---8---8-8---8-8-----8-------------------|
D|-6-----6-----6-----6-----------------------|
A|-------------------------------------------|
E|---0-----7-----0-----7---------------------|</span></span>


<span class="tablatura">Parte 2 De 3
   <b>Am6</b>
<span class="cnt">E|-------------------------------------------|
B|-5---5---5-5---5-5-----5-------------------|
G|-5---5---5-5---5-5-----5-------------------|
D|-4-----4-----4-4---4-----------------------|
A|---0-----------0---------------------------|
E|---------0-----------0---------------------|</span></span>

<span class="tablatura">Parte 3 De 3
   <b>Am6</b>
<span class="cnt">E|------------------------------------------|
B|-5----------------------------------------|
G|-5----------------------------------------|
D|-4----------------------------------------|
A|-0----------------------------------------|
E|------------------------------------------|</span></span>

<b>E7M(9)</b>                <b>Am6</b>
      Melhor eu ir tchau!
            <b>E7M(9)</b>
Melhor o final
                 <b>Am6</b>
Melhor assim, assim
            <b>E7M(9)</b>
Melhor pra mim, e pra você também

                <b>Am6</b>
Melhor eu ir tchau!
            <b>E7M(9)</b>
Melhor o final
                 <b>Am6</b>
Melhor assim, assim

Melhor pra mim

[Interlúdio] <b>E</b>  <b>E6</b>  <b>E7M</b>  <b>E6</b>  <b>E</b> 
             <b>C</b>  <b>C6</b>  <b>C7M</b>  <b>C6</b> 

<span class="tablatura">[Tab - Interlúdio]

Parte 1 De 2
   <b>E</b>     <b>E6</b>   <b>E7M</b>   <b>E6</b>     <b>E</b>
<span class="cnt">E|-----------------------------------------------------|
B|-------------4-------------0-------------------------|
G|-------6-----------6-----4---------------------------|
D|-4h6-6---6-6---6-6---6-6-----------------------------|
A|-----------------------------------------------------|
E|-0-----0-----0-----0-----0---------------------------|</span></span>

<span class="tablatura">Parte 2 De 2
   <b>C</b>     <b>C6</b>    <b>C7M</b>   <b>C6</b>   
<span class="cnt">E|-0---------------------------------------------------|
B|-------------0---------------------------------------|
G|-------2-----------2---------------------------------|
D|---2-2---2-2---2-2-----------------------------------|
A|-3-----3-----3-----3---------------------------------|
E|-----------------------------------------------------|</span></span>

[Primeira Parte]

              <b>C#m7(11)</b>        <b>B/D#</b>
Não era só comigo que você ficava
 <b>E6</b>                   <b>E/A</b>      
Foi tão difícil ter que enxergar

[Segunda Parte]

<b>G#m7</b>                          <b>F#m7(11)</b>
     Que tudo isso foi ilusão
                             <b>G#m7</b>
Todo esse tempo eu perdi em vão
     <b>Am6</b>   <b>Am6/B</b>  <b>Am6/C</b>  <b>A7M</b>  <b>E</b>  <b>E6</b>
É difícil ter que a_____cei__tar
         <b>E7M</b>          <b>E6</b>    <b>F#m7(11)</b>
Meu coração, ele não deixa não
                               <b>G#m7</b>
Se faz de bobo, não tem jeito não
      <b>D7</b>       <b>D7</b>  <b>Db7</b>  <b>C7</b>  <b>B7</b>  <b>E</b>
Só a vida pode ex_________plicar

[Pré-Refrão]

              <b>E7M(2)</b>                
Que talvez a gente se encontrou
           <b>Am6/E</b>
Na hora errada

Eu pensando em amor
                       <b>E7M(2)</b>
Você pensando em madrugada

E agora a gente não consegue
       <b>Am6/E</b>            <b>E7M(2)</b>
Dizer nada, vim dizer adeus
                                 <b>Am6/E</b>
Talvez a gente se perdeu pelo caminho

Mesmo do seu lado
                   <b>E7M(2)</b>
Eu me sinto tão sozinho

E agora a gente não consegue
       <b>Am6/E</b>
Dizer nada

Além do que adeus

[Refrão]

<b>E7M(9)</b>                <b>Am6</b>
      Melhor eu ir tchau!

            <b>E7M(9)</b>
Melhor o final
                 <b>Am6</b>
Melhor assim, assim
            <b>E7M(9)</b>
Melhor pra mim, e pra você também

                <b>Am6</b>
Melhor eu ir tchau!
            <b>E7M(9)</b>
Melhor o final
                 <b>Am6</b>
Melhor assim, assim

Melhor pra mim

[Final] <b>C</b>  <b>C6</b>  <b>C7M</b>  <b>C6</b>`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function MelhorEuIrPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/pericles/melhor-eu-ir/#"
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
