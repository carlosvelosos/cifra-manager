import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

// URL: https://www.cifraclub.com.br/marilia-mendonca/graveto/

const cifra = `Marília Mendonça - Graveto

[Intro] <b>Em7</b>  <b>D6</b>  <b>C9</b>  <b>Em7</b>  <b>D6</b>  <b>C9</b>

<span class="tablatura">[Tab - Intro]

<span class="cnt">E|---3-2-0h2p0------------------------------|
B|-3-----------3----------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">   <b>Em7</b>     <b>D6</b>      <b>C9</b>
<span class="cnt">E|-3---3---2---2---0---0---0---0------------|
B|---3---3---3---3---3---3---3---3----------|
G|-0-------4-------0------------------------|
D|-2-------0--------------------------------|
A|-----------------3------------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">   <b>Em7</b>     <b>D6</b>      <b>C9</b>
<span class="cnt">E|-3---3---2---2---0---0---0---0------------|
B|---3---3---3---3---3---3---3---3----------|
G|-0-------4-------0------------------------|
D|-2-------0--------------------------------|
A|-----------------3------------------------|
E|------------------------------------------|</span></span>

[Primeira Parte]

<b>Em7</b>             <b>D6</b>         <b>C9</b>
    Vou ser sincero com você
                     <b>Em7</b>
Acho que pra mim já deu
           <b>D6</b>                <b>C9</b>
Faz um tempinho que não sou seu
                 <b>Em7</b>
Até a cama percebeu
         <b>D6</b>        <b>Am7</b>
Que esfriou demais
          <b>C9</b>
E seu toque não traz

<b>Em7</b>                     <b>D6</b>
    Não adianta por graveto
                     <b>C9</b>
Na fogueira que não pega mais
                    <b>D</b>
Não pega mais, não pega mais

[Refrão]

               <b>C9</b>
Você virou saudade
                  <b>G</b>
Aqui dentro de casa
                        <b>C9</b>
Se eu te chamo pro colchão
                 <b>G</b>
Você foge pra sala
                  <b>A7</b>
E nem se importa mais saber
           <b>C7M</b>
Do que eu sinto
                   <b>D</b>
Poucos metros quadrados
       <b>C</b>   <b>G</b>
Virou labirinto

               <b>C</b>
Você virou saudade
                  <b>G</b>
Aqui dentro de casa
                        <b>C</b>
Se eu te chamo pro colchão
                 <b>G</b>
Você foge pra sala
                  <b>A7</b>
E nem se importa mais saber
           <b>C</b>
Do que eu sinto
                   <b>D</b>
Poucos metros quadrados
       <b>C</b>   <b>G</b>
Virou labirinto

( <b>C</b>  <b>G</b>  <b>C</b> )

[Primeira Parte]

<b>Em7</b>             <b>D6</b>         <b>C9</b>
    Vou ser sincero com você
                     <b>Em7</b>
Acho que pra mim já deu
           <b>D6</b>                <b>C9</b>
Faz um tempinho que não sou seu
                 <b>Em7</b>
Até a cama percebeu
         <b>D6</b>        <b>Am7</b>
Que esfriou demais
          <b>C9</b>
E seu toque não traz

<b>Em7</b>                     <b>D6</b>
    Não adianta por graveto
                       <b>C9</b>
Numa fogueira que não pega mais
                    <b>D</b>
Não pega mais, não pega mais

[Refrão]

               <b>C</b>
Você virou saudade
                  <b>G</b>
Aqui dentro de casa
                        <b>C</b>
Se eu te chamo pro colchão
                 <b>G</b>
Você foge pra sala
                  <b>A7</b>
E nem se importa mais saber
           <b>C</b>
Do que eu sinto
                   <b>D</b>
Poucos metros quadrados
       <b>C</b>   <b>G</b>
Virou labirinto

               <b>C</b>
Você virou saudade
                  <b>G</b>
Aqui dentro de casa
                        <b>C</b>
Se eu te chamo pro colchão
                 <b>G</b>
Você foge pra sala
                  <b>A7</b>
E nem se importa mais saber
           <b>C</b>
Do que eu sinto
                   <b>D</b>
Poucos metros quadrados
       <b>C</b>   <b>G</b>
Virou labirinto

[Final] <b>C</b>  <b>G</b>  <b>C</b>  <b>G</b>

----------------- Acordes -----------------
A7 = 2 0 2 2
Am7 = 7 P5 5 5
C = 2 0 1 2
C7M = 2 0 0 2
C9 = 2 0 1 0
D = 4 2 3 4
D6 = 3 2 0 0
Em7 = 2 0 0 0
G = 5 4 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function GravetoPage() {
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
