import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `
Zeca Pagodinho - Toda Hora

      A7
Toda hora
      Dm           A7            Dm    D7
Toda hora alguém me chama pra beber
     Gm              D/A         Bb6
Toda hora alguém me chama pra zoar
    C7                          F  Dm
Porque ninguém me chama pra benzer
      Bb           Bb/G#           A7
Porque ninguém me chama pra rezar

Dm              A7           Dm      D7
Só vou pra batizado quando é samba
           Gm    D/A      Bb6
Compadre meu precisa batucar
C7                           F    Dm
Eu sou da saideira que descamba
Bb              Bb/G#          A7
Aqui não tem hora pra acabar

Refrão
   Dm           A7          Dm
Amigo eu nunca fiz bebendo leite
  C           C7            F   D7
Amigo eu não criei bebendo chá
 Gm         G#º             Dm    F7
Eu sou da madrugada, me respeite
    Bb6        A7         Dm   A7
Eu sei a hora de ir trabalhar

           Dm        A7             Dm    D7
Não sou sujeito de ficar enchendo a cara
          Gm       D/A            Bb6
Quem escâncara não vê o mundo girar
           C7                  F   Dm
Pra ficar bom, é melhor tomar remédio
     Bb             Bb/G#           A7
O meu tédio é quando vem fechar o bar

            Dm    A7           Dm    D7
Também não vou ficar levando bronca
          Gm           D/A            Bb6
Feche a conta, hoje eu preciso pendurar
        C7                      F   Dm
Já calibrei, já tirei a minha onda
Bb            Bb/G#           A7
Ainda tenho casa pra cuidar

----------------- Acordes -----------------
A7 = 2 0 2 2
Bb = P3 3 3 3
Bb6 = P3 3 3 5
C = 2 0 1 2
C7 = 2 3 1 2
D7 = 4 2 1 4
Dm = 3 2 3 3
F = 3 2 1 3
F7 = 3 2 P1 1
G#º = 6 4 P3 3
Gm = 5 3 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
