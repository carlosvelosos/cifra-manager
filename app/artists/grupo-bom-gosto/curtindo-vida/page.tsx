import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/grupo-bom-gosto/curtindo-vida/#

const cifra = `Grupo Bom Gosto - Curtindo Vida

[Intro] <b>Em7(9)</b>  <b>B7(4/9)</b>  <b>Bb7(4/9)</b>  
        <b>A7(4/9)</b>  <b>F#m7(5-)</b>  <b>B7(9-)</b>

<b>Em7(9)</b>
       Guere guerê, guere guerê
                       <b>B7(4/9)</b>
Guere guerê, guere guerê
                       <b>F#m7(5-)</b>  
Guere guerê, guere guerê
<b>B7(9-)</b>
       Da Lua

<b>Em7(9)</b>
       Guere guerê, guere guerê
                       <b>B7(4/9)</b>
Guere guerê, guere guerê
                       <b>F#m7(5-)</b>  <b>B7(9-)</b>
Guere guerê, guere guerê

[Primeira Parte]

  <b>A7(4/9)</b>                    <b>B7(4/9)</b>
Quer saber? Tudo tem um porquê
<b>A7(4/9)</b>                         <b>B7(4/9)</b>
        Tô legal, quero mais é viver
<b>Bb7(4/9)</b>  <b>A7(4/9)</b>
                  Antes só
               <b>B7(4/9)</b>
Do que ser infeliz
<b>A7(4/9)</b>                        <b>B7(4/9)</b>
        Sei que vou encontrar diretriz
     <b>F#m7(5-)</b>   
Pro meu coração
 <b>B7(9-)</b> 
Palma da mão

[Refrão]

<b>Em7(9)</b>
       Enquanto eu não encontro

Eu vou curtindo a vida

Enquanto eu não encontro
               <b>B7(4/9)</b>
Eu vou tirando onda

Enquanto eu não encontro
                    <b>F#m7(5-)</b>  <b>B7(9-)</b>
Eu vou beijando em boca

<b>Em7(9)</b>
       Enquanto eu não encontro

Eu vou badalando

Enquanto eu não encontro
             <b>B7(4/9)</b>
Eu vou pagodeando

Enquanto eu não encontro
              <b>F#m7(5-)</b>  <b>B7(9-)</b>
Eu sou da boemia

Da Lua

<b>Em7(9)</b>
       Enquanto eu não encontro

Eu vou curtindo a vida

Enquanto eu não encontro
               <b>B7(4/9)</b>
Eu vou tirando onda

Enquanto eu não encontro
                    <b>F#m7(5-)</b>  <b>B7(9-)</b>
Eu vou beijando em boca

<b>Em7(9)</b>
       Enquanto eu não encontro

Eu vou badalando

Enquanto eu não encontro
             <b>B7(4/9)</b>
Eu vou pagodeando

Enquanto eu não encontro
              <b>F#m7(5-)</b>  <b>B7(9-)</b>
Eu sou da boemia

Da Lua

[Ponte]

<b>Em7(9)</b>
       Guere guerê, guere guerê
                       <b>B7(4/9)</b>
Guere guerê, guere guerê
                       <b>F#m7(5-)</b>  
Guere guerê, guere guerê
<b>B7(9-)</b>
       Da Lua

<b>Em7(9)</b>
       Guere guerê, guere guerê
                       <b>B7(4/9)</b>
Guere guerê, guere guerê
                       <b>F#m7(5-)</b>  <b>B7(9-)</b>
Guere guerê, guere guerê

[Primeira Parte]

  <b>A7(4/9)</b>                    <b>B7(4/9)</b>
Quer saber? Tudo tem um porquê
<b>A7(4/9)</b>                         <b>B7(4/9)</b>
        Tô legal, quero mais é viver
<b>Bb7(4/9)</b>  <b>A7(4/9)</b>
                  Antes só
               <b>B7(4/9)</b>
Do que ser infeliz
<b>A7(4/9)</b>                        <b>B7(4/9)</b>
        Sei que vou encontrar diretriz
     <b>F#m7(5-)</b>   
Pro meu coração
 <b>B7(9-)</b> 
Palma da mão

[Refrão]

<b>Em7(9)</b>
       Enquanto eu não encontro

Eu vou curtindo a vida

Enquanto eu não encontro
               <b>B7(4/9)</b>
Eu vou tirando onda

Enquanto eu não encontro
                    <b>F#m7(5-)</b>  <b>B7(9-)</b>
Eu vou beijando em boca

<b>Em7(9)</b>
       Enquanto eu não encontro

Eu vou badalando

Enquanto eu não encontro
             <b>B7(4/9)</b>
Eu vou pagodeando

Enquanto eu não encontro
              <b>F#m7(5-)</b>  <b>B7(9-)</b>
Eu sou da boemia

Da Lua

<b>Em7(9)</b>
       Enquanto eu não encontro

Eu vou curtindo a vida

Enquanto eu não encontro
               <b>B7(4/9)</b>
Eu vou tirando onda

Enquanto eu não encontro
                    <b>F#m7(5-)</b>  <b>B7(9-)</b>
Eu vou beijando em boca

<b>Em7(9)</b>
       Enquanto eu não encontro

Eu vou badalando

Enquanto eu não encontro
             <b>B7(4/9)</b>
Eu vou pagodeando

Enquanto eu não encontro
              <b>F#m7(5-)</b>  <b>B7(9-)</b>
Eu sou da boemia

Da Lua

[Ponte]

<b>Em7(9)</b>
       Guere guerê, guere guerê
                       <b>B7(4/9)</b>
Guere guerê, guere guerê
                       <b>F#m7(5-)</b>  
Guere guerê, guere guerê
<b>B7(9-)</b>
       Da Lua

<b>Em7(9)</b>
       Guere guerê, guere guerê
                       <b>B7(4/9)</b>
Guere guerê, guere guerê
                       <b>F#m7(5-)</b>  
Guere guerê, guere guerê
<b>B7(9-)</b>
       Da Lua

<b>Em7(9)</b>
       Guere guerê, guere guerê
                       <b>B7(4/9)</b>
Guere guerê, guere guerê
                       <b>F#m7(5-)</b>  <b>B7(9-)</b>
Guere guerê, guere guerê

[Final] <b>Em7(9)</b>`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function CurtindoVidaPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/grupo-bom-gosto/curtindo-vida/#"
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
