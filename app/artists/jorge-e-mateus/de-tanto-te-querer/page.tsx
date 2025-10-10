import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Jorge & Mateus - De Tanto Te Querer

[Intro] D5  D7M  Bm7  D5
        D5  D7M  Bm7  D5

[Primeira Parte] 

D                      A/C#
  Larga tudo e vem correndo
Bm                     E7
   Vem matar minha vontade
G                            Bm  A
  Já faz tempo que eu tô sofren_do
E7                       A4  A
   Mereço um pouco de felicidade

D                      A/C#
  Larga tudo e vem correndo
Bm                             E7
   Pra eu mergulhar no teu sorriso
G                     Bm7  A
  Me arranca desse infer__no 
E7                     A4  A
   Me leva pro seu paraí__so

[Segunda Parte] 

[Tab - Riff 1] 

G                            Bm7 
  Eu não desisto do que eu quero 
                 E7   
Mas não me desespero
      G   A
Te espero
D                          E7        
  Na tarde quente ou madrugada fria
 G                     A  Riff 1
Na tristeza ou na alegria

[Refrão] 

D                    Em 
  Ficar sozinho não rola 
                    G
Mas amor não se implora
 A               D
Nem se joga fora
                    Em  
O amor a gente conquista 
                    G
E não há quem desista
 A                 D
Se e o coração chora

              A/C#       Em
Chora com vontade de te ver
              G    A    D
Chora com saudade de você
               A/C#             Em
Chora às vezes eu nem sei por que
             G     A     D
Deve ser te tanto te querer
 A/C#  E7     G      A     D
Iê    iê, de tanto amar você

[Solo] D  Em  G  A 

[Segunda Parte] 

G                            Bm7    
  Eu não desisto do que eu quero 
                 E7
Mas não me desespero
      G   A
Te espero
D                          E7        
  Na tarde quente ou madrugada fria
 G                     A  Riff 1
Na tristeza ou na alegria

[Refrão]

D                    Em  
  Ficar sozinho não rola 
                    G
Mas amor não se implora
 A               D
Nem se joga fora
                    Em  
O amor a gente conquista 
                 G
E não há quem desista
 A                 D
Se e o coração chora

D                    Em  
  Ficar sozinho não rola 
                    G
Mas amor não se implora
 A               D
Nem se joga fora
                    Em   
O amor a gente conquista 
                 G
E não há quem desista
 A                 D
Se e o coração chora

              A/C#       Em
Chora com vontade de te ver  
              G    A9   D
Chora com saudade de você    
               A/C#             Em
Chora às vezes eu nem sei por que  
             G     A9    D          
Deve ser te tanto te querer 
 A/C#  E7
Iê    iê
    G      A9    D       
De tanto amar você 
 A/C#  E7  Riff 2
Iê    iê

----------------- Acordes -----------------
A = P2 2 2 2
A/C# = 7 6 5 7
A4 = 2 2 3 0
A9 = P2 4 2 2
Bm = 4 4 3 4
Bm7 = 4 2 3 4
D = 4 2 3 4
D7M = 0 P2 2 4
E7 = 2 1 0 0
Em = 5 4 5 5
G = 5 4 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DeTantoTeQuererPage() {
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
