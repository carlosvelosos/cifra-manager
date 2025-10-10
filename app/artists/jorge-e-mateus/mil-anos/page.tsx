import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Jorge & Mateus - Mil Anos

[Intro] Am  F  C  G  Am  F

[Tab - Solo Intro] 

Parte 1 de 2
E|------------------------------------------|
B|------------------------------------------|
G|--5---------5---5-7-5---------------------|
D|----7-7-------7-------7-7---5-5h7~--------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 2
E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|---5-5------------------5-----------------|
A|-3----------5-5-----5/7---7-5-0-----------|
E|----------3-------------------------------|

[Primeira Parte]

      Am                              
Você fala demais
               F
Diz muitas besteiras da boca pra fora
     C                  
Mas sei que se arrepende 
       G                      Am  F
Por jogar o que não era lixo fora

       C                G          
Você briga, me ignora, pisa na bola
 Am              F
Sente saudades chora
 Dm                        F                G
Diz que é de raiva pra não assumir que me adora
    C                    
Eu sei que um grande amor
         G
Não é fácil de se encontrar
 Am                          F
Mais difícil ainda é deixar de gostar
       Dm                  Bb         
Se o clima ta pesado não existe pecado 
            G
Que não se possa perdoar
     C                      G
Vai ver a gente não conhece o amor direito
    Am                       F         
Prazer eu sou um cara cheio de defeitos 
Dm            Bb                  G
Igualzinho aquele, que você aprendeu a amar

[Refrão]

             F            
Mesmo que o Sol se apague 
       G                          Am        (Riff 1)
Vem a Lua te trazer de volta aos sonhos meus
         F               
Pode passar mil anos você 
 G                            Am       (Riff 2)
Vai me amar e eu vou ser pra sempre seu
             F           
Mesmo que o Sol se apague 
       G                          Am        (Riff 3)
Vem a Lua te trazer de volta aos sonhos meus
         F          
Pode passar mil anos 
      G                            Am
Você vai me amar e eu vou ser pra sempre seu

[Riff 1]

E|--7/8-8-8-7-7-7-5-5-5~-------------------------|
B|-----------------------------------------------|
G|-----------------------------------------------|
D|-----------------------------------------------|
A|-----------------------------------------------|
E|-----------------------------------------------|

[Riff 2]

E|-----------------------------------------------|
B|-8/10-10-10-12-12-12-13-13-13~-----------------|
G|-----------------------------------------------|
D|-----------------------------------------------|
A|-----------------------------------------------|
E|-----------------------------------------------|

[Riff 3]

E|--10/12-12-12-10-10-10-8-8-8~------------------|
B|-----------------------------------------------|
G|-----------------------------------------------|
D|-----------------------------------------------|
A|-----------------------------------------------|
E|-----------------------------------------------|

[Solo] Am  F  C  G  Am  F

E|--8---------8----8----8-10--12r10-8-15-12~-----|
B|----10-10~----10---10--------------------------|
G|-----------------------------------------------|
D|-----------------------------------------------|
A|-----------------------------------------------|
E|-----------------------------------------------|

E|-----------------------------------------------|
B|---------------------------------------------8-|
G|-----------------------------5---5-7-5-7-7/9---|
D|-----------------5---5-7-5-7---7---------------|
A|-----5---5-7-5-7---7---------------------------|
E|-5-8---8---------------------------------------|

E|-----------------------------------------------|
B|-----------------------------------------------|
G|-9\\7-5-------5---------------------------------|
D|-------7-5-7---7-7-----------------------------|
A|-----------------------------------------------|
E|-----------------------------------------------|


       C                G          
Você briga, me ignora, pisa na bola
 Am              F
Sente saudades chora
 Dm                        F                G
Diz que é de raiva pra não assumir que me adora
    C                    
Eu sei que um grande amor
         G
Não é fácil de se encontrar
 Am                          F
Mais difícil ainda é deixar de gostar
       Dm                  Bb         
Se o clima ta pesado não existe pecado 
            G
Que não se possa perdoar
     C                      G
Vai ver a gente não conhece o amor direito
    Am                       F         
Prazer eu sou um cara cheio de defeitos 
Dm            Bb                  G
Igualzinho aquele, que você aprendeu a amar

[Refrão]

             F            
Mesmo que o Sol se apague 
       G                          Am        (Riff 1)
Vem a Lua te trazer de volta aos sonhos meus
         F               
Pode passar mil anos você 
 G                            Am       (Riff 2)
Vai me amar e eu vou ser pra sempre seu
             F           
Mesmo que o Sol se apague 
       G                          Am        (Riff 3)
Vem a Lua te trazer de volta aos sonhos meus
         F          
Pode passar mil anos 
      G                            Am
Você vai me amar e eu vou ser pra sempre seu

[Tab - Solo Final]

E|-------12--------10--5-------------------------|
B|----13--------12-----5-------------------------|
G|-14--------12--------5-------------------------|
D|-----------------------------------------------|
A|-----------------------------------------------|
E|-----------------------------------------------|

----------------- Acordes -----------------
Am = X 0 2 2 1 0
Bb = X 1 3 3 3 1
C = X 3 2 0 1 0
Dm = X X 0 2 3 1
F = 1 3 3 2 1 1
G = 3 2 0 0 0 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MilAnosPage() {
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
