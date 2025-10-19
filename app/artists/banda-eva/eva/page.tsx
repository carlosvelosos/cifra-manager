import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Banda Eva - Eva

[Intro] D  A/C#  Bm  Bm/A
        G  G/F#  Em  A

[Tab - Intro]

Parte 1 de 2
E|--------------7---------------------------7----------|
B|-7-----7-8-10---10--8h10p8--7------7-8-10---7--------|
G|-----7---------------------------7-------------9--7--|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

Parte 2 de 2
E|-----------------------------------------------------|
B|-----------------------------------------------------|
G|---9/11--9-------------------------------------------|
D|-9---------9/11--9--7--------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

[Primeira Parte]

          G
Meu amor,   olha só
                     A
Hoje o Sol não apareceu
     G                         
É o fim da aventura
                D   
Humana na Terra
                    G                                
Meu planeta, adeus!   Fugiremos
                      A     
Nós dois na arca de Noé
                    G
Mas olha bem, meu amor
                            D
O final da odisséia terrestre
              Em
Sou Adão e você será

[Refrão]

              D
Minha pequena Eva (Eva)
                       
O nosso amor na  
       A/C#  Bm
Última astronave (Eva)
                     Bm/A  G  G/F#  Em
Além do infinito eu vou  voar
         A
Sozinho com você

             D     
E voando bem alto (Eva)
                         
Me abraça pelo espaço 
   A/C#   Bm
De um instante (Eva)
                       
Me cobre com teu corpo 
Bm/A  G  G/F#  Em
E me dá
          A
A força pra viver

[Primeira Parte]

          G
Meu amor,   olha só
                     A
Hoje o Sol não apareceu
     G                         
É o fim da aventura
              D    
Humana na Terra
                    G                                
Meu planeta, adeus!   Fugiremos
                      A      
Nós dois na arca de Noé
                    G
Mas olha bem, meu amor
                            D
O final da odisséia terrestre
              Em
Sou Adão e você será

[Refrão]

              D
Minha pequena Eva (Eva)
                       
O nosso amor na  
       A/C#  Bm
Última astronave (Eva)
                     Bm/A  G  G/F#  Em
Além do infinito eu vou  voar
         A
Sozinho com você

             D     
E voando bem alto (Eva)
                         
Me abraça pelo espaço 
   A/C#   Bm
De um instante (Eva)
                       
Me cobre com teu corpo 
Bm/A  G  G/F#  Em
E me dá
          A
A força pra viver

[Ponte]

                        Bm   A
E pelo espaço de um instante
                G
Afinal, não há nada mais
       Em                  
Que o céu azul pra gente voar

[Segunda Parte] 

G 
  Sobre o Rio, Beirute
           A
Ou Madagascar
             G                      
Toda a Terra   reduzida a nada
      D
Nada mais
                             G
E a minha vida é um flash (flash)
                               A     
De controles botões anti-atômicos
                   G
Mas olha bem meu amor
                             D
No final da odisséia terrestre
              Em
Sou Adão e você

Diz pra mim o que você será

[Refrão Final]

              D
Minha pequena Eva (Eva)
                       
O nosso amor na  
       A/C#  Bm
Última astronave (Eva)
                     Bm/A  G  G/F#  Em
Além do infinito eu vou  voar
         A
Sozinho com você

             D     
E voando bem alto (Eva)
                         
Me abraça pelo espaço 
   A/C#   Bm
De um instante (Eva)
                       
Me cobre com teu corpo 
Bm/A  G  G/F#  Em
E me dá
          A
A força pra viver

              D
Minha pequena Eva (Eva)
                       
O nosso amor na  
       A/C#  Bm
Última astronave (Eva)
                     Bm/A  G  G/F#  Em
Além do infinito eu vou  voar
         A
Sozinho com você

             D     
E voando bem alto (Eva)
                         
Me abraça pelo espaço 
   A/C#   Bm
De um instante (Eva)
                       
Me cobre com teu corpo 
Bm/A  G  G/F#  Em
E me dá
          A
A força pra viver
                D
Minha pequena Eva

----------------- Acordes -----------------
A = X 0 2 2 2 0
A/C# = X 4 2 2 2 X
Bm = X 2 4 4 3 2
Bm/A = X 0 4 4 3 2
D = X X 0 2 3 2
Em = 0 2 2 0 0 0
G = 3 2 0 0 3 3
G/F# = 2 X 0 0 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function EvaPage() {
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
