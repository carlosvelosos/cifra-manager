import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Tiee - Fortaleza

A7M      A/G                 D/F#
A nossa fortaleza vence qualquer ciúme
          Dm/F           D7M
Então por gentileza meu bebe
             A/G          D/F#
Deita com a luz aceza põe aquele perfume
            Dm/F          D7M
Que hoje a sobremesa é você
A7M              A/G          D/F#
Se o negócio é brigar discutir relação
             Dm/F         D7M
Sobe de patamar muda seu coração
             A/G         D/F#
Eu não vou aceitar sua provocação
                           Dm/F
É melhor evitar pelo sim pelo não
           A7M                         A7(9/11)
Só pra me enganar bota o feijão no fogo e para de ferver
                D7M(9)
Tira esse brilho genioso do olhar
                          Dm6
Que eu cheguei tarde mais o coro vai comer
A7M      A/G                 D/F#
A nossa fortaleza vence qualquer ciúme
          Dm/F          D7M
Então por gentileza meu bebe
              A/G          D/F#
Deita com a luz aceza põe aquele perfume
            Dm/F
Que hoje a sobremesa é você


----------------- Acordes -----------------
A/G = 3 X 2 2 2 X
A7(9/11) = 5 X 5 4 3 X
A7M = X 0 2 1 2 0
D/F# = 2 X 0 2 3 2
D7M = X X 0 2 2 2
D7M(9) = X 5 4 6 5 X
Dm/F = X X 3 2 3 1
Dm6 = X 5 X 4 6 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FortalezaPage() {
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
