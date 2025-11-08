import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/pixote/o-amor-nao-tem-culpa/

const cifra = `Grupo Pixote - O Amor Não Tem Culpa

Introdução: <b>Eb7+</b> <b>Dm7</b> <b>Cm7</b> <b>Bb7+</b> <b>Eb7+</b> <b>Dm7</b> <b>Cm7</b> <b>F7/9</b>
 <b>Bb7+</b>                             
Se um dia eu te encontrar de repente
                <b>Gm7</b>
Não fique sem graça
                   <b>Eb7+</b>   <b>Dm7</b>
Da um beijo e me abraça
          <b>Cm7</b>     <b>F7/9</b>
Pra vida ficar melhor
<b>Bb7+</b>
Se houve um problema entre a gente
                  <b>Gm7</b>
Deixa lá que isso passa
                       <b>Eb7+</b>   <b>Dm7</b>
Dá um beijo e me abraça
         <b>Cm7</b>            <b>F7/9</b>
Que o resto eu sei de cor
<b>Gm7</b>
Assim é melhor não brigar 
                  <b>Dm7</b>
Nem esquentar a cabeça
      <b>Cm7</b>                   <b>F7/9</b>
Que o tempo se encarrega logo 
                   <b>Bb7+</b>  <b>F/A</b>
De resolver a questão
  <b>Gm7</b>
Por isso anota ai na agenda
                     <b>Dm7</b>
E por favor não se esqueça
   <b>Cm7</b>              <b>F7/9</b>
Prefiro um carinho seu
                   <b>Eb7+</b>
Do que amor sem paixão
                        <b>Dm7</b>
Assim a gente não fica triste
 <b>G7</b>             <b>Eb7+</b>
E nem se machuca
                         <b>Dm7</b>
Assim a gente não fica triste
      <b>G7</b>  <b>Cm7</b> <b>Dm7</b>  <b>Eb7+</b>
E o amor não tem culpa
                        <b>Dm7</b>
Assim a gente não fica triste
 <b>G7</b>             <b>Eb7+</b>
E nem se machuca
                        <b>Dm7</b>
Assim a gente não fica triste
     <b>G7</b>   <b>Cm7</b>  <b>Dm7</b>     <b>Eb7+</b> %  <b>Dm7</b>  %  <b>Cm7</b>  <b>F7/9</b> (45 43)
E o amor não tem  ....culpa...

----------------- Acordes -----------------
Bb7+ = 3 2 3 3
Cm7 = 5 3 4 5
Dm7 = 0 2 1 3
Eb7+ = 1 3 3 5
F7/9 = 3 2 4 5
G7 = P3 4 3 5
Gm7 = 5 P3 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OAmorNaoTemCulpaPage() {
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
