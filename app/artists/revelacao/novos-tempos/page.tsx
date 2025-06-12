import CifraDisplay from "@/components/cifra-display";

const cifra = `
Grupo Revelação - Novos Tempos

[Intro]

D#m7/5-               G#7
 O ar que se respira agora inspira novos tempos
  C#m7/5-                  F#7
Os sonhos meus e os teus decoram nosso apartamento
  Bm7/5-                 E7
Lá fora a sorte entrando enquanto aqui
                        A      A5+
Reflete a lua em nossa cama
  A6       A7
E a vida segue assim
     D#m7/5-         G#7
Tão docemente vista da sacada da varanda
   C#m7/5-         F#7
Eterna,plena,adormecida sobre as ondas
     Bm7/5-          E7
E eu vizinho de uma estrela
                               A       A5+
Adoro vê-la iluminando o meu pedaço
    A6         A7           E/G#
Foi Deus quem me mandou seguir seus passos
                            Gº
Pensando bem ,a lua tem seus traços
  A7                       D
E o céu desaba em nosso corredor
  Dm6    A          A7  
Esse é o nosso amor
D  Dm6     A    
Esse é o nosso amor
          E
Lençol de fogo no frio
               D
A porta aberta pro cio
   A  A5+  A6  A7
Brincar de amor

----------------- Acordes -----------------
A = P2 2 2 2
A5+ = 11 10 10 11
A6 = 2 2 2 4
A7 = 2 0 2 2
Bm7/5- = 1 2 0 3
C#m7/5- = 3 4 2 5
D = 4 2 3 4
D#m7/5- = 1 2 2 1
Dm6 = 0 2 0 3
E = 2 1 0 2
E7 = 2 1 0 0
F#7 = 4 3 P2 2
G#7 = P4 5 4 6
Gº = 5 3 P2 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function NovosTemposPage() {
  return <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />;
}