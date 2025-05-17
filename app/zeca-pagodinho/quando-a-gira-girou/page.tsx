import CifraDisplay from "@/components/cifra-display";

const cifra = `
Zeca Pagodinho - Quando a Gira Girou

  G                C  G   G7
O céu de repente anuviou
  C                         G  
O vento agitou as ondas do mar
    D7                
E o que o temporal levou
    G
Foi tudo que deu pra guardar
   A7/4/9                     Am   D7
Só Deus sabe o quanto se labutou
   G                   C    G   G7  
Custou mas depois veio a bonança
    C                    G 
E agora é hora de agradecer
      D7                
Pois quando tudo se perdeu
    G                
E a sorte desapareceu
 Em       A7      Am    D7  G
Abaixo de Deus só ficou você

         D         D#º Em                      
Quando a gira girou    ninguém suportou
   A7             Am         
Só você ficou não me abandonou
          D         D#º   Em  
Quando o vento parou e a água baixou
    A7               C    G  
Eu tive a certeza do seu amor
          D         D#º   Em                      
Quando a gira girou    ninguém suportou
    A7            Am         
Só você ficou não me abandonou
          D        D#º   Em  
Quando o vento parou e a água baixou
    A7               C    G  
Eu tive a certeza do seu amor

              Am7      G  
Quando tudo parece perdido
         Am7            G  
É nessa hora que você vê
           F#7               Bm 
Quem é parceiro quem é teu amigo
             F#7                  Bm 
Quem é de ficar...  Quem é de correr
        C                G  
A tua mão me tirou do abismo
        B7              Em  
O teu axé evitou o meu fim
                             A7                         
Me ensinou o que é companheirismo e também a gostar
          D7                 
De quem gosta de mim

         D         D#º Em                      
Quando a gira girou    ninguém suportou
   A7             Am         
Só você ficou não me abandonou
          D         D#º   Em  
Quando o vento parou e a água baixou
    A7               C    G  
Eu tive a certeza do seu amor

              Am7            G  
Na hora que a gente menos espera
                   Am7       G  
No fim do túnel aparece uma luz
               F#7        Bm 
A luz de uma amizade sincera
              F#7              Bm 
Para ajudar a carregar nossa cruz
               C                 G  
Foi Deus quem pôs você no meu caminho
         B7                Em  
Na hora certa pra me socorrer
                        A7             
Eu não teria chegado sozinho a lugar nenhum
        D7          
Se não fosse você

         D         D#º Em                      
Quando a gira girou    ninguém suportou
   A7             Am         
Só você ficou não me abandonou
          D         D#º   Em  
Quando o vento parou e a água baixou
    A7               C    G  
Eu tive a certeza do seu amor

----------------- Acordes -----------------
A7 = 2 0 2 2
Am = 2 2 1 2
Am7 = 7 P5 5 5
B7 = 1 2 0 1
Bm = 4 4 3 4
C = 2 0 1 2
D = 4 2 3 4
D#º = 1 2 1 4
D7 = 4 2 1 4
Em = 5 4 5 5
F#7 = 4 3 P2 2
G = 5 4 3 5
G7 = P3 4 3 5
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
