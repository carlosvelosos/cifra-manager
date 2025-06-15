import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Henrique e Juliano - Recaídas

[Intro] G


[Tab - Intro]


E|----------------------------------------------------|
B|-6/8--7-8~------------------------------------------|
G|-----------------5----------------------------------|
D|---------------5---7/9~-----------------------------|
A|-----------5h7--------------------------------------|
E|----------------------------------------------------|

[Primeira Parte]

      G
Você pode, ficar com quem você quiser
                Em7
Não tem nada a ver
                   C9
Eu não mando em você
            Am
Mas ainda choro
                                     D
E quando alguém comenta não quero saber

        G
Me preocupo

E apesar dos pesares
                    Em7
Eu sempre quero te ver bem
         C9
E ainda vou além
          Am
Em uma relação

Sei que não vai ser fácil
               D
Amar outro alguém

[Segunda Parte]

   G
E hoje, mesmo separados sinto
                       D
Que seu corpo ainda é meu

Às vezes me escondo e faço de tudo
               Am
Pra ninguém notar que eu
        C9
Vivo e morro por ti
     Am
Tem semanas que as vezes
              D
Sofro vem as recaídas

    G
Às vezes eu queria ter o poder
                         D
De poder te apagar da memória

E nessa fraqueza ter força pra fazer
              Am                  C9
Com que essa nossa história, não passe
              D                  G   D
De passado e fique da porta pra fora

[Refrão]

         G                        D
Se eu pudesse te apagar da minha mente
           Am  C9
Apagaria agora
          G
Mas toda vez
                         D
Que eu me lembro de nós dois
                 Am
Meu coração sempre chora
C9                  G        D
   E é sempre a mesma história
  Am     C9
Aaa  aaa

[Solo] G  Em7  C9  Am  D


Parte 1 de 5

E|-------------------------------------------------| 
B|-------------------------------------------------| 
G|---------------7/9~------------------------------| 
D|--------7-9-10-----------------------------------| 
A|-7-9-10------------------------------------------| 
E|-------------------------------------------------| 


Parte 2 de 5

E|-------------------------------------------------| 
B|-6/8-7-8~---12-12\10-10-10\8--8-8--7-7--7h8--8~--| 
G|-------------------------------------------------| 
D|-------------------------------------------------| 
A|-------------------------------------------------| 
E|-------------------------------------------------| 


Parte 3 de 5

E|-------------------------------------------------| 
B|-10/12-12\10--10-10\8--8-8--7-7--7-8-------------| 
G|--------------------------------------7/9~-------| 
D|-------------------------------------------------| 
A|-------------------------------------------------| 
E|-------------------------------------------------| 


Parte 4 de 5

E|-8-8-8--7-7-7------------------------------------| 
B|--------------10-10-10--8-8--8h10--10~-----------| 
G|-------------------------------------------------| 
D|-------------------------------------------------| 
A|-------------------------------------------------| 
E|-------------------------------------------------| 


Parte 5 de 5

E|-------------------------------------------------| 
B|-7-8p7-------7-8-10-10/12~-----------------------| 
G|-------9-7-9-------------------------------------| 
D|-------------------------------------------------| 
A|-------------------------------------------------| 
E|-------------------------------------------------| 

[Segunda Parte]

   G
E hoje, mesmo separados sinto
                       D
Que seu corpo ainda é meu

Às vezes me escondo
                              Am
E faço de tudo pra ninguém notar que eu
        C9
Vivo e morro por ti
     Am
Tem semanas que as vezes
                D
Sofro vem as recaídas

    G
Às vezes eu queria ter o poder
                         D
De poder te apagar da memória

E nessa fraqueza ter força pra fazer
              Am                  C9
Com que essa nossa história, não passe
              D                  G   D
De passado e fique da porta pra fora

[Repete o Refrão]

         G                        D
Se eu pudesse te apagar da minha mente
           Am  C9
Apagaria agora
          G
Mas toda vez
                         D
Que eu me lembro de nós dois
                 Am
Meu coração sempre chora
C9                  G        D
   E é sempre a mesma história
  Am     C9  G
Aaa  aaa

[Solo Final]

Parte 1 de 2

E|-------------------------------------------------| 
B|-------------------------------------------------| 
G|---------------7/9~------------------------------| 
D|--------7-9-10-----------------------------------| 
A|-7-9-10------------------------------------------| 
E|-------------------------------------------------| 


Parte 2 de 2

E|-------------------------------------------------| 
B|-6/8--7-8~---------------------------------------| 
G|-----------------5-------------------------------| 
D|---------------5---7/9~--------------------------| 
A|-----------5h7-----------------------------------| 

E|-------------------------------------------------|


----------------- Acordes -----------------
Am = X 0 2 2 1 0
C9 = X 3 2 0 3 3
D = X X 0 2 3 2
Em7 = 0 2 2 0 3 3
G = 3 2 0 0 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function RecaidasPage() {
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
