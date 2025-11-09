import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/jorge-mateus/logo-eu/

const cifra = `Jorge & Mateus - Logo Eu

[Intro] <b>F#m</b>  <b>A</b>  <b>E</b>
        <b>F#m</b>  <b>A</b>  <b>E</b>

[Primeira Parte]

<b>E</b>
  Eu te vi e já te quis
<b>A</b>
  Me vi tão feliz
<b>C#m</b>                          <b>A</b>
    Um amor que pra mim era sonho

<b>E</b>                      <b>A</b>
  Surpreendente provar   do que eu 

Só ouvi falar
<b>C#m</b>          <b>B2</b>         <b>A</b>
E você resolveu me mostrar

[Refrão]

     <b>F#m</b>
Logo eu que nem pensava
       <b>A</b>               <b>E</b>
Eu não   imaginava te merecer
    <b>B2</b>   
E agora sou o dono desse amor

   <b>F#m</b>                         <b>A</b>
Eu     nem quero saber por que
                 <b>E</b>
Eu só preciso viver
   <b>B2</b>                     <b>F#m</b>
O resto dessa vida com você

( <b>A</b>  <b>E</b>  <b>B2</b> )   

[Primeira Parte]

<b>E</b>
  Te vi e já te quis
<b>A</b>
  Me vi tão feliz
<b>C#m</b>                          <b>A</b>
    Um amor que pra mim era sonho

<b>E</b>                      <b>A</b>
  Surpreendente provar   do que eu

Só ouvi falar
<b>C#m</b>          <b>B2</b>         <b>A</b>
E você resolveu me mostrar

[Refrão]

     <b>F#m</b>
Logo eu que nem pensava
       <b>A</b>               <b>E</b>
Eu não   imaginava te merecer
    <b>B2</b>   
E agora sou o dono desse amor

   <b>F#m</b>                         <b>A</b>
Eu     nem quero saber por quê
                 <b>E</b>
Eu só preciso viver
   <b>B2</b>   
O resto dessa vida com você

<b>F#m</b>
Eu que nem pensava
 <b>A</b>
Não imaginava
    <b>E</b>
Te merecer
    <b>B2</b>   
E agora sou o dono desse amor

<b>F#m</b>                      <b>A</b>
Eu nem quero saber por que
                 <b>E</b>
Eu só preciso viver
   <b>B2</b>                     <b>F#m</b>
O resto dessa vida com você

( <b>A</b>  <b>E</b>  <b>B2</b> )  

   <b>B2</b>              <b>F#m</b>
O resto dessa vida     com você

----------------- Acordes -----------------
A = P2 2 2 2
B2 = P4 6 4 4
C#m = 2 1 2 2
E = 2 1 0 2
F#m = 4 2 2 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function LogoEuPage() {
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
