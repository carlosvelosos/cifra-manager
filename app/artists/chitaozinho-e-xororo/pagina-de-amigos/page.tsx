import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Chitãozinho & Xororó - Página de Amigos

[Refrão]

 C
Como é que eu posso ser
             G
Amigo de alguém que eu tanto amei
    F
Se ainda existe aqui comigo
      C             G
Tudo dela e eu não sei
     C
Não sei o que vou eu fazer
          C7                F  Fm
Pra continuar a minha vida assim
       C
Se o amor que morreu dentro
 G                  C
Dela ainda vive em mim

[Solo] C  G  F  C  G


E|-----------------------------------------------------
B|-1/8-8-6-5-5-3-3--3/5-3/5--3--1-1------1-3-1-3/5-6p5-
G|----------------------------------0-2----------------
D|-----------------------------------------------------
A|-----------------------------------------------------
E|-----------------------------------------------------

E|--------| 
B|3-------| 
G|--------| 
D|--------| 
A|--------| 
E|--------| 

[Primeira Parte]

C
Ela ligou terminando
 G
Tudo entre eu e ela
   F
E disse que encontrou
          C  G
Outra pessoa
C
Ela jogou os meus sonhos
 G
Todos pela janela
   F
E me pediu pra entender
              C  G
Encarar numa boa

[Pré-Refrão]

 C
Como se o meu coração
               G
Fosse feito de aço

Pediu pra esquecer os beijos
       F
E abraços e pra machucar
                 C   G
Ainda brincou comigo
 C
Disse em poucas palavras
              G
Por favor, entenda

O seu nome vai ficar na
        F
Minha agenda
    G          C    G
Na página de amigos

[Refrão]

 C
Como é que eu posso ser
             G
Amigo de alguém que eu tanto amei
    F
Se ainda existe aqui comigo
      C             G
Tudo dela e eu não sei
     C
Não sei o que vou eu fazer
          C7                F  Fm
Pra continuar a minha vida assim
       C
Se o amor que morreu dentro
 G                  C
Dela ainda vive em mim

[Solo] C  G  F  C  G


E|-----------------------------------------------------
B|-1/8-8-6-5-5-3-3--3/5-3/5--3--1-1------1-3-1-3/5-6p5-
G|----------------------------------0-2----------------
D|-----------------------------------------------------
A|-----------------------------------------------------
E|-----------------------------------------------------

E|--------| 
B|3-------| 
G|--------| 
D|--------| 
A|--------| 
E|--------| 

[Primeira Parte]

C
Ela jogou os meus sonhos
 G
Todos pela janela
   F
E me pediu pra entender
              C  G
Encarar numa boa

[Pré-Refrão]

 C
Como se o meu coração
               G
Fosse feito de aço

Pediu pra esquecer os beijos
       F
E abraços e pra machucar
                 C   G
Ainda brincou comigo
 C
Disse em poucas palavras
              G
Por favor, entenda

O seu nome vai ficar na
        F
Minha agenda
    G          C    G
Na página de amigos

[Refrão]

 C
Como é que eu posso ser
             G
Amigo de alguém que eu tanto amei
    F
Se ainda existe aqui comigo
      C             G
Tudo dela e eu não sei
     C
Não sei o que vou eu fazer
          C7                F  Fm
Pra continuar a minha vida assim
       C
Se o amor que morreu dentro
 G                  C
Dela ainda vive em mim

       C
Se o amor que morreu dentro
 G                  C
Dela ainda vive em mim


----------------- Acordes -----------------
Capotraste na 1ª casa
C#*  = X 3 2 0 1 0 - (*D na forma de C#)
C#7*  = X 3 2 3 1 X - (*D7 na forma de C#7)
F#*  = 1 3 3 2 1 1 - (*G na forma de F#)
F#m*  = 1 3 3 1 1 1 - (*Gm na forma de F#m)
G#*  = 3 2 0 0 0 3 - (*A na forma de G#)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PaginaDeAmigosPage() {
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
