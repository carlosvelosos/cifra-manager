import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `
Grupo Revelação - Trilha do Amor

     F#m7(11)
Foi lá na Bahia de São Salvador
            Am6
Peguei um Axé nos Encantos de lá
                G#m7
Voltei pro meu rio do meu redentor
              G#m7(5-)           C#7
Pra ver meu amor que é lá de Irajá
                A7M             B7
To cheio de saudade do nosso calor
                G#m7              G#7(5+)
E tudo que eu quero é chegar e poder
 C#m7(9)     G#m7(5-)   C#7
Te amar, te Abraçar
            F#m7(11)
Matar a vontade que tanto senti
             Am6
Sem o teu carinho não da pra ficar
              G#m7
Rezei para o Nosso senhor do Bonfim
              G#m7(5-)         C#7
E trouxe uma fita pra te abençoar
               A7M                B7
E tive a certeza que a gente é assim
            G#m7                G#7(5+)
Um longe do Outro não dá pra ficar
 C#m7(9)       G#m7(5-) C#7
Não dá pra separar

           F#m7(11)
Eu vou seguindo a trilha do amor
               Am6
Enquanto essa paixão me guiar
           G#m7
Deixa o coração me levar
         G#m7(5-)          C#7
Deixa o coração me levar
           F#m7(11)
Eu vou seguindo a trilha do amor
            Am6
Onde você quiser vou estar
              G#m7                      G#m7(5-) C#7
Sem você não da pra ficar sem você não da pra ficar
           F#m7(11)
Eu vou seguindo a trilha do amor
               Am6
Enquanto essa paixão me guiar
           G#m7
Deixa o coração me levar
         G#m7(5-)          C#7
Deixa o coração me levar
           F#m7(11)
Eu vou seguindo a trilha do amor
            Am6
Onde você quiser vou estar
              G#m7                      G#m7(5-) C#7
Sem você não da pra ficar sem você não da pra ficar

     F#m7(11)
Foi lá na Bahia de São Salvador
            Am6
Peguei um Axé nos Encantos de lá
                G#m7
Voltei pro meu rio do meu redentor
              G#m7(5-)           C#7
Pra ver meu amor que é lá de Irajá
                A7M             B7
To cheio de saudade do nosso calor
                G#m7              G#7(5+)
E tudo que eu quero é chegar e poder
 C#m7(9)     G#m7(5-)   C#7
Te amar, te Abraçar
            F#m7(11)
Matar a vontade que tanto senti
             Am6
Sem o teu carinho não da pra ficar
              G#m7
Rezei para o Nosso senhor do Bonfim
              G#m7(5-)         C#7
E trouxe uma fita pra te abençoar
               A7M                B7
E tive a certeza que a gente é assim
            G#m7                G#7(5+)
Um longe do Outro não dá pra ficar
 C#m7(9)       G#m7(5-) C#7
Não dá pra separar

           F#m7(11)
Eu vou seguindo a trilha do amor
               Am6
Enquanto essa paixão me guiar
           G#m7
Deixa o coração me levar
         G#m7(5-)          C#7
Deixa o coração me levar
           F#m7(9)
Eu vou seguindo a trilha do amor
            Am6
Onde você quiser vou estar
              G#m7                      G#m7(5-) C#7
Sem você não da pra ficar sem você não da pra ficar
           F#m7(11)
Eu vou seguindo a trilha do amor
               Am6
Enquanto essa paixão me guiar
           G#m7
Deixa o coração me levar
         G#m7(5-)          C#7
Deixa o coração me levar
           F#m7(11)
Eu vou seguindo a trilha do amor
            Am6
Onde você quiser vou estar
              G#m7                      G#m7(5-) C#7
Sem você não da pra ficar sem você não da pra ficar

----------------- Acordes -----------------
A7M = 2 1 2 2
Am6 = 4 2 1 2
B7 = 1 2 0 1
C#7 = 3 4 2 3
C#m7(9) = 1 4 2 2
F#m7(11) = 11 11 12 14
F#m7(9) = 6 9 7 7
G#7(5+) = 4 1 1 2
G#m7 = 6 P4 4 4
G#m7(5-) = 0 1 0 0
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TrilhaDoAmorPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}