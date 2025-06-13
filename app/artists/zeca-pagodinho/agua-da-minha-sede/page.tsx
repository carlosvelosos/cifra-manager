import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Zeca Pagodinho - Água da minha sede

[Intro] G6(9)  C  D7

G            C/E     G                C/E
Eu preciso do seu amor  paixão forte me domina
Bb        Eb      Bb           Eb      C/E
Agora que começou   não sei como termina
           C              D7       Bm7(5-)
Água da minha sede  bebo na sua fonte
              E7      A7(9)                 D7     G
Sou peixe na sua rede   pôr-do-sol no seu horizonte
              C/E      G                    C/E     G
Quando você sambou na roda  quando você sambou na roda
                 B7     Em7                  B7     Em7
Fiquei a fim de te namorar  fiquei a fim de te namorar
             A7     D7                        Bm
O amor tem essa história  se bate já quer entrar
           E7       A7(9)            D7    G
Se entrar não quer sair  ninguém sabe explicar
               C/E      G                 C/E      G
O meu amor é passarinheiro  o meu amor é passarinheiro
              B7     Em7               B7     Em7
Ele só quer passarinhar ele só quer passarinhar
               A7    D7
Seu beijo é um alçapão  seu abraço é uma gaiola
Bm7              E7      A7(9)                  D7     G
Que prende meu coração    que nem moda de viola
                   D7
Na gandaia  na gandaia
              G
Fruto do seu amor me pegou
          D7    Ebº        Em7
Na gandaia   sua renda me rodou
     D7                        Bm7     E7
Foi a gira  foi canjira que me enfeitiçou
       Am7      D7            G
Apaixonado  preciso do seu amor

----------------- Acordes -----------------
A7 = 2 0 2 2
A7(9) = 7 6 8 9
Am7 = 7 P5 5 5
B7 = 1 2 0 1
Bb = P3 3 3 3
Bm = 4 4 3 4
Bm7 = 4 2 3 4
Bm7(5-) = 3 2 0 0
C = 2 0 1 2
D7 = 4 2 1 4
E7 = 2 1 0 0
Eb = 5 3 4 5
Ebº = 1 2 1 4
Em7 = 2 0 0 0
G = 5 4 3 5
G6(9) = 5 4 5 7
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CifraPage() {
  return (
    <>
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}
