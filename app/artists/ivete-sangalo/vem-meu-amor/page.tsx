import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Ivete Sangalo - Vem Meu Amor

               E                     A
Quando eu te vejo paro logo em seu olhar
        F#m             Cº        C#m
O meu desejo é que eu possa te beijar
                                     A
Sentir seu corpo me abrigar em seu calor
               B7                   E
Hoje o que eu quero é ganhar o seu amor

                              A
E fico assim querendo o seu prazer
         F#m                   C#m
Eu não consigo um minuto sem te ver
                            A
Sua presença alegra meu coração
          B7                     E
E é pra você que eu canto essa canção

         E                  A
Vem meu amor me tirar da solidão
         F#m       Cº       C#m 
Vem meu amor me tirar da solidão
            
Vem para o Olodum
            A
Vem dançar no Pelô
         B7
Vem meu amor

Chega pra cá me dá a mão

          E                 A    
Vem meu amor me tirar da solidão
         F#m       Cº       C#m 
Vem meu amor me tirar da solidão

Vem para o Olodum
            A
Vem dançar no Pelô
          B7
Vem meu amor

Chega pra cá me dá a mão

  E
E fico assim querendo o seu prazer
         F#m        Cº           C#m
Eu não consigo um minuto sem te ver
                            A
Sua presença alegra meu coração
          B7                     E
E é pra você que eu canto essa canção

         E                  A
Vem meu amor me tirar da solidão
         F#m       Cº       C#m 
Vem meu amor me tirar da solidão
            
Vem para o Olodum
            A
Vem dançar no Pelô
         B7
E só assim conquistarei o seu 
   E
Coração

----------------- Acordes -----------------
A = X 0 2 2 2 0
B7 = X 2 1 2 0 2
C#m = X 4 6 6 5 4
Cº = X 3 4 2 4 2
E = 0 2 2 1 0 0
F#m = 2 4 4 2 2 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VemMeuAmorPage() {
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
