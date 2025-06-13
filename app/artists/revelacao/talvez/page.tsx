import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Grupo Revelação - Talvez

[Intro] E  A  Am6  A  C7M  F#m7  B7

[Solo] G#  B  F#  A  G#
       F#  E  G#  E  G#
       E  A  E  G  E  F#  B

[Solo]

            E                   F#7
Eu quis um dia te dar a luz pra iluminar
          A        Am  E   B7
O escuro da solidão  não deu
           E
Lutei pra te conquistar
         F#7
De tudo fiz pra mostrar
                A    Am  E
Foi grande a decepção    valeu
             D#m7       G#7 C#m7
Quando a saudade apertar não vou chorar
               D#m7  G#7  C#
Mas se o meu pranto rolar deixa
              F#m7      B7
Quando a solidão chegar
              G#m7    C#m7
Querendo me acompanhar
              Am6   G#7
Eu não vou desanimar
            C#m7
Jamais vou me entregar
          D#7                      D#m7       G#7
Eu vou cantar vou compôr pra esquecer essa dor

[Refrão]

    C#                                D#7
Um dia eu vou encontrar minha felicidade
    D#m              G#7         C#
Eu já perdoei as maldades que você me fez
  G#m7                 C#7             F#7   G°
Adeus querida, até um dia, quem sabe até talvez
     C#7     A#m7    D#m7 G#7  C#7M  G#7
Que pena o nosso amor  desfez
    C#7                               D#7
Um dia eu vou encontrar minha felicidade
    D#m7             G#7         C#7
Eu já perdoei as maldades que você me fez
  G#m7                 C#7           F#7   G°
Adeus querida, até um dia, quem sabe até talvez
     C#     A#m       D#m7 G#7 E
Que pena o nosso amor  desfez

            E                   F#7
Eu quis um dia te dar a luz pra iluminar
          A        B7(4)   E   B7(4)
O escuro da solidão  não deu
           E
Lutei pra te conquistar
         F#7
De tudo fiz pra mostrar
                A    B7(4)  E
Foi grande a decepção    valeu
             D#m7(5-)   D7(9) C#m7
Quando a saudade apertar não vou chorar
               D#m7(5-)  G#7  C#7M
Mas se o meu pranto rolar deixa
              F#m7      B7(4)
Quando a solidão chegar
              G#m7    C#m7
Querendo me acompanhar
              Am6   G#7(5+)
Eu não vou desanimar
            C#m7
Jamais vou me entregar
          D#7                      D#m7       G#7
Eu vou cantar vou compôr pra esquecer essa dor

[Refrão]

    C#7M                               D#7
Um dia eu vou encontrar minha felicidade
    D#m7             G#7         C#7M
Eu já perdoei as maldades que você me fez
  G#m7                 C#7             F#7   G°
Adeus querida, até um dia, quem sabe até talvez
     C#7M     A#m7    D#m7 G#7  C#7M  G#7
Que pena o nosso amor  desfez
    C#7M                               D#7
Um dia eu vou encontrar minha felicidade
    D#m7             G#7         C#7M
Eu já perdoei as maldades que você me fez
  G#m7                 C#7           F#7   G°
Adeus querida, até um dia, quem sabe até talvez
     C#7M     A#m7        D#m7 G#7   A7M   B7(4)
Que pena o nosso amor  desfez

                   E9
Eu quis um dia te dar

( A  B  G#m  G  F#m  A/B )

----------------- Acordes -----------------
A = P2 2 2 2
A#m = 3 3 2 3
A#m7 = 3 1 2 3
A/B = 11 14 12 14
A7M = 2 1 2 2
Am = 2 2 1 2
Am6 = 4 2 1 2
B = P4 4 4 4
B7 = 1 2 0 1
B7(4) = 2 2 0 4
C# = P6 6 6 6
C#7 = 3 4 2 3
C#7M = 3 1 1 3
C#m7 = 6 4 5 6
C7M = 2 0 0 2
D#7 = 5 3 2 5
D#m = 4 3 4 4
D#m7 = 1 3 2 4
D#m7(5-) = 1 2 2 4
D7(9) = 4 5 5 7
E = 2 1 0 2
E9 = 2 1 0 4
F# = 4 3 2 4
F#7 = 4 3 P2 2
F#m = 4 2 2 4
F#m7 = 4 P2 2 2
G = 5 4 3 5
G# = 6 5 4 6
G#7 = P4 5 4 6
G#7(5+) = 4 1 1 2
G#m = 6 4 4 6
G#m7 = 6 P4 4 4
G° = 5 3 P2 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TalvezPage() {
  return (
    <>
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}