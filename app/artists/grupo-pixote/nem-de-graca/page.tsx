import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/pixote/nem-de-graca/

const cifra = `Grupo Pixote - Nem de Graça

[Intro] <b>Eb9</b>  <b>F11</b>  <b>Gm11</b>  <b>Bb/D</b>

       <b>Eb9</b>                            <b>F/A</b>
É que não sobrou espaço pra outro alguém
                                <b>Gm11</b>                 <b>F</b>
Minha Saudade só cabe no teu abraço, no de mais ninguém
 <b>Eb9</b>                           <b>F/A</b>
Tenho dó de quem me conhecer agora
                             <b>Dm7</b>
Que todo amor eu tô jogando fora
                                      <b>Gm7</b>
E qualquer um que bate aqui nesse meu coração
     <b>Bb/D</b>  <b>Gm7</b>  <b>F</b>  <b>Eb9</b>  <b>F11</b>  <b>Gm11</b>  <b>F11</b>
Não passa nem... dá......por.........ta

 <b>F</b>       <b>Fm7</b>          <b>Bb7(4/9)</b>  <b>Eb9</b>
Se essa boca não beijasse tão  bem
                              <b>F</b>
Se esse abraço não fosse tão massa
                                   <b>Dm7</b>
Se quer saber se eu quero outro alguém
                       <b>Gm7</b>  <b>Gm7/F</b>
Nem de graça, nem de graça

          <b>C7(9)</b>
Leva mal não
    <b>Eb9</b>             <b>Ebm6</b>
Só tem espaço pra você no coração

[Solo] <b>Eb9</b>  <b>F11</b>  <b>Gm11</b>
       <b>F11</b>  <b>Gm11</b>  <b>G4</b>

----------------- Acordes -----------------
C7(9) = 2 3 3 5
Dm7 = 0 2 1 3
Eb9 = 1 3 4 3
Ebm6 = 1 3 1 4
F = 3 2 1 3
F11 = 3 3 1 3
Fm7 = 3 5 4 6
G4 = 0 0 1 0
Gm7 = 5 P3 3 3
Gm7/F = 5 7 6 8`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function NemDeGracaPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/pixote/nem-de-graca/"
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
