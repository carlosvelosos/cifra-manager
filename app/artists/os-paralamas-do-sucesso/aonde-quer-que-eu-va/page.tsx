import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Os Paralamas do Sucesso - Aonde Quer Que Eu Vá

[Primeira Parte]

[Riff 1]

E|-----------------------------------|
B|-----------------------------------|
G|-----------------------------------|
D|-----------------------------------|
A|-0h2-------------------------------|
E|-----------------------------------|

[Riff 2]

E|-----------------------------------|
B|-----------------------------------|
G|-2p0-------0-----------------------|
D|-0---2-0h2-------------------------|
A|-----------------------------------|
E|-----------------------------------|

[Riff 3]

E|-----------------------------------|
B|-----------------------------------|
G|-----------------------------------|
D|-----------------------------------|
A|-0-2-3-----------------------------|
E|-----------------------------------|

Em7             G
    Olhos fechados
Em7               G
    Pra te encontrar
Em7                     G
    Não estou ao seu lado
Em7               G
    Mas posso sonhar

[Refrão]

C9                      Am7
   E aonde quer que eu vá
        G  D11/F#  Em7
Levo você no    olhar
C9                    Am7
   Aonde quer que eu vá
                   G  D11/F#  Em7
Aonde quer que eu vá

[Riff 4]

E|--------------------------------|
B|--------------------------------|
G|--------------------------------|
D|-----0--------------------------|
A|-0h2----------------------------|
E|-------0------------------------|

[Segunda Parte]

Em7                 G
    Não sei bem certo
Em7             G
    Se é só ilusão
Em7                  G
    Se é você já perto
Em7            G
    Se é intuição

[Refrão]

C9                      Am7
   E aonde quer que eu vá
        G  D11/F#  Em7
Levo você no    olhar
C9                    Am7
   Aonde quer que eu vá
                   G  D11/F#  Em7
Aonde quer que eu vá

[Terceira Parte]

A9           F#m
      Longe daqui
            C#m
Longe de tudo
      D                A9
Meus sonhos vão te buscar
           F#m
Volta pra mim
                C#m
Vem pro meu mundo
    D                 A9
Eu sempre vou te esperar
     F#m     C#m  D  C  B7
Larará, lararára

[Segunda Parte]

Em7                 G
    Não sei bem certo
Em7             G
    Se é só ilusão
Em7                  G
    Se é você já perto
Em7            G
    Se é intuição

[Refrão Final]

C9                      Am7
   E aonde quer que eu vá
        G  D11/F#  Em7
Levo você no    olhar
C9                    Am7
   Aonde quer que eu vá
                   G  D11/F# Em7
Aonde quer que eu vá

 C9      Am7     G  D11/F#  Em7
Lá, larará, larará
 C9      Am7     G  
Lá, larará, larará
 D11/F#            Em7
Aonde quer que eu vá

 C9      Am7     G  D11/F#  Em7
Lá, larará, larará
 C9      Am7     G  D11/F#   Em7
Lá, larará, larará        larárá
 C9      Am7     G  
Lá, larará, larará
 D11/F#            Em7
Aonde quer que eu vá

----------------- Acordes -----------------
Capotraste na 5ª casa
D9*  = X 0 2 2 0 0 - (*G9 na forma de D9)
Dm7*  = X 0 2 0 1 0 - (*Gm7 na forma de Dm7)
E7*  = X 2 1 2 0 2 - (*A7 na forma de E7)
F*  = X 3 2 0 1 0 - (*A# na forma de F)
F#m*  = X 4 6 6 5 4 - (*Bm na forma de F#m)
F9*  = X 3 2 0 3 3 - (*A#9 na forma de F9)
G*  = X X 0 2 3 2 - (*C na forma de G)
G11/B*  = 2 X X 2 3 3 - (*C11/E na forma de G11/B)
Am7*  = 0 2 2 0 3 3 - (*Dm7 na forma de Am7)
Bm*  = 2 4 4 2 2 2 - (*Em na forma de Bm)
C*  = 3 2 0 0 3 3 - (*F na forma de C)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AondeQuerQueEuVaPage() {
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
