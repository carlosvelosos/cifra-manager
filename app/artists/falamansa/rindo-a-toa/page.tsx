import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Falamansa - Rindo À Toa

[Intro] G  D7  Em  C 
        D7  G  D7
        G  D7  Em  C 
        D7  G  D7

[Primeira Parte]

G          D7               Em
  Tô numa boa, tô aqui de novo
                              C
Daqui não saio, daqui não me movo
          D7                   G
Tenho certeza, esse é o meu lugar
   D7
Ah ah

G          D7                Em
  Tô numa boa, tô ficando esperto
                                C
Já não pergunto se isso tudo é certo
          D7              G
Uso esse tempo pra recomeçar
   D7
Ah ah

[Pré-Refrão]

C         G          D7
  Doeu, doeu, agora não dói
                   Db7
  Não dói, não doi
C             G         D7            Db7
  Chorei, chorei agora não choro mais
      C
Toda mágoa que passei
     G                 G#
É motivo pra comemorar
 A7
Pois se não sofresse assim
             D7
Não tinha razões pra cantar

[Refrão]

 G           D7
Há há há há há
                   Em
Mas eu tô rindo à toa
                                 D7
Não que a vida esteja assim tão boa
           C            D7   G
Mas um sorriso ajuda a melhorar
   D7
Ah ah

G                   D7               Em
E cantando assim parece que o tempo voa
                                D7
Quanto mais triste mais bonito soa
        C          D7     G
Eu agradeço por poder cantar
     D7           G
Lalaia laia laia iô!

( G  D7  Em  C  D7  G  D7 )

[Primeira Parte]

G          D7               Em
  Tô numa boa, tô aqui de novo
                              C
Daqui não saio, daqui não me movo
          D7                   G
Tenho certeza, esse é o meu lugar
   D7
Ah ah

G          D7                Em
  Tô numa boa, tô ficando esperto
                                C
Já não pergunto se isso tudo é certo
          D7              G
Uso esse tempo pra recomeçar
   D7
Ah ah

[Pré-Refrão]

C         G          D7
  Doeu, doeu, agora não dói
                   Db7
  Não dói, não doi
C             G         D7            Db7
  Chorei, chorei agora não choro mais
      C
Toda mágoa que passei
     G                 G#
É motivo pra comemorar
 A7
Pois se não sofresse assim
             D7
Não tinha razões pra cantar

[Refrão]

 G           D7
Há há há há há
                   Em
Mas eu tô rindo à toa
                                 D7
Não que a vida esteja assim tão boa
           C            D7   G
Mas um sorriso ajuda a melhorar
   D7
Ah ah

G                   D7               Em
E cantando assim parece que o tempo voa
                                D7
Quanto mais triste mais bonito soa
        C          D7     G
Eu agradeço por poder cantar
     D7           G
Lalaia laia laia ia!

[Final] G  D7  Em  C 
        D7  G  D7
        G  D7  Em  C  
        D7  G  D7

----------------- Acordes -----------------
A7 = X 0 2 0 2 0
C = X 3 2 0 1 0
D7 = X X 0 2 1 2
Db7 = X 4 3 4 2 X
Em = 0 2 2 0 0 0
G = 3 2 0 0 0 3
G# = 4 3 1 1 1 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function RindoAToaPage() {
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
