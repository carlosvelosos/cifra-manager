import CifraDisplay from "@/components/cifra-display";

const cifra = `
Zeca Pagodinho - Camarão que dorme a onda Leva

D               A7           D
Não pense que meu coração é de papel
    D7                      G
Não brinque com o meu interior
G             A7           D           
Camarão que dorme a onda leva                  
    B7          Em      A7        D    D7
Hoje é o dia da caça, amanhã do caçador       

     D               Em         F#m
Não quero que nosso amor acabe assim
       Em                       A7    Am  D7
Um coração quando ama é sempre amigo
        G           A7       D
Só não faça gato e sapato de mi__im            
      Bm           Em         A7         D7
Pois aquele que dá pão, também dá castigo      
    D                A7
Não pense que meu coração

D               A7           D
Não pense que meu coração é de papel
    D7                      G
Não brinque com o meu interior
G           A7           D   
Camarão que dorme a onda leva                    
    B7          Em      A7        D   D7
Hoje é dia da caça, amanhã do caçador            

     D               Em         F#m
Não veja meu sentimento com desde__ém
       Em                       A7   Am  D7
Enquanto o bem existir o mal tem cura
        G           A7       D
A pedra é muito forte mas tem um porém, meu bem   
      Bm           Em         A7  D7
A água tanto bate até que fura                   
    D                A7
Não pense que meu coração

D               A7           D
Não pense que meu coração é de papel
    D7                      G
Não brinque com o meu interior
G            A7           D
Camarão que dorme a onda leva                    
    B7          Em      A7        D   D7
Hoje é dia da caça, amanhã do caçador             

    B7          Em      A7        D   
Hoje é dia da caça, amanhã do caçador                   
    D                A7
Não pense que meu coração

----------------- Acordes -----------------
A7 = 2 0 2 2
Am = 2 2 1 2
B7 = 1 2 0 1
Bm = 4 4 3 4
D = 4 2 3 4
D7 = 4 2 1 4
Em = 5 4 5 5
F#m = 4 2 2 4
G = 5 4 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {
  return <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />;
}
