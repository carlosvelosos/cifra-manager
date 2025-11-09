import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/jorge-mateus/nao-para-de-chover/

const cifra = `Jorge & Mateus - Fogueira

[Intro] <b>D</b>  <b>A/C#</b>  <b>Bm</b>  <b>F#m</b>  <b>G</b>  <b>D</b>
        <b>D</b>  <b>A/C#</b>  <b>Bm</b>  <b>F#m</b>  <b>G</b>  <b>D</b>
        <b>D</b>  <b>A/C#</b>

<span class="tablatura"><span class="cnt">E|-----------------------2------------------------------|
B|-----------------3-3-------0h2-2-2-0------------------|
G|-----------4-4-4---------------------2-4-4-4-4-2-4-2--|
D|----0-------------------------------------------------|
A|-0h2--4-2---------------------------------------------|
E|------------------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">                        H.n
E|-----------------------7------------------------------|
B|-----------------3-3---7---0h2-2-2-0------------------|
G|-----------4-4-4---------------------2-4-4-4-4-2-4-2--|
D|------------------------------------------------------|
A|---0h5--4-2-------------------------------------------|
E|------------------------------------------------------|</span></span>

[Primeira Parte]

 <b>Bm</b>              
Não para de chover
<b>F#m</b>               <b>G</b>           <b>D</b>       <b>A</b>
E eu preciso do sol pra lembrar seu calor
 <b>Bm</b>           
Se eu te magoei
<b>F#m</b>                  <b>G</b>        <b>D</b>     <b>A</b>
Desculpa estou aprendendo o que é amor

[Segunda Parte]

 <b>F#7</b>               <b>Bm</b>
Nas noites mais escuras
                 <b>G</b>               <b>D</b>  <b>F#7</b>
Nos bares, nas ruas, tudo é solidão
                    <b>Bm</b>
Não me deixe sozinho
            <b>G</b>               <b>A</b>
Falta de carinho rima com nova paixão

[Refrão]

 <b>D</b>               <b>A</b>
Eu quero o seu amor
                    <b>G</b>               <b>D</b>  <b>D4</b>  <b>D</b>
Eu quero ser seu homem, se você quiser
                  <b>A</b>
Se eu tiver seu amor
             <b>G</b>                  <b>D</b>  <b>D4</b>  <b>D</b>
Juro não preciso amar outra mulher
          <b>G</b>      <b>A</b>                    <b>D</b>
Não deixe apagar,  a fogueira do meu coração

[Solo] <b>D</b>  <b>A/C#</b>  <b>Bm</b>  <b>F#m</b>  <b>G</b>  <b>D</b>
       <b>D</b>  <b>A/C#</b>  <b>Bm</b>  <b>F#m</b>  <b>G</b>  <b>D</b>
       <b>D</b>  <b>A/C#</b>

<span class="tablatura"><span class="cnt">E|-----------------------2------------------------------|
B|-----------------3-3-------0h2-2-2-0------------------|
G|-----------4-4-4---------------------2-4-4-4-4-2-4-2--|
D|----0-------------------------------------------------|
A|-0h2--4-2---------------------------------------------|
E|------------------------------------------------------|</span></span>

<span class="tablatura"><span class="cnt">                        H.n
E|-----------------------7------------------------------|
B|-----------------3-3---7---0h2-2-2-0------------------|
G|-----------4-4-4---------------------2-4-4-4-4-2-4-2--|
D|------------------------------------------------------|
A|---0h5--4-2-------------------------------------------|
E|------------------------------------------------------|</span></span>

[Primeira Parte]

 <b>Bm</b>               <b>F#m</b>
Não para de chover
                 <b>G</b>           <b>D</b>       <b>A</b>
E eu preciso do sol pra lembrar seu calor
 <b>Bm</b>             <b>F#m</b>
Se eu te magoei
                     <b>G</b>        <b>D</b>     <b>A</b>
Desculpa estou aprendendo o que é amor

[Segunda Parte]

 <b>F#7</b>               <b>Bm</b>
Nas noites mais escuras
                 <b>G</b>               <b>D</b>  <b>F#7</b>
Nos bares, nas ruas, tudo é solidão
                    <b>Bm</b>
Não me deixe sozinho
            <b>G</b>                <b>A</b>
Falta de carinho rima com nova paixão

[Refrão]

 <b>D</b>               <b>A</b>
Eu quero o seu amor
                    <b>G</b>               <b>D</b>  <b>D4</b>  <b>D</b>
Eu quero ser seu homem, se você quiser
                  <b>A</b>
Se eu tiver seu amor
             <b>G</b>                  <b>D</b>  <b>D4</b>  <b>D</b>
Juro não preciso amar outra mulher
          <b>G</b>      <b>A</b>                    <b>D</b>
Não deixe apagar,  a fogueira do meu coração

 <b>D</b>               <b>A</b>
Eu quero o seu amor
                    <b>G</b>               <b>D</b>  <b>D4</b>  <b>D</b>
Eu quero ser seu homem, se você quiser
                  <b>A</b>
Se eu tiver seu amor
             <b>G</b>                  <b>D</b>  <b>D4</b>  <b>D</b>
Juro não preciso amar outra mulher
          <b>G</b>      <b>A</b>                    <b>D</b>
Não deixe apagar,  a fogueira do meu coração

 <b>D</b>               <b>A</b>
Eu quero o seu amor
                    <b>G</b>               <b>D</b>  <b>D4</b>  <b>D</b>
Eu quero ser seu homem, se você quiser
                  <b>A</b>
Se eu tiver seu amor
             <b>G</b>                  <b>D</b>  <b>D4</b>  <b>D</b>
Juro não preciso amar outra mulher
          <b>G</b>      <b>A</b>                    <b>D</b>     <b>D7</b>
Não deixe apagar,  a fogueira do meu coração
          <b>G</b>      <b>A</b>                    <b>D</b>
Não deixe apagar,  a fogueira do meu coração

[Final] <b>D</b>  <b>D4</b>  <b>D</b>  <b>D4</b>

----------------- Acordes -----------------
A = P2 2 2 2
A/C# = 7 6 5 7
Bm = 4 4 3 4
D = 4 2 3 4
D4 = 0 0 3 0
D7 = 4 2 1 4
F#7 = 4 3 P2 2
F#m = 4 2 2 4
G = 5 4 3 5`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FogueiraPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jorge-mateus/nao-para-de-chover/"
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
