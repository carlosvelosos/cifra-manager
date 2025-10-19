import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Vanessa Rangel - Palpite

[Tab - Frase 1 - Violão]

                     E
E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|-2h4-2------------------------------------|
E|--------4---2-4-2--0----------------------|

[Intro] E  F#/E  A2
        E  F#/E  A2  E 

[Tab - Intro - Violão]

E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|-4-2-----------------------4----0---------|
E|-----4----2-4-2--2-------6---6------------|

E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|--2h4-2-----------------------------------|
A|--------4--2h4-2--------------------------|
E|------------------0-----------------------|

E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|-2h4-2------------------------------------|
E|-------4--2-4-2--0------------------------|

[Tab - Intro - Guitarra]

E|--7---------------------------------------|
B|----7b9r7-5~-----------5/7~---------------|
G|-------------b4r3p1/3---------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|--------4b5-4-----------------------------|
B|---------------5b7r5----------------------|
G|-4-4/6----------------4~------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

E                                       
  Tô com saudade de você
                F#/E  
Debaixo do meu cobertor
A2                Am6      
   E te arrancar suspiros
      E   (Frase 1)
Fazer amor

Tô com saudade de você
      F#/E
Na varanda em noite quente
A2          Am6                C#m7           
   E o arrepio frio que dá na gente

[Pré-Refrão]

             A2
Truque do desejo
           C#m7            A2
Guardo na boca o gosto do beijo
C7M          D2            C7M     
    Eu sinto a falta de você
       D2
Me sinto só

[Refrão]

   E                 F#/E                
E aí, será que você volta?
              A2   Am6   
Tudo à minha volta
    E    (Frase 1)
É triste
                    F#/E        
E aí, o amor pode acontecer
          A2          E   (Frase 1)
De novo pra você, palpite

[Segunda Parte]

E                                
  Tô com saudade de você
          F#/E
Do nosso banho de chuva
 A2                Am6      
Do calor na minha pele
           E  (Frase 1)
Da língua tua

Tô com saudade de você
      F#/E
Censurando o meu vestido
A2               Am6                           
   As juras de amor
            C#m7
Ao pé do ouvido

[Pré-Refrão]

             A2
Truque do desejo
           C#m7            A2
Guardo na boca o gosto do beijo
C7M          D2            C7M     
    Eu sinto a falta de você
       D2
Me sinto só

[Refrão]

   E                 F#/E                
E aí, será que você volta?
              A2   Am6   
Tudo à minha volta
    E    (Frase 1)
É triste
                    F#/E        
E aí, o amor pode acontecer
          A2          E   (Frase 1)
De novo pra você, palpite

[Solo] E  F#/E  A2  E
       E  F#/E  A2  E

[Tab - Solo - Guitarra]

E|-7----------------------------------------|
B|---7b9r7-5~-----------5/7~----------------|
G|------------b4r3p1/3----------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|--------4b5-4-----------------------------|
B|---------------5b7r5--5b7r5---------------|
G|-4-4/6-----------------------4~-----------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-7----------------------------------------|
B|---7b9r7-5~-----------5/7~----------------|
G|------------b4r3p1/3----------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|--------4b5-4-----------------------------|
B|---------------5b7r5---------------/10~---|
G|-4-4/6----------------4~-----4\\-----------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Pré-Refrão]

C7M          D2            C7M     
    Eu sinto a falta de você
       D2
Me sinto só

[Refrão Final]

   E                 F#/E                
E aí, será que você volta?
              A2   Am6   
Tudo à minha volta
    E    (Frase 1)
É triste
                    F#/E        
E aí, o amor pode acontecer
          A2          E   (Frase 1)
De novo pra você, palpite

   E                 F#/E                
E aí, será que você volta?
              A2   Am6     E
Tudo à minha volta     é triste
                    F#/E        
E aí, o amor pode acontecer
          A2          E   (Frase 1)
De novo pra você, palpite

[Final] E (Frase 1) E6

----------------- Acordes -----------------
A2 = X 0 2 2 0 0
Am6 = X 0 2 2 1 2
C#m7 = X 4 6 4 5 4
C7M = X 3 2 0 0 0
D2 = X X 0 2 3 0
E = 0 2 2 1 0 0
E6 = 0 2 2 1 2 0
F#/E = 0 4 4 3 2 0
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PalpitePage() {
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
