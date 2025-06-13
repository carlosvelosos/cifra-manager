import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `
Zeca Pagodinho - Deixa a Vida Me Levar

[Intro] A  B7  C#m7  C#7
        ( F#m  G#m  A  B7 )
        E  B7

[Primeira Parte]

    E                   B7         E
Eu já passei por quase tudo nessa vida
      C#7         F#m                      
Em matéria de guarida
        B7            E  B7 
Espero ainda a minha vez
    E                 B7       E
Confesso que sou de origem pobre
 C#7               F#m             
Mas meu coração é nobre
       B7              E    
Foi assim que Deus me fez

[Refrão]

         B7        E          G°  F#m
Deixa a vida me levar (vida, leva eu)
                              B7  E                
Deixa a vida me levar (vida, leva eu)
         B7        E          E7  A
Deixa a vida me levar (vida, leva eu)
       A#°       E   
Sou feliz e agradeço
 C#7   F#m    B7      E  B7  
Por tudo que Deus me deu

[Segunda Parte]

    E                 B7       E
Só posso levantar as mãos pro céu
       B7         E 
Agradecer e ser fiel
                G#m  G°  F#m7  B7
Ao destino que Deus me  deu
    F#m             F#m7M     F#m7
Se não tenho tudo que preciso
           F#m6     B7
Com o que tenho, vivo
    B7(13-)        E  B7
De mansinho lá vou eu

[Terceira Parte]

      E                B7            E
Se a coisa não sai do jeito que eu quero
            B7        E 
Também não me desespero
                E7    A  C#7/G#
O negócio é deixar rolar
      F#m7          D7(9)        G#m7
E aos trancos e barrancos lá vou eu
      C#7       F#m7        B7             E              
Sou feliz e agradeço por tudo que Deus me deu

[Refrão]

         B7        E          G°  F#m
Deixa a vida me levar (vida, leva eu)
                              B7  E                
Deixa a vida me levar (vida, leva eu)
         B7        E          E7  A
Deixa a vida me levar (vida, leva eu)
       A#°       E   
Sou feliz e agradeço
 C#7   F#m    B7      E  B7  
Por tudo que Deus me deu

[Primeira Parte]

    E                   B7         E
Eu já passei por quase tudo nessa vida
      C#7         F#m                      
Em matéria de guarida
        B7            E  B7 
Espero ainda a minha vez
    E                 B7       E
Confesso que sou de origem pobre
 C#7               F#m             
Mas meu coração é nobre
       B7              E    
Foi assim que Deus me fez

[Refrão Final]

         B7        E          G°  F#m
Deixa a vida me levar (vida, leva eu)
                              B7  E                
Deixa a vida me levar (vida, leva eu)
         B7        E          E7  A
Deixa a vida me levar (vida, leva eu)
       A#°       E   
Sou feliz e agradeço
 C#7   F#m    B7      E  
Por tudo que Deus me deu

         B7        E          G°  F#m
Deixa a vida me levar (vida, leva eu)
                              B7  E                
Deixa a vida me levar (vida, leva eu)
         B7        E          E7  A
Deixa a vida me levar (vida, leva eu)
       A#°       E   
Sou feliz e agradeço
 C#7   F#m    B7      E  
Por tudo que Deus me deu

         B7        E          G°  F#m
Deixa a vida me levar (vida, leva eu)
                              B7  E                
Deixa a vida me levar (vida, leva eu)
         B7        E          E7  A
Deixa a vida me levar (vida, leva eu)
       A#°       E   
Sou feliz e agradeço
 C#7   F#m    B7      E  
Por tudo que Deus me deu

         B7        E          G°  F#m
Deixa a vida me levar (vida, leva eu)
                              B7  E                
Deixa a vida me levar (vida, leva eu)
         B7        E          E7  A
Deixa a vida me levar (vida, leva eu)
       A#°       E   
Sou feliz e agradeço
 C#7   F#m    B7      E  
Por tudo que Deus me deu

----------------- Acordes -----------------
A = P2 2 2 2
A#° = 8 6 P5 5
B7 = 1 2 0 1
B7(13-) = 7 4 4 5
C#7 = 3 4 2 3
C#7/G# = 11 13 12 15
C#m7 = 6 4 5 6
D7(9) = 4 5 5 7
E = 2 1 0 2
E7 = 2 1 0 0
F#m = 4 2 2 4
F#m6 = 4 2 4 4
F#m7 = 4 P2 2 2
F#m7M = 4 P2 2 3
G#m = 6 4 4 6
G#m7 = 6 P4 4 4
G° = 5 3 P2 2
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
