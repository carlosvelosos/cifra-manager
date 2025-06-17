import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Natiruts - Você Me Encantou Demais

F#m         C#m7     D7M
Você me encantou demais
F#m                C#m7            D7M
Mostrou seu coração do que ele é capaz
F#m     C#m7            D7M
Por isso eu quero te dizer
F#m                      C#m7          D7M
Que a flor dessa canção sempre será você
F#m          C#m7                D7M
Seu beijo despertou paixão
F#m                         C#m7         D7M
Desculpe se me apressei pois nada foi em vão
F#m   C#m7         D7M
O que eu desejo à você
F#m                 C#m7            D7M
É que os deuses do amor estejam a te proteger
       D7M                          C#m7
E que o verão no seu sorriso nunca acabe
                 D7M           C#m7
E aquele medo de viver um dia se torne um grande amor
             D7M                C#m7
Vou te falar mas acho que você já sabe
     Bm7         C#m7     D7M       D6/E        F#m C#m7   D7M
Você apaixonou alucinou descompassou meu coração
F#m C#m7   D7M
Meu coração
F#m       C#m7        D7M
Você me fez sonhar demais
F#m            C#m7        D7M
Chegou sorriu beijou mostrou como se faz
F#m        C#m7        D7M
Por isso eu quero te falar
F#m             C#m7                   D7M
Que os As dessa canção eu fiz só pra te dar
F#m    C#m7           D7M
Seu jeito lindo fez arder
F#m          C#m7               D7M
Fiquei feito vulcão fervendo por te ver
F#m     C#m7        D7M
E que eu desejo à você
F#m          C#m7                    D7M
É que os deuses do amor estejam a te proteger
       D7M                        C#m7
E que o verão no seu sorriso nunca acabe
          D7M                  C#m7
E aquele medo de viver um dia se torne um grande amor
       D7M                        C#m7
Vou te falar mas acho que você já sabe
     Bm7        C#m7      D7M       D6/E      F#m C#m7   D7M
Você apaixonou alucinou descompassou meu coração
F#m C#m7   D7M
Meu coração

----------------- Acordes -----------------
Bm7 = X 2 4 2 3 2
C#m7 = X 4 6 4 5 4
D6/E = X 7 7 7 7 7
D7M = X X 0 2 2 2
F#m = 2 4 4 2 2 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VoceMeEncantouDemaisPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
