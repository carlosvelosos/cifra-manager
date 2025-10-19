import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Ara Ketu - Mal Acostumado

[Intro] Cm  Fm  Bb  Eb7M  Dm7(5-)  G7
        Cm  Fm  Bb  G7(4)  G7

[Tab - Solo Intro]

E|------------------------------------------|
B|-----3-4-3-------------3-4-3--------------|
G|---5-------5-----------------5------------|
D|-5-----------5-6~--------------6-8--------|
A|------------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-----------6---6/8~--11-11-11-9-8-8~------|
G|-----5-7-8---8----------------------------|
D|---8--------------------------------------|
A|-8----------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-----3-4-3-------------3-4-3--------------|
G|---5-------5-----------------5------------|
D|-5-----------5-6~--------------6-8--------|
A|------------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-----------6---6/8~--8h9p8-6-8-6----------|
G|-----5-7-8---8----------------------------|
D|---8--------------------------------------|
A|-8----------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-6-6-6------------------------------------|
G|-------8-7-5~-----------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

Cm                        Fm  Bb
Amor de verdade eu só senti
           Eb7M      Dm7(5-)  G7
Foi com você meu bem
   Cm                      Fm     Bb
E todas as loucuras desse nosso amor
         Eb7M      Dm7(5-)  G7
Você me deu também

[Pré-Refrão]

   Cm                       Fm
Você já faz parte da minha vida
   Bb                   Eb7M        G7
E fica tão difícil dividir você de mim
    Cm                     Fm
E quando faz carinho me abraça
                Ab
Aí eu fico de graça
                     G7  G7(4)  G7
Te chamando pra me amar

[Refrão]

           Fm
Mal acostumado
            Bb
Você me deixou
           Eb7M
Mal acostumado
            Cm
Com o seu amor
       Ab
Então volta
                        Fm
Traz de volta o meu sorriso
                    G7(4)    G7  G7(4)  G7
Sem você não posso ser feliz

           Fm
Mal acostumado
            Bb
Você me deixou
           Eb7M
Mal acostumado
            Cm
Com o seu amor
       Ab
Então volta
                        Fm
Traz de volta o meu sorriso
                    G7(4)  G7  Cm
Sem você não posso ser  feliz

( Fm  Bb  Eb7M  Dm7(5-)  G7 )
( Cm  Fm  Bb  G7(4)  G7 )

[Primeira Parte]

Cm                        Fm  Bb
Amor de verdade eu só senti
           Eb7M      Dm7(5-)  G7
Foi com você meu bem
   Cm                      Fm     Bb
E todas as loucuras desse nosso amor
         Eb7M      Dm7(5-)  G7
Você me deu também

[Pré-Refrão]

   Cm                       Fm
Você já faz parte da minha vida
   Bb                   Eb7M        G7
E fica tão difícil dividir você de mim
    Cm                     Fm
E quando faz carinho me abraça
                Ab
Aí eu fico de graça
                     G7
Te chamando pra me amar

[Refrão]

           Fm
Mal acostumado
            Bb
Você me deixou
           Eb7M
Mal acostumado
            Cm
Com o seu amor
       Ab
Então volta
                        Fm
Traz de volta o meu sorriso
                    G7(4)    G7  G7(4)  G7
Sem você não posso ser feliz

           Fm
Mal acostumado
            Bb
Você me deixou
           Eb7M
Mal acostumado
            Cm
Com o seu amor
       Ab
Então volta
                        Fm
Traz de volta o meu sorriso
                    G7(4)    G7  G7(4)  G7
Sem você não posso ser feliz

           Fm
Mal acostumado
            Bb
Você me deixou
           Eb7M
Mal acostumado
            Cm
Com o seu amor
       Ab
Então volta
                        Fm
Traz de volta o meu sorriso
                    G7(4)  G7
Sem você não posso ser  feliz

[Final] Cm  Fm  Bb  Eb7M  Dm7(5-)  G7
        Cm  Fm  Bb  G7(4)  G7  Cm7(9)

[Tab - Solo Final]

E|------------------------------------------|
B|-----3-4-3-------------3-4-3--------------|
G|---5-------5-----------------5------------|
D|-5-----------5-6~--------------6-8--------|
A|------------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-----------6---6/8~--11-11-11-9-8-8~------|
G|-----5-7-8---8----------------------------|
D|---8--------------------------------------|
A|-8----------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-----3-4-3-------------3-4-3--------------|
G|---5-------5-----------------5------------|
D|-5-----------5-6~--------------6-8--------|
A|------------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-----------6---6/8~--8h9p8-6-8-6----------|
G|-----5-7-8---8----------------------------|
D|---8--------------------------------------|
A|-8----------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-6-6-6------------------------------------|
G|-------8-7-5~-----------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

----------------- Acordes -----------------
Ab = 4 3 1 1 1 4
Bb = X 1 3 3 3 1
Cm = X 3 5 5 4 3
Cm7(9) = X 3 1 3 3 X
Dm7(5-) = X X 0 1 1 1
Eb7M = X X 1 3 3 3
Fm = 1 3 3 1 1 1
G7 = 3 5 3 4 3 3
G7(4) = 3 5 3 5 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MalAcostumadoPage() {
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
