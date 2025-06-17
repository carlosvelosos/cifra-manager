import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Marília Mendonça - Te Amo Demais

[Intro] C  G  (Frase 1)
        Dm  F  C9  G  Dm  F

[Primeira Parte]

C9        G
Eu sou assim
       Dm               Am
Nunca soube recitar poesia
     C9               G
Não sei palavras de amor
             Dm
Não sou sedutor
                         Am
Não sei fingir, nem poderia
G↓                      Dm
Eu não tenho ouro nem prata
        F                C9
Mas, o meu maior tesouro eu te dei
     G                    Dm
Só quero seu amor e mais nada
         F
Você precisa entender
      F       C/E  Dm C
É que eu não sei  di_zer

[Refrão]

      (Frase 2)  G      Dm
Só sei que eu te amo demais
              F
Nas noites sozinho
                      C9
É o teu nome que eu chamo
           G      Dm
Baby eu te amo demais
       F                   C9
Eu só sei dizer te amo, te amo

( G  Dm  F  C9 )
( G  Dm  F  C/E  Dm )

[Segunda Parte]

   C9                          G
Palavras valem menos que um olhar
       Dm                     Am
O coração é quem vai te explicar
      C9                  G
Da cabeça aos pés eu vou te beijar
         Dm                Am
Como um sábio na arte de amar

            G                         Dm
Não sei mentir pra conquistar uma mulher
       F                       C9
Daria tudo nesse mundo só pra ter você
      G                       Dm
O destino seja o que Deus quiser
         F
Você precisa entender
      F       C/E  Dm C
É que eu não sei  di_zer

[Refrão Final]

      (Frase 2)  G      Dm
Só sei que eu te amo demais
              F
Nas noites sozinho
                      C9
É o teu nome que eu chamo
           G      Dm
Baby eu te amo demais
       F                   C9
Eu só sei dizer te amo, te amo

                 G      Dm
Só sei que eu te amo demais
              F
Nas noites sozinho
                      C9
É o teu nome que eu chamo
           G      Dm
Baby eu te amo demais
       F         C/E     Dm  C9
Eu só sei dizer te amo, te   amo

(Frase 2) G           Dm
            Te amo demais
F            C9
  Como eu te amo
G            Dm   F  C/E     Dm C9
   Te amo demais,   te amo, te  amo

      (Frase 2)  G      Dm
Só sei que eu te amo demais
              F
Nas noites sozinho
                      C9
É o teu nome que eu chamo
           G      Dm
Baby eu te amo demais
       F         C/E     Dm  C9
Eu só sei dizer te amo, te   amo

( (Frase 2) G  Dm  F  C9  G  Dm )
F    C
  Te amo


----------------- Acordes -----------------
Am = 2 2 1 2
C = 2 0 1 2
C9 = 2 0 1 0
Dm = 3 2 3 3
F = 3 2 1 3
G = 5 4 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TeAmoDemaisPage() {
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
