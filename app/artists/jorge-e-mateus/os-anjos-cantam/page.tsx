import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Jorge & Mateus - Os Anjos Cantam

[Intro]

[Primeira Parte]

 C#m
No primeiro instante 
       E
Vi que era amor
 B
No momento em que 
         F#
A gente se encontrou
 C#m
No segundo instante
       E
Vi que era você
    B
Eu já te amo tanto 
        F#
Sem te conhecer

[Segunda Parte]

C#m
    É que nos meu sonhos você era linda
E
  Pessoalmente é mais linda ainda
B
  Nosso amor veio de outras vidas
    F#
Eu vou te amar 

Nas outras vidas que virão

C#m
    É que você nasceu pra ser minha
E
  Vamos dividir uma casinha
B
  Uma cama, dormir de conchinha
 F#
Deus abençoou a nossa união

[Refrão]

                          C#m
E os anjos cantam nosso amor
       E        B     F#
Oh uoh   oh uoh   oh uoh
                          C#m
E os anjos cantam nosso amor
       E        B     F#
Oh uoh   oh uoh   oh uoh

( C#m  E  B  F# )

[Primeira Parte]

 C#m
No primeiro instante 
       E
Vi que era amor
 B
No momento em que 
         F#
A gente se encontrou
 C#m
No segundo instante
       E
Vi que era você
    B
Eu já te amo tanto 
        F#
Sem te conhecer

[Segunda Parte]

C#m
    É que nos meu sonhos você era linda
E
  Pessoalmente é mais linda ainda
B
  Nosso amor veio de outras vidas
    F#
Eu vou te amar 

Nas outras vidas que virão

C#m
    É que você nasceu pra ser minha
E
  Vamos dividir uma casinha
B
  Uma cama, dormir de conchinha
 F#
Deus abençoou a nossa união

[Refrão]

                          C#m
E os anjos cantam nosso amor
       E        B     F#
Oh uoh   oh uoh   oh uoh
                          C#m
E os anjos cantam nosso amor
       E        B     F#
Oh uoh   oh uoh   oh uoh

                          C#m
E os anjos cantam nosso amor
       E        B     F#
Oh uoh   oh uoh   oh uoh
                          C#m
E os anjos cantam nosso amor
       E        B     F#
Oh uoh   oh uoh   oh uoh

                          G#m
E os anjos cantam nosso amor

----------------- Acordes -----------------
B = P4 4 4 4
C#m = 2 1 2 2
E = 2 1 0 2
F# = 4 3 2 4
G#m = 6 4 4 6
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OsAnjosCantamPage() {
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
