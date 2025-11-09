import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `

<b>G</b>                <b>C</b>  <b>G</b>   <b>G7</b>
O céu de repente anuviou
  <b>C</b>                         <b>G</b>  
O vento agitou as ondas do mar
    <b>D7</b>                
E o que o temporal levou
    <b>G</b>
Foi tudo que deu pra guardar
   <b>A7/4/9</b>                     <b>Am</b>   <b>D7</b>
Só Deus sabe o quanto se labutou
   <b>G</b>                   <b>C</b>    <b>G</b>   <b>G7</b>  
Custou mas depois veio a bonança
    <b>C</b>                    <b>G</b> 
E agora é hora de agradecer
      <b>D7</b>                
Pois quando tudo se perdeu
    <b>G</b>                
E a sorte desapareceu
 <b>Em</b>       <b>A7</b>      <b>Am</b>    <b>D7</b>  <b>G</b>
Abaixo de Deus só ficou você

         <b>D</b>         <b>D#º</b> <b>Em</b>                      
Quando a gira girou    ninguém suportou
   <b>A7</b>             <b>Am</b>         
Só você ficou não me abandonou
          <b>D</b>         <b>D#º</b>   <b>Em</b>  
Quando o vento parou e a água baixou
    <b>A7</b>               <b>C</b>    <b>G</b>  
Eu tive a certeza do seu amor
          <b>D</b>         <b>D#º</b>   <b>Em</b>                      
Quando a gira girou    ninguém suportou
    <b>A7</b>            <b>Am</b>         
Só você ficou não me abandonou
          <b>D</b>        <b>D#º</b>   <b>Em</b>  
Quando o vento parou e a água baixou
    <b>A7</b>               <b>C</b>    <b>G</b>  
Eu tive a certeza do seu amor

              <b>Am7</b>      <b>G</b>  
Quando tudo parece perdido
         <b>Am7</b>            <b>G</b>  
É nessa hora que você vê
           <b>F#7</b>               <b>Bm</b> 
Quem é parceiro quem é teu amigo
             <b>F#7</b>                  <b>Bm</b> 
Quem é de ficar...  Quem é de correr
        <b>C</b>                <b>G</b>  
A tua mão me tirou do abismo
        <b>B7</b>              <b>Em</b>  
O teu axé evitou o meu fim
                             <b>A7</b>                         
Me ensinou o que é companheirismo e também a gostar
          <b>D7</b>                 
De quem gosta de mim

         <b>D</b>         <b>D#º</b> <b>Em</b>                      
Quando a gira girou    ninguém suportou
   <b>A7</b>             <b>Am</b>         
Só você ficou não me abandonou
          <b>D</b>         <b>D#º</b>   <b>Em</b>  
Quando o vento parou e a água baixou
    <b>A7</b>               <b>C</b>    <b>G</b>  
Eu tive a certeza do seu amor


              <b>Am7</b>            <b>G</b>  
Na hora que a gente menos espera
                   <b>Am7</b>       <b>G</b>  
No fim do túnel aparece uma luz
               <b>F#7</b>        <b>Bm</b> 
A luz de uma amizade sincera
              <b>F#7</b>              <b>Bm</b> 
Para ajudar a carregar nossa cruz
               <b>C</b>                 <b>G</b>  
Foi Deus quem pôs você no meu caminho
         <b>B7</b>                <b>Em</b>  
Na hora certa pra me socorrer
                        <b>A7</b>             
Eu não teria chegado sozinho a lugar nenhum
        <b>D7</b>          
Se não fosse você

         <b>D</b>         <b>D#º</b> <b>Em</b>                      
Quando a gira girou    ninguém suportou
   <b>A7</b>             <b>Am</b>         
Só você ficou não me abandonou
          <b>D</b>         <b>D#º</b>   <b>Em</b>  
Quando o vento parou e a água baixou
    <b>A7</b>               <b>C</b>    <b>G</b>  
Eu tive a certeza do seu amor

----------------- Acordes -----------------
A7 = 2 0 2 2
Am = 2 2 1 2
Am7 = 7 P5 5 5
B7 = 1 2 0 1
Bm = 4 4 3 4
C = 2 0 1 2
D = 4 2 3 4
D#º = 1 2 1 4
D7 = 4 2 1 4
Em = 5 4 5 5
F#7 = 4 3 P2 2
G = 5 4 3 5
G7 = P3 4 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
