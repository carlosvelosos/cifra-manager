import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Legião Urbana - Será

[Intro] C  G  Am  F
        C  G  Am  F

[Solo Intro]

E|-0-------------------0-------------|
B|---3-1-0---------------3-1-0--1----|
G|---------2-0-2------------------0--|
D|-----------------------------------|
A|-----------------------------------|
E|-----------------------------------|

[Primeira Parte]

C            G       Am
  Tire suas mãos de mim
           F         C
Eu não pertenço a você
              G       Am
Não é me dominando assim
          F           C
Que você vai me entender
                  G
Eu posso estar sozinho
Am                    F
   Mas, eu sei muito bem aonde estou
Am                Em
   Você pode até duvidar
F                   G       
  Acho que isso não é amor

( C  F  G )
( C  F  G )
( C  F  G )
( C  F  G )

[Refrão]

 G              Dm
Será só imaginação
 G                  Dm
Será que nada vai acontecer
 G                       Dm
Será que é tudo isso em vão
 G                   Dm      Am
Será que vamos conseguir vencer
  F       G  
Ô ô ô ô ô ô

( C  F  G )
( C  F  G )
( C  F  G )
( C  F  G )

[Segunda Parte]

C                       G
  Nos perderemos entre monstros
Am                    F
   Da nossa própria criação
C                 G
  Serão noites inteiras
Am                      F
   Talvez por medo da escuridão
C                G
  Ficaremos acordados
Am                    F
   Imaginando alguma solução
Am                       Em
   Pra que esse nosso egoísmo
F                    G  
  Não destrua nosso coração

( C  F  G )
( C  F  G )
( C  F  G )
( C  F  G )

[Refrão]

 G              Dm
Será só imaginação
 G                  Dm
Será que nada vai acontecer
 G                       Dm
Será que é tudo isso em vão
 G                   Dm      Am
Será que vamos conseguir vencer
  F       G
Ô ô ô ô ô ô

[Terceira Parte]

    C                 G/B
Brigar pra quê, se é sem querer
     Gm/Bb           Dm
Quem é que vai nos proteger
   C                    G/B
Será que vamos ter que responder
      Gm/Bb
Pelos erros a mais
Dm      
Eu e você

[Final] G  F  G  
        F  G  F

----------------- Acordes -----------------
Am = X 0 2 2 1 0
C = X 3 2 0 1 0
Dm = X X 0 2 3 1
Em = 0 2 2 0 0 0
F = 1 3 3 2 1 1
G = 3 2 0 0 0 3
G/B = X 2 0 0 3 3
Gm/Bb = X 1 0 0 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SeraPage() {
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
