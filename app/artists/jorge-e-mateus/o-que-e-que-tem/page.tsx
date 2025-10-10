import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Jorge & Mateus - O Que É Que Tem?

[Intro] C  D  G

[Primeira Parte]

    G               D
E pra deixar acontecer
                  Am
A pena tem que valer
         C       D
Tem que ser com você

 Am              G
Nós livres pra voar
                D                Am
E esse céu que hoje tá tão lindo
                 C
Carregado de estrelas
             D                     Am
E a Lua tá cheia refletindo o seu rosto
                   C
Dá um gosto de pensar
              G               D          C  D
Eu, você e o céu e a noite inteira pra amar

[Refrão]

                   G                  D
E quando o Sol chegar a gente ama de novo
                  Am
A gente liga pro povo
                 G             D          G
Fala que ta namorando, e casa semana que vem
                D              Am
Deixa o povo falar, que é que tem?

          C            D       Am
Eu quero ser lembrado com você
         C           D         Am
Isso não é problema de ninguém
          C            D       Am
Eu quero ser lembrado com você
         C           D
Isso não é problema de ninguém

[Primeira Parte]

    G               D
E pra deixar acontecer
                  Am
A pena tem que valer
         C       D
Tem que ser com você

 Am              G
Nós livres pra voar
                D                Am
E esse céu que hoje tá tão lindo
                 C
Carregado de estrelas
             D                     Am
E a Lua tá cheia refletindo o seu rosto
                   C
Dá um gosto de pensar
              G               D          C  D
Eu, você e o céu e a noite inteira pra amar

[Refrão]

                   G                  D
E quando o Sol chegar a gente ama de novo
                  Am
A gente liga pro povo
                 G             D          G
Fala que ta namorando, e casa semana que vem
                D              Am
Deixa o povo falar, que é que tem?

          C            D       Am
Eu quero ser lembrado com você
         C           D         Am
Isso não é problema de ninguém
          C            D       Am
Eu quero ser lembrado com você
         C           D         Am
Isso não é problema de ninguém

                   G                  D
E quando o Sol chegar a gente ama de novo
                  Am
A gente liga pro povo
                 G             D          G
Fala que ta namorando, e casa semana que vem
                D              Am
Deixa o povo falar, que é que tem?

          C            D       Am
Eu quero ser lembrado com você
         C           D         Am
Isso não é problema de ninguém
          C            D       Am
Eu quero ser lembrado com você
         C           D
Isso não é problema de ninguém

----------------- Acordes -----------------
Am = 2 2 1 2
C = 2 0 1 2
D = 4 2 3 4
G = 5 4 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OQueEQueTemPage() {
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
