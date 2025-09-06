import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Israel & Rodolffo - Arruma Um Bão

F
Às vezes paro pra pensar se eu sou tão

Ruim assim igual você me vê
Gm
Se realmente eu sou um bosta

Se eu faço tudo, tudo errado, toda hora
Bb
E lá fundo eu sei que você sabe tudo
        F
Eu tô apostando no nosso futuro

Tô dando o meu sangue pra gente tá junto
             C
Será que é só medo

De eu parecer tão bom pros seus defeitos?
                Gm
Ou será que cê acha
                               F
Que me valorizando cê vai dar asas pra eu voar?
      F
Eu vou me achar e te largar?
C                                     Am  Gm F Em   Dm
Mal cê sabe que fazendo isso aumenta o risco que cê quer evitar

[Refrão]

                 Bb    C    Dm
Já parou pra pensar como vai ser
                     Bb        C      Dm
Se eu empinar a carroça e te fazer descer?
                    Bb
Seu te amo não vai segurar
        C             Dm
O seu choro não vai comover
                   Bb            C         Dm
O ruim tá indo embora, arruma um bão procê, vem

                 Bb    C    Dm
Já parou pra pensar como vai ser
                     Bb        C      Dm
Se eu empinar a carroça e te fazer descer?
                    Bb
Seu te amo não vai segurar
        C             Dm
O seu choro não vai comover
                   Bb            C         Dm
O ruim tá indo embora, arruma um bão procê

( Bb  C  Dm )

             C
Será que é só medo

De eu parecer tão bom pros seus defeitos?
                Gm
Ou será que cê acha
                               F
Que me valorizando cê vai dar asas pra eu voar?
      F
Eu vou me achar e te largar?
C                                     Am  Gm F Em   Dm
Mal cê sabe que fazendo isso aumenta o risco que cê quer evitar

[Refrão]

                 Bb    C    Dm
Já parou pra pensar como vai ser
                     Bb        C      Dm
Se eu empinar a carroça e te fazer descer?
                    Bb
Seu te amo não vai segurar
        C             Dm
O seu choro não vai comover
                   Bb            C         Dm
O ruim tá indo embora, arruma um bão procê, vem

                 Bb    C    Dm
Já parou pra pensar como vai ser
                     Bb        C      Dm
Se eu empinar a carroça e te fazer descer?
                    Bb
Seu te amo não vai segurar
        C             Dm
O seu choro não vai comover
                   Bb            C         Dm
O ruim tá indo embora, arruma um bão procê
                   Bb            C         Dm
O ruim tá indo embora, arruma um bão procê

----------------- Acordes -----------------
Am = X 0 2 2 1 0
Bb = X 1 3 3 3 1
C = X 3 2 0 1 0
Dm = X X 0 2 3 1
Em = 0 2 2 0 0 0
F = 1 3 3 2 1 1
Gm = 3 5 5 3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ArrumaUmBaoPage() {
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
