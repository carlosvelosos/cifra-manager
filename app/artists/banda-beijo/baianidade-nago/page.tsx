import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/banda-beijo/baianidade-nago/

const cifra = `Banda Beijo - Baianidade nagô

<b>E7M</b>
Já pintou verão
<b>C#m7</b>
Calor no coração
  <b>F#m7</b>            <b>B4(7)</b> <b>B</b>
A festa vai começar
    <b>E7M</b>
Salvador se agita
     <b>C#m7</b>
Numa só alegria
   <b>F#m7</b>            <b>B4(7)</b> <b>B5+</b>
Eternos Dodô e Osmar

<b>E7M</b>
Na avenida Sete
   <b>C#m7</b>
Da paz eu sou tiete
   <b>F#m7</b>                <b>B4(7)</b> <b>B</b>
Na barra o farol a brilhar
     <b>E7M</b>
Carnaval na Bahia
  <b>C#m7</b>
Oitava maravilha
 <b>F#m7</b>             <b>B7</b>        <b>E</b>   <b>Bm7</b> <b>Bb7(5-)</b>
Nunca irei te deixar, meu amor

    <b>A7M</b>
Eu vou
   <b>B/A</b>                 <b>G#m7</b>
Atrás do trio elétrico vou
   <b>G#m7(5-)</b>        <b>C#7</b>        <b>F#m7</b>
Dançar ao negro toque do agogô
   <b>F#m7(5-)</b>          <b>B</b>       <b>E7M</b>     <b>Bm7</b> <b>Bb7(5-)</b>
Curtindo minha baianidade nagô ô ô ô ô

      <b>A7M</b>
Eu queria
      <b>B/A</b>                  <b>G#m7</b>
Que essa fantasia fosse eterna
      <b>G#m7(5-)</b>
Quem sabe um dia
  <b>C#7</b>              <b>F#m7</b>
A paz vence a guerra
     <b>F#m7(5-)</b>  <b>B7</b>      <b>E7M</b>      <b>A/B</b>
E viver será só festejar, eô, eô

----------------- Acordes -----------------
A/B = X 2 2 2 2 X
A7M = X 0 2 1 2 0
B = X 2 4 4 4 2
B/A = X 0 4 4 4 X
B4(7) = X 2 2 2 0 X
B5+ = X 2 1 0 0 X
B7 = X 2 1 2 0 2
Bb7(5-) = X 1 2 1 3 X
Bm7 = X 2 4 2 3 2
C#7 = X 4 3 4 2 X
C#m7 = X 4 6 4 5 4
E = 0 2 2 1 0 0
E7M = X X 2 4 4 4
F#m7 = 2 X 2 2 2 X
F#m7(5-) = 2 X 2 2 1 X
G#m7 = 4 X 4 4 4 X
G#m7(5-) = 4 X 4 4 3 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function BaianidadeNagoPage() {
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
