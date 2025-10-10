import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Jota Quest - Só Hoje

[Primeira Parte]

 E                           
Hoje eu preciso te encontrar 
             B5(9)
De qualquer jeito
                             
Nem que seja só pra te levar 
     C#m
Pra casa
                     A
Depois de um dia normal
   E
Olhar teus olhos 

De promessas fáceis
         B5(9)     
E te beijar a boca
                         C#m
De um jeito que te faça rir
             A
Que te faça rir

 F#m
Hoje eu preciso te abraçar
    B5(9)
Sentir teu cheiro de roupa limpa
          F#m                
Pra esquecer os meus anseios 
      B5(9)
E dormir em paz

[Segunda Parte]

 E                    
Hoje eu preciso ouvir
                     B5(9)
Qualquer palavra tua
                         
Qualquer frase exagerada 
                   C#m     
Que me faça sentir alegria
          A
Em estar vivo

 F#m                          
Hoje eu preciso tomar um café 
   B5(9)
Ouvindo você suspirar
                   F#m
Me dizendo que eu sou 

O causador da tua insônia
        B5(9)                  B7(4/9)
Que eu faço tudo errado sempre

Sempre

[Refrão]

 E                 F#m 
Hoje preciso de você 
                B5(9)
Com qualquer humor
                 E
Com qualquer sorriso
                F#m  
Hoje só tua presença 
                 B5(9)   Am
Vai me deixar feliz, só hoje

( D  Am  D  Am  D )

[Segunda Parte]

 G                    
Hoje eu preciso ouvir 
                     D
Qualquer palavra tua
                         
Qualquer frase exagerada 
                   Em      
Que me faça sentir alegria 
          C
Em estar vivo

 Am                           
Hoje eu preciso tomar um café
   D
Ouvindo você suspirar
                   Am
Me dizendo que eu sou 

O causador da tua insônia
        D                      D7(4/9)
Que eu faço tudo errado sempre

Sempre

[Refrão Final]

 G                 Am 
Hoje preciso de você 
                D
com qualquer humor
                 G
Com qualquer sorriso
                Am   
Hoje só tua presença 
                 D       G
Vai me deixar feliz, só hoje

 G                 Am 
Hoje preciso de você 
                D
com qualquer humor
                 G
Com qualquer sorriso
                Am   
Hoje só tua presença 
                 D
Vai me deixar feliz, feliz
    Cm  G
Só hoje

----------------- Acordes -----------------
A = X 0 2 2 2 0
Am = X 0 2 2 1 0
B5(9) = X 2 4 4 2 2
B7(4/9) = X 2 2 2 2 2
C = X 3 2 0 1 0
C#m = X 4 6 6 5 4
Cm = X 3 5 5 4 3
D = X X 0 2 3 2
D7(4/9) = X 5 5 5 5 5
E = 0 2 2 1 0 0
Em = 0 2 2 0 0 0
F#m = 2 4 4 2 2 2
G = 3 2 0 0 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SoHojePage() {
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
