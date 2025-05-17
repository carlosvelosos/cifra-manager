import CifraDisplay from "@/components/cifra-display";

const cifra = `
Zeca Pagodinho - O Dono da Dor


 G           Bm
Queria a felicidade
C           Bm
Não pra me apaixonar
    E7               Am       D7     G    D7
Por medo desse amor bonito me fazer chorar
G             C           G  C
  Que fazer com meu coração
G        C                 Bm    G7
  Paixão chegou sem dizer nada
C                    Bm       G7
  E ensinou pro meu viver
C                D7              G
  Que o dono da dor sabe quanto dói
           Am           G
Tem jeito não, o peito rói
          D7          G
E só quem amou pode entender
          Am7      G
O poder de fogo da paixão
   D7
Porque
G             Bm
A realidade é dura
C                G
Mas é aí que se cura
   Em           Am7    D7         G   D7
Ninguém pode imaginar o que não viveu
   G         Bm
Queria felicidade
C             G
Não pra me apaixonar
    G#o               D7              G    Am7
Por medo desse amor bonito me fazer chorar
       G               Am
Eu não sabia, óh! Senhor
           Bm7           E7
Das artimanhas do amor
Am7           D7       G  Am
Caí nas garras da sedução
   G             Am
Tá doendo demais
        Bm7         E7
Mexendo com minha paz
   Am         D7     G     D7
Amarga e doce tentação

----------------- Acordes -----------------
Am = 2 2 1 2
Am7 = 7 P5 5 5
Bm = 4 4 3 4
Bm7 = 4 2 3 4
C = 2 0 1 2
D7 = 4 2 1 4
E7 = 2 1 0 0
Em = 5 4 5 5
G = 5 4 3 5
G7 = P3 4 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {
  return <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />;
}
