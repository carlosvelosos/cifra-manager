import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/skank/vamos-fugir/

const cifra = `Skank - Vamos Fugir

[Intro] <b>F#m</b>  <b>E</b>  <b>F#m</b>  <b>E</b>

[Primeira Parte]

         <b>A</b>           <b>E4</b>
Vamos fugir deste lugar, baby
        <b>F#m</b> 
Vamos fugir
       <b>D</b>
Tô cansado de esperar
  <b>E</b>               <b>F#m</b>
Que você me carregue
         <b>A</b>
Vamos fugir
             <b>E4</b>
Pra outro lugar, baby
         <b>F#m</b> 
Vamos fugir
           <b>D</b>
Pra onde quer que você vá
  <b>E</b>               <b>F#m</b>
Que você me carregue

[Refrão]

                <b>A</b>
Pois diga que irá
    <b>E</b>      <b>D</b>
Irajá, Irajá

Pra onde eu só veja você
                 <b>A</b>
Você veja a mim só
     <b>E</b>       <b>D</b>
Marajó, Marajó

Qualquer outro lugar comum
                 <b>A</b>
Outro lugar qualquer
      <b>E</b>        <b>D</b>
Guaporé, Guaporé

Qualquer outro lugar ao sol
                <b>A</b>
Outro lugar ao sul
      <b>E</b>         <b>D</b>
Céu azul, Céu azul

Onde haja só o meu corpo nu
                   
Junto ao seu corpo nu

( <b>F#m</b>  <b>E</b>  <b>F#m</b>  <b>E</b> )

[Primeira Parte]

         <b>A</b>
Vamos fugir
             <b>E4</b>
Pra outro lugar, baby
         <b>F#m</b> 
Vamos fugir
          <b>D</b>
Pra onde haja um tobogã
<b>E</b>                    <b>F#m</b>
Onde a gente escorregue

         <b>A</b>           <b>E4</b>
Vamos fugir deste lugar, baby
         <b>F#m</b> 
Vamos fugir
       <b>D</b>
Tô cansado de esperar
  <b>E</b>               <b>F#m</b>
Que você me carregue

[Refrão]

                <b>A</b>
Pois diga que irá
    <b>E</b>      <b>D</b>
Irajá, Irajá

Pra onde eu só veja você
                 <b>A</b>
Você veja a mim só
     <b>E</b>       <b>D</b>
Marajó, Marajó

Qualquer outro lugar comum
                 <b>A</b>
Outro lugar qualquer
      <b>E</b>        <b>D</b>
Guaporé, Guaporé

Qualquer outro lugar ao sol
                <b>A</b>
Outro lugar ao sul
      <b>E</b>         <b>D</b>
Céu azul, Céu azul

Onde haja só o meu corpo nu
                      
Junto ao seu corpo nu

( <b>F#m</b>  <b>E</b>  <b>F#m</b>  <b>E</b> )

[Primeira Parte]

         <b>A</b>
Vamos fugir
             <b>E4</b>
Pra outro lugar, baby
         <b>F#m</b> 
Vamos fugir
          <b>D</b>
Pra onde haja um tobogã
<b>E</b>                    <b>F#m</b>
Onde a gente escorregue
      <b>D</b>
Todo dia de manhã
  <b>E</b>                   <b>F#m</b> 
Flores que a gente regue
     <b>D</b>
Uma banda de maçã
<b>E</b>                  <b>F#m</b>
Outra banda de reggae
       <b>D</b>
Tô cansado de esperar
  <b>E</b>               <b>F#m</b>
Que você me carregue
      <b>D</b>
Todo dia de manhã
  <b>E</b>                   <b>F#m</b> 
Flores que a gente regue

( <b>D</b>  <b>E</b>  <b>F#m</b> )
( <b>D</b>  <b>E</b>  <b>F#m</b> )

     <b>D</b>
Uma banda de maçã
<b>E</b>                  <b>F#m</b>
Outra banda de reggae

----------------- Acordes -----------------
A = X 0 2 2 2 0
D = X X 0 2 3 2
E = 0 2 2 1 0 0
E4 = 0 2 2 2 0 0
F#m = 2 4 4 2 2 2`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VamosFugirPage() {
  return (
    <>
      <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
