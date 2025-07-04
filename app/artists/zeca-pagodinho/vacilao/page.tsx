import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `
Zeca Pagodinho - Vacilão

[Intro] F  Fm  Bb7  C  A7
        D7  Dm  G7  C  G7(13)  G

C
Aquilo que era mulher
F                  G7              C
Pra não te acordar cedo, saia da cama na ponta do pé
F               G7              C
Só te chamava tarde sabia teu gosto, na bandeja café
F                 F7             Bb               G7(4)   G7
Chocolate, biscoito, salada de fruta             suco de mamão
      C
No almoço era filé mignon
 F             G7           C
Com arroz a lá grega, batata corada um vinho do bom
F              G7               C
No jantar era a mesma fartura do almoço

E ainda tinha opção

F                   G7          C      Am
É mais deu mole ela dispensou você
Bm7(5-)      E         Am
Chegou em casa outra vez doidão
Bm7(5-)      E7      A7
Brigou com a preta sem razão
Dm                  G7        C     Gm   C7
Quis comer arroz doce com quiabo
  F             G7        C    C7
Botou sal na batida de limão
                  F                                  Fm
Deu lavagem ao macaco, banana pro porco, osso pro gato
                                C
Sardinha ao cachorro, cachaça pro pato
                                   A7
Entrou no chuveiro de terno e sapato, não queria papo
      D7
Foi lá no porão, pegou três-oitão
       Dm                      G7
Deu tiro na mão do próprio irmão
               C             Gm          C7
Que quis lhe segurar, eu consegui lhe desarmar
                    F                                Fm
Foi pra rua de novo, entrou no velório pulando a janela
                            C
Xingou o defunto, apagou a vela
                             A7
Cantou a viúva mulher de favela, deu um beijo nela
          D7
O bicho pegou a polícia chegou
         Dm          G7
Um coro levou em cana entrou
             C
E ela não te quer mais
G7(5+)
Bem feito

----------------- Acordes -----------------
A7 = 2 0 2 2
Am = 2 2 1 2
Bb = P3 3 3 3
Bb7 = 3 1 3 3
Bm7(5-) = 3 2 0 0
C = 2 0 1 2
C7 = 2 3 1 2
D7 = 4 2 1 4
Dm = 3 2 3 3
E = 2 1 0 2
E7 = 2 1 0 0
F = 3 2 1 3
F7 = 3 2 P1 1
Fm = 3 1 1 3
G = 5 4 3 5
G7 = P3 4 3 5
G7(13) = 3 7 5 5
G7(4) = 0 0 1 3
G7(5+) = 3 0 0 1
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
