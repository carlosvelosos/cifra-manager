import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

// URL: https://www.cifraclub.com.br/marilia-mendonca/amante-nao-tem-lar/

const cifra = `Marília Mendonça - Amante Não Tem Lar

[Intro] <b>C9</b>  <b>G</b>

<span class="tablatura">[Solo]
<span class="cnt">E|----------------------------------------------------|
B|----------------------------------------------------|
G|-5-5-5-5-7-7/9--7-9-7-9-7-9-7-9-10-9-7-7\4----------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|</span></span>

[Primeira Parte]

Parte 1 de 2

<span class="tablatura">   <b>Am7</b>      <b>F9</b>       <b>C</b>       <b>G/B</b>
<span class="cnt">E|----------------3-------------------------|
B|-------1------1----------1--------3-------|
G|-----0------0----------0--------0---------|
D|---2------3----------2--------0-----------|
A|-0-----------------3--------2-------------|
E|------------------------------------------|</span></span>

Parte 2 de 2

<span class="tablatura">   <b>Am7</b>      <b>F9</b>       <b>C</b>        <b>G</b>
<span class="cnt">E|----------------3-----------3-------------|
B|-------1------1----------1--3-------------|
G|-----0------0----------0----0-------------|
D|---2------3----------2------0-------------|
A|-0-----------------3--------2-------------|
E|----------------------------3-------------|</span></span>

                 <b>Am7</b>
Só vim me desculpar
                <b>F9</b>
Eu não vou demorar
                         <b>C</b>
Não vou tentar ser sua amiga
                  <b>G/B</b>
Pois sei que não dá

               <b>Am7</b>
Você vai me odiar
                  <b>F9</b>
Mas eu vim te contar

Que faz um tempo
         <b>C</b>                 <b>G</b>
Eu me meti no meio do seu lar

[Pré-Refrão]

                     <b>Dm</b>
Sua família é tão bonita
          <b>F</b>
Eu nunca tive isso na vida
            <b>C9</b>
E se eu continuar assim
            <b>G</b>
Eu sei que não vou ter

            <b>Dm</b>
Ele te ama de verdade
        <b>F</b>
E a culpa foi minha
          <b>C9</b>                     <b>G</b>
Minha responsabilidade eu vou resolver
     <b>Dm</b>                 <b>F</b>
Não quero atrapalhar você

[Refrão]

                  <b>C9</b>
E o preço que eu pago
                             <b>G</b>
É nunca ser amada de verdade

Ninguém me respeita nessa cidade
  <b>Dm</b>
Amante não tem lar
  <b>F</b>
Amante nunca vai casar

                  <b>C9</b>
E o preço que eu pago
                             <b>G</b>
É nunca ser amada de verdade

Ninguém me respeita nessa cidade
  <b>Dm</b>
Amante não vai ser fiel
  <b>F</b>
Amante não usa aliança e véu

[Base Solo] <b>C9</b>  <b>G</b>  <b>Dm</b>  <b>F</b>

[Solo]

<span class="tablatura">Parte 1
<span class="cnt">E|----------------------------------------------------|
B|----------------------------------------------------|
G|-5-5-5-5-7-7/9--7-9-7-9-7-9-7-9-10-9-7--------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|</span></span>

<span class="tablatura">Parte 2
<span class="cnt">E|----------------------------------------------------|
B|----------------------------------------------------|
G|-7-9-7-9-7-9-7-9-10-9-7--10-9-----------------------|
D|------------------------------7-10-10---------------|
A|----------------------------------------------------|
E|----------------------------------------------------|</span></span>

<span class="tablatura">Parte 3
<span class="cnt">E|----------------------------------------------------|
B|----------------------------------------------------|
G|---9/10-9-------------------------------------------|
D|-7--------7-10-10-----------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|</span></span>

[Pré-Refrão]

                     <b>Dm</b>
Sua família é tão bonita
          <b>F</b>
Eu nunca tive isso na vida
            <b>C9</b>
E se eu continuar assim
            <b>G</b>
Eu sei que não vou ter

            <b>Dm</b>
Ele te ama de verdade
        <b>F</b>
E a culpa foi minha
          <b>C9</b>                     <b>G</b>
Minha responsabilidade eu vou resolver
     <b>Dm</b>                 <b>F</b>
Não quero atrapalhar você

[Refrão]

                  <b>C9</b>
E o preço que eu pago
                             <b>G</b>
É nunca ser amada de verdade

Ninguém me respeita nessa cidade
  <b>Dm</b>
Amante não tem lar
  <b>F</b>
Amante nunca vai casar

                  <b>C9</b>
E o preço que eu pago
                             <b>G</b>
É nunca ser amada de verdade

Ninguém me respeita nessa cidade
  <b>Dm</b>
Amante não vai ser fiel
  <b>F</b>
Amante não usa aliança

                  <b>C9</b>
E o preço que eu pago
                             <b>G</b>
É nunca ser amada de verdade

Ninguém me respeita nessa cidade
  <b>Dm</b>
Amante não tem lar
  <b>F</b>
Amante nunca vai casar

                  <b>C9</b>
E o preço que eu pago
                             <b>G</b>
É nunca ser amada de verdade

Ninguém me respeita nessa cidade
  <b>Dm</b>
Amante não vai ser fiel
  <b>F</b>                       <b>C</b>
Amante não usa aliança e véu

----------------- Acordes -----------------
F#m7 = 4 P2 2 2
A = P2 2 2 2
A9 = P2 4 2 2
Bm = 4 4 3 4
D = 4 2 3 4
D9 = 0 2 3 2
E = 2 1 0 2`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AmanteNaoTemLarPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
