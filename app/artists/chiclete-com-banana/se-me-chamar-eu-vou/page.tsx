import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Chiclete Com Banana - Se me chamar eu vou

(Tonho Matéria/Buzziga)

e Bb

    Gm
Se quer me levar amor
    Eb            F
me leva pro horizonte
      Eb
do caminho bem distante
        Cm            F
aonde exista só nós dois


  Gm
estou feliz
    Eb               F
com o coração palpitando
   Gm
você me tem
  Bb                      D
sempre em todos os seus planos


Eb                   Cm
penso contente em você
 Eb                Cm
quando preciso te ver
 Eb           Cm
vou à rua, fico na lua
Eb             Cm      F
à procura do teu sinal



| Bb        Gm       Eb
| se me chamar eu vou
|     F             Gm
| ao som que furta cor
|                Eb
| que furta coração
|     F        Bb      Eb      Cm  F
| que leva emoção, eu vou, eu vou     (bis)


        Gm
se teu beijo cair lá do céu
      Eb              F
que caia por cima de mim
    Gm
e todo lampejo de mel
      Eb               F    Gm  (F)
que caia por cima de mim, amor.

----------------- Acordes -----------------
Bb = X 1 3 3 3 1
Cm = X 3 5 5 4 3
D = X X 0 2 3 2
Eb = X 6 5 3 4 3
F = 1 3 3 2 1 1
Gm = 3 5 5 3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SeMeChamarEuVouPage() {
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
