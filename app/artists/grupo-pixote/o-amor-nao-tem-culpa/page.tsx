import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Grupo Pixote - O Amor Não Tem Culpa

Introdução: Eb7+ Dm7 Cm7 Bb7+ Eb7+ Dm7 Cm7 F7/9
 Bb7+                             
Se um dia eu te encontrar de repente
                Gm7
Não fique sem graça
                   Eb7+   Dm7
Da um beijo e me abraça
          Cm7     F7/9
Pra vida ficar melhor
Bb7+
Se houve um problema entre a gente
                  Gm7
Deixa lá que isso passa
                       Eb7+   Dm7
Dá um beijo e me abraça
         Cm7            F7/9
Que o resto eu sei de cor
Gm7
Assim é melhor não brigar 
                  Dm7
Nem esquentar a cabeça
      Cm7                   F7/9
Que o tempo se encarrega logo 
                   Bb7+  F/A
De resolver a questão
  Gm7
Por isso anota ai na agenda
                     Dm7
E por favor não se esqueça
   Cm7              F7/9
Prefiro um carinho seu
                   Eb7+
Do que amor sem paixão
                        Dm7
Assim a gente não fica triste
 G7             Eb7+
E nem se machuca
                         Dm7
Assim a gente não fica triste
      G7  Cm7 Dm7  Eb7+
E o amor não tem culpa
                        Dm7
Assim a gente não fica triste
 G7             Eb7+
E nem se machuca
                        Dm7
Assim a gente não fica triste
     G7   Cm7  Dm7     Eb7+ %  Dm7  %  Cm7  F7/9 (45 43)
E o amor não tem  ....culpa...

----------------- Acordes -----------------
Bb7+ = 3 2 3 3
Cm7 = 5 3 4 5
Dm7 = 0 2 1 3
Eb7+ = 1 3 3 5
F7/9 = 3 2 4 5
G7 = P3 4 3 5
Gm7 = 5 P3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OAmorNaoTemCulpaPage() {
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
