import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Jorge & Mateus - Amo Noite e Dia

[Intro] C#m  A9  E  B4

[Solo] 

[Primeira Parte] 

C#m                       A9
    Tem um pedaço do meu peito 

Bem colado ao teu
C#m                         A9
    Alguma chave, algum segredo 

Que me prende ao seu
C#m                A9                  
    Teu jeito perigoso de me conquistar
E5                   B4
   Teu jeito tão gostoso de me abraçar

C#m                        A9
    Tudo se perde se transforma 

Se ninguém te vê
C#m                          A9
    Eu busco às vezes nos detalhes

Encontrar você
C#m                A9           
    O tempo já não passa 
                 E5
Só anda pra trás
                   B4  
Me perco nessa estrada 
                 A9 B4
Não aguento mais

[Refrão] 

  Iê iê
C#m                       A9  
    Passo o dia, passo a noite 
          E
Tô apaixonado
                  B4  
Coração no peito sofre 
                 C#m
Sem você do lado
                   A9                E
Dessa vez tudo é real, nada de fantasia
                    B4
Saiba que eu te amo,  amo noite e dia

[Primeira Parte] 

C#m                       A9
    Tem um pedaço do meu peito 

Bem colado ao teu
C#m                         A9
    Alguma chave, algum segredo 

Que me prende ao seu
C#m                A9                  
    Teu jeito perigoso de me conquistar
E5                   B4
   Teu jeito tão gostoso de me abraçar

C#m                        A9
    Tudo se perde se transforma 

Se ninguém te vê
C#m                          A9
    Eu busco às vezes nos detalhes

Encontrar você
C#m                 A9           
    O tempo já não passa 
                 E5
Só anda pra trás
                   B4  
Me perco nessa estrada 
                 A9 B4
Não aguento mais

[Refrão] 

 Iê iê
C#m                       A9  
    Passo o dia, passo a noite 
          E
Tô apaixonado
                  B4  
Coração no peito sofre 
                 C#m
Sem você do lado
                   A9                E
Dessa vez tudo é real, nada de fantasia
                    B4
Saiba que eu te amo,  amo noite e dia

C#m                       A9  
    Passo o dia, passo a noite 
          E
Tô apaixonado
                  B4  
Coração no peito sofre 
                 C#m
Sem você do lado
                   A9               E
Dessa vez tudo é real nada de fantasia
                    B4
Saiba que eu te amo,  amo noite e dia

( C#m  A9  E  B4 )

[Solo] C#m  A9  E  B4

E|----------------------------------------------------|

----------------- Acordes -----------------
A9 = P2 4 2 2
B4 = P2 4 4 4
C#m = 2 1 2 2
E = 2 1 0 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AmoNoiteEDiaPage() {
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
