import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Grupo Pixote - Beijo Doce

[Intro] F/G  G7/13  C7M  Bm7  Em
        Ebm  Dm  G7(13-)  C7M  D7(9)

G7M        G7(13-)   C7M      D7(9)
   Namorar aonde o sol se esconde
G7M         Dm G7(13-) C7M    D7(9)
   E te dar um novo beijo doce
Dm             G7(13-)   C7M    B7
   Com sabor de mel fruta de conde
        Em     A7       Am7   D7(9)
Não ha nada melhor nessa vida
G7M               G7(13-)   C7M   D7(9)
   Entre o céu e o mar um horizonte
G7M         Dm G7(13-)  C7M   D7(9) 
  Pra você e eu nosso romance
Dm              G7(13-) C7M   B7
   Vejo o outro lado dessa ponte
    Em        A7       Am7  D7(9)
Teu olhar me seduz mais ainda
Gm7           Eb7M  Am7(5-)  D7
   Ando louco pra ficar contigo
Gm7           Eb7M  Dm  Cm   
   Eu prometo te ama.....r
          F7   Bb7M  D7
Te dar meu parais..o
              G7M
Poder te dizer
               G7(13-) 
Que tudo que eu mais sonhava nessa
  C7M         D7(9)
 Vida aconteceu
        G7M
Foi te conhecer
             Dm    G7(13-)        C7M
Agora que estamos juntos nem pensar
         F7(4)  
Em se perder
    F7    Bb7M        Gm7
Só quero saber se estar ao meu lado
Am7(5-)         D7
Irá te fazer feliz
            Bm7
Eu só sei dizer
           E7
Que estou apaixonado
     Am7                D7(9)
E é tudo que eu sempre quis

----------------- Acordes -----------------
A7 = 2 0 2 2
Am7 = 7 P5 5 5
Am7(5-) = P1 2 1 1
B7 = 1 2 0 1
Bb7M = 3 2 3 3
Bm7 = 4 2 3 4
C7M = 2 0 0 2
Cm = 1 0 1 1
D7 = 4 2 1 4
D7(9) = 4 5 5 7
Dm = 3 2 3 3
E7 = 2 1 0 0
Eb7M = 1 3 3 5
Ebm = 4 3 4 4
Em = 5 4 5 5
F7 = 3 2 P1 1
F7(4) = 8 8 6 7
G7(13-) = 3 0 0 1
G7/13 = 3 7 5 5
G7M = 5 4 3 4
Gm7 = 5 P3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function BeijoDocePage() {
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
