import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Skank - Saideira

[Intro] Am7  C  Bm7/5-  E7 
        Am7  C  Bm7/5-  E7 
        Am7  C  Bm7/5-  E7 
        Am7  C  Bm7/5-  E7 
        Am7  C  Bm7/5-  E7 
        Am7  C  Bm7/5-  E7 
        Am7  C  Bm7/5-  E7 
        Am7  C  Bm7/5-  E7 

[Primeira Parte]

          Am7     C    Bm7/5-
Tem um lugar diferente
      E7         Am7  C  Bm7/5-  E7
Lá depois da saideira
     Am7   C      Bm7/5-
Quem é de beijo, beija
           E7       Am7  C  Bm7/5-  E7
Quem é de luta, capoeira
          Am7     C    Bm7/5-
Tem um lugar diferente
      E7         Am7  C  Bm7/5-  E7
Lá depois da saideira
     Am7       C      Bm7/5-
Tem homem que vira macaco
      E7            Am7  C  Bm7/5-  E7
E mulher que vira freira

[Refrão]

      Am7        C
Comandante! Capitão
       Bm7/5-      E7
Tio! Brother! Camarada
    Am7     C
Chefia! Amigão
       Bm7/5-     E7
Desce mais uma rodada

      Am7        C
Comandante! Capitão
       Bm7/5-      E7
Tio! Brother! Camarada
    Am7     C
Chefia! Amigão
       Bm7/5-     E7
Desce mais uma rodada

       Am7  C  Bm7/5-  E7
Desce mais   
       Am7  C  Bm7/5-   E7
Desce mais,           ê ê

( Am7  C  Bm7/5-  E7  )
( Am7  C  Bm7/5-  E7 )

[Primeira Parte]

          Am7     C    Bm7/5-
Tem um lugar diferente
      E7         Am7  C  Bm7/5-  E7
Lá depois da saideira
        Am7    C    Bm7/5-
Tem bandeira que recolhe
        E7           Am7  C  Bm7/5-  E7
Tem bandeira que hasteia
          Am7     C    Bm7/5-
Tem um lugar diferente
      E7         Am7   C  Bm7/5-  E7
Lá depois da saideira
     Am7    C    Bm7/5-
É tomando uma gelada
        E7        Am7   
Que se cura bebedeira  
C       Bm7/5-   E7
  Uu... ê      ê

[Refrão]

      Am7        C
Comandante! Capitão
       Bm7/5-      E7
Tio! Brother! Camarada
    Am7     C
Chefia! Amigão
       Bm7/5-     E7
Desce mais uma rodada

      Am7        C
Comandante! Capitão
       Bm7/5-      E7
Tio! Brother! Camarada
    Am7     C
Chefia! Amigão
       Bm7/5-     E7
Desce mais uma rodada

( Am7  C  Bm7/5-  E7 )
( Am7  C  Bm7/5-  E7 )
( Am7  C  Bm7/5-  E7 )
( Am7  C  Bm7/5-  E7 )

[Primeira Parte]

          Am7     C    Bm7/5-
Tem um lugar diferente
      E7         Am7  C  Bm7/5-  E7
Lá depois da saideira
     Am7   C      Bm7/5-
Quem é de beijo, beija
           E7       Am7  C  Bm7/5-  E7
Quem é de luta, capoeira
          Am7     C    Bm7/5-
Tem um lugar diferente
      E7         Am7  C  Bm7/5-  E7
Lá depois da saideira
     Am7       C      Bm7/5-
Tem homem que vira macaco
      E7            Am7  C  Bm7/5-  E7
E mulher que vira freira

[Refrão]

      Am7        C
Comandante! Capitão
       Bm7/5-      E7
Tio! Brother! Camarada
    Am7     C
Chefia! Amigão
       Bm7/5-     E7
Desce mais uma rodada

      Am7        C
Comandante! Capitão
       Bm7/5-      E7
Tio! Brother! Camarada
    Am7     C
Chefia! Amigão
       Bm7/5-     E7
Desce mais uma rodada

       Am7  C  Bm7/5-  E7
Desce mais   
       Am7  C  Bm7/5-   E7
Desce mais,           ê ê

      Am7        C
Comandante! Capitão
       Bm7/5-      E7
Tio! Brother! Camarada
    Am7     C
Chefia! Amigão
       Bm7/5-     E7
Desce mais uma rodada


[Final] Am7  C  Bm7/5-  E7
        Am7  C  Bm7/5-  E7
        Am7  C  Bm7/5-  E7
        Am7  C  Bm7/5-  E7  Am7

----------------- Acordes -----------------
Am7 = X 0 2 0 1 0
Bm7/5- = X 2 3 2 3 X
C = X 3 2 0 1 0
E7 = 0 2 2 1 3 0
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SaideiraPage() {
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
