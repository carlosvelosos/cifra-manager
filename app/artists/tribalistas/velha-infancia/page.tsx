import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Tribalistas - Velha Infância

[Intro] F#m  Bm  E  F#m
        F#m  Bm  E  F#m

[Primeira Parte]

F#m
    Você é assim
Bm
   Um sonho pra mim
E                     F#m
  E quando eu não te vejo

Eu penso em você
Bm
   Desde o amanhecer
E                   F#m
  Até quando eu me deito

[Refrão]

          Bm
Eu gosto de você
E          F#m
  E gosto de ficar com você
            Bm
Meu riso é tão feliz contigo
E                F#m
  O meu melhor amigo é o meu amor

E a gente canta
Bm
   E a gente dança
E                   F#m
  E a gente não se cansa

De ser criança
Bm
   Da gente brincar
E                   F#m
  Da nossa velha infância

[Refrão 2]

            Bm
Seus olhos meu clarão
E           F#m
  Me guiam dentro da escuridão
            Bm
Seus pés me abrem o caminho
E            F#m
  Eu sigo e nunca me sinto só

[Primeira Parte]

Você é assim
Bm
   Um sonho pra mim
E                     F#m
  Quero te encher de beijos

Eu penso em você
Bm
   Desde o amanhecer
E                   F#m
  Até quando eu me deito

[Refrão]

          Bm
Eu gosto de você
E          F#m
  E gosto de ficar com você
            Bm
Meu riso é tão feliz contigo
E                F#m
  O meu melhor amigo é o meu amor

A gente canta
Bm
   A gente dança
E                 F#m
  A gente não se cansa

De ser criança
Bm
   Da gente  brincar
E                   F#m
  Da nossa velha infância

[Refrão 2]

            Bm
Seus olhos meu clarão
E           F#m
  Me guiam dentro da escuridão
            Bm
Seus pés me abrem o caminho
E            F#m
  Eu sigo e nunca me sinto só

[Terceira Parte]

Você é assim
Bm                  E
   Um sonho pra mim
          F#m
Você é assim

Você é assim
Bm                  E
   Um sonho pra mim
          F#m
Você é assim

Você é assim
Bm                  E
   Um sonho pra mim
          F#m
Você é assim

[Final] Bm  E  F#m  Bm  E  F#m
        Bm  E  F#m  Bm  E  F#m
        Bm  E  F#m  Bm  E  F#m

----------------- Acordes -----------------
Bm = X 2 4 4 3 2
E = 0 2 2 1 0 0
F#m = 2 4 4 2 2 2
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function VelhaInfanciaPage() {
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
