import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `Zeca Pagodinho - Ainda é tempo de ser feliz

[Intro] C7M  D/C  Bm9  E7(9-)
        Am7  D4(9)  G7M  Db7

[Solo]

C7M                   Cm6        Bm7    Dm6/F     E7(4)   E7
  Me cansei de ficar mudo sem tentar,       sem falar
C7M                    Cm6      B7(13)   B7(13-)   E7(9-)   E7
Mas não posso deixar tudo como está  Como está você?
                C7M                    Cm6
Tô vivendo por viver, tô cansada de chorar
                Bm7               E7(4)          E7
Não sei mais o que fazer, você tem que me ajudar
        C7M            Bm7    C7M     B7(13-)   Em7(9)
Tá difícil esquecer, impossível não lembrar vocêêê
    Dm7           G7(13)
E você como está?
               C#m7(5-)                   D/F#
Com o fim do nosso amor, eu também tô por aí
               Bm7              Bm7(5-)        E9-
Eu não sei pra onde vou, tantas noites sem dormir
     Am7      Bm7      C7M        D7(13)      G7M
Alivia minha dor, e me faça por favor   sorrir

[Refrão]

Dm7           G13      C7M    D/C            G7M  G9
Vem pros meus braços meu amor, meu acalanto
            C7M        D/C          Bm7(5-)  G7(9)
Leva esse pranto pra bem longe de nós dois
           C7M        D/C        Bm7(5-)       E7
Não deixe nada pra depois, é a saudade que me diz
            Am7       D7(9)     G7M       D9-
Que ainda é tempo pra viver feliz

----------------- Acordes -----------------
Am7 = 7 P5 5 5
B7(13) = 7 11 9 9
B7(13-) = 7 4 4 5
Bm7 = 4 2 3 4
Bm7(5-) = 3 2 0 0
Bm9 = 4 4 2 0
C#m7(5-) = 5 4 P2 2
C7M = 2 0 0 2
Cm6 = P2 2 4 5
D7(13) = 10 14 12 12
D7(9) = 4 5 5 7
Db7 = 3 4 2 3
Dm6/F = 0 2 0 3
Dm7 = 0 2 1 3
E7 = 2 1 0 0
E7(4) = 7 7 5 6
E7(9-) = 2 1 3 3
Em7(9) = 0 0 5 4
G13 = 5 4 3 2
G7(13) = 3 7 5 5
G7(9) = 5 2 0 3
G7M = 5 4 3 4
G9 = 0 2 0 0
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
