import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `

<b>A7</b>
Toda hora
      <b>Dm</b>           <b>A7</b>            <b>Dm</b>    <b>D7</b>
Toda hora alguém me chama pra beber
     <b>Gm</b>              <b>D/A</b>         <b>Bb6</b>
Toda hora alguém me chama pra zoar
    <b>C7</b>                          <b>F</b>  <b>Dm</b>
Porque ninguém me chama pra benzer
      <b>Bb</b>           <b>Bb/G#</b>           <b>A7</b>
Porque ninguém me chama pra rezar

<b>Dm</b>              <b>A7</b>           <b>Dm</b>      <b>D7</b>
Só vou pra batizado quando é samba
           <b>Gm</b>    <b>D/A</b>      <b>Bb6</b>
Compadre meu precisa batucar
<b>C7</b>                           <b>F</b>    <b>Dm</b>
Eu sou da saideira que descamba
<b>Bb</b>              <b>Bb/G#</b>          <b>A7</b>
Aqui não tem hora pra acabar

[Refrão]

   <b>Dm</b>           <b>A7</b>          <b>Dm</b>
Amigo eu nunca fiz bebendo leite
  <b>C</b>           <b>C7</b>            <b>F</b>   <b>D7</b>
Amigo eu não criei bebendo chá
 <b>Gm</b>         <b>G#º</b>             <b>Dm</b>    <b>F7</b>
Eu sou da madrugada, me respeite
    <b>Bb6</b>        <b>A7</b>         <b>Dm</b>   <b>A7</b>
Eu sei a hora de ir trabalhar

           <b>Dm</b>        <b>A7</b>             <b>Dm</b>    <b>D7</b>
Não sou sujeito de ficar enchendo a cara
          <b>Gm</b>       <b>D/A</b>            <b>Bb6</b>
Quem escâncara não vê o mundo girar
           <b>C7</b>                  <b>F</b>   <b>Dm</b>
Pra ficar bom, é melhor tomar remédio
     <b>Bb</b>             <b>Bb/G#</b>           <b>A7</b>
O meu tédio é quando vem fechar o bar

            <b>Dm</b>    <b>A7</b>           <b>Dm</b>    <b>D7</b>
Também não vou ficar levando bronca
          <b>Gm</b>           <b>D/A</b>            <b>Bb6</b>
Feche a conta, hoje eu preciso pendurar
        <b>C7</b>                      <b>F</b>   <b>Dm</b>
Já calibrei, já tirei a minha onda
<b>Bb</b>            <b>Bb/G#</b>           <b>A7</b>
Ainda tenho casa pra cuidar

----------------- Acordes -----------------
A7 = 2 0 2 2
Bb = P3 3 3 3
Bb6 = P3 3 3 5
C = 2 0 1 2
C7 = 2 3 1 2
D7 = 4 2 1 4
Dm = 3 2 3 3
F = 3 2 1 3
F7 = 3 2 P1 1
G#º = 6 4 P3 3
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
