import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/ze-ramalho/frevo-mulher/

const cifra = `Zé Ramalho - Frevo Mulher

[Intro] <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b> 
        <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b> 
        <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b> 
        <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b> 

[Primeira Parte]

<b>Bm</b>              <b>C</b>      
   Quantos aqui ouvem 
                  <b>Bm</b>  <b>C</b>
Os olhos eram de fé
<b>Am</b>             <b>Am/G</b>                  
   Quantos elementos
                <b>Em</b>
Amam aquela mulher

<b>G</b>                      
  Quantos homens eram
   <b>D</b>    <b>D#º</b>           <b>Em</b>
Inverno     outros verão
<b>F</b>                                        
  Outonos caindo secos
                  <b>Em</b>
No solo da minha mão

<b>Bm</b>                  <b>C</b>                    
   Gemeram entre cabeças
                <b>Bm</b>  <b>C</b>
A ponta do esporão
<b>Am</b>                    <b>Am/G</b>                  
   A folha do não-me-toque
                 <b>Em</b>
E o medo da solidão

<b>G</b>                   <b>D</b>                 
  Veneno meu companheiro
     <b>D#º</b>        <b>Em</b>
Desata no cantador
<b>F</b>                                        
  E desemboca no primeiro
               <b>Em</b>
Açude do meu amor

[Refrão 1]

<b>D</b>
  É quando o tempo

Sacode a cabeleira
<b>Em</b>
   A trança toda vermelha
<b>D</b>                  <b>D#º</b>              
  Um olho cego vagueia
               <b>Em</b>
Procurando por um

<b>D</b>                               
  É quando o tempo
               ( <b>D</b>  <b>Em</b> )
Sacode a cabeleira
                       ( <b>Em</b>  <b>D</b> )
A trança toda vermelha
                 <b>D#º</b>          
Um olho cego vagueia
          ( <b>D</b>  <b>Em</b> )
Procurando por um

( <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b> )
( <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b> )
( <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b> )

[Primeira Parte]

<b>Bm</b>              <b>C</b>      
   Quantos aqui ouvem 
                  <b>Bm</b>  <b>C</b>
Os olhos eram de fé
<b>Am</b>             <b>Am/G</b>                  
   Quantos elementos
                <b>Em</b>
Amam aquela mulher

<b>G</b>                      
  Quantos homens eram
   <b>D</b>    <b>D#º</b>           <b>Em</b>
Inverno     outros verão
<b>F</b>                                        
  Outonos caindo secos
                  <b>Em</b>
No solo da minha mão

<b>Bm</b>                  <b>C</b>                    
   Gemeram entre cabeças
                <b>Bm</b>  <b>C</b>
A ponta do esporão
<b>Am</b>                    <b>Am/G</b>                  
   A folha do não-me-toque
                 <b>Em</b>
E o medo da solidão

<b>G</b>                   <b>D</b>                 
  Veneno meu companheiro
     <b>D#º</b>        <b>Em</b>
Desata no cantador
<b>F</b>                                        
  E desemboca no primeiro
               <b>Em</b>
Açude do meu amor

[Refrão 2]

<b>D</b>
  É quando o tempo

Sacode a cabeleira
<b>Em</b>
   A trança toda vermelha
<b>D</b>                  <b>D#º</b>              
  Um olho cego vagueia
               <b>Em</b>
Procurando por um

<b>D</b>
  É quando o tempo

Sacode a cabeleira
<b>Em</b>
   A trança toda vermelha
<b>D</b>                  <b>D#º</b>              
  Um olho cego vagueia
               <b>Em</b>
Procurando por um

[Final] <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b> 
        <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b> 
        <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b>  <b>Bm</b>  <b>C</b>

----------------- Acordes -----------------
Am = X 0 2 2 1 0
Am/G = 3 X 2 2 1 X
Bm = X 2 4 4 3 2
C = X 3 2 0 1 0
D = X X 0 2 3 2
D#º = X X 1 2 1 2
Em = 0 2 2 0 0 0
F = 1 3 3 2 1 1
G = 3 2 0 0 0 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FrevoMulherPage() {
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
