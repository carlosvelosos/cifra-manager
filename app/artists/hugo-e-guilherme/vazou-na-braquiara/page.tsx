import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/hugo-guilherme/vazou-na-braquiara/

const cifra = `Hugo e Guilherme - Vazou Na Braquiara

[Intro] <b>C</b>  <b>Am</b>  <b>Dm</b>  <b>G</b>

[Primeira Parte]

<b>C</b>                     
  Existem dois tipos

De pessoas numa ficada
<b>Am</b>
   A que eu te amo junto
                     <b>F</b>
E a que eu te amo separa

A vida do solteiro
           <b>C</b>               <b>G</b>
É uma loteria nessas madrugadas

[Pré-Refrão]

<b>F</b>                           
  A gente nunca sabe
                         <b>G</b>
Quem tá apostando o coração

A gente, por exemplo
                      <b>Am</b>
Achei que era além de um colchão
                            <b>G</b>
Mas você não pensava assim não, não

[Refrão]

     <b>C</b>
Me amava dentro de uma banheira
                  <b>Am</b>
Num quarto de estrada
                              <b>Dm</b>
Saudade batia, nosso tesão topava

Mas foi só eu colocar
                 <b>G</b>
Sentimento na parada

Que ela vazou na braquiara

     <b>C</b>
Me amava dentro de uma banheira
                  <b>Am</b>
Num quarto de estrada
                              <b>Dm</b>
Saudade batia, nosso tesão topava

Mas foi só eu colocar
                 <b>G</b>
Sentimento na parada

Que ela vazou na braquiara
         <b>Fm</b>
A tara dela era só fazer
                   <b>C</b>
Eu fui falar que amava

( <b>Am</b>  <b>Dm</b>  <b>G</b> )

[Pré-Refrão]

<b>F</b>                        
  A gente nunca sabe
                         <b>G</b>
Quem tá apostando o coração

A gente, por exemplo
                      <b>Am</b>
Achei que era além de um colchão
                            <b>G</b>
Mas você não pensava assim não, não

[Refrão]

     <b>C</b>
Me amava dentro de uma banheira
                  <b>Am</b>
Num quarto de estrada
                              <b>Dm</b>
Saudade batia, nosso tesão topava

Mas foi só eu colocar
                 <b>G</b>
Sentimento na parada

Que ela vazou na braquiara

     <b>C</b>
Me amava dentro de uma banheira
                  <b>Am</b>
Num quarto de estrada
                              <b>Dm</b>
Saudade batia, nosso tesão topava

Mas foi só eu colocar
                 <b>G</b>
Sentimento na parada

Que ela vazou na braquiara

     <b>C</b>
Me amava dentro de uma banheira
                  <b>Am</b>
Num quarto de estrada
                              <b>Dm</b>
Saudade batia, nosso tesão topava

Mas foi só eu colocar
                 <b>G</b>
Sentimento na parada

Que ela vazou na braquiara

----------------- Acordes -----------------
Capotraste na 1ª casa
A#m*  = X 0 2 2 1 0 - (*Bm na forma de A#m)
C#*  = X 3 2 0 1 0 - (*D na forma de C#)
D#m*  = X X 0 2 3 1 - (*Em na forma de D#m)
F#*  = 1 3 3 2 1 1 - (*G na forma de F#)
F#m*  = 1 3 3 1 1 1 - (*Gm na forma de F#m)
G#*  = 3 2 0 0 0 3 - (*A na forma de G#)`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VazouNaBraquiaraPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/hugo-guilherme/vazou-na-braquiara/"
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
