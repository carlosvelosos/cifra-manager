import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/revelacao/do-jeito-que-vida-quer/#

const cifra = `Revelacao - Do Jeito Que Vida Quer

[Intro] <b>Dm</b>  <b>A7</b>  <b>Dm</b>  <b>A7</b> 

  <b>Dm</b>                                <b>Gm</b>
 Ninguém sabe a magoa que trago no peito
                             <b>C7</b>
 Quem me vê sorrindo desse jeito
            <b>C7(9)</b>        <b>F</b>    <b>D7</b>
 Nem sequer sabe a minha solidão

 <b>Gm7</b>                    <b>A7</b>       <b>Dm</b>
 É que o meu samba me ajuda na vida
                   <b>Dm</b>      <b>C7</b>   <b>F</b>
 Minha dor vai passando esquecida
                   <b>Bb</b>       <b>A7</b>
 Vou vivendo essa vida do jeito que ela me levar

  <b>Dm</b>                                <b>Gm</b>
 Ninguém sabe a magoa que trago no peito
                             <b>C7</b>
 Quem me vê sorrindo desse jeito
            <b>C7(9)</b>        <b>F</b>    <b>D7</b>
 Nem sequer sabe a minha solidão

 <b>Gm7</b>                    <b>A7</b>       <b>Dm</b>
 É que o meu samba me ajuda na vida
                   <b>Dm</b>      <b>C7</b>   <b>F</b>
 Minha dor vai passando esquecida
                   <b>Bb</b>       <b>A7</b>               <b>D7</b>
 Vou vivendo essa vida do jeito que ela me levar

   <b>Gm7</b>                <b>C7</b>                   <b>F</b>
 Vamos falar da mulher ,da morena e dinheiro
               <b>Bb</b>                     <b>Em7(5-)</b>
 Do batuque do surdo e até do pandeiro
             <b>A7</b>                          <b>Am7(5-)</b>              <b>D7</b>
 Mas não fale da vida ,por que você não sabe o que eu já passei
  <b>Gm7</b>                   <b>C7</b>                 <b>F</b>
 Moço, aumente esse samba que o verso não para
                                       <b>Bb</b>
 Batuque mais forte e tristeza se cala
              <b>Bb7</b>       <b>A7</b>               <b>D7</b>
Eu levo essa vida do jeito que ela me levar

  <b>Gm7</b>   <b>C7(9)</b>       <b>F</b>                <b>Dm</b>
  Éeeee        do jeito que a vida quer
<b>Em7(5-)</b> <b>A7</b>     <b>Am7(5-)</b>       <b>D7</b>
  É....   desse jei........to

    <b>Gm7</b>   <b>C7(9)</b>       <b>F</b>              <b>Dm</b>
  Éeeee        do jeito que a vida quer
<b>Em7(5-)</b> <b>A7</b>        <b>Dm</b>          <b>A7</b>
  É....   desse jei........to`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function DoJeitoQueVidaQuerPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/revelacao/do-jeito-que-vida-quer/#"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
      />
      <FloatingMenu />
    </>
  );
}
