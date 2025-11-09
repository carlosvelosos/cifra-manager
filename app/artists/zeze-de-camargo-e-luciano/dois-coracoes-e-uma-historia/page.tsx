import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

// URL: https://www.cifraclub.com.br/zeze-di-camargo-e-luciano/dois-coracoes-e-uma-historia/

const cifra = `Zezé Di Camargo & Luciano - Dois Corações e Uma História

[Intro]

<span class="tablatura">Parte 1 de 5
             <b>D</b>          <b>E</b>
<span class="cnt">E|-------5-4-2------------------------------|
B|---------------3------5-------5-----------|
G|---4/6---4---2------------4-------4-------|
D|-----------0------4/6---6---6---6---6-----|
A|-0----------------------------------------|
E|----------------------0-------------------|</span></span>

<span class="tablatura">Parte 2 de 5
               <b>D</b>       <b>E</b>
<span class="cnt">E|----9--9-7-7-5-----4-4h5p4------4---------|
B|---10-10-9-9-7---7-5-5------5-------5-----|
G|---------------7----------4---4---4---4---|
D|-------------0----------------------------|
A|-0----------------------------------------|
E|---------------------0--------------------|</span></span>

<span class="tablatura">Parte 3 de 5
             <b>D</b>          <b>E</b>
<span class="cnt">E|-------5-4-2------------------------------|
B|---------------3------5-------5-----------|
G|---4/6---4---2------------4-------4-------|
D|-----------0------4/6---6---6---6---6-----|
A|-0----------------------------------------|
E|----------------------0-------------------|</span></span>

<span class="tablatura">Parte 4 de 5
               <b>D</b>       <b>E</b>
<span class="cnt">E|----9--9-7-7-5-----4-4h5p4--5---7---10----|
B|---10-10-9-9-7---7-5-5------7---9---12----|
G|---------------7----------4---------------|
D|-------------0----------------------------|
A|-0----------------------------------------|
E|---------------------0--------0---0----0--|</span></span>

Parte 5 de 5

<span class="tablatura"><span class="cnt">E|--9------9--------------------------------|
B|-10---10--------3--2----------------------|
G|----9-------------------------------------|
D|------------2/4---------------------------|
A|--0----------------0----------------------|
E|------------------------------------------|</span></span>

<span class="tablatura">[Dedilhado Primeira Parte - Primeira Estrofe]

   <b>Bm</b>      <b>E</b>       <b>A</b>       <b>A7M</b>    <b>A6</b>     <b>F#m</b>
<span class="cnt">E|-------2-------0------------------------2-|
B|-------3-------0-------5------5------5--2-|
G|-----4-------1-------6------6------6----2-|
D|---4-------2-------7------6------4------4-|
A|-2---------------0------0------0--------4-|
E|---------0------------------------------2-|</span></span>

<span class="tablatura">   <b>Bm</b>      <b>E</b>       <b>A</b>       <b>A7M</b>    <b>A</b>   <b>Bm7</b> <b>A/C#</b>
<span class="cnt">E|-------2-------0--------------------------|
B|-------3-------0-------5------5-2---3---5-|
G|-----4-------1-------6------6---2---2---2-|
D|---4-------2-------7------6-----2---0---2-|
A|-2---------------0------0-------0---2---4-|
E|---------0--------------------------------|</span></span>

[Primeira Parte]

               <b>Bm</b>
No meio da conversa
                 <b>E</b>
De um caso terminando
                     <b>A</b>   <b>A7M</b>
Um fala e o outro escuta 
            <b>A6</b>         <b>F#m</b>
E os olhos vão chorando
       <b>Bm</b>
A lógica de tudo 
         <b>E</b>
É o desamor que chega
           <b>A</b>           <b>A7M</b>
Depois que um descobre 
             <b>A</b>         <b>Bm7</b>  <b>A/C#</b>
Que o outro não se entrega

[Primeira Parte – Segunda Estrofe]

          <b>Bm</b>
Quem vai sair arruma 
    <b>E</b>
As coisas põe na mala
    <b>A</b>               <b>A7M</b>
Enquanto o outro fuma 
    <b>A6</b>             <b>F#m</b>
Um cigarro na sala
     <b>Bm</b>
E o coração palhaço 
   <b>E</b>
Começa a bater forte
           <b>D</b>       <b>D/E</b>
Quem fica não deseja 
             <b>A</b>
Que o outro tenha sorte

[Refrão]

              <b>D</b>
E longe um do outro
                 <b>E</b>
A vida é toda errada
                  <b>A</b>
O homem não se importa 
                   <b>F#</b>
Com a roupa amarrotada
                <b>Bm</b>
E a mulher em crise 
                <b>E</b>
Quantas vezes chora
                 <b>D</b>               <b>E</b>
A dor de ter perdido um grande amor 
     <b>A</b>         <b>F</b>  <b>Bb</b>
Que foi embora

[Segunda parte]

                  <b>Cm</b>
Mas quando vem a volta
              <b>F</b>
O homem se arruma
                   <b>Bb</b>   <b>Bb7M</b>
Faz barba, lava o carro 
                 <b>Bb6</b>  <b>Gm</b>
Se banha, se perfuma
             <b>Cm</b>
E liga pro amigo 
                   <b>F</b>
Que tanto lhe deu força
              <b>Bb</b>  <b>Bb7M</b>
E jura nunca mais 
           <b>Bb6</b>       <b>Bb/D</b>
Vai perder essa moça

                 <b>Cm</b>
E a mulher se abraça 
           <b>F</b>
À mãe, diz obrigado
              <b>Bb</b>   <b>Bb7M</b>
E põe aquela roupa 
                   <b>Bb6</b>  <b>Gm</b>
Que agrada o seu amado
                 <b>Cm</b>
E passa a tarde toda 
             <b>F</b>
Cuidando da beleza
                 <b>Eb</b>
Jantar à luz de velas 
    <b>F</b>           <b>Bb</b>
E amor de sobremesa

[Refrão]

              <b>Eb</b>
E perto um do outro 
              <b>F</b>
A vida é diferente
             <b>Bb</b>
A solidão dá espaço 
                      <b>G</b>
Ao amor que estava ausente
                   <b>Cm</b>
Quem olha não tem jeito 
             <b>F</b>
De duvidar agora
                <b>Eb</b>
Da força da paixão que tem
<b>F</b>                   <b>Bb</b>
  Dois corações e uma história

              <b>Eb</b>
E perto um do outro 
              <b>F</b>
A vida é diferente
             <b>Bb</b>
A solidão dá espaço 
                      <b>G</b>
Ao amor que estava ausente
                   <b>Cm</b>
Quem olha não tem jeito 
             <b>F</b>
De duvidar agora
                <b>Eb</b>
Da força da paixão que tem
<b>F</b>                         <b>Bb</b>   <b>Gm</b>
  Dois corações e uma história
                <b>Cm</b>
Da força da paixão que tem
<b>F</b>                   <b>Bb</b>         <b>Eb</b>  <b>F</b>
  Dois corações e uma história

[Final] <b>Bb</b>  <b>Eb</b>  <b>F</b>  <b>Bb</b>

----------------- Acordes -----------------
A = X 0 7 6 5 0
A/C# = X 4 P2 2 5 2
A6 = X 0 4 6 5 X
A7M = X 0 6 6 5 X
Bb = 6 8 8 7 6 6
Bb/D = X 5 X 3 6 6
Bb6 = 6 X 5 7 6 X
Bb7M = 6 X 7 7 6 X
Bm = X 2 4 4 3 2
Bm7 = X 2 0 2 3 X
Cm = X 3 5 5 4 3
D = X X 0 2 3 2
D/E = 0 X 4 P2 3 2
E = 0 2 2 1 0 0
Eb = X 6 5 3 4 3
F = 1 3 3 2 1 1
F# = 2 4 4 3 2 2
F#m = 2 4 4 2 2 2
G = 3 2 0 0 3 3
Gm = 3 5 5 3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DoisCoracoesEUmaHistoriaPage() {
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
