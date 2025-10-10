import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Detonautas Roque Clube - Olhos Certos

[Intro] C#m  A7M  C#m  A7M

[Tab - Intro]

  C#m              A7M  C#m              A7M
E|----4-5-5h7-5--4----------4-5-5h7-5-4-------|
B|-----------------5~--------------------2/5~-|
G|--------------------------------------------|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|

[Primeira Parte]

 C#m            A7M
Tento te encontrar
 C#m         F#7(11)
Tanto pra dizer
 C#m      A7M       C#m  A7M
Meu amor,     tudo bem

 C#m          A7M
Sorte de nós dois
       C#m        F#7(11)
Quero te fazer feliz
 C#m      A7M          C#m  A7M
Meu amor,     sempre quis

[Refrão]

 C#m                       A7M
Seus olhos certos mas não sei o que dizer
F#7(11)           A7M
Eu não vou mas o tempo vem
 C#m                   A7M
Ta tudo certo mas não sei o que dizer
F#7(11)           A7M         C#m  A7M
Eu não vou mas o tempo vem aqui

[Primeira Parte]

 C#m            A7M
Tento te encontrar
 C#m         F#7(11)
Tanto pra dizer
 C#m      A7M       C#m  A7M
Meu amor,     tudo bem

 C#m          A7M
Mesmo sem te ver
 C#m           F#7(11)
Não chegou ao fim
 C#m      A7M          C#m  A7M
Seu amor,     tudo em mim

[Segunda Parte]

E         B4  C#m         A2   
  Se não for mais do que tento ser
E         B4  A2   
  Se não for mais

E         B4  C#m         A2   
  Se não for mais do que tento ser
E         B4  A2   
  Se não for

( C#m  B4  A2 )
( C#m  B4  A2 )
( C#m  B4  A2 )
( C#m  B4  A2 )

[Refrão]

 C#m                       A7M
Seus olhos certos mas não sei o que dizer
F#7(11)           A7M
Eu não vou mas o tempo vem
 C#m                    A7M
Ta tudo certo, mas não sei o que dizer
F#7(11)           A7M           
Eu não vou mas o tempo vem aqui

[Final] C#m  B4  A2   
        C#m  B4  A2

----------------- Acordes -----------------
A2 = X 0 2 2 0 0
A7M = X 0 6 6 5 X
B4 = X 2 4 4 0 0
C#m = X 4 6 6 5 0
E = 0 2 2 1 0 0
F#7(11) = 2 4 4 3 0 0
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OlhosCertosPage() {
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
