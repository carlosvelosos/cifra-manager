import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/legiao-urbana/sera/

const cifra = `Legião Urbana - Será

[Intro] <b>C</b>  <b>G</b>  <b>Am</b>  <b>F</b>
        <b>C</b>  <b>G</b>  <b>Am</b>  <b>F</b>

[Solo Intro]

<span class="tablatura"><span class="cnt">E|-0-------------------0-------------|
B|---3-1-0---------------3-1-0--1----|
G|---------2-0-2------------------0--|
D|-----------------------------------|
A|-----------------------------------|
E|-----------------------------------|</span></span>

[Primeira Parte]

<b>C</b>            <b>G</b>       <b>Am</b>
  Tire suas mãos de mim
           <b>F</b>         <b>C</b>
Eu não pertenço a você
              <b>G</b>       <b>Am</b>
Não é me dominando assim
          <b>F</b>           <b>C</b>
Que você vai me entender
                  <b>G</b>
Eu posso estar sozinho
<b>Am</b>                    <b>F</b>
   Mas, eu sei muito bem aonde estou
<b>Am</b>                <b>Em</b>
   Você pode até duvidar
<b>F</b>                   <b>G</b>       
  Acho que isso não é amor

( <b>C</b>  <b>F</b>  <b>G</b> )
( <b>C</b>  <b>F</b>  <b>G</b> )
( <b>C</b>  <b>F</b>  <b>G</b> )
( <b>C</b>  <b>F</b>  <b>G</b> )

[Refrão]

 <b>G</b>              <b>Dm</b>
Será só imaginação
 <b>G</b>                  <b>Dm</b>
Será que nada vai acontecer
 <b>G</b>                       <b>Dm</b>
Será que é tudo isso em vão
 <b>G</b>                   <b>Dm</b>      <b>Am</b>
Será que vamos conseguir vencer
  <b>F</b>       <b>G</b>  
Ô ô ô ô ô ô

( <b>C</b>  <b>F</b>  <b>G</b> )
( <b>C</b>  <b>F</b>  <b>G</b> )
( <b>C</b>  <b>F</b>  <b>G</b> )
( <b>C</b>  <b>F</b>  <b>G</b> )

[Segunda Parte]

<b>C</b>                       <b>G</b>
  Nos perderemos entre monstros
<b>Am</b>                    <b>F</b>
   Da nossa própria criação
<b>C</b>                 <b>G</b>
  Serão noites inteiras
<b>Am</b>                      <b>F</b>
   Talvez por medo da escuridão
<b>C</b>                <b>G</b>
  Ficaremos acordados
<b>Am</b>                    <b>F</b>
   Imaginando alguma solução
<b>Am</b>                       <b>Em</b>
   Pra que esse nosso egoísmo
<b>F</b>                    <b>G</b>  
  Não destrua nosso coração

( <b>C</b>  <b>F</b>  <b>G</b> )
( <b>C</b>  <b>F</b>  <b>G</b> )
( <b>C</b>  <b>F</b>  <b>G</b> )
( <b>C</b>  <b>F</b>  <b>G</b> )

[Refrão]

 <b>G</b>              <b>Dm</b>
Será só imaginação
 <b>G</b>                  <b>Dm</b>
Será que nada vai acontecer
 <b>G</b>                       <b>Dm</b>
Será que é tudo isso em vão
 <b>G</b>                   <b>Dm</b>      <b>Am</b>
Será que vamos conseguir vencer
  <b>F</b>       <b>G</b>
Ô ô ô ô ô ô

[Terceira Parte]

    <b>C</b>                 <b>G/B</b>
Brigar pra quê, se é sem querer
     <b>Gm/Bb</b>           <b>Dm</b>
Quem é que vai nos proteger
   <b>C</b>                    <b>G/B</b>
Será que vamos ter que responder
      <b>Gm/Bb</b>
Pelos erros a mais
<b>Dm</b>      
Eu e você

[Final] <b>G</b>  <b>F</b>  <b>G</b>  
        <b>F</b>  <b>G</b>  <b>F</b>

----------------- Acordes -----------------
Am = X 0 2 2 1 0
C = X 3 2 0 1 0
Dm = X X 0 2 3 1
Em = 0 2 2 0 0 0
F = 1 3 3 2 1 1
G = 3 2 0 0 0 3
G/B = X 2 0 0 3 3
Gm/Bb = X 1 0 0 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SeraPage() {
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
