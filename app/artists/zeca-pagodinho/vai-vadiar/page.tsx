import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";const cifra = `
Zeca Pagodinho - Vai Vadiar

[Intro] Dm  Em7(5-)  A7  Dm  Bb7
        A7  Dm  A7  Dm  A7

[Tab - Riff]

Dm
  Eu quis te dar um grande amor
        Em7(5-)   A7      Dm      Bb
Mas você não.........se acostumou
       A7
A vida de um lar
Dm/F        A7/E     Dm           A7
O que você quer é vadiar...vai vadiar
    Dm   Dm/C    Em7(5-)       Bb7
Vai vadiar...vai vadiar...vai vadiar
 A7     Dm          A7/E
Vai vadiar...vai vadiar
      Dm   Dm/C    Em7(5-)     Bb7
Vai vadiar...vai vadiar...vai vadiar
 A7     Dm      A7/E
Vai vadiar
Dm           A7            Dm
Agora não precisa se preocupar
               C7                           F
Se passares da hora eu não vou mais lhe buscar
         A7     Bb7          A7         Dm
Não vou mais pedir...nem tampouco implorar
              A7              Em7(5-)
Você tem a mania de ir pra orgia
           Dm
Só quer vadiar
                A7                A/C#
Você vai pra folia se entrar numa fria
              Dm
Não vem me culpar
        A7/E
Vai VADIAR!
    Dm   Dm/C    Em7(5-)       Bb7
Vai vadiar...vai vadiar...vai vadiar
 A7     Dm          A7/E
Vai vadiar...vai vadiar

    Dm   Dm/C    Em7(5-)        Bb7
Vai vadiar...vai vadiar...vai vadiar
 A7     Dm
Vai vadiar
               A7                               Dm
Quem gosta da orgia da noite pro dia não pode mudar

     Em7(5-)             A7           Dm
Vive outra fantasia não vai se acostumar
 Dm5+   Dm6           C7             F
Eu   errei quando tentei lhe dar um lar
     Dm    Dm/C  Bb7                  A7               Dm
Você gosta do sereno e meu mundo é pequeno pra lhe segurar
                 Bb7           A7             Dm
Vai procurar alegria fazer moradia na luz do luar
       A7/E
Vai VADIAR!

       Dm   Dm/C    Em7(5-)  A7    Bb7
Vai vadiar...vai vadiar...vai vadiar
 A7     Dm          A7/E
Vai vadiar...vai vadiar

    Dm      Dm/C     Em7(5-)  A7    Bb7
Vai vadiar...vai vadiar...vai vadiar
 A7     Dm              A7
Vai vadiar...eu quis te dar

----------------- Acordes -----------------
A/C# = 7 6 5 7
A7 = 2 0 2 2
A7/E = 11 9 8 7
Bb = P3 3 3 3
Bb7 = 3 1 3 3
C7 = 2 3 1 2
Dm = 3 2 3 3
Dm/C = P3 5 3 7
Dm/F = 12 10 10 12
Dm5+ = P3 3 3 3
Dm6 = 0 2 0 3
Em7(5-) = 2 3 3 5
F = 3 2 1 3
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
