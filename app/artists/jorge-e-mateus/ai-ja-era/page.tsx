import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Jorge & Mateus - Aí Já Era

[Intro] C  D  Am7
        C  D  Em7(9)
        C  D  Am7
        C  D  Em7(9)/F#  C9/E

[Primeira Parte]

 G
Para pra pensar
       C9
Porque eu já me toquei
G                       C9
Eu te escolhi e você me escolheu

Eu sei
 G7M
Tá escancarado
       C9
Vai negar pro coração?
          G         D           C9
Que você tá com sintomas de paixão!

            Em7(9)
É quando os olhos se caçam
        D
Em meio à multidão
          C9
Quando a gente se esbarra
             D
Andando em qualquer direção
       G
Quando indiscretamente
         D
A gente vai perdendo o chão
               C9
E vai ficando bobo

Vai ficando bobo

[Refrão]

   D    G           D          C9
E aí já era é hora de se entregar
    D         G
O amor não espera
            D        C9
Só deixa o tempo passar
         D      Bm       B7        Em
E fica pro coração a missão de avisar
            D       C9
E o meu tá dando sinal
         D
E tá querendo te amar!

[Solo] C  D  Am7
       C  D  Em7(9)
       C  D  Am7
       C  D  Em7(9)/F#  C9/E

Parte 4 de 4

[Primeira Parte]

 G
Para pra pensar
       C9
Porque eu já me toquei
G                       C9
Eu te escolhi e você me escolheu

Eu sei
 G7M
Tá escancarado
       C9
Vai negar pro coração?
          G         D           C9
Que você tá com sintomas de paixão!

            Em7(9)
É quando os olhos se caçam
        D
Em meio à multidão
          C9
Quando a gente se esbarra
             D
Andando em qualquer direção
       G
Quando indiscretamente
         D
A gente vai perdendo o chão
               C9
E vai ficando bobo

Vai ficando bobo

[Refrão]

   D    G           D          C9
E aí já era é hora de se entregar
    D         G
O amor não espera
            D        C9
Só deixa o tempo passar
         D      Bm       B7        Em
E fica pro coração a missão de avisar
            D       C9
E o meu tá dando sinal
         D
E tá querendo te amar!

   D    G           D          C9
E aí já era é hora de se entregar
    D         G
O amor não espera
            D        C9
Só deixa o tempo passar
         D      Bm       B7        Em
E fica pro coração a missão de avisar
            D       C9
E o meu tá dando sinal
         D
E tá querendo te amar!

            D       C9
E o meu tá dando sinal
         D
E tá querendo te amar!

[Final] C  D  Am7
        C  D  Em7(9)
        C  D  Am7
        C  D  Em7(9)  C9/E
        G

Parte 4 de 4

E|-------------------------------------------3----|


----------------- Acordes -----------------
Am7 = 7 P5 5 5
B7 = 1 2 0 1
Bm = 4 4 3 4
C = 2 0 1 2
C9 = 2 0 1 0
D = 4 2 3 4
Em = 5 4 5 5
Em7(9) = 0 0 5 4
G = 5 4 3 5
G7M = 5 4 3 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AiJaEraPage() {
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
