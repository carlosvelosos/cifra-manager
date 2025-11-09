import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/jorge-mateus/o-que-e-que-tem/

const cifra = `Jorge & Mateus - O Que É Que Tem?

[Intro] <b>C</b>  <b>D</b>  <b>G</b>

[Primeira Parte]

    <b>G</b>               <b>D</b>
E pra deixar acontecer
                  <b>Am</b>
A pena tem que valer
         <b>C</b>       <b>D</b>
Tem que ser com você

 <b>Am</b>              <b>G</b>
Nós livres pra voar
                <b>D</b>                <b>Am</b>
E esse céu que hoje tá tão lindo
                 <b>C</b>
Carregado de estrelas
             <b>D</b>                     <b>Am</b>
E a Lua tá cheia refletindo o seu rosto
                   <b>C</b>
Dá um gosto de pensar
              <b>G</b>               <b>D</b>          <b>C</b>  <b>D</b>
Eu, você e o céu e a noite inteira pra amar

[Refrão]

                   <b>G</b>                  <b>D</b>
E quando o Sol chegar a gente ama de novo
                  <b>Am</b>
A gente liga pro povo
                 <b>G</b>             <b>D</b>          <b>G</b>
Fala que ta namorando, e casa semana que vem
                <b>D</b>              <b>Am</b>
Deixa o povo falar, que é que tem?

          <b>C</b>            <b>D</b>       <b>Am</b>
Eu quero ser lembrado com você
         <b>C</b>           <b>D</b>         <b>Am</b>
Isso não é problema de ninguém
          <b>C</b>            <b>D</b>       <b>Am</b>
Eu quero ser lembrado com você
         <b>C</b>           <b>D</b>
Isso não é problema de ninguém

[Primeira Parte]

    <b>G</b>               <b>D</b>
E pra deixar acontecer
                  <b>Am</b>
A pena tem que valer
         <b>C</b>       <b>D</b>
Tem que ser com você

 <b>Am</b>              <b>G</b>
Nós livres pra voar
                <b>D</b>                <b>Am</b>
E esse céu que hoje tá tão lindo
                 <b>C</b>
Carregado de estrelas
             <b>D</b>                     <b>Am</b>
E a Lua tá cheia refletindo o seu rosto
                   <b>C</b>
Dá um gosto de pensar
              <b>G</b>               <b>D</b>          <b>C</b>  <b>D</b>
Eu, você e o céu e a noite inteira pra amar

[Refrão]

                   <b>G</b>                  <b>D</b>
E quando o Sol chegar a gente ama de novo
                  <b>Am</b>
A gente liga pro povo
                 <b>G</b>             <b>D</b>          <b>G</b>
Fala que ta namorando, e casa semana que vem
                <b>D</b>              <b>Am</b>
Deixa o povo falar, que é que tem?

          <b>C</b>            <b>D</b>       <b>Am</b>
Eu quero ser lembrado com você
         <b>C</b>           <b>D</b>         <b>Am</b>
Isso não é problema de ninguém
          <b>C</b>            <b>D</b>       <b>Am</b>
Eu quero ser lembrado com você
         <b>C</b>           <b>D</b>         <b>Am</b>
Isso não é problema de ninguém

                   <b>G</b>                  <b>D</b>
E quando o Sol chegar a gente ama de novo
                  <b>Am</b>
A gente liga pro povo
                 <b>G</b>             <b>D</b>          <b>G</b>
Fala que ta namorando, e casa semana que vem
                <b>D</b>              <b>Am</b>
Deixa o povo falar, que é que tem?

          <b>C</b>            <b>D</b>       <b>Am</b>
Eu quero ser lembrado com você
         <b>C</b>           <b>D</b>         <b>Am</b>
Isso não é problema de ninguém
          <b>C</b>            <b>D</b>       <b>Am</b>
Eu quero ser lembrado com você
         <b>C</b>           <b>D</b>
Isso não é problema de ninguém

----------------- Acordes -----------------
Am = 2 2 1 2
C = 2 0 1 2
D = 4 2 3 4
G = 5 4 3 5`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OQueEQueTemPage() {
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
