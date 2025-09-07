import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Belo - Pura Adrenalina

[Tab - Intro]

E|-4-5-4------2-3-2------4-5-4--------------|
B|-------5----------3----------5------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Intro] A7M  D7(11+)  C#m7  E7(9) 
        A7M  B7  E7M  E7(9) 
        A7M  D7(11+)  C#m7  E7(9)
        A7M  B7  

[Primeira Parte]

 C#m7     G#m7        A7M      B7
Nossa história foi assim no olhar
            E7M
Um beijo e mas
 A7M       D#m7     G#7(13-)
Fomos bem mais que somos
C#m7  G#m7        A7M     
E   agora quer mudar
    B7         E7M
Conter esse desejo
A7M        D#m7   G#7(13-)
    Aonde nós chegamos

[Pré-Refrão]

         A7M                   
Queria tanto que você fizesse
 G#7(13-)          C#m7
Parte da minha loucura
    E7(9)     A7M   
No carro, na rua
     B7      E7M  E7(13)
Na areia do mar
        A7M                    
Queria tanto com você uma
     G#7(13-)       C#m7
Aventura toda madrugada
     E7(9)   A7M     
Sem hora marcada
       G#7(13-)  C#m7  C#m7/B
Sem limite pra amar

[Refrão]

     A7M                                
Não deixa esse nosso lance
           A#º
Cair na rotina

Você tá fugindo dessa
       G#m7  
Adrenalina
  C#m7      Bm7        E7(9)
Que é o tempero da paixão
  A7M
Aceita, assumir de vez
              A#º
Essa vontade louca

Em qualquer lugar
              G#m7  
A gente tira roupa
C#m7          Bm7      E7(9)
Explodindo a nossa emoção

     A7M                                
Não deixa esse nosso lance
           A#º
Cair na rotina

Você tá fugindo dessa
       G#m7  
Adrenalina
  C#m7      Bm7        E7(9)
Que é o tempero da paixão
  A7M
Aceita, assumir de vez
              A#º
Essa vontade louca

Em qualquer lugar
              G#m7  
A gente tira roupa
C#m7          Bm7      E7(9)
Explodindo a nossa emoção

     A7M          B7          
Não tem porque fugir
           E7M (Frase 1)
Dessa atração

[Tab - Frase 1]

E|-4-5-4------------------------------------|
B|-------5----------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

( A7M  D7(11+)  C#m7  E7(9) )
( A7M  B7  E7M  E7(9) )
( A7M  D7(11+)  C#m7  E7(9) )
( A7M  B7 )

[Primeira Parte]

 C#m7     G#m7        A7M      B7
Nossa história foi assim no olhar
            E7M
Um beijo e mas
 A7M       D#m7     G#7(13-)
Fomos bem mais que somos
C#m7  G#m7        A7M     
E   agora quer mudar
    B7         E7M
Conter esse desejo
A7M        D#m7   G#7(13-)
    Aonde nós chegamos

[Pré-Refrão]

         A7M                   
Queria tanto que você fizesse
 G#7(13-)          C#m7
Parte da minha loucura
    E7(9)     A7M   
No carro, na rua
     B7      E7M  E7(13)
Na areia do mar
        A7M                    
Queria tanto com você uma
     G#7(13-)       C#m7
Aventura toda madrugada
     E7(9)   A7M     
Sem hora marcada
       G#7(13-)  C#m7  C#m7/B
Sem limite pra amar

[Refrão]

     A7M                                
Não deixa esse nosso lance
           A#º
Cair na rotina

Você tá fugindo dessa
       G#m7  
Adrenalina
  C#m7      Bm7        E7(9)
Que é o tempero da paixão
  A7M
Aceita, assumir de vez
              A#º
Essa vontade louca

Em qualquer lugar
              G#m7  
A gente tira roupa
C#m7          Bm7      E7(9)
Explodindo a nossa emoção

     A7M                                
Não deixa esse nosso lance
           A#º
Cair na rotina

Você tá fugindo dessa
       G#m7  
Adrenalina
  C#m7      Bm7        E7(9)
Que é o tempero da paixão
  A7M
Aceita, assumir de vez
              A#º
Essa vontade louca

Em qualquer lugar
              G#m7  
A gente tira roupa
C#m7          Bm7      E7(9)
Explodindo a nossa emoção

     A7M          B7          
Não tem porque fugir
           E7M (Frase 1)
Dessa atração

( A7M  D7(11+)  C#m7  E7(9) )
( A7M  B7  E7M  E7(9) )
( A7M  D7(11+)  C#m7  E7(9) )
( A7M  B7 )

[Primeira Parte]

 C#m7     G#m7        A7M      B7
Nossa história foi assim no olhar
            C7M  E7M
Um beijo e mas

----------------- Acordes -----------------
A#º = 6 X 5 6 5 X
A7M = X 0 2 1 2 0
B7 = X 2 1 2 0 2
Bm7 = X 2 4 2 3 2
C#m7 = X 4 6 4 5 4
C#m7/B = 7 4 6 4 5 4
C7M = X 3 2 0 0 X
D#m7 = X 6 8 6 7 6
D7(11+) = 10 X 10 11 9 X
E7(13) = X 7 X 7 9 9
E7(9) = X 7 6 7 7 X
E7M = X X 2 4 4 4
G#7(13-) = 4 X 4 5 5 4
G#m7 = 4 X 4 4 4 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PuraAdrenalinaPage() {
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
