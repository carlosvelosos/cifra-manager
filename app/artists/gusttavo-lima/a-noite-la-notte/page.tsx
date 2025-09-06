import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Gusttavo Lima - A Noite (La Notte)

[Intro] E  B  D#m7  C#m7

[Tab - Intro]

E|-----------------------------------------------------|
B|---------------------------5/7---5p4-----------------|
G|-----------------4-4h6p4-3-----------4/6-------------|
D|-4/6-6\\4-2-------------------------------------------|
A|-----------4/6---------------------------------------|
E|-----------------------------------------------------|

[Primeira Parte]

   E
Palavras não bastam, não dá pra entender
      B
Esse medo que cresce e não para
          D#m7
É uma história que se complicou
                  C#m7
Eu sei bem o porquê

          E
Qual é o peso da culpa 

Que eu carrego nos braços?
      B
Me entorta as costas e dá um cansaço
       D#m7
A maldade do tempo fez
                    C#m7
Eu me afastar de você

[Refrão]

           B/D#   E
E quando chega a noite
                   B
Eu não consigo dormir
                D#m7
Meu coração acelera
           G#m7
Eu sozinho aqui
        B/D#    E
Mudo o lado da cama
                 B
Eu ligo a televisão
                      D#m7
Olhos nos olhos do espelho
               G#m7
O telefone na mão

[Segunda Parte]

              E
Pro tanto que eu te queria

O perto nunca bastava
       B
Essa proximidade não dava
       D#m7                  
Me perdi no que era real 
                  C#m7  D#m7
E no que eu inventei
        E
Reescrevi as memórias

Deixei o cabelo crescer
        B
E te dedico uma linda história, confesso
          D#m7          
Nem a maldade do tempo 
                          C#m7
consegue me afastar de você

[Pré-Refrão]

           D#m7      E
Te contei tantos segredos
                    B
Que já não eram só meus
                    D#m7
Rimas de um velho diário
                    G#m7
Que nunca me pertenceu

                     E
Tentei palavras não ditas
                     B
Tantas palavras de amor
                  D#m7
Nossa paixão é antiga
                    G#m7
E o tempo nunca passou

[Refrão]

           D#m7   E
E quando chega a noite
                   B
Eu não consigo dormir
                D#m7
Meu coração acelera
           G#m7
Eu sozinho aqui
        D#m7    E
Mudo o lado da cama
                 B
Eu ligo a televisão
                      D#m7
Olhos nos olhos do espelho
                     G#m7
O telefone na minha mão

Yeah, yeah, yeah, yeah

( E  B  D#m7  C#m7)

[Final]

                  E
E quando chega a noite
                   B
Eu não consigo dormir
                D#m7
Meu coração acelera
           G#m7
Eu sozinho aqui
        D#m7    E
Mudo o lado da cama
                 B
Eu ligo a televisão
                      D#m7
Olhos nos olhos do espelho
       G#m7
O telefone na minha mão

( E )

          B
Na minha mão

----------------- Acordes -----------------
B = X 2 4 4 4 2
B/D# = X 6 X 4 7 7
C#m7 = X 4 6 4 5 4
D#m7 = X X 1 3 2 2
E = 0 2 2 1 0 0
G#m7 = 4 X 4 4 4 X
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function ANoiteLaNottePage() {
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
