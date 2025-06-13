import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Zeca Pagodinho - Ogum

[Intro] A7M  D7M  B7(9)  Bm7
        A7M  D7M  B7(9)  Bm7

A7M F#m7                 Bm7M               Bm7
Eu sou descendente zulu, sou um soldado de ogum
                     E7(9)
Devoto nessa imensa legião de jorge
A7M F#m7              Bm7M             Bm7
Eu sincretizado na fé sou carregado de axé
                     E7(9)
E protegido por um cavaleiro nobre

Em7        A7(9)                   Eb7(5-)
Se vou na igreja festejar meu protetor
                                  Ebm7(5-)
E agradecer por eu ser mais um vencedor
    Dm6
Nas lutas nas batalhas
Em7         A7(9)                     Eb7(5-)
Se vou no terreiro pra bater o meu tambor
                              Ebm7(5-)
Bato cabeça firmo ponto sim senhor
    Dm6       D/E
Eu canto pra ogum

 Bm7
Ogum
Um guerreiro valente que cuida da gente que sofre demais
E7(9)
Ogum
 A7M
Ele vem de aruanda ele vence demanda de gente que faz
 Bm7
Ogum
                                                   A7M
Cavaleiro do céu escudeiro fiel mensageiro da paz, ogum
 Bm7
Ogum
Ele nunca balança ele pega na lança ele mata o dragão
 A7M
Ogum
É quem da confiança pra uma criança virar um leão
 Bm7
Ogum
É um mar de esperança que traz a bonança pro meu coração
 A7M
Ogum

----------------- Acordes -----------------
A7(9) = 7 6 8 9
A7M = 2 1 2 2
B7(9) = 1 2 2 1
Bm7 = 4 2 3 4
Bm7M = 4 3 0 0
D7M = 0 P2 2 4
Dm6 = 0 2 0 3
E7(9) = 2 1 3 4
Eb7(5-) = 1 2 2 1
Ebm7(5-) = 1 2 2 4
Em7 = 2 0 0 0
F#m7 = 4 P2 2 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {
  return (
    <>
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}
