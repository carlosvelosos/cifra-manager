import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `
Zeca Pagodinho - Seu Balancê

[Intro] D# Cm7  Gm
        Fm  A#7

D#         A#7        D#
  Quando o canto da sereia
    A#7           D#
Reluziu no seu olhar
                 C7
Acertou na minha veia
     C7(13-)        Fm
Conseguiu me enfeitiçar
      C7            Fm
Tem veneno o seu perfume
       C7/G        Fm
Que me faz o seu refém
                   A#7
Seu sorriso tem um lume
                    D#
Que nenhuma estrela tem
A#7               D#
Tô com medo desse doce
A#7               D#
Tô comendo em sua mão
                   D#7
Nunca imaginei que fosse
      D#7/G        G#
Mergulhar na tentação

Essa boca que me beija
A#7                 D#
Me enlouquece de paixão
Cm7                  Fm
Te entreguei numa bandeja
        A#7        D#  A#7
A chave do meu coração

[Refrão]

       D#              C°                  Fm
Seu tempero me deixa bolado é um mel misturado com dendê
       A#7                                       D#/G          A#7
No seu colo eu me embalo eu me embolo até numa casinha de sapê
        Cm7                C7             Fm
Como é lindo o bailado debaixo dessa sua saia godê
               A#7                       D# A#7
Quando roda no bamba-querer, fazendo fuzuê
       D#              C°                Fm
Minha deusa esse seu encanto parece que vem do Ilê
     A#7                                 D#       A#7
Ou será de um jogo de jongo que fica no Colubandê
      Cm7                  C7              Fm
Eu só sei que o som do batuque é truque do seu balancê
             A#7                       D#  A#7
Preta cola comigo porque   tô amando você

D#          A#7        D#
  Quando o canto da sereia
    A#7           D#
Reluziu no seu olhar
                 C7
Acertou na minha veia
     C7(13-)        Fm
Conseguiu me enfeitiçar
      C7            Fm
Tem veneno o seu perfume
       C7/G        Fm
Que me faz o seu refém
                   A#7
Seu sorriso tem um lume
                    D#
Que nenhuma estrela tem
A#7               D#
Tô com medo desse doce
A#7               D#
Tô comendo em sua mão
                   D#7
Nunca imaginei que fosse
      D#7/G        G#
Mergulhar na tentação

Essa boca que me beija
A#7                 D#
Me enlouquece de paixão
Cm7                  Fm
Te entreguei numa bandeja
        A#7        D#  A#7
A chave do meu coração

       D#              C°                  Fm
Seu tempero me deixa bolado é um mel misturado com dendê
       A#7                                       D#/G          A#7
No seu colo eu me embalo eu me embolo até numa casinha de sapê
        Cm7                C7             Fm
Como é lindo o bailado debaixo dessa sua saia godê
               A#7                       D# A#7
Quando roda no bamba-querer, fazendo fuzuê
       D#              C°                Fm
Minha deusa esse seu encanto parece que vem do Ilê
     A#7                                 D#       A#7
Ou será de um jogo de jongo que fica no Colubandê
      Cm7                  C7               Fm
Eu só sei que o som do batuque é truque do seu balancê
             A#7                       D#  B7(13)
Preta cola comigo porque   tô amando você
    E            C#7           F#m
Lalaiá lalaiá lalaiá lalaiá lalaiá lala iá
    B7                        E
Lalaiá lalaiá lalaiá lalaiá lalaiá lala iá
  C#m7            C#7          F#m
Lalaiá lalaiá lalaiá lalaiá lalaiá lala iá
             B7                        E  C#m7 G#mG#m/B
Preta cola comigo porque estou amando você
F#m   B7            E  B7 G#m7   E7M(9)
        Tô amando você


----------------- Acordes -----------------
Capotraste na 1ª casa
A#7*  = 3 1 3 3 - (*B7 na forma de A#7)
C7*  = 2 3 1 2 - (*C#7 na forma de C7)
C7(13-)*  = 10 9 9 8 - (*C#7(13-) na forma de C7(13-))
C7/G*  = 10 12 11 14 - (*C#7/G# na forma de C7/G)
B7*  = 1 2 0 1 - (*C7 na forma de B7)
B7(13)*  = 7 11 9 9 - (*C7(13) na forma de B7(13))
Cm7*  = 5 3 4 5 - (*C#m7 na forma de Cm7)
C°*  = 4 2 P1 1 - (*C#° na forma de C°)
C#7*  = 3 4 2 3 - (*D7 na forma de C#7)
C#m7*  = 6 4 5 6 - (*Dm7 na forma de C#m7)
D#*  = 5 3 4 5 - (*E na forma de D#)
D#7*  = 5 3 2 5 - (*E7 na forma de D#7)
D#7/G*  = 5 6 4 8 - (*E7/G# na forma de D#7/G)
E*  = 2 1 0 2 - (*F na forma de E)
E7M(9)*  = 2 5 5 5 - (*F7M(9) na forma de E7M(9))
Fm*  = 3 1 1 3 - (*F#m na forma de Fm)
Gm*  = 5 3 3 5 - (*G#m na forma de Gm)
F#m*  = 4 2 2 4 - (*Gm na forma de F#m)
G#*  = 6 5 4 6 - (*A na forma de G#)
G#m*  = 6 4 4 6 - (*Am na forma de G#m)
G#m/B*  = 1 1 0 1 - (*Am/C na forma de G#m/B)
G#m7*  = 6 P4 4 4 - (*Am7 na forma de G#m7)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
