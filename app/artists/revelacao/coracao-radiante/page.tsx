import CifraDisplay from "@/components/cifra-display";

const cifra = `
Grupo Revelação - Coração Radiante

[Intro] C  F  C  F  G

C                      G
  Meu coração está radiante
           G#º          Am
Bate feliz acho que é amor
                           G  G7
Quando te vejo chego a sonhar
C                                G
  Penso em você quase a todo instante
           G#º            Am
Seu jeito meigo me apaixonou
                           G  G7
O que fazer pra te conquistar

C                                  G
  O que mais quero é te dar um beijo
         G#º         Am
E o seu corpo acariciar
                           F
Você bem sabe que eu te desejo
         G7            C
Está escrito no meu olhar
C                       G
  O seu sorriso é o paraíso
         G#º              Am
Onde contigo eu queria estar
                               F
Ah quem me dera se eu fosse o céu
      G7           C
Você seria o meu luar

C       C    C7     F
Eu te quero só pra mim
           G7         C
Como as ondas são do mar
         Gm   C7    F
Não dá pra viver assim
            G7        C
Querer sem poder te tocar
C       C    C7     F
Eu te quero só pra mim
           G7         C
Como as ondas são do mar
         Gm   C7    F
Não dá pra viver assim
            G7        C
Querer sem poder te tocar

C                      G
  Meu coração está radiante
           G#º          Am
Bate feliz acho que é amor
                           G  G7
Quando te vejo chego a sonhar
C                                G
  Penso em você quase a todo instante
           G#º            Am
Seu jeito meigo me apaixonou
                           G  G7
O que fazer pra te conquistar

C                                  G
  O que mais quero é te dar um beijo
         G#º         Am
E o seu corpo acariciar
                           F
Você bem sabe que eu te desejo
         G7            C
Está escrito no meu olhar
C                       G
  O seu sorriso é o paraíso
         G#º              Am
Onde contigo eu queria estar
                               F
Ah quem me dera se eu fosse o céu
      G7           C
Você seria o meu luar

C       C    C7     F
Eu te quero só pra mim
           G7         C
Como as ondas são do mar
         Gm   C7    F
Não dá pra viver assim
            G7         C
Querer sem poder te tocar
C       C    C7     F
Eu te quero só pra mim
           G7         C
Como as ondas são do mar
         Gm   C7    F
Não dá pra viver assim
            G7         C
Querer sem poder te tocar

( C  F  C  F  G#7 )

C#      C#   C#7/F
Eu te quero só pra mim
F#          G#7        C#
 Como as ondas são do mar
         G#m  C#7    F#
Não dá pra viver assim
            G#7        C#
Querer sem poder te tocar
C#      C#   C#7/F
Eu te quero só pra mim
F#          G#7        C#
 Como as ondas são do mar
         G#m  C#7    F#
Não dá pra viver assim
            G#7        C#
Querer sem poder te tocar

----------------- Acordes -----------------
Am = 2 2 1 2
C = 2 0 1 2
C# = P6 6 6 6
C#7 = 3 4 2 3
C#7/F = 3 4 2 6
C7 = 2 3 1 2
F = 3 2 1 3
F# = 4 3 2 4
G = 5 4 3 5
G#7 = P4 5 4 6
G#m = 6 4 4 6
G#º = 6 4 P3 3
G7 = P3 4 3 5
Gm = 5 3 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CoracaoRadiantePage() {
  return <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />;
}