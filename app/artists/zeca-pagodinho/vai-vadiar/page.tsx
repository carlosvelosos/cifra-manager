import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/zeca-pagodinho/vai-vadiar/
const cifra = `

[Intro] <b>Dm</b>  <b>Em7(5-)</b>  <b>A7</b>  <b>Dm</b>  <b>Bb7</b>
        <b>A7</b>  <b>Dm</b>  <b>A7</b>  <b>Dm</b>  <b>A7</b>

<span class="tablatura">[Tab - Riff]

<span class="cnt">E|-3-1-0-1-3-1-0--1-0-3-0-1---------1-0-------------|
B|-------------------------------0-3-----3--1-------|
G|---------------------------2-1--------2-----3-2---|
D|--------------------------------------------------|</span></span>

<b>Dm</b>            <b>A7</b>          <b>Dm</b>
Eu quis te dar um grande amor
        <b>Em7(5-)</b>   <b>A7</b>      <b>Dm</b>      <b>Bb</b>
Mas você não.........se acostumou
       <b>A7</b>
A vida de um lar
<b>Dm/F</b>        <b>A7/E</b>     <b>Dm</b>           <b>A7</b>
O que você quer é vadiar...vai vadiar
    <b>Dm</b>   <b>Dm/C</b>    <b>Em7(5-)</b> <b>A7</b>     <b>Bb7</b>
Vai vadiar...vai vadiar...vai vadiar
 <b>A7</b>     <b>Dm</b>          <b>A7/E</b>
Vai vadiar...vai vadiar
      <b>Dm</b>   <b>Dm/C</b>    <b>Eb</b>        <b>Bb7</b>
Vai vadiar...vai vadiar...vai vadiar
 <b>A7</b>     <b>Dm</b>      <b>A7/E</b>
Vai vadiar
<b>Dm</b>           <b>A7</b>            <b>Dm</b>
Agora não precisa se preocupar
               <b>C7</b>                           <b>F</b>
Se passares da hora eu não vou mais lhe buscar
         <b>A7</b>     <b>Bb7</b>          <b>A7</b>         <b>Dm</b>
Não vou mais pedir...nem tampouco implorar
              <b>Em7(5-)</b>         <b>A7</b>
Você tem a mania de ir pra orgia
           <b>Dm</b>
Só quer vadiar
                <b>A7</b>                <b>A/C#</b>
Você vai pra folia se entrar numa fria
              <b>Dm</b>
Não vem me culpar
        <b>A7/E</b>
Vai VADIAR!
    <b>Dm</b>   <b>Dm/C</b>    <b>Em7(5-)</b> <b>A7</b>     <b>Bb7</b>
Vai vadiar...vai vadiar...vai vadiar
 <b>A7</b>     <b>Dm</b>          <b>A7/E</b>
Vai vadiar...vai vadiar

    <b>Dm</b>   <b>Dm/C</b>       <b>Eb</b>        <b>Bb7</b>
Vai vadiar...vai vadiar...vai vadiar
 <b>A7</b>     <b>Dm</b>
Vai vadiar
                 <b>Em7(5-)</b>          <b>A7</b>             <b>Dm</b>
Quem gosta da orgia da noite pro dia não pode mudar

     <b>Em7(5-)</b>             <b>A7</b>           <b>Dm</b>
Vive outra fantasia não vai se acostumar
 <b>Dm5+</b>   <b>Dm6</b>           <b>C7</b>             <b>F</b>
Eu   errei quando tentei lhe dar um lar
     <b>Dm</b>    <b>Dm/C</b>  <b>Bb7</b>                  <b>A7</b>               <b>Dm</b>
Você gosta do sereno e meu mundo é pequeno pra lhe segurar
                 <b>Bb7</b>           <b>A7</b>             <b>Dm</b>
Vai procurar alegria fazer moradia na luz do luar
       <b>A7/E</b>
Vai VADIAR!

       <b>Dm</b>   <b>Dm/C</b>    <b>Em7(5-)</b>  <b>A7</b>    <b>Bb7</b>
Vai vadiar...vai vadiar...vai vadiar
 <b>A7</b>     <b>Dm</b>          <b>A7/E</b>
Vai vadiar...vai vadiar

    <b>Dm</b>      <b>Dm/C</b>     <b>Eb</b>          <b>Bb7</b>
Vai vadiar...vai vadiar...vai vadiar
 <b>A7</b>     <b>Dm</b>              <b>A7</b>
Vai vadiar...eu quis te dar

----------------- Acordes -----------------
A/C# = 7 6 5 7
A7 = 2 0 2 2
A7/E = 11 9 8 7
Bb = P3 3 3 3
Bb7 = 3 1 3 3
C7 = 2 3 1 2
Dm = 3 2 3 3
Dm/C = P3 5 3 7
Dm/F = 12 10 10 12
Dm5+ = P3 3 3 3
Dm6 = 0 2 0 3
Em7(5-) = 2 3 3 5
F = 3 2 1 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    ""
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
