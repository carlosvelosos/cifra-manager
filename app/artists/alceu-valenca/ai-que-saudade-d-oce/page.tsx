import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/alceu-valenca/ai-que-saudade-doce/

const cifra = `Alceu Valença - Ai Que Saudade D'ocê

[Intro] <b>E</b>  <b>E7</b>  <b>A7</b>  <b>Am</b>
        <b>E</b>  <b>E7</b>  <b>A7</b>  <b>Am</b>
        <b>E</b>  <b>A7</b>  <b>B7</b>
        <b>E</b>  <b>A7</b>  <b>B7</b>  <b>E</b>

[Primeira Parte]

<b>E</b>                      <b>A</b>
  Não se admire se um dia
           <b>Am</b>      <b>E</b>
Um beija flor invadir
                <b>A</b>
A porta da tua casa
           <b>Am</b>         <b>E</b>
Te der um beijo e partir
    <b>B/D#</b>              <b>C#m</b>
Foi eu que mandei um beijo
             <b>E/G#</b>      <b>F#7</b>
Que é pra matar meu desejo
                      <b>B</b>
Faz tempo que não te vejo
           <b>A</b>       <b>E</b>
Ai que saudade d'ocê

( <b>E7</b>  <b>A7</b>  <b>Am</b> )
( <b>E</b>  <b>E7</b>  <b>A7</b>  <b>Am</b> )
( <b>E</b>  <b>A7</b>  <b>B7</b> )
( <b>E</b>  <b>A7</b>  <b>B7</b>  <b>E</b> )

[Segunda Parte]

                      <b>A</b>
Se um dia ocê se lembrar
             <b>Am</b>        <b>E</b>
Escreva uma carta pra mim
                 <b>A</b>
Bote logo no correio com
    <b>Am</b>             <b>E</b>
A frase dizendo assim
     <b>B/D#</b>             <b>C#m</b>
Faz tempo que não te vejo
         <b>E/G#</b>        <b>F#7</b>
Quero matar o meu desejo
                      <b>B</b>
Te mando um monte de beijo
           <b>A</b>        <b>E</b>
Ai que saudade sem fim

( <b>E7</b>  <b>A7</b>  <b>Am</b> )
( <b>E</b>  <b>E7</b>  <b>A7</b>  <b>Am</b> )
( <b>E</b>  <b>A7</b>  <b>B7</b> )
( <b>E</b>  <b>A7</b>  <b>B7</b>  <b>E</b> )

[Terceira Parte]

                  <b>A</b>
E se quiser recordar
        <b>Am</b>      <b>E</b>
Aquele nosso namoro
                 <b>A</b>
Quando eu ia viajar
       <b>Am</b>      <b>E</b>
Você caía no choro
         <b>B/D#</b>          <b>C#m</b>
E eu chorando pela estrada
                  <b>E/G#</b>    <b>F#7</b>
Mas o que que eu posso fazer?
                   <b>B</b>
Trabalhar é minha sina
          <b>A</b>          <b>E</b>
Eu gosto mesmo é d'ocê

( <b>E7</b>  <b>A7</b>  <b>Am</b> )
( <b>E</b>  <b>E7</b>  <b>A7</b>  <b>Am</b> )
( <b>E</b>  <b>A7</b>  <b>B7</b> )
( <b>E</b>  <b>A7</b>  <b>B7</b>  <b>E</b> )

[Primeira Parte]

                     <b>A</b>
Não se admire se um dia
                   <b>E</b>
Um beija flor invadir
                <b>A</b>
A porta da tua casa
                      <b>E</b>
Te der um beijo e partir
    <b>B/D#</b>              <b>C#m</b>
Foi eu que mandei um beijo
             <b>E/G#</b>      <b>F#7</b>
Que é pra matar meu desejo
                      <b>B</b>
Faz tempo que não te vejo
           <b>A</b>       <b>E</b>
Ai que saudade d'ocê

[Final] <b>E7</b>  <b>A7</b>  <b>Am</b>  <b>E</b>
        <b>E7</b>  <b>A7</b>  <b>Am</b>  <b>E</b>

----------------- Acordes -----------------
A = X 0 2 2 2 0
A7 = X 0 2 0 2 0
Am = X 0 2 2 1 0
B = X 2 4 4 4 2
B/D# = X 6 X 4 7 7
B7 = X 2 1 2 0 2
C#m = X 4 6 6 5 4
E = 0 2 2 1 0 0
E/G# = 4 X 2 4 5 X
E7 = 0 2 2 1 3 0
F#7 = 2 4 2 3 2 2`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AiQueSaudadeDOcePage() {
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
