import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Hugo & Guilherme - O Meu Coração Em Suas Mãos (part. Maiara e Maraisa)

(Essa é com vocês dois, é? Todo mundo?)

[Intro] F  C  Dm  Bb

 F             C                     Dm
Não foi coincidência encontrar contigo
Bb             C       F
Talvez seja o nosso destino
          C                         Dm
Eu quero dormir outra vez em teu peito
Bb        C               F
E depois acordar com seus beijos

          C                   Dm
Teu sexto sentido ainda sonha comigo
 Bb          C             F
Sei que logo estaremos unidos
                C                   Dm
Teu sorriso travesso ainda vive comigo
Bb                           Dm
Nós estamos no mesmo caminho

              C             Bb
Meu coração está em suas mãos
       C           Dm
Não me deixes cair
         C          Bb
Você sabe que estou
                   C
Presa em suas mãos

F           C                  Gm
Te envio poemas de meu punho e letra
         Bb                      F
Te envio canções pra que você entenda
                 C                    Gm
Te envio minhas fotos pra que você me veja
            Bb                    F
Não estamos juntos, mas tenho certeza
             C                    Gm
Assim, eu espero que nunca se esqueça
               Bb
Que o meu coração está em suas mãos

F          C            Gm
Cuidado, cuidado, muito cuidado (cuidado)
               Bb                   F
Que o meu coração está em suas mãos

( F  C  Dm  Bb  C  F )

F                C                      Dm
Não perco a esperança de encontrar contigo
     Bb            C            F
Não importa o que diga o destino
            C                   Dm
Eu quero manter teu perfume comigo
    Bb       C         Dm
E viver um amor proibido

              C             Bb
Meu coração está em suas mãos
       C           Dm
Não me deixes cair
         C          Bb
Você sabe que estou
                   C
Presa em suas mãos

F           C                  Gm
Te envio poemas de meu punho e letra
         Bb                      F
Te envio canções pra que você entenda
                 C                    Gm
Te envio minhas fotos pra que você me veja
            Bb                    F
Não estamos juntos, mas tenho certeza
             C                    Gm
Assim, eu espero que nunca se esqueça
               Bb
Que o meu coração está em suas mãos

F           C                  Gm
Te envio poemas de meu punho e letra
         Bb                      F
Te envio canções pra que você entenda
                 C                    Gm
Te envio minhas fotos pra que você me veja
            Bb                    F
Não estamos juntos, mas tenho certeza
             C                    Gm
Assim, eu espero que nunca se esqueça
               Bb
Que o meu coração está em suas mãos

F          C            Gm
Cuidado, cuidado, muito cuidado (cuidado)
               Bb                   F  C  Dm
Que o meu coração está em suas mãos

               Bb          C        F
Que o meu coração está em suas mãos

----------------- Acordes -----------------
Capotraste na 1ª casa
B*  = X 1 3 3 3 1 - (*C na forma de B)
C#*  = X 3 2 0 1 0 - (*D na forma de C#)
D#m*  = X X 0 2 3 1 - (*Em na forma de D#m)
F#*  = 1 3 3 2 1 1 - (*G na forma de F#)
G#m*  = 3 5 5 3 3 3 - (*Am na forma de G#m)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OMeuCoracaoEmSuasMaosPartMaiaraEMaraisaPage() {
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
