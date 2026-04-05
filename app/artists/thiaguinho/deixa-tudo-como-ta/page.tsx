import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/thiaguinho/deixa-tudo-como-ta/#

const cifra = `Thiaguinho - Deixa Tudo Como Ta

[Primeira Parte] 

<span class="tablatura">[Tab - Primeira Parte]

      <b>A7M</b>   <b>A9</b>
<span class="cnt">E|----4-4-4-7------|
B|----5-5-5-5------|
G|----6-6-6-6------|
D|----7-7-7-7------|
A|-----------------|
E|-----------------|</span></span>

<span class="tablatura">      <b>E7M</b>   <b>E9</b>
<span class="cnt">E|----4-4-4-7------|
B|----4-4-4-4------|
G|----4-4-4-4------|
D|-----------------|
A|-----------------|
E|----0-0-0-0------|</span></span>

              <b>A7M</b>   <b>A9</b>
Deixa tudo como tá
            <b>A7M</b>            <b>A9</b>      
Eu não poderia tá feliz assim
                <b>A7M</b>                <b>A9</b>  
Só com esse pouquinho de você pra mim
               <b>E7M</b>               <b>E9</b>           
Mas olha essa vibe, esse fim de tarde
              <b>E7M</b>             <b>E9</b>           
Toda essa vontade de você em mim

              <b>A7M</b>                <b>A9</b>     
Esse sorrisinho na sua cara, eu sei
                 <b>A7M</b>                   <b>A9</b>   
O que é mais gostoso que encontrar alguém
                   <b>E7M</b>           <b>E9</b>           
Que te deixa à vontade dá prioridade
                <b>E7M</b>              <b>E9</b>          
Toma conta e invade, deixa tudo bem

[Pré-Refrão] 

     <b>A7M</b>  <b>G#m7</b>         <b>G#m7</b>         
Eu sei,        é foda imaginar 
                  <b>C#m7</b>
A gente ser de alguém
     <b>D9(5-)</b>          <b>G#7</b>
Mas sei que a gente junto

Não tem pra ninguém

 <b>A7M</b>                       <b>B/A</b>
Nada, nada, nada é mais importante
    <b>G#7(4)</b>        <b>G#7</b>        <b>C#m7</b>    <b>B9/Eb</b>
Que a vontade sincera de te ver, chegar
    <b>D9/E</b>  <b>E/G#</b>     <b>A7M</b>
Querer ficar, sei lá
                             <b>B</b> 
Cê poderia estar em outro lugar, eu também

[Refrão] 

 <b>G#7(4)</b>      <b>G#7</b>            <b>C#m7</b>  <b>B9/Eb</b>
Mas eu coloquei na minha cabeça que
   <b>D9/E</b>  <b>E/G#</b>      <b>A7M</b>
A gente não vai errar, não
                   <b>B/A</b>
A gente não vai errar, não
                <b>G#7(4)</b>   <b>G#7</b>
E se a gente errar  
   <b>C#m7</b>  <b>B9/Eb</b> <b>D9/E</b>   <b>E/G#</b>      <b>A7M</b>
A gente foi feliz tentando acertar
                   <b>B/A</b>
A gente não vai errar, não
                  <b>G#7(4)</b>   <b>G#7</b>
E se a gente errar  
   <b>C#m7</b>  <b>B9/Eb</b> <b>D9/E</b>   <b>E/G#</b>      <b>A7M</b>
A gente foi feliz tentando acertar
                 <b>A7M</b>  <b>A9</b> 
Deixa tudo como tá

[Primeira Parte] 

           <b>A7M</b>                   <b>A9</b>     
Esse sorrisinho na sua cara, eu sei
                 <b>A7M</b>                   <b>A9</b>   
O que é mais gostoso que encontrar alguém
                   <b>E7M</b>           <b>E9</b>           
Que te deixa à vontade dá prioridade
                <b>E7M</b>              <b>E9</b>           
Toma conta e invade, deixa tudo bem

[Pré-Refrão] 

     <b>A7M</b>  <b>G#m7</b>          <b>G#m7</b>         
Eu sei,        é foda imaginar
                   <b>C#m7</b>
A gente ser de alguém
     <b>D9(5-)</b>          <b>G#7</b>
Mas sei que a gente junto

Não tem pra ninguém

 <b>A7M</b>                       <b>B/A</b>
Nada, nada, nada é mais importante
    <b>G#7(4)</b>        <b>G#7</b>        <b>C#m7</b>    <b>B9/Eb</b>
Que a vontade sincera de te ver, chegar
    <b>D9/E</b>  <b>E/G#</b>     <b>A7M</b>
Querer ficar, sei lá
                             <b>B</b> 
Cê poderia estar em outro lugar, eu também

[Refrão] 

 <b>G#7(4)</b>      <b>G#7</b>            <b>C#m7</b>  <b>B9/Eb</b>
Mas eu coloquei na minha cabeça que
   <b>D9/E</b>  <b>E/G#</b>      <b>A7M</b>
A gente não vai errar, não
                   <b>B/A</b>
A gente não vai errar, não
                <b>G#7(4)</b>   <b>G#7</b>
E se a gente errar  
   <b>C#m7</b>  <b>B9/Eb</b> <b>D9/E</b>   <b>E/G#</b>      <b>A7M</b>
A gente foi feliz tentando acertar
                   <b>B/A</b>
A gente não vai errar, não
                  <b>G#7(4)</b>   <b>G#7</b>
E se a gente errar 
   <b>C#m7</b>  <b>B9/Eb</b> <b>D9/E</b>   <b>E/G#</b>      <b>A7M</b>
A gente foi feliz tentando acertar
                 <b>A7M</b>  <b>A9</b> 
Deixa tudo como tá`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function DeixaTudoComoTaPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/thiaguinho/deixa-tudo-como-ta/#"
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
