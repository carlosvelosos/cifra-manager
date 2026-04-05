import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/jorge-ben-jor/filho-maravilha/#

const cifra = `Jorge Ben Jor - Filho Maravilha

[Intro] <b>Em</b>  <b>C</b>  <b>D</b>

<b>Em7</b>             <b>C</b>     <b>D9</b>        <b>Em7</b> <b>C</b> <b>D9</b> <b>Em7</b>          <b>C</b>         <b>D9</b>   <b>Em7</b>       <b>C</b> <b>D9</b>
E novamente ele chegou com inspiração,  com muito amor e emoção com explosão
  <b>Em7</b>                   <b>C</b> <b>D9</b>     <b>Em7</b>               <b>C</b>  <b>D9</b> <b>Em7</b>                 <b>C</b>        <b>Em7</b>   <b>C</b> <b>D9</b>
Sacudindo a torcida aos 33 minutos do segundo tempo, depois de fazer uma jogada celestial em gol

  <b>Em7</b>                      <b>C</b>    <b>D9</b>       <b>Em7</b>                  <b>C</b>    <b>D9</b>
Tabelou, driblou dois zagueiros, deu  um toque driblou o goleiro
<b>Em7</b>                        <b>C</b>          <b>D9</b>     <b>Em7</b>           <b>C</b>  <b>D9</b>
Só não entrou com bola e tudo porque teve humildade em gol

<b>Em7</b>                         <b>C</b>     <b>D9</b>          <b>Em7</b>             <b>C</b>   <b>D9</b>
Foi um gol de classe onde ele mostrou sua malícia e sua raça

   <b>Em7</b>                    <b>C</b>               <b>D9</b>     <b>Em7</b>              <b>C</b>                <b>D9</b>
Foi um gol de anjo um verdadeiro gol de placa que a galera agradecida se encantava
  <b>Em7</b>                   <b>C</b>                <b>D9</b>        <b>Em7</b>             <b>C</b>               <b>D9</b>
Foi um gol de anjo um verdadeiro gol de placa que a galera agradecida se encantava

<b>Em7</b>                 <b>Am7</b>   <b>Bm7</b>       <b>Em7</b>   <b>Am7</b>  <b>Bm7</b>
Filho maravilha, nós gostamos de você ih-ih-ih-ih-ih-ih-ih               (3x)
<b>Em7</b>            <b>Am7</b>     <b>Bm7</b>        <b>Em7</b>    <b>Am7</b>  <b>Bm7</b>
Filho maravilha faz mais um pra gente ver ih-ih-ih-ih-ih-ih-ih

<b>Em7</b>          <b>Am7</b>     <b>Bm7</b>        <b>Em7</b>    <b>Am7</b>  <b>Bm7</b>
Filho maravilha, nós gostamos de você ih-ih-ih-ih-ih-ih-ih
<b>Em7</b>          <b>C</b>         <b>D9</b>           <b>Em7</b>    <b>C</b>  <b>D9</b>
Filho maravilha faz mais um pra gente ver ih-ih-ih-ih-ih-ih-ih

<b>Em7</b>          <b>Am7</b>     <b>Bm7</b>        <b>Em7</b>    <b>Am7</b>  <b>Bm7</b>
Filho maravilha, nós gostamos de você ih-ih-ih-ih-ih-ih-ih
<b>Em7</b>          <b>C</b>         <b>D9</b>           <b>Em7</b>    <b>C</b>  <b>D9</b>
Filho maravilha faz mais um pra gente ver ih-ih-ih-ih-ih-ih-ih`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra =
  chordsSectionIndex === -1
    ? restOfCifra.join("\n\n")
    : restOfCifra.slice(0, chordsSectionIndex).join("\n\n");

export default function FilhoMaravilhaPage() {
  // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/jorge-ben-jor/filho-maravilha/#"
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
