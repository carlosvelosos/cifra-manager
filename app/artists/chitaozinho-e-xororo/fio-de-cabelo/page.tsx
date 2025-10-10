import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Chitãozinho & Xororó - Fio de Cabelo

[Intro] C7  F  C7  F

[Tab - Solo Intro]

Parte 1 de 2
E|--------------6---------------5-----------|
B|------------------------------------------|
G|-7-5--5h7-5h7----7-5--5h7-5h7-------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 2
E|----8-8-8-8--6-6--5-5--3-5-6--3-1---------|
B|------------------------------------------|
G|-5--9-9-9-9--7-7--5-5--3-5-7--3-2---------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

               F
Quando a gente ama
                C7           F
Qualquer coisa serve para relembrar
                             F7
Um vestido velho da mulher amada
             Bb
Tem muito valor

                            C7
Aquele restinho do perfume dela
               F
Que ficou no frasco

Sobre a penteadeira
                  C7
Mostrando que o quarto
                              F    C/E
Já foi o cenário de um grande amor

[Refrão]

Dm  C7
E  hoje o que encontrei
                 F
Me deixou mais triste
                        C7
Um pedacinho dela que existe
             Bb              F  C/E
Um fio de cabelo no meu paletó

 Dm  C7
Lembrei de tudo entre nós
           F
Do amor vivido
                          C7
Aquele fio de cabelo comprido
              Bb      C7    F   C/E  Dm
Já esteve grudado em nosso suor

( C7  F  C7  F )

[Segunda Parte]

               F
Quando a gente ama
            C7               F
E não vive junto da mulher amada

Uma coisa à toa
            F7                Bb
É um bom motivo pra gente chorar
                                C7
Apagam-se as luzes ao chegar a hora
              F
De ir para a cama
                                  C7
A gente começa a esperar por quem ama
                            
Na impressão que ela 
          F     C/E
Venha se deitar

[Refrão]

Dm  C7
E  hoje o que encontrei
                 F
Me deixou mais triste
                        C7
Um pedacinho dela que existe
             Bb              F  C/E
Um fio de cabelo no meu paletó

 Dm  C7
Lembrei de tudo entre nós
           F
Do amor vivido
                          C7
Aquele fio de cabelo comprido
              Bb      C7    F
Já esteve grudado em nosso suor

----------------- Acordes -----------------
Bb = X 1 3 3 3 1
C/E = 0 3 2 0 1 0
C7 = X 3 2 3 1 X
Dm = X X 0 2 3 1
F = 1 3 3 2 1 1
F7 = 1 3 1 2 1 1
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FioDeCabeloPage() {
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
