import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Ferrugem - Natural

[Intro] Db9  A9  B9  Db9  Bbm7/11  A9  B  Db

Db9
Eu sei que vou sofrer um tempo
A9             B9
É natural, não é assim que some
Db9
Quem dera eu acordasse amanhã
A9               B9
Sem lembrar de nada, nem seu nome

Db9
Difícil vai ser te reencontrar
A9                  B9                 A9
E fingir que estou bem, que não me abalei
                                  B/A
E agir naturalmente pra você não ver
                                    A7+
Que dentro dos meus olhos reflete você
                      F#m7
Será que eu vou conseguir
 B/A                   G#m7
Sorrir com o coração chorando
G#7/5+         A7+
E se você me abraçar
                         Gb/Bb
Eu vou fingir que tô sonhando
                      A
Por um segundo acreditar
                         B   Db Ab Db
Que a gente ainda tá namorando

                 A7+             B9
Toda vez que eu tento te esquecer
            Db
Me lembro mais
               A9          B9       Db9
E tudo que eu faço tem um pouco de você
                 A7+
Eu tento te expulsar da mente
B9            Db
Mas você não sai
                    A9         B9         
Por isso eu não me sinto preparado pra te ver

( A  B/A )
( A  B/A )
( A  B  Db )

Db9
Eu sei que vou sofrer um tempo
A9             B9
É natural, não é assim que some
Db9
Quem dera eu acordasse amanhã
A9               B9
Sem lembrar de nada, nem seu nome

Db9
Difícil vai ser te reencontrar
A9                  B9                 A9
E fingir que estou bem, que não me abalei
                                  B/A
E agir naturalmente pra você não ver
                                    A7+
Que dentro dos meus olhos reflete você

                      F#m7
Será que eu vou conseguir
 B/A                   G#m7
Sorrir com o coração chorando
G#7/5+         A7+
E se você me abraçar
                         Gb/Bb
Eu vou fingir que tô sonhando
                      A
Por um segundo acreditar
                         B   Db Ab Db
Que a gente ainda tá namorando                     

                 A7+             B9
Toda vez que eu tento te esquecer
            Db
Me lembro mais
               A9          B9       Db9
E tudo que eu faço tem um pouco de você
                 A7+
Eu tento te expulsar da mente
B9            Db
Mas você não sai
                    A9         B9         Db   Ab   Db   Ab   Db
Por isso eu não me sinto preparado pra te ver

                 A7+          B/E
Toda vez que eu tento te esquecer
            Db9
Me lembro mais
               A9          B9      Db9
E tudo que eu faço tem um pouco de você
                 A7+
Eu tento te expulsar da mente
B/E           Db9
Mas você não sai
             A9          B/E           Db   Ab   Db   Ab   Db
Por isso eu não me sinto preparado pra te ver
A   B   Db
    Pra te ver

----------------- Acordes -----------------
A = X 0 2 2 2 0
A7+ = X 0 2 1 2 0
A9 = X 0 2 2 0 0
Ab = 4 3 1 1 1 4
B = X 2 4 4 4 2
B/A = X 0 4 4 4 X
B/E = X 7 9 8 7 7
B9 = X 2 4 4 2 2
Bbm7/11 = 6 X 6 6 4 X
Db = X 4 6 6 6 4
Db9 = X 4 6 6 4 4
F#m7 = 2 X 2 2 2 X
G#7/5+ = 4 X 4 5 5 4
G#m7 = 4 X 4 4 4 X
Gb/Bb = 6 X 4 6 7 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function NaturalPage() {
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
