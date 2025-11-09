import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/bruno-e-marrone/dormi-na-praca/

const cifra = `Bruno e Marrone - Dormi Na Praça

[Intro] <b>E</b>

[Primeira Parte] 

    <b>E</b>          <b>G#m</b>        <b>C#m</b>
Eu caminhei sozinho pela rua
   <b>A</b>             <b>G#</b>            <b>C#m</b>
Falei com as estrelas e com a lua
    <b>A</b>                <b>G#</b>      
Deitei no banco da praça
 <b>C#m</b>              <b>A</b>
Tentando te esquecer
  <b>E</b>         <b>B</b>            <b>E</b>  <b>B</b>
Adormeci e sonhei com você

[Pré-Refrão] 

    <b>E</b>          <b>G#m</b>       <b>C#m</b>
No sonho você veio provocante
    <b>A</b>            <b>G#</b>            <b>C#m</b>
Me deu um beijo doce e me abraçou
   <b>A</b>           <b>G#</b>          <b>C#m</b>       <b>A</b>
E bem na hora "H" no ponto alto do amor
   <b>E</b>             <b>B</b>            <b>E</b>  <b>B</b>
Já era dia e o guarda me acordou

[Refrão] 

      <b>E</b>                   
Seu guarda eu não sou vagabundo
                  <b>B</b>
Eu não sou delinquente
                                
Sou um cara carente 
              <b>A</b>             <b>E</b>   <b>B</b>
Eu dormi na praça pensando nela
      <b>E</b>                                
Seu guarda seja meu amigo 
             <b>B</b>
Me bata me prenda faça tudo comigo
            <b>A</b>               <b>E</b>   <b>B</b>
Mas não me deixe, ficar sem ela

[Pré-Refrão] 

    <b>E</b>          <b>G#m</b>       <b>C#m</b>
No sonho você veio provocante
    <b>A</b>            <b>G#</b>            <b>C#m</b>
Me deu um beijo doce e me abraçou
   <b>A</b>           <b>G#</b>          <b>C#m</b>       <b>A</b>
E bem na hora "H" no ponto alto do amor
   <b>E</b>             <b>B</b>            <b>E</b>  <b>B</b>
Já era dia e o guarda me acordou

[Refrão] 

      <b>E</b>                   
Seu guarda eu não sou vagabundo
                  <b>B</b>
Eu não sou delinquente
                                
Sou um cara carente 
              <b>A</b>             <b>E</b>   <b>B</b>
Eu dormi na praça pensando nela
      <b>E</b>                                
Seu guarda seja meu amigo 
             <b>B</b>
Me bata me prenda faça tudo comigo
            <b>A</b>               <b>E</b>   <b>B</b>
Mas não me deixe, ficar sem ela

      <b>E</b>                   
Seu guarda eu não sou vagabundo
                  <b>B</b>
Eu não sou delinquente
                                
Sou um cara carente 
              <b>A</b>             <b>E</b>   <b>B</b>
Eu dormi na praça pensando nela
      <b>E</b>                                
Seu guarda seja meu amigo 
             <b>B</b>
Me bata me prenda faça tudo comigo
            <b>A</b>               <b>E</b>   
Mas não me deixe, ficar sem ela

----------------- Acordes -----------------
A = X 0 2 2 2 0
B = X 2 4 4 4 2
C#m = X 4 6 6 5 4
E = 0 2 2 1 0 0
G# = 4 6 6 5 4 4
G#m = 4 6 6 4 4 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DormiNaPracaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/bruno-e-marrone/dormi-na-praca/"
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
