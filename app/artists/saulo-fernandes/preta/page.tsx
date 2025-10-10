import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Saulo Fernandes - Preta

[Intro] Fm  Bb  Cm7

                     Fm
Agora diz que não me quer
                     Bb          Cm7
Quer liberdade pra fazer o que quiser
                     Fm
Oxente quem te deu axé?
                   Bb              Cm7
Cadê a porra do juízo? Perguntou José
                      Fm
Agora diz que não me amou
               Bb              Cm7
Que não me sufocou e quer me deixar
                    Fm
Até pensei em me perder
               Bb             Cm7
Mas penso em você e fico a esperar

[Refrão]
                          Fm
Você me disse que não vai Preta
Bb   Cm7
Preta Preta

                        Fm
Até que ponto eu sou feliz?
                  Bb              Cm7
Se eu não tenho você até pra conversar
                   Fm
Você machuca o coração
                 Bb
Você me dá desilusão
                 Cm7
E ao mesmo tempo paz
                       Fm
E agora eu choro pra viver
               Bb
Sem ter o teu amor
                 Cm7
Sem ter o teu querer
                  Fm
E pra cabeça respirar
           Bb               Cm7
Eu fico na viagem de você voltar

[Refrão]
                          Fm
Você me disse que não vai Preta
Bb    Cm7
Preta Preta

----------------- Acordes -----------------
Bb = X 1 3 3 3 1
Cm7 = X 3 5 3 4 3
Fm = 1 3 3 1 1 1
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PretaPage() {
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
