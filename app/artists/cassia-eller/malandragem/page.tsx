import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Cássia Eller - Malandragem

[Intro] Dm  Bb  C

[Primeira Parte]

Dm
   Quem sabe eu ainda
                C
Sou uma garotinha
Gm                         
   Esperando o ônibus
      Dm
Da escola sozinha

Cansada com minhas
             C
Meias três quartos
Gm                      Dm
   Rezando baixo pelos cantos
     C              Bb
Por ser uma menina má

Dm                                   
   Quem sabe o príncipe
             C
Virou um chato
Gm                        Dm
   Que vive dando no meu saco
      C                    Bb
Quem sabe a vida é não sonhar

[Refrão]

Dm               C
   Eu só peço a Deus
          F        G
Um pouco de malandragem
Dm             C
   Pois sou criança
          F         G
E não conheço a verdade
Bb          C                      
   Eu sou poeta e não
            Dm
Aprendi a amar
Bb          C                      
   Eu sou poeta e não
            Dm
Aprendi a amar

[Segunda Parte]

                              C
Bobeira é não viver a realidade
Gm                             
   E eu ainda tenho
             Dm
Uma tarde inteira

G              F  
  Eu ando nas ruas
C              Dm
  Eu troco o cheque
Bb                       Dm
   Mudo uma planta de lugar
G               F    
  Dirijo o meu carro
C               Dm
  Tomo o meu pileque
Bb                             Dm
   E ainda tenho tempo pra cantar

[Refrão]

Dm               C
   Eu só peço a Deus
          F        G
Um pouco de malandragem
Dm             C
   Pois sou criança
           F         G
 E não conheço a verdade
Bb          C                      
   Eu sou poeta e não
            Dm
Aprendi a amar
Bb          C                      
   Eu sou poeta e não
            Dm
Aprendi a amar

[Solo] C  Gm  Dm

[Tab - Solo]

Parte 1 de 2
E|------------------------------------------|
B|----------5-5b6-b6--5-5-------------------|
G|---7-7-7-----------------7-5--------------|
D|-7----------------------------5-5---------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 2
E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|-3/5-3-3--3-5/7--5-3---3h5--3-----3-------|
A|---------------------5--------5-5---------|
E|------------------------------------------|

[Segunda Parte]

G              F  
  Eu ando nas ruas
C              Dm
  Eu troco o cheque
Bb                       Dm
   Mudo uma planta de lugar
G               F    
  Dirijo o meu carro
C               Dm
  Tomo o meu pileque
Bb                             Dm
   E ainda tenho tempo pra cantar

[Refrão]

Dm               C
   Eu só peço a Deus
          F        G
Um pouco de malandragem
Dm             C
   Pois sou criança
           F         G
 E não conheço a verdade
Bb          C                      
   Eu sou poeta e não
            Dm
Aprendi a amar
Bb          C                      
   Eu sou poeta e não
            Dm
Aprendi a amar
                                
Quem sabe ainda sou 
            Dm
Uma garotinha

----------------- Acordes -----------------
Bb = X 1 3 3 3 1
C = X 3 5 5 5 3
Dm = X 5 7 7 6 5
F = 1 3 3 2 1 1
G = 3 5 5 4 3 3
Gm = 3 5 5 3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function MalandragemPage() {
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
