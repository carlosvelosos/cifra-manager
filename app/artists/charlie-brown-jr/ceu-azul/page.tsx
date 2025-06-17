import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Charlie Brown Jr. - Céu Azul

[Intro] Em7(9)  D  Bm  A11

[Dedilhado - Intro]

Parte 1 de 2
   Em7(9)          D
E|------------------------------------------|
B|------------------------------------------|
G|----12---12---------12-------12-12--------|
D|----13---13---------13-------13-13--------|
A|------------------------------------------|
E|--0----0----0----11----11-11-------0------|
    ↓  ↑  ↓ ↑  ↓    ↓  ↑   ↓  ↓  ↑  ↑  ↓

Parte 2 de 2
   Bm           A11
E|------------------------------------------|
B|------------------------------------------|
G|----8---8--------7-----8-7----------------|
D|----0---0--------0---------0--------------|
A|------------------------------------------|
E|--8---8---0----6---6-6-------0------------|
    ↓ ↑  ↓ ↑ ↓    ↓ ↑ ↓ ↓  ↑ ↑ ↑ ↓

[Primeira Parte] 

         Em7(9)               D
Tão natural quanto a luz do dia
             Bm      
Mas que preguiça boa 
         A11
Me deixa aqui a toa
          Em7(9)                D
Hoje ninguém vai estragar meu dia
           Bm         
Só vou gastar energia 
        A11
Pra beijar sua boca
Em7(9)                   
       Fica comigo então   
D
  Não me abandona não
Bm  A11                  Em7(9)
        Alguém te perguntou 
                     D
Como é que foi seu dia
       Bm         
Uma palavra amiga
     A11
Uma notícia boa
          Em7(9)          D
Isso faz falta no dia a dia
               Bm  
A gente nunca sabe 
                   A11
Quem são essas pessoas

[Pré-Refrão] 

Em                      Bm11
   Eu só queria te lembrar
            A9
Que aquele tempo 

Eu não podia fazer mais por nós
             G   
Eu estava errado 
                              A9
E você não tem que me perdoar
Em                          Bm11
   Mas também quero te mostrar
               A9
Que existe um lado bom nessa história
 G                                  A9
Tudo que ainda temos a compartilhar

[Refrão] 

     Em7(9)    D
E viver, e cantar
       Bm                A11
Não importa qual seja o dia
         Em7(9)  D
Vamos viver, vadiar
         Bm                 A11
O que importa é nossa alegria
         Em7(9)    D
Vamos viver, e cantar
       Bm                A11
Não importa qual seja o dia
         Em7(9)  D
Vamos viver, vadiar
         Bm                 A11
O que importa é nossa alegria

[Primeira Parte] 

         Em7(9)               D
Tão natural quanto a luz do dia
             Bm               A11
Mas que preguiça boa me deixa aqui a toa
          Em7(9)                D
Hoje ninguém vai estragar meu dia
           Bm                 A11
Só vou gastar energia pra beijar sua boca

[Pré-Refrão] 

Em                      Bm11
   Eu só queria te lembrar
            A9
Que aquele tempo 

Eu não podia fazer mais por nós
             G   
Eu estava errado 
                              A9
E você não tem que me perdoar
Em                          Bm11
   Mas também quero te mostrar
               A9
Que existe um lado bom nessa história
 G                                  A9
Tudo que ainda temos a compartilhar

[Refrão] 

     Em7(9)    D
E viver, e cantar
       Bm                A11
Não importa qual seja o dia
         Em7(9)  D
Vamos viver, vadiar
         Bm                 A11
O que importa é nossa alegria
         Em7(9)    D
Vamos viver, e cantar
       Bm                A11
Não importa qual seja o dia
         Em7(9)  D
Vamos viver, vadiar
         Bm                 A11
O que importa é nossa alegria

[Final] 

         Em7(9)
Tão natural quanto a luz do dia

----------------- Acordes -----------------
Capotraste na 1ª casa
A#11*  = 5 X 0 6 X X - (*B11 na forma de A#11)
A#9*  = 5 7 7 6 0 0 - (*B9 na forma de A#9)
Cm*  = X 2 4 4 3 2 - (*C#m na forma de Cm)
Cm11*  = X 2 4 4 3 0 - (*C#m11 na forma de Cm11)
D#*  = 10 X 12 11 X X - (*E na forma de D#)
Fm*  = 0 2 2 0 0 0 - (*F#m na forma de Fm)
Fm7(9)*  = 0 X 12 11 X X - (*F#m7(9) na forma de Fm7(9))
G#*  = 3 5 5 4 0 X - (*A na forma de G#)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CeuAzulPage() {
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
