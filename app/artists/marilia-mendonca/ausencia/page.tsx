import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Marília Mendonça - Ausência

[Intro] C# D# Fm  D#11/G  G#/C
        C# D# Fm  D#11/G  G#/C

[Primeira Parte]

     C#
Sei bem
                      D#
O que te faz bem, eu sei
                       Fm
Mas no fundo eu já tentei
     D#     G#/C C#
Não faltou co___ragem

C#                      D#
É, uma hora eu ia me tocar
                          Fm
Que você não vai mais voltar
         D#     G#/C
Não receber mensagem
C#
  Também é mensagem

[Dedilhado Primeira Parte]

Parte 1

Parte 2

[Pré-Refrão]

 A#m7
Sei
                        G#5
Que o pra sempre virou pó
                    D#/G
E na cabeça deu um nó
                    Fm
Mas eu tô bem consciente

      A#m7
Mas amei
                       G#5
Amei sozinha, mas por dois
                                 D#/G
Me conformei que agora, e não depois

Vou ter que seguir em frente

[Dedilhado Pré-Refrão]

Parte 1

Parte 2

Parte 3

Parte 4

[Refrão]

          C#
Preocupa não
                  D#         Fm
Que eu não vou bater no seu portão
     G#/C C#
Preocupa não
                            D#
Que não vai ver mais o meu nome
       Fm       G#/C
Em nenhuma ligação

     C#
Preocupa não
              D#           Fm
Que eu vou tomar vergonha na cara
G#/C     C#
    Preocupa não
                   D#
Pra um bom entendedor

Meia ausência basta

[Refrão]

Parte 1 (3x)

Parte 2

( C# D# Fm  D#11/G  G#/C )
( C# D# Fm  D#11/G  G#/C )

[Pré-Refrão]

 A#m7
Sei
                        G#5
Que o pra sempre virou pó
                    D#/G
E na cabeça deu um nó
                    Fm
Mas eu tô bem consciente

      A#m7
Mas amei
                       G#5
Amei sozinha, mas por dois
                                 D#/G
Me conformei que agora, e não depois

Vou ter que seguir em frente

[Refrão]

          C#
Preocupa não
                  D#         Fm
Que eu não vou bater no seu portão
     G#/C C#
Preocupa não
                            D#
Que não vai ver mais o meu nome
       Fm       G#/C
Em nenhuma ligação

     C#
Preocupa não
              D#           Fm
Que eu vou tomar vergonha na cara
G#/C     C#
    Preocupa não
                   D#
Pra um bom entendedor

Meia ausência basta

          C#
Preocupa não
                  D#         Fm
Que eu não vou bater no seu portão
     G#/C C#
Preocupa não
                            D#
Que não vai ver mais o meu nome
       Fm       G#/C
Em nenhuma ligação

     C#
Preocupa não
              D#           Fm
Que eu vou tomar vergonha na cara
G#/C     C#
    Preocupa não
                   D#
Pra um bom entendedor

Meia ausência basta

[Final] C# D# Fm  D#11/G  G#/C
        C# D# Fm

[Dedilhado Final]

Parte 1

Parte 2



----------------- Acordes -----------------
Capotraste na 1ª casa
A#m7*  = 3 1 2 3 - (*Bm7 na forma de A#m7)
C#*  = P6 6 6 6 - (*D na forma de C#)
D#*  = 5 3 4 5 - (*E na forma de D#)
Fm*  = 3 1 1 3 - (*F#m na forma de Fm)
Fm9*  = 3 0 P1 3 - (*F#m9 na forma de Fm9)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AusenciaPage() {
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
