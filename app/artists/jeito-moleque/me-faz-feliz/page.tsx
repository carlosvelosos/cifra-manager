import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/jeito-moleque/me-faz-feliz/#

const cifra = `Jeito Moleque - Me Faz Feliz

[Intro] <b>F7M</b>  <b>D#7(4/9)</b>  <b>C#7M</b>  <b>C7(4/9)</b>

 <b>F7M</b>                 <b>Cm</b>             <b>F7(9)</b>
Te vi na galera   fiquei na espera
   <b>Bb7M</b>                                        <b>C#7M</b>   <b>C7(4/9)</b>
E ai foi só voce me olhar     pra eu me apaixonar
     <b>F7M</b>       <b>Cm</b>            <b>F7(9)</b>
Tô apaixonado,  maluco,   vidrado
      <b>Bb7M</b>                   <b>Bbm7</b>
Preciso de um beijo seu   preciso sentir seu calor
      <b>G#7M</b>     <b>C#7M</b>             <b>C7(4/9)</b>
Eu não serei o mesmo sem o teu amor

 <b>F7M</b>                 <b>Cm</b>             <b>F7(9)</b>
Te vi na galera   fiquei na espera
   <b>Bb7M</b>                                        <b>C#7M</b>   <b>C7(4/9)</b>
E ai foi só voce me olhar     pra eu me apaixonar
     <b>F7M</b>       <b>Cm</b>            <b>F7(9)</b>
Tô apaixonado,  maluco,   vidrado
      <b>Bb7M</b>                   <b>Bbm7</b>
Preciso de um beijo seu   preciso sentir seu calor
         <b>G#7M</b>     <b>C#7M</b>             <b>C7(4/9)</b>
Eu não serei o mesmo sem o teu amor

 <b>F7M</b>   <b>Dm7</b>            <b>Bb7M</b>         <b>C7(4/9)</b>
Me faz     feliz      me leva com você
    <b>Am7</b>       <b>Dm7</b>       <b>Bb7M</b>          <b>C7(4/9)</b>
Me   dá   me   diz   que eu sou seu bem-querer
      <b>G#7M</b>      <b>C#7M</b>       <b>C7(4/9)</b>
Que o mundo vai nascer pra nós

                (Volta no começo)
     <b>C#7M</b>    <b>C7(4/9)</b>
Pra nós so pra nós`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function MeFazFelizPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jeito-moleque/me-faz-feliz/#"
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
