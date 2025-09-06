import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Zé Neto e Cristiano - Escondendo o Ouro

[Intro] Eb

   Eb
Eu já peguei, gostei, fiquei

Larguei, nem sei
                   Bb
Em quantas bocas eu errei
                    Bb
Mas tem uma que eu acertei

              Eb
Eu acertei na sua

E que ela seja a última
          Bb
Porque se for
                                     C7
Você é a primeira que vai ser pra sempre
Cm7 Dm7  Eb
Meu a___mor

[Refrão]

               Eb                     Bb
Eu já tive paixões jurando que eram amores
                 Gm7                    F
Eu já mandei errado, alguns buquês de flores
                Eb                 Bb
Deus tava me preparando esse tempo todo
               C7                         F
Te deixou pro final, tava escondendo o ouro
               Eb                     Bb
Eu já tive paixões jurando que eram amores
                 Gm7                    F
Eu já mandei errado, alguns buquês de flores
                Eb                 Bb
Deus tava me preparando esse tempo todo
               C7                         F
Te deixou pro final, tava escondendo o ouro
                 Eb    Ebm             Bb
Te deixou pro final, tava escondendo o ouro

[Solo] Eb  Bb  Gm  F
       Eb  Bb  Gm  F

          Eb
Eu acertei na sua
                   Eb
E que ela seja a última
          Bb
Porque se for
                                     C7
Você é a primeira que vai ser pra sempre
Cm7  Dm7 Eb
Meu a....mor

[Refrão]

               Eb                     Bb
Eu já tive paixões jurando que eram amores
                 Gm7                    F
Eu já mandei errado, alguns buquês de flores
                Eb                 Bb
Deus tava me preparando esse tempo todo
               C7                         F
Te deixou pro final, tava escondendo o ouro
               Eb                     Bb
Eu já tive paixões jurando que eram amores
                 Gm7                    F
Eu já mandei errado, alguns buquês de flores
                Eb                 Bb
Deus tava me preparando esse tempo todo
               C7                         F
Te deixou pro final, tava escondendo o ouro
                 Eb   Ebm               Bb
Te deixou pro final, tava escondendo o ouro

----------------- Acordes -----------------
Bb = X 1 3 3 3 1
C7 = X 3 2 3 1 X
Cm7 = X 3 5 3 4 3
Dm7 = X 5 7 5 6 5
Eb = X 6 5 3 4 3
Ebm = X X 1 3 4 2
F = 1 3 3 2 1 1
Gm = 3 5 5 3 3 3
Gm7 = 3 X 3 3 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EscondendoOOuroPage() {
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
