import CifraDisplay from "@/components/cifra-display";

const cifra = `
Grupo Revelação - Ô Queiroz

[Intro] Em  C  B7  Em  G7  C  Bm  Am  Bm  Em  D7  B7  Em

  Em                      G7              C
Tem homem que não abre mão de uma mulher gordinha
                       B7               Em
Tem homem de perder a linha com a mulher sarada
                       G7          C
Tem homem que só acha graça nas novinhas
                      B7                 Em
E outros que só se engraçam com as casadas

                      G7               C
Tem homem que se apaixona por mulher carente
                       B7               Em
E outros que ficam carentes sem as piriguetes
                  G7          C
E tem maluco só tentando dá o pente
 B7  Em

E tem parceiro de trazer mulher pra gente

         G7          C
Ô, Queiroz! Ô, Queiroz!
B7                  Bm7(5-)
Traz essa mulher pra nós!
    G7           C
Ô, Queiroz! Ô, Queiroz!
 B7                   Em
Traz essa mulher pra nós!

         G7          C
Ô, Queiroz! Ô, Queiroz!
B7                  Bm7(5-)
Traz essa mulher pra nós!
    G7           C
Ô, Queiroz! Ô, Queiroz!
 B7                   Em
Traz essa mulher pra nós!

                G7                C
Ela tem os atributos que a gente gosta
               B7                  Bm7(5-)
Ela tem os apetrechos que a gente quer
            G7          C
Mas você sempre foi sangue bom
        B7              Bm7(5-)
Nunca deixa o parceiro a pé

              G7
Tem branca, morena
             C
Tem loira, mulata
               B7
Você  sempre  porta
           Bm7(5-)
Uma mina bonita
          G7     C
Além de pagar a conta
          B7    Em
Tú é de botar na fita

         G7          C
Ô, Queiroz! Ô, Queiroz!
B7                  Bm7(5-)
Traz essa mulher pra nós!
        G7           C
Ô, Queiroz! Ô, Queiroz!
 B7                   Em7
Traz essa mulher pra nós!

----------------- Acordes -----------------
Am = 2 2 1 2
B7 = 1 2 0 1
Bm = 4 4 3 4
Bm7(5-) = 3 2 0 0
C = 2 0 1 2
D7 = 4 2 1 4
Em = 5 4 5 5
Em7 = 2 0 0 0
G7 = P3 4 3 5
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function OQueirozPage() {
  return <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />;
}