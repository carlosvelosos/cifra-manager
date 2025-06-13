import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Grupo Revelação - Baixa Essa Guarda

[Intro] Bb7M  C/Bb  Am7  Dm
        Gm  A#/C  F7M  F7(13)

              Bb7M               C/Bb
Num beijo molhado ninguém se conhece
      Am7           F7(13)
No momento é só prazer
               Bb7M                  C/Bb
Depois de um Adeus quando o dia amanhece
             Dm7  C#m7  Cm7  F7(13)
Eu começo a sofrer
             Bb7M                  C/Bb
E aí que desperta a paixão no meu peito
      Am7            F7(13)
E acelera o meu coração
               Bb7M                C/Bb
Então não tem jeito, descubro pra nós
              F7M  F7(13)
A melhor solução

 Bb7M                C/Bb
Baixa essa guarda encurta a distância
      Am7                D7
Que existe entre eu e você
 Bb7M              C/Bb               Am7(5-)
Vou te falar a verdade que o meu coração
                   D7
Te escolheu pra viver
      Bb7M        C/Bb
Procurei , não encontrei
     Am7(5-)       D7
Mas todo amor tem seu lugar
         Gm7           A#/C   C7 F  F7
Achei o meu, só quero me entregar

----------------- Acordes -----------------
Am7 = 7 P5 5 5
Am7(5-) = P1 2 1 1
Bb7M = 3 2 3 3
C#m7 = 6 4 5 6
C7 = 2 3 1 2
Cm7 = 5 3 4 5
D7 = 4 2 1 4
Dm = 3 2 3 3
Dm7 = 0 2 1 3
F = 3 2 1 3
F7 = 3 2 P1 1
F7(13) = 1 5 3 3
F7M = 3 2 1 2
Gm = 5 3 3 5
Gm7 = 5 P3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function BaixaEssaGuardaPage() {
  return (
    <>
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}