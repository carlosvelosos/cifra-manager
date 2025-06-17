import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Charlie Brown Jr. - Dias de Luta, Dias de Glória

[Intro]

[Tab - Intro]

Parte 1 de 4
    C7M            Am9
E|----------------------------------|
B|-------0--------------1-----------|
G|---0-----0---0----4-----4----0----|
D|----------------------------------|
A|-3---3-----3----0---0------0------|
E|----------------------------------|

Parte 2 de 4
   Em                     H.N......
E|-------------------------12----12-|
B|---------0-------------7----12----|
G|---0--------0----0---0------------|
D|----------------------------------|
A|----------------------------------|
E|-0---0---------0---0--------------|

Parte 3 de 4
     C7M
E|----------------------------------|
B|--------0-------0-------1---------|
G|---0-------0--------4-----4---0---|
D|----------------------------------|
A|-3---3--------3---0---0-----0-----|
E|----------------------------------|

Parte 4 de 4
    Em              G
E|----------------------------------|
B|---------0------------------------|
G|-----0-----0---0---0---2---0------|
D|-0h2---2-----2--------------------|
A|----------------------------------|
E|-----------------3---3---3--------|

C7M  Am9  Em
         Canto a minha vida com orgulho

[Primeira Parte]

Parte 1 de 4
    C7M            Am9
E|--------------------------------|
B|-------0--------------1---------|
G|---0-----0---0----4-----4----0--|
D|--------------------------------|
A|-3---3-----3----0---0------0----|
E|--------------------------------|

Parte 2 de 4
    Em
E|--------------------------------|
B|--------0--------------0--------|
G|---0-------0---0---0-----0---0--|
D|--------------------------------|
A|--------------------------------|
E|-0---0-------0---0---0-----0----|

Parte 3 de 4 
    C7M
E|--------------------------------|
B|--------0-------0-------1-------|
G|---0-------0--------4-----4---0-|
D|--------------------------------|
A|-3---3--------3---0---0-----0---|
E|--------------------------------|

Parte 4 de 4
    Em              G
E|--------------------------------|
B|---------0----------------------|
G|-----0-----0---0---0---2---0----|
D|-0h2---2-----2------------------|
A|--------------------------------|
E|-----------------3---3---3------|

          C7M           Am9
Na minha vida tudo acontece
                         Em                  
Mas quanto mais a gente rala

Mais a gente cresce
 C7M            
Hoje estou feliz
              Am9
Porque eu sonhei com você
       Em             
E amanhã posso chorar 
           G
Por não poder te ver

    C7M              
Mas    o seu sorriso 
      Am9
Vale mais que um diamante
      Em                    
Se você vier comigo aí nós vamos adiante

    C7M             
Com a cabeça erguida
      Am9
E mantendo a fé em Deus
       Em           
O seu dia mais feliz 
           G
Vai ser o mesmo que o meu

   C7M                     Am9
A vida me ensinou a nunca desistir
        Em
Nem ganhar, nem perder

Mas procurar evoluir

 C7M                       Am9
Podem me tirar tudo o que tenho
        Em                       G
Só não podem me tirar as coisas boas
                          C7M
Que eu já fiz pra quem eu amo
                Am9   
Eu sou feliz e canto
                       Em
E o universo é uma canção
              G
E eu vou que vou

[Refrão]

    C7M               Am9
Histórias, nossas histórias
         Em
Dias de luta, dias de glória

    C7M               Am9
Histórias, nossas histórias
         Em             G
Dias de luta, dias de glória 

    C7M               Am9
Histórias, nossas histórias
         Em             G
Dias de luta, dias de glória 

    C7M               Am9
Histórias, nossas histórias
         Em             G
Dias de luta, dias de glória 

[Segunda Parte]

          C7M                   Am9
Oh minha gata, morada dos meus sonhos
      Em
Todo dia, se pudesse eu ia estar com você

       C7M                      Am9
Já te via muito antes nos meus sonhos
         Em               
Eu procurei a vida inteira 
        G
Por alguém como você

             C7M                      Am9
Por isso eu canto a minha vida com orgulho
         Em
Com melodia, alegria e barulho

    C7M                   Am9
Eu sou feliz e rodo pelo mundo
          Em                     G
Sou correria mas também sou vagabundo

     C7M                  Am9
Mas hoje dou valor de verdade
            Em                   G
pra minha saúde, pra minha liberdade
     C7M                      Am9
Que bom te encontrar nessa cidade
       Em
Esse brilho intenso me lembra você

[Refrão]

    C7M               Am9
Histórias, nossas histórias
         Em             G
Dias de luta, dias de glória

    C7M               Am9
Histórias, nossas histórias
         Em
Dias de luta, dias de glória 

    C7M               Am9
Histórias, nossas histórias
         Em             G
Dias de luta, dias de glória

    C7M               Am9
Histórias, nossas histórias
         Em
Dias de luta, dias de glória 

[Final]

 C7M            
Hoje estou feliz
     Am9
Acordei com o pé direito
    Em              
Eu vou fazer de novo
       G                  C7M
Vou fazer muito bem feito
         Am9
Sintonia,    telepatia
 Em
Comunicação pelo cortéx
          
Bum baibai

( C7M  Am9  Em  G )
( C7M  Am9  Em )

----------------- Acordes -----------------
G#m9*  = X 0 2 4 1 0 - (*Gm9 na forma de G#m9)
B7M*  = X 3 2 0 0 X - (*A#7M na forma de B7M)
D#m*  = 0 2 2 0 0 0 - (*Dm na forma de D#m)
F#*  = 3 2 0 0 3 3 - (*F na forma de F#)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DiasDeLutaDiasDeGloriaPage() {
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
