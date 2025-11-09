import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/los-hermanos/anna-julia/

const cifra = `Los Hermanos - Anna Júlia

[Intro] <b>E</b>  <b>C#m</b>  <b>E</b>  <b>C#m</b>
 
[Primeira Parte]

  <b>E</b>             <b>C#m</b>           <b>G#m</b>
Quem te ver passar assim por mim 
     <b>A</b>         <b>B</b>     <b>E</b>
Não sabe o que é sofrer
         <b>C#m</b>        <b>G#m</b>
Ter que ver você assim
 <b>A</b>          <b>B</b>
Sempre tão linda
 <b>E</b>            <b>C#m</b>          <b>G#m</b> 
Contemplar o sol do teu olhar 
    <b>A</b>     <b>B</b>    <b>E</b>
Perder você no ar
       <b>C#m</b>         <b>G#m</b>  
Na certeza de um amor  

[Pré-Refrão]

 <b>A</b>    <b>B</b>      <b>C#m</b>
Me achar um nada
                    <b>G#m</b>  
Pois sem ter teu carinho 
               <b>A</b>
Eu me sinto sozinho
                <b>B</b>
Eu me afogo em solidão

[Refrão]

        <b>E</b>  <b>A</b>  <b>B</b>
Ô Anna Julia
        <b>E</b>  <b>A</b>  <b>B</b>
Ô Anna Julia

[Segunda Parte]

 <b>E</b>           <b>C#m</b>       <b>G#m</b> 
Nunca acreditei na ilusão 
    <b>A</b>     <b>B</b>      <b>E</b>
De ter você pra mim
        <b>C#m</b>          <b>G#m</b>    <b>A</b>        <b>B</b>
Me atormenta a previsão do nosso destino
<b>E</b>              <b>C#m</b>          <b>G#m</b>
Eu passando o dia a te esperar
   <b>A</b>      <b>B</b>    <b>E</b>
Você sem me notar
        <b>C#m</b>        <b>G#m</b>       
Quando tudo tiver fim

[Pré-Refrão]

   <b>A</b>        <b>B</b>   
Você vai estar 
        <b>C#m</b>
Com um cara
                 <b>G#m</b> 
Um alguém sem carinho 
                  <b>A</b>
Será sempre um espinho
               <b>B</b>
Dentro do meu coração

[Refrão]

        <b>E</b>  <b>A</b>  <b>B</b>
Ô Anna Julia
        <b>E</b>  <b>A</b>  <b>B</b>
Ô Anna Julia

[Solo] <b>E</b>  <b>A</b>  <b>B</b>  <b>E</b>  <b>A</b>  <b>B</b>
       <b>E</b>  <b>A</b>  <b>B</b>  <b>E</b>  <b>A</b>  <b>B</b> 
       <b>C#m</b>  <b>G#m</b>  <b>A</b>  <b>E</b> 
       <b>C#m</b>  <b>G#m</b>  <b>A</b>  <b>B</b>

<span class="tablatura">[Tab - Solo]

<span class="cnt">E|---------------------------------------------------|
B|---------------------------------------------------|
G|---------------------------------------------------|
D|-2-2-2-4-2-2-2-2-4-2-1--2-2-2-4-2-2-2-2-4-2-1------|
A|---------------------------------------------------|
E|---------------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|---------------------------------------------------|
B|-3/5-5-5-7-5--5-5-5-7-5-4-5------------------------|
G|---------------------------------------------------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|---------------------------------------------------|
B|-------------5-4-----------------------------------|
G|-----------------4-6-4-2-4-------------------------|
D|---------------------------------------------------|
A|-----2-4-2-4---------------------------------------|
E|-12\-----------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|---------12-11-------11-12-------------------------|
B|---------------12-14-------------------------------|
G|---------------------------------------------------|
D|---------------------------------------------------|
A|-2-4-2-4-------------------------------------------|
E|---------------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">E|-14-14-14-14-14-14-14-14-14-14-14-14-14-14-14-14---|
B|---------------------------------------------------|
G|---------------------------------------------------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|</span></span>

 <b>C#m</b>       <b>G#m</b>        <b>A</b>          <b>E</b>
Sei que você já não quer o meu amor
 <b>C#m</b>       <b>G#m</b>       <b>A</b>        <b>E</b>
Sei que você já não gosta de mim
    <b>C#m</b>            <b>G#</b> 
Eu sei que eu não sou 
        <b>A</b>            <b>E</b>
Quem você sempre sonhou
     <b>C#m</b>          <b>G#</b>
Mas vou reconquistar 
        <b>A</b>            <b>B</b>
O seu amor todo pra mim

[Refrão]

        <b>E</b>  <b>A</b>  <b>B</b>
Ô Anna Julia
        <b>E</b>  <b>A</b>  <b>B</b>
Ô Anna Julia
        <b>E</b>  <b>A</b>  <b>B</b>
Ô Anna Julia
        <b>E</b>      <b>A</b>      <b>B</b>             <b>E</b>
Ô Anna Julia, Julia, Julia... ou ou ou

----------------- Acordes -----------------
G#*  = 5 7 7 6 5 5 - (*G na forma de G#)
A#*  = 7 9 9 8 7 7 - (*A na forma de A#)
Cm*  = X 4 6 6 5 4 - (*Bm na forma de Cm)
D#*  = 0 2 2 1 0 0 - (*D na forma de D#)
G*  = 4 6 6 5 4 4 - (*F# na forma de G)
Gm*  = 4 6 6 4 4 4 - (*F#m na forma de Gm)`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AnnaJuliaPage() {
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
