import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Marília Mendonça - Supera

[Intro] E9

[Primeira Parte]

       E9
Tá de novo com essa pessoa
              B9
Não tô acreditando
                                 C#m7
Vai fazer papel de trouxa outra vez
                A9
Cê não aprende mesmo, hein

[Pré-Refrão]

       B9
Pra você isso é amor
                      F#m7(11)
Mas pra ele isso não passa de um plano B
                         C#m7
Se não pegar ninguém da lista, liga pra você
               B9
Te usa e joga fora

[Refrão]

 E9
Para de insistir, chega de se iludir
    B4
O que cê tá passando, eu já passei e eu sobrevivi
C#m7
     Se ele não te quer, supera
A9
   Se ele não te quer, supera

E
Ele tá fazendo de tapete o seu coração
  B4
Promete pra mim que dessa vez você vai falar não
C#m7
     De mulher pra mulher, supera
A9
   De mulher pra mulher, supera

( E  B4  C#m7  A9 )

[Pré-Refrão]

       B9
Pra você isso é amor
                      F#m7(11)
Mas pra ele isso não passa de um plano B
                         C#m7
Se não pegar ninguém da lista, liga pra você
               B9
Te usa e joga fora

[Refrão]

 E
Para de insistir, chega de se iludir
    B9
O que cê tá passando, eu já passei e eu sobrevivi
C#m7
    Se ele não te quer, supera
A9
  Se ele não te quer, supera

E
Ele tá fazendo de tapete o seu coração
  B9
Promete pra mim que dessa vez você vai falar não
C#m7
    De mulher pra mulher, supera
A9
  De mulher pra mulher, supera

( E  B9 )

C#m7
     Se ele não te quer
A9                            E
   De mulher pra mulher, supera


----------------- Acordes -----------------
A9 = P2 4 2 2
B4 = P2 4 4 4
B9 = P4 6 4 4
C#m7 = 6 4 5 6
E = 2 1 0 2
E9 = 2 1 0 4
F#m7(11) = 11 11 12 14
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SuperaPage() {
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
