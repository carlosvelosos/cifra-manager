import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Marília Mendonça - Leão

[Intro] F# A#  D#m
        B  F# A#  D#m

[Primeira Parte]

       B                  F#
Que o Sol da manhã te dissolva
        A#                  D#m
Seu vampiro de filmes pastelão
 B                   F#
Mas quem vai nos julgar?
         A#           D#m
Sou seu despenteado leão

[Segunda Parte]

B                        F#
  Sei que cê me entende bem
                        A#
Sempre foge quando namora

Se você não ama ninguém
D#m                            B
    Porque tá me escutando agora?

     F#
Sua linda, tão louca
           A#
Minha Monalisa, tira a minha roupa
 D#m             B
Me fascina nessa   sina
             F#
Me beija na boca
                A#
Minha mulher menina
                    D#m
Me ensina ser vida louca
             B
Teu olho piscina
                       F#
Me afoga e faz boca a boca
              A#
Renova minha rima
                         D#m
Vem de garfo que hoje é sopa, menina

[Terceira Parte]

 B                   F#  A#  D#m
Mas quem vai nos julgar?
 B            F# A#  D#m
Vilão particular

   B              F#
Se eu subo nesse palco aqui
     A#            D#m
Foi Deus que me criou assim
      B         F#               A#
E os holofotes vem ao meu encontro
            D#m           B
É que eu te amo e nem te conto
      F#                A#   D#m
Não, não posso ser seu santo

 B             F#
Sou fato ou hipótese
 A#                 D#m
Sou rei, cigano ou nômade
 B                 F#        A#
Desculpe esse meu jeito soberano
         D#m                B
Mas hoje é por você que eu canto
F#                 A#   D#m
É por você que eu canto

[Quarta Parte]

B                        F#
  Sei que cê me quer também
                   A#
Marília leoa gostosa
                    D#m
Posso te ligar meu bem?
                          B
Que que cê tá fazendo agora?
     F#
Tão lindo, tão louco
             A#
Meu grande amigo
                  D#m
Depois de você os outros são outros
         B                 F#
Cê tá fodido, vamo fazer amor
                      A#
Cantar o sertanejo antigo
             D#m
Me beija na boca, amor
 B                     F#
Pode ser até que você não me dê moral
  A#                       D#m
Até me ver no espaço pela banca de jornal

[Final] B  F# A#  D#m
        B  F# A#  D#m


----------------- Acordes -----------------
Capotraste na 2ª casa
B*  = P4 4 4 4 - (*C# na forma de B)
D#m*  = 4 3 4 4 - (*Fm na forma de D#m)
F#*  = 4 3 2 4 - (*G# na forma de F#)
A#*  = P3 3 3 3 - (*C na forma de A#)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function LeaoPage() {
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
