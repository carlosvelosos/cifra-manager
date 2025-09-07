import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Saulo Fernandes - Não Precisa Mudar

      E7M        A9
Não precisa mudar
          E7M            A9
Vou me adaptar ao seu jeito
              C#m7     F#7
Seus costumes, seus defeitos
                   B7(9)          B7(9-)
Seus ciúmes, suas caras, pra que mudá-las?

        E7M          A9
Não precisa mudar
            E7M           A9
Vou saber fazer o seu jogo
               C#m7(9)   F#7(13)
Deixar tudo do seu gosto
                    B7(9)             B7(9-)
Sem guardar nenhuma mágoa, sem cobrar nada

A7M               Ab7(5+)         C#m7(9)   F#7(13)
 Se eu sei que no final fica tudo be....em
            F#m7              Abm7
A gente se ajeita numa cama pequena
         A7M                  A/B
Te faço poema, te cubro de amor

A7M             E/G#
Então você adormece
     F#m7        E/G#
Meu coração enobrece
    A7M          G#7(13-)
E a gente sempre esquece
              C#7(9)    C#7(9/11)
De tudo que passo......ou
A7M           E/G#
Então você adormece
     F#m7        E/G#
Meu coração enobrece
    A7M           E/G#
E a gente sempre esquece
              C#7(9)   C#7(9/11)
De tudo que passo......u
              F#m7  B7(9)
De tudo que passou

----------------- Acordes -----------------
A/B = X 2 2 2 2 X
A7M = X 0 2 1 2 0
A9 = X 0 2 2 0 0
Ab7(5+) = 4 X 4 5 5 4
Abm7 = 4 X 4 4 4 X
B7(9) = X 2 1 2 2 X
B7(9-) = X 2 1 2 1 X
C#7(9) = X 4 3 4 4 X
C#7(9/11) = X 4 4 4 4 4
C#m7 = X 4 6 4 5 4
C#m7(9) = X 4 2 4 4 X
E/G# = 4 X 2 4 5 X
E7M = X X 2 4 4 4
F#7 = 2 4 2 3 2 2
F#7(13) = 2 X 2 3 4 X
F#m7 = 2 X 2 2 2 X
G#7(13-) = 4 X 4 5 5 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function NaoPrecisaMudarPage() {
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
