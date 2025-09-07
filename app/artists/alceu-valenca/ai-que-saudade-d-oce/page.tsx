import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Alceu Valença - Ai Que Saudade D'ocê

[Intro] E  E7  A7  Am
        E  E7  A7  Am
        E  A7  B7
        E  A7  B7  E

[Primeira Parte]

E                      A
  Não se admire se um dia
           Am      E
Um beija flor invadir
                A
A porta da tua casa
           Am         E
Te der um beijo e partir
    B/D#              C#m
Foi eu que mandei um beijo
             E/G#      F#7
Que é pra matar meu desejo
                      B
Faz tempo que não te vejo
           A       E
Ai que saudade d'ocê

( E7  A7  Am )
( E  E7  A7  Am )
( E  A7  B7 )
( E  A7  B7  E )

[Segunda Parte]

                      A
Se um dia ocê se lembrar
             Am        E
Escreva uma carta pra mim
                 A
Bote logo no correio com
    Am             E
A frase dizendo assim
     B/D#             C#m
Faz tempo que não te vejo
         E/G#        F#7
Quero matar o meu desejo
                      B
Te mando um monte de beijo
           A        E
Ai que saudade sem fim

( E7  A7  Am )
( E  E7  A7  Am )
( E  A7  B7 )
( E  A7  B7  E )

[Terceira Parte]

                  A
E se quiser recordar
        Am      E
Aquele nosso namoro
                 A
Quando eu ia viajar
       Am      E
Você caía no choro
         B/D#          C#m
E eu chorando pela estrada
                  E/G#    F#7
Mas o que que eu posso fazer?
                   B
Trabalhar é minha sina
          A          E
Eu gosto mesmo é d'ocê

( E7  A7  Am )
( E  E7  A7  Am )
( E  A7  B7 )
( E  A7  B7  E )

[Primeira Parte]

                     A
Não se admire se um dia
                   E
Um beija flor invadir
                A
A porta da tua casa
                      E
Te der um beijo e partir
    B/D#              C#m
Foi eu que mandei um beijo
             E/G#      F#7
Que é pra matar meu desejo
                      B
Faz tempo que não te vejo
           A       E
Ai que saudade d'ocê

[Final] E7  A7  Am  E
        E7  A7  Am  E

----------------- Acordes -----------------
A = X 0 2 2 2 0
A7 = X 0 2 0 2 0
Am = X 0 2 2 1 0
B = X 2 4 4 4 2
B/D# = X 6 X 4 7 7
B7 = X 2 1 2 0 2
C#m = X 4 6 6 5 4
E = 0 2 2 1 0 0
E/G# = 4 X 2 4 5 X
E7 = 0 2 2 1 3 0
F#7 = 2 4 2 3 2 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AiQueSaudadeDOcePage() {
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
