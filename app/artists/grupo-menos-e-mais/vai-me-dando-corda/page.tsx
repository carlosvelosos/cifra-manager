import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Grupo Menos É Mais - Vai Me Dando Corda

[Intro] Bb7M(9)  Bb7M  Ab7M(9)  Ab7M
        Gb7M(9)  Gb7M  Bb6(9)

[Primeira Parte]

Bb6(9)
       Eu tinha tudo pra não ir
Bb/Ab                               Eb7M(9)
      Foi pura sorte te conheci nesse domingo
                Ebm6
E esse domingo foi tão lindo
Bb6(9)
       Tantos amigos em comum
           Bb/Ab
Mas nunca vi você sambando em lugar algum
         Eb7M(9)              Ebm6
Só no domingo e esse domingo foi tão lindo
        Bb6(9)
Puro calor e eu ligado em você
        Bb/Ab
Até segui no instagram pra saber qual vai ser
            Eb7M(9)
Antes de me envolver já deixei tudo claro
     Ebm6
Sou complicado, apegado
   Bb9
E ainda

Tenho a porcentagem de safado
   Bb/Ab
É só ligar os fatos
    Gº             Ebm6  Ab6(9)
Melhor tomar cuidado

[Refrão]

 Bb6(9)
Vai me dando corda
                       Bb/Ab
Que rapidinho eu tô batendo na sua porta
                       Eb7M(9)
A gente brinca de se apega e não se solta

Depois não tem volta
Gb7M                   Ab6(9)
     Pensa na proposta

 Bb6(9)
Vai me dando corda
                       Bb/Ab
Que rapidinho eu tô batendo na sua porta
                       Eb7M(9)
A gente brinca de se apega e não se solta

Depois não tem volta
Gb7M                   Ab6(9)
     Pensa na proposta

 Bb6(9)
Vai me dando corda
                       Bb/Ab
Que rapidinho eu tô batendo na sua porta
                       Eb7M(9)
A gente brinca de se apega e não se solta

Depois não tem volta
Gb7M                   Ab6(9)
     Pensa na proposta

 Bb6(9)
Vai me dando corda
                       Bb/Ab
Que rapidinho eu tô batendo na sua porta
                       Eb7M(9)
A gente brinca de se apega e não se solta

Depois não tem volta
Gb7M
     Pensa na proposta
        Ab6(9)
Que eu fecho com você

( Bb6(9)  Ab6(9)  Gb7(5-) F7(4/9) )

[Primeira Parte]

Bb6(9)
       Eu tinha tudo pra não ir
          Bb/Ab                    Eb7M(9)
Foi pura sorte te conheci nesse domingo
                Ebm6
E esse domingo foi tão lindo
Bb6(9)
       Tantos amigos em comum
           Bb/Ab
Mas nunca vi você sambando em lugar algum
         Eb7M(9)              Ebm6
Só no domingo e esse domingo foi tão lindo
        Bb6(9)
Puro calor e eu ligado em você
        Bb/Ab
Até segui no instagram pra saber qual vai ser
            Eb7M(9)
Antes de me envolver já deixei tudo claro
     Ebm6
Sou complicado, apegado
   Bb9
E ainda

Tenho a porcentagem de safado
   Bb/Ab
É só ligar os fatos
    Gº             Ebm6  Ab6(9)
Melhor tomar cuidado

[Refrão Final]

 Bb6(9)
Vai me dando corda
                       Bb/Ab
Que rapidinho eu tô batendo na sua porta
                       Eb7M(9)
A gente brinca de se apega e não se solta

Depois não tem volta
Gb7M                   Ab6(9)
     Pensa na proposta

 Bb6(9)
Vai me dando corda
                       Bb/Ab
Que rapidinho eu tô batendo na sua porta
                       Eb7M(9)
A gente brinca de se apega e não se solta

Depois não tem volta
Gb7M                   Ab6(9)
     Pensa na proposta

 Bb6(9)
Vai me dando corda
                       Bb/Ab
Que rapidinho eu tô batendo na sua porta
                       Eb7M(9)
A gente brinca de se apega e não se solta

Depois não tem volta
Gb7M
     Pensa na proposta
  Ab6(9)
Pra não se perder

 Bb6(9)
Vai me dando corda
                       Bb/Ab
Que rapidinho eu tô batendo na sua porta
                       Eb7M(9)
A gente brinca de se apega e não se solta

Depois não tem volta
Gb7M                   Ab6(9)
     Pensa na proposta

[Final] Bb6(9)  Ab6(9)  Gm7(11) F7(4/9)
        Bb6(9)  Ab6(9)  Ebm6
        Bb6(9)  Ab6(9)  Gb7(5-) F7(4/9)
        Bb6(9)  Ab6(9)  Ebm6  B7M  Bb7M


----------------- Acordes -----------------
Ab6(9) = 4 3 3 3 X X
Ab7M = 4 X 5 5 4 X
Ab7M(9) = 4 3 5 3 X X
B7M = X 2 4 3 4 2
Bb/Ab = 4 X 3 3 3 X
Bb6(9) = 6 5 5 5 X X
Bb7M = X 1 3 2 3 1
Bb7M(9) = X 1 0 2 1 X
Bb9 = X 1 3 3 1 1
Eb7M(9) = X 6 5 7 6 X
Ebm6 = X X 1 3 1 2
F7(4/9) = X X 3 3 4 3
Gb7(5-) = 2 X 2 3 1 X
Gb7M = 2 X 3 3 2 X
Gb7M(9) = 2 1 3 1 X X
Gm7(11) = 3 X 3 3 1 X
Gº = 3 X 2 3 2 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VaiMeDandoCordaPage() {
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
