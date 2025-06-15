import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Zezé Di Camargo & Luciano - Dois Corações e Uma História

[Intro]

Parte 1 de 5
             D          E
E|-------5-4-2------------------------------| 
B|---------------3------5-------5-----------| 
G|---4/6---4---2------------4-------4-------| 
D|-----------0------4/6---6---6---6---6-----| 
A|-0----------------------------------------| 
E|----------------------0-------------------| 


Parte 2 de 5
               D       E
E|----9--9-7-7-5-----4-4h5p4------4---------| 
B|---10-10-9-9-7---7-5-5------5-------5-----| 
G|---------------7----------4---4---4---4---| 
D|-------------0----------------------------| 
A|-0----------------------------------------| 
E|---------------------0--------------------| 


Parte 3 de 5
             D          E
E|-------5-4-2------------------------------| 
B|---------------3------5-------5-----------| 
G|---4/6---4---2------------4-------4-------| 
D|-----------0------4/6---6---6---6---6-----| 
A|-0----------------------------------------| 
E|----------------------0-------------------| 


Parte 4 de 5
               D       E
E|----9--9-7-7-5-----4-4h5p4--5---7---10----| 
B|---10-10-9-9-7---7-5-5------7---9---12----| 
G|---------------7----------4---------------| 
D|-------------0----------------------------| 
A|-0----------------------------------------| 
E|---------------------0--------0---0----0--| 

Parte 5 de 5

E|--9------9--------------------------------| 
B|-10---10--------3--2----------------------| 
G|----9-------------------------------------| 
D|------------2/4---------------------------| 
A|--0----------------0----------------------| 
E|------------------------------------------| 


[Dedilhado Primeira Parte - Primeira Estrofe]

   Bm      E       A       A7M    A6     F#m
E|-------2-------0------------------------2-| 
B|-------3-------0-------5------5------5--2-| 
G|-----4-------1-------6------6------6----2-| 
D|---4-------2-------7------6------4------4-| 
A|-2---------------0------0------0--------4-| 
E|---------0------------------------------2-| 


   Bm      E       A       A7M    A   Bm7 A/C#
E|-------2-------0--------------------------| 
B|-------3-------0-------5------5-2---3---5-| 
G|-----4-------1-------6------6---2---2---2-| 
D|---4-------2-------7------6-----2---0---2-| 
A|-2---------------0------0-------0---2---4-| 
E|---------0--------------------------------| 

[Primeira Parte]

               Bm
No meio da conversa
                 E
De um caso terminando
                     A   A7M
Um fala e o outro escuta
            A6         F#m
E os olhos vão chorando
       Bm
A lógica de tudo
         E
É o desamor que chega
           A           A7M
Depois que um descobre
             A         Bm7  A/C#
Que o outro não se entrega

[Primeira Parte – Segunda Estrofe]

          Bm
Quem vai sair arruma
    E
As coisas põe na mala
    A               A7M
Enquanto o outro fuma
    A6             F#m
Um cigarro na sala
     Bm
E o coração palhaço
   E
Começa a bater forte
           D       D/E
Quem fica não deseja
             A
Que o outro tenha sorte

[Refrão]

              D
E longe um do outro
                 E
A vida é toda errada
                  A
O homem não se importa
                   F#
Com a roupa amarrotada
                Bm
E a mulher em crise
                E
Quantas vezes chora
                 D               E
A dor de ter perdido um grande amor
     A         F  Bb
Que foi embora

[Segunda parte]

                  Cm
Mas quando vem a volta
              F
O homem se arruma
                   Bb   Bb7M
Faz barba, lava o carro
                 Bb6  Gm
Se banha, se perfuma
             Cm
E liga pro amigo
                   F
Que tanto lhe deu força
              Bb  Bb7M
E jura nunca mais
           Bb6       Bb/D
Vai perder essa moça

                 Cm
E a mulher se abraça
           F
À mãe, diz obrigado
              Bb   Bb7M
E põe aquela roupa
                   Bb6  Gm
Que agrada o seu amado
                 Cm
E passa a tarde toda
             F
Cuidando da beleza
                 Eb
Jantar à luz de velas
    F           Bb
E amor de sobremesa

[Refrão]

              Eb
E perto um do outro
              F
A vida é diferente
             Bb
A solidão dá espaço
                      G
Ao amor que estava ausente
                   Cm
Quem olha não tem jeito
             F
De duvidar agora
                Eb
Da força da paixão que tem
F                   Bb
  Dois corações e uma história

              Eb
E perto um do outro
              F
A vida é diferente
             Bb
A solidão dá espaço
                      G
Ao amor que estava ausente
                   Cm
Quem olha não tem jeito
             F
De duvidar agora
                Eb
Da força da paixão que tem
F                         Bb   Gm
  Dois corações e uma história
                Cm
Da força da paixão que tem
F                   Bb         Eb  F
  Dois corações e uma história

[Final] Bb  Eb  F  Bb


----------------- Acordes -----------------
A = X 0 7 6 5 0
A/C# = X 4 P2 2 5 2
A6 = X 0 4 6 5 X
A7M = X 0 6 6 5 X
Bb = 6 8 8 7 6 6
Bb/D = X 5 X 3 6 6
Bb6 = 6 X 5 7 6 X
Bb7M = 6 X 7 7 6 X
Bm = X 2 4 4 3 2
Bm7 = X 2 0 2 3 X
Cm = X 3 5 5 4 3
D = X X 0 2 3 2
D/E = 0 X 4 P2 3 2
E = 0 2 2 1 0 0
Eb = X 6 5 3 4 3
F = 1 3 3 2 1 1
F# = 2 4 4 3 2 2
F#m = 2 4 4 2 2 2
G = 3 2 0 0 3 3
Gm = 3 5 5 3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DoisCoracoesEUmaHistoriaPage() {
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
