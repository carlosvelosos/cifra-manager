import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/lauana-prado/saudade-burra-part-simone-mendes/

const cifra = `Lauana Prado - Saudade Burra (part. Simone Mendes)

(Essa aqui é mais bruta que os cara mula, ouviu?)

(Vem!)

[Intro] <b>Dm</b>  <b>C</b>  <b>G</b>  <b>Bb</b>

<b>Dm</b>            <b>C</b>               <b>G</b>
   Você terminou e eu só aceitei
          <b>Bb</b>                      <b>Dm</b>
Por opção sua, hoje eu sou sua ex
              <b>C</b>              <b>G</b>
Quase enlouqueci, eu desidratei
              <b>Bb</b>
O choro de um ano eu derramei num mês

    <b>Dm</b>                 <b>C</b>               <b>G</b>
Mas choro seca e aquieta minha saudade burra
  <b>Dm</b>                    <b>C</b>
A gente perde o encanto e vê que
        <b>G</b>
Boca melhor que a sua tem um montão na rua

        <b>Dm</b>          <b>C</b>
Ai, ai, ai, ai, ai, ai
               <b>G</b>                             <b>Bb</b>
Se imaginar as camas que eu caí, cê cai pra trás
        <b>Dm</b>          <b>C</b>
Ai, ai, ai, ai, ai, ai
               <b>G</b>                            <b>Bb</b>
Seu erro foi achar que ninguém faz o que cê faz
             <b>Dm</b>
Faz, e muito mais
             <b>C</b>
Faz, e muito mais
<b>G</b>                           <b>Bb</b>
  Que ninguém faz o que cê faz

( <b>Dm</b>  <b>C</b>  <b>G</b>  <b>Bb</b> )

(Senhoras e senhores, recebam: Simone Mendes!) (Lauana Prado!)

(Canta comigo, migla)

    <b>Dm</b>                 <b>C</b>               <b>G</b>
Mas choro seca e aquieta minha saudade burra
   <b>Dm</b>                    <b>C</b>
A gente perde o encanto e vê que
         <b>G</b>
Boca melhor que a sua tem um montão na rua

        <b>Dm</b>          <b>C</b>
Ai, ai, ai, ai, ai, ai
               <b>G</b>                             <b>Bb</b>
Se imaginar as camas que eu caí, cê cai pra trás
        <b>Dm</b>          <b>C</b>
Ai, ai, ai, ai, ai, ai
               <b>G</b>                            <b>Bb</b>
Seu erro foi achar que ninguém faz o que cê faz
             <b>Dm</b>
Faz, e muito mais
             <b>C</b>
Faz, e muito mais
<b>G</b>                           <b>Bb</b>
  Que ninguém faz o que cê faz

        <b>Dm</b>          <b>C</b>
Ai, ai, ai, ai, ai, ai
               <b>G</b>                             <b>Bb</b>
Se imaginar as camas que eu caí, cê cai pra trás
        <b>Dm</b>          <b>C</b>
Ai, ai, ai, ai, ai, ai
               <b>G</b>                            <b>Bb</b>
Seu erro foi achar que ninguém faz o que cê faz
             <b>Dm</b>
Faz, e muito mais
             <b>C</b>
Faz, e muito mais
<b>G</b>                           <b>Bb</b>
  Que ninguém faz o que cê faz
            <b>Dm</b>
Faz, e muito mais

(Lauana Prado e Simone Mendes, senhoras e senhores) (coisa linda!)

----------------- Acordes -----------------
Bb = X 1 3 3 3 1
C = X 3 2 0 1 0
Dm = X X 0 2 3 1
G = 3 2 0 0 0 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SaudadeBurraPartSimoneMendesPage() {
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
