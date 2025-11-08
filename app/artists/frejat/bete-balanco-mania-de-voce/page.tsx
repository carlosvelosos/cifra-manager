import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/frejat/bete-balanco--mania-de-voce/

const cifra = `Frejat - Bete Balanço / Mania de Você

Intro: <b>D#m</b>  <b>C</b>  <b>C#</b>
<b>G#m</b>  <b>A#</b>  <b>B</b>

(<b>D#m</b>  <b>C</b> <b>C#</b> )
Pode seguir a tua estrela o teu brinquedo de "star"
(<b>G#m</b> <b>A#</b> <b>B</b>)
Fantasiando em segredo ao ponto onde quer chegar
 (<b>D#m</b>  <b>C</b> <b>C#</b> )
O teu futuro é duvidoso eu vejo grana, eu vejo dor
(<b>G#m</b> <b>A#</b> <b>B</b>)
No Paraíso perigoso que a palma da sua mão mostrou
               
<b>A#m7</b>                          <b>B</b>        <b>G#m</b>         <b>A#m7</b>
Quem vem com tudo não cansa, Bete Balanço, meu amor
<b>B</b>                <b>A#7</b>        <b>D#m</b>
Me avise quando for a hora

Solo: (<b>D#m</b>  <b>C</b>  <b>C#</b> ) 
(<b>G#m</b>  <b>A#</b>  <b>B</b>)

  <b>A#m7</b>         <b>Fm7</b>                    <b>A#m7</b>                   <b>Fm7</b>
Não ligue pra essas caras tristes, fingindo que a gente não existe
 <b>A#m7</b>              <b>Fm7</b>         <b>A#m7</b>           <b>B</b>
Sentadas são tão engraçadas, donas das suas sa...las

<b>C#m</b>  <b>F#7</b>) (2x)

     <b>C#m</b>          <b>F#7</b>           <b>C#m</b>  <b>F#7</b>
Meu bem você me dá água na boca
    <b>C#m</b>          <b>F#7</b>             <b>F#m</b>   <b>B</b>
Vestindo fantasias, tirando a rou__pa
    <b>F#m</b>       <b>B</b>              <b>E7M</b>
Molhada de suor de tanto a gente se beijar
    <b>D#7</b>                <b>G#7</b>
De tanto imaginar loucuras

   <b>C#m</b>         <b>F#7</b>            <b>C#m</b>  <b>F#7</b>
A gente faz amor por telepatia
     <b>C#m</b>               <b>F#7</b>         <b>F#m</b>  <b>B</b>
No chão, no mar, na lua, na melodi___a
   <b>F#m</b>       <b>B</b>             <b>E7M</b>
Mania de você de tanto a gente se beijar
    <b>D#7</b>                <b>G#7</b>
De tanto imaginar loucuras

 <b>C#m</b>                 <b>F#7</b>
Nada melhor do que não fazer nada
 <b>C#m</b>                <b>F#7</b>
Só pra deitar e rolar com você
 <b>C#m</b>                 <b>F#7</b>
Nada melhor do que não fazer nada
 <b>C#m</b>                <b>F#7</b>        <b>F#m</b>  <b>B</b>
Só pra deitar e rolar com você

(<b>D#m</b>  <b>C</b> <b>C#</b> )
Pode seguir a tua estrela o teu brinquedo de "star"
(<b>G#m</b> <b>A#</b> <b>B</b>)
Fantasiando em segredo ao ponto onde quer chegar
 (<b>D#m</b>  <b>C</b> <b>C#</b> )
O teu futuro é duvidoso eu vejo grana, eu vejo dor
(<b>G#m</b> <b>A#</b> <b>B</b>)
No Paraíso perigoso que a palma da sua mão mostrou
               
<b>A#m7</b>                          <b>B</b>        <b>G#m</b>         <b>A#m7</b>
Quem vem com tudo não cansa, Bete Balanço, meu amor
<b>B</b>                <b>A#7</b>        <b>D#m</b>
Me avise quando for a hora

Solo: (<b>D#m</b>  <b>C</b> <b>C#</b> ) (<b>G#m</b> <b>A#</b> <b>B</b>)( <b>A#m7</b>  <b>B</b>   <b>G#m</b>  <b>A#m7</b>  <b>B</b>  <b>A#7</b>  <b>D#m</b> )

----------------- Acordes -----------------
A# = X 1 3 3 3 1
A#7 = X 1 3 1 3 1
A#m7 = X 1 3 1 2 1
B = X 2 4 4 4 2
C = X 3 2 0 1 0
C# = X 4 6 6 6 4
C#m = X 4 6 6 5 4
D#7 = X 6 5 6 4 X
D#m = X X 1 3 4 2
E7M = X X 2 4 4 4
F#7 = 2 4 2 3 2 2
F#m = 2 4 4 2 2 2
Fm7 = 1 X 1 1 1 X
G#7 = 4 6 4 5 4 4
G#m = 4 6 6 4 4 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function BeteBalancoManiaDeVocePage() {
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
