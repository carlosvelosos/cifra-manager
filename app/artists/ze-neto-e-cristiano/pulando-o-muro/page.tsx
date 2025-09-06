import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Zé Neto e Cristiano - Pulando o Muro

[Intro] G  B7  Em  C

G                    B7
Tô na porta da casa dela
     Em
Quem nunca fez loucura de amor
      C
Que atire a primeira pedra

G                                 B7
Toquei a campanha ela não me atendeu
                            Em
Mandei mensagem ela me bloqueou
                            C
Olhei pro lado e pensei comigo
                             Cm
Será que eu faço, será que eu vou

G                         B7
Lá vai o louco pulando o muro
                     Em
Com buquê de flor na mão

Cachorro latindo
             C
A polícia chegando

A vizinha gritando
        G
Pega ladrão
                          B7
Lá vai o louco pulando o muro
                     Em
Com buquê de flor na mão

Cachorro latindo
             C
A polícia chegando

A vizinha gritando
        G
Pega ladrão

G                             B7
Oh seu polícia quem roubou foi ela
                          Em
Se tem uma criminosa aqui ela
Em                           C
Sem faca, sem roupa ela me roubou
                            G
Meu coração tá lá na cama dela
G                              B7
Oh seu polícia quem roubou foi ela
                          Em
Se tem uma criminosa aqui ela
Em                           C
Sem faca, sem roupa ela me roubou
                            G
Meu coração tá lá na cama dela

 B7  Em  C

G                                 B7
Toquei a campanha ela não me atendeu
                            Em
Mandei mensagem ela me bloqueou
                            C
Olhei pro lado e pensei comigo
                             Cm
Será que eu faço, será que eu vou


G                         B7
Lá vai o louco pulando o muro
                     Em
Com buquê de flor na mão

Cachorro latindo
             C
A polícia chegando

A vizinha gritando
        G
Pega ladrão
                          B7
Lá vai o louco pulando o muro
                     Em
Com buquê de flor na mão

Cachorro latindo
             C
A polícia chegando

A vizinha gritando
        G
Pega ladrão

G                              B7
Oh seu polícia quem roubou foi ela
                          Em
Se tem uma criminosa aqui ela
Em                           C
Sem faca, sem roupa ela me roubou
                            G
Meu coração tá lá na cama dela

G                              B7
Oh seu polícia quem roubou foi ela
                          Em
Se tem uma criminosa aqui ela
Em                           C
Sem faca, sem roupa ela me roubou
                            G
Meu coração tá lá na cama dela

 B7  Em  C

----------------- Acordes -----------------
B7 = X 2 1 2 0 2
C = X 3 2 0 1 0
Cm = X 3 5 5 4 3
Em = 0 2 2 0 0 0
G = 3 2 0 0 0 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PulandoOMuroPage() {
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
