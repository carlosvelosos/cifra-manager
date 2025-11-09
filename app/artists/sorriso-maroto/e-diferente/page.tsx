import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/sorriso-maroto/e-diferente/

const cifra = `Sorriso Maroto - É Diferente

Intro: <b>Am7</b> / <b>Cm7</b> / <b>Bm7/5-</b> / <b>E7</b> / <b>Bm7/5-</b> / <b>E7</b> 

<b>Am7</b>                             <b>D7/9</b> 
É diferente de todas que eu já conquisteiAm7                      G7 
É diferente de todas que beijei 
    <b>G7</b>             %
É diferente no jeito de tocar. 
      <b>F7</b>                        <b>E7</b> 
É diferente no jeito de amar. 
  <b>Am7</b>                        <b>D7/9</b>
É diferente, e deixa quem quiser falar, 
<b>Am7</b>                      <b>G7</b>           
Meu coração achou o seu lugar 
         <b>G7</b>           %
Não tem porque você se preocupar 
             <b>F7</b>            <b>E7</b>
Se o meu lugar é no seu coração 
<b>Am7</b>               <b>D7/9</b>      <b>Am7</b>
Eu sempre apostei na relação a dois 
                <b>D7/9</b>          <b>F7+</b> 
Pra muita gente o amor chega depois 
               <b>F6</b>  <b>G7</b>               <b>G#º</b> 
E com nós dois foi diferente... Diferente. 
<b>Am7</b>              <b>D7/9</b>          <b>Am7</b> 
A gente foi ao infinito num olhar 
                  <b>D7/9</b>      <b>F7+</b> 
Eu achei graça quando veio me falar 
                        <b>F6</b>    <b>G7</b>   <b>G#º</b>
O que você falou foi tudo que eu pensei 
<b>Am</b>  <b>Am7+</b>        <b>Gm7</b>       <b>C7/9</b> 
Eu quero provar pro mundo 
<b>F7+</b>               <b>F6</b>                     <b>Bm7/5-</b>        <b>E7</b> 
Quem tem duas vidas e um só querer, meu amor. 
<b>Am</b>  <b>Am7+</b>            <b>Gm7</b>       <b>C7/9</b> 
Eu quero gritar pro mundo 
             <b>F7+</b>    <b>F6</b>    <b>Bm7/5-</b>    <b>E7/9-</b> <b>E7/9+</b> 
O amor é lindo, eu amo você.

SOLO FINAL: <b>Am7</b> <b>Cm7</b> <b>Bm7/5-</b> <b>E7</b> <b>Bm7/5-</b> <b>E7/9-</b> <b>E7/G#</b> <b>A7/9+</b>

----------------- Acordes -----------------
A7/9+ = X X 7 6 8 8
Am = X 0 2 2 1 0
Am7 = X 0 2 0 1 0
Am7+ = X 0 2 1 1 0
Bm7/5- = X 2 3 2 3 X
C7/9 = X 3 2 3 3 X
Cm7 = X 3 5 3 4 3
D7/9 = X 5 4 5 5 X
E7 = 0 2 2 1 3 0
E7/9+ = X 6 5 6 7 X
E7/9- = X X 2 1 3 1
E7/G# = 4 X 2 4 3 X
F6 = 1 X 0 2 1 X
F7 = 1 3 1 2 1 1
F7+ = 1 X 2 2 1 X
G#º = 4 X 3 4 3 X
G7 = 3 5 3 4 3 3
Gm7 = 3 X 3 3 3 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EDiferentePage() {
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
