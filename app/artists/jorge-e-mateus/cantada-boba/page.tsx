import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Jorge & Mateus - Cantada Boba

[Tab - Intro]

E|------------------------------------------|
B|-1/3--3--3--3--3--3--5p3--1-----3--1------|
G|-----------------------------2------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

   F                    C 
Falaram pra mim que eu sou 
            Am7
Seletivo demais
               G   
Que, pra pegar eu
                         F
Tem que ter uma lábia a mais
           C              Am7
Eu não discordo dessa conversa
                G 
Eu sou difícil mesmo
                    F
Mas pra quem não me interessa
      C                       G
Quem tem moral comigo não tá nessa festa

[Refrão]

                    F
Você me ganha numa cantada boba
                        C
Minha maior fraqueza é sua voz no ouvido
                        Am7
Pra tirar minha roupa, você sabe a brecha

O atalho, o caminho
    G
E pra levantar da sua cama é um sacrifício

                    F
Você me ganha numa cantada boba
                        C
Minha maior fraqueza é sua voz no ouvido
                        Am7
Pra tirar minha roupa, você sabe a brecha

O atalho, o caminho
    G
E pra levantar da sua cama é um sacrifício
                       F
Você me ganha numa cantada boba

[Primeira Parte]

   F                    C 
Falaram pra mim que eu sou 
            Am7
Seletivo demais
               G   
Que, pra pegar eu
                         F
Tem que ter uma lábia a mais
           C              Am7
Eu não discordo dessa conversa
                G 
Eu sou difícil mesmo
                    F
Mas pra quem não me interessa
      C                       G
Quem tem moral comigo não tá nessa festa

[Refrão]

                    F
Você me ganha numa cantada boba
                        C
Minha maior fraqueza é sua voz no ouvido
                        Am7
Pra tirar minha roupa, você sabe a brecha

O atalho, o caminho
    G
E pra levantar da sua cama 

                    F
Você me ganha numa cantada boba
                        C
Minha maior fraqueza é sua voz no ouvido
                        Am7
Pra tirar minha roupa, você sabe a brecha

O atalho, o caminho
    G                               
E pra levantar da sua cama é um sacrifício

[Riff]

[Tab - Riff]

E|------------------------------------------|
B|-1/3--3--3--3--3--3--5p3--1-----3--1------|
G|-----------------------------2------------|
D|------------------------------------------| (2x)
A|------------------------------------------|
E|------------------------------------------|

[Refrão Final]

F             C
Um sacrifício
                        Am7
Pra tirar minha roupa, você sabe a brecha

O atalho, o caminho
    G
E pra levantar da sua cama é um sacrifício

                    F
Você me ganha numa cantada boba
                        C
Minha maior fraqueza é sua voz no ouvido
                        Am7
Pra tirar minha roupa, você sabe a brecha

O atalho, o caminho
    G
E pra levantar da sua cama é um sacrifício

----------------- Acordes -----------------
Capotraste na 1ª casa
A#m7*  = X 0 2 0 1 0 - (*Bm7 na forma de A#m7)
C#*  = X 3 2 0 1 0 - (*D na forma de C#)
F#*  = 1 3 3 2 1 1 - (*G na forma de F#)
G#*  = 3 2 0 0 0 3 - (*A na forma de G#)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CantadaBobaPage() {
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
