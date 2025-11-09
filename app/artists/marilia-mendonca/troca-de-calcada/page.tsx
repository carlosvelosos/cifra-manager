import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

// URL: https://www.cifraclub.com.br/marilia-mendonca/troca-de-calcada/

const cifra = `Marília Mendonça - Troca de Calçada

[Intro] <b>F#m7</b>  <b>E/G#</b>  <b>A2</b>  <b>B2</b>

<span class="tablatura"><span class="cnt">E|------------------------------------------------|
B|------------------------------------------------|
G|-----4---4h6------4--------------4---------4-6~-|
D|-/6-6---6-----6-6---6-4----4/6-6----6-4---------|
A|------------------------7----------------7------|
E|------------------------------------------------|</span></span>

[Primeira Parte]

       <b>C#m7</b>
Se alguém passar por ela
            <b>F#m7</b>
Fique em silêncio, não aponte o dedo
                <b>A2</b>
Não julgue tão cedo

Ela tem motivos

Pra estar desse jeito
<b>C#m7</b>
      Isso é preconceito

Viveu tanto desprezo
                <b>F#m7</b>
Que até Deus duvida

E chora lá de cima
              <b>A2</b>
Era só uma menina

Que dedicou a vida
                 <b>C#m7</b>
A amores de quinta

[Pré-Refrão]

                       <b>F#m7</b>
É claro que ela já sonhou

Em se casar um dia
                 <b>C#m7</b>
Não estava nos planos

Ser vergonha pra família
                <b>F#m7</b>
Cada um que passou

Levou um pouco da sua vida
                  <b>A2</b>
E o resto que sobrou

Ela vende na esquina

[Refrão]

                  <b>E</b>
Pra ter o corpo quente

Eu congelei meu coração
             <b>B2/D#</b>      <b>B2</b>
Pra esconder a     tristeza

Maquiagem a prova da d'água
                   <b>F#m7</b>
Hoje você me vê assim

E troca de calçada
                       <b>Am6</b>
Só que amar dói muito mais

Do que o nojo na sua cara
                  <b>E</b>
Pra ter o corpo quente

Eu congelei meu coração
             <b>B2/D#</b>      <b>B2</b>
Pra esconder a     tristeza

Salto 15 e mini-saia
                   <b>F#m7</b>
Hoje você me vê assim

E troca de calçada
                    <b>A2</b>
Mas se soubesse um terço da história
                            <b>E</b>
Me abraçava e não me apedrejava

[Intro] <b>F#m7</b>  <b>E/G#</b>  <b>A2</b>  <b>B2</b>

<span class="tablatura"><span class="cnt">E|------------------------------------------------|
B|------------------------------------------------|
G|-----4---4h6------4--------------4---------4-6~-|
D|-/6-6---6-----6-6---6-4----4/6-6----6-4---------|
A|------------------------7----------------7------|
E|------------------------------------------------|</span></span>

[Pré-Refrão]

                       <b>F#m7</b>
É claro que ela já sonhou

Em se casar um dia
                 <b>C#m7</b>
Não estava nos planos

Ser vergonha pra família
                <b>F#m7</b>
Cada um que passou

Levou um pouco da sua vida
                  <b>A2</b>
E o resto que sobrou
                 <b>Am7</b>
Ela vende na esquina

[Refrão]

                  <b>E</b>
Pra ter o corpo quente

Eu congelei meu coração
             <b>B2/D#</b>      <b>B2</b>
Pra esconder a     tristeza

Maquiagem a prova da d'água
                   <b>F#m7</b>
Hoje você me vê assim

E troca de calçada
                       <b>Am7</b>
Só que amar dói muito mais

Do que o nojo na sua cara
                  <b>E</b>
Pra ter o corpo quente

Eu congelei meu coração
             <b>B2/D#</b>      <b>B2</b>
Pra esconder a     tristeza

Salto 15 e mini-saia
                   <b>F#m7</b>
Hoje você me vê assim

E troca de calçada
                    <b>A2</b>
Mas se soubesse um terço da história
                            <b>E</b>    <b>B2</b>
Me abraçava e não me apedrejava

                   <b>F#m7</b>
Hoje você me vê assim

E troca de calçada
                    <b>A2</b>
Mas se soubesse um terço da história
                            <b>E</b>
Me abraçava e não me apedrejava

----------------- Acordes -----------------
A2 = P2 4 2 2
Am6 = 4 2 1 2
Am7 = 7 P5 5 5
B2 = P4 6 4 4
C#m7 = 6 4 5 6
E = 2 1 0 2
F#m7 = 4 P2 2 2`;

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
