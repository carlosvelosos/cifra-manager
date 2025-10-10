import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Frejat - Segredos

[Intro]

[Tab - Intro]

E|-7---------------------------------------------------|
B|---8-10--7-------------------------------------------|
G|-----------9-7---------------------------------------| (3x)
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

[Primeira Parte]

G                    G/D
  Eu procuro um amor
     C9
Que ainda não encontrei
G               D9/F#      C9
  Diferente de todos que amei

G                                G/D
  Nos seus olhos quero descobrir 
       C9
Uma razão para viver
        G                    D9/F#     C9
E as feridas dessa vida eu quero esquecer

[Pré-Refrão 1]

      Em7                  
Pode ser que eu a encontre 
      D
Numa fila de cinema
         Em7     D            C9
Numa esquina ou numa mesa de bar

[Refrão]

    G                D9/F#        C9
Procuro um amor que seja bom pra mim
      G          D9/F#     C9
Vou procurar eu vou até o fim
      Em7             
E eu vou tratá-la bem 
        D
Pra que ela não tenha medo
        C9             G/B            Am7
Quando começar a conhecer os meus segredos

[Segunda Parte]

G                    G/D 
  Eu procuro um amor     
       C9
Uma razão para viver
        G                    D9/F#     C9
E as feridas dessa vida eu quero esquecer

[Pré-Refrão 2]

      Em7               
Pode ser que eu gagueje
       D
Sem saber o que falar
           Em7         D               C9
Mas eu disfarço e não saio sem ela de lá

[Refrão]

    G                D9/F#        C9
Procuro um amor que seja bom pra mim
      G          D9/F#     C9
Vou procurar eu vou até o fim
      Em7             
E eu vou tratá-la bem 
        D
Pra que ela não tenha medo
        C9             G/B            Am7
Quando começar a conhecer os meus segredos

[Solo] G  D9/F#  C9  C7
       G  D9/F#  C9  G/B  Am 

Parte 1 de 3             
E|------12\\5-5-7-7\\5-3---------------------------------|
B|-8/12--------------------8-8/10-8---8---8---11-10/8--|
G|---------------------7/9----------9---9---9----------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

Parte 2 de 3
E|---------12\\5-5~-------------------------------------|
B|-----12~---------10h12p10-8-8---11p10p8---8---8-10-5~|
G|-(9)---------------------------9--------9---9--------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

Parte 3 de 3
E|-----15----15-15----15----19-17-15----15~------------|
B|-/17----17-------17----17----------17----------------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

[Refrão Final]

     G                D9/F#        C9
Procuro um amor que seja bom pra mim
      G          D9/F#     C9
Vou procurar eu vou até o fim
       G                D9/F#        C9
Eu Procuro um amor que seja bom pra mim
      G          D9/F#     C9  G
Vou procurar eu vou até o fim

----------------- Acordes -----------------
Am = X 0 2 2 1 0
Am7 = X 0 2 0 1 0
C7 = X 3 2 3 1 X
C9 = X 3 5 5 3 3
D = X X 0 2 3 2
D9/F# = 2 X 0 2 3 0
Em7 = 0 2 2 0 3 0
G = 3 2 0 0 0 3
G/B = X 2 0 0 3 3
G/D = X 5 5 4 3 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SegredosPage() {
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
