import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `

[Intro] <b>G</b>  <b>G7</b>  <b>C</b>  
        <b>Cm6</b>  <b>G</b>  <b>G7</b>
        <b>C</b>  <b>Cm6</b>  <b>G</b>  <b>D7</b>

           <b>G</b>                         <b>A7</b>
Nós fomos feitos um pro outro de encomenda
                 <b>Cm</b>            <b>D7</b>       <b>G</b>     <b>D7</b>
Como a chave e a fenda, como a luva e a mão
          <b>G</b>                      <b>A7</b>
O nosso amor é kamasutra, é juventude
                     <b>Cm</b>            <b>D7</b>         <b>G4(7)</b>   <b>G7</b>
É demais, parece um grude, corpo e alma e coração

       <b>C</b>
Sinceramente amor
         <b>D/C</b>                         <b>Bm</b>
Eu tenho que me beliscar de vez em quando
          <b>E7</b>                    <b>Am</b>      <b>Bm</b>
Pra ver se é verdade ou estou sonhando
      <b>C</b>                     <b>D7</b>
Se a gente assim sempre se quis
     <b>Dm</b>                     <b>G7</b>
Quem pode então ser mais feliz

  <b>C</b>                 <b>D/C</b>                       <b>Bm</b>
Eu me confesso, literalmente em suas mãos apaixonado
       <b>E7</b>                        <b>Am</b>   <b>Bm</b>
Noutro planeta eu já fui seu namorado
        <b>C</b>              <b>D7</b>       <b>G4(7)</b>       <b>G7</b>
Esta paixão entre nós dois: é coisa lá de Deus

   <b>C</b>                 <b>D/C</b>                           <b>Bm</b>
Cuida de mim, porque você é o mais real dos sonhos meus
     <b>E7</b>                           <b>Am</b>   <b>Bm</b>
No temporal você é o meu farol de milha
     <b>C</b>                   <b>D7</b>             <b>G4(7)</b>   <b>G7</b>
Meu sol não brilha sem a luz dos olhos teus

   <b>C</b>                 <b>D/C</b>                           <b>Bm</b>
Cuida de mim, porque você é o mais real dos sonhos meus
      <b>E7</b>                          <b>Am</b>   <b>Bm</b>
No temporal você é o meu farol de milha
          <b>C</b>              <b>D7</b>              <b>G</b>   <b>G4(7)</b>  <b>G7</b>
Meu sol não brilha sem a luz dos olhos teus

----------------- Acordes -----------------
A7 = 2 0 2 2
Am = 2 2 1 2
Bm = 4 4 3 4
C = 2 0 1 2
Cm = 1 0 1 1
Cm6 = P2 2 4 5
D7 = 4 2 1 4
Dm = 3 2 3 3
E7 = 2 1 0 0
G = 5 4 3 5
G4(7) = 0 0 1 3
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
