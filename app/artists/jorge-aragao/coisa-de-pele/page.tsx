import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/jorge-aragao/coisa-de-pele

const cifra = `Jorge Aragao - Coisa De Pele

[Intro] <b>F7M</b>  <b>Gm7</b>  <b>Am7</b>  <b>D7(9-)</b>  <b>Gm6</b>
        <b>A#m6</b>  <b>Am7</b>  <b>D7</b>  <b>Gm7</b>  <b>C7</b>

  <b>F7M</b>
Podemos sorrir
             <b>Em7(5-)</b>  <b>A7(9-)</b>
Nada mais nos impede
   <b>Dm7</b>
Não dá pra fugir
              <b>Cm7</b>   <b>F7</b>
Dessa coisa de pele
   <b>Bb</b>       <b>B°</b>
Sentida por nós
   <b>F</b>          <b>D7</b>
Desatando os nós
  <b>G7(13)</b>     <b>G7(13-)</b>
Sabemos agora
     <b>Gm7</b>                   <b>C7(13-)</b>
Nem tudo que é bom vem de fora
   <b>F7M</b>                     <b>Em7(5-)</b>   <b>A7(9-)</b>
E a nossa canção pelas ruas e bares
     <b>Dm7</b>
Nos traz a razão
             <b>Cm7</b>   <b>F7</b>
Relembrando Palmares
   <b>Bb</b>        <b>Bº</b>
Foi bom insistir
    <b>F</b>        <b>D7</b>
Compôr e ouvir
   <b>G7(13)</b>    <b>G7(13-)</b>    <b>Gm7</b>               <b>C7(13-)</b>
Resiste quem pode na força dos nossos pagodes
    <b>Fm</b>
E o samba se faz
             <b>C/E</b>
Prisioneiro pacato dos nossos tantãs
   <b>Ebm6</b>        <b>F7</b>
O banjo liberta
            <b>Bbm</b>
Da garganta do povo as suas emoções
  <b>Eb</b>
Alimentando muito mais
   <b>Ab</b>
A cabeça de um compositor
  <b>G#°</b>
Eterno reduto de paz
 <b>Gm7</b>                 <b>C7</b>       <b>F</b>
Nascente das várias feições do amor

[Refrão]

      <b>C/E</b>  <b>A7</b>       <b>Dm</b>     <b>D7</b>
Art popular do nosso chão
  <b>Gm</b>                     <b>C7</b>
É o povo quem produz o show
           <b>F</b>
E assina a direção`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function CoisaDePelePage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jorge-aragao/coisa-de-pele"
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
