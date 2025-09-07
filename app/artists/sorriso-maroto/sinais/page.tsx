import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Sorriso Maroto - Sinais

[Intro] E7M  Am6  E7M  Am6

E                 E4        E
Se é pra viver um grande amor
        E4             C#m7
Sei que é preciso cultivar
                        F#m7(11)
Hoje aprendi com o que passou
               B7(4/9)
Que cada detalhe vai somar
E         E4          E
Fui desatento meu amor
       E4             C#m7
Quem ama tem que reparar
                      F#m7(11)
Ver em você o que mudou
              B7(4/9)      A9
E se é preciso eu mudar
                          F#m7
Ouvir seu silêncio de mulher
                         C#m7
Ver os sinais que você dá
                         B/D#
Discretamente bate o pé
B/C#  C#m/B         A9
Mexe os cabelos sem parar
                          Bm7(9)
Pintou as unhas de café
                 E7(9)
Vive olhando pro nada

[Refrão]

   A9
Perdão amor se levei tempo demais
F#m7(11)
Deixei uma porção de coisas pra trás
E9                        B/D#
Errei em só olhar pra mim
E/D                      D/E
Meu bem nunca te vi assim
F#m7(11)
Nem só de amor se vive uma relação
Am6
Cada detalhe que perdi foi um grão
E9                     B/D#
E quantos grãos deixei cair
E/D                      D/E
Será que já chegou ao fim?
F#m7(11)                 Am9
Pior de tudo é perceber

Que você vinha dando sinais
          E7M  Am6  E7M  Am6
E eu não vi

----------------- Acordes -----------------
A9 = X 0 2 2 0 0
Am6 = 5 X 4 5 5 X
Am9 = X 0 2 4 1 0
B/C# = X 6 X 4 7 7
B/D# = X 6 X 4 7 7
B7(4/9) = X 2 2 2 2 2
Bm7(9) = X 2 0 2 2 X
C#m/B = 7 X 6 6 5 X
C#m7 = X 4 6 4 5 4
D/E = X X 2 2 3 2
E = 0 2 2 1 0 0
E/D = X 5 X 4 5 4
E4 = 0 2 2 2 0 0
E7(9) = X X 2 1 3 2
E7M = X X 2 4 4 4
E9 = 0 2 4 1 0 0
F#m7 = 2 X 2 2 2 X
F#m7(11) = 2 X 2 2 0 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SinaisPage() {
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
