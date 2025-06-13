import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Grupo Revelação - Grades do Coração

[Primeira Parte]

Am                               D7
   Quando eu te vi pela primeira vez
Am                                   D7
   Me encantei com o seu jeitinho de ser
G                         D
  Seu olhar tão lindo me fez viajar
G                              F  E7
  Vi no seu sorriso um imenso mar

Am                              D7
   Fiz uma canção pra nunca esquecer
Am                             D7
   O momento em que eu conheci você
G                    D
  Era uma linda noite  de verão
G                          F  E7
  Você despertou minha emoção

[Segunda Parte]

A                             E
  Passei a minha vida a procurar
                 C#7        F#m
Alguém que eu pudesse entregar
                           D
A chave pra abrir meu coração
                 E7          A
Tirar de vez do peito a solidão
                           E
Já tentei não dá pra esconder
            C#7         F#m
O amor que sinto por você
                              D
É luz, desejo, encanto e sedução
                E7
Ardente como a fúria de um vulcão

[Refrão]

A       A7       D
  A paixão me pegou
            E7            A
Tentei escapar não consegui
               A7      D
Nas grades do meu coração
        E7            A
Sem querer eu te prendi

      A7       D
A paixão me pegou
            E7            A
Tentei escapar não consegui
               A7      D
Nas grades do meu coração
        E7
Sem querer eu te prendi

[Primeira Parte]

Am                          D7
   Quando eu te vi pela primeira vez
Am                              D7
   Me encantei com o seu jeitinho de ser
G                         D
  Seu olhar tão lindo me fez viajar
G                              F  E7
  Vi no seu sorriso um imenso mar

Am                     D7
   Fiz uma canção pra nunca esquecer
Am                        D7
   O momento que eu conheci você
G                    D
  Era uma linda noite  de verão
G                          F  E7
  Você despertou minha emoção

[Segunda Parte]

A                             E
  Passei a minha vida a procurar
                 C#7        F#m
Alguém que eu pudesse entregar
                           D
A chave pra abrir meu coração
                 E7          A
Tirar de vez do peito a solidão
                           E
Já tentei não dá pra esconder
            C#7         F#m
O amor que sinto por você
                              D
É luz, desejo, encanto e sedução
                E7
Ardente como a fúria de um vulcão

[Refrão]

A       A7       D
  A paixão me pegou
            E7            A
Tentei escapar não consegui
               A7      D
Nas grades do meu coração
        E7            A
Sem querer eu te prendi

      A7       D
A paixão me pegou
            E7            A
Tentei escapar não consegui
               A7      D
Nas grades do meu coração
        E7
Sem querer eu te prendi

      A7       D
A paixão me pegou
            E7            A
Tentei escapar não consegui
               A7      D
Nas grades do meu coração
        E7            A
Sem querer eu te prendi

      A7       D
A paixão me pegou
            E7            A
Tentei escapar não consegui
               A7      D
Nas grades do meu coração
        E7
Sem querer eu te prendi

----------------- Acordes -----------------
A = P2 2 2 2
A7 = 2 0 2 2
Am = 2 2 1 2
C#7 = 3 4 2 3
D = 4 2 3 4
D7 = 4 2 1 4
E = 2 1 0 2
E7 = 2 1 0 0
F = 3 2 1 3
F#m = 4 2 2 4
G = 5 4 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function GradesDoCoracaoPage() {
  return (
    <>
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}