import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Natiruts - Liberdade Pra Dentro da Cabeça

[Intro] Bm  Cm  C#m7  Cm  Bm
        Bm  Cm  C#m7  Cm  Bm  Dm7 

[Refrão]
 
A       C#m7                 Bm7  Dm7
  Liberdade pra dentro da cabeça
A       C#m7                 Bm7  Dm7
  Liberdade pra dentro da cabeça
A       C#m7                 Bm7  Dm7
  Liberdade pra dentro da cabeça
A       C#m7                 Bm7  Dm7
  Liberdade pra dentro da cabeça

[Primeira Parte] 

C#m7         Bm7
     Quando você for embora
C#m7         Bm7
     Não precisa me dizer
C#m7                Bm7
     O que eu não quero jogo fora
C#m7       Bm7
     Você pode entender
C#m7          Bm7
     Desigualdades e a luta
C#m7                Bm7
     Afim de encontrar
C#m7         Bm7
     A liberdade e a paz
C#m7            Bm7
     Que a alma
         C#m7
Precisa ter
Bm7          C#m7  Bm7
    Oh, Baby

[Segunda Parte] 

C#m7         
     Estar com você
Bm7                  C#m7
    Na virada do sol
              Bm7
É compreender    

Que o que há de melhor
       C#m7          Bm7
Tá na vida, na transformação
        C#m7         Bm7
Da natureza que me traz a noção
       C#m7        Bm7
Na verdade eu não vou chorar
      C#m7         Bm7
Hoje sei, o que o terra veio me ensinar
          C#m7              Bm7
Sobre as coisas que vêm do coração
            C#m7
Pra que eu possa trazer
      Bm7         Dm7
Para mim e pra você 

[Refrão] 

A       C#m7                 Bm7  Dm7
  Liberdade pra dentro da cabeça
A       C#m7                 Bm7  Dm7
  Liberdade pra dentro da cabeça
A       C#m7                 Bm7  Dm7
  Liberdade pra dentro da cabeça
A       C#m7                 Bm7  Dm7
  Liberdade pra dentro da cabeça

[Segunda Parte]

C#m7         
     Estar com você
Bm7                  C#m7
    Na virada do sol
              Bm7
É compreender    

Que o que há de melhor
       C#m7          Bm7
Tá na vida, na transformação
        C#m7         Bm7
Da natureza que me traz a noção
       C#m7        Bm7
Na verdade eu não vou chorar
      C#m7         Bm7
Hoje sei, o que o terra veio me ensinar
          C#m7              Bm7
Sobre as coisas que vêm do coração
            C#m7
Pra que eu possa trazer 
      Bm7         Dm7
Para mim e pra você 

[Refrão Final] 

A       C#m7                 Bm7  Dm7
  Liberdade pra dentro da cabeça
A       C#m7                 Bm7  Dm7
  Liberdade pra dentro da cabeça
A       C#m7                 Bm7  Dm7
  Liberdade pra dentro da cabeça
A       C#m7                 Bm7
  Liberdade pra dentro da cabeça

----------------- Acordes -----------------
A = X 0 2 2 2 0
Bm = X 2 4 4 3 2
Bm7 = X 2 4 2 3 2
C#m7 = X 4 6 4 5 4
Cm = X 3 5 5 4 3
Dm7 = X 5 7 5 6 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function LiberdadePraDentroDaCabecaPage() {
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
