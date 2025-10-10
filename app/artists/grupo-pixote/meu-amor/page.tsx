import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Grupo Pixote - Meu Amor

[Intro] E7M(9)  B7M  G#m7  G7M 
        F#7(4)  B7M  F#7(4)

     B9                   E7M(9)
Minha pele sente frio sem você
      B9              G#m7      G7M  F#7(4)
Teu cheiro ainda está em mim, no ar
 G#m7         E7M          B7M
E o que fa....zer então pra suportar
  B7/13                 E7M
Essa vontade sofre meu coração
         C#m7            F#7(4)        B7M
Volta pra mim meu corpo clama por você

[Refrão]

F#7(4)  F#7   B7M
Meu amor
  F#/Bb                A7(13)  G#7
Não consegui dormir direito
    C#m7
Por favor
               C#m/B  F#7(4)  F#7(13) 
Diz que vai voltar pra mim
   B7M            F#/A#      A7(13)       G#7                  
Telefona, nem se for pra dizer que acabou
       C#m7         Ebm7
Já não posso mais viver
       E7M         F#7(4)     B7M   F#7(4)  F#7
Não aguento mais sofrer de amor 

   B9                      E7M
Será que ainda lembro de nós dois
   B9           G#m7     G7M  F#7(4)
Você partiu sem me dizer adeus
G#m7      E7M       
E eu sofro de paixão
B7M               B7(13)
Sem esse amor na minha vida
E7M                 
Não dá pra te esquecer
C#m7                        F#7(11)  B7M        
Volta pra mim meu corpo clama por você

[Refrão] 

G7(4)  G7  C7M
  Meu amor
             G/B  Gm/Bb  A7
Não consegui dormir direito
    Dm7 
Por favor
       Dm/C      F/G  G7(13)  G7
Diz que vai voltar pra mim
   C7M           G/B  Gm/Bb      A7
Telefona, nem se for pra dizer que acabou
       Dm7         Em7
Já não posso mais viver
       Dm7         G7     C7M   Fm6  C7M
Não aguento mais sofrer de amor

G7(4)  G7  C7M
  Meu amor
             G/B  Gm/Bb  A7
Não consegui dormir direito
    Dm7 
Por favor
       Dm/C      F/G  G7(13)  G7
Diz que vai voltar pra mim
   C7M           G/B  Gm/Bb      A7
Telefona, nem se for pra dizer que acabou
       Dm7         Em7
Já não posso mais viver
       Dm7         G7     C7M   Fm6  C7M
Não aguento mais sofrer de amor

----------------- Acordes -----------------
A7 = 2 0 2 2
A7(13) = 5 9 7 7
B7(13) = 7 11 9 9
B7/13 = 7 11 9 9
B7M = 4 3 4 4
B9 = P4 6 4 4
C#m/B = P2 4 2 6
C#m7 = 6 4 5 6
C7M = 2 0 0 2
Dm/C = P3 5 3 7
Dm7 = 0 2 1 3
E7M = 2 1 0 1
E7M(9) = 2 5 5 5
Ebm7 = 1 3 2 4
Em7 = 2 0 0 0
F#7 = 4 3 P2 2
F#7(11) = 9 9 7 8
F#7(13) = 2 6 4 4
F#7(4) = 9 9 7 8
Fm6 = 3 1 1 0
G#7 = P4 5 4 6
G#m7 = 6 P4 4 4
G7 = P3 4 3 5
G7(13) = 3 7 5 5
G7(4) = 0 0 1 3
G7M = 5 4 3 4
Gm/Bb = 12 12 11 12
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MeuAmorPage() {
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
