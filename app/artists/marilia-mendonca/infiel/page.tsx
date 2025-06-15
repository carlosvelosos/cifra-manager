import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Marília Mendonça - Infiel

[Intro] Am  Em  D  A

[Primeira Parte]

Em                    C
   Isso não é uma disputa
         D            Em
Eu não quero te provocar

Descobri faz um ano
                     C
E to te procurando pra dizer
        D            Em
Hoje a farsa vai acabar

                           C
Hoje não tem hora de ir embora
      D          Em
Hoje, ele vai ficar

No momento deve estar feliz
            C
E achando que ganhou
           D                     Am
Não perdi nada, acabei de me livrar

[Pré-Refrão]

Com certeza ele vai atrás
        Em
Mas com outra intenção

Tá sem casa, sem rumo
                    G
E você é a única opção

E agora será que aguenta
           D
A barra sozinha

Se sabia de tudo
                       Am
Se vira a culpa não é minha

O seu premio que não vale nada
         Em
Estou te entregando

Pus as malas lá fora
                     G
E ele ainda saiu chorando

Essa competição por amor
                  D
Só serviu pra me machucar
                                 Am
Tá na sua mão você agora vai cuidar

De um traidor
        C
Me faça esse favor

[Refrão]

 Am
Iêêê, infiel
                Em
Eu quero ver você morar num motel
               D
Estou te expulsando do meu coração
                 A
Assuma as consequências dessa traição

     Am
Iêiêiê, infiel
           Em
Agora ela vai fazer o meu papel
                D
Daqui um tempo você vai se acostumar
             A
Ai vai ser a ela a quem vai enganar
                Am
Você não vai mudar

[Solo] Am  Em  D  A

[Pré-Refrão]

Am
   O seu premio que não vale nada
         Em
Estou te    entregando

Pus as malas lá fora
                     G
E ele ainda saiu chorando

Essa competição por amor
                  D
Só serviu pra me machucar
                                 Am
Tá na sua mão você agora vai cuidar

De um traidor
        C
Me faça esse favor

[Refrão]

 Am
Iêêê, infiel
                Em
Eu quero ver você morar num motel
               D
Estou te expulsando do meu coração
                 A
Assuma as consequências dessa traição

     Am
Iêiêiê, infiel
           Em
Agora ela vai fazer o meu papel
                D
Daqui um tempo você vai se acostumar
               A
E ai vai ser a ela a quem vai enganar

Você não vai mudar

 Am
Iêêê, infiel
           Em
Agora ela vai fazer o meu papel
                D
Daqui um tempo você vai se acostumar
               A
E ai vai ser a ela a quem vai enganar

Você não vai mudar
 Am          Em
Iêêê, infiel

[Solo Final]

E|------------------------------------------|


----------------- Acordes -----------------
A = P2 2 2 2
Am = 2 2 1 2
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

export default function InfielPage() {
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
