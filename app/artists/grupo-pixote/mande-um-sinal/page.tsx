import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Grupo Pixote - Mande Um Sinal

[Intro] Eb7M  Eb7(4/9)  Ab7M  Ab6  Abm6  

[Primeira Parte]

 Eb7M          Fm7(5-)  E7(11+)  Eb7M
    Sonhei contigo        ôôô
          Ab7M  Ab6   B7M
Agora eu sei      que era você eu não
           Eb6(9)
Enxerguei como  num velho ditado eu
        B7M
Falhei só dei valor quando eu te perdi
     Ab/Bb    Fm7      Ab/Bb   Eb6(9)
Vacilei      vem   me perdo----ar

          Fm7(5-)  E7(11+)  Eb6(9)
Estou perdi_______do      ôôô
         Ab7M  Ab6  B7M
Meu coração       quer se vingar de
               Cm7(11)
Tudo que passou   quer maltratar me
                B7M
Fazer sofredor não deixa eu pensar em
               Ab/Bb
Mais nada a não ser nesse amor

[Refrão]

 Eb7(4/9)    Ab7M       
Mande  um sinal dá um alô dá uma
             Ab/Bb          
Chance pro amor    pois eu não tô
                  Gm7(11)
Legal mande um sinal se a saudade
                  Cm7         A7(11+)
Aumentar vai ser golpe fatal mande
      F/A
Um sinal eu preciso dizer que minha
 Dm7(5-)            G7(5+)       Cm7
Vida   parou sem você     tá um caos

Eb7(4/9)       Ab7M       
  Mande  um sinal dá um alô dá uma
               Ab/Bb          
Chance pro amor     pois eu não tô
                 Gm7(11)
Legal mande um sinal se a saudade
                  Cm7         A7(11+)
Aumentar vai ser golpe fatal mande
      F/A
Um sinal eu preciso dizer que minha
Dm7(5-)             G7(5+)       Cm7
Vida   parou sem você     tá um caos

( B7M  Ab/Bb )

[Primeira Parte]

 Eb7M          Fm7(5-)  E7(11+)  Eb7M
    Sonhei contigo        ôôô
          Ab7M  Ab6   B7M
Agora eu sei      que era você eu não
           Eb6(9)
Enxerguei como  num velho ditado eu
        B7M
Falhei só dei valor quando eu te perdi
     Ab/Bb    Fm7      Ab/Bb   Eb6(9)
Vacilei      vem   me perdo----ar

          Fm7(5-)  E7(11+)  Eb6(9)
Estou perdi_______do      ôôô
         Ab7M  Ab6  B7M
Meu coração       quer se vingar de
               Cm7(11)
Tudo que passou   quer maltratar me
                B7M
Fazer sofredor deixa eu pensar em
               Ab/Bb
Mais a não ser esse amor

[Refrão]

 Eb7(4/9)    Ab7M       
Mande  um sinal dá um alô dá uma
             Ab/Bb          
Chance pro amor    pois eu não tô
                  Gm7(11)
Legal mande um sinal se a saudade
                  Cm7         A7(11+)
Aumentar vai ser golpe fatal mande
      F/A
Um sinal eu preciso dizer que minha
 Dm7(5-)            G7(5+)       Cm7
Vida   parou sem você     tá um caos

Eb7(4/9)       Ab7M       
  Mande  um sinal dá um alô dá uma
               Ab/Bb          
Chance pro amor     pois eu não tô
                 Gm7(11)
Legal mande um sinal se a saudade
                  Cm7         A7(11+)
Aumentar vai ser golpe fatal mande
      F/A
Um sinal eu preciso dizer que minha
Dm7(5-)             G7(5+)       Cm7
Vida   parou sem você     tá um caos

Eb7(4/9)       Ab7M       
  Mande  um sinal dá um alô dá uma
               Ab/Bb          
Chance pro amor     pois eu não tô
                 Gm7(11)
Legal mande um sinal se a saudade
                  Cm7         A7(11+)
Aumentar vai ser golpe fatal mande
      F/A
Um sinal eu preciso dizer que minha
Dm7(5-)             G7(5+)       Cm7
Vida   parou sem você     tá um caos

[Final] B7M  Ab/Bb  Eb/G  F#7(13)  
        B7M  E7M  E7(11+)  Eb7M(9)

----------------- Acordes -----------------
A7(11+) = 7 6 4 5
Ab6 = 6 5 4 3
Ab7M = 1 0 1 1
Abm6 = 1 1 1 3
B7M = 4 3 4 4
Cm7 = 5 3 4 5
Cm7(11) = 5 5 6 8
Dm7(5-) = 0 P1 1 3
E7(11+) = 2 3 3 2
E7M = 2 1 0 1
Eb6(9) = 1 0 1 3
Eb7M = 1 3 3 5
Eb7M(9) = 1 3 3 3
F#7(13) = 2 6 4 4
Fm7 = 3 5 4 6
Fm7(5-) = 3 4 4 6
G7(5+) = 3 0 0 1
Gm7(11) = 0 0 1 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MandeUmSinalPage() {
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
