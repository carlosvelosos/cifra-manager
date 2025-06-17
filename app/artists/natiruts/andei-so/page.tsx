import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Natiruts - Andei Só

[Intro] C#m  G#m7  C#m  G#m7  
        F#m7  G#m7  F#m7  G#m7
        C#m  G#m7  C#m  G#m7  
        F#m7  G#m7  F#m7  B

[Primeira Parte]

C#m                      G#m7
    Preciso demonstrar pra ela
F#m7                 B
     Que mereço seu tempo pra dizer
C#m                      G#m7
    Um pouco das ideias novas
F#m7              B
     E os lugares onde viajei

C#m                     G#m7
    Se ela botar fé na minha história
  F#m7                     B
Que é de rocha e vem do coração
C#m                      G#m7
    Vou estender o pano mais bonito
F#m7                   B
     Feito na ilha de Madagascar

C#m                        G#m7
    Um Bob, um Djavan, um Jimmy na viola
F#m7                            B
     Com humildade de quem sabe onde quer chegar
C#m                    G#m7
    Reparei a flor no seu vestido
 F#m7                     B
Só guerreiro de aura boa pode merecer

C#m                 G#m7
    E ela parou, olhou, sorriu
 F#m7           B          C#m  G#m7
Me deu um beijo e foi embora
        F#m7                  B
Não vi mais a gata, mas tenho a minha gaita
     C#m     G#m7  F#m7  B
Pra me consolar

[Refrão]

C#m   G#m7  F#m7          B
An___dei só      pela noite
C#m                    A7M              F#m7  B
    Cantei um Reggae pros cachorros na rua
C#m   G#m7  F#m7          B
An___dei só      pela noite
C#m               A7M              F#m7       B
    Cantei um verso daquele velho samba pra lua
C#m   G#m7  F#m7          B
An___dei só      pela noite

[Solo] C#m  G#m7  C#m  G#m7
       F#m7  G#m7  F#m7  B

[Primeira Parte]

C#m                      G#m7
    Preciso demonstrar pra ela
F#m7                 B
     Que mereço seu tempo pra dizer
C#m                      G#m7
    Um pouco das ideias novas
F#m7              B
     E os lugares onde viajei

C#m                     G#m7
    Se ela botar fé na minha história
  F#m7                     B
Que é de rocha e vem do coração
C#m                      G#m7
    Vou estender o pano mais bonito
F#m7                   B
     Feito na ilha de Madagascar

C#m                        G#m7
    Um Bob, um Djavan, um Jimmy na viola
F#m7                            B
     Com humildade de quem sabe onde quer chegar
C#m                    G#m7
    Reparei a flor no seu vestido
 F#m7                     B
Só guerreiro de aura boa pode merecer

C#m                 G#m7
    E ela parou, olhou, sorriu
 F#m7           B          C#m  G#m7
Me deu um beijo e foi embora
        F#m7                  B
Não vi mais a gata, mas tenho a minha gaita
     C#m     G#m7  F#m7  B
Pra me consolar

[Refrão]

C#m   G#m7  F#m7          B
An___dei só      pela noite
C#m                    A7M              F#m7  B
    Cantei um Reggae pros cachorros na rua
C#m   G#m7  F#m7          B
An___dei só      pela noite
C#m               A7M              F#m7       B
    Cantei um verso daquele velho samba pra lua

C#m   G#m7  F#m7          B
An___dei só      pela noite
C#m       A7M             F#m7  B
    Tudo bem a vida continua
C#m   G#m7  F#m7          B
An___dei só      pela noite

[Final] C#m  G#m7  C#m  G#m7
        F#m7  G#m7  F#m7  B

E|--4-----4-3-2-2-2-0-4---4-----4-3-2-2-2-0-----------|

----------------- Acordes -----------------
A7M = X X 7 6 5 4
B = X 2 4 4 4 2
C#m = X 4 6 6 5 4
F#m7 = 2 4 2 2 2 2
G#m7 = 4 6 4 4 4 4
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AndeiSoPage() {
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
