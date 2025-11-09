import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";
// URL: https://www.cifraclub.com.br/os-travessos/to-te-filmando-sorria/

const cifra = `Os Travessos - Tô Te Filmando (Sorria)

[Intro] <b>D7M</b>  <b>Bm7</b>  <b>G7M</b>  <b>G/A</b>

<b>D7M</b>                       <b>F#m7</b>  <b>Bm7</b>
    Toda vez que eu vejo você
                      <b>G/A</b>  <b>F/G</b>  <b>G/A</b>  <b>Eb7M</b>
Sinto uma coisa diferente

<b>D7M</b>                           <b>F#m7</b>  <b>G7M</b>
    Toda vez que eu penso em você
                              <b>G/A</b>   <b>A#°</b>
Te vejo nos meus sonhos tão carente

<b>Bm7</b>                              <b>F#m7</b>
    Por que você não cola do meu lado
                              <b>G7M</b>
Esquece os grilos todos do passado
       <b>Em</b>       <b>Em/D</b>         <b>C</b>  <b>G/A</b>  <b>B7</b>
Vem comigo e tenta ser feliz

<b>Em7</b>                          <b>F#m7</b>
    Pare de dizer: tá tudo errado
                          <b>G7M</b>
Deixe eu logo ser teu namorado
             <b>G/A</b>          <b>D7M</b>  <b>D7</b>
O resto o destino é quem diz

<b>G7M</b>                            <b>F#m7</b>
    Sorria que eu estou te filmando
              <b>B7</b>       <b>Em7</b>
Sorria, o coração tá gravando
             <b>G/A</b>           <b>D7M</b>
O seu nome aqui dentro de mim
  <b>Em7</b>  <b>F#m7</b>  <b>G7M</b>
Ô ôooooooôoooô
                            <b>F#m7</b>
Sorria que o prazer já vem vindo
                <b>B7</b>       <b>Em7</b>
Sorria, nosso amor tá tão lindo
              <b>G/A</b>                <b>D7M</b>  <b>Em7</b>  <b>F#m7</b>
Não quero ver você tão triste assim

----------------- Acordes -----------------
A#° = X 1 2 0 2 0
B7 = X 2 1 2 0 2
Bm7 = X 2 4 2 3 2
C = X 3 2 0 1 0
D7 = X X 0 2 1 2
D7M = X X 0 2 2 2
Eb7M = X X 1 3 3 3
Em = 0 2 2 0 0 0
Em/D = X X 0 4 5 3
Em7 = 0 2 2 0 3 0
F#m7 = 2 X 2 2 2 X
F/G = 3 X 3 2 1 X
G/A = 5 X 5 4 3 X
G7M = 3 X 4 4 3 X`;


const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ToTeFilmandoSorriaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/os-travessos/to-te-filmando-sorria/"
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
