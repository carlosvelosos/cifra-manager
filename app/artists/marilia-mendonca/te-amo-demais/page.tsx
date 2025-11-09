import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/marilia-mendonca/te-amo-demais/

const cifra = `Marília Mendonça - Te Amo Demais

[Intro] <b>C</b>  <b>G</b>  (Frase 1) 
        <b>Dm</b>  <b>F</b>  <b>C9</b>  <b>G</b>  <b>Dm</b>  <b>F</b>

<span class="tablatura">[Tab - Frase 1]

   <b>C</b>   <b>G</b>
<span class="cnt">E|-0---2------------------------------------|
B|-1---2------------------------------------|
G|-0---0------------------------------------|
D|-2---0------------------------------------|
A|-3---2------------------------------------|
E|-----3---1---0----------------------------|
   ↓   ↓</span></span>

[Primeira Parte]

<span class="tablatura">[Dedilhado - Primeira Parte]

Parte 1 de 2
   <b>C9</b>              <b>G</b>
<span class="cnt">E|-------2---------------2------------------|
B|-----2----2----------2----2---------------|
G|---0--------0------0--------0-------------|
D|------------------------------------------|
A|-3----------------------------------------|
E|-----------------3------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
   <b>Dm</b>              <b>Am</b>
<span class="cnt">E|-------1---------------0------------------|
B|-----3----3----------1----1---------------|
G|---2--------2------2--------2-------------|
D|-0----------------------------------------|
A|-----------------0------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 1 de 2
   <b>C9</b>              <b>G</b>
<span class="cnt">E|-------2---------------2------------------|
B|-----2----2----------2----2---------------|
G|---0--------0------0--------0-------------|
D|------------------------------------------|
A|-3----------------------------------------|
E|-----------------3------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
   <b>Dm</b>              <b>Am</b>
<span class="cnt">E|-------1---------------0------------------|
B|-----3----3----------1----1---------------|
G|---2--------2------2--------2-------------|
D|-0----------------------------------------|
A|-----------------0------------------------|
E|------------------------------------------|</span></span>

<b>C9</b>        <b>G</b>  
Eu sou assim
       <b>Dm</b>               <b>Am</b>
Nunca soube recitar poesia
     <b>C9</b>               <b>G</b>  
Não sei palavras de amor
             <b>Dm</b>
Não sou sedutor
                         <b>Am</b>
Não sei fingir, nem poderia
<b>G</b>↓                      <b>Dm</b>
Eu não tenho ouro nem prata
        <b>F</b>                <b>C9</b>
Mas, o meu maior tesouro eu te dei
     <b>G</b>                    <b>Dm</b>
Só quero seu amor e mais nada
         <b>F</b>            
Você precisa entender
      <b>F</b>       <b>C/E</b>  <b>Dm</b> <b>C</b>
É que eu não sei  di_zer

[Refrão]

<span class="tablatura">[Tab - Frase 2]

  (frase 2)  <b>G</b>   
<span class="cnt">E|-----------2------------------------------|
B|-----------2------------------------------|
G|-----------0------------------------------|
D|-----0-2---0------------------------------|
A|---3-------2------------------------------|
E|-3---------3----1----0--------------------|
             ↓</span></span>

      (Frase 2)  <b>G</b>      <b>Dm</b>
Só sei que eu te amo demais
              <b>F</b>    
Nas noites sozinho
                      <b>C9</b>
É o teu nome que eu chamo
           <b>G</b>      <b>Dm</b>
Baby eu te amo demais
       <b>F</b>                   <b>C9</b>
Eu só sei dizer te amo, te amo

( <b>G</b>  <b>Dm</b>  <b>F</b>  <b>C9</b> ) 
( <b>G</b>  <b>Dm</b>  <b>F</b>  <b>C/E</b>  <b>Dm</b> )

[Segunda Parte]

   <b>C9</b>                          <b>G</b>
Palavras valem menos que um olhar
       <b>Dm</b>                     <b>Am</b>
O coração é quem vai te explicar
      <b>C9</b>                  <b>G</b>
Da cabeça aos pés eu vou te beijar
         <b>Dm</b>                <b>Am</b>
Como um sábio na arte de amar

            <b>G</b>                         <b>Dm</b>
Não sei mentir pra conquistar uma mulher
       <b>F</b>                       <b>C9</b>
Daria tudo nesse mundo só pra ter você
      <b>G</b>                       <b>Dm</b>
O destino seja o que Deus quiser
         <b>F</b>            
Você precisa entender
      <b>F</b>       <b>C/E</b>  <b>Dm</b> <b>C</b>
É que eu não sei  di_zer

[Refrão Final]

      (Frase 2)  <b>G</b>      <b>Dm</b>
Só sei que eu te amo demais
              <b>F</b>    
Nas noites sozinho
                      <b>C9</b>
É o teu nome que eu chamo
           <b>G</b>      <b>Dm</b>
Baby eu te amo demais
       <b>F</b>                   <b>C9</b>
Eu só sei dizer te amo, te amo

                 <b>G</b>      <b>Dm</b>
Só sei que eu te amo demais
              <b>F</b>    
Nas noites sozinho
                      <b>C9</b>
É o teu nome que eu chamo
           <b>G</b>      <b>Dm</b>
Baby eu te amo demais
       <b>F</b>         <b>C/E</b>     <b>Dm</b>  <b>C9</b> 
Eu só sei dizer te amo, te   amo

(Frase 2) <b>G</b>           <b>Dm</b>
            Te amo demais
<b>F</b>            <b>C9</b>
  Como eu te amo
<b>G</b>            <b>Dm</b>   <b>F</b>  <b>C/E</b>     <b>Dm</b> <b>C9</b>
   Te amo demais,   te amo, te  amo

      (Frase 2)  <b>G</b>      <b>Dm</b>
Só sei que eu te amo demais
              <b>F</b>    
Nas noites sozinho
                      <b>C9</b>
É o teu nome que eu chamo
           <b>G</b>      <b>Dm</b>
Baby eu te amo demais
       <b>F</b>         <b>C/E</b>     <b>Dm</b>  <b>C9</b>
Eu só sei dizer te amo, te   amo

( (Frase 2) <b>G</b>  <b>Dm</b>  <b>F</b>  <b>C9</b>  <b>G</b>  <b>Dm</b> )
<b>F</b>    <b>C</b>
  Te amo

----------------- Acordes -----------------
Am = 2 2 1 2
C = 2 0 1 2
C9 = 2 0 1 0
Dm = 3 2 3 3
F = 3 2 1 3
G = 5 4 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TeAmoDemaisPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/marilia-mendonca/te-amo-demais/"
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
