import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `CPM 22 - Um Minuto Para o Fim do Mundo

[Intro] A5  C5  G5  F5
        A5  C5  G5  F5 

[Primeira Parte]

A5             C5  G5
   Me sinto só
                F5
Mas quem é que nunca 
                A5
Se sentiu assim
                 C5
Procurando um caminho 
                G5     F5
Pra seguir uma direção
          A5
Respostas

      C5                 G5
Um minuto para o fim do mundo
          F5           A5
Toda sua vida em 60 segundos 
                 C5
Uma volta no ponteiro do relógio 
     G5   F5
Pra viver

[Pré-Refrão]

O tempo corre contra mim

Sempre foi assim 
              A5  F5
E sempre vai ser
                       C5
Vivendo apenas pra vencer 
          G5            A5  F5
A falta que me faz você

             C5
De olhos fechados 
               G5         A5  F5
Eu tento esconder a dor agora
             C5
Por favor entenda 
       G5                 C5
Eu preciso ir embora porque

[Refrão]

                    G5
Quando estou com você
           F5       C5
Sinto meu mundo acabar
                          G5
Perco o chão sob os meus pés
                        C5
Me falta o ar pra respirar

            G5
E só de pensar 
                       F5
Em te perder por um segundo
           G5
Eu sei que isso é o fim do mundo

[Primeiro Solo] C5  G5  A5  F5
                C5  G5  A5  F5

[Terceira Parte]

A5  F5                        C5
       Volto o relógio para trás
         G5          A5  F5
Tentando adiar o fim
                     C5            G5
Tentando esconder o medo de te perder
                      A5  F5
Quando me sinto assim

             C5
De olhos fechados 
              G5          A5  F5
Eu tento enganar meu coração
              C5
Fugir pra outro lugar 
       G5                 C5
Em uma outra direção porque

[Refrão]

                    G5
Quando estou com você
           F5       C5
Sinto meu mundo acabar
                          G5
Perco o chão sob os meus pés
                        C5
Me falta o ar pra respirar

            G5
E só de pensar 
                       F5
Em te perder por um segundo
           G5
Eu sei que isso é o fim do mundo

                    G5
Quando estou com você
           F5       C5
Sinto meu mundo acabar
                          G5
Perco o chão sob os meus pés
                        C5
Me falta o ar pra respirar

            G5
E só de pensar 
                       F5
Em te perder por um segundo
           G5
Eu sei que isso é o fim do mundo

[Segundo Solo] C5  G5  A5

[Final]

           F5
Eu sei que isso 
               C5  G5  A5
É o fim do mundo
           F5
Eu sei que isso é o fim

Eu sei que isso é o fim
                               C5
Eu sei que isso é o fim do mundo

----------------- Acordes -----------------
A5 = X 0 P2 2 X X
C5 = X 3 5 5 X X
F5 = 1 3 3 X X X
G5 = 3 5 5 X X X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function UmMinutoParaOFimDoMundoPage() {
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
