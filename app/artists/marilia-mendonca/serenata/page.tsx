import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Marília Mendonça - Serenata

[Intro] E  A

[Primeira Parte]

        E
Foi chegando e chegou
       B9
Já entrando, olhando
     F#m7
E mudando meus planos
    A                   Am6(9)
O que é que tá rolando?

[Pré-Refrão]

                  E
Ele chegou na voadora
         B9                            F#m7
E o coração, tadin, num golpe foi pra lona
A                        E
 Rancou de mim minhas bebidas e a farra
    B9                    A
Só consigo pensar em serenata

[Refrão]

                    E
Se amar assim for brega
             B9                        F#m7
Me chama de Marília Mendonça ou de Falcão
           A
Meu show agora é só voz e violão
E                     B
 Assim, debaixo da janela
                 F#m7
Jantar a luz de velas
             A                             E
Agora é momozin ou momozão, eu sei que é brega

             B9                        F#m7
Me chama de Marília Mendonça ou de Falcão
           A
Meu show agora é só voz e violão
E                     B
 Assim, debaixo da janela
                 F#m7
Jantar a luz de velas
             A                             E
Agora é momozin ou momozão, eu sei que é brega

[Solo] E  B9  F#m7 A
       E  B9  F#m7 A

[Pré-Refrão]

                  E
Ele chegou na voadora
         B9                            F#m7
E o coração, tadin, num golpe foi pra lona
A                        E
 Rancou de mim minhas bebidas e a farra
    B9                    A
Só consigo pensar em serenata

[Refrão]

                    E
Se amar assim for brega
             B9                        F#m7
Me chama de Marília Mendonça ou de Falcão
           A
Meu show agora é só voz e violão
E                     B
 Assim, debaixo da janela
                 F#m7
Jantar a luz de velas
             A                             E
Agora é momozin ou momozão, eu sei que é brega

             B9                        F#m7
Me chama de Marília Mendonça ou de Falcão
           A
Meu show agora é só voz e violão
E                     B
 Assim, debaixo da janela
                 F#m7
Jantar a luz de velas
             A                             E
Agora é momozin ou momozão, eu sei que é brega

( E  B9  F#m7 A )

[Refrão]

                    E
Se amar assim for brega
             B9                        F#m7
Me chama de Marília Mendonça ou de Falcão
           A
Meu show agora é só voz e violão
E                     B
 Assim, debaixo da janela
                 F#m7
Jantar a luz de velas
             A                             E
Agora é momozin ou momozão, eu sei que é brega

----------------- Acordes -----------------
Capotraste na 2ª casa
B*  = P4 4 4 4 - (*C# na forma de B)
B9*  = P4 6 4 4 - (*C#9 na forma de B9)
E*  = 2 1 0 2 - (*F# na forma de E)
F#m7*  = 4 P2 2 2 - (*G#m7 na forma de F#m7)
A*  = P2 2 2 2 - (*B na forma de A)
Am6(9)*  = 7 9 8 9 - (*Bm6(9) na forma de Am6(9))
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SerenataPage() {
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
