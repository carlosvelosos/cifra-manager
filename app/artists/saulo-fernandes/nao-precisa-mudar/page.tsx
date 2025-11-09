import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/saulo-fernandes/nao-precisa-mudar/

const cifra = `Saulo Fernandes - Não Precisa Mudar

<b>E7M</b>        <b>A9</b>
Não precisa mudar
          <b>E7M</b>            <b>A9</b>
Vou me adaptar ao seu jeito
              <b>C#m7</b>     <b>F#7</b>
Seus costumes, seus defeitos
                   <b>B7(9)</b>          <b>B7(9-)</b>
Seus ciúmes, suas caras, pra que mudá-las?

        <b>E7M</b>          <b>A9</b>
Não precisa mudar
            <b>E7M</b>           <b>A9</b>
Vou saber fazer o seu jogo
               <b>C#m7(9)</b>   <b>F#7(13)</b>
Deixar tudo do seu gosto
                    <b>B7(9)</b>             <b>B7(9-)</b>
Sem guardar nenhuma mágoa, sem cobrar nada

<b>A7M</b>               <b>Ab7(5+)</b>         <b>C#m7(9)</b>   <b>F#7(13)</b>
 Se eu sei que no final fica tudo be....em
            <b>F#m7</b>              <b>Abm7</b>
A gente se ajeita numa cama pequena
         <b>A7M</b>                  <b>A/B</b>
Te faço poema, te cubro de amor

<b>A7M</b>             <b>E/G#</b>
Então você adormece
     <b>F#m7</b>        <b>E/G#</b>
Meu coração enobrece
    <b>A7M</b>          <b>G#7(13-)</b>
E a gente sempre esquece
              <b>C#7(9)</b>    <b>C#7(9/11)</b>
De tudo que passo......ou
<b>A7M</b>           <b>E/G#</b>
Então você adormece
     <b>F#m7</b>        <b>E/G#</b>
Meu coração enobrece
    <b>A7M</b>           <b>E/G#</b>
E a gente sempre esquece
              <b>C#7(9)</b>   <b>C#7(9/11)</b>
De tudo que passo......u
              <b>F#m7</b>  <b>B7(9)</b>
De tudo que passou

----------------- Acordes -----------------
A/B = X 2 2 2 2 X
A7M = X 0 2 1 2 0
A9 = X 0 2 2 0 0
Ab7(5+) = 4 X 4 5 5 4
Abm7 = 4 X 4 4 4 X
B7(9) = X 2 1 2 2 X
B7(9-) = X 2 1 2 1 X
C#7(9) = X 4 3 4 4 X
C#7(9/11) = X 4 4 4 4 4
C#m7 = X 4 6 4 5 4
C#m7(9) = X 4 2 4 4 X
E/G# = 4 X 2 4 5 X
E7M = X X 2 4 4 4
F#7 = 2 4 2 3 2 2
F#7(13) = 2 X 2 3 4 X
F#m7 = 2 X 2 2 2 X
G#7(13-) = 4 X 4 5 5 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function NaoPrecisaMudarPage() {
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
