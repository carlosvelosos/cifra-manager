import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Péricles - Final de Tarde

[Intro] Cm7  Eb7  G#7M  G7  
        C7M  F#7(5-)  F7M  F/G

C9
Eu não tô legal
C7/Bb            F/A
Essa noite quase não dormi
F      C4           Dm7
Tá custando pra ficha cair
                 C7M            F/G
Que você não vai voltar pra mim
C7M
Luto pra esquecer
C7/Bb             F/A
Mas é impossível não pensar
F         C4    Dm7
Toda hora pego o celular
                    C7M
Na esperança de nem sei o quê
F
Tento disfarçar
                Am7
Me engano e vou tentando acreditar
 Am7(11)               Dm7
Meu semblante não esconde
                   G7(4)
O olhar fica distante
     G7               F
Perco a fome, chego até ouvir tua voz
F          C4     Dm7
Na cabeça passa um filme sobre nós
                  F
A garganta dá um nó
                  F/G
Dá vontade de gritar
                     F   F/G
Te implorando pra voltar
C7M
No final de tarde

      C7/Bb
Tudo se mistura
    F/A
A saudade invade
       Fm/Ab     F/G
Chama por você
C7M
Mas que uma vontade
        C7/Bb
Chega a ser loucura
       F/A                  Fm/Ab      F/G      C7M   Dm7  Em7
O meu corpo arde em chamas por você... Por você iê
F
Tento disfarçar
                Am7
Me engano e vou tentando acreditar
 Am7(11)               Dm7
Meu semblante não esconde
                   G7(4)
O olhar fica distante
    G7                F
Perco a fome, chego até ouvir tua voz
F         C/E      Dm7
Na cabeça passa um filme sobre nós
                  F
A garganta dá um nó
                  F/G
Dá vontade de gritar
                     C7M  F/G
Te implorando pra voltar

C7M
No final de tarde

      C7/Bb
Tudo se mistura
    F/A
A saudade invade
       Fm/Ab     F/G
Chama por você
C7M
Mas que uma vontade
        C7/Bb
Chega a ser loucura
       F/A                  Fm/Ab      F/G      C7M
O meu corpo arde em chamas por você

----------------- Acordes -----------------
Am7 = X 0 2 0 1 0
Am7(11) = 5 X 5 5 3 X
C/E = 0 3 2 0 1 0
C4 = X 3 3 0 1 X
C7/Bb = X 1 2 0 1 X
C7M = X 3 2 0 0 X
C9 = X 3 5 5 3 3
Cm7 = X 3 5 3 4 3
Dm7 = X 5 7 5 6 5
Eb7 = X 6 5 6 4 X
Em7 = 0 2 2 0 3 0
F = 1 3 3 2 1 1
F#7(5-) = 2 X 2 3 1 X
F/A = 5 X 3 5 6 X
F/G = 3 X 3 2 1 X
F7M = 1 X 2 2 1 X
Fm/Ab = 4 3 3 1 X X
G#7M = 4 X 5 5 4 X
G7 = 3 5 3 4 3 3
G7(4) = 3 5 3 5 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FinalDeTardePage() {
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
