import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Grupo Revelação - Essência da Paixão

[Intro] Cm  F7(9)  Cm  G7

[Primeira Parte]

Cm                     F7(9)   Fm
   Te quero demais minha flor
     Bb7              Eb   G7   
Não deixe esse amor acabar
Cm                    F7(9)  Fm
   Te juro ninguém me amou
      Bb7             Eb  Eb5+  Bbm
Do jeito que sabe me amar

[Segunda Parte]

 Eb7             Ab7M   Abm6
Ainda sinto teu perfume
                 Gm7   C7
Por essência da paixão
                 Fm7           Gm7      Ab7M
É razão do meu ciúme a saudade    me invade
   Bb7            Eb  Eb5+  Bbm7
Aumentando a solidão
     Eb7           Ab7M    Abm6   
Só quero viver ao teu lado
                 Gm7     C7
Sentindo a mesma emoção
                    Fm7         Gm7    Ab7M
Te amando e sendo amado provando   pecado
      Bb7         Eb   G7
Renascendo de paixão

[Refrão]

          Cm
Vem meu amor
                          F7(9)
Que vontade de te dar um beijo
                    Ab7M
Me perder no seu desejo
    Bb7        Eb    G7
No seu corpo acordar
          Cm
Vem meu amor
                  F7(9)
Tô carente tão sozinho
                 Ab7M
Precisando de carinho
 Bb7           Eb   G7
Vem vamos recomeçar

          Cm
Vem meu amor
                          F7(9)
Que vontade de te dar um beijo
                    Ab7M
Me perder no seu desejo
    Bb7        Eb    G7
No seu corpo acordar
          Cm
Vem meu amor
                  F7(9)
Tô carente tão sozinho
                 Ab7M
Precisando de carinho
 Bb7           Eb   Eb5+  Bbm
Vem vamos recomeçar

[Segunda Parte]

 Eb7             Ab7M   Abm6
Ainda sinto teu perfume
                 Gm7   C7
Por essência da paixão
                 Fm7           Gm7      Ab7M
É razão do meu ciúme a saudade    me invade
   Bb7            Eb  Eb5+  Bbm7
Aumentando a solidão
     Eb7           Ab7M    Abm6   
Só quero viver ao teu lado
                 Gm7     C7
Sentindo a mesma emoção
                    Fm7         Gm7    Ab7M
Te amando e sendo amado provando   pecado
      Bb7         Eb   G7
Renascendo de paixão

[Refrão]

          Cm
Vem meu amor
                          F7(9)
Que vontade de te dar um beijo
                    Ab7M
Me perder no seu desejo
    Bb7        Eb    G7
No seu corpo acordar
          Cm
Vem meu amor
                  F7(9)
Tô carente tão sozinho
                 Ab7M
Precisando de carinho
 Bb7           Eb   G7
Vem vamos recomeçar

          Cm
Vem meu amor
                          F7(9)
Que vontade de te dar um beijo
                    Ab7M
Me perder no seu desejo
    Bb7        Eb    G7
No seu corpo acordar
          Cm
Vem meu amor
                  F7(9)
Tô carente tão sozinho
                 Ab7M
Precisando de carinho
 Bb7           Eb   G7
Vem vamos recomeçar

          Cm
Vem meu amor
                          F7(9)
Que vontade de te dar um beijo
                    Ab7M
Me perder no seu desejo
    Bb7        Eb    G7
No seu corpo acordar
          Cm
Vem meu amor
                  F7(9)
Tô carente tão sozinho
                 Ab7M
Precisando de carinho
 Bb7           Eb   G7  Cm
Vem vamos recomeçar

----------------- Acordes -----------------
Ab7M = 1 0 1 1
Abm6 = 1 1 1 3
Bb7 = 3 1 3 3
Bbm = 3 3 2 3
Bbm7 = 3 1 2 3
C7 = 2 3 1 2
Cm = 1 0 1 1
Eb = 5 3 4 5
Eb5+ = 1 0 0 1
Eb7 = 5 3 2 5
F7(9) = 3 2 4 5
Fm = 3 1 1 3
Fm7 = 3 5 4 6
G7 = P3 4 3 5
Gm7 = 5 P3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EssenciaDaPaixaoPage() {
  return (
    <>
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}