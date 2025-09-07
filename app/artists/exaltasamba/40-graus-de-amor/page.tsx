import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Exaltasamba - 40 Graus de Amor

[Intro] G#7+ G#° F/G D/F#
  
 Fm9      Bb7(13)    Fm7   Bb7   C9
 Meu coração é o teu lugar 
 G/B      Am7       F/G
Meu coração quer te abrigar 
C9  Am7/11     G#7+   F/G    C9
Eu te amo tanto  Preciso de você 
C9     C9/E      F7+     Bb7(13)    Dm7
Eu te amo tanto   Meu mundo é você 
    Em7   Fm7 Bb7(13)Bb7  G#7+         Bb/G#
Lá fora  não  existe amor  sincero como o meu 
F/G
Amor 
    C9   C9/E         Fm7         Bb7(13) Bb7
Eu sei  tão puro e cheio de emoção 
    G#7+                  Bb/G#
Eu sei     nós dois somos iguais 
            Dm7   Dm7/A     Dm7/G       F/G
Os nossos ideais  paixão ternura e paz 
C9                     G/B      Em7/5-   A7(+5)
É só você entrar aqui é seu lugar     te amo 
     Dm7               Bb7+           G#7+      F/G
Meu coração está com fogo pra te amar     queimando 
      C9         G/B              Em7/5-       A7(+5)
É só você chegar quero  te abraçar deita no meu peito 
        Dm7                 Bb7+              G#7+      F/G
E sente o meu calor  quarenta graus de amor    perfeito

G#7+ G#° F/G D/F# G#7+      C#7+ G#7+ F/G  C9   C9/13
                    Meu coração é o seu lugar

----------------- Acordes -----------------
A7(+5) = X 0 X 0 2 1
Am7 = X 0 2 0 1 0
Am7/11 = 5 X 5 5 3 X
Bb/G# = 4 X 3 3 3 X
Bb7 = X 1 3 1 3 1
Bb7(13) = 6 X 6 7 8 X
Bb7+ = X 1 3 2 3 1
C#7+ = X 4 6 5 6 4
C9 = X 3 5 5 3 3
C9/13 = X 3 2 2 3 3
C9/E = X X 2 5 3 0
D/F# = 2 X 0 2 3 2
Dm7 = X 5 7 5 6 5
Dm7/A = X 0 0 2 1 1
Dm7/G = 3 X 0 2 1 1
Em7 = 0 2 2 0 3 0
Em7/5- = X X 2 3 3 3
F/G = 3 X 3 2 1 X
F7+ = 1 X 2 2 1 X
Fm7 = 1 X 1 1 1 X
Fm9 = 1 3 5 1 1 1
G#7+ = 4 X 5 5 4 X
G#° = 4 X 3 4 3 X
G/B = X 2 0 0 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function Song0GrausDeAmorPage() {
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
