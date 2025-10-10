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
C7(9) = 2 3 3 5
Dm7 = 0 2 1 3
Eb9 = 1 3 4 3
Ebm6 = 1 3 1 4
F = 3 2 1 3
F11 = 3 3 1 3
Fm7 = 3 5 4 6
G4 = 0 0 1 0
Gm7 = 5 P3 3 3
Gm7/F = 5 7 6 8
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function NemDeGracaPage() {
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
