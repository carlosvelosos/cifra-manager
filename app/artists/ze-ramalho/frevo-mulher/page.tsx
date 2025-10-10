import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Zé Ramalho - Frevo Mulher

[Intro] Bm  C  Bm  C  Bm  C 
        Bm  C  Bm  C  Bm  C 
        Bm  C  Bm  C  Bm  C 
        Bm  C  Bm  C 

[Primeira Parte]

Bm              C      
   Quantos aqui ouvem 
                  Bm  C
Os olhos eram de fé
Am             Am/G                  
   Quantos elementos
                Em
Amam aquela mulher

G                      
  Quantos homens eram
   D    D#º           Em
Inverno     outros verão
F                                        
  Outonos caindo secos
                  Em
No solo da minha mão

Bm                  C                    
   Gemeram entre cabeças
                Bm  C
A ponta do esporão
Am                    Am/G                  
   A folha do não-me-toque
                 Em
E o medo da solidão

G                   D                 
  Veneno meu companheiro
     D#º        Em
Desata no cantador
F                                        
  E desemboca no primeiro
               Em
Açude do meu amor

[Refrão 1]

D
  É quando o tempo

Sacode a cabeleira
Em
   A trança toda vermelha
D                  D#º              
  Um olho cego vagueia
               Em
Procurando por um

D                               
  É quando o tempo
               ( D  Em )
Sacode a cabeleira
                       ( Em  D )
A trança toda vermelha
                 D#º          
Um olho cego vagueia
          ( D  Em )
Procurando por um

( Bm  C  Bm  C  Bm  C )
( Bm  C  Bm  C  Bm  C )
( Bm  C  Bm  C  Bm  C )

[Primeira Parte]

Bm              C      
   Quantos aqui ouvem 
                  Bm  C
Os olhos eram de fé
Am             Am/G                  
   Quantos elementos
                Em
Amam aquela mulher

G                      
  Quantos homens eram
   D    D#º           Em
Inverno     outros verão
F                                        
  Outonos caindo secos
                  Em
No solo da minha mão

Bm                  C                    
   Gemeram entre cabeças
                Bm  C
A ponta do esporão
Am                    Am/G                  
   A folha do não-me-toque
                 Em
E o medo da solidão

G                   D                 
  Veneno meu companheiro
     D#º        Em
Desata no cantador
F                                        
  E desemboca no primeiro
               Em
Açude do meu amor

[Refrão 2]

D
  É quando o tempo

Sacode a cabeleira
Em
   A trança toda vermelha
D                  D#º              
  Um olho cego vagueia
               Em
Procurando por um

D
  É quando o tempo

Sacode a cabeleira
Em
   A trança toda vermelha
D                  D#º              
  Um olho cego vagueia
               Em
Procurando por um

[Final] Bm  C  Bm  C  Bm  C 
        Bm  C  Bm  C  Bm  C 
        Bm  C  Bm  C  Bm  C

----------------- Acordes -----------------
Am = X 0 2 2 1 0
Am/G = 3 X 2 2 1 X
Bm = X 2 4 4 3 2
C = X 3 2 0 1 0
D = X X 0 2 3 2
D#º = X X 1 2 1 2
Em = 0 2 2 0 0 0
F = 1 3 3 2 1 1
G = 3 2 0 0 0 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function FrevoMulherPage() {
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
