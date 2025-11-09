import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `

[Primeira Parte]

<b>Am</b>                               <b>D7</b>
   Quando eu te vi pela primeira vez
<b>Am</b>                                   <b>D7</b>
   Me encantei com o seu jeitinho de ser
<b>G</b>                         <b>D</b>
  Seu olhar tão lindo me fez viajar
<b>G</b>                              <b>F</b>  <b>E7</b>
  Vi no seu sorriso um imenso mar

<b>Am</b>                              <b>D7</b>
   Fiz uma canção pra nunca esquecer
<b>Am</b>                             <b>D7</b>
   O momento em que eu conheci você
<b>G</b>                    <b>D</b>
  Era uma linda noite  de verão
<b>G</b>                          <b>F</b>  <b>E7</b>
  Você despertou minha emoção

[Segunda Parte]

<b>A</b>                             <b>E</b>
  Passei a minha vida a procurar
                 <b>C#7</b>        <b>F#m</b>
Alguém que eu pudesse entregar
                           <b>D</b>
A chave pra abrir meu coração
                 <b>E7</b>          <b>A</b>
Tirar de vez do peito a solidão
                           <b>E</b>
Já tentei não dá pra esconder
            <b>C#7</b>         <b>F#m</b>
O amor que sinto por você
                              <b>D</b>
É luz, desejo, encanto e sedução
                <b>E7</b>
Ardente como a fúria de um vulcão

[Refrão]

<b>A</b>       <b>A7</b>       <b>D</b>
  A paixão me pegou
            <b>E7</b>            <b>A</b>
Tentei escapar não consegui
               <b>A7</b>      <b>D</b>
Nas grades do meu coração
        <b>E7</b>            <b>A</b>
Sem querer eu te prendi

      <b>A7</b>       <b>D</b>
A paixão me pegou
            <b>E7</b>            <b>A</b>
Tentei escapar não consegui
               <b>A7</b>      <b>D</b>
Nas grades do meu coração
        <b>E7</b>
Sem querer eu te prendi

[Primeira Parte]

<b>Am</b>                          <b>D7</b>
   Quando eu te vi pela primeira vez
<b>Am</b>                              <b>D7</b>
   Me encantei com o seu jeitinho de ser
<b>G</b>                         <b>D</b>
  Seu olhar tão lindo me fez viajar
<b>G</b>                              <b>F</b>  <b>E7</b>
  Vi no seu sorriso um imenso mar

<b>Am</b>                     <b>D7</b>
   Fiz uma canção pra nunca esquecer
<b>Am</b>                        <b>D7</b>
   O momento que eu conheci você
<b>G</b>                    <b>D</b>
  Era uma linda noite  de verão
<b>G</b>                          <b>F</b>  <b>E7</b>
  Você despertou minha emoção

[Segunda Parte]

<b>A</b>                             <b>E</b>
  Passei a minha vida a procurar
                 <b>C#7</b>        <b>F#m</b>
Alguém que eu pudesse entregar
                           <b>D</b>
A chave pra abrir meu coração
                 <b>E7</b>          <b>A</b>
Tirar de vez do peito a solidão
                           <b>E</b>
Já tentei não dá pra esconder
            <b>C#7</b>         <b>F#m</b>
O amor que sinto por você
                              <b>D</b>
É luz, desejo, encanto e sedução
                <b>E7</b>
Ardente como a fúria de um vulcão

[Refrão]

<b>A</b>       <b>A7</b>       <b>D</b>
  A paixão me pegou
            <b>E7</b>            <b>A</b>
Tentei escapar não consegui
               <b>A7</b>      <b>D</b>
Nas grades do meu coração
        <b>E7</b>            <b>A</b>
Sem querer eu te prendi

      <b>A7</b>       <b>D</b>
A paixão me pegou
            <b>E7</b>            <b>A</b>
Tentei escapar não consegui
               <b>A7</b>      <b>D</b>
Nas grades do meu coração
        <b>E7</b>
Sem querer eu te prendi

      <b>A7</b>       <b>D</b>
A paixão me pegou
            <b>E7</b>            <b>A</b>
Tentei escapar não consegui
               <b>A7</b>      <b>D</b>
Nas grades do meu coração
        <b>E7</b>            <b>A</b>
Sem querer eu te prendi

      <b>A7</b>       <b>D</b>
A paixão me pegou
            <b>E7</b>            <b>A</b>
Tentei escapar não consegui
               <b>A7</b>      <b>D</b>
Nas grades do meu coração
        <b>E7</b>
Sem querer eu te prendi

----------------- Acordes -----------------
A = P2 2 2 2
A7 = 2 0 2 2
Am = 2 2 1 2
C#7 = 3 4 2 3
D = 4 2 3 4
D7 = 4 2 1 4
E = 2 1 0 2
E7 = 2 1 0 0
F = 3 2 1 3
F#m = 4 2 2 4
G = 5 4 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function GradesDoCoracaoPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}