import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Exaltasamba - Me Apaixonei Pela Pessoa Errada

[Primeira Parte]

             D7M
Eu não tenho culpa de estar te amando
            F#m7
De ficar pensando em você; toda hora
      Em7                  Em/D
Não entendo por que deixei acontecer
A/C#                G/B  A7
Isso tudo me apavora

             D7M
Você não tem culpa se eu estou sofrendo
        F#m7
Se fantasiei de verde esta história
     Em7                Em/D
Você tem namorado posso até estar errado
    C#m7(5-)               F#4  F#7
Mas tenho que ganhar você

Bm7                            F#m7
  É mais do que desejo é muito mais do amor
      Em            Em/D
Eu te vejo nos meus sonhos
               G7M            A7
E isso aumenta mais a minha dor

[Refrão]

            D
Eu me apaixonei pela pessoa errada
               Bm7                    Bm/A
Ninguém sabe o quanto que estou sofrendo
              G7M             Em
Sempre que eu vejo ele do seu lado
           A7                      A4  A7
Morro de ciúme estou enlouquecendo

 D7M       F#m7                   Em
    Fica comigo amor, me deixa ao menos te tocar
                   Em7               A4  A7
Entenda que ao meu lado  é seu lugar

[Final] D7M  Bm  Em
        D7M  E  A4  A7

----------------- Acordes -----------------
A/C# = X 4 X 2 5 5
A4 = X 0 2 2 3 0
A7 = X 0 2 0 2 0
Bm = X 2 4 4 3 2
Bm/A = X 0 4 4 3 X
Bm7 = X 2 4 2 3 2
C#m7(5-) = X 4 5 4 5 X
D = X X 0 2 3 2
D7M = X X 0 2 2 2
E = 0 2 2 1 0 0
Em = 0 2 2 0 0 0
Em/D = X X 0 4 5 3
Em7 = 0 2 2 0 3 0
F#4 = 2 4 4 4 2 2
F#7 = 2 4 2 3 2 2
F#m7 = 2 X 2 2 2 X
G/B = X 2 0 0 3 3
G7M = 3 X 4 4 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MeApaixoneiPelaPessoaErradaPage() {
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
