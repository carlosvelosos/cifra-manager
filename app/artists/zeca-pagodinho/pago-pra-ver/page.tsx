import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `
Zeca Pagodinho - Pago pra Ver

(intro) Dm  Bº  Em5-/7  Gm6  Dm  A5+7

      Dm               Dm5+           Dm
Pago pra ver.....você rogar a minha volta
E      A7      Dm                   A7      A/C#
...Minha revolta.....tá na sua ingratidão
      Em5-/7             Gm6           A7
Quem deu amor, que se entregou.....não merecia
    Em5-/7           A7       Dm
Uma partida.....sem deixar explicação

  E   A7      Bº        A7/9-           Dm
.....Quando você chegou pra mim.....foi tanta jura
       Am5-/7    D7         Gm
Tanta promessa desse amor jamais ter fim
   Em5-/7                Dm
Agora vejo...foi somente o desejo
             Em5-/7(A7)     Eb7         ( C7  B7 )
Simplesmente um ensejo......pra mais uma curtição

         Gm                       Dm
Enquanto eu, que apostei todas as cartas
           Em5-/7              A7        Dm       (Para tudo)
Nesse amor que me descarta.....só a dor, desilusão

    A7                            Dm      ( A7  Dm )
Vou refazer minha vida....mudar o meu telefone
    Eb7       D7          Gm
Cicatrizar a ferida.....tirar o seu sobrenome

    Gm6                                   Dm/F      Dm
O que restou de nós dois....vou apagar da lembrança
      Em5-/7      A5+7         Dm
E não vou mais me entregar.....feito criança

            A7                     Dm      ( A7  Dm )
Vou refazer minha vida....mudar o meu telefone
    Am5-/7         D7           Gm
Cicatrizar a ferida.....tirar o seu sobrenome

     Gm6                                  Dm/F     Dm
O que restou de nós dois....vou apagar da lembrança
      Em5-/7      A5+7       Dm
E não vou mais me entregar.....feito criança

----------------- Acordes -----------------
A/C# = 7 6 5 7
A5+7 = 5 2 2 3
A7 = 2 0 2 2
A7/9- = 7 6 8 8
Am5-/7 = 7 6 4 5
B7 = 1 2 0 1
Bº = 0 1 0 3
C7 = 2 3 1 2
D7 = 4 2 1 4
Dm = 3 2 3 3
Dm/F = 12 10 10 12
Dm5+ = P3 3 3 3
E = 2 1 0 2
Eb7 = 5 3 2 5
Em5-/7 = 2 3 3 2
Gm = 5 3 3 5
Gm6 = 0 0 0 2
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
