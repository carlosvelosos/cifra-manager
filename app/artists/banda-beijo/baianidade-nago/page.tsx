import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Banda Beijo - Baianidade nagô

E7M
Já pintou verão
C#m7
Calor no coração
  F#m7            B4(7) B
A festa vai começar
    E7M
Salvador se agita
     C#m7
Numa só alegria
   F#m7            B4(7) B5+
Eternos Dodô e Osmar

E7M
Na avenida Sete
   C#m7
Da paz eu sou tiete
   F#m7                B4(7) B
Na barra o farol a brilhar
     E7M
Carnaval na Bahia
  C#m7
Oitava maravilha
 F#m7             B7        E   Bm7 Bb7(5-)
Nunca irei te deixar, meu amor

    A7M
Eu vou
   B/A                 G#m7
Atrás do trio elétrico vou
   G#m7(5-)        C#7        F#m7
Dançar ao negro toque do agogô
   F#m7(5-)          B       E7M     Bm7 Bb7(5-)
Curtindo minha baianidade nagô ô ô ô ô

      A7M
Eu queria
      B/A                  G#m7
Que essa fantasia fosse eterna
      G#m7(5-)
Quem sabe um dia
  C#7              F#m7
A paz vence a guerra
     F#m7(5-)  B7      E7M      A/B
E viver será só festejar, eô, eô

----------------- Acordes -----------------
A/B = X 2 2 2 2 X
A7M = X 0 2 1 2 0
B = X 2 4 4 4 2
B/A = X 0 4 4 4 X
B4(7) = X 2 2 2 0 X
B5+ = X 2 1 0 0 X
B7 = X 2 1 2 0 2
Bb7(5-) = X 1 2 1 3 X
Bm7 = X 2 4 2 3 2
C#7 = X 4 3 4 2 X
C#m7 = X 4 6 4 5 4
E = 0 2 2 1 0 0
E7M = X X 2 4 4 4
F#m7 = 2 X 2 2 2 X
F#m7(5-) = 2 X 2 2 1 X
G#m7 = 4 X 4 4 4 X
G#m7(5-) = 4 X 4 4 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function BaianidadeNagoPage() {
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
