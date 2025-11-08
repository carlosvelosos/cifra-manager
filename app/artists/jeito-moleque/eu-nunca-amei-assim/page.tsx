import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/jeito-moleque/eu-nunca-amei-assim/

const cifra = `Jeito Moleque - Eu Nunca Amei Assim

[Intro] <b>Cm7</b>  <b>Dm7</b>  <b>Eb7M</b>  <b>Eb7M</b>
        <b>Cm7</b>  <b>Dm7</b>  <b>Eb7M</b>  <b>Eb7M</b>  <b>F7(9/11)</b>

<b>Gm7</b>        <b>Gm7M</b>           <b>D/F#</b>
    Melhor a gente se entender
                       <b>Eb7M</b>
E o que tiver que acontecer
       <b>Dm7</b>             <b>Cm7</b>   <b>F7(9/11)</b>   <b>D7(9-)</b>
Que dessa vez seja, pra sempre
<b>Gm7</b>           <b>Gm7M</b>              <b>D/F#</b>
       Pra que brincar de se esconder
                      <b>Eb7M</b>
Se o amor tocou eu e você
            <b>Dm7</b>          <b>Cm7</b>    <b>F7(9/11)</b>
De um jeito assim tão diferente
<b>Eb7M</b>                         <b>Dm7</b>   <b>Gm7</b> <b>Bb7(13)</b>
      Porque você não fica comigo
<b>Eb7M</b>                         <b>Dm7</b>    <b>D7</b>
      E deixa o meu amor te levar
<b>Eb7M</b>                        <b>Dm7</b>   <b>Gm7</b> <b>Bb7(13)</b>
      Solidão a dois é um castigo
<b>Eb7M</b>                       <b>F7(9/11)</b>
      Sem essa de querer complicar

<b>Eb7M</b>              <b>F/Eb</b>
Nosso amor é tão lindo
        <b>Dm7</b>            <b>Gm7</b>  <b>Gm7/F</b>
E eu só penso em você, nossa paixão
    <b>Eb7M</b>             <b>F/Eb</b>
Mas o que eu tô sentindo
          <b>Dm7</b>              <b>Gm7</b> <b>Gm7/F</b>
Você finge que não vê, a solidão!
   <b>Eb7M</b>           <b>F/Eb</b>
Nosso amor é tão lindo
   <b>Dm7</b>           <b>Gm7</b>
E você longe de mim
           <b>Cm7</b>  <b>Dm7</b>      <b>Eb7M</b>   <b>Eb7M</b>
Eu nunca  amei as       sim
          <b>Cm7</b>  <b>Dm7</b>      <b>Eb7M</b>   <b>Eb7M</b>   <b>F7(9/11)</b>
Eu nunca amei  as       sim

<b>Gm7</b>               <b>Gm7M</b>      <b>D/F#</b>
        Vem cá, me deixa te tocar
                    <b>Eb7M</b>
Dormir a luz do seu olhar
   <b>Dm7</b>              <b>Cm7</b>   <b>F7(9/11)</b>  <b>D7(9-)</b>
E te falar meus sentimentos
<b>Gm7</b>            <b>Gm7M</b>          <b>D/F#</b>
          Deixa o ciúme pra depois
                         <b>Eb7M</b>
O amor tem planos pra nós dois
       <b>Dm7</b>            <b>Cm7</b>   <b>F7(9/11)</b>
Você mudou meus pensamentos

<b>Eb7M</b>                          <b>Dm7</b>   <b>Gm7</b> <b>Bb7(13)</b>
      Porque você não fica comigo
<b>Eb7M</b>                          <b>Dm7</b>    <b>D7</b>
      E deixa o meu amor te levar
<b>Eb7M</b>                          <b>Dm7</b>   <b>Gm7</b> <b>Bb7(13)</b>
      Solidão a dois e um castigo
<b>Eb7M</b>                       <b>F7(9/11)</b>
      Sem essa de querer complicar

<b>Eb7M</b>              <b>F/Eb</b>
Nosso amor é tão lindo
        <b>Dm7</b>            <b>Gm7</b>  <b>Gm7/F</b>
E eu só penso em você, nossa paixão
    <b>Eb7M</b>             <b>F/Eb</b>
Mas o que eu tô sentindo
          <b>Dm7</b>              <b>Gm7</b> <b>Gm7/F</b>
Você finge que não vê, a solidão!
   <b>Eb7M</b>           <b>F/Eb</b>
Nosso amor é tão lindo
   <b>Dm7</b>           <b>Gm7</b>
E você longe de mim
           <b>Cm7</b>  <b>Dm7</b>      <b>Eb7M</b>   <b>Eb7M</b>
Eu nunca  amei as       sim
          <b>Cm7</b>  <b>Dm7</b>      <b>Eb7M</b>   <b>Eb7M</b>  <b>Gm7</b>
Eu nunca amei  as       sim

----------------- Acordes -----------------
Bb7(13) = 6 X 6 7 8 X
Cm7 = X 3 5 3 4 3
D/F# = 2 X 0 2 3 2
D7 = X X 0 2 1 2
D7(9-) = X 5 4 5 4 X
Dm7 = X 5 7 5 6 5
Eb7M = X X 1 3 3 3
F/Eb = X X 1 2 1 1
F7(9/11) = X X 3 3 4 3
Gm7 = 3 X 3 3 3 X
Gm7/F = X X 3 3 6 3
Gm7M = 3 5 4 3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EuNuncaAmeiAssimPage() {
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
