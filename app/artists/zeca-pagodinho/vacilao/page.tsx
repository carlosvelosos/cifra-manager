import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `

[Intro] <b>F</b>  <b>Fm</b>  <b>Bb7</b>  <b>C</b>  <b>A7</b>
        <b>D7</b>  <b>Dm</b>  <b>G7</b>  <b>C</b>  <b>G7(13)</b>  <b>G</b>

<b>C</b>
Aquilo que era mulher
<b>F</b>                  <b>G7</b>              <b>C</b>
Pra não te acordar cedo, saia da cama na ponta do pé
<b>F</b>               <b>G7</b>              <b>C</b>
Só te chamava tarde sabia teu gosto, na bandeja café
<b>F</b>                 <b>F7</b>             <b>Bb</b>               <b>G7(4)</b>   <b>G7</b>
Chocolate, biscoito, salada de fruta             suco de mamão
      <b>C</b>
No almoço era filé mignon
 <b>F</b>             <b>G7</b>           <b>C</b>
Com arroz a lá grega, batata corada um vinho do bom
<b>F</b>              <b>G7</b>               <b>C</b>
No jantar era a mesma fartura do almoço

E ainda tinha opção

<b>F</b>                   <b>G7</b>          <b>C</b>      <b>Am</b>
É mais deu mole ela dispensou você
<b>Bm7(5-)</b>      <b>E</b>         <b>Am</b>
Chegou em casa outra vez doidão
<b>Bm7(5-)</b>      <b>E7</b>      <b>A7</b>
Brigou com a preta sem razão
<b>Dm</b>                  <b>G7</b>        <b>C</b>     <b>Gm</b>   <b>C7</b>
Quis comer arroz doce com quiabo
  <b>F</b>             <b>G7</b>        <b>C</b>    <b>C7</b>
Botou sal na batida de limão
                  <b>F</b>                                  <b>Fm</b>
Deu lavagem ao macaco, banana pro porco, osso pro gato
                                <b>C</b>
Sardinha ao cachorro, cachaça pro pato
                                   <b>A7</b>
Entrou no chuveiro de terno e sapato, não queria papo
      <b>D7</b>
Foi lá no porão, pegou três-oitão
       <b>Dm</b>                      <b>G7</b>
Deu tiro na mão do próprio irmão
               <b>C</b>             <b>Gm</b>          <b>C7</b>
Que quis lhe segurar, eu consegui lhe desarmar
                    <b>F</b>                                <b>Fm</b>
Foi pra rua de novo, entrou no velório pulando a janela
                            <b>C</b>
Xingou o defunto, apagou a vela
                             <b>A7</b>
Cantou a viúva mulher de favela, deu um beijo nela
          <b>D7</b>
O bicho pegou a polícia chegou
         <b>Dm</b>          <b>G7</b>
Um coro levou em cana entrou
             <b>C</b>
E ela não te quer mais
<b>G7(5+)</b>
Bem feito

----------------- Acordes -----------------
A7 = 2 0 2 2
Am = 2 2 1 2
Bb = P3 3 3 3
Bb7 = 3 1 3 3
Bm7(5-) = 3 2 0 0
C = 2 0 1 2
C7 = 2 3 1 2
D7 = 4 2 1 4
Dm = 3 2 3 3
E = 2 1 0 2
E7 = 2 1 0 0
F = 3 2 1 3
F7 = 3 2 P1 1
Fm = 3 1 1 3
G = 5 4 3 5
G7 = P3 4 3 5
G7(13) = 3 7 5 5
G7(4) = 0 0 1 3
G7(5+) = 3 0 0 1
Gm = 5 3 3 5`;

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
