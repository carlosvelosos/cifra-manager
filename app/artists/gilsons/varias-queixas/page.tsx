import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Gilsons - Várias Queixas

[Primeira Parte]

        Am7(9)  
Pode fazer o que quiser
        Em7
Até me machucar
            Am7(9)              Em7
Transborda no meu coração, só amor!
           Am7(9)
Desde o momento que eu te vi
            Em7
Não pude acreditar
               Am7(9)             Em7
Mas se eu não conseguir, vem me amar

[Refrão]

               G7M
Várias queixas
                     Am7(9)
Várias queixas de você
C7                     G7M(13)
   Por que fez isso comigo
                      Am7(9)
Estamos junto e misturado
     C7                    G7M(13)  
Meu bem quero ser seu namorado
               G7M
Várias queixas
                     Am7(9)
Várias queixas de você
C7                     G7M(13)
   Por que fez isso comigo
                      Am7(9)
Estamos junto e misturado
     C7                    G7M(13)
Meu bem quero ser seu namorado

[Segunda Parte]
 
               G7M(13)
O meu corpo balança 
                           Am7(9)
Querendo encontrar o seu amor
                        C7  
O swingue do Olodum me leva
             G7M(13)
Com você eu vou 

O meu corpo balança 
                           Am7(9)
Querendo encontrar o seu amor
                        C7  
O swingue do Olodum me leva
             G7M(13) 
Com você eu vou 

Me leva  amor
     Am7(9)
Meu bem querer
    C7                 
Me leva que assim
                     G7M(13)
Eu fico louco com você
      
Me leva  amor
     Am7(9)
Meu bem querer
    C7                 
Me leva que assim
                     G7M(13)
Eu fico louco com você

[Refrão]

               G7M
Várias queixas
                     Am7(9)
Várias queixas de você
C7                     G7M(13)
   Por que fez isso comigo
                      Am7(9)
Estamos junto e misturado
     C7                    G7M(13) 
Meu bem quero ser seu namorado
            
Várias queixas
                     Am7(9)
Várias queixas de você
C7                     G7M(13)
   Por que fez isso comigo
                      Am7(9)
Estamos junto e misturado
     C7                    G7M(13)
Meu bem quero ser seu namorado
     Am7(9)                 G7M(13)
Meu bem  quero ser seu namorado
     Am7(9)                 G7M(13)
Meu bem  quero ser seu namorado
     C7M        Cm7          
Meu bem  quero ser seu namorado
G7M
    Várias queixas

----------------- Acordes -----------------
Am7(9) = X 0 5 5 0 0
C7 = X 3 5 3 5 3
C7M = X 3 5 4 5 3
Cm7 = X 3 5 3 4 3
Em7 = 0 X 5 7 0 0
G7M = 3 X 4 4 3 X
G7M(13) = 3 X 4 4 5 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VariasQueixasPage() {
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
