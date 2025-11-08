import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/cassia-eller/malandragem/

const cifra = `Cássia Eller - Malandragem

[Intro] <b>Dm</b>  <b>Bb</b>  <b>C</b>

[Primeira Parte]

<b>Dm</b>
   Quem sabe eu ainda
                <b>C</b>
Sou uma garotinha
<b>Gm</b>                         
   Esperando o ônibus
      <b>Dm</b>
Da escola sozinha

Cansada com minhas
             <b>C</b>
Meias três quartos
<b>Gm</b>                      <b>Dm</b>
   Rezando baixo pelos cantos
     <b>C</b>              <b>Bb</b>
Por ser uma menina má

<b>Dm</b>                                   
   Quem sabe o príncipe
             <b>C</b>
Virou um chato
<b>Gm</b>                        <b>Dm</b>
   Que vive dando no meu saco
      <b>C</b>                    <b>Bb</b>
Quem sabe a vida é não sonhar

[Refrão]

<b>Dm</b>               <b>C</b>
   Eu só peço a Deus
          <b>F</b>        <b>G</b>
Um pouco de malandragem
<b>Dm</b>             <b>C</b>
   Pois sou criança
          <b>F</b>         <b>G</b>
E não conheço a verdade
<b>Bb</b>          <b>C</b>                      
   Eu sou poeta e não
            <b>Dm</b>
Aprendi a amar
<b>Bb</b>          <b>C</b>                      
   Eu sou poeta e não
            <b>Dm</b>
Aprendi a amar

[Segunda Parte]

                              <b>C</b>
Bobeira é não viver a realidade
<b>Gm</b>                             
   E eu ainda tenho
             <b>Dm</b>
Uma tarde inteira

<b>G</b>              <b>F</b>  
  Eu ando nas ruas
<b>C</b>              <b>Dm</b>
  Eu troco o cheque
<b>Bb</b>                       <b>Dm</b>
   Mudo uma planta de lugar
<b>G</b>               <b>F</b>    
  Dirijo o meu carro
<b>C</b>               <b>Dm</b>
  Tomo o meu pileque
<b>Bb</b>                             <b>Dm</b>
   E ainda tenho tempo pra cantar

[Refrão]

<b>Dm</b>               <b>C</b>
   Eu só peço a Deus
          <b>F</b>        <b>G</b>
Um pouco de malandragem
<b>Dm</b>             <b>C</b>
   Pois sou criança
           <b>F</b>         <b>G</b>
 E não conheço a verdade
<b>Bb</b>          <b>C</b>                      
   Eu sou poeta e não
            <b>Dm</b>
Aprendi a amar
<b>Bb</b>          <b>C</b>                      
   Eu sou poeta e não
            <b>Dm</b>
Aprendi a amar

[Solo] <b>C</b>  <b>Gm</b>  <b>Dm</b>

<span class="tablatura">[Tab - Solo]

Parte 1 de 2
<span class="cnt">E|------------------------------------------|
B|----------5-5b6-b6--5-5-------------------|
G|---7-7-7-----------------7-5--------------|
D|-7----------------------------5-5---------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">Parte 2 de 2
<span class="cnt">E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|-3/5-3-3--3-5/7--5-3---3h5--3-----3-------|
A|---------------------5--------5-5---------|
E|------------------------------------------|</span></span>

[Segunda Parte]

<b>G</b>              <b>F</b>  
  Eu ando nas ruas
<b>C</b>              <b>Dm</b>
  Eu troco o cheque
<b>Bb</b>                       <b>Dm</b>
   Mudo uma planta de lugar
<b>G</b>               <b>F</b>    
  Dirijo o meu carro
<b>C</b>               <b>Dm</b>
  Tomo o meu pileque
<b>Bb</b>                             <b>Dm</b>
   E ainda tenho tempo pra cantar

[Refrão]

<b>Dm</b>               <b>C</b>
   Eu só peço a Deus
          <b>F</b>        <b>G</b>
Um pouco de malandragem
<b>Dm</b>             <b>C</b>
   Pois sou criança
           <b>F</b>         <b>G</b>
 E não conheço a verdade
<b>Bb</b>          <b>C</b>                      
   Eu sou poeta e não
            <b>Dm</b>
Aprendi a amar
<b>Bb</b>          <b>C</b>                      
   Eu sou poeta e não
            <b>Dm</b>
Aprendi a amar
                                
Quem sabe ainda sou 
            <b>Dm</b>
Uma garotinha

----------------- Acordes -----------------
Bb = X 1 3 3 3 1
C = X 3 5 5 5 3
Dm = X 5 7 7 6 5
F = 1 3 3 2 1 1
G = 3 5 5 4 3 3
Gm = 3 5 5 3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MalandragemPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/cassia-eller/malandragem/"
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
