import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Cássia Eller - O Segundo Sol

[Intro] A9

[Primeira Parte]

E                          Bm7
  Quando o segundo sol chegar
      D                           A     
Para realinhar as órbitas dos planetas

[Tab - Passagem]
    
                  E
E|----------------3------------------|
B|----------------3------------------|
G|----------------4------------------|
D|----------------5------------------|
A|----------------5------------------|
E|---------6p5p3--3------------------|

E                               Bm7
  Derrubando com assombro exemplar
             D
O que os astrônomos diriam se tratar
       A
De um outro cometa

E                          Bm7
  Quando o segundo sol chegar
      D                           A
Para realinhar as órbitas dos planetas
E                               Bm7
  Derrubando com assombro exemplar
             D
O que os astrônomos diriam se tratar
       A
De um outro cometa

[Segunda Parte]

[Tab - Passagem]

E|-----------------------------------|
B|-5---5-----5-----------------------|
G|-5---5-----5-----------------------|
D|-5h7-5-----5h7---------------5h7---|
A|--------7-------------5h7----------|
E|----------------5h7----------------|

[Tab - Riff 1 - 2x]

    E
E|--3--------------------------------|
B|--3--------------------------------|
G|--4---7-9-10-9-10-12/14-12---------|
D|--5--------------------------------|
A|--5---5-7--8-7--8-10/12-10---------|
E|--3--------------------------------|

E|--3--------------------------------|
B|--3--------------------------------|
G|--4---7-9-10-9-10-12/14-14/16------|
D|--5---x-x--x-x--x--x--x--x--x------|
A|--5---5-7--8-7--8-10/12-12/14------|
E|--3--------------------------------|

                             E           
Não digo que não me surpreendi

Antes que eu visse, você disse 
                 E
E eu não pude acreditar

[Tab - Riff 2]

   E
E|-3---------------------------------|
B|-3---------------------------------|
G|-4--7-9-10-9-14-12-10--------------|
D|-5---------------------------------|
A|-5--5-7-8--7-12-10-8---------------|
E|-3---------------------------------|

[Refrão]

D           A/C#        Bm7
  Mas você pode ter certeza
A                              Em7
  De que o seu telefone irá tocar
    D           
Em sua nova casa 
       A/C#          Bm7
Que abriga agora a trilha
     A                   G
Incluída nessa minha conversão
A                     Em7
  Eu só queria te contar
               D
Que eu fui lá fora 

E vi dois sois num dia
A/C#            Bm7      A
     E a vida que ardia sem explicação

[Primeira Parte]

E                          Bm7
  Quando o segundo sol chegar
      D                           A     
Para realinhar as órbitas dos planetas

[Tab - Passagem]

                  E
E|----------------3------------------|
B|----------------3------------------|
G|----------------4------------------|
D|----------------5------------------|
A|----------------5------------------|
E|---------6p5p3--3------------------|

E                               Bm7
  Derrubando com assombro exemplar
             D
O que os astrônomos diriam se tratar
       A
De um outro cometa

[Segunda Parte]

[Tab - Passagem]

E|-----------------------------------|
B|-5---5-----5-----------------------|
G|-5---5-----5-----------------------|
D|-5h7-5-----5h7---------------5h7---|
A|--------7-------------5h7----------|
E|----------------5h7----------------|

[Tab - Riff 1 - 2x]

    E
E|--3--------------------------------|
B|--3--------------------------------|
G|--4---7-9-10-9-10-12/14-12---------|
D|--5--------------------------------|
A|--5---5-7--8-7--8-10/12-10---------|
E|--3--------------------------------|

E|--3--------------------------------|
B|--3--------------------------------|
G|--4---7-9-10-9-10-12/14-14/16------|
D|--5---x-x--x-x--x--x--x--x--x------|
A|--5---5-7--8-7--8-10/12-12/14------|
E|--3--------------------------------|

 E                             
Não digo que não me surpreendi

Antes que eu visse, você disse 
                 E
E eu não pude acreditar

[Tab - Riff 2]

   E
E|-3---------------------------------|
B|-3---------------------------------|
G|-4--7-9-10-9-14-12-10--------------|
D|-5---------------------------------|
A|-5--5-7-8--7-12-10-8---------------|
E|-3---------------------------------|

[Refrão]

D           A/C#        Bm7
  Mas você pode ter certeza
A                              Em7
  De que o seu telefone irá tocar
    D           
Em sua nova casa 
       A/C#          Bm7
Que abriga agora a trilha
     A                   G
Incluída nessa minha conversão
A                     Em7
  Eu só queria te contar
               D
Que eu fui lá fora 

E vi dois sois num dia
A/C#            Bm7      A
     E a vida que ardia sem explicação

    D            A
Explicação não, tem explicação
    D                A
Explicação não, não tem explicação
    D                    A/C#  Bm7
Explicação não tem explica____ção
 A   D/F#  A
Não tem,  não tem

----------------- Acordes -----------------
Capotraste na 3ª casa
C*  = X 0 2 2 2 0 - (*D# na forma de C)
C/E*  = X 4 P2 2 2 X - (*D#/G na forma de C/E)
C9*  = X 0 2 2 0 0 - (*D#9 na forma de C9)
Dm7*  = X 2 4 2 3 2 - (*Fm7 na forma de Dm7)
F*  = X X 0 P2 3 2 - (*G# na forma de F)
F/A*  = 2 X 0 2 3 X - (*G#/C na forma de F/A)
G*  = 0 2 2 1 0 0 - (*A# na forma de G)
Gm7*  = 0 2 2 0 3 0 - (*A#m7 na forma de Gm7)
A#*  = 3 2 0 0 3 3 - (*C# na forma de A#)
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OSegundoSolPage() {
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
