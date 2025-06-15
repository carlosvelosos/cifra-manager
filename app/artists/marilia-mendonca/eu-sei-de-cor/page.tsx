import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Marília Mendonça - Eu Sei De Cor

[Intro] A9  E  F#m  D

[Tab - Intro]

Parte 1 De 3

Parte 2 De 3

Parte 3 De 3

[Primeira Parte]

A9
É
                      C#m
Já tá ficando chato, né
                         F#m
A encheção de saco, pois é
                               D
Prepara, que eu já tô me preparando

Enquanto cê tá indo

          A9
Eu to voltando
                               E
E todo esse caminho eu sei de cor

Se eu não me engano
                     F#m
Agora vai me deixar só
                              D
O segundo passo é não me atender
                        B7
O terceiro é se arrepender
                                 E
Se o que dói em mim doesse em você

[Refrão]

 A9
Deixa
                         E
Deixa mesmo de ser importante
                                F#m
Vai deixando a gente pra outra hora
                                 D
Vai tentar abrir a porta desse amor

Quando eu tiver jogado a chave fora

 A9
Deixa
                         E
Deixa mesmo de ser importante
                                F#m
Vai deixando a gente pra outra hora
                              D
E quando se der conta, já passou
          E
Quando olhar pra trás, já fui embora

[Solo] A9  E  F#m  D

[Tab - Solo]

Parte 1 De 3

Parte 2 De 3

Parte 3 De 3

[Primeira Parte]

A9                                E
   E todo esse caminho eu sei de cor

Se eu não me engano
                     F#m
Agora vai me deixar só
                              D
O segundo passo é não me atender
                        B7
O terceiro é se arrepender
                                 E
Se o que dói em mim doesse em você

[Refrão]

 A9
Deixa
                         E
Deixa mesmo de ser importante
                                F#m
Vai deixando a gente pra outra hora
                                 D
Vai tentar abrir a porta desse amor

Quando eu tiver jogado a chave fora

 A9
Deixa
                         E
Deixa mesmo de ser importante
                                F#m
Vai deixando a gente pra outra hora
                              D
E quando se der conta, já passou
          E
Quando olhar pra trás, já fui embora

[Solo Final] A9  E  F#m

[Tab - Solo Final]

Parte 1 De 2

Parte 2 De 2

                              D
E quando se der conta, já passou
          E                      A
Quando olhar pra trás, já fui embora


----------------- Acordes -----------------
A = P2 2 2 2
A9 = P2 4 2 2
B7 = 1 2 0 1
C#m = 2 1 2 2
D = 4 2 3 4
E = 2 1 0 2
F#m = 4 2 2 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EuSeiDeCorPage() {
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
