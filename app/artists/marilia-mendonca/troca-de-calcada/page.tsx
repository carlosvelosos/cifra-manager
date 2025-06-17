import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Marília Mendonça - Troca de Calçada

[Intro] F#m7  E/G#  A2  B2

[Primeira Parte]

       C#m7
Se alguém passar por ela
            F#m7
Fique em silêncio, não aponte o dedo
                A2
Não julgue tão cedo

Ela tem motivos

Pra estar desse jeito
C#m7
      Isso é preconceito

Viveu tanto desprezo
                F#m7
Que até Deus duvida

E chora lá de cima
              A2
Era só uma menina

Que dedicou a vida
                 C#m7
A amores de quinta

[Pré-Refrão]

                       F#m7
É claro que ela já sonhou

Em se casar um dia
                 C#m7
Não estava nos planos

Ser vergonha pra família
                F#m7
Cada um que passou

Levou um pouco da sua vida
                  A2
E o resto que sobrou

Ela vende na esquina

[Refrão]

                  E
Pra ter o corpo quente

Eu congelei meu coração
             B2/D#      B2
Pra esconder a     tristeza

Maquiagem a prova da d'água
                   F#m7
Hoje você me vê assim

E troca de calçada
                       Am6
Só que amar dói muito mais

Do que o nojo na sua cara
                  E
Pra ter o corpo quente

Eu congelei meu coração
             B2/D#      B2
Pra esconder a     tristeza

Salto 15 e mini-saia
                   F#m7
Hoje você me vê assim

E troca de calçada
                    A2
Mas se soubesse um terço da história
                            E
Me abraçava e não me apedrejava

[Intro] F#m7  E/G#  A2  B2

[Pré-Refrão]

                       F#m7
É claro que ela já sonhou

Em se casar um dia
                 C#m7
Não estava nos planos

Ser vergonha pra família
                F#m7
Cada um que passou

Levou um pouco da sua vida
                  A2
E o resto que sobrou
                 Am7
Ela vende na esquina

[Refrão]

                  E
Pra ter o corpo quente

Eu congelei meu coração
             B2/D#      B2
Pra esconder a     tristeza

Maquiagem a prova da d'água
                   F#m7
Hoje você me vê assim

E troca de calçada
                       Am7
Só que amar dói muito mais

Do que o nojo na sua cara
                  E
Pra ter o corpo quente

Eu congelei meu coração
             B2/D#      B2
Pra esconder a     tristeza

Salto 15 e mini-saia
                   F#m7
Hoje você me vê assim

E troca de calçada
                    A2
Mas se soubesse um terço da história
                            E    B2
Me abraçava e não me apedrejava

                   F#m7
Hoje você me vê assim

E troca de calçada
                    A2
Mas se soubesse um terço da história
                            E
Me abraçava e não me apedrejava


----------------- Acordes -----------------
A2 = P2 4 2 2
Am6 = 4 2 1 2
Am7 = 7 P5 5 5
B2 = P4 6 4 4
C#m7 = 6 4 5 6
E = 2 1 0 2
F#m7 = 4 P2 2 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TrocaDeCalcadaPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
