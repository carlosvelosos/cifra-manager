import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/revelacao/o-show-tem-que-continuar/

const cifra = `Revelacao - O Show Tem Que Continuar

[Intro] <b>C</b>

<b>C7</b>             <b>F7M</b>
   Lalaia lalaia laia
<b>Fm</b>           <b>Em7</b>
Lalaia lalaia laia
<b>A7</b>            <b>Dm</b>    <b>G7</b>  <b>Gm</b>
  Lalaia Lalaia  la.a.a.ia
<b>C7</b>             <b>F7M</b>
   Lalaia lalaia laia
<b>Fm</b>           <b>Em7</b>
Lalaia lalaia laia
<b>A7</b>            <b>Dm</b>    <b>G7</b>  <b>C</b>
  Lalaia Lalaia  la.a.a.ia

        <b>A7</b>          <b>Dm</b>   <b>G7</b>
O teu choro já não toca
     <b>Em</b>
Meu bandolim
 <b>A7</b>                  <b>Dm</b>
Diz que minha voz sufoca  
<b>G7</b>  <b>Gm7</b>
Teu violão
   <b>C7</b>           <b>F7M</b>
Afrouxaram-se as cordas
     <b>Fm</b>      <b>Em7</b>  <b>A7</b>
E assim desafina
             <b>Dm</b>
E pobre das rimas
<b>G7</b>            <b>Gm7</b>
 Da nossa canção
      <b>C7</b>          <b>F7M</b>
Hoje somos folha morta
 <b>Fm</b>        <b>Em7</b>
Metais em surdina
<b>A7</b>        <b>Dm</b>
Fechada a cortina
<b>G7</b>          <b>C7M</b>
 Vazio o salão
       <b>A7</b>              <b>Dm</b>
Se os duetos não se encontram mais                                
<b>G7</b>      <b>C7M</b>               <b>A7</b>
E os solos perderam emoção
       <b>Dm</b>    <b>G7</b>
Se acabou o gás
<b>C7M</b>                          <b>Am</b>
  Pra cantar o mais simples refrão
            <b>D</b>
Se a gente nota
<b>E7</b>            <b>Am</b>  <b>A7</b>
  Que uma só nota
          <b>Dm</b>      <b>G7</b>
Já nos esgota
        <b>Gm7</b>         <b>C7</b>
O show perde a razão
              <b>F7M</b>  <b>Fm6</b>
Mas iremos achar o som
                       <b>Em7</b>  <b>A7</b>
Um acorde com um lindo som
                 <b>Dm</b>
E fazer com que fique bom
<b>G7</b>          <b>Gm7</b>            <b>C7</b>
Outra vez,  o nosso cantar
               <b>F7M</b>      <b>Fm6</b>                                         
E a gente vai ser feliz
                <b>Em7</b>      <b>A7</b>
Olha nós outra vez no ar
                   <b>Dm</b>  <b>G7</b>  <b>C</b>  <b>C7</b>
O show tem que conti--nu--ar
             <b>F7M</b>  <b>Fm6</b>
Nós iremos até Paris
              <b>Em7</b>
  Arrasar no Olimpia
<b>A7</b>                 <b>Dm</b>  <b>G7</b>  <b>Gm7</b>  <b>C7</b>
O show tem que conti--nu--ar
               <b>F7M</b>
Olha o povo pedindo bis
<b>Fm6</b>                 <b>Em7</b>
  Os ingresso vão se esgotar
<b>A7</b>                   <b>Dm</b>  <b>G7</b>  <b>Gm7</b>  <b>C7</b>
  O show tem que conti--nu--ar

<b>C7</b>             <b>F7M</b>
   Lalaia lalaia laia
<b>Fm</b>           <b>Em7</b>
Lalaia lalaia laia
<b>A7</b>            <b>Dm</b>    <b>G7</b>  <b>Gm</b>
  Lalaia Lalaia  la.a.a.ia
<b>C7</b>             <b>F7M</b>
   Lalaia lalaia laia
<b>Fm</b>           <b>Em7</b>
Lalaia lalaia laia
<b>A7</b>            <b>Dm</b>    <b>G7</b>  <b>Gm</b>
  Lalaia Lalaia  la.a.a.ia`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OShowTemQueContinuarPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/revelacao/o-show-tem-que-continuar/"
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
