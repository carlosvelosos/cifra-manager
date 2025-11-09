import CifraDisplay from "@/components/cifra-display";
import FloatingMenu from "@/components/floating-menu";

// URL: https://www.cifraclub.com.br/jorge-mateus/pra-sempre-com-voce/

const cifra = `Jorge & Mateus - Pra Sempre Com Você

[Intro] <b>C#m</b>  <b>B/D#</b>  <b>E</b>

[Primeira parte]

<b>C#m</b>                                   <b>G#m</b>
    A gente se conheceu há pouco tempo
                                    <b>B9</b>
Mas a gente já está falando em casamento

Tô correndo um risco sério
              <b>E</b>
De viver pra sempre com você
<b>C#m</b>
    Entre um em um milhão nasce um Adão e Eva
<b>G#m</b>                                       <b>B9</b>
    Um Romeu e Julieta em meio a tantas guerras
                                  <b>E</b>
Mas quando se vale a pena um amor   supera

[Pré-Refrão]

 <b>C#m</b>                <b>G#m</b>
Não sou o anjo da guarda
        <b>B9</b>          <b>E</b>
Mas eu vou te proteger
<b>C#m</b>          <b>G#m</b>            <b>B9</b>
Esse seu sorriso é o combustível
          <b>E</b>
Pra eu viver 

Yeah, yeah, yeah, yeah

[Refrão]
  
<b>B9</b>
   Se você me pedir pra ficar 
                  <b>F#</b>
Pra sempre com você

Nem vou pensar duas vezes pra te responder 
                <b>G#m</b>
Cê sabe que eu vou, vou, vou
                      <b>E</b>
Pego minhas coisas e vou  
   <b>F#</b>
Ficar pra sempre, sempre com você

<b>B9</b>
   Se você me pedir pra ficar 
                  <b>F#</b>
Pra sempre com você

Nem vou te responder você sabe porquê
                 <b>G#m</b>
Eu simplesmente vou, vou, vou
                 <b>E</b>
Eu largo tudo e vou
   <b>F#</b>                           <b>B9</b>
Ficar pra sempre, sempre com você

            <b>C#m</b>
Ôh, ôh, ôh, ôh,  ôh
            <b>E</b>
Ôh, ôh, ôh, ôh, ôh
            <b>B9</b>     <b>F#</b>
Ôh, ôh, ôh, ôh, ôh

[Primeira parte]

<b>C#m</b>                                   <b>G#m</b>
    A gente se conheceu há pouco tempo
                                    <b>B9</b>
Mas a gente já está falando em casamento

Tô correndo um risco sério
              <b>E</b>
De viver pra sempre com você
<b>C#m</b>
    Entre um em um milhão nasce um Adão e Eva
<b>G#m</b>                                       <b>B9</b>
    Um Romeu e Julieta em meio a tantas guerras
                                  <b>E</b>
Mas quando se vale a pena um amor   supera

[Pré-Refrão]

 <b>C#m</b>                <b>G#m</b>
Não sou o anjo da guarda
        <b>B9</b>          <b>E</b>
Mas eu vou te proteger
<b>C#m</b>          <b>G#m</b>            <b>B9</b>
Esse seu sorriso é o combustível
          <b>E</b>
Pra eu viver 

Yeah, yeah, yeah, yeah

[Refrão]
  
<b>B9</b>
   Se você me pedir pra ficar 
                  <b>F#</b>
Pra sempre com você

Nem vou pensar duas vezes pra te responder 
                <b>G#m</b>
Cê sabe que eu vou, vou, vou
                      <b>E</b>
Pego minhas coisas e vou  
   <b>F#</b>
Ficar pra sempre, sempre com você

<b>B9</b>
   Se você me pedir pra ficar 
                  <b>F#</b>
Pra sempre com você

Nem vou te responder você sabe porquê
                 <b>G#m</b>
Eu simplesmente vou, vou, vou
                 <b>E</b>
Eu largo tudo e vou
   <b>F#</b>                           <b>B9</b>
Ficar pra sempre, sempre com você

            <b>C#m</b>
Ôh, ôh, ôh, ôh,  ôh
            <b>E</b>
Ôh, ôh, ôh, ôh, ôh
            <b>B9</b>     <b>F#</b>
Ôh, ôh, ôh, ôh, ôh

[Final] <b>G#m</b>

----------------- Acordes -----------------
B/D# = X 6 X 4 7 7
B9 = X 2 4 4 2 2
C#m = X 4 6 6 5 4
E = 0 2 2 1 0 0
F# = 2 4 4 3 2 2
G#m = 4 6 6 4 4 4`;

const [title, ...restOfCifra] = cifra.split("\n\n");
const chordsSectionIndex = restOfCifra.findIndex((line) =>
  line.includes("----------------- Acordes -----------------")
);
const mainCifra = restOfCifra.slice(0, chordsSectionIndex).join("\n\n");
const chords = restOfCifra.slice(chordsSectionIndex).join("\n\n");

export default function PraSempreComVocePage() {
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
