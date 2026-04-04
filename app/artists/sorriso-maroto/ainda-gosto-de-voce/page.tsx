import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/sorriso-maroto/ainda-gosto-de-voce

const cifra = `Sorriso Maroto - Ainda Gosto De Voce

<span class="tablatura">[Intro]
<span class="cnt">E|-------------------------------------------------------------|
B|-------------------------------------------------------------|
G|---------------0---------------------------------------------|
D|-2-0-2-----2-4---4-2---------0-2-0---------2-4/5-5/7-5/9-0---|
A|--2------2-----------3---0-3-------3-0---3-------------------|
E|-------------------------------------------------------------|</span></span>

<b>G7M</b>             <b>Em7</b>
    Bateu saudade lembrei do tempo que a gente se amou
<b>Am7</b>               <b>C</b>            <b>D</b>
    Era verdade eu nunca percebi não dei valor
<b>G7M</b>             <b>Em7</b>
    Agora entendo  por que você não quer voltar atrás
<b>Am7</b>               <b>C</b>               <b>D</b>
    Eu tô sofrendo o mesmo que você e muito mais
<b>G7M</b>             <b>Bm7</b>                     <b>Em7</b>
    Eu não sei te esquecer volta logo pra mim
           <b>Am7</b>           <b>C</b>     <b>D</b>
Já me arrependi de tudo dá um fim
<b>G7M</b>               <b>Em7</b>
   Ainda gosto de você eu não escondo de ninguém
<b>G7M</b>                 <b>Em7</b>                    <b>Am7</b>
   Ainda gosto de você o teu amor me faz tão bem
                      <b>C</b>       <b>D</b>       <b>Am7</b>
Eu não encontro uma saída de você me libertar
                      <b>C9</b>      <b>C/D</b>          <b>G7M</b>
E a solução pra minha vida é a gente se acertar

<b>G7M</b>               <b>Em7</b>                          <b>G7M</b>
   Ainda gosto de você eu não escondo de ninguém
                   <b>Em7</b>                       <b>Am7</b>
Ainda gosto de você o teu amor me faz tão bem
                      <b>C</b>       <b>D</b>          <b>Am7</b>
Eu não encontro uma saída de você me libertar
                      <b>C9</b>      <b>C/D</b>          <b>G7M</b>
E a solução pra minha vida é a gente se acertar

<b>G7M</b>             <b>Em7</b>
    Bateu saudade lembrei do tempo que a gente se amou
<b>Am7</b>                 <b>C</b>             <b>D</b>
    Era verdade     eu nunca percebi não dei valor
<b>G7M</b>             <b>Em7</b>
    Agora entendo  por que você não quer voltar atrás
<b>Am7</b>              <b>C</b>                <b>D</b>
    Eu tô sofrendo   o mesmo que você e muito mais
<b>G7M</b>             <b>Bm7</b>                     <b>Em7</b>
    Eu não sei te esquecer volta logo pra mim
           <b>Am7</b>           <b>C/D</b>
Já me arrependi de tudo dá um fim
<b>G7M</b>               <b>Em7</b>                         <b>G7M</b>
   Ainda gosto de você eu não escondo de ninguém
                <b>Em7</b>                         <b>Am7</b>
Ainda gosto de você o teu amor me faz tão bem
                      <b>C</b>       <b>D</b>          <b>Am7</b>
Eu não encontro uma saída de você me libertar
                      <b>C9</b>      <b>C/D</b>          <b>G7M</b>
E a solução pra minha vida é a gente se acertar

<b>G7M</b>               <b>Em7</b>
   Ainda gosto de você eu não escondo de ninguém
<b>G7M</b>               <b>Em7</b>                       <b>Am7</b>
   Ainda gosto de você o teu amor me faz tão bem
                       <b>C</b>      <b>D</b>           <b>Am7</b>
Eu não encontro uma saída de você me libertar
                      <b>C9</b>      <b>C/D</b>          <b>G7M</b>
E a solução pra minha vida é a gente se acertar`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------"),
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AindaGostoDeVocePage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/sorriso-maroto/ainda-gosto-de-voce",
  );

  return (
    <>
      <CifraDisplay title={title || ""} cifraData={cifraStructure} />
      <FloatingMenu />
    </>
  );
}
