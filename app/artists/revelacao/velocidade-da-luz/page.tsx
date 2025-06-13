import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Grupo Revelação - Velocidade da Luz

[Intro] Gm7  Cm  Am7(5-)  
        D7  Gm7  D7

[Tab - Intro]

Parte 1 de 2

Parte 2 de 2

[Primeira Parte]

Gm7                          
Eu já não sei mais 
         D7
Por que vivo a sofrer
Cm7               F7     
    Pois eu nada fiz 
      Bb     D7 
Para merecer

[Segunda Parte]

G7                      
   Te dei carinho, amor 
Cm7                          
    Em troca ganhei ingratidão
F7                                   
   Não sei por que mas acho 
Bb                     D7            
   Que é falta de compreensão

Gm7                        
    Você me tem como réu
G#                      Am7(5-)
   O culpado e o ladrão
        D7                   Gm7
Por tentar ganhar o seu coração

G7                      
   Te dei carinho, amor 
Cm7                          
    Em troca ganhei ingratidão
F7                                   
   Não sei por que mas acho 
Bb                     D7            
   Que é falta de compreensão

Gm7                        
    Você me tem como réu
G#                      Am7(5-)
   O culpado e o ladrão
        D7                   Gm7
Por tentar ganhar o seu coração 
            D7
(Todo mundo erra)

[Pré-Refrão]

 Gm7                                         
Todo mundo erra, sempre
Cm7                    
    Todo mundo vai errar
F7      
   Não sei por que, meu Deus
Bb              D7   Gm7
   Sozinho vivo a penar

Não tenho nada a pedir
G#                             Am7(5-)
   Também não tenho nada a dar
    D7                       Gm7
Por isso é que eu vou me mandar!
                 D7
(Vou me embora agora!)

[Refrão]

 Gm7                            
Vou me embora agora
Cm7 
    Vou me embora pra outro planeta
F7                      
   Na velocidade da luz 
Bb                 D7       
   Ou quem sabe de um cometa

Gm7                         G#             
    Eu vou solitário e frio 
                       Am7(5-)
Onde a morte me aqueça
          D7     
Talvez assim de uma vez
Gm7                        D7      
    Para sempre eu lhe esqueça

[Segunda Parte]

G7                      
   Te dei carinho, amor 
Cm7                          
    Em troca ganhei ingratidão
F7                                   
   Não sei por que mas acho 
Bb                     D7            
   Que é falta de compreensão
Gm7                        
    Você me tem como réu
G#                      Am7(5-)
   O culpado e o ladrão
        D7                   Gm7
Por tentar ganhar o seu coração  
            D7
(Todo mundo erra)

[Pré-Refrão]

 Gm7                                         
Todo mundo erra, sempre
Cm7                    
    Todo mundo vai errar
F7      
   Não sei por que, meu Deus
Bb              D7   Gm7
   Sozinho vivo a penar

Não tenho nada a pedir
G#                             Am7(5-)
   Também não tenho nada a dar
    D7                       Gm7
Por isso é que eu vou me mandar!
                 D7
(Vou me embora agora!)

[Refrão Final]

 Gm7                            
Vou me embora agora
Cm7
    Vou me embora pra outro planeta
F7                      
   Na velocidade da luz 
Bb                 D7       
   Ou quem sabe de um cometa

Gm7                         G#             
    Eu vou solitário e frio 
                       Am7(5-)
Onde a morte me aqueça
          D7     
Talvez assim de uma vez
Gm7                             
    Para sempre
            D7
(Todo mundo erra!)

 Gm7                                         
Todo mundo erra, sempre
Cm7                    
    Todo mundo vai errar
F7      
   Não sei por que, meu Deus
Bb              D7   Gm7
   Sozinho vivo a penar

Não tenho nada a pedir
G#                             Am7(5-)
   Também não tenho nada a dar
    D7                       Gm7 
Por isso é que eu vou me mandar!

( Gm7/F  Cm7 )

    D7                       Gm7
Por isso é que eu vou me mandar

( Gm7/F  Cm7 )

    D7                       Gm6(9)
Por isso é que eu vou me mandar

----------------- Acordes -----------------
Am7(5-) = P1 2 1 1
Bb = P3 3 3 3
Cm = 1 0 1 1
Cm7 = 5 3 4 5
D7 = 4 2 1 4
F7 = 3 2 P1 1
G# = 6 5 4 6
G7 = P3 4 3 5
Gm6(9) = 7 10 8 8
Gm7 = 5 P3 3 3
Gm7/F = 5 7 6 8
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VelocidadeDaLuzPage() {
  return (
    <>
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}