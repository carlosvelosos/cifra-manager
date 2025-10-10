import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Skank - Resposta

[Primeira Parte]

G                      G5+
  Bem mais que o tempo,   que nós perdemos
C9                           Eb
   Ficou pra trás também o que nos juntou
G              G5+
  Ainda lembro,   que eu estava lendo
C9                     Eb
   Só pra saber o que você achou
     Em        Em7M
Dos versos que eu fiz
   C6              G        
E ainda espero resposta

( G  G4  G  G9  C9 )
( G  G4  G  G9  C9 )

[Segunda Parte]

G                G5+
  Desfaz o vento,    o que há por dentro
C9                         Eb
   Desse lugar que ninguém    mais pisou
G                 G5+
  Você está vendo,   o que está acontecendo?
C9                        Eb
   Nesse caderno sei que ainda estão

[Pré-Refrão]

    Em     Em7M      C6
Os versos seus, tão meus que peço
     Em     Em7M      C6                
Nos versos meus, tão seus, que esperem

[Refrão]

         G
Que os aceite
            Am               
Em paz, eu digo o que eu sou
     C9                   G
O antigo do que vai adiante
              Am              
Sem mais, eu fico onde estou
    C9                   G
Prefiro continuar distante

( G  G4  G  G9  C9 )
( G  G4  G  G9  C9 )

[Primeira Parte]

G                      G5+
  Bem mais que o tempo,   que nós perdemos
C9                           Eb
   Ficou pra trás também o que nos juntou
G              G5+
  Ainda lembro,   que eu estava lendo
C9                     Eb
   Só pra saber o que você achou

[Pré-Refrão]

     Em     Em7M      C6
Dos versos seus, tão meus que peço
     Em     Em7M      C6                
Nos versos meus, tão seus, que esperem

[Refrão]

         G
Que os aceite
            Am               
Em paz, eu digo o que eu sou
     C9                   G
O antigo do que vai adiante
              Am              
Sem mais, eu fico onde estou
    C9                   G
Prefiro continuar distante

            Am               
Em paz, eu digo o que eu sou
     C9                   G
O antigo do que vai adiante
              Am              
Sem mais, eu fico onde estou
    C9                   G
Prefiro continuar distante

( G  G4  G  G9  C9 )
( G  G4  G  G9  C9 )

[Segunda Parte]

G                G5+
  Desfaz o vento,    o que há por dentro
C9                         Eb
   Desse lugar que ninguém    mais pisou
G                 G5+
  Você está vendo,   o que está acontecendo?
C9                        Eb
   Nesse caderno sei que ainda estão

[Pré-Refrão]

    Em     Em7M      C6
Os versos seus, tão meus que peço
     Em     Em7M      C6                
Nos versos meus, tão seus, que esperem

[Refrão]

         G
Que os aceite
            Am               
Em paz, eu digo o que eu sou
     C9                   G
O antigo do que vai adiante
              Am              
Sem mais, eu fico onde estou
    C9                   G
Prefiro continuar distante

            Am               
Em paz, eu digo o que eu sou
     C9                   G
O antigo do que vai adiante
              Am              
Sem mais, eu fico onde estou
    C9                   G
Prefiro continuar distante

            Am               
Em paz, eu digo o que eu sou
     C9                   G
O antigo do que vai adiante
              Am              
Sem mais, eu fico onde estou
    C9                   G
Prefiro continuar distante

[Final] G  Am  C9  
        G  Am  C9
        G  Am  C9
        G  Am  C9  G

----------------- Acordes -----------------
Capotraste na 1ª casa
A#m*  = X 0 2 2 1 0 - (*Bm na forma de A#m)
C#6*  = X 3 2 2 1 0 - (*D6 na forma de C#6)
C#9*  = X 3 2 0 3 3 - (*D9 na forma de C#9)
E*  = X 6 5 0 4 6 - (*F na forma de E)
Fm*  = 0 2 2 0 0 0 - (*F#m na forma de Fm)
Fm7M*  = 0 2 1 0 0 0 - (*F#m7M na forma de Fm7M)
G#*  = 3 2 0 0 3 3 - (*A na forma de G#)
G#4*  = 3 0 0 0 1 3 - (*A4 na forma de G#4)
G#5+*  = 3 X 1 0 0 3 - (*A5+ na forma de G#5+)
G#9*  = 3 X 0 2 0 3 - (*A9 na forma de G#9)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function RespostaPage() {
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
