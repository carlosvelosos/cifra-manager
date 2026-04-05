import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/so-pra-contrariar/domingo/#

const cifra = `So Pra Contrariar - Domingo

[Intro] <b>F7M</b>  <b>Am7</b>  <b>D7(9-)</b>  <b>G7(13)</b>
        <b>G7(13-)</b>  <b>Gm7</b>  <b>C7</b>

  <b>F7M</b>
Domingo
              <b>Am7</b>
Quero te encontrar
        <b>Cm</b>  <b>F7(5+)</b>         <b>Bb7M</b>
E desabafar todo o meu sofrer
       <b>Bbm6</b>  <b>Eb7(9)</b>
Estar a seu lado
              <b>Am7</b>  <b>D7(9-)</b>
E esquecer de tudo
              <b>G7(9)</b>
Tudo o que o amor
             <b>Db7</b>  <b>C7</b>
Até hoje nos fez sofrer
           <b>F7M</b>
Esquecer a briga
             <b>Am7</b>
Que deixou ferida
          <b>Cm</b>
E que até hoje
<b>F7(5+)</b>    <b>Bb7M</b>
Não cicatrizou
        <b>Bbm6</b>  <b>Eb7(9)</b>              <b>Am7</b>  <b>D7(9-)</b>
Te amar de novo faz parte da vida
           <b>G7(9)</b>
Abre o coração
            <b>Gm7</b>  <b>C7(9-)</b>
Tudo tem sentido e tem razão

[Refrão] (2X)
<b>F7M</b>
Cola teu rosto no meu
<b>Am7</b>
Chega mais perto de mim
<b>Cm</b>             <b>F7(5+)</b>         <b>Bb7M</b>
Faça de conta que eu sou teu namorado
 <b>Bbm6</b>  <b>Eb7(9)</b>
Amar você é bom demais
  <b>Am7</b>                <b>D7(9-)</b>
É tudo que eu posso querer
    <b>G7(9)</b>
Se tudo você tem melhor
  <b>Gm7</b>   <b>C7(9-)</b>
Pior é te perder

<b>F7M</b>   <b>Am7</b>
Amor
<b>Gm7</b>         <b>C7(9-)</b>
Pior é te perder
<b>Am7</b>        <b>D7(9-)</b>
Amor amor amor
<b>Gm7</b>         <b>C7(9-)</b>
Pior é te perder
<b>F#7M</b>   <b>Eb7M</b>
Amor Amor
  <b>F7M</b>
Domingo`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function DomingoPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/so-pra-contrariar/domingo/#"
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
