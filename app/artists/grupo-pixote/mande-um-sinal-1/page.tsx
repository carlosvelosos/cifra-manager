import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Grupo Pixote - Mande Um Sinal

[Intro] Eb7M  Eb7(4/9)  Ab7M  Ab6  Abm6  

E|-11-10----11-10-----------------|
B|-------11-------11-13-13-11-11--|
G|--------------------------------|
D|--------------------------------|
A|--------------------------------|
E|--------------------------------|

E|--------------------------------|
B|-9-9---------------9-11-12-11---|
G|-----12-12-10-12-8--------------|
D|--------------------------------|
A|--------------------------------|
E|--------------------------------|


E|--------------------------------|
B|-9-11-12-11-9-11-12-9-11-12-8---|
G|--------------------------------|
D|--------------------------------|
A|--------------------------------|
E|--------------------------------|

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
A7(11+) = X 0 1 0 2 X
Ab/Bb = X 1 1 1 1 X
Ab6 = 4 X 3 5 4 X
Ab7M = 4 X 5 5 4 X
Abm6 = 4 X 3 4 4 X
B7M = X 2 4 3 4 2
Cm7 = X 3 5 3 4 3
Cm7(11) = X 3 3 3 4 3
Dm7(5-) = X X 0 1 1 1
E7(11+) = X X 2 3 3 4
E7M = X X 2 4 4 4
Eb/G = 3 X 1 3 4 X
Eb6(9) = X X 1 0 1 1
Eb7(4/9) = X X 1 1 2 1
Eb7M = X X 1 3 3 3
Eb7M(9) = X 6 5 7 6 X
F#7(13) = 2 X 2 3 4 X
F/A = 5 X 3 5 6 X
Fm7 = 1 X 1 1 1 X
Fm7(5-) = X X 3 4 4 4
G7(5+) = 3 X 3 4 4 3
Gm7(11) = 3 X 3 3 1 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MandeUmSinal1Page() {
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
