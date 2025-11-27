import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/demonios-da-garoa/trem-das-onze

const cifra = `Demonios Da Garoa - Trem Das Onze

[Intro]

[Primeira Baixaria]

<span class="tablatura">                                    <b>Gm</b>
<span class="cnt">E|------------------------------------------|
B|---3-2p1----------------------------------|
G|-2-------3-2p0----------------------------|
D|---------------4--1--0h1p0----------------|
A|---------------------------3p1p0----------|
E|---------------------------------3--------|</span></span>

 <b>Gm</b>    <b>G#º</b>       <b>Dm</b>        
Zaaam zaaam zam zam zam zam 
<b>Dm/C</b>                 <b>E7</b>                <b>A7</b>              
     Paiscalingundum,  paiscalingundum
                <b>D7</b>
Paiscalingundum

[Segunda Baixaria]

<span class="tablatura">    <b>D7</b>
<span class="cnt">E|--2----------------------------------------|
B|--1----------------------------------------|
G|--2----------------------------------------|
D|--0-0-2-4-0-2-4-5--------------------------|
A|-------------------------------------------|
E|-------------------------------------------|</span></span>

 <b>Gm</b>    <b>G#º</b>       <b>Dm</b>        
Zaaam zaaam zam zam zam zam 
<b>Dm/C</b>                 <b>E7</b>                <b>A7</b>              
     Paiscalingundum,  paiscalingundum
                <b>D7</b>
Paiscalingundum

[Terceira Baixaria]

<span class="tablatura">    <b>Dm</b>
<span class="cnt">E|--1---------------------------------------|
B|--3---------------------------------------|
G|--2--2------------------------------------|
D|--0-----------0---------------------------|
A|--------0-2-4-----------------------------|
E|------------------------------------------|</span></span>

[Ritmo da Música]

<span class="tablatura">   <b>Gm</b>
<span class="cnt">E|------------------------------------------|
B|---3-----3-3----3-----3-3-----------------|
G|---3-----3-3----3-----3-3-----------------|
D|-----5---5-5------5---5-5-----------------|
A|------------------------------------------|
E|-3-----3------3-----3---------------------|</span></span>

[Primeira Parte]

             <b>Dm</b>
Não posso ficar

Nem mais um minuto com você

Sinto muito amor
         <b>Bb7</b>  <b>A7</b>  <b>Eb7</b>  <b>D7</b>
Mas não pode ser
 <b>Gm</b>  <b>A7</b>      <b>Dm</b>
Moro em Jaçanã
                       <b>Bb7</b>
Se eu perder esse trem
          <b>A7</b>
Que sai agora às onze horas
                 <b>Dm</b>
Só amanhã de manhã

Não posso ficar

Nem mais um minuto com você

Sinto muito amor
         <b>Bb7</b>  <b>A7</b>  <b>Eb7</b>  <b>D7</b>
Mas não pode ser
 <b>Gm</b>  <b>A7</b>      <b>Dm</b>
Moro em Jaçanã
                       <b>Bb7</b>
Se eu perder esse trem
          <b>A7</b>
Que sai agora às onze horas
                 <b>Dm</b>
Só amanhã de manhã

[Segunda Parte]

      <b>D7</b>
Além disso mulher
           <b>Gm</b>
Tem outra coisas
       <b>Bb7</b>
Minha mãe não dorme
                    <b>A7</b> 
Enquanto eu não chegar
 <b>Gm</b>  <b>G#º</b>  <b>Dm</b>    <b>Dm/C</b>
Sou filho único
 <b>E7</b>          <b>A7</b>            <b>Dm</b>
Tenho minha casa pra olhar
                <b>Eb7(9)</b> 
Não posso ficar

[Quarta Baixaria]

<span class="tablatura">    <b>Dm</b>            <b>Eb7(9)</b>
<span class="cnt">E|--1-------------1-------------------------|
B|--3-------------2-------------------------|
G|--2-1p0---------0-------------------------|
D|--0-----4-3-2-1---------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TremDasOnzePage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/demonios-da-garoa/trem-das-onze"
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
