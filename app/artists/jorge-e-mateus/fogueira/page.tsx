import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Jorge & Mateus - Fogueira

[Intro] D  A/C#  Bm  F#m  G  D
        D  A/C#  Bm  F#m  G  D
        D  A/C#

[Primeira Parte]

 Bm              
Não para de chover
F#m               G           D       A
E eu preciso do sol pra lembrar seu calor
 Bm           
Se eu te magoei
F#m                  G        D     A
Desculpa estou aprendendo o que é amor

[Segunda Parte]

 F#7               Bm
Nas noites mais escuras
                 G               D  F#7
Nos bares, nas ruas, tudo é solidão
                    Bm
Não me deixe sozinho
            G               A
Falta de carinho rima com nova paixão

[Refrão]

 D               A
Eu quero o seu amor
                    G               D  D4  D
Eu quero ser seu homem, se você quiser
                  A
Se eu tiver seu amor
             G                  D  D4  D
Juro não preciso amar outra mulher
          G      A                    D
Não deixe apagar,  a fogueira do meu coração

[Solo] D  A/C#  Bm  F#m  G  D
       D  A/C#  Bm  F#m  G  D
       D  A/C#

[Primeira Parte]

 Bm               F#m
Não para de chover
                 G           D       A
E eu preciso do sol pra lembrar seu calor
 Bm             F#m
Se eu te magoei
                     G        D     A
Desculpa estou aprendendo o que é amor

[Segunda Parte]

 F#7               Bm
Nas noites mais escuras
                 G               D  F#7
Nos bares, nas ruas, tudo é solidão
                    Bm
Não me deixe sozinho
            G                A
Falta de carinho rima com nova paixão

[Refrão]

 D               A
Eu quero o seu amor
                    G               D  D4  D
Eu quero ser seu homem, se você quiser
                  A
Se eu tiver seu amor
             G                  D  D4  D
Juro não preciso amar outra mulher
          G      A                    D
Não deixe apagar,  a fogueira do meu coração

 D               A
Eu quero o seu amor
                    G               D  D4  D
Eu quero ser seu homem, se você quiser
                  A
Se eu tiver seu amor
             G                  D  D4  D
Juro não preciso amar outra mulher
          G      A                    D
Não deixe apagar,  a fogueira do meu coração

 D               A
Eu quero o seu amor
                    G               D  D4  D
Eu quero ser seu homem, se você quiser
                  A
Se eu tiver seu amor
             G                  D  D4  D
Juro não preciso amar outra mulher
          G      A                    D     D7
Não deixe apagar,  a fogueira do meu coração
          G      A                    D
Não deixe apagar,  a fogueira do meu coração

[Final] D  D4  D  D4

----------------- Acordes -----------------
A = P2 2 2 2
A/C# = 7 6 5 7
Bm = 4 4 3 4
D = 4 2 3 4
D4 = 0 0 3 0
D7 = 4 2 1 4
F#7 = 4 3 P2 2
F#m = 4 2 2 4
G = 5 4 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FogueiraPage() {
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
