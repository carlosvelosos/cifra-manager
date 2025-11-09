import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `

[Intro]
 
<span class="tablatura">      <b>E</b>        <b>D</b>           <b>A</b>  <b>A5+</b> <b>A6</b> <b>A7</b>
<span class="cnt">E|-4-------7---5--------10---9-|
B|-----------------------------|
G|-----------------------------|
D|-----------------------------|
A|-----------------------------|
E|-----------------------------|</span></span>

<b>D#m7/5-</b>               <b>G#7</b>
 O ar que se respira agora inspira novos tempos
  <b>C#m7/5-</b>                  <b>F#7</b>
Os sonhos meus e os teus decoram nosso apartamento
  <b>Bm7/5-</b>                 <b>E7</b>
Lá fora a sorte entrando enquanto aqui
                        <b>A</b>      <b>A5+</b>
Reflete a lua em nossa cama
  <b>A6</b>       <b>A7</b>
E a vida segue assim
     <b>D#m7/5-</b>         <b>G#7</b>
Tão docemente vista da sacada da varanda
   <b>C#m7/5-</b>         <b>F#7</b>
Eterna,plena,adormecida sobre as ondas
     <b>Bm7/5-</b>          <b>E7</b>
E eu vizinho de uma estrela
                               <b>A</b>       <b>A5+</b>
Adoro vê-la iluminando o meu pedaço
    <b>A6</b>         <b>A7</b>           <b>E/G#</b>
Foi Deus quem me mandou seguir seus passos
                            <b>Gº</b>
Pensando bem ,a lua tem seus traços
  <b>A7</b>                       <b>D</b>
E o céu desaba em nosso corredor
  <b>Dm6</b>    <b>A</b>          <b>A7</b>  
Esse é o nosso amor
<b>D</b>  <b>Dm6</b>     <b>A</b>    
Esse é o nosso amor
          <b>E</b>
Lençol de fogo no frio
               <b>D</b>
A porta aberta pro cio
   <b>A</b>  <b>A5+</b>  <b>A6</b>  <b>A7</b>
Brincar de amor

----------------- Acordes -----------------
A = P2 2 2 2
A5+ = 11 10 10 11
A6 = 2 2 2 4
A7 = 2 0 2 2
Bm7/5- = 1 2 0 3
C#m7/5- = 3 4 2 5
D = 4 2 3 4
D#m7/5- = 1 2 2 1
Dm6 = 0 2 0 3
E = 2 1 0 2
E7 = 2 1 0 0
F#7 = 4 3 P2 2
G#7 = P4 5 4 6
Gº = 5 3 P2 2`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function NovosTemposPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}