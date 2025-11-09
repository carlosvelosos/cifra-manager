import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

// URL: https://www.cifraclub.com.br/revelacao/a-pureza-da-flor/

const cifra = `

[Intro] <b>F</b>  <b>C/E</b>  <b>Dm</b>  <b>Cm</b>  <b>F7</b>  <b>Bb</b>  <b>Gm</b>  <b>C7</b>  <b>F</b>  <b>F</b>  <b>C7</b>

<b>F7+</b>           <b>Eb</b>        <b>Eb7+</b> <b>Bb/G</b>          <b>Gm6</b>     <b>C7/9</b>     <b>C7</b>
  Vou contar com você amor         pra chegar seja onde for
<b>Bb</b>               <b>Am7</b>          <b>Am6</b>    <b>Gm7</b>          <b>Gm6</b>   <b>C7/9</b>                  <b>C7</b>
Encontrar um cais   um lugar de  paz     para nunca mais      conviver com a dor 
<b>F7+</b>           <b>Eb</b>        <b>Eb7+</b> <b>Bb/G</b>         <b>Gm6</b>     <b>C7/9</b>    <b>C7</b>
  Vou contar com você amor        pra chegar seja onde for
 <b>Dm</b>       <b>Dm/C</b> <b>Am7</b>       <b>Am6</b>   <b>Gm7</b>          <b>Gm6</b>      <b>C7/9</b>            <b>Bb°</b>
Todo desamor      e a desilusão    não tem mais lugar    no meu coração
 <b>Dm</b>             <b>Dm/C</b>  <b>Am7</b>        <b>Am6</b>    <b>Gm7</b>           <b>C7/9</b>     <b>F7+</b>
Se eu puder entrar       no seu coração     você vai me dar razão

   <b>F7+</b>          <b>F6</b>         <b>C6</b>
A pureza da flor  (sou eu)
              <b>C/E</b>     <b>Dm</b>
E o teu cobertor (sou eu)
             <b>Cm7</b> <b>F7</b>    <b>Bb</b>              <b>C7/9</b>            <b>F</b>
Verdadeiro amor    sou eu (sou eu, sou eu, sou eu, sou eu)
   <b>F7+</b>          <b>F6</b>         <b>C6</b>
A pureza da flor  (sou eu)
              <b>C/E</b>     <b>Dm</b>
E o teu cobertor (sou eu)
             <b>Cm7</b> <b>F7</b>    <b>Bb</b>              <b>C7/9</b>            <b>F</b>
Verdadeiro amor    sou eu (sou eu, sou eu, sou eu, sou eu)

<b>F7+</b>           <b>Eb</b>        <b>Eb7+</b> <b>Bb/G</b>          <b>Gm6</b>     <b>C7/9</b>     <b>C7</b>
  Vou contar com você amor         pra chegar seja onde for
<b>Bb</b>               <b>Am7</b>          <b>Am6</b>    <b>Gm7</b>          <b>Gm6</b>   <b>C7/9</b>                  <b>C7</b>
Encontrar um cais   um lugar de  paz     para nunca mais      conviver com a dor 
<b>F7+</b>           <b>Eb</b>        <b>Eb7+</b> <b>Bb/G</b>         <b>Gm6</b>     <b>C7/9</b>    <b>C7</b>
  Vou contar com você amor        pra chegar seja onde for
 <b>Dm</b>       <b>Dm/C</b> <b>Am7</b>       <b>Am6</b>   <b>Gm7</b>          <b>Gm6</b>      <b>C7/9</b>            <b>Bb°</b>
Todo desamor      e a desilusão    não tem mais lugar    no meu coração
 <b>Dm</b>             <b>Dm/C</b>  <b>Am7</b>        <b>Am6</b>    <b>Gm7</b>           <b>C7/9</b>     <b>F7+</b>
Se eu puder entrar       no seu coração     você vai me dar razão

   <b>F7+</b>          <b>F6</b>         <b>C6</b>
A pureza da flor  (sou eu)
              <b>C/E</b>     <b>Dm</b>
E o teu cobertor (sou eu)
             <b>Cm7</b> <b>F7</b>    <b>Bb</b>              <b>C7/9</b>            <b>F</b>
Verdadeiro amor    sou eu (sou eu, sou eu, sou eu, sou eu)
   <b>F7+</b>          <b>F6</b>         <b>C6</b>
A pureza da flor  (sou eu)
              <b>C/E</b>     <b>Dm</b>
E o teu cobertor (sou eu)
             <b>Cm7</b> <b>F7</b>    <b>Bb</b>              <b>C7/9</b>            <b>F</b>
Verdadeiro amor    sou eu (sou eu, sou eu, sou eu, sou eu)

----------------- Acordes -----------------
Am6 = 4 2 1 2
Am7 = 7 P5 5 5
Bb = P3 3 3 3
Bb° = 8 6 P5 5
C6 = 2 2 1 2
C7 = 2 3 1 2
C7/9 = 2 3 3 5
Cm = 1 0 1 1
Cm7 = 5 3 4 5
Dm = 3 2 3 3
Dm/C = P3 5 3 7
Eb = 5 3 4 5
Eb7+ = 1 3 3 5
F = 3 2 1 3
F6 = 3 2 1 0
F7 = 3 2 P1 1
F7+ = 3 2 1 2
Gm = 5 3 3 5
Gm6 = 0 0 0 2
Gm7 = 5 P3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function APurezaDaFlorPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
