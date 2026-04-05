import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/raca-negra/cheia-de-manias/#

const cifra = `Raca Negra - Cheia De Manias

[Intro] <b>Gm</b>  <b>Eb</b>  <b>Cm</b>  <b>C#°</b>  <b>D7</b>

<span class="tablatura">[Dedilhado - Intro]

Parte 1 de 5
   <b>Gm</b>
<span class="cnt">E|---------3----------------3---------------|
B|-----3-------3--------3-------3-----------|
G|---3---3---3---3----3---3---3---3---------|
D|-5----------------5-----------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 5
   <b>Eb</b>
<span class="cnt">E|------------------------------------------|
B|---------8----------------8---------------|
G|-----8-------8--------8-------8-----------|
D|---8---8---8---8----8---8---8---8---------|
A|-6----------------6-----------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 5
   <b>Cm</b>                   <b>C#°</b>
<span class="cnt">E|---------8----------------9--7h8h9--------|
B|-----8-------8--------8-------------------|
G|---8---8---8---8----9---9-----------------|
D|------------------------------------------|
A|------------------------------------------|
E|-8----------------9-----------------------|</span></span>

<span class="tablatura">Parte 4 de 5
<span class="cnt">E|-10p8-------------------------------------|
B|------11-10-------------------------------|
G|------------11-8-7------------------------|
D|-0-----------------10-8-7-----------------|
A|--------------------------9-6-5-----------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 5 de 5
   <b>D7</b>
<span class="cnt">E|-10-10-10-10------------------------------|
B|-10-10-10-10------------------------------|
G|-11-11-11-11------------------------------|
D|-0--0--0--0-------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">[Tab - Solo Intro]

Parte 1 de 4
<span class="cnt">E|-----------------------------------------------------|
B|-11-11-11-11-11-10------------10---------------------|
G|---------------------10-10-10----10------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 4
<span class="cnt">E|----------10-----------------------------------------|
B|-13-13-13----13-11-10--------------------------------|
G|----------------------12-----------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 4
<span class="cnt">E|-------------------------------10-10----10-----------|
B|-11-11-11-11-11-10-------------------13--------------|
G|---------------------10-10-10------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 4 de 4
<span class="cnt">E|-10-10----10-----------------------------------------|
B|-------13--------------------------------------------|
G|---------------12\-----------------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

[Tab - Solo] 

<span class="tablatura">Parte 1 de 4
<span class="cnt">E|-----------------------------------------------------|
B|-11-11-10----11---11-11-10----11-10----10------------|
G|----------12---------------12-------12---------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 4
<span class="cnt">E|-----------------------------------------------------|
B|-----------------------------------------------------|
G|-12-10-12--10----10-------------10----10-12----------|
D|--------------12-------12-12-12----12----------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 3 de 4
<span class="cnt">E|------------------------------10---------------------|
B|-11-11-10----11---11-11-10-------11-11-11-13-10-10-10|
G|----------12---------------12------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

<span class="tablatura">Parte 4 de 4
<span class="cnt">E|-----------------------------------------------------|
B|-10-13-10-10-10--------------------------------------|
G|--------------------10----10-12----------------------|
D|-----------------12----12----------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|</span></span>

[Primeira Parte]

<b>Gm</b>
   Cheia de manias
<b>F</b>
  Toda dengosa
<b>Gm</b>
   Menina bonita
<b>F</b>
  Sabe que é gostosa
<b>Gm</b>
   Com esse seu jeito
                   <b>F</b>
Faz o que quer de mim
                  <b>Gm</b>
Domina o meu coração
                              
Eu fico sem saber o que fazer
<b>F</b>
  Quero te deixar
           <b>Gm</b>        <b>F</b>
Você não quer, não quer

[Refrão]

           <b>Gm</b>
Então me ajude a segurar
      <b>F</b>
Essa barra que é gostar de você
           <b>Gm</b>
Então me ajude a segurar
      <b>F</b>                       
Essa barra que é gostar de você

  <b>Gm</b>
Hiê!
              <b>F</b>
Didididididiê
            <b>Gm</b>
Didididididiê ê ê
              <b>F</b>
Didididididiê

[Segunda Parte]

<b>Gm</b>                              
   Estou na sua casa quero ir pro 
   <b>F</b>
Cinema você não gosta
<b>Gm</b>                             <b>F</b>
   Um motelzinho você fecha a porta

[Refrão]

           <b>Gm</b>
Então me ajude a segurar
      <b>F</b>
Essa barra que é gostar de você
           <b>Gm</b>
Então me ajude a segurar
      <b>F</b>                      
Essa barra que é gostar de você

  <b>Gm</b>
Hiê!
              <b>F</b>
Didididididiê
            <b>Gm</b>
Didididididiê ê ê
              <b>F</b>
Didididididiê

[Solo] <b>Gm</b>  <b>F</b>  <b>Eb</b>  <b>F</b>
       <b>Gm</b>  <b>F</b>  <b>Eb</b>  <b>F</b>

[Primeira Parte]

<b>Gm</b>
   Cheia de manias
<b>F</b>
  Toda dengosa
<b>Gm</b>
   Menina bonita
<b>F</b>
  Sabe que é gostosa

<b>Gm</b>
   Com esse seu jeito
                   <b>F</b>
Faz o que quer de mim
                  <b>Gm</b>
Domina o meu coração
                              
Eu fico sem saber o que fazer
<b>F</b>
 Quero te deixar
           <b>Gm</b>        <b>F</b>
Você não quer, não quer

[Refrão]

           <b>Gm</b>
Então me ajude a segurar
      <b>F</b>
Essa barra que é gostar de você
           <b>Gm</b>
Então me ajude a segurar
      <b>F</b>                       
Essa barra que é gostar de você

  <b>Gm</b>
Hiê!
              <b>F</b>
Didididididiê
            <b>Gm</b>
Didididididiê ê ê
              <b>F</b>
Didididididiê

[Segunda Parte]

<b>Gm</b>                              
   Estou na sua casa quero ir pro 
   <b>F</b>
Cinema você não gosta
<b>Gm</b>                             <b>F</b>
   Um motelzinho você fecha a porta

[Refrão]
           <b>Gm</b>
Então me ajude a segurar
      <b>F</b>
Essa barra que é gostar de você
           <b>Gm</b>
Então me ajude a segurar
      <b>F</b>                      
Essa barra que é gostar de você
  <b>Gm</b>
Hiê!
              <b>F</b>
Didididididiê
            <b>Gm</b>
Didididididiê ê ê
              <b>F</b>
Didididididiê
            <b>Gm</b>
Didididididiê ê ê
              <b>F</b>
Didididididiê
            <b>Gm</b>
Didididididiê ê ê
              <b>F</b>
Didididididiê

[Final] <b>Gm</b>  <b>F</b>  <b>Eb</b>  <b>F</b>
        <b>Gm</b>  <b>F</b>  <b>Eb</b>  <b>F</b>  <b>Gm</b>`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function CheiaDeManiasPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/raca-negra/cheia-de-manias/#"
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
