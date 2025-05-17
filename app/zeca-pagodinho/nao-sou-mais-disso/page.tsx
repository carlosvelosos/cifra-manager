import CifraDisplay from "@/components/cifra-display";

const cifra = `
Zeca Pagodinho - Não sou mais disso

[Intro] Bb  Gm7  C7/9  F7
        Bb  G7  C7/9  F7/9  Bb

                  G7       Cm7
Eu não sei se ela fez feitiço
              F7       Bb6
Macumba ou coisa assim
                    G7         Cm7
Eu só sei que estou bem com ela
             F7       Bb
E a vida é melhor pra mim
                 G7      C7/9
Eu deixei de ser pé-de-cana
                 F7       Bb
Eu deixei de ser vagabundo
               G7        C7/9
Aumentei minha fé em Cristo
                     F7    Bb
Sou bem-quisto por todo mundo

         Cm7
Na hora de trabalhar
F7      Bb
Levanto sem reclamar
Eb7M            Am7/5-
E antes que o galo cantar
D7(b9)   Gm  Gm7
Já vou
        Cm/Eb
À noite volto pro lar
F7          Bb         Eb7M
Pra tomar banho e jantar
       Am7/5-
Só uma no bar
D7(b13)    Gm Gm Gb7 F7
Bastou
   Bb                                 C7/9
Provei pra você que eu não sou mais disso
    Cm7              F7         Bb
Não perco mais o meu compromisso
    Bb7M      Bb6           C7/9
Não perco mais uma noite à toa
       F7                       Bb
Não traio e nem troco a minha patroa

----------------- Acordes -----------------
Am7/5- = 7 6 4 5
Bb = P3 3 3 3
Bb6 = P3 3 3 5
Bb7M = 3 2 3 3
C7/9 = 2 3 3 5
Cm/Eb = 1 0 1 1
Cm7 = 5 3 4 5
D7(b13) = 10 11 11 12
D7(b9) = 4 5 4 7
Eb7M = 1 3 3 5
F7 = 3 2 P1 1
F7/9 = 3 2 4 5
G7 = P3 4 3 5
Gb7 = 4 3 P2 2
Gm = 5 3 3 5
Gm7 = 5 P3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {
  return <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />;
}
