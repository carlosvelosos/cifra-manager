import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Natiruts - Sorri, Sou Rei

[Intro] Dm7  G  Am7 
        Dm7  G  Am7 
        Dm7  G  Am7 
        Dm7  G  Am7 

Parte 1 de 3

Parte 2 de 3

Parte 3 de 3

[Primeira Parte]

Dm7
    Quando a esperança 
              G
De uma noite de amor
         Am7
Lhe trouxer vontade 

Para viver mais
Dm7
    E a promessa que 
          G
A chance terminou
     Am7
É bobagem 

É melhor deixar pra trás

[Segunda Parte]

          Dm7
Eu tô cansado de sofrer
          G
Quero dançar, sentir calor
     Am7
E poder só olhar 

O universo em torno de você
              Dm7
Brilhando em vida
            G
Sorrindo à toa
              Am7
Só vibrando amor e paz
         Dm7               G
Sinto a noite, penso em você
               Am7
Lembro como é bom amar

[Refrão]

Quando você se foi
    Dm7     G       Am7
Chorei, chorei, chorei

Agora que voltou
    Dm7    G       Am7
Sorri, sorri, sou rei

Quando você se foi
    Dm7     G       Am7
Chorei, chorei, chorei

Agora que voltou
    F      G       Am7
Sorri, sorri, sou rei

[Passagem]

Parte 1 de 4

Parte 2 de 4

Parte 3 de 4

Parte 4 de 4

[Terceira Parte]

[Riff Final]

Parte 1 de 4

Parte 2 de 4

Parte 3 de 4

Parte 4 de 4

Bb7M
     Saiba que o simples 
                 A7
Perfume de uma flor
      Dm7(9)
Pode vir a ser 

Um grande amor na sua vida
Bb7M
     Não gaste palavras 
  A7
Pra viver
       Dm7(9)
De iludir os seus sonhos

Tão raros com mentiras
Bb7M                     A7
     Não maltrate o coração
             Dm7(9)
De quem dedicou 

O seu sorriso as suas batidas
Bb7M                      A7
     E será livre pra sentir
                     Dm7(9)
Os sonhos de uma paixão
    A7
Nascer uma história linda

[Quarta Parte]

 Dm7
Diga que me adora
 Bb7                A7
Deixa o orgulho de lado
        Dm7
Porque já está na hora
    Bb7            A7
Da gente se encontrar
            Dm7
E sermos um

Mas não demora 
  Bb7
Que é pra chama 
    A7          Dm7
Não    desencantar
 Bb7   A7    Gm
Se esvair no ar 
   C                F
E só restar lembranças 

[Repete a Segunda Parte]

          Dm7
Eu tô cansado de sofrer
          G
Quero dançar, sentir calor
     Am7
E poder só olhar 

O universo em torno de você
              Dm7
Brilhando em vida
            G
Sorrindo à toa
              Am7
Só vibrando amor e paz
        Dm7
Vejo a lua
           G
Lembro do sonho
            Am7
Torço pra realizar
         Dm7               G
Sinto a noite, penso em você
               Am7
Lembro como é bom amar

[Refrão]

Quando você se foi
    Dm7     G       Am7
Chorei, chorei, chorei

Agora que voltou
    Dm7    G       Am7
Sorri, sorri, sou rei

Quando você se foi
    Dm7     G       Am7
Chorei, chorei, chorei

Agora que voltou
    F      G       Am7
Sorri, sorri, sou rei

[Final] Dm7  G  Am7 
        Dm7  G  Am7 
        Dm7  G  Am7 
        Dm7  G  Am7 
        Dm7  G  Am7 

----------------- Acordes -----------------
A7 = X 0 2 0 2 0
Am = X 0 2 2 1 0
Am7 = 5 7 5 5 5 5
Am7(11) = X 0 5 5 3 X
Bb7 = 6 8 6 7 6 6
Bb7M = 6 X 7 7 6 X
C = X 3 P5 P5 P5 X
Dm7 = X 5 7 5 6 5
Dm7(9) = X 5 3 5 5 X
F = 1 3 3 2 1 1
G = 3 5 5 4 3 3
Gm = 3 5 5 3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SorriSouReiPage() {
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
