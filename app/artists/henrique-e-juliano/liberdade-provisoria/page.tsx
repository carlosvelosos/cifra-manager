import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Henrique & Juliano - Liberdade Provisória

[Intro] Em7  Bm7  D9  A

[Tab - Intro]    

E|------------------------------3-3-3-3-3-3-|
B|-/5-5--7-7/8~---8\\7-5-5-------5-5-5-5-5-5-|
G|-------------------------7-4--------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|--2--2---5-5-3-3-2-2----------------------|
B|--3--3---7-7-5-5-3-3-5-5-3-3--------------|
G|---------------------6-6-4-4-4-4/9~-------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

     Em7
No início foi assim
      Bm7
Terminou tá terminado
                 D9
Cada um pro seu lado
               A
Não precisa ligar mais
           Em7
Só que foi eu quem terminou
               Bm7
E quem foi largado não espera
       D9
Eu segui minha vida
             A
Até ela começar seguir a dela

[Pré-Refrão]

                 Em7
E do meio pro final
                       Bm7
Eu so ia pra onde ela tava
               D9
Cada beijo no rosto que outra
                        A
Boca dava eu morria de raiva
                 Em7
E ela tava mais linda
                   Bm7
Cada vez que eu olhava
    A/C#      D9
O ciúmes não tava batendo
               A
Tava dando porrada

[Refrão]

                      Em7
E eu implorei pra voltar
                  Bm7
E ela me matou na unha
                      D9
Disse que eu tava solteiro
                           A
Eu tava solteiro porra nenhuma
                 Em7
Implorei pra voltar
                Bm7
Não me manda embora
                  D9
Sou preso da sua vida
                       A
Era só liberdade provisória
                           Em7
Vai ter que me aceitar de volta

( Bm7  D9  A )

[Solo] Em  Bm7  D9  A

[Tab - Solo]

E|------------------------------3-3-3-3-3-3-|
B|-/5-5--7-7/8~---8\\7-5-5-------5-5-5-5-5-5-|
G|-------------------------7-4--------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|--2--2---5-5-3-3-2-2----------------------|
B|--3--3---7-7-5-5-3-3-5-5-3-3---/5-5-7-5~--|
G|---------------------6-6-4-4-4------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Pré-Refrão]

                 Em7
E do meio pro final
                       Bm7
Eu so ia pra onde ela tava
               D9
Cada beijo no rosto que outra
                        A
Boca dava eu morria de raiva
                 Em7
E ela tava mais linda
                   Bm7
Cada vez que eu olhava
    A/C#      D9
O ciúmes não tava batendo
               A
Tava dando porrada

[Refrão]

                      Em7
E eu implorei pra voltar
                  Bm7
E ela me matou na unha
                      D9
Disse que eu tava solteiro
                           A
Eu tava solteiro porra nenhuma
                 Em7
Implorei pra voltar
                Bm7
Não me manda embora
                  D9
Sou preso da sua vida
                       A
Era só liberdade provisória
                           Em7
Vai ter que me aceitar de volta

( Bm7  D9  A )

                      Em7
E eu implorei pra voltar
                  Bm7
E ela me matou na unha
                      D9
Disse que eu tava solteiro
                           A
Eu tava solteiro porra nenhuma
                 Em7
Implorei pra voltar
                Bm7
Não me manda embora
                  D9
Sou preso da sua vida
                       A
Era só liberdade provisória
                           Em7
Vai ter que me aceitar de volta

( Bm7  D9  A )

                           Em7
Vai ter que me aceitar de volta

[Final] Bm7  D9  A  Em7

----------------- Acordes -----------------
G#*  = X 0 2 2 2 0 - (*G na forma de G#)
G#/C*  = X 4 X 2 5 5 - (*G/B na forma de G#/C)
A#m7*  = X 2 4 2 3 2 - (*Am7 na forma de A#m7)
C#9*  = X X 0 2 3 0 - (*C9 na forma de C#9)
D#m*  = 0 2 2 0 0 0 - (*Dm na forma de D#m)
D#m7*  = 0 2 2 0 3 0 - (*Dm7 na forma de D#m7)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function LiberdadeProvisoriaPage() {
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
