import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

const cifra = `Marília Mendonça - Hackearam-me (part. Tierry)

[Intro] Bb  Gm7  Dm7  Bb

[Primeira Parte]

    Gm7
Joguei as nossas fotos na lixeira
    C
Pergunta se depois esvaziei
     Am7
Não tive coragem
    Dm7
Tô vendo sempre que me bate saudade

[Pré-Refrão]

Gm7
    Tô evitando os lugares pra não te ver
C
  Tô rejeitando os convites pra beber
Am7
    Me dói falar em bebê
   Dm7
Bebê era como eu chamava você

Gm7
    Meu coração clonou meu chip
   C
E só para te avisar
   Am7
Se essa noite eu te ligar
 Dm7
Não atenda

[Refrão]

                   Gm7
Se acaso, de madrugada
    C
Chegar algum: "volta para mim"
 Am7               Dm7
Hackearam-me, hackearam-me

                   Gm7
Dizendo: "ainda te amo"
      C
É alguém que sabe que eu te perdi
 Am7               Dm7
Hackearam-me, hackearam-me

[Solo] Gm7  C  Am7  Dm7

[Pré-Refrão]

Gm7
    Tô evitando os lugares pra não te ver
C
  Tô rejeitando os convites pra beber
Am7
    Me dói falar em bebê
   Dm7
Bebê era como eu chamava você

Gm7
    Meu coração clonou meu chip
   C
E só para te avisar
   Am7
Se essa noite eu te ligar
 Dm7
Não atenda

[Refrão]

                   Gm7
Se acaso, de madrugada
    C
Chegar algum: "volta para mim"
 Am7           Dm7
Hackearam-me, hackearam-me

                   Gm7
Dizendo: "ainda te amo"
      C
É alguém que sabe que eu te perdi
 Am7           Dm7
Hackearam-me, hackearam-me

                   Gm7
Se acaso, de madrugada
    C
Chegar algum: "volta para mim"
 Am7           Dm7
Hackearam-me, hackearam-me

                   Gm7
Dizendo: "ainda te amo"
      C
É alguém que sabe que eu te perdi
 Am7           Dm7
Hackearam-me, hackearam-me

    Gm7
Joguei as nossas fotos na lixeira


----------------- Acordes -----------------
Am7 = 7 P5 5 5
Bb = P3 3 3 3
C = 2 0 1 2
Dm7 = 0 2 1 3
Gm7 = 5 P3 3 3
`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function HackearamMePartTierryPage() {
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
