import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Nenhum de Nós - O Astronauta de Mármore

[Intro] Bb  F

[Tab - Intro]

E|----------------------------------------------------|
B|------------8---------------------------------------|
G|---3-5-5/7----7~/--------3-3/2-2h3p2----------------|
D|-5-----------------3h5---------------3/5/3----------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Primeira Parte] 

Gm
   A lua inteira agora é um manto negro
F
  O fim das vozes no meu rádio
C                       
  São quatro ciclos no 
      C7              F  G#  Bb
No escuro deserto do céu

Gm
   Quero um machado pra quebrar o gelo
F
  Quero acordar do sonho agora mesmo
C                  
  Quero uma chance 
       C7            A  G
De tentar viver sem dor

[Refrão] 

          F         Dm
Sempre estar lá, e ver ele voltar
    Am                
Não era mais o mesmo
       C
Mas estava em seu lugar
          F         Dm
Sempre estar lá, e ver ele voltar
   Am                
O tolo teme a noite
        C
Como a noite vai temer o fogo

Bb         Bbm
   Vou chorar sem medo
F          Dm
  Vou lembrar do tempo
Gm             C            Bb
   De onde eu via o mundo azul

[Solo] Bb  F  C  F 
       Bb  F  C

[Tab - Solo]

Parte 1 de 2
E|----------------------------------------------------|
B|-3--3--1----------1-3/5--5-3--1---------------------|
G|---------3-2--2-3---------------2-------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 2 de 2
E|----------10-10--------------------10/12-12-10------|
B|-10-11-13-------13-11-10--10-11-13-------------13-10|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Segunda Parte] 

Gm
   A trajetória escapa o risco nú
F
  As nuvens queimam o céu, nariz azul
C                   
  Desculpe estranho
       C7               F   G#  A#
Eu voltei mais puro do céu

Gm
   Na lua o lado escuro é sempre igual
F
  No espaço a solidão é tão normal
C                  
  Desculpe estranho
       C7               A   G
Eu voltei mais puro do céu

[Refrão] 

          F         Dm
Sempre estar lá, e ver ele voltar
    Am                
Não era mais o mesmo
       C
Mas estava em seu lugar
          F         Dm
Sempre estar lá, e ver ele voltar
   Am                
O tolo teme a noite
        C
Como a noite vai temer o fogo

Bb         Bbm
   Vou chorar sem medo
F          Dm
  Vou lembrar do tempo
Gm             C            Bb
   De onde eu via o mundo azul

          F         Dm
Sempre estar lá, e ver ele voltar
    Am                
Não era mais o mesmo
       C
Mas estava em seu lugar
          F         Dm
Sempre estar lá, e ver ele voltar
   Am                
O tolo teme a noite
        C
Como a noite vai temer o fogo

Bb         Bbm
   Vou chorar sem medo
F          Dm
  Vou lembrar do tempo
Gm             C            Bb
   De onde eu via o mundo azul

[Final] Bb  F  C  F 
        Bb  F  C  F 

[Tab - Solo Final]

Parte 1 de 2
E|----------------------------------------------------|
B|-3--3--1----------1-3/5--5-3--1---------------------|
G|---------3-2--2-3---------------2-------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 2 de 2
E|----------10-10--------------------10/12-12-10------|
B|-10-11-13-------13-11-10--10-11-13-------------13-10|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

----------------- Acordes -----------------
A = X 0 2 2 2 0
A# = X 1 3 3 3 1
Am = X 0 2 2 1 0
Bb = X 1 3 3 3 1
Bbm = X 1 3 3 2 1
C = X 3 2 0 1 0
C7 = X 3 2 3 1 X
Dm = X X 0 2 3 1
F = 1 3 3 2 1 1
G = 3 2 0 0 0 3
G# = 4 3 1 1 1 4
Gm = 3 5 5 3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OAstronautaDeMarmorePage() {
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
