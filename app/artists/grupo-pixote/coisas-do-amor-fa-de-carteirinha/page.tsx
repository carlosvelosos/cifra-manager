import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/pixote/coisas-do-amor-fa-de-carteirinha/

const cifra = `Grupo Pixote - Coisas do amor "Fã de carteirinha"

Introdução: <b>A/B</b> / <b>D/A</b> / <b>G7+</b> / <b>F#m7</b> / <b>Em7</b> / <b>G7+</b> / <b>F#m7</b> / <b>Em7</b> / <b>D7+</b> / <b>C7+</b> / <b>D7+</b> /

<b>D7+</b>                     <b>Em7</b>
Eu não sei se você sabe
        <b>F#m7</b>                <b>A/B</b> ^ <b>D/A</b>
Mas preciso tanto lhe dizer
 <b>G7+</b>                    <b>D/F#</b>
Tô parado aqui pensando
     <b>Em7</b>           <b>A7/9</b>
Onde é que anda você
  <b>D7+</b>                    <b>Em7</b>
Será que você tá na minha
        <b>F#m7</b>             <b>A/B</b> ^ <b>D/A</b>
Eu sei lá o que você quer
 <b>G7+</b>                     <b>D/F#</b>
Sou teu fã de carteirinha
      <b>Em7</b>                       <b>C#m5-/7</b> ^ <b>F#7/9-</b>
Tudo bem, seja o que Deus quiser
     <b>Bm7</b>                            <b>F#m7</b>
Mas tanto que eu te falei, falei e nada
        <b>G7+</b>                <b>E/G#</b>        <b>Em7/A</b>
Tantas vezes que eu te pedi....pedi e nada
<b>C#m5-/7</b> ^ <b>F#7</b>     <b>Bm7</b>                              <b>F#m7</b>
.......E se pensa....que é dona da verdade, não é nada
    <b>G7+</b>                 <b>E/G#</b>         <b>Em7/A</b>
E agora acha que é feliz....mas tá errada
                       <b>G7+</b>           <b>F#m7</b>
Pois quando a gente se ama é um show
         <b>B7</b>           <b>Em7</b>           <b>Em7</b> ^ <b>Fm7</b>  <b>F#m7</b>
Parece que o amor da gente recomeçou
        <b>B7</b>        <b>Em7</b>
A cada dia ele aumenta
                   <b>Em7/A</b>
E o coração não aguenta
           <b>A7/9</b>      <b>D7+</b>  <b>D/F#</b>  <b>Am7</b>
De tanto que te esperou
          <b>C/D</b>     <b>G7+</b>           <b>F#m7</b>
Mas de repente você me deixa só
     <b>B7</b>       <b>Em7</b>          <b>Em7</b> ^ <b>Fm7</b>  <b>F#m7</b>
Aí então a cabeça dá um nó
           <b>B7</b>        <b>Em7</b>
Assim não muda de assunto
                       <b>Em7/A</b>
Porque a gente não tá junto
           <b>A7/9</b>
Sei lá são coisas do amor..

<b>D9</b> / <b>Em7</b> / <b>F#m7</b> / <b>A/B</b> ^ <b>B7</b> / <b>G7+</b> / <b>F#m7</b> / <b>Em7</b> / <b>G/A</b> /

VOLTA AO INÍCIO

----------------- Acordes -----------------
A/B = 11 14 12 14
A7/9 = 7 6 8 9
Am7 = 7 P5 5 5
B7 = 1 2 0 1
Bm7 = 4 2 3 4
C#m5-/7 = 3 4 2 5
C7+ = 2 0 0 2
D7+ = 0 P2 2 4
D9 = 0 2 3 2
Em7 = 2 0 0 0
F#7 = 4 3 P2 2
F#7/9- = 4 3 5 5
F#m7 = 4 P2 2 2
Fm7 = 3 5 4 6
G7+ = 5 4 3 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function CoisasDoAmorFaDeCarteirinhaPage() {
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
