import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `

[Intro] <b>Em</b>  <b>C</b>  <b>B7</b>  <b>Em</b>  <b>G7</b>  <b>C</b>  <b>Bm</b>  <b>Am</b>  <b>Bm</b>  <b>Em</b>  <b>D7</b>  <b>B7</b>  <b>Em</b>

  <b>Em</b>                      <b>G7</b>              <b>C</b>
Tem homem que não abre mão de uma mulher gordinha
                       <b>B7</b>               <b>Em</b>
Tem homem de perder a linha com a mulher sarada
                       <b>G7</b>          <b>C</b>
Tem homem que só acha graça nas novinhas
                      <b>B7</b>                 <b>Em</b>
E outros que só se engraçam com as casadas

                      <b>G7</b>               <b>C</b>
Tem homem que se apaixona por mulher carente
                       <b>B7</b>               <b>Em</b>
E outros que ficam carentes sem as piriguetes
                  <b>G7</b>          <b>C</b>
E tem maluco só tentando dá o pente
 <b>B7</b>  <b>Em</b>

E tem parceiro de trazer mulher pra gente

         <b>G7</b>          <b>C</b>
Ô, Queiroz! Ô, Queiroz!
<b>B7</b>                  <b>Bm7(5-)</b>
Traz essa mulher pra nós!
    <b>G7</b>           <b>C</b>
Ô, Queiroz! Ô, Queiroz!
 <b>B7</b>                   <b>Em</b>
Traz essa mulher pra nós!

         <b>G7</b>          <b>C</b>
Ô, Queiroz! Ô, Queiroz!
<b>B7</b>                  <b>Bm7(5-)</b>
Traz essa mulher pra nós!
    <b>G7</b>           <b>C</b>
Ô, Queiroz! Ô, Queiroz!
 <b>B7</b>                   <b>Em</b>
Traz essa mulher pra nós!

                <b>G7</b>                <b>C</b>
Ela tem os atributos que a gente gosta
               <b>B7</b>                  <b>Bm7(5-)</b>
Ela tem os apetrechos que a gente quer
            <b>G7</b>          <b>C</b>
Mas você sempre foi sangue bom
        <b>B7</b>              <b>Bm7(5-)</b>
Nunca deixa o parceiro a pé

              <b>G7</b>
Tem branca, morena
             <b>C</b>
Tem loira, mulata
               <b>B7</b>
Você  sempre  porta
           <b>Bm7(5-)</b>
Uma mina bonita
          <b>G7</b>     <b>C</b>
Além de pagar a conta
          <b>B7</b>    <b>Em</b>
Tú é de botar na fita

         <b>G7</b>          <b>C</b>
Ô, Queiroz! Ô, Queiroz!
<b>B7</b>                  <b>Bm7(5-)</b>
Traz essa mulher pra nós!
        <b>G7</b>           <b>C</b>
Ô, Queiroz! Ô, Queiroz!
 <b>B7</b>                   <b>Em7</b>
Traz essa mulher pra nós!

----------------- Acordes -----------------
Am = 2 2 1 2
B7 = 1 2 0 1
Bm = 4 4 3 4
Bm7(5-) = 3 2 0 0
C = 2 0 1 2
D7 = 4 2 1 4
Em = 5 4 5 5
Em7 = 2 0 0 0
G7 = P3 4 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OQueirozPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}