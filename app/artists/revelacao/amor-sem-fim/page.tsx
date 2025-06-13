import CifraDisplay from "@/components/cifra-display";


import FloatingMenu from "@/components/floating-menu";const cifra = `
Grupo Revelação - Amor Sem Fim

(intro solo) 10-20-32-32-10-20-30-10-22-20-10-22-20-32
 10-20-32-32-10-20-30-10-22-20-10-12-14-15-17

   D                     Gm7
O nosso amor é tão leve, que nem dá pra sentir
 D                                      Gm7                F#7
Mais forte que isso é paixão que nos une, não consigo resistir
  Bm        F#m7                    Bm          F#m7
Quando teu corpo me chama eu vou... Me entrego a tudo não to nem aí
 Bm      F#m7              G7+                Em A7
Se pede bis com certeza eu dou, não dá pra fugir...
  D                        Gm7                    D
Eu viajei no sabor do teu beijo... Até posso imaginar
                           Gm7          F#7        Bm
Nosso prazer aumentando o desejo... é gostoso te amar
          F#m7            Bm               F#m7                 Bm
Não tenha medo de se entregar, porque meu medo onde está eu não sei
        F#m7                   G7+               Em A7      D
Nosso segredo a paixão vai guardar, em algum lugar não sei...

 D                           D7                          E/G#
Pra sempre quero estar com você, e não quero deixar pra depois...
                          Gm7                              D
Eu sinto em meu peito acender... O fogo desse amor de nós dois...
 D                        D7                            E/G#
Me envolve todo no seu olhar, e dá todo o seu corpo pra mim
                         Gm7                     D
Eu quero pra você me entregar... Nesse amor sem fim...

(solo final) 10-20-32-32-10-20-30-10-22-20-10-12-14-15-17

----------------- Acordes -----------------
A7 = 2 0 2 2
Bm = 4 4 3 4
D = 4 2 3 4
D7 = 4 2 1 4
Em = 5 4 5 5
F#7 = 4 3 P2 2
F#m7 = 4 P2 2 2
G7+ = 5 4 3 4
Gm7 = 5 P3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function AmorSemFimPage() {
  return (
    <>
      <CifraDisplay title={title} mainCifra={mainCifra} chords={chords} />
      <FloatingMenu />
    </>
  );
}
