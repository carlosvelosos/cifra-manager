import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Grupo Revelação - Conselho

 G
Deixe de lado esse baixo astral
          Bm
Erga a cabeça enfrente o mal
              Dm         G7             C
Que agindo assim será vital para o seu coração

          Cm                 Bm      F7     E7
É que em cada experiência se aprende uma lição
          Am            A7
Eu já sofri por amar assim
         D7                  D
Me dediquei mas foi tudo em vão

      G          Bm
Pra que se lamentar
           Dm  G7        C
Se em sua vida   pode encontrar
        Cm            Bm     E7
Quem te ame com toda força e ardor
   Am    D#7 D7   G          D7
Assim sucumbirá a dor (tem que lutar)

           G
Tem que lutar
         Bm
Não se abater
          Dm   G7
Só se entregar
           C
A quem te merecer

           Cm
Não estou dando nem vendendo
   Bm     F7     E7
É como o ditado diz
          Am           D      G   D7
O meu conselho é pra te ver feliz

           G
Tem que lutar
         Bm
Não se abater
          Dm   G7
Só se entregar
           C
A quem te merecer

           Cm
Não estou dando nem vendendo
   Bm      F7     E7
É como o ditado diz
          Am            D      G  D7
O meu conselho é pra te ver feliz

 G
Deixe de lado esse baixo astral
          Bm
Erga a cabeça enfrente o mal
              Dm         G7             C
Que agindo assim será vital para o seu coração

          Cm                 Bm      F7     E7
É que em cada experiência se aprende uma lição
          Am            Am
Eu já sofri por amar assim
         D7                  D
Me dediquei mas foi tudo em vão

      G          Bm
Pra que se lamentar
           Dm  G7        C
Se em sua vida    pode encontrar
        Cm            Bm    E7
Quem te ame com toda força e ardor
   Am       D7   G  D7
Assim sucumbirá a dor

           G
Tem que lutar
         Bm
Não se abater
          Dm   G7
Só se entregar
           C
A quem te merecer

           Cm
Não estou dando nem vendendo
   Bm          E7
É como o ditado diz
          Am           D7      G   D7
O meu conselho é pra te ver feliz

           G
Tem que lutar
         Bm
Não se abater
          Dm   G7
Só se entregar
           C
A quem te merecer

           Cm
Não estou dando nem vendendo
   Bm      F7     E7
É como o ditado diz
          Am             D      G
O meu conselho é pra te ver feliz

[FInal] E7  Am  D  G

----------------- Acordes -----------------
A7 = 2 0 2 2
Am = 2 2 1 2
Bm = 4 4 3 4
C = 2 0 1 2
Cm = 1 0 1 1
D = 4 2 3 4
D#7 = 5 3 2 5
D7 = 4 2 1 4
Dm = 3 2 3 3
E7 = 2 1 0 0
F7 = 3 2 P1 1
G = 5 4 3 5
G7 = P3 4 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ConselhoPage() {
  return (
    <>
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}