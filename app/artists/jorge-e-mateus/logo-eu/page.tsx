import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Jorge & Mateus - Logo Eu

[Intro] F#m  A  E
        F#m  A  E

[Primeira Parte]

E
  Eu te vi e já te quis
A
  Me vi tão feliz
C#m                          A
    Um amor que pra mim era sonho

E                      A
  Surpreendente provar   do que eu 

Só ouvi falar
C#m          B2         A
E você resolveu me mostrar

[Refrão]

     F#m
Logo eu que nem pensava
       A               E
Eu não   imaginava te merecer
    B2   
E agora sou o dono desse amor

   F#m                         A
Eu     nem quero saber por que
                 E
Eu só preciso viver
   B2                     F#m
O resto dessa vida com você

( A  E  B2 )   

[Primeira Parte]

E
  Te vi e já te quis
A
  Me vi tão feliz
C#m                          A
    Um amor que pra mim era sonho

E                      A
  Surpreendente provar   do que eu

Só ouvi falar
C#m          B2         A
E você resolveu me mostrar

[Refrão]

     F#m
Logo eu que nem pensava
       A               E
Eu não   imaginava te merecer
    B2   
E agora sou o dono desse amor

   F#m                         A
Eu     nem quero saber por quê
                 E
Eu só preciso viver
   B2   
O resto dessa vida com você

F#m
Eu que nem pensava
 A
Não imaginava
    E
Te merecer
    B2   
E agora sou o dono desse amor

F#m                      A
Eu nem quero saber por que
                 E
Eu só preciso viver
   B2                     F#m
O resto dessa vida com você

( A  E  B2 )  

   B2              F#m
O resto dessa vida     com você

----------------- Acordes -----------------
A = P2 2 2 2
B2 = P4 6 4 4
C#m = 2 1 2 2
E = 2 1 0 2
F#m = 4 2 2 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function LogoEuPage() {
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
