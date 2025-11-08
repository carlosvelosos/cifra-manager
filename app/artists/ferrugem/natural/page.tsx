import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";
import { convertToStructure } from "@/lib/parsers/cifra-converter";

// URL: https://www.cifraclub.com.br/ferrugem/natural/

const cifra = `Ferrugem - Natural

[Intro] <b>Db9</b>  <b>A9</b>  <b>B9</b>  <b>Db9</b>  <b>Bbm7/11</b>  <b>A9</b>  <b>B</b>  <b>Db</b>

<b>Db9</b>
Eu sei que vou sofrer um tempo
<b>A9</b>             <b>B9</b>
É natural, não é assim que some
<b>Db9</b>
Quem dera eu acordasse amanhã
<b>A9</b>               <b>B9</b>
Sem lembrar de nada, nem seu nome

<b>Db9</b>
Difícil vai ser te reencontrar
<b>A9</b>                  <b>B9</b>                 <b>A9</b>
E fingir que estou bem, que não me abalei
                                  <b>B/A</b>
E agir naturalmente pra você não ver
                                    <b>A7+</b>
Que dentro dos meus olhos reflete você
                      <b>F#m7</b>
Será que eu vou conseguir
 <b>B/A</b>                   <b>G#m7</b>
Sorrir com o coração chorando
<b>G#7/5+</b>         <b>A7+</b>
E se você me abraçar
                         <b>Gb/Bb</b>
Eu vou fingir que tô sonhando
                      <b>A</b>
Por um segundo acreditar
                         <b>B</b>   <b>Db</b> <b>Ab</b> <b>Db</b>
Que a gente ainda tá namorando

                 <b>A7+</b>             <b>B9</b>
Toda vez que eu tento te esquecer
            <b>Db</b>
Me lembro mais
               <b>A9</b>          <b>B9</b>       <b>Db9</b>
E tudo que eu faço tem um pouco de você
                 <b>A7+</b>
Eu tento te expulsar da mente
<b>B9</b>            <b>Db</b>
Mas você não sai
                    <b>A9</b>         <b>B9</b>         
Por isso eu não me sinto preparado pra te ver

( <b>A</b>  <b>B/A</b> )
( <b>A</b>  <b>B/A</b> )
( <b>A</b>  <b>B</b>  <b>Db</b> )

<b>Db9</b>
Eu sei que vou sofrer um tempo
<b>A9</b>             <b>B9</b>
É natural, não é assim que some
<b>Db9</b>
Quem dera eu acordasse amanhã
<b>A9</b>               <b>B9</b>
Sem lembrar de nada, nem seu nome

<b>Db9</b>
Difícil vai ser te reencontrar
<b>A9</b>                  <b>B9</b>                 <b>A9</b>
E fingir que estou bem, que não me abalei
                                  <b>B/A</b>
E agir naturalmente pra você não ver
                                    <b>A7+</b>
Que dentro dos meus olhos reflete você

                      <b>F#m7</b>
Será que eu vou conseguir
 <b>B/A</b>                   <b>G#m7</b>
Sorrir com o coração chorando
<b>G#7/5+</b>         <b>A7+</b>
E se você me abraçar
                         <b>Gb/Bb</b>
Eu vou fingir que tô sonhando
                      <b>A</b>
Por um segundo acreditar
                         <b>B</b>   <b>Db</b> <b>Ab</b> <b>Db</b>
Que a gente ainda tá namorando                     

                 <b>A7+</b>             <b>B9</b>
Toda vez que eu tento te esquecer
            <b>Db</b>
Me lembro mais
               <b>A9</b>          <b>B9</b>       <b>Db9</b>
E tudo que eu faço tem um pouco de você
                 <b>A7+</b>
Eu tento te expulsar da mente
<b>B9</b>            <b>Db</b>
Mas você não sai
                    <b>A9</b>         <b>B9</b>         <b>Db</b>   <b>Ab</b>   <b>Db</b>   <b>Ab</b>   <b>Db</b>
Por isso eu não me sinto preparado pra te ver

                 <b>A7+</b>          <b>B/E</b>
Toda vez que eu tento te esquecer
            <b>Db9</b>
Me lembro mais
               <b>A9</b>          <b>B9</b>      <b>Db9</b>
E tudo que eu faço tem um pouco de você
                 <b>A7+</b>
Eu tento te expulsar da mente
<b>B/E</b>           <b>Db9</b>
Mas você não sai
             <b>A9</b>          <b>B/E</b>           <b>Db</b>   <b>Ab</b>   <b>Db</b>   <b>Ab</b>   <b>Db</b>
Por isso eu não me sinto preparado pra te ver
<b>A</b>   <b>B</b>   <b>Db</b>
    Pra te ver

----------------- Acordes -----------------
A = X 0 2 2 2 0
A7+ = X 0 2 1 2 0
A9 = X 0 2 2 0 0
Ab = 4 3 1 1 1 4
B = X 2 4 4 4 2
B/A = X 0 4 4 4 X
B/E = X 7 9 8 7 7
B9 = X 2 4 4 2 2
Bbm7/11 = 6 X 6 6 4 X
Db = X 4 6 6 6 4
Db9 = X 4 6 6 4 4
F#m7 = 2 X 2 2 2 X
G#7/5+ = 4 X 4 5 5 4
G#m7 = 4 X 4 4 4 X
Gb/Bb = 6 X 4 6 7 X`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function NaturalPage() {

    // Convert HTML to structured data
  const cifraStructure = convertToStructure(
    mainCifra || "",
    title || "",
    "https://www.cifraclub.com.br/ferrugem/natural/"
  );

  return (
    <>
      <CifraDisplay
        title={title || ""}
        cifraData={cifraStructure}
        // Fallback to old format if needed
        mainCifra={mainCifra || ""}
        chords={chords || ""}
      />
      <FloatingMenu />
    </>
  );
}
