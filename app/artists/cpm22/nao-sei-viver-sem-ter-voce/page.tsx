import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `CPM 22 - Não Sei Viver Sem Ter Você

[Primeira Parte]

E5                 G7M(13)
   Não há mais desculpas
                          D9(11)
Você vai ter que me entender
                   C7M
Quando olhar pra trás
                     A7(9)
Procurando e não me ver
          C7M           E5
Chegou a hora de recomeçar

          G7M(13)           
Ter cada coisa em seu lugar
D9(11)           C7M
       Tentar viver sem recordar, jamais
E5            G7M(13)
   E se a saudade me deixar falhar
D9(11)           C7M
       Deixar o tempo tentar te apagar

[Segunda Parte]

Bm6-(11)                   C9(11+)
         Te ligar de madrugada
                   G7M   
Sem saber o que dizer
                     D9(11)
Esperando ouvir tua voz 
                   Bm6-(11)
E você nem me atender
        C9(11+)     D9(11) 
Nem ao menos pra dizer

[Refrão]

     G 
Que não vai voltar
            D9(11)
Não vai tentar me entender
                C9           E5
Que eu não fui nada pra você
            C9           Frase
Que eu deveria te deixar em paz

    G
Eu já não sei mais
           D9(11)
Não sei viver sem ter você
            C9             E5
Hoje eu queria te esquecer
            C9                     D9(11)
Mas quanto mais eu tento, mais eu lembro
G            D9            C9  E5  C9  D9(11)
  Não sei viver sem ter você
G            D9            C9  E5  C9  D9(11)
  Não sei viver sem ter você

[Terceira Parte]

Parte 6 de 8 - 2/2

É difícil de aceitar

Recomeçar do zero

Levantar e caminhar
Em7                      G7M(13)  
    Perceber que quem se ama
                         D4
Já não se importa com você
             C2                         A7(9)
E acordar sozinho ouvindo o som da sua TV
          C7M           E5
Chegou a hora de recomeçar

       G7M(13)      D9(11)       C7M   
Acreditar que pode ser melhor assim
            E5
tentar crescer
          G7M(13)               D9(11)
Fingir feliz, te deixar para depois
                      C7M
A cada dia que eu morrer
                       Bm6-(11)
Espero que você morra dois

[Segunda Parte]

Bm6-(11)                      C9(11+)
         Se eu ligar de madrugada
                   G7M   
Sem saber o que dizer
                     D9(11)
Esperando ouvir sua voz 
                   Bm6-(11)
E você nem me atender
        C9(11+)     D9(11) 
Nem ao menos pra dizer

[Refrão Final]

     G 
Que não vai voltar
            D9(11)
Não vai tentar me entender
                C9           E5
Que eu não fui nada pra você
            C9           Frase
Que eu deveria te deixar em paz

    G
Eu já não sei mais
           D9(11)
Não sei viver sem ter você
            C9             E5
Hoje eu queria te esquecer
            C9                     D9(11)
Mas quanto mais eu tento, mais eu lembro
G            D9(11)        C9  E5  C9  D9(11)
  Não sei viver sem ter você
G            D9(11)        C9  E5  C9  D9(11)
  Não sei viver sem ter você

G                 D9(11)
  Preciso reaprender
     C9
A viver
    E5    C9
Pra esquecer
           D9(11)  G  D9(11)  C9  E5  
Pra te esque______cer
C9      D9(11)  G  
   Pra te esquecer!

----------------- Acordes -----------------
A7(9) = 5 X 5 4 2 X
C2 = X 3 5 5 3 3
C7M = X 3 2 0 0 X
C9 = X 3 5 5 3 3
C9(11+) = X 3 2 0 3 2
D4 = X X 0 2 3 3
D7(4) = X X 0 2 1 3
D9 = X X 0 2 3 0
D9(11) = X 5 4 0 3 0
E5 = 0 2 2 X X X
Em7 = 0 2 2 0 3 0
G = 3 2 0 0 0 3
G7M = 3 X 4 4 3 X
G7M(13) = 3 X 4 4 5 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function NaoSeiViverSemTerVocePage() {
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
