import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Matogrosso & Mathias - Tentei Te Esquecer

[Intro] B  E  F#  B  E  F#


[Tab - Intro]

           B     E          F#
E|------------------------------------------| 
B|------------------------------------------| 
G|---4-6-6/8~----8h9p8----------------------| 
D|-4-------------------9--4/6--4------------| 
A|------------------------------------------| 
E|------------------------------------------| 


               B         E       F#       
E|------------------------------------------| 
B|-------4-5-5/7~--7p5-4-5-7-7/9------------| 
G|---4-6-------------------------6~---------| 
D|-4----------------------------------------| 
A|------------------------------------------| 
E|------------------------------------------| 

[Primeira Parte]

           B             E       F#
Ah, como quero te encontrar novamente
          B         E       F#
Estou sozinho procurando você
           B           E        F#
Ah, como quero te abraçar loucamente
       C#m            A
Olhar dentro dos teus olhos
     F#                  B  E  F#
E dizer: não vivo sem você

[Pré-Refrão]

         B            E         F#
O tempo passa, cai a noite e o dia vem
          B                E       F#
Tento fingir, mas não dá pra esconder
           B              E         F#
Ah, eu sonhei nas noites vagas com teu amor
            G#m                 F#
Provei teu beijo, magoei minha dor

[Refrão]

                B   E      F#
Tentei te esquecer,   não deu
            B             E            F#
Pensei que fosse mais forte que esse amor
            B   E      F#
Ó minha paixão,   sou teu
                  B           E          F#
Por mais que eu queira disfarçar como estou
         Gº  G#m               E  B/D#
O meu cora__ção se nega a aceitar
         C#m             F#          B
Passa o tempo eu não esqueço de te amar

[Solo] E  F#  B  E  F#


[Tab - Solo]


  H.A.        P.M. . .  H.A                   
B|------------------------------------------| 
G|------------------------------------------| 
D|-6b8r6--------------4-6b8-6~\-----3h4/6---| 
A|-------4~-------4-6---------------------4-| 
E|------------6-7---------------------------| 
E|------------------------------------------| 


  P.M. .                                      
B|------------------------------------------| 
G|-------4-5-5/7~\-----------7--7/9--7~\----| 
D|---4-6--------------6-8-9-----------------| 
A|-4----------------------------------------| 
E|------------------------------------------| 
E|------------------------------------------| 


E|------------------------------------------| 
B|------------------------------------------| 
G|-3h4/6------------------------------------| 
D|-------4~---------------------------------| 
A|------------------------------------------| 
E|------------------------------------------| 

[Pré-Refrão]

         B            E         F#
O tempo passa, cai a noite e o dia vem
          B                E       F#
Tento fingir, mas não dá pra esconder
           B              E         F#
Ah, eu sonhei nas noites vagas com teu amor
            G#m                 F#
Provei teu beijo, magoei minha dor

[Refrão]

                B   E      F#
Tentei te esquecer,   não deu
            B             E            F#
Pensei que fosse mais forte que esse amor
            B   E      F#
Ó minha paixão,   sou teu
                  B           E          F#
Por mais que eu queira disfarçar como estou
         Gº  G#m               E  B/D#
O meu cora__ção se nega a aceitar
         C#m             F#          B
Passa o tempo eu não esqueço de te amar

                B   E      F#
Tentei te esquecer,   não deu
            B             E            F#
Pensei que fosse mais forte que esse amor
            B   E      F#
Ó minha paixão,   sou teu
                  B           E          F#
Por mais que eu queira disfarçar como estou
         Gº  G#m               E  B/D#
O meu cora__ção se nega a aceitar
         C#m             F#          B
Passa o tempo eu não esqueço de te amar

( F#/A#  G#m  F# )

         E               F#4         B
Passa o tempo eu não esqueço de te amar

[Tab - Final]

                B
E|--------------2----------------------------| 
B|--------------4----------------------------| 
G|---4-6--6/8~--4----------------------------| 
D|-4------------4----------------------------| 
A|--------------2----------------------------| 

E|-------------------------------------------|


----------------- Acordes -----------------
A = X 0 2 2 2 0
B = X 2 4 4 4 2
B/D# = X 6 4 4 4 X
C#m = X 4 6 6 5 4
E = 0 2 2 1 0 0
F# = 2 4 4 3 2 2
F#/A# = 6 X 4 6 7 X
F#4 = 2 4 4 4 2 2
G#m = 4 6 6 4 4 4
Gº = 3 X 2 3 2 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TenteiTeEsquecerPage() {
  return (
    <>
      <FramerTransitionWrapper>
        <CifraDisplay
        title={title || ""}
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      </FramerTransitionWrapper>
      <FloatingMenu />
    </>
  );
}
