import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/exaltasamba-musicas/40o-de-amor/

const cifra = `Exaltasamba - 40 Graus de Amor

[Intro] | <b>C9</b> | <b>G#7M</b> |<b>Eb7M</b>  <b>G#7M</b> | <b>F/G</b>

 <b>Fm9</b>   <b>Bb7(13)</b>  <b>Fm7</b>     <b>Bb7</b>   <b>C9</b>
   Meu co.....ração é o teu lugar
    <b>G/B</b>  <b>Am7</b>    <b>F/G</b>     <b>C9</b>
Meu coração quer te abrigar
          <b>Am7(11)</b>  <b>G#7M</b>  <b>F/G</b>  <b>C9</b>
Eu te amo tanto  preciso de você
          <b>C/E</b>  <b>F7M</b>    <b>Bb7(13)</b>   <b>Dm7</b>
Eu te amo tanto   Meu mundo é você
   <b>Em7</b>   <b>Fm7</b>   <b>Bb7(13)</b>
Lá fora  não  existe
<b>Bb7</b>  <b>G#7M</b>               <b>Bb/Ab</b> <b>F/G</b>
A....mor  sincero como o meu amor
    <b>C9</b> <b>C/E</b>                  <b>Fm7</b>     <b>Bb7(13)</b>
Eu sei     tão puro e cheio de emoção
<b>Bb7</b>  <b>G#7M</b>                 <b>Bb/Ab</b>
Eu   sei  nós dois somos iguais
              <b>Dm7</b> <b>Dm7/A</b>                <b>F/G</b> <b>G7(9)</b>
Os nossos ideais      paixão ternura e paz
       <b>C9</b>               <b>G/B</b>          <b>Em7(5-)A7</b>
É só você entrar aqui é seu lugar te a......mo
        <b>Dm7</b>               <b>Bb7M</b>            <b>G#7M</b> <b>G7(9)</b>
Meu coração está com fogo pra te amar queiman...do
       <b>C9</b>        <b>G/B</b>               <b>Em7(5-)</b>      <b>A7</b>
É só você chegar quero  te abraçar deita no meu peito
          <b>Dm7</b>                <b>Bb7M</b>             <b>G#7M</b>  <b>G7(9)</b>
E sente o meu calor quarenta graus de amor perfei...to
                       <b>Fm7(9)</b>
| G#7M D/F# F/G Bb7 |      Meu cora

Final
<b>G#7M</b> <b>G#°</b> <b>F/G</b> <b>D/F#</b> <b>G#7M</b>  <b>C#7M</b> <b>G#7M</b>   <b>F/G</b>  <b>C9</b>  <b>C9(13)</b>
                    Meu coração é o seu lugar

----------------- Acordes -----------------
A7(+5) = X 0 X 0 2 1
Am7 = X 0 2 0 1 0
Am7/11 = 5 X 5 5 3 X
Bb/G# = 4 X 3 3 3 X
Bb7 = X 1 3 1 3 1
Bb7(13) = 6 X 6 7 8 X
Bb7+ = X 1 3 2 3 1
C#7+ = X 4 6 5 6 4
C9 = X 3 5 5 3 3
C9/13 = X 3 2 2 3 3
C9/E = X X 2 5 3 0
D/F# = 2 X 0 2 3 2
Dm7 = X 5 7 5 6 5
Dm7/A = X 0 0 2 1 1
Dm7/G = 3 X 0 2 1 1
Em7 = 0 2 2 0 3 0
Em7/5- = X X 2 3 3 3
F/G = 3 X 3 2 1 X
F7+ = 1 X 2 2 1 X
Fm7 = 1 X 1 1 1 X
Fm9 = 1 3 5 1 1 1
G#7+ = 4 X 5 5 4 X
G#° = 4 X 3 4 3 X
G/B = X 2 0 0 3 3`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function Song0GrausDeAmorPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/exaltasamba-musicas/40o-de-amor/"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
        // Fallback to old format if needed
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
