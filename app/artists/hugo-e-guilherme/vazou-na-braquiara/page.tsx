import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Hugo e Guilherme - Vazou Na Braquiara

[Intro] C  Am  Dm  G

[Primeira Parte]

C
  Existem dois tipos

De pessoas numa ficada
Am
   A que eu te amo junto
                     F
E a que eu te amo separa

A vida do solteiro
           C               G
É uma loteria nessas madrugadas

[Pré-Refrão]

F
  A gente nunca sabe
                         G
Quem tá apostando o coração

A gente, por exemplo
                      Am
Achei que era além de um colchão
                            G
Mas você não pensava assim não, não

[Refrão]

     C
Me amava dentro de uma banheira
                  Am
Num quarto de estrada
                              Dm
Saudade batia, nosso tesão topava

Mas foi só eu colocar
                 G
Sentimento na parada

Que ela vazou na braquiara

     C
Me amava dentro de uma banheira
                  Am
Num quarto de estrada
                              Dm
Saudade batia, nosso tesão topava

Mas foi só eu colocar
                 G
Sentimento na parada

Que ela vazou na braquiara
         Fm
A tara dela era só fazer
                   C
Eu fui falar que amava

( Am  Dm  G )

[Pré-Refrão]

F
  A gente nunca sabe
                         G
Quem tá apostando o coração

A gente, por exemplo
                      Am
Achei que era além de um colchão
                            G
Mas você não pensava assim não, não

[Refrão]

     C
Me amava dentro de uma banheira
                  Am
Num quarto de estrada
                              Dm
Saudade batia, nosso tesão topava

Mas foi só eu colocar
                 G
Sentimento na parada

Que ela vazou na braquiara

     C
Me amava dentro de uma banheira
                  Am
Num quarto de estrada
                              Dm
Saudade batia, nosso tesão topava

Mas foi só eu colocar
                 G
Sentimento na parada

Que ela vazou na braquiara

     C
Me amava dentro de uma banheira
                  Am
Num quarto de estrada
                              Dm
Saudade batia, nosso tesão topava

Mas foi só eu colocar
                 G
Sentimento na parada

Que ela vazou na braquiara


----------------- Acordes -----------------
Capotraste na 1ª casa
A#m*  = X 0 2 2 1 0 - (*Bm na forma de A#m)
C#*  = X 3 2 0 1 0 - (*D na forma de C#)
D#m*  = X X 0 2 3 1 - (*Em na forma de D#m)
F#*  = 1 3 3 2 1 1 - (*G na forma de F#)
F#m*  = 1 3 3 1 1 1 - (*Gm na forma de F#m)
G#*  = 3 2 0 0 0 3 - (*A na forma de G#)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VazouNaBraquiaraPage() {
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
