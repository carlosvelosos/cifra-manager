import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `
Grupo Revelação - Fala Baixinho (Shiii)

[Intro] Fm  Fm5+  Fm6  Fm5+  Fm  Fm5+  Fm6  Fm5+

(Parte 1)

(Parte 2)

         Fm                             Fm5+             
Xiii... fala baixinho que ninguém pode saber que a gente 
     Fm6  Fm5+
tá aqui
          Fm                          Fm5+            Fm6 
Xiii... vamos com calma, devagar, que desse jeito ninguém 
  Bbm  Bm
vai dormir
 Cm7(5-)                                      F7
Sabe que a gente não escolhe a hora e nem lugar

Junta a fome com a vontade de comer
 Bbm                     Bbm/Ab            Gm5(b5)
Você me olha e morde os lábios pra me seduzir
                  C7               Fm Fm5+
Acende a luz pra ver desejo em minha cara
                  Fm6                    Fm5+             
Xiii... segura a fera tem que ser devagarinho pra ninguém 
Fm Fm5+
ouvir
                   Fm6                   Fm5+           Fm
Xiii... vou pôr a mão na tua boca pro rugido não escapulir
               Eb7      Ab              C7        F7
Se alguém nos pega é sacanagem, quebrar o clima dessa 
viagem
         G#7                C#
O nosso filme não pode queimar você
            Cm                      Bbm                   
Mas quando bate a tentação a gente fica sem noção e perde 
   C7
a linha
              Fm
Sem querer saber
Db6(9)                  Cm         Bbm  Bbm/Ab  Gm5(b5)  
Aí é outra dimensão, quatro paredes e nós dois... e nada 
C7
fica pra depois

Fm                       Ab7(4)     Db6(9)              
  Cara na cara, pele na pele,...... suor pingando, o 
  C7
corpo em febre
 Gm5(b5)               C7          Fm     C7
Você em transe, sussurrando, segurando a voz
       Fm   Ab7(4)    Db6(9)                C7       Fm
Eu viajando no céu da boca,você rasgando a minha roupa de 
baixo dos lençóis


----------------- Acordes -----------------
Ab = 6 5 4 6
Ab7(4) = P1 1 2 4
Bbm = 3 3 2 3
Bbm/Ab = P6 6 6 8
Bm = 4 4 3 4
C# = P6 6 6 6
C7 = 2 3 1 2
Cm = 1 0 1 1
Cm7(5-) = 4 3 P1 1
Db6(9) = 3 3 2 1
Eb7 = 5 3 2 5
F7 = 3 2 P1 1
Fm = 3 1 1 3
Fm5+ = 3 1 2 3
Fm6 = 3 1 1 0
G#7 = P4 5 4 6
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FalaBaixinhoShiiiPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}