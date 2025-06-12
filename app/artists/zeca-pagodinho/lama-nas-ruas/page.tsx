import CifraDisplay from "@/components/cifra-display";

const cifra = `
Zeca Pagodinho - Lama nas Ruas

[Intro] D7M  E7(9)  A7M  F#m
        G#m7(5-)  C#7  G7
        Bm  F#7

Bm
Deixa
E7(9) Bm     F#7
Desaguar tempestade
          F#m7(5-)  B7(5+) B7
Inundar a cidade
               Em7
Porque arde um sol dentro de nós
C#m7(5-)
Queixas
F#7               C#m7(5-)
Sabes bem que não temos
F#7         C#m7(5-)  F#7(5+)
E seremos serenos
              Bm            Em    F#7
Sentiremos prazer no tom da nossa voz
Bm
Veja
E7(9)       Bm      F#7
O olhar de quem ama
                  F#m7(5-)  B7
Não reflete um drama não
                      Em   Em7
É a expressão mais sincera sim
C#m7(5-)               F#7
Vem pra provar que o amor quando é puro
   Bm                 D7
Desperta e alerta o mortal
C#m7(5-)                F#7
Aí é que o bem vence o mal
F#m7(5-)                                B7
Deixa a chuva cair que bom tempo há de vir
Em7               F#7             Bm
Quando o amor decidir mudar o visual
      Am          D7
Trazendo a paz no sol
G7M                     Em          F#7
Que importa se o tempo lá fora vai mal
      B  G#m  C#m  F#7
Que importa
   B
Se há
F#7             D#m7(5-)  G#7
Tanta lama nas ruas
    C#m
E o céu
G#7              C#m     B7
É deserto e sem brilho de lua
E                F#7
Se o clarão da luz
       D#m7(5-)      G#7
Do teu olhar vem me guiar
   C#m      F#7(4)
Conduz meus passos
   F#7  B             F#7
Por onde quer que eu vá

----------------- Acordes -----------------
A7M = 2 1 2 2
Am = 2 2 1 2
B = P4 4 4 4
B7 = 1 2 0 1
B7(5+) = 7 4 4 5
Bm = 4 4 3 4
C#7 = 3 4 2 3
C#m = 2 1 2 2
C#m7(5-) = 5 4 P2 2
D#m7(5-) = 1 2 2 4
D7 = 4 2 1 4
D7M = 0 P2 2 4
E = 2 1 0 2
E7(9) = 2 1 3 4
Em = 5 4 5 5
Em7 = 2 0 0 0
F#7 = 4 3 P2 2
F#7(4) = 9 9 7 8
F#7(5+) = 14 11 11 12
F#m = 4 2 2 4
F#m7(5-) = 4 5 5 7
G#7 = P4 5 4 6
G#m = 6 4 4 6
G#m7(5-) = 0 1 0 0
G7 = P3 4 3 5
G7M = 5 4 3 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {
  return <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />;
}
