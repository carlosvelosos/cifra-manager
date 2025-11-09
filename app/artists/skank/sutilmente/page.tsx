import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/skank/sutilmente/

const cifra = `Skank - Sutilmente

[Intro] <b>D</b>  <b>D4</b>  <b>D</b>  <b>D9</b>  
        <b>D</b>  <b>D4</b>  <b>D</b>  <b>D9</b>   
        <b>A</b>  <b>A9</b>  <b>A</b>  <b>A9</b> 
        <b>D</b>  <b>D4</b>  <b>D</b>  <b>D9</b>  
        <b>D</b>  <b>D4</b>  <b>D</b>  <b>D9</b>   
        <b>A</b>  <b>A9</b>  <b>A</b>  <b>A9</b> 

[Primeira Parte]

<b>D</b>                  <b>D4</b>   <b>D</b>  <b>D9</b> 
  E quando eu estiver triste
<b>D</b>         <b>D4</b>  <b>D</b>  <b>D9</b>   <b>A</b>   <b>A9</b>  <b>A</b>  <b>A9</b> 
  Simplesmen_te me abrace
<b>D</b>                <b>D4</b>  <b>D</b>  <b>D9</b> 
  Quando eu estiver louco
<b>D</b>        <b>D4</b>  <b>D</b>  <b>D9</b>  <b>A</b>    <b>A9</b>  <b>A</b>  <b>A9</b> 
  Subitamen_te se afaste

[Ponte]

<b>G</b>                        
  Quando eu estiver fogo 
                  <b>D</b>    <b>D4</b>  <b>D</b>  <b>D9</b>  <b>A</b>
 Suavemente se encaixe

( <b>D</b>  <b>D4</b>  <b>D</b>  <b>D9</b> )  
( <b>D</b>  <b>D4</b>  <b>D</b>  <b>D9</b> )  
( <b>A</b>  <b>A9</b>  <b>A</b>  <b>A9</b> ) 

[Primeira Parte]

<b>D</b>                  <b>D4</b>   <b>D</b>  <b>D9</b> 
  E quando eu estiver triste
<b>D</b>         <b>D4</b>  <b>D</b>  <b>D9</b>   <b>A</b>   <b>A9</b>  <b>A</b>  <b>A9</b> 
  Simplesmen_te me abrace
<b>D</b>                <b>D4</b>  <b>D</b>  <b>D9</b> 
  Quando eu estiver louco
<b>D</b>        <b>D4</b>  <b>D</b>  <b>D9</b>  <b>A</b>    <b>A9</b>  <b>A</b>  <b>A9</b> 
  Subitamen_te se afaste

[Pré-Refrão]

<b>G</b>                         
  E quando eu estiver bobo 
                     <b>Bm</b>
Sutilmente disfarce, é
                            
Mas quando eu estiver morto 
                    <b>G</b>
Suplico que não me mate não

 <b>G/F#</b>      <b>Em7</b>
Dentro de ti
<b>G</b>  <b>G/F#</b>      <b>Em7</b>
  Dentro de ti

[Refrão]

 <b>D</b>           <b>G</b>    <b>G/F#</b>  <b>Em7</b>    <b>A7/4</b>
Mesmo que o mundo a____cabe enfim
 <b>D</b>         <b>G</b>     <b>G/F#</b>  <b>Em7</b>       <b>A7/4</b>
Dentro de tudo que    cabe em ti

 <b>D</b>           <b>G</b>    <b>G/F#</b>  <b>Em7</b>    <b>A7/4</b>
Mesmo que o mundo a____cabe enfim
 <b>D</b>         <b>G</b>     <b>G/F#</b>  <b>Em7</b>       <b>A7/4</b>
Dentro de tudo que    cabe em ti

( <b>D</b>  <b>D4</b>  <b>D</b>  <b>D9</b> )  
( <b>D</b>  <b>D4</b>  <b>D</b>  <b>D9</b> )  
( <b>A</b>  <b>A9</b>  <b>A</b>  <b>A9</b> ) 
( <b>D</b>  <b>D4</b>  <b>D</b>  <b>D9</b> )  
( <b>D</b>  <b>D4</b>  <b>D</b>  <b>D9</b> )  
( <b>A</b>  <b>A9</b>  <b>A</b>  <b>A9</b> ) 

[Primeira Parte]

<b>D</b>                  <b>D4</b>   <b>D</b>  <b>D9</b> 
  E quando eu estiver triste
<b>D</b>         <b>D4</b>  <b>D</b>  <b>D9</b>   <b>A</b>   <b>A9</b>  <b>A</b>  <b>A9</b> 
  Simplesmen_te me abrace
<b>D</b>                <b>D4</b>  <b>D</b>  <b>D9</b> 
  Quando eu estiver louco
<b>D</b>        <b>D4</b>  <b>D</b>  <b>D9</b>  <b>A</b>    <b>A9</b>  <b>A</b>  <b>A9</b> 
  Subitamen_te se afaste

[Pré-Refrão]

<b>G</b>                         
  E quando eu estiver bobo 
                     <b>Bm</b>
Sutilmente disfarce, é
                            
Mas quando eu estiver morto 
                    <b>G</b>
Suplico que não me mate não

 <b>G/F#</b>      <b>Em7</b>
Dentro de ti
<b>G</b>  <b>G/F#</b>      <b>Em7</b>
  Dentro de ti

[Refrão]

 <b>D</b>           <b>G</b>    <b>G/F#</b>  <b>Em7</b>    <b>A7/4</b>
Mesmo que o mundo a____cabe enfim
 <b>D</b>         <b>G</b>     <b>G/F#</b>  <b>Em7</b>       <b>A7/4</b>
Dentro de tudo que    cabe em ti

 <b>D</b>           <b>G</b>    <b>G/F#</b>  <b>Em7</b>    <b>A7/4</b>
Mesmo que o mundo a____cabe enfim
 <b>D</b>         <b>G</b>     <b>G/F#</b>  <b>Em7</b>       <b>A7/4</b>
Dentro de tudo que    cabe em ti

 <b>D</b>           <b>G</b>    <b>G/F#</b>  <b>Em7</b>    <b>A7/4</b>
Mesmo que o mundo a____cabe enfim
 <b>D</b>         <b>G</b>     <b>G/F#</b>  <b>Em7</b>       <b>A7/4</b>
Dentro de tudo que    cabe em ti

 <b>D</b>           <b>G</b>    <b>G/F#</b>  <b>Em7</b>    <b>A7/4</b>
Mesmo que o mundo a____cabe enfim
 <b>D</b>         <b>G</b>     <b>G/F#</b>  <b>Em7</b>       <b>A7/4</b>
Dentro de tudo que    cabe em ti

[Final] <b>D</b>  <b>G</b>  <b>G/F#</b>  <b>Em7</b>  <b>A7/4</b> 
        <b>D</b>  <b>G</b>  <b>G/F#</b>  <b>Em7</b>  <b>A7/4</b> 
        <b>D</b>  <b>G</b>  <b>G/F#</b>  <b>Em7</b>  <b>A7/4</b>

----------------- Acordes -----------------
Capotraste na 4ª casa
C#*  = X 0 2 2 2 0 - (*F na forma de C#)
C#7/4*  = X 0 2 0 3 3 - (*F7/4 na forma de C#7/4)
C#9*  = X 0 2 2 0 0 - (*F9 na forma de C#9)
D#m*  = X 2 4 4 3 2 - (*Gm na forma de D#m)
F#*  = X X 0 2 3 2 - (*A# na forma de F#)
F#4*  = X X 0 2 3 3 - (*A#4 na forma de F#4)
F#9*  = X X 0 2 3 0 - (*A#9 na forma de F#9)
G#m7*  = 0 2 0 0 3 3 - (*Cm7 na forma de G#m7)
B*  = 3 2 0 0 3 3 - (*D# na forma de B)
B/A#*  = 2 X 0 0 3 3 - (*D#/D na forma de B/A#)`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SutilmentePage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/skank/sutilmente/"
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
