import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Exaltsamba - Te Amo Como Nunca Amei Ninguém

[Intro] C  G/B  Am  Am/G  F  C/E  Dm  G

C7M                Am7
Nunca pensei que você
      Em7            F7M    Em7
Me deixaria desse jeito
      Dm7          G7
Sem dormir direito

C7M                         Gm7         C7(9)
Imaginei que fosse um passatempo qualquer
           F7M           Dm7
Uma aventura de amor
           F7M          G7 G#°
Mas meu coração me enganou

   Am7
E agora o meu mundo é seu mundo
      Gm7   C7      F7M        Dm
Seu corpo em meu corpo é um só
          G7
É um sentimento maior

C7M
Te amo como nunca amei ninguém
    Am7             Gm7      C7     F7M
Te quero como nunca quis um dia alguém
       Em7       D7        G7
Você mudou a minha história
C7M
Te amo como nunca amei ninguém
     Am7              Gm7     C7      F7M
Te quero como nunca quis um dia alguém
       Em7       D7        G7
Você mudou a minha história

 Am7          D7
Todo dia a todo o momento
Am7                   C7
Tão presente no meu pensamento
  F7M              Am7           Dm7      G7
Perco a noção do tempo só por causa de você

----------------- Acordes -----------------
Am = X 0 2 2 1 0
Am/G = 3 X 2 2 1 X
Am7 = X 0 2 0 1 0
C = X 3 2 0 1 0
C/E = 0 3 2 0 1 0
C7 = X 3 2 3 1 X
C7(9) = X 3 2 3 3 X
C7M = X 3 2 0 0 X
D7 = X X 0 2 1 2
Dm = X X 0 2 3 1
Dm7 = X 5 7 5 6 5
Em7 = 0 2 2 0 3 0
F = 1 3 3 2 1 1
F7M = 1 X 2 2 1 X
G = 3 2 0 0 0 3
G#° = 4 X 3 4 3 X
G/B = X 2 0 0 3 3
G7 = 3 5 3 4 3 3
Gm7 = 3 X 3 3 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TeAmoComoNuncaAmeiNinguemPage() {
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
