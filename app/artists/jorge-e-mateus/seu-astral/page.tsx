import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Jorge & Mateus - Seu Astral

[Intro] G  A2  Bm  A2
        G  A2  Bm  A2

[Primeira Parte] 

 G               D
Fico sozinho pensando em você
 G                Bm           
Vejo imagens, retratos de nós
G                          D
Olho pro espelho, sinto o meu coração
G                Bm            
Ouço baixinho o som da sua voz

   G
Dizendo pra mim que é sobrenatural
       Bm               
Esse amor fora do normal
   G
Dizendo pra mim que sou o seu astral
           A2
Que esse amor que está em mim é tão real

[Refrão] 

G                        
  Eu viajei no seu olhar 
          A2  Bm
No teu sor_riso
             A2
Nos teus segredos
G
  Eu descobri o que é amar
 G  A2  Bm             A2
Pe lo  toque dos seus beijos

G                        
  Eu viajei no seu olhar 
          A2  Bm
No teu sor_riso
             A2
Nos teus segredos
G
  Eu descobri o que é amar
 G  A2  Bm             A2
Pe lo  toque dos seus beijos

( G  A2  Bm  A2 )
( G  A2  Bm  A2 )

[Primeira Parte]

 G               D
Fico sozinho pensando em você
 G                A2       Bm           
Vejo imagens, retratos de nós
G                          D
Olho pro espelho, sinto o meu coração
G                Bm            
Ouço baixinho o som da sua voz

   G
Dizendo pra mim que é sobrenatural
       Bm               
Esse amor fora do normal
   G
Dizendo pra mim que sou o seu astral
           A2
Que esse amor que está em mim é tão real

[Refrão] 

G                        
  Eu viajei no seu olhar 
          A2  Bm
No teu sor_riso
             A2
Nos teus segredos
G
  Eu descobri o que é amar
 G  A2  Bm             A2
Pe lo  toque dos seus beijos

G                        
  Eu viajei no seu olhar 
          A2  Bm
No teu sor_riso
             A2
Nos teus segredos
G
  Eu descobri o que é amar
 G  A2  Bm             A2
Pe lo  toque dos seus beijos

[Final] G  A2  Bm

----------------- Acordes -----------------
A2 = X 0 2 2 0 0
Bm = X 2 4 4 3 2
D = X X 0 2 3 2
G = 3 2 0 0 0 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SeuAstralPage() {
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
