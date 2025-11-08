import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/exaltsamba/te-amo-como-nunca-amei-ninguem/

const cifra = `Exaltsamba - Te Amo Como Nunca Amei Ninguém

[Intro] <b>C</b>  <b>G/B</b>  <b>Am</b>  <b>Am/G</b>  <b>F</b>  <b>C/E</b>  <b>Dm</b>  <b>G</b>

<b>C7M</b>                <b>Am7</b>
Nunca pensei que você
      <b>Em7</b>            <b>F7M</b>    <b>Em7</b>
Me deixaria desse jeito
      <b>Dm7</b>          <b>G7</b>
Sem dormir direito

<b>C7M</b>                         <b>Gm7</b>         <b>C7(9)</b>
Imaginei que fosse um passatempo qualquer
           <b>F7M</b>           <b>Dm7</b>
Uma aventura de amor
           <b>F7M</b>          <b>G7</b> <b>G#°</b>
Mas meu coração me enganou

   <b>Am7</b>
E agora o meu mundo é seu mundo
      <b>Gm7</b>   <b>C7</b>      <b>F7M</b>        <b>Dm</b>
Seu corpo em meu corpo é um só
          <b>G7</b>
É um sentimento maior

<b>C7M</b>
Te amo como nunca amei ninguém
    <b>Am7</b>             <b>Gm7</b>      <b>C7</b>     <b>F7M</b>
Te quero como nunca quis um dia alguém
       <b>Em7</b>       <b>D7</b>        <b>G7</b>
Você mudou a minha história
<b>C7M</b>
Te amo como nunca amei ninguém
     <b>Am7</b>              <b>Gm7</b>     <b>C7</b>      <b>F7M</b>
Te quero como nunca quis um dia alguém
       <b>Em7</b>       <b>D7</b>        <b>G7</b>
Você mudou a minha história

 <b>Am7</b>          <b>D7</b>
Todo dia a todo o momento
<b>Am7</b>                   <b>C7</b>
Tão presente no meu pensamento
  <b>F7M</b>              <b>Am7</b>           <b>Dm7</b>      <b>G7</b>
Perco a noção do tempo só por causa de você

----------------- Acordes -----------------
Am = X 0 2 2 1 0
Am/G = 3 X 2 2 1 X
Am7 = X 0 2 0 1 0
C = X 3 2 0 1 0
C/E = 0 3 2 0 1 0
C7 = X 3 2 3 1 X
C7(9) = X 3 2 3 3 X
C7M = X 3 2 0 0 X
D7 = X X 0 2 1 2
Dm = X X 0 2 3 1
Dm7 = X 5 7 5 6 5
Em7 = 0 2 2 0 3 0
F = 1 3 3 2 1 1
F7M = 1 X 2 2 1 X
G = 3 2 0 0 0 3
G#° = 4 X 3 4 3 X
G/B = X 2 0 0 3 3
G7 = 3 5 3 4 3 3
Gm7 = 3 X 3 3 3 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function TeAmoComoNuncaAmeiNinguemPage() {
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
