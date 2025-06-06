import CifraDisplay from "@/components/cifra-display";

const cifra = `
Grupo Revelação - A Pureza da Flor

[Intro] F  C/E  Dm  Cm  F7  Bb  Gm  C7  F  F  C7

F7+           Eb        Eb7+ Bb/G          Gm6     C7/9 
  Vou contar com você amor         pra chegar seja onde 
    C7
for
Bb               Am7          Am6    Gm7          Gm6   
Encontrar um cais   um lugar de  paz     para nunca mais
C7/9                  C7
      conviver com a dor
F7+           Eb        Eb7+ Bb/G         Gm6     C7/9  
  Vou contar com você amor        pra chegar seja onde 
  C7
for
 Dm       Dm/C Am7       Am6   Gm7          Gm6      C7/9
Todo desamor      e a desilusão    não tem mais lugar    
            Bb°
no meu coração
 Dm             Dm/C  Am7        Am6    Gm7           
Se eu puder entrar       no seu coração     você vai me 
C7/9     F7+
dar razão

   F7+          F6         C6
A pureza da flor  (sou eu)
              C/E     Dm
E o teu cobertor (sou eu)
             Cm7 F7    Bb              C7/9            F
Verdadeiro amor    sou eu (sou eu, sou eu, sou eu, sou eu)
   F7+          F6         C6
A pureza da flor  (sou eu)
              C/E     Dm
E o teu cobertor (sou eu)
             Cm7 F7    Bb              C7/9            F
Verdadeiro amor    sou eu (sou eu, sou eu, sou eu, sou eu)

F7+           Eb        Eb7+ Bb/G          Gm6     C7/9 
  Vou contar com você amor         pra chegar seja onde 
    C7
for
Bb               Am7          Am6    Gm7          Gm6   
Encontrar um cais   um lugar de  paz     para nunca mais
C7/9                  C7
      conviver com a dor
F7+           Eb        Eb7+ Bb/G         Gm6     C7/9  
  Vou contar com você amor        pra chegar seja onde 
  C7
for
 Dm       Dm/C Am7       Am6   Gm7          Gm6      C7/9
Todo desamor      e a desilusão    não tem mais lugar    
            Bb°
no meu coração
 Dm             Dm/C  Am7        Am6    Gm7           
Se eu puder entrar       no seu coração     você vai me 
C7/9     F7+
dar razão

   F7+          F6         C6
A pureza da flor  (sou eu)
              C/E     Dm
E o teu cobertor (sou eu)
             Cm7 F7    Bb              C7/9            F
Verdadeiro amor    sou eu (sou eu, sou eu, sou eu, sou eu)
   F7+          F6         C6
A pureza da flor  (sou eu)
              C/E     Dm
E o teu cobertor (sou eu)
             Cm7 F7    Bb              C7/9            F
Verdadeiro amor    sou eu (sou eu, sou eu, sou eu, sou eu)


----------------- Acordes -----------------
Am6 = 4 2 1 2
Am7 = 7 P5 5 5
Bb = P3 3 3 3
Bb° = 8 6 P5 5
C6 = 2 2 1 2
C7 = 2 3 1 2
C7/9 = 2 3 3 5
Cm = 1 0 1 1
Cm7 = 5 3 4 5
Dm = 3 2 3 3
Dm/C = P3 5 3 7
Eb = 5 3 4 5
Eb7+ = 1 3 3 5
F = 3 2 1 3
F6 = 3 2 1 0
F7 = 3 2 P1 1
F7+ = 3 2 1 2
Gm = 5 3 3 5
Gm6 = 0 0 0 2
Gm7 = 5 P3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function APurezaDaFlorPage() {
  return (
    <CifraDisplay
      title={title || ""}
      mainCifra={mainCifra || ""}
      chords={chords || ""}
    />
  );
}
