import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Bruno e Marrone - Boate Azul

[Intro] Fm  Bb  Eb  Cm
        Fm  G  Cm  C7
        Fm  Bb  Eb  Ab
        Fm  G  Cm

[Primeira Parte]

            Cm
Doente de amor procurei remédio
           Bb
Na vida noturna
               Ab
Com a flor da noite
                           G
Em uma boate aqui na zona sul

           Fm
A dor do amor é com outro amor
             Cm
Que a gente cura
             G
Vim curar a dor desse mal de amor
           Cm  C7
Na boate azul
            Fm
E quando a noite vai se agonizando
                Cm
No clarão da aurora
      G
Os integrantes da vida noturna
             Cm  C7
Se foram dormir
             Fm
E a dama da noite que estava comigo
              Cm
Também foi embora
                Ab
Fecharam-se as portas
            G
Sozinho de novo
          C
Tive que sair

[Refrão]

C              G
  Sair de que jeito
              F              C
Se nem sei o rumo para onde vou
                                 G
Muito vagamente me lembro que estou
         F                 C
Em uma boate aqui na zona sul
           G
Eu bebi demais
          F                  C
E não consigo me lembrar sequer
                            G
Qual era o nome daquela mulher
           F        G      C  C7
A flor da noite na boate azul

[Solo] Fm  Bb  Eb  Cm
       Fm  G  Cm  C7

[Primeira Parte]

            Fm
E quando a noite vai se agonizando
                Cm
No clarão da aurora
      G
Os integrantes da vida noturna
             Cm  C7
Se foram dormir
             Fm
E a dama da noite que estava comigo
              Cm
Também foi embora
                Ab
Fecharam-se as portas
            G
Sozinho de novo
          C
Tive que sair

[Refrão Final]

C              G
  Sair de que jeito
              F              C
Se nem sei o rumo para onde vou
                                 G
Muito vagamente me lembro que estou
         F                 C
Em uma boate aqui na zona sul
           G
Eu bebi demais
          F                  C
E não consigo me lembrar sequer
                            G
Qual era o nome daquela mulher
           F        G      C  C7
A flor da noite na boate azul

             G
Sair de que jeito
              F              C
Se nem sei o rumo para onde vou
                                 G
Muito vagamente me lembro que estou
         F                 C
Em uma boate aqui na zona sul
           G
Eu bebi demais
          F                  C
E não consigo me lembrar sequer
                            G
Qual era o nome daquela mulher
           F        G      C
A flor da noite na boate azul


----------------- Acordes -----------------
Ab = 6 5 4 6
Bb = P3 3 3 3
C = 2 0 1 2
C7 = 2 3 1 2
Cm = 1 0 1 1
Eb = 5 3 4 5
F = 3 2 1 3
Fm = 3 1 1 3
G = 5 4 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function BoateAzulPage() {
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
