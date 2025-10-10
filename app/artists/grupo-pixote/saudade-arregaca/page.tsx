import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Grupo Pixote - Saudade Arregaça

 Bb      F
Lê-lê-lê-lê
    Cm   Eb
Lê-lê-lê-lê
Gm     F
Fica a pergunta no ar
Cm         Eb
Será que dessa vez a gente vai dar certo
Gm  F          Cm               Eb
Tão perto e o nosso futuro tão incerto
 Gm    F
E se a gente parar
Cm         Eb
Será que o nosso coração aguenta
Gm   F           Eb        E  F
Nem tenta se não quiser ficar
F                           Cm
Daqui pra frente é tudo ou nada
                         Gm
Não há espaço pra meias palavras
                       F
Se for pra ser metade deixa como está
Bb
Tudo ou nada
      F                     Cm
Se for amor cê vem que tudo passa
Cm
Se for embora tá na cara
Eb              Bb
Saudade arregaça
                             F
Tá na sua mão agora é tudo ou nada
                        Cm
Se for amor cê vem que tudo passa
Cm
Se for embora tá na cara
 Eb             Bb
Saudade arregaça
Gm                 F
Fica a pergunta no ar
Cm        Eb
Será que dessa vez a gente vai dar certo
Gm    F           Cm           Eb
Tão perto e o nosso futuro tão incerto
 Gm      F
E se a gente parar
Cm          Eb
Será que o nosso coração aguenta
Gm       F         Eb       E  F
Nem tenta se não quiser ficar
F                          Cm
Daqui pra frente é tudo ou nada
                        Gm
Não a espaço pra meias palavras
                       F
Se for pra ser metade deixa como está
Bb
Tudo ou nada
      F                      Cm
Se for amor cê vem que tudo passa
 Cm
Se for embora tá na cara
Eb             Bb
Saudade arregaça
                             F
Tá na sua mão agora é tudo ou nada
                         Cm
Se for amor cê vem que tudo passa
Cm
Se for embora tá na cara
Eb             Bb
Saudade arregaça
                             F
Tá na sua mão agora é tudo ou nada
                        Cm
Se for amor cê vem que tudo passa
Cm
Se for embora tá na cara
Eb             Bb
Saudade arregaça
                             F
Tá na sua mão agora é tudo ou nada
                         Cm
Se for amor cê vem que tudo passa
Cm
Se for embora tá na cara
Eb             Bb
Saudade arregaça
Bb        F
Lê-lê-lê-lê
      Gm  Eb
Lê-lê-lê-lê
Eb            Bb
Saudade arregaça
Bb       F
Lê-lê-lê-lê
      Gm  Eb
Lê-lê-lê-lê
Eb            Bb
Saudade arregaça

----------------- Acordes -----------------
Bb = P3 3 3 3
Cm = 1 0 1 1
E = 2 1 0 2
Eb = 5 3 4 5
F = 3 2 1 3
Gm = 5 3 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SaudadeArregacaPage() {
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
