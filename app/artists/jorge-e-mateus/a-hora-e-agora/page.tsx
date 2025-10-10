import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Jorge & Mateus - A Hora É Agora

[Intro] Am  C  G  D

Am    C       G             D
Oh oh,  na na   na na na na   na na na
Am    C       G             D
Oh oh,  na na   na na na na   na na na
Am    C       G             D
Oh oh,  na na   na na na na   na na na

[Primeira Parte]

Am
   Aumente o som
C                        G    
  Pra ficar bom a nossa festa
                 D
Não tem hora pra acabar
Am                C 
   O teu sorriso
                     G
Abre as portas do paraíso
                   D
Vem comigo pra gente dançar
Am                C
   A melhor hora,   sempre é agora
        G                         D
E o melhor lugar é sempre onde você está
Am
   E a luz nunca se apaga
C
  Juízo sempre acaba
Am            C          D
   E a nossa música vai começar

[Refrão]

 G
Paz e amor
             C
É o que eu quero pra nós
       Em         D                  C
E que nada nesse mundo cale a nossa voz
 G              C
Céu e mar e alguém para amar
         Em          D  
E o arrepio toda vez
                      C
Que a gente se encontrar

         Am
E nunca vai passar
                C         D
Mesmo quando o sol chegar oh oh

 Am   C       G             D
Na na,  na na   na na na na   na nana
Am    C       G             D
Oh oh,  na na   na na na na   na nana

[Primeira Parte]

Am
   Aumente o som
C                        G    
  Pra ficar bom a nossa festa
                 D
Não tem hora pra acabar
Am                C 
   O teu sorriso
                     G
Abre as portas do paraíso
                   D
Vem comigo pra gente dançar
Am                C
   A melhor hora,   sempre é agora
        G                         D
E o melhor lugar é sempre onde você está
Am
   E a luz nunca se apaga
C
  Juízo sempre acaba
Am            C          D
   E a nossa música vai começar

[Refrão]

 G
Paz e amor
             C
É o que eu quero pra nós
       Em         D                  C
E que nada nesse mundo cale a nossa voz
 G              C
Céu e mar e alguém para amar
         Em          D  
E o arrepio toda vez
                      C
Que a gente se encontrar

 G
Paz e amor
             C
É o que eu quero pra nós
       Em         D                  C
E que nada nesse mundo cale a nossa voz
 G              C
Céu e mar e alguém para amar
         Em          D  
E o arrepio toda vez
                      C
Que a gente se encontrar

         Am
E nunca vai passar
                C         D
Mesmo quando o sol chegar oh oh

 Am   C       G             D
Na na,  na na   na na na na   na na na
 Am   C       G             D
Na na,  na na   na na na na   na na na
Am        C         G             D
Oh oh, oh oh  na na   na na na na   na na na
Am    C       G             D
Oh oh,  na na   na na na na   na na na
Am     C         G             D
Oh, oh oh  na na   na na na na   na nana

[Final] Am  C  G  D 
        Am  C  G  D 
        Am  C  G  D 
        Am

----------------- Acordes -----------------
Capotraste na 3ª casa
Cm*  = X 0 2 2 1 0 - (*D#m na forma de Cm)
D#*  = X 3 2 0 1 0 - (*F# na forma de D#)
F*  = X X 0 2 3 2 - (*G# na forma de F)
Gm*  = 0 2 2 0 0 0 - (*A#m na forma de Gm)
A#*  = 3 2 0 0 0 3 - (*C# na forma de A#)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AHoraEAgoraPage() {
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
