import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Grupo Pixote - Nem de Graça

[Intro] Eb9  F11  Gm11  Bb/D

       Eb9                            F/A
É que não sobrou espaço pra outro alguém
                                Gm11                 F
Minha Saudade só cabe no teu abraço, no de mais ninguém
 Eb9                           F/A
Tenho dó de quem me conhecer agora
                             Dm7
Que todo amor eu tô jogando fora
                                      Gm7
E qualquer um que bate aqui nesse meu coração
     Bb/D  Gm7  F  Eb9  F11  Gm11  F11
Não passa nem... dá......por.........ta

 F       Fm7          Bb7(4/9)  Eb9
Se essa boca não beijasse tão  bem
                              F
Se esse abraço não fosse tão massa
                                   Dm7
Se quer saber se eu quero outro alguém
                       Gm7  Gm7/F
Nem de graça, nem de graça

          C7(9)
Leva mal não
    Eb9             Ebm6
Só tem espaço pra você no coração

[Solo] Eb9  F11  Gm11
       F11  Gm11  G4


----------------- Acordes -----------------
Bb/D = X 5 X 3 6 6
Bb7(4/9) = X 1 1 1 1 1
C7(9) = X 3 2 3 3 X
Dm7 = X 5 7 5 6 5
Eb9 = X 6 8 8 6 6
Ebm6 = X X 1 3 1 2
F = 1 3 3 2 1 1
F/A = 5 X 3 5 6 X
F11 = 1 3 3 3 1 1
Fm7 = 1 X 1 1 1 X
G4 = 3 5 5 5 3 3
Gm11 = 3 X 0 3 1 X
Gm7 = 3 X 3 3 3 X
Gm7/F = X X 3 3 6 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function NemDeGraca1Page() {
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
