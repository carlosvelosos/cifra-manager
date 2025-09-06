import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Lauana Prado - Saudade Burra (part. Simone Mendes)

(Essa aqui é mais bruta que os cara mula, ouviu?)

(Vem!)

[Intro] Dm  C  G  Bb

Dm            C               G
   Você terminou e eu só aceitei
          Bb                      Dm
Por opção sua, hoje eu sou sua ex
              C              G
Quase enlouqueci, eu desidratei
              Bb
O choro de um ano eu derramei num mês

    Dm                 C               G
Mas choro seca e aquieta minha saudade burra
  Dm                    C
A gente perde o encanto e vê que
        G
Boca melhor que a sua tem um montão na rua

        Dm          C
Ai, ai, ai, ai, ai, ai
               G                             Bb
Se imaginar as camas que eu caí, cê cai pra trás
        Dm          C
Ai, ai, ai, ai, ai, ai
               G                            Bb
Seu erro foi achar que ninguém faz o que cê faz
             Dm
Faz, e muito mais
             C
Faz, e muito mais
G                           Bb
  Que ninguém faz o que cê faz

( Dm  C  G  Bb )

(Senhoras e senhores, recebam: Simone Mendes!) (Lauana Prado!)

(Canta comigo, migla)

    Dm                 C               G
Mas choro seca e aquieta minha saudade burra
   Dm                    C
A gente perde o encanto e vê que
         G
Boca melhor que a sua tem um montão na rua

        Dm          C
Ai, ai, ai, ai, ai, ai
               G                             Bb
Se imaginar as camas que eu caí, cê cai pra trás
        Dm          C
Ai, ai, ai, ai, ai, ai
               G                            Bb
Seu erro foi achar que ninguém faz o que cê faz
             Dm
Faz, e muito mais
             C
Faz, e muito mais
G                           Bb
  Que ninguém faz o que cê faz

        Dm          C
Ai, ai, ai, ai, ai, ai
               G                             Bb
Se imaginar as camas que eu caí, cê cai pra trás
        Dm          C
Ai, ai, ai, ai, ai, ai
               G                            Bb
Seu erro foi achar que ninguém faz o que cê faz
             Dm
Faz, e muito mais
             C
Faz, e muito mais
G                           Bb
  Que ninguém faz o que cê faz
            Dm
Faz, e muito mais

(Lauana Prado e Simone Mendes, senhoras e senhores) (coisa linda!)

----------------- Acordes -----------------
Bb = X 1 3 3 3 1
C = X 3 2 0 1 0
Dm = X X 0 2 3 1
G = 3 2 0 0 0 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function SaudadeBurraPartSimoneMendesPage() {
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
