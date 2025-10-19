import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Alceu Valença - Flor de Tangerina

[Intro] F#m7  B7  C#m7  D#m7(5-)  G#7  C#m7
        F#m7  B7  C#m7  D#m7(5-)
        G#7  C#m7  G#7  C#m7

[Tab - Intro]

E|-19h20h21----------19-21-------------------------------------|
B|----------21-22--19-----22-21--21-22-21-19h21p19-------------|
G|-------------------------------------------------21-20-18-17-|
D|-------------------------------------------------------------|
A|-------------------------------------------------------------|
E|-------------------------------------------------------------|

E|-----------------7h8h9--------7-9----------------------------|
B|-22-21-19-22-21--------9-10--7---10-9--9-10-9-7h9p7----------|
G|---------------------------------------------------9-8-------|
D|------------------------------------------------------11-10--|
A|-------------------------------------------------------------|
E|-------------------------------------------------------------|

E|-------------------------------------------------------------|
B|-------------------------------------------------------------|
G|-11-9-8--6---6-----------------------------------------------|
D|-----------6-------------------------------------------------|
A|-------------------------------------------------------------|
E|-------------------------------------------------------------|

[Primeira Parte]

                        F#m7
Hoje eu sonhei que ela voltava
  G#7                         C#m7
       E vinha muito mais que linda
                F#m7
À meia luz me acordava
   G#7                        C#m7
       Cheirando a flor de tangerina

[Refrão]

C#7                      F#m7
   Eu lhe amava e mergulhava
B7                         E7M
   No seu olhar de onça menina
A7M                   D7M
   E docemente me afogava
G#7                     C#m7
   Em suas águas cristalinas
C#7                      F#m7
   Eu lhe amava e mergulhava
B7                         E7M
   No seu olhar de onça menina
A7M                    D7M
   E docemente me afogava
G#7                     C#m7
   Em suas águas cristalinas
G#7
   Em suas águas

[Segunda Parte]

                          F#m7
Depois sonhei que ela voltava
   G#7                         C#m7
       E dessa vez bem mais que linda
                  F#m7
À meia luz me afagava
   G#7                    C#m7
       E sua pele era tão fina

[Refrão]

C#7                           F#m7
   Quando acordei meu bem chegava
B7                  E7M
   Seria onça ou menina
A7M                      D7M
   Chegar assim de madrugada
G#7                          C#m7
   Cheirando a flor de tangerina
G#7
   Cheirando a flor

( F#m7  B7  C#m7  D#m7(5-)  G#7  C#m7 )
( F#m7  B7  C#m7  D#m7(5-)  G#7 )

[Segunda Parte]

                          F#m7
Depois sonhei que ela voltava
   G#7                         C#m7
       E dessa vez bem mais que linda
                  F#m7
À meia luz me afagava
  G#7                    C#m7
       E sua pele era tão fina

[Refrão]

C#7                           F#m7
   Quando acordei meu bem chegava
B7                  E7M
   Seria onça ou menina
A7M                      D7M
   Chegar assim de madrugada
G#7                          C#m7
   Cheirando a flor de tangerina

C#7                           F#m7
   Quando acordei meu bem chegava
B7                  E7M
   Seria onça ou menina
A7M                      D7M
   Chegar assim de madrugada
G#7                          C#m7
   Cheirando a flor de tangerina
G#7
   Cheirando a flor

[Final] F#m7  B7  C#m7  D#m7(5-)  G#7  C#m7
        F#m7  B7  C#m7  D#m7(5-)  G#7  C#m7

----------------- Acordes -----------------
A7M = X 0 2 1 2 0
B7 = X 2 1 2 0 2
C#7 = X 4 3 4 2 X
C#m7 = X 4 6 4 5 4
D#m7(5-) = X X 1 2 2 2
D7M = X X 0 2 2 2
E7M = X X 2 4 4 4
F#m7 = 2 X 2 2 2 X
G#7 = 4 6 4 5 4 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FlorDeTangerinaPage() {
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
