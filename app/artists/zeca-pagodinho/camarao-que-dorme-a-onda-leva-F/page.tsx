import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Zeca Pagodinho - Camarão que dorme a onda Leva

F               C7           F
Não pense que meu coração é de papel
    F7                      A#
Não brinque com o meu interior
A#            C7           F           
Camarão que dorme a onda leva                  
    D7          Gm      C7        F    F7
Hoje é o dia da caça, amanhã do caçador       

     F               Gm         Am
Não quero que nosso amor acabe assim
       Gm                       C7    Cm  F7
Um coração quando ama é sempre amigo
        A#          C7       F
Só não faça gato e sapato de mi__im            
      Dm           Gm         C7         F7
Pois aquele que dá pão, também dá castigo      
    F                C7
Não pense que meu coração

F               C7           F
Não pense que meu coração é de papel
    F7                      A#
Não brinque com o meu interior
A#          C7           F   
Camarão que dorme a onda leva                    
    D7          Gm      C7        F   F7
Hoje é dia da caça, amanhã do caçador            

     F               Gm         Am
Não veja meu sentimento com desde__ém
       Gm                       C7   Cm  F7
Enquanto o bem existir o mal tem cura
        A#          C7       F
A pedra é muito forte mas tem um porém, meu bem   
      Dm           Gm         C7  F7
A água tanto bate até que fura                   
    F                C7
Não pense que meu coração

F               C7           F
Não pense que meu coração é de papel
    F7                      A#
Não brinque com o meu interior
A#           C7           F
Camarão que dorme a onda leva                    
    D7          Gm      C7        F   F7
Hoje é dia da caça, amanhã do caçador             

    D7          Gm      C7        F   
Hoje é dia da caça, amanhã do caçador                   
    F                C7
Não pense que meu coração

----------------- Acordes -----------------
C7 = 2 3 1 2
Cm = 1 0 1 1
D7 = 4 2 1 4
Dm = 3 2 3 3
F = 3 2 1 3
F7 = 3 2 P1 1
Gm = 5 3 3 5
Am = 2 2 1 2
A# = P3 3 3 3
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
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}
