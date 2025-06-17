import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Marília Mendonça - Esqueça-me Se For Capaz (part. Maiara & Maraisa)

[Intro] Em  A  F#m  Bm

[Primeira Parte] 

 Em
Já que devolveu minhas roupas
 A
Já que arquivou nossas fotos
 F#m                     Bm
Deve ter outra pessoa, aposto

[Pré-Refrão] 

 Em
Tá aproveitando a vida
           A
Os novos amigos
                               F#m
Indo pra lugares que não ia comigo
                       Bm
Tá se enganando e nem sabe disso

[Refrão] 

               Em
Beijar outras bocas depois que termina
           A
É fácil demais
                                 F#m
Fazer sexo por fazer todo mundo faz
                   Bm
Mas esqueça-me se for capaz

          Em
Pode namorar e postar
                        A
Pra tentar tirar minha paz
                            F#m
Mudar telefone, de cidade, vai
                   Bm
Mas esqueça-me se for capaz

( Em  A  F#m  Bm )

[Pré-Refrão] 

 Em
Tá aproveitando a vida
           A
Os novos amigos
                               F#m
Indo pra lugares que não ia comigo
                       Bm
Tá se enganando e nem sabe disso

[Refrão final] 

               Em
Beijar outras bocas depois que termina
           A
É fácil demais
                                 F#m
Fazer sexo por fazer todo mundo faz
                   Bm
Mas esqueça-me se for capaz

          Em
Pode namorar e postar
                        A
Pra tentar tirar minha paz
                            F#m
Mudar telefone, de cidade, vai
                   Bm
Mas esqueça-me se for capaz

( Em  A )

               F#m
Esqueça-me se for capaz
               Bm       Em
Esqueça-me se for capaz

----------------- Acordes -----------------
A = P2 2 2 2
Bm = 4 4 3 4
Em = 5 4 5 5
F#m = 4 2 2 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EsquecaMeSeForCapazPartMaiaraMaraisaPage() {
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
