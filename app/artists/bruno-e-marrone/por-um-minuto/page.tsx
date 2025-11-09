import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/bruno-e-marrone/por-um-minuto/

const cifra = `Bruno e Marrone - Por Um Minuto

[Intro] <b>G</b>  <b>D/F#</b>  <b>C9</b>
        <b>G</b>  <b>D/F#</b>  <b>C9</b>
        
[Primeira Parte]

<b>G</b>              <b>D</b>               <b>C9</b>
  E todos os amantes já adormeceram 
<b>G</b>               <b>D</b>              <b>C9</b>
  E todas as palavras já se calaram
<b>G</b>                <b>D</b>   
  Já não vive o mundo 
              <b>C9</b>
Em que se perderam

<b>G</b>              <b>D</b>                <b>C9</b>
  Nem as madrugadas em que se amaram
          <b>G</b>  <b>D</b>  <b>C9</b>
Quero sentir         
         <b>G</b>  <b>D</b>  <b>C9</b>
Quero ouvir

[Segunda Parte]

<b>G</b>                 <b>D</b>             <b>C9</b>
  Seus passos de volta a minha porta
<b>G</b>                    <b>D</b>
  Pra dizer que me amava 
               <b>C9</b>
Quando estava longe
<b>G</b>                   <b>D</b> 
  E deixar que amanhã 
              <b>C9</b>
Juntos nos encontre
<b>G</b>                    <b>D</b>
  E que passe a ser vida 
                 <b>C9</b>
O que hoje é só sonho

[Pré-Refrão]

<b>C</b>            <b>Am7</b>        <b>D</b>
  E que se acabe os segredos   
<b>C</b>             <b>Am7</b>        <b>D</b>
  E que se aumente os desejos

[Refrão]

<b>G</b>           <b>Bm</b>          <b>Em</b>
E assim enquanto eu te beijo
     <b>Bm</b>        <b>Am</b>            <b>D</b>
Que mude o destino por um minuto
  <b>Am</b>             <b>Am7M</b>         <b>Am7</b>  <b>D</b>
Que meu corpo encontre o seu corpo   
<b>C</b>            <b>D</b>    <b>G</b>   <b>C9</b>
  Num prazer absoluto

<b>G</b>           <b>Bm</b>            <b>Em</b>
E assim enquanto eu te abraço 
     <b>Bm</b>             <b>Am</b>
Me aperte em seus braços 
          <b>D</b>  
Por um minuto

<b>C</b>                  <b>Bm</b>      <b>Em</b>
  De um jeito que só você sabe 
<b>C</b>               <b>D</b>        <b>G</b>
  De um jeito que só eu sei

( <b>G</b>  <b>D/F#</b>  <b>C9</b>  <b>G</b>  <b>D/F#</b>  <b>C9</b>)

[Terceira Parte]

<b>G</b>              <b>D</b>
  Já não há razão 
                 <b>C9</b>
Pra não ser pra sempre 
<b>G</b>                  <b>D</b>
  Dessa vez há de ser 
                 <b>C9</b>
Tem que ser diferente
<b>G</b>                 <b>D</b>
  Não me deixe sozinho 
              <b>C9</b>
Nem mesmo um pouco
<b>G</b>                    <b>D</b>
  Que esse pouco me deixa 
               <b>C9</b>
Cada vez mais louco

[Pré-Refrão]

<b>C</b>            <b>Am7</b>        <b>D</b>
  E que se acabe os segredos   
<b>C</b>             <b>Am7</b>        <b>D</b>
  E que se aumente os desejos

[Refrão Final]

<b>G</b>           <b>Bm</b>          <b>Em</b>
E assim enquanto eu te beijo
     <b>Bm</b>        <b>Am</b>            <b>D</b> 
Que mude o destino por um minuto
  <b>Am</b>             <b>Am7M</b>         <b>Am7</b>  <b>D</b>
Que meu corpo encontre o seu corpo   
<b>C</b>            <b>D</b>    <b>G</b>   <b>C9</b>    
  Num prazer absoluto

<b>G</b>           <b>Bm</b>            <b>Em</b>
E assim enquanto eu te abraço 
     <b>Bm</b>             <b>Am</b>
Me aperte em seus braços 
          <b>D</b>   
Por um minuto

<b>C</b>                  <b>Bm</b>      <b>Em</b>  
  De um jeito que só você sabe 
<b>C</b>               <b>D</b>        <b>G</b>
  De um jeito que só eu sei

( <b>A</b>  <b>C#m</b>  <b>F#m</b>  <b>C#m</b>  <b>Bm</b>  <b>E</b> )

  <b>Bm</b>             <b>Bm7M</b>         <b>Bm7</b>  <b>E</b>
Que meu corpo encontre o seu corpo     
 <b>D</b>         <b>E</b>    <b>A</b>   <b>D</b>
Num prazer absoluto

<b>A</b>           <b>C#m</b>           <b>F#m</b>
E assim enquanto eu te abraço  
     <b>C#m</b>            <b>Bm</b>             <b>E</b>
Me aperte em seus braços por um minuto

<b>D</b>                  <b>C#m</b>     <b>F#m</b>   
  De um jeito que só você sabe   
<b>D</b>               <b>E</b>       <b>A</b>
  De um jeito que só eu   sei

[Final] <b>A</b>  <b>E</b>  <b>D</b>  <b>A</b>  <b>E</b>  <b>D</b>

----------------- Acordes -----------------
A = X 0 2 2 2 0
Am = X 0 2 2 1 0
Am7 = X 0 2 0 1 0
Am7M = X 0 2 1 1 0
Bm = X 2 4 4 3 2
Bm7 = X 2 4 2 3 2
Bm7M = X 2 4 3 3 2
C = X 3 2 0 1 0
C#m = X 4 6 6 5 4
C9 = X 3 2 0 3 3
D = X X 0 2 3 2
D/F# = 2 X 0 2 3 X
E = 0 2 2 1 0 0
Em = 0 2 2 0 0 0
F#m = 2 4 4 2 2 2
G = 3 2 0 0 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PorUmMinutoPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/bruno-e-marrone/por-um-minuto/"
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
