import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import FramerTransitionWrapper from "@/components/framer-transition-wrapper";

const cifra = `Marília Mendonça - De Quem É a Culpa?

[Intro] G  D5  Am7  C

[Primeira Parte]

Em         D/F#  G
   Exagerado    sim
                  Am
Sou mais você que eu
           G/B  C
Sobrevivo de olhares
                         Em
E alguns abraços que me deu
                 D/F#  G
E o que vai ser de    mim
                     Am
E o meu assunto que não muda
              G/B  C
Minha cabeça não ajuda, loucura

[Segunda Parte]

    Em
Tortura
                          D
E que se dane a minha postura
                      Am
Se eu mudei você não viu
                           C
Eu só queria ter você por perto
            Em
Mas você sumiu
                               D
É tipo vício que não tem mais cura
                     Am
E agora de quem é a culpa
           C
A culpa é sua por ter esse sorriso
Am                                  C
   Ou a culpa é minha por me apaixonar

Por ele

Só isso

[Refrão]

G
  Não finja que eu não tô falando
       D
Com você
                         Am
Eu tô parado no meio da rua
                            C
Eu tô entrando no meio dos carros
                          G
Sem você a vida não continua

Não finja que eu não to falando
       D
Com você
                                Am
Ninguém entende o que eu tô passando
                           G/B  C
Quem é você que eu não conheço mais
                               G
Me apaixonei pelo que eu inventei

De você

( G  D5  Am7  C )

[Segunda Parte]

            Em
Mas você sumiu
                               D
É tipo vício que não tem mais cura
                     Am
E agora de quem é a culpa
           C
A culpa é sua por ter esse sorriso
Am                                  C
   Ou a culpa é minha por me apaixonar

Por ele. Só isso

[Refrão]

G
  Não finja que eu não tô falando
       D
Com você
                         Am
Eu tô parado no meio da rua
                            C
Eu tô entrando no meio dos carros
                          G
Sem você a vida não continua

Não finja que eu não tô falando
       D
Com você
                                Am
Ninguém entende o que eu tô passando
                           G/B  C
Quem é você que eu não conheço mais
                               G
Me apaixonei pelo que eu inventei

De você

( D5  Am7 )

     C
Me apaixonei pelo que eu inventei
        G
De você


----------------- Acordes -----------------
Am = 2 2 1 2
Am7 = 7 P5 5 5
C = 2 0 1 2
D = 4 2 3 4
Em = 5 4 5 5
G = 5 4 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function DeQuemEACulpaPage() {
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
