import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Marília Mendonça - Alô Porteiro

[Primeira Parte]

D9                                A9
   Pegue suas coisas que estão aqui
G
  Nesse apartamento
         D9         A9
Você não entra mais
D9                                  A9
   Olha o que me fez você foi me trair
G                                  D9
  Agora arrependido quer voltar atrás

[Segunda Parte]

    G
Já deu
                                 Bm
Cansei das suas mentiras mal contadas

Cresci
                               Em
Não acredito mais em conto de fadas
       G                  A9
Não adianta vir com baixarias

 D/F#  G
Mor___reu
                                   Bm
A mulher carinhosa e fiel que te amava
                        A9     G
Pega o elevador, a sua mala e vaza
       Em               A9
To avisando lá na portaria
       Em         A9
Que aqui você não entra mais

[Refrão]

        D9
Alô porteiro
                      A9
Tô ligando pra te avisar
                                Em
Que a partir de agora eu tô solteira
                       G
Já me cansei da brincadeira
         Em                 A9  G
Chame o táxi que ele vai pagar

  A9    D9
Alô porteiro
                      A9
Tô ligando pra te avisar
                     Em
Esse homem que está aí
              D/F#   G
Ele não pode mais subir
        A9
Tá proibido de entrar

[Solo] D9  A9  Em  D/F#  G

[Segunda Parte]

 D/F# G
Já   deu
                                 Bm
Cansei das suas mentiras mal contadas

Cresci
                               Em
Não acredito mais em conto de fadas
       G                  A9
Não adianta vir com baixarias

 D/F#   G
Mor____reu
                                   Bm
A mulher carinhosa e fiel que te amava
                        A9     G
Pega o elevador, a sua mala e vaza
       Em               A9
To avisando lá na portaria
       Em         A9
Que aqui você não entra mais

[Refrão]

        D9
Alô porteiro
                      A9
Tô ligando pra te avisar
                                Em
Que a partir de agora eu tô solteira
                       G
Já me cansei da brincadeira
         Em                 A9  G
Chame o táxi que ele vai pagar

  A9    D9
Alô porteiro
                      A9
Tô ligando pra te avisar
                     Em
Esse homem que está aí
              D/F#   G
Ele não pode mais subir
        A9         D5
Tá proibido de entrar

[Final]



----------------- Acordes -----------------
A9 = P2 4 2 2
Bm = 4 4 3 4
D9 = 0 2 3 2
Em = 5 4 5 5
G = 5 4 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AloPorteiroPage() {
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
