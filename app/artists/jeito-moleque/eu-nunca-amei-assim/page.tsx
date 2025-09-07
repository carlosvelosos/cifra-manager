import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Jeito Moleque - Eu Nunca Amei Assim

[Intro] Cm7  Dm7  Eb7M  Eb7M
        Cm7  Dm7  Eb7M  Eb7M  F7(9/11)

Gm7        Gm7M           D/F#
    Melhor a gente se entender
                       Eb7M
E o que tiver que acontecer
       Dm7             Cm7   F7(9/11)   D7(9-)
Que dessa vez seja, pra sempre
Gm7           Gm7M              D/F#
       Pra que brincar de se esconder
                      Eb7M
Se o amor tocou eu e você
            Dm7          Cm7    F7(9/11)
De um jeito assim tão diferente
Eb7M                         Dm7   Gm7 Bb7(13)
      Porque você não fica comigo
Eb7M                         Dm7    D7
      E deixa o meu amor te levar
Eb7M                        Dm7   Gm7 Bb7(13)
      Solidão a dois é um castigo
Eb7M                       F7(9/11)
      Sem essa de querer complicar

Eb7M              F/Eb
Nosso amor é tão lindo
        Dm7            Gm7  Gm7/F
E eu só penso em você, nossa paixão
    Eb7M             F/Eb
Mas o que eu tô sentindo
          Dm7              Gm7 Gm7/F
Você finge que não vê, a solidão!
   Eb7M           F/Eb
Nosso amor é tão lindo
   Dm7           Gm7
E você longe de mim
           Cm7  Dm7      Eb7M   Eb7M
Eu nunca  amei as       sim
          Cm7  Dm7      Eb7M   Eb7M   F7(9/11)
Eu nunca amei  as       sim

Gm7               Gm7M      D/F#
        Vem cá, me deixa te tocar
                    Eb7M
Dormir a luz do seu olhar
   Dm7              Cm7   F7(9/11)  D7(9-)
E te falar meus sentimentos
Gm7            Gm7M          D/F#
          Deixa o ciúme pra depois
                         Eb7M
O amor tem planos pra nós dois
       Dm7            Cm7   F7(9/11)
Você mudou meus pensamentos

Eb7M                          Dm7   Gm7 Bb7(13)
      Porque você não fica comigo
Eb7M                          Dm7    D7
      E deixa o meu amor te levar
Eb7M                          Dm7   Gm7 Bb7(13)
      Solidão a dois e um castigo
Eb7M                       F7(9/11)
      Sem essa de querer complicar

Eb7M              F/Eb
Nosso amor é tão lindo
        Dm7            Gm7  Gm7/F
E eu só penso em você, nossa paixão
    Eb7M             F/Eb
Mas o que eu tô sentindo
          Dm7              Gm7 Gm7/F
Você finge que não vê, a solidão!
   Eb7M           F/Eb
Nosso amor é tão lindo
   Dm7           Gm7
E você longe de mim
           Cm7  Dm7      Eb7M   Eb7M
Eu nunca  amei as       sim
          Cm7  Dm7      Eb7M   Eb7M  Gm7
Eu nunca amei  as       sim

----------------- Acordes -----------------
Bb7(13) = 6 X 6 7 8 X
Cm7 = X 3 5 3 4 3
D/F# = 2 X 0 2 3 2
D7 = X X 0 2 1 2
D7(9-) = X 5 4 5 4 X
Dm7 = X 5 7 5 6 5
Eb7M = X X 1 3 3 3
F/Eb = X X 1 2 1 1
F7(9/11) = X X 3 3 4 3
Gm7 = 3 X 3 3 3 X
Gm7/F = X X 3 3 6 3
Gm7M = 3 5 4 3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EuNuncaAmeiAssimPage() {
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
