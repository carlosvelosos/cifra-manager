import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/falamansa/rindo-toa/

const cifra = `Falamansa - Rindo À Toa

[Intro] <b>G</b>  <b>D7</b>  <b>Em</b>  <b>C</b> 
        <b>D7</b>  <b>G</b>  <b>D7</b>
        <b>G</b>  <b>D7</b>  <b>Em</b>  <b>C</b> 
        <b>D7</b>  <b>G</b>  <b>D7</b>

[Primeira Parte]

<b>G</b>          <b>D7</b>               <b>Em</b>
  Tô numa boa, tô aqui de novo
                              <b>C</b>
Daqui não saio, daqui não me movo
          <b>D7</b>                   <b>G</b>
Tenho certeza, esse é o meu lugar
   <b>D7</b>
Ah ah

<b>G</b>          <b>D7</b>                <b>Em</b>
  Tô numa boa, tô ficando esperto
                                <b>C</b>
Já não pergunto se isso tudo é certo
          <b>D7</b>              <b>G</b>
Uso esse tempo pra recomeçar
   <b>D7</b>
Ah ah

[Pré-Refrão]

<b>C</b>         <b>G</b>          <b>D7</b>
  Doeu, doeu, agora não dói
                   <b>Db7</b>
  Não dói, não doi
<b>C</b>             <b>G</b>         <b>D7</b>            <b>Db7</b>
  Chorei, chorei agora não choro mais
      <b>C</b>
Toda mágoa que passei
     <b>G</b>                 <b>G#</b>
É motivo pra comemorar
 <b>A7</b>
Pois se não sofresse assim
             <b>D7</b>
Não tinha razões pra cantar

[Refrão]

 <b>G</b>           <b>D7</b>
Há há há há há
                   <b>Em</b>
Mas eu tô rindo à toa
                                 <b>D7</b>
Não que a vida esteja assim tão boa
           <b>C</b>            <b>D7</b>   <b>G</b>
Mas um sorriso ajuda a melhorar
   <b>D7</b>
Ah ah

<b>G</b>                   <b>D7</b>               <b>Em</b>
E cantando assim parece que o tempo voa
                                <b>D7</b>
Quanto mais triste mais bonito soa
        <b>C</b>          <b>D7</b>     <b>G</b>
Eu agradeço por poder cantar
     <b>D7</b>           <b>G</b>
Lalaia laia laia iô!

( <b>G</b>  <b>D7</b>  <b>Em</b>  <b>C</b>  <b>D7</b>  <b>G</b>  <b>D7</b> )

[Primeira Parte]

<b>G</b>          <b>D7</b>               <b>Em</b>
  Tô numa boa, tô aqui de novo
                              <b>C</b>
Daqui não saio, daqui não me movo
          <b>D7</b>                   <b>G</b>
Tenho certeza, esse é o meu lugar
   <b>D7</b>
Ah ah

<b>G</b>          <b>D7</b>                <b>Em</b>
  Tô numa boa, tô ficando esperto
                                <b>C</b>
Já não pergunto se isso tudo é certo
          <b>D7</b>              <b>G</b>
Uso esse tempo pra recomeçar
   <b>D7</b>
Ah ah

[Pré-Refrão]

<b>C</b>         <b>G</b>          <b>D7</b>
  Doeu, doeu, agora não dói
                   <b>Db7</b>
  Não dói, não doi
<b>C</b>             <b>G</b>         <b>D7</b>            <b>Db7</b>
  Chorei, chorei agora não choro mais
      <b>C</b>
Toda mágoa que passei
     <b>G</b>                 <b>G#</b>
É motivo pra comemorar
 <b>A7</b>
Pois se não sofresse assim
             <b>D7</b>
Não tinha razões pra cantar

[Refrão]

 <b>G</b>           <b>D7</b>
Há há há há há
                   <b>Em</b>
Mas eu tô rindo à toa
                                 <b>D7</b>
Não que a vida esteja assim tão boa
           <b>C</b>            <b>D7</b>   <b>G</b>
Mas um sorriso ajuda a melhorar
   <b>D7</b>
Ah ah

<b>G</b>                   <b>D7</b>               <b>Em</b>
E cantando assim parece que o tempo voa
                                <b>D7</b>
Quanto mais triste mais bonito soa
        <b>C</b>          <b>D7</b>     <b>G</b>
Eu agradeço por poder cantar
     <b>D7</b>           <b>G</b>
Lalaia laia laia ia!

[Final] <b>G</b>  <b>D7</b>  <b>Em</b>  <b>C</b> 
        <b>D7</b>  <b>G</b>  <b>D7</b>
        <b>G</b>  <b>D7</b>  <b>Em</b>  <b>C</b>  
        <b>D7</b>  <b>G</b>  <b>D7</b>

----------------- Acordes -----------------
A7 = X 0 2 0 2 0
C = X 3 2 0 1 0
D7 = X X 0 2 1 2
Db7 = X 4 3 4 2 X
Em = 0 2 2 0 0 0
G = 3 2 0 0 0 3
G# = 4 3 1 1 1 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function RindoAToaPage() {
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
