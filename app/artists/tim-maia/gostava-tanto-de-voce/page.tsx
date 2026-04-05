import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/tim-maia/gostava-tanto-de-voce/#

const cifra = `Tim Maia - Gostava Tanto De Voce

[Intro] <b>A7M</b>  <b>E7(4/9)</b>  <b>A7M</b>  <b>E7(4/9)</b>

[Primeira Parte]

<b>A7M</b>                          <b>Bm7</b>
    Não sei por que você se foi
                        <b>C#m7</b>
Quantas saudades eu senti
                      <b>Bm7</b>
E de tristezas vou viver
                         <b>A7M</b>
E aquele adeus não pude dar

                      <b>Bm7</b>
Você marcou na minha vida
                           <b>C#m7</b>
Viveu, morreu na minha história
                       <b>Bm7</b>
Chego a ter medo do futuro

E da solidão
              <b>A7M</b>       <b>E7(4/9)</b>
Que em minha porta bate

[Refrão]

  <b>A7M</b>
E eu
<b>E7(4/9)</b>                     <b>A7M</b>
        Gostava tanto de você
<b>E7(4/9)</b>                     <b>C#m7</b>  <b>Bm7</b>
        Gostava tanto de você

[Segunda Parte]

<b>A7M</b>                       <b>Bm7</b>
    Eu corro, fujo desta sombra
                        <b>C#m7</b>
Em sonho, vejo este passado
                     <b>Bm7</b>
E na parede do meu quarto
                     <b>C#m7</b>
Ainda está o seu retrato

                           <b>Bm7</b>
Não quero ver pra não lembrar
                    <b>A7M</b>
Pensei até em me mudar
                         <b>E7(4/9)</b>
Lugar qualquer que não exista
                   <b>A7M</b>  <b>E7(4/9)</b>
O pensamento em você

[Refrão]

  <b>A7M</b>
E eu
<b>E7(4/9)</b>                     <b>A7M</b>
        Gostava tanto de você
<b>E7(4/9)</b>                     <b>C#m7</b>  <b>Bm7</b>
        Gostava tanto de você

[Primeira Parte]

<b>C#m7</b>                          <b>Bm7</b>
     Não sei por que você se foi
                        <b>A7M</b>
Quantas saudades eu senti
                      <b>Bm7</b>
E de tristezas vou viver
                    <b>C#m7</b>
E aquele adeus não pude dar

                      <b>Bm7</b>
Você marcou em minha vida
                           <b>A7M</b>
Viveu, morreu na minha história
                       <b>Bm7</b>
Chego a ter medo do futuro

E da solidão
              <b>C#m7</b>      <b>E7(4/9)</b>
Que em minha porta bate

[Refrão]

  <b>C#m7</b>
E eu
<b>Bm7</b>                     <b>A7M</b>  <b>E7(4/9)</b>
    Gostava tanto de você
                    <b>A7M</b>  <b>E7(4/9)</b>
Gostava tanto de você

[Segunda Parte]

<b>A7M</b>                       <b>E7(4/9)</b>
    Eu corro, fujo desta sombra
                        <b>A7M</b>
Em sonho, vejo este passado
                    <b>E7(4/9)</b>
E na parede do meu quarto
              <b>A7M</b>
Ainda está o seu retrato

                           <b>E7(4/9)</b>
Não quero ver pra não lembrar
                    <b>A7M</b>
Pensei até em me mudar
                         <b>E7(4/9)</b>
Lugar qualquer que não exista
                   <b>A7M</b>  <b>E7(4/9)</b>
O pensamento em você

[Refrão]

  <b>A7M</b>
E eu
<b>E7(4/9)</b>                     <b>A7M</b>
        Gostava tanto de você
<b>E7(4/9)</b>                     <b>C#m7</b>  <b>Bm7</b>
        Gostava tanto de você

[Final] <b>E7(4/9)</b>  <b>A7M</b>  <b>E7(4/9)</b>  <b>A7M</b>`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function GostavaTantoDeVocePage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/tim-maia/gostava-tanto-de-voce/#"
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
