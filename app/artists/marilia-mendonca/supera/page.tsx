import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

// URL: https://www.cifraclub.com.br/marilia-mendonca/supera/

const cifra = `Marília Mendonça - Supera

[Intro] <b>E9</b>

<span class="tablatura"><span class="cnt">E|-x-x--0------0--0--x--0--0--0----------0------------------|
B|-x-x--0------0--0--x--0--0--0----------0------------------|
G|-x-x--11/13--13-13-x--11-11-11--11/13--13-----------------|
D|-x-x--x------x--x--x--x--x--x---x-x----x------------------|
A|-x-x--9/11---11-11-x--9--9--9---9/13---11-----------------|
E|-x-x--0------0--0--x--0--0--0---0------0------------------|</span></span>

[Primeira Parte] 

       <b>E9</b>
Tá de novo com essa pessoa
              <b>B9</b>
Não tô acreditando
                                 <b>C#m7</b>
Vai fazer papel de trouxa outra vez
                <b>A9</b>
Cê não aprende mesmo, hein

[Pré-Refrão]

       <b>B9</b>
Pra você isso é amor
                      <b>F#m7(11)</b>
Mas pra ele isso não passa de um plano B
                         <b>C#m7</b>
Se não pegar ninguém da lista, liga pra você
               <b>B9</b>
Te usa e joga fora

[Refrão]

 <b>E9</b>
Para de insistir, chega de se iludir
    <b>B4</b>
O que cê tá passando, eu já passei e eu sobrevivi
<b>C#m7</b>
     Se ele não te quer, supera
<b>A9</b>
   Se ele não te quer, supera

<b>E</b>
Ele tá fazendo de tapete o seu coração
  <b>B4</b>
Promete pra mim que dessa vez você vai falar não
<b>C#m7</b>
     De mulher pra mulher, supera
<b>A9</b>
   De mulher pra mulher, supera

( <b>E</b>  <b>B4</b>  <b>C#m7</b>  <b>A9</b> )

[Pré-Refrão]

       <b>B9</b>
Pra você isso é amor
                      <b>F#m7(11)</b>
Mas pra ele isso não passa de um plano B
                         <b>C#m7</b>
Se não pegar ninguém da lista, liga pra você
               <b>B9</b>
Te usa e joga fora

[Refrão]

 <b>E</b>
Para de insistir, chega de se iludir
    <b>B9</b>
O que cê tá passando, eu já passei e eu sobrevivi
<b>C#m7</b>
    Se ele não te quer, supera
<b>A9</b>
  Se ele não te quer, supera

<b>E</b>
Ele tá fazendo de tapete o seu coração
  <b>B9</b>
Promete pra mim que dessa vez você vai falar não
<b>C#m7</b>
    De mulher pra mulher, supera
<b>A9</b>
  De mulher pra mulher, supera

( <b>E</b>  <b>B9</b> )

<b>C#m7</b>               
     Se ele não te quer
<b>A9</b>                            <b>E</b>
   De mulher pra mulher, supera

----------------- Acordes -----------------
A9 = P2 4 2 2
B4 = P2 4 4 4
B9 = P4 6 4 4
C#m7 = 6 4 5 6
E = 2 1 0 2
E9 = 2 1 0 4
F#m7(11) = 11 11 12 14`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SuperaPage() {
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
